import fs from 'fs-extra'
import path from 'path'

const rootDir = path.resolve(process.cwd(),'src')
const resolve = (...args) => {
  return path.resolve(__dirname, ...args)
}

/**
 * @name 获取侧边栏，通过传入菜单获取
 * 传入文件名字，将会读取文件夹名字
 * @param {String} dirname 
 * 示例：getFile('Vue')
 */
function getSidebar (menuArr) {
  const sidebar = {};
	menuArr.forEach(item => {
		sidebar[item.link] = [{
			text: item.text,
			// collapsable: false,
			items: getFile(item.text)
		}]
	})
  return sidebar;
}

function getFile (dirname) {
	// 获取文件夹里面的所有文件
	let fileList = fs.readdirSync(resolve(rootDir, 'frontend', dirname))
	// 去除index和文件夹
	fileList = fileList.filter(item => (!item.includes('index') && item.includes('.')))
	return fileList.map(item => {
    const fileName = item.replace(/\.md/, '');
    return {
      text: fileName,
      link: `/frontend/${dirname}/${fileName}`
    }
  })
}

/**
 * @name 通过传入的name名字去src获取对应的文件夹，并转换为menu下拉菜单
 * @param {String} dirname 
 * @return [{text: dirname, link: '/dirname'}]
 */
function byDirNameGetMenu(dirname){
	let fileList = fs.readdirSync(resolve(rootDir, dirname))
	return fileList.map(item => ({text: item, link: `/${dirname}/${item}/`}))
}

/**
 * 
 * @param filePath private
 * @returns [{
 * 	text: 'filename',
 *  link: /private/***.md
 * }]
 */
function recursionGetMenu(filePath){
	function getPrivateMenu(...args) {
		const privateLinks = fs.readdirSync(resolve(rootDir, ...args))
		const items: any[] = [];
		
		privateLinks.forEach(key => {
			const stats = fs.statSync(resolve(rootDir, ...args, key))
			if(stats.isDirectory()) {
				items.push({
					text: key,
					collapsed: false,
					items: getPrivateMenu(...args, key)
				})
			} else {
				const { name: text } = path.parse(key)
				// 过滤index
				if(text.includes('index')) return
				items.push({text, link: `/${args.join('/')}/${key}`})
			}
		})
		return items
	}
	const result = getPrivateMenu(filePath)
	// 有目录的排在前面
	return result.sort((a) => a.items ? -1 : 0)
}

// 通过文件夹获取菜单
const frontendLinks = byDirNameGetMenu('frontend')

// 获取frontend的左侧的sidebar
const sidebar = getSidebar(frontendLinks)
// 私人目录通过地址访问
sidebar['/private/'] = recursionGetMenu('private')

export { sidebar, frontendLinks };
