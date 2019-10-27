import Vue from 'vue'
import Router from 'vue-router'
import '../assets/css/border.css'
import '../assets/css/reset.css'
import '../assets/css/liucheng.css'
import '../assets/css/iconfont.css'

Vue.use(Router)
import home from '../pages/home'
import gongyue from '../pages/gongyue'
import form from '../pages/form'
import success from '../pages/success'
export default new Router({
  routes: [
    {path: '/',component: home},
    {path: '/home',component: home},
	  {path: '/gongyue',component: gongyue},
		{path: '/form',component: form},
		{path: '/success',component: success}
  ]
})
