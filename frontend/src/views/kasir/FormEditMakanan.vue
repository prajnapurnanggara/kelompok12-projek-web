<template>
<div>
  <div class="content">
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <router-link class="btn btn-md btn-warning" to="/editmakanan"
            ><i class="fas fa-arrow-left"></i
          ></router-link>
        </div>
      </div>

      <div class="row mt-4 justify-content-center">
        <div class="col-md-12">
          <div class="card shadow detail-card">
            <div class="card-body">
              <h5 class="card-title"><strong>Detail Makanan</strong></h5>
              <hr />
              <form>
                <div class="form-group mt-3">
                  <label><strong>Nama</strong></label>
                  <input type="text" class="form-control mt-1" v-model="product.nama">
                </div>
                <div class="form-group mt-3">
                  <label><strong>Deskripsi</strong></label>
                  <textarea class="form-control mt-1" v-model="product.deskripsi"></textarea>
                </div>
                <div class="form-group mt-3">
                  <label><strong>Harga Asli</strong></label>
                  <input type="number" class="form-control mt-1" v-model="product.hargaasli">
                </div>
                <div class="form-group mt-3">
                  <label><strong>Harga Palsu</strong></label>
                  <input type="number" class="form-control mt-1" v-model="product.hargapalsu">
                </div>
                <div class="form-group mt-3">
                  <label><strong>Upload</strong></label>
                  <input type="number" class="form-control mt-1" />
                </div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button type="submit" class="btn btn-warning mt-4">
                    Ubah
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../../components/kasir/NavbarKasir.vue";
import Footer from "@/components/user/Footer.vue";
import axios from 'axios';

export default {
  name: "FormEditMakanan",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      product: []
    };
  },
  methods: {
    setProducts(data) {
      this.product = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/makanan/"+this.$route.params.id)
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log("Gagal", error));
  },
};
</script>
