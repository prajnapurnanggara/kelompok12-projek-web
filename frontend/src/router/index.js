import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/user/Home.vue'
import Makanan from '../views/user/Makanan.vue'
import Pesananku from '../views/user/Pesananku.vue'
import DetailMakanan from '../views/user/DetailMakanan.vue'
import Pesanan from '../views/kasir/Pesanan.vue'
import Dibayar from '../views/kasir/Dibayar.vue'
import Selesai from '../views/kasir/Selesai.vue'
import EditMakanan from '../views/kasir/EditMakanan.vue'
import DetailPesanan from '../views/kasir/DetailPesanan.vue'
import FormEditMakanan from '../views/kasir/FormEditMakanan.vue'
import TambahMakanan from '../views/kasir/TambahMakanan.vue'
import LoginKasir from '../views/kasir/LoginKasir.vue'


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
  },
  {
    path: '/dibayar',
    name: 'Dibayar',
    component: Dibayar  
  },
  {
    path: '/selesai',
    name: 'Selesai',
    component: Selesai  
  },
  {
    path: '/detailpesanan',
    name: 'DetailPesanan',
    component: DetailPesanan  
  },
  {
    path: '/formeditmakanan',
    name: 'FormEditMakanan',
    component: FormEditMakanan  
  },
  {
    path: '/tambahmakanan',
    name: 'TambahMakanan',
    component: TambahMakanan  
  },
  {
    path: '/loginkasir',
    name: 'LoginKasir',
    component: LoginKasir  
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
