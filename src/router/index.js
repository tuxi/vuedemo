import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      'path': '/',
      'component': Index
    }, {
      'path': '/content/:id', // 为什么使用id，因为我们的内容页面是要展示N条内容的，我们如何来区分这些内容呢，就是根据id来进行区分
      component: Content
    }
  ]
})
