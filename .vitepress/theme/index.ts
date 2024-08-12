// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Nav from './pages/nav/nav.vue'
import Layout from './Layout.vue'
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'
import './style.css'

// 注册 vercel 监视器
inject()
injectSpeedInsights()

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('Nav', Nav)
  }
} satisfies Theme
