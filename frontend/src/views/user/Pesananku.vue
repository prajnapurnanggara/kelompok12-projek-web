<template>
  <div>
    <div class="content">
      <Navbar />
      <div class="container">
        <div class="row mt-4">
          <div class="col">
            <h2>Pesananku</h2>
          </div>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Makanan</th>
                <th scope="col">Harga</th>
                <th scope="col">Jumlah</th>
                <th scope="col">Total Harga</th>
                <th scope="col">Catatan</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody v-for="keranjang in keranjangs" :key="keranjang.id">
              <tr>
                <td>
                  {{ keranjang.makanan }}
                </td>
                <td>Rp. {{ keranjang.harga }}</td>
                <td>{{ keranjang.jumlah }}</td>
                <td>Rp. {{ keranjang.harga * keranjang.jumlah }}</td>
                <td>{{ keranjang.catatan }}</td>
                <td>
                  <router-link
                    class="btn btn-icon btn-outline-danger"
                    :to="'/deletekeranjang/' + keranjang.id"
                    ><i class="fas fa-trash"></i
                  ></router-link>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><strong>Total : Rp 30.000</strong></td>
                <td></td>
              </tr>
            </tfoot>
          </table>

          <div class="row justify-content-end">
            <div class="col-3">
              <form>
                <div class="form-group mt-3">
                  <label><strong>ID Pesanan</strong></label>
                  <input type="Text" class="form-control mt-1" />
                </div>
                <div class="form-group mt-3">
                  <label><strong>Nama</strong></label>
                  <input type="Text" class="form-control mt-1" />
                </div>
                <div class="form-group mt-3">
                  <label><strong>Nomer Meja</strong></label>
                  <input type="number" class="form-control mt-1" />
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
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../../components/user/Navbar.vue";
import Footer from "@/components/user/Footer.vue";
import axios from "axios";

export default {
  name: "Pesananku",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      keranjangs: [],
      jumlah: [],
    };
  },
  datapesanan() {
    return {
      product: {
        idpesanan: "",
        makanan: "",
        harga: "",
        jumlah: "",
        totalharga: "",
      },
    };
  },
  methods: {
    setKeranjangs(data) {
      this.keranjangs = data;
    },
    addProduct() {
      const product = {
        idpesanan: this.product.idpesanan,
        nama: this.product.nama,
        jumlah: this.product.jumlah,
        totalharga: this.product.totalharga,
        catatan: this.product.catatan,
      };

      axios
        .post("http://localhost:8080/api/makananpesanan", product)
        .then((response) => this.$router.push("/home")(response))
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/keranjang/")
      .then((response) => this.setKeranjangs(response.data))
      .catch((error) => console.log("Gagal", error));
  },
};
</script>
