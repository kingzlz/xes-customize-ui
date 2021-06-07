import goTop from './src'

goTop.install = function (Vue){
    Vue.component( goTop.name, goTop )
}

export default goTop