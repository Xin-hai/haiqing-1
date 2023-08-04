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


if(document.documentElement.clientWidth > 500){
    window.alert('请使用手机打开此网站，以保证浏览效果')
    const img = document.createElement('img')
    img.src = '/qrcode.png'
    img.style.position = 'fixed'
    img.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)'
    img.style.left = '50%'
    img.style.top = '50%'
    img.style.transform = 'translate(-50%,-50%)'
    document.body.appendChild(img)
}

// window.onload = function(){
//     setTimeout(function(){
//         window.scrollTo(0,10000)
//     }, 3000)
// }