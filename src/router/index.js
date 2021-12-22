import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/user/Home.vue'
import Makanan from '../views/user/Makanan.vue'
import Pesananku from '../views/user/Pesananku.vue'
import DetailMakanan from '../views/user/DetailMakanan.vue'

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
  },
  {
    path: '/detailmakanan',
    name: 'DetailMakanan',
    component: DetailMakanan
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
