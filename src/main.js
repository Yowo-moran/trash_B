import Vue from 'vue'
import App from './App.vue'
import VueAMap from 'vue-amap';
import router from './router'
// import { 
//   Button,
//   Select ,
//   Menu,
//   Submenu,
//   MenuItem,
//   MenuItemGroup,
// } from 'element-ui';
// Vue.use(Button,Select,Menu,Submenu, MenuItem,MenuItemGroup)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'your amap key',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
