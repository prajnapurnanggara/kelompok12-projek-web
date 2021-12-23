import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/user/Home.vue'
import Makanan from '../views/user/Makanan.vue'
import Pesananku from '../views/user/Pesananku.vue'
import DetailMakanan from '../views/user/DetailMakanan.vue'
import Pesanan from '../views/kasir/Pesanan.vue'
import EditMakanan from '../views/kasir/EditMakanan.vue'


const routes = [
  {
    path: '/home',
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
  },
  {
    path: '/pesanan',
    name: 'Pesanan',
    component: Pesanan
  },
  {
    path: '/editmakanan',
    name: 'EditMakanan',
    component: EditMakanan
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
