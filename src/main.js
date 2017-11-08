// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { AlertPlugin, ToastPlugin } from 'vux'
import AMap from 'vue-amap';
Vue.use(AMap);
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

Vue.config.productionTip = false

AMap.initAMapApiLoader({
  // 申请的高德key
  key: '966b5d600adf5f4b95f23dd8cda143b8',
  // 地图样式
  mapStyle: 'amap://styles/13a609e12b67f1e17b89e94a097dc5cc',
  // 插件集合
  plugin: ['Geolocation','Autocomplete', 'PlaceSearch', 'Scale', 'OverView', 'ToolBar', 'MapType', 'PolyEditor', 'AMap.CircleEditor']
});
/* eslint-disable no-new */

    
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
