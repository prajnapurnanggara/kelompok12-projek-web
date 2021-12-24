<template>
  <div class="content">
    <NavbarKasir />
    <div class="container">
      <div class="row mt-4 mb-2">
        <div class="col">
          <h2>Pesanan - Dipesan</h2>
          <div class="d-grid gap-2 d-md-flex justify-content-md-center mt-4">
            <div class="btn-group" role="group" aria-label="Basic example">
              <router-link class="btn btn-warning" to="/pesanan">Dipesan</router-link>
              <router-link class="btn btn-warning" to="/dibayar">Dibayar</router-link>
              <router-link class="btn btn-warning" to="/selesai">Selesai</router-link>
            </div>
          </div>
        </div>
        <table class="table table-hover mt-2">
          <thead>
            <tr>
              <th scope="col" width="2%">#</th>
              <th scope="col">ID Pesanan</th>
              <th scope="col">Nama</th>
              <th scope="col" width="10%">No Meja</th>
              <th scope="col">Status</th>
              <th scope="col" width="2%"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>PSN001</td>
              <td>Otto</td>
              <td>12</td>
              <td>
                <span class="badge rounded-pill bg-warning text-dark"
                  >Dipesan</span
                >
              </td>
              <td>
                <router-link class="btn btn-icon btn-outline-dark" to="/detailpesanan"><i class="fas fa-pencil-alt"></i
                ></router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import NavbarKasir from "../../components/kasir/NavbarKasir.vue";
import Footer from "@/components/user/Footer.vue";

export default {
  name: "Pesanan",
  components: {
    NavbarKasir,
    Footer
  },
};
</script>

<style>
</style>