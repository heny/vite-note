import { HeadConfig } from 'vitepress'

const BASE_URL = process.argv.includes('--gitee') ? '/vite-note/' : '/';

export default [
  ['link', { rel: 'icon', type: "image/x-icon", href: `${BASE_URL}favicon.ico` }],
  ['link', { rel: 'manifest', href: `${BASE_URL}manifest.json` }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['link', { rel: 'apple-touch-icon', href: `${BASE_URL}icons/apple-touch-icon-152x152.png` }],
  ['link', { rel: 'mask-icon', href: `${BASE_URL}icons/safari-pinned-tab.svg`, color: '#3eaf7c' }],
  ['meta', { name: 'msapplication-TileImage', content: `${BASE_URL}icons/msapplication-icon-144x144.png` }],
  ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
] as HeadConfig[]