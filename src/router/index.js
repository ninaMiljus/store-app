import Vue from 'vue'
import VueRouter from 'vue-router'
import Customers from '../views/AppCustomers.vue'
import Products from '../views/AppProducts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
  },
  {
    path: '/customers',
    name: 'customers',
    component: Customers 
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
