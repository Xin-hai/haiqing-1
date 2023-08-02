import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icons from '@/components/Icons.vue';
import TagListModel from '@/models/tagListModel';

Vue.config.productionTip = false;

Vue.component('Nav', Nav)
Vue.component('Icons',Icons)
Vue.component('Layout', Layout)

window.tagList = TagListModel.fetch()

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
