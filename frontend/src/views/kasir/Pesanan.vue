<template>
  <div>
    <div class="content">
      <NavbarKasir />
      <div class="container">
        <div class="row mt-4 mb-2">
          <div class="col">
            <h2>Pesanan - Dipesan</h2>
            <div class="d-grid gap-2 d-md-flex justify-content-md-center mt-4">
              <div class="btn-group" role="group" aria-label="Basic example">
                <router-link class="btn btn-warning" to="/pesanan"
                  >Dipesan</router-link
                >
                <router-link class="btn btn-warning" to="/dibayar"
                  >Dibayar</router-link
                >
                <router-link class="btn btn-warning" to="/selesai"
                  >Selesai</router-link
                >
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
            <tbody v-for="pesanan in pesanans" :key="pesanan.idpesanan">
              <tr>
                <th scope="row">1</th>
                <td>{{ pesanan.idpesanan }}</td>
                <td>{{ pesanan.nama }}</td>
                <td>{{ pesanan.nomeja }}</td>
                <td>
                  <span class="badge rounded-pill bg-warning text-dark">
                    {{ pesanan.status }}
                  </span>
                </td>
                <td>
                  <router-link
                    class="btn btn-icon btn-outline-dark"
                    :to="'/pesanan/'+pesanan.idpesanan"
                    ><i class="fas fa-pencil-alt"></i
                  ></router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarKasir from "../../components/kasir/NavbarKasir.vue";
import Footer from "@/components/user/Footer.vue";
import axios from "axios";

export default {
  name: "Pesanan",
  components: {
    NavbarKasir,
    Footer,
  },
  data() {
    return {
      pesanans: []
    };
  },
  methods: {
    setPesanans(data) {
      this.pesanans = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/pesanan/dipesan")
      .then((response) => this.setPesanans(response.data))
      .catch((error) => console.log("Gagal", error));
  },
};
</script>