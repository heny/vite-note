import { defineConfig } from 'vitepress'
import head from './config/head'
import createReadme from './utils/createREADME'
import { frontendLinks, sidebar } from './utils/createSideBar'

createReadme('frontend')
createReadme('private')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Code Garden",
  description: "Personal Records of Frontend Learning Notes",
  head,
  lastUpdated: true,
  rewrites: {
    'src/(.*)': '(.*)',
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      // 本地搜索
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/heny/vite-note/edit/main/:path'
    },

    nav: [
      { text: 'React', link: '/frontend/React/'},
			{ text: 'Vue', link: '/frontend/Vue/' },
			{ text: 'Node', link: '/frontend/node/' },
			{ text: 'Git', link: '/frontend/other/git' },
      { text: 'Other', link: '/frontend/other/' },
			{ text: 'Frontend', items: frontendLinks },
			{
				text: '友情链接', 
				items: [
					{text: '个人博客站', link: 'https://blog.hrhe.cn'}
				]
			}
    ],
    sidebar,
    outline: {
      level: 'deep',
      label: '页面导航'
    },

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
      { icon: 'github', link: 'https://github.com/heny/vite-note' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-备案号：京ICP备2022004926号-1'
    }
  }
})
