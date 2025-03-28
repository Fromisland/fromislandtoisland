import jQuery from 'jquery'
import 'jquery.ripples'

declare global {
  interface Window {
    $: JQueryStatic
    jQuery: JQueryStatic
  }
}

export default defineNuxtPlugin(nuxtApp => {
  // 確保只在客戶端執行
  if (process.client) {
    window.$ = window.jQuery = jQuery

    // 在 DOM 準備好後初始化 ripples
    nuxtApp.hook('app:mounted', () => {
      jQuery('.ripple-effect').ripples({
        resolution: 600,
        dropRadius: 24,
        perturbance: 0.007,
      })
    })

    // 清理函數
    nuxtApp.hook('page:transition:finish', () => {
      jQuery('.ripple-effect').ripples('destroy')
    })
  }
})
