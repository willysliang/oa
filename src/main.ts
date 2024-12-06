/**
 * @ Author: willysliang
 * @ CreateTime: 2024-12-06 11:44:30
 * @ Modifier: willysliang
 * @ ModifierTime: 2024-12-06 17:18:48
 * @ Description: 入口文件
 */

import { createSSRApp } from 'vue'
import App from './App.vue'
import '@/styles/index.scss'

export function createApp() {
  const app = createSSRApp(App)

  return {
    app,
  }
}
