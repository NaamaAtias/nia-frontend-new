import Vue from 'vue';
import app from './app.vue';
import { router } from './router';
import { store } from './store/store';
import './assets/styles/main.scss';
import './registerServiceWorker';
import * as VueGoogleMaps from 'vue2-google-maps';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyA2XnbmxfEtsfeB8ParcRgSibnkhf-F_GU',
        libraries: 'places',
    },
});

new Vue({
    router,
    store,
    render: (h) => h(app),
}).$mount('#app');
