import { defineConfig } from 'vitepress'
import path from 'path'
import fs from 'fs'
import createReadme from './utils/createREADME'
import { frontendLinks, sidebar } from './utils/createSideBar'

const resolve = (...args) => {
  return path.resolve(__dirname, ...args)
}

createReadme('frontend')
createReadme('private')

const BASE_URL = process.argv.includes('--gitee') ? '/vite-note/' : '/';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "前端学习圈",
  description: "前端学习笔记个人记录",
  head: [
    ['link', { rel: 'icon', type: "image/x-icon", href: `${BASE_URL}favicon.ico` }],
		['link', { rel: 'manifest', href: `${BASE_URL}manifest.json` }],
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0'}],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
		['link', { rel: 'apple-touch-icon', href: `${BASE_URL}icons/apple-touch-icon-152x152.png` }],
		['link', { rel: 'mask-icon', href: `${BASE_URL}icons/safari-pinned-tab.svg`, color: '#3eaf7c' }],
		['meta', { name: 'msapplication-TileImage', content: `${BASE_URL}icons/msapplication-icon-144x144.png` }],
		['meta', { name: 'msapplication-TileColor', content: '#000000' }],
		['script', {}, fs.readFileSync(resolve('./share/hm.js'), 'utf-8')]
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      // 本地搜索
      provider: 'local'
    },

    editLink: {
      pattern: 'https://gitee.com/hnys/vite-note/edit/main/:path'
    },

    nav: [
			{ text: 'React', link: '/src/frontend/React/'},
			{ text: 'Vue', link: '/src/frontend/Vue/' },
			{ text: 'Node', link: '/src/frontend/node/' },
			{ text: 'Git', link: '/src/frontend/other/git' },
      { text: 'Other', link: '/src/frontend/other/' },
			{ text: 'Frontend', items: frontendLinks },
			{
				text: '友情链接', 
				items: [
					{text: '个人博客站', link: 'https://blog.hrhe.cn'}
				]
			}
    ],
    sidebar,
    outline: 'deep',

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/hnys/vite-note' }
    ],

    footer: {
      message: 'MIT Licensed',
      copyright: 'Copyright © 2022-备案号：京ICP备2022004926号-1'
    }
  }
})
