<template>
  <div>
    <div class="content">
      <Navbar />
      <div class="container">
        <div class="row mt-4">
          <div class="col">
            <router-link class="btn btn-md btn-warning" to="/makanan"
              ><i class="fas fa-arrow-left"></i
            ></router-link>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-md-6">
            <img
              :src="'assets/makanan/' + product.file"
              class="img-fluid shadow"
            />
          </div>
          <div class="col-md-6">
            <h2>
              <strong>{{ product.nama }}</strong>
            </h2>
            <h5 class="harga">
              Rp. {{ product.hargaasli }}
              <span class="harga-palsu">Rp. {{ product.hargapalsu }}</span>
            </h5>
            <hr />
            <p class="card-text">
              {{ product.deskripsi }}
            </p>
            <form @submit.prevent="addKeranjang">
              <div class="form-group mt-3">
                <label><strong>Jumlah Pesanan</strong></label>
                <input
                  type="number"
                  class="form-control mt-1"
                  id="jumlah"
                  name="jumlah"
                  v-model="item.jumlah"
                />
              </div>
              <div class="form-group mt-3">
                <label><strong>Catatan Untuk Pesanan</strong></label>
                <textarea
                  placeholder="Contoh: Tanpa sayur kangkung ya!"
                  class="form-control mt-1"
                  id="catatan"
                  name="catatan"
                  v-model="item.catatan"
                ></textarea>
              </div>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="submit" class="btn btn-warning mt-4">
                  Pesan Makanan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../../components/user/Navbar.vue";
import Footer from "../../components/user/Footer.vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "DetailMakanan",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      product: [],
      item: {
        id: "",
        makanan: "",
        harga: "",
        jumlah: "",
        catatan: "",
      },
    };
  },
  methods: {
    setProducts(data) {
      this.product = data;
      console.log(this.product);
    },
    addKeranjang() {
      const item = {
        id: this.product.id,
        makanan: this.product.nama,
        harga: this.product.hargaasli,
        jumlah: this.item.jumlah,
        catatan: this.item.catatan,
      };

      axios.post("http://localhost:8080/api/keranjang", item);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "success",
        title: "Makanan berhasil masuk keranjang",
      }).then((response) => this.$router.push("/makanan")(response));
    },
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/makanan/" + this.$route.params.id)
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log("Gagal", error));
  },
};
</script>
