import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Makanan from '../views/Makanan.vue'
import Pesananku from '../views/Pesananku.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/makanan',
    name: 'Makanan',
    component: Makanan
  },
  {
    path: '/pesananku',
    name: 'Pesananku',
    component: Pesananku
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
