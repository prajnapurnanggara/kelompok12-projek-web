<template>
  <div>
    <div class="content">
      <Navbar />
      <div class="container">
        <div class="row mt-4">
          <div class="col">
            <router-link class="btn btn-md btn-warning" to="/pesanan"
              ><i class="fas fa-arrow-left"></i
            ></router-link>
          </div>
        </div>

        <div class="row mt-4 justify-content-center">
          <div class="col-md-12">
            <div class="card shadow detail-card">
              <div class="card-body">
                <h5 class="card-title"><strong>{{ pesanans.idpesanan }}</strong></h5>
                <hr />
                <form>
                  <div class="form-group mt-3">
                    <label><strong>Nama</strong></label>
                    <input type="text" class="form-control mt-1" v-model="pesanans.nama"/>
                  </div>
                  <div class="form-group mt-3">
                    <label><strong>No Meja</strong></label>
                    <input type="number" class="form-control mt-1" v-model="pesanans.nomeja"/>
                  </div>
                  <div class="form-group mt-3">
                    <label><strong>Status</strong></label>
                    <select id="Select" class="form-select mt-1" v-model="pesanans.status">
                      <option>Dipesan</option>
                      <option>Dibayar</option>
                      <option>Selesai</option>
                      <option>Cancel</option>
                    </select>
                  </div>
                  <div class="form-group mt-3">
                    <label><strong>Pesanan</strong></label>
                    <table class="table tabledetail mt-1">
                      <thead>
                        <tr>
                          <th scope="col" width="3%">#</th>
                          <th scope="col" width="15%">Makanan</th>
                          <th scope="col" width="10%">Harga</th>
                          <th scope="col" width="7%">Jumlah</th>
                          <th scope="col" width="15%">Total Harga</th>
                          <th scope="col" width="50%">Catatan</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td scope="col">1</td>
                          <td>Tipat Cantok</td>
                          <td>Rp 10.000</td>
                          <td>3</td>
                          <td>Rp 30.000</td>
                          <td>1 tanpa sayur kangkung, semuanya cabe 2</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td><strong>Total : Rp 30.000</strong></td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="submit" class="btn btn-dark mt-4">
                      Print
                    </button>
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

export default {
  name: "DetailPesanan",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      pesanans: [],
    };
  },
  methods: {
    setPesanans(data) {
      this.pesanans = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/pesanan/" + this.$route.params.id)
      .then((response) => this.setPesanans(response.data))
      .catch((error) => console.log("Gagal", error));
  },
};
</script>
