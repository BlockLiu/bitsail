export const siteData = JSON.parse("{\"base\":\"/bitsail/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"BitSail\",\"description\":\"BitSail\"},\"/zh/\":{\"lang\":\"zh-CN\",\"title\":\"BitSail\",\"description\":\"BitSail\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
