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
            <tbody>
              <tr v-for="keranjang in keranjangs" :key="keranjang.idpesanan">
                <td>
                  {{ keranjang.makanan }}
                </td>
                <td>Rp. {{ keranjang.harga }}</td>
                <td>{{ keranjang.jumlah }}</td>
                <td>Rp. {{ keranjang.harga * keranjang.jumlah }}</td>
                <td>{{ keranjang.catatan }}</td>
                <td>
                  <button
                    class="btn btn-icon btn-outline-danger"
                    @click="delPesanan(keranjang.id)"
                  >
                    <i class="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <strong>Total : Rp {{ total }}</strong>
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>

          <div class="row justify-content-end">
            <div class="col-3">
              <form @submit.prevent="addPesanan">
                <div class="form-group mt-3">
                  <label><strong>ID</strong></label>
                  <input
                    type="Text"
                    class="form-control mt-1"
                    :value="ids"
                    readonly
                  />
                </div>
                <div class="form-group mt-3">
                  <label><strong>Nama</strong></label>
                  <input
                    type="Text"
                    class="form-control mt-1"
                    id="nama"
                    name="nama"
                    v-model="pesanan.nama"
                  />
                </div>
                <div class="form-group mt-3">
                  <label><strong>Nomer Meja</strong></label>
                  <input
                    type="number"
                    class="form-control mt-1"
                    id="nomeja"
                    name="nomeja"
                    v-model="pesanan.nomeja"
                  />
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
import Swal from "sweetalert2";


export default {
  name: "Pesananku",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      pesanan: {
        idpesanan: "",
        nama: "",
        nomeja: "",
      },
      keranjangs: [],
      jumlah: [],
      ids: "",
      total: 0,
    };
  },

  methods: {
    setKeranjangs(data) {
      data.forEach((item) => {
        let items = {
          idid: "",
          idpesanan: this.ids,
          id: item.id,
          makanan: item.makanan,
          harga: item.harga,
          jumlah: item.jumlah,
          totalharga: item.harga * item.jumlah,
          catatan: item.catatan,
          total: this.total,
        };
        this.keranjangs.push(items);
      });
    },
    setLast(data) {
      this.ids = data[0].idpesanan + 1;
    },
    addPesanan() {
      this.keranjangs.forEach((item) => {
        console.log(item.id);
        axios
          .post("http://localhost:8080/api/makananpesanan", {
            idid: "",
            idpesanan: this.ids,
            id: item.id,
            makanan: item.makanan,
            harga: item.harga,
            jumlah: item.jumlah,
            totalharga: item.totalharga,
            catatan: item.catatan,
            total: this.total,
          })
          .then((response) => console.log(response))
          .catch(function (error) {
            console.log(error);
          });
      });
      const pesanan = {
        idpesanan: this.ids,
        nama: this.pesanan.nama,
        nomeja: this.pesanan.nomeja,
        status: "Dipesan",
      };
      axios.post("http://localhost:8080/api/pesanan", pesanan);
      axios.delete("http://localhost:8080/api/keranjang");
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Makananmu berhasil dipesan, silahkan ke kasir untuk melanjutkan pembayaran",
        timer: 4000,
      }).then((response) => this.$router.push("/home")(response));
    },
    setTotal() {
      this.keranjangs.forEach((item) => {
        this.total = parseInt(this.total + item.totalharga);
      });
    },
    delPesanan(id) {
      axios
        .delete(`http://localhost:8080/api/keranjang/${id}`)
        .then((response) => {
          if (response.status == 200) {
            this.$router.go(0);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/keranjang")
      .then((response) => {
        this.setKeranjangs(response.data);
        this.setTotal();
      })
      .catch((error) => console.log("Gagal", error));

    axios
      .get("http://localhost:8080/api/keranjang/last")
      .then((response) => this.setLast(response.data))
      .catch((error) => console.log("Gagal", error));

    this.setTotal();
  },
};
</script>
