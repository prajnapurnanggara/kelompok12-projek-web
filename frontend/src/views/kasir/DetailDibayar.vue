<template>
  <div>
    <div class="content">
      <Navbar />
      <div class="container">
        <div class="row mt-4">
          <div class="col">
            <router-link class="btn btn-md btn-warning" to="/dibayar"
              ><i class="fas fa-arrow-left"></i
            ></router-link>
          </div>
        </div>

        <div class="row mt-4 justify-content-center">
          <div class="col-md-12">
            <div class="card shadow detail-card">
              <div class="card-body">
                <h5 class="card-title">
                  <strong>ID Pesanan : {{ pesanans.idpesanan }}</strong>
                </h5>
                <hr />
                <form @submit.prevent="upPesanans">
                  <div class="form-group mt-3">
                    <label><strong>Nama</strong></label>
                    <input
                      type="text"
                      class="form-control mt-1"
                      v-model="pesanans.nama"
                    />
                  </div>
                  <div class="form-group mt-3">
                    <label><strong>No Meja</strong></label>
                    <input
                      type="number"
                      class="form-control mt-1"
                      v-model="pesanans.nomeja"
                    />
                  </div>
                  <div class="form-group mt-3">
                    <label><strong>Status</strong></label>
                    <select
                      id="Select"
                      class="form-select mt-1"
                      v-model="pesanans.status"
                    >
                      <option>Dipesan</option>
                      <option>Dibayar</option>
                      <option>Selesai</option>
                      <option>Cancel</option>
                    </select>
                  </div>
                  <div class="form-group mt-3">
                    <label><strong>Pesanan</strong></label>
                    <table class="table table-hover mt-1">
                      <thead>
                        <tr>
                          <th scope="col" width="15%">Makanan</th>
                          <th scope="col" width="10%">Harga</th>
                          <th scope="col" width="7%">Jumlah</th>
                          <th scope="col" width="15%">Total Harga</th>
                          <th scope="col" width="50%">Catatan</th>
                        </tr>
                      </thead>
                      <tbody v-for="makanan in makanans" :key="makanan.idid">
                        <tr>
                          <td>{{ makanan.makanan }}</td>
                          <td>Rp. {{ makanan.harga }}</td>
                          <td>{{ makanan.jumlah }}</td>
                          <td>Rp. {{ makanan.totalharga }}</td>
                          <td>{{ makanan.catatan }}</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <strong>Total : {{ totals.total }}</strong>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
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
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "DetailPesanan",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      pesanans:{
        idpesanan: "",
        nama: "",
        status: ""
      },
      makanans: [],
      totals: '',
    };
  },
  methods: {
    setPesanans(data) {
      this.pesanans = data;
    },
    setMakanans(data) {
      this.makanans = data;
    },
    setTotals(data) {
      this.totals = data;
    },

    upPesanans() {
      const pesanans = {
        idpesanan: this.pesanans.idpesanan,
        nama: this.pesanans.nama,
        nomeja: this.pesanans.nomeja,
        status: this.pesanans.status,
      };

      axios
        .put(
          `http://localhost:8080/api/pesanan/${this.$route.params.id}`,
          pesanans
        );
        Swal.fire({
        icon: "success",
        title: "Pesanan berhasil diubah",
        confirmButtonText: "Ok",
      }).then((response) => this.$router.push("/dibayar")(response));
    },
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/pesanan/" + this.$route.params.id)
      .then((response) => this.setPesanans(response.data))
      .catch((error) => console.log("Gagal", error));

    axios
      .get("http://localhost:8080/api/makananpesanan/" + this.$route.params.id)
      .then((response) => this.setMakanans(response.data))
      .catch((error) => console.log("Gagal", error));

    axios
      .get(
        "http://localhost:8080/api/makananpesanan/total/" +
          this.$route.params.id
      )
      .then((response) => this.setTotals(response.data))
      .catch((error) => console.log("Gagal", error));
      
  },
};
</script>
