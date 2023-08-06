import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icons from '@/components/Icons.vue';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Icons', Icons);
Vue.component('Layout', Layout);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');



// 确保显示齐全
window.onload = function (){
    setTimeout(function(){
        window.scrollTo(0,1000)
    }, 0)
}

// window.addEventListener('load',()=>{
//     setTimeout(function(){
//         window.scrollTo(0,10000)
//     }, 0)
// })

console.log(screen.width)
// 二维码预览
if(document.documentElement.clientWidth  > 500  &&  document.body.clientWidth > 500 && window.innerWidth > 500 && screen.width > 500 ) {
    window.alert(`该应用主要面向移动端用户，推荐您请使用手机扫描内部右侧二维码 \n 使用，以保证浏览效果！(*^▽^*) \n
     \n 若您是开发人员，可以通过控制台调试进行查看，谢谢！(*^▽^*) `)
    const img = document.createElement('img')
    // img.src = require('../public/qrcode.png')
    img.src = './qrcode.png'
    img.style.width= '120px'
    img.style.height= '120px'
    img.style.position = 'fixed'
    img.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)'
    img.style.left = '70%'
    img.style.top = '34%'
    img.style.transform = 'translate(-50%,-50%)'
    document.body.appendChild(img)
}

