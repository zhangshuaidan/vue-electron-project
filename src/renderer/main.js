import Vue from 'vue'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'

//VueHighcharts的配置
import VueHighcharts from 'vue-highcharts';


//实例化db库
import db from './datastore.js'
//引入socket.io配置连接

import VueSocketio from 'vue-socket.io';

// Vue.use(VueSocketio, 'http://118.123.14.36:3000');
		/* 其它代码 */
Vue.prototype.$db = db;
Vue.use(VueHighcharts);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
