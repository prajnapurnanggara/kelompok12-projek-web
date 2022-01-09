<template>
  <div>
    <div class="content">
      <NavbarKasir />
      <div class="container">
        <div class="row mt-4 mb-2">
          <div class="col">
            <h2>Edit Makanan</h2>
            <router-link class="btn btn-md btn-warning mt-4" to="/tambahmakanan"
              >Tambah Makanan</router-link
            >
          </div>
          <table class="table table-hover mt-2" @submit.prevent="delProduct">
            <thead>
              <tr>
                <th scope="col" width="3%">ID</th>
                <th scope="col" width="17%"></th>
                <th scope="col" width="10%">Nama</th>
                <th scope="col" width="40%">Deskripsi</th>
                <th scope="col" width="10%">Harga Asli</th>
                <th scope="col" width="10%">Harga Palsu</th>
                <th scope="col" width="10%"></th>
              </tr>
            </thead>
            <tbody v-for="product in products" :key="product.id">
              <tr>
                <th scope="row">{{ product.id }}</th>
                <td>
                  <img
                    :src="'assets/makanan/' + product.file"
                    width="200"
                    class="img-fluid shadow"
                  />
                </td>
                <td>{{ product.nama }}</td>
                <td>
                  {{ product.deskripsi }}
                </td>
                <td>Rp. {{ product.hargaasli }}</td>
                <td>Rp. {{ product.hargapalsu }}</td>
                <td>
                  <router-link
                    class="btn btn-icon btn-outline-dark"
                    :to="'/editmakanan/' + product.id"
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
  name: "EditMakanan",
  components: {
    NavbarKasir,
    Footer,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    delProducts(data) {
      axios.delete("http://localhost:8080/api/makanan/", data);
    },
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/makanan")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log("Gagal", error));
  },
};
</script>