import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '../views/user/Home.vue'
import Makanan from '../views/user/Makanan.vue'
import Pesananku from '../views/user/Pesananku.vue'
import DeleteKeranjang from '../views/user/DeleteKeranjang.vue'
import DetailMakanan from '../views/user/DetailMakanan.vue'
import Pesanan from '../views/kasir/Pesanan.vue'
import Dibayar from '../views/kasir/Dibayar.vue'
import Selesai from '../views/kasir/Selesai.vue'
import Cancel from '../views/kasir/Cancel.vue'
import EditMakanan from '../views/kasir/EditMakanan.vue'
import DetailPesanan from '../views/kasir/DetailPesanan.vue'
import DetailDibayar from '../views/kasir/DetailDibayar.vue'
import DetailSelesai from '../views/kasir/DetailSelesai.vue'
import DetailCancel from '../views/kasir/DetailCancel.vue'
import FormEditMakanan from '../views/kasir/FormEditMakanan.vue'
import TambahMakanan from '../views/kasir/TambahMakanan.vue'


const routes = [{
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
      path: '/makanan/:id',
      name: 'DetailMakanan',
      component: DetailMakanan
    },
    {
      path: '/deletekeranjang/:id',
      name: 'DeleteKeranjang',
      component: DeleteKeranjang
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
      path: '/cancel',
      name: 'Cancel',
      component: Cancel
    },
    {
      path: '/pesanan/:id',
      name: 'DetailPesanan',
      component: DetailPesanan
    },
    {
      path: '/dibayar/:id',
      name: 'DetailDibayar',
      component: DetailDibayar
    },
    {
      path: '/selesai/:id',
      name: 'DetailSelesai',
      component: DetailSelesai
    },
    {
    path: '/cancel/:id',
    name: 'DetailCancel',
    component: DetailCancel
  },
  {
    path: '/editmakanan/:id',
    name: 'FormEditMakanan',
    component: FormEditMakanan
  }, {
    path: '/tambahmakanan',
    name: 'TambahMakanan',
    component: TambahMakanan
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router