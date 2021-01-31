const path = require('path')
const fs = require('fs')
const shell = require('shelljs')
const createREADME = require('../../scripts/createREADME')

const resolve = (...args) => {
	return path.resolve(__dirname, ...args)
}

const sidebar = {}
const DOCS_ROOT_DIR = path.resolve(process.cwd(), 'docs', 'src');

/**
 * @name 获取侧边栏，通过传入菜单获取
 * 传入文件名字，将会读取文件夹名字
 * @param {String} dirname 
 * 示例：getFile('Vue')
 */
function getSidebar (menuArr) {
	menuArr.forEach(item => {
		sidebar[item.link] = [{
			text: item.text,
			// collapsable: false,
			children: getFile(item.text)
		}]
	})
}

/**
 * 传入文件名字，将会读取文件夹名字
 * @param {String} dirname 
 * 示例：getFile('Vue')
 */
function getFile (dirname) {
	// 获取文件夹里面的所有文件
	let fileList = fs.readdirSync(resolve(DOCS_ROOT_DIR, 'frontend', dirname))
	// 去除index和文件夹
	fileList = fileList.filter(item => (!item.includes('index') && item.includes('.')))
	return fileList.map(item => {
    const fileName = item.replace(/\.md/, '');
    return {
      text: fileName,
      link: `/src/frontend/${dirname}/${fileName}`
    }
  })
}

/**
 * @name 通过传入的name名字去src获取对应的文件夹，并转换为menu下拉菜单
 * @param {String} dirname 
 * @return [{text: dirname, link: '/src/dirname'}]
 */
function byDirNameGetMenu(dirname){
	let fileList = fs.readdirSync(resolve(DOCS_ROOT_DIR, dirname))
	return fileList.map(item => ({text: item, link: `/src/${dirname}/${item}/`}))
}

// 通过文件夹获取菜单
const webItems = byDirNameGetMenu('frontend')
// 获取frontend的左侧的sidebar
getSidebar(webItems)
// 生成首页README.md的目录
createREADME('frontend')

module.exports = {
	title: '前端学习圈',
	description: 'vitePress生成的博客网站',
	// theme: require.resolve('./theme/'),
	head: [
		['link', { rel: 'icon', type: "image/x-icon", href: 'https://notecdn.heny.vip/favicon.ico' }],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0'}],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
		['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
		['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
		['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
		['meta', { name: 'msapplication-TileColor', content: '#000000' }],
		// ['meta', {'http-equiv': "Content-Security-Policy", content: "default-src 'self' *.heny.vip; style-src *; img-src *"}],
		// ['script', {src: 'https://res.wx.qq.com/open/js/jweixin-1.6.0.js'}],
		// ['script', {}, shell.cat(resolve('sharewx.js'))],
		// ['script', {}, 'shareWeixin()'],
		['script', {}, shell.cat(resolve('./share/hm.js'))]
	],
	plugins: [
		require('./plugin/copy'),
		// [ //! 目前有bug
    //   'vuepress-plugin-comment',
    //   {
    //     choosen: 'valine', 
    //     // options选项中的所有参数，会传给Valine的配置
    //     options: {
    //       el: '#valine-vuepress-comment',
    //       appId: 'bbMamizQoA0004uLOKmkyvD9-gzGzoHsz',
		// 			appKey: 'jSYWVrEz7weGKeHkdmDUVkvx',
		// 			visitor: false
    //     }
    //   }
    // ]
		// require('./reading-progress')
	],
	themeConfig:{
		repo: 'heny/h-note',
		repoLabel: 'GitHub',
		docsBranch: 'master',
		editLinks: true,
		editLinkText: '在GitHub上编辑此页',
		lastUpdated: '上次更新：', // 前缀使用
		// smoothScroll: true,
		algolia: {
			// apiKey: '5afb4b8f5b191b92841aed8afa044013',
			// indexName: 'heny_h-note',
			apiKey: '75033b31cce2d60aef3adfe4df1dbb4c',
			indexName: 'heny_h-web'
		},
		nav:[
			{ text: 'React', link: '/src/frontend/React/'},
			{ text: 'Vue', link: '/src/frontend/Vue/' },
			{ text: 'node', link: '/src/frontend/node/' },
			{ text: 'git', link: '/src/frontend/其他笔记/git' },
			{ text: 'frontend', items: webItems },
			{
				text: '友情链接', 
				items: [
					// {text: '自定义页面', link: '/custom/'},
					{text: '消息传输站', link: 'https://chat.heny.vip'},
					{text: '个人博客站', link: 'https://blog.hrhe.cn'}
				]
			}
			// { text: '编辑器', link: '/src/editor/' }
		],
    sidebarDepth: 2,  //仅支持h2和h3标题
		sidebar
	}
}
// 优秀的文章
// https://zhb333.github.io/readme-blog/2020/03/21/vuepress%E5%BC%80%E5%8F%91%E9%9D%99%E6%80%81%E5%8D%9A%E5%AE%A2/
