import xesImageViewer from './src'

xesImageViewer.install = function (Vue) {
  Vue.component( xesImageViewer.name, xesImageViewer )
}

export default xesImageViewer