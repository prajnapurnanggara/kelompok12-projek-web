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
                <form @submit.prevent="upProduct">
                  <div class="form-group mt-3">
                    <label for="id"><strong>ID</strong></label>
                    <input
                      type="text"
                      class="form-control mt-1"
                      id="id"
                      name="id"
                      v-model="product.id"
                      readonly
                    />
                  </div>
                  <div class="form-group mt-3">
                    <label for="nama"><strong>Nama</strong></label>
                    <input
                      type="text"
                      class="form-control mt-1"
                      id="nama"
                      name="nama"
                      v-model="product.nama"
                    />
                  </div>
                  <div class="form-group mt-3">
                    <label for="deskripsi"><strong>Deskripsi</strong></label>
                    <textarea
                      class="form-control mt-1"
                      id="deskripsi"
                      name="deskripsi"
                      v-model="product.deskripsi"
                    ></textarea>
                  </div>
                  <div class="form-group mt-3">
                    <label for="hargaasli"><strong>Harga Asli</strong></label>
                    <input
                      type="number"
                      class="form-control mt-1"
                      id="hargaasli"
                      name="hargaasli"
                      v-model="product.hargaasli"
                    />
                  </div>
                  <div class="form-group mt-3">
                    <label for="hargapalsu"><strong>Harga Palsu</strong></label>
                    <input
                      type="number"
                      class="form-control mt-1"
                      id="hargapalsu"
                      name="hargapalsu"
                      v-model="product.hargapalsu"
                    />
                  </div>
                  <div class="form-group mt-3">
                    <label><strong>Status</strong></label>
                    <select
                      id="Select"
                      class="form-select mt-1"
                      v-model="product.status"
                    >
                      <option>Best Seller</option>
                      <option>Tersedia</option>
                      <option>Habis</option>
                    </select>
                  </div>
                  <div class="form-group mt-3">
                    <label><strong>Foto</strong></label>
                    <br />
                    <img
                      :src="'assets/makanan/' + product.file"
                      width="300"
                      class="img-fluid shadow"
                    />
                    <br />
                    <label class="btn-sm btn-warning mt-2"
                      ><strong>Upload Foto</strong>
                      <input
                        class="form-control upload"
                        type="file"
                        name="file"
                        id="file"
                        @change="onFileSelected"
                      />
                    </label>
                    <span>
                      {{ file }}
                    </span>
                  </div>
                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button
                      type="button"
                      class="btn btn-danger btn-delete mt-4"
                      @click="delProduct"
                    >
                      <strong>Delete</strong>
                    </button>
                    <button type="submit" class="btn btn-warning mt-4">
                      <strong>Ubah</strong>
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
  name: "FormEditMakanan",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      product: {
        id: "",
        nama: "",
        deskripsi: "",
        hargaasli: "",
        hargapalsu: "",
        status: "",
      },
      file: "",
    };
  },
  methods: {
    setProducts(data) {
      this.product = data;
    },
    upProduct() {
      const product = {
        id: this.product.id,
        nama: this.product.nama,
        deskripsi: this.product.deskripsi,
        hargaasli: this.product.hargaasli,
        hargapalsu: this.product.hargapalsu,
        status: this.product.status,
        file: this.file,
      };

      axios
        .put(
          `http://localhost:8080/api/makanan/${this.$route.params.id}`,
          product
        )
        Swal.fire({
        icon: "success",
        title: "Makanan Berhasil Diubah",
        confirmButtonText: "Ok"
      }).then((response) => this.$router.push("/editmakanan")(response));
    },
    onFileSelected(e) {
      this.file = e.target.files[0].name;
      console.log(typeof this.files);
    },
    delProduct() {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-primary",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: "Yakin ingin menghapus makanan?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Delete",
          cancelButtonText: "Cancel",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            axios
              .delete(`http://localhost:8080/api/makanan/${this.$route.params.id}`)
              .then(() => {
                swalWithBootstrapButtons.fire(
                  "Terhapus!",
                  "Makanan berhasil dihapus",
                  "success"
                );
              this.$router.push("/editmakanan")
              })
              .catch((err) => console.log(err));
          } else if (
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Dibatalkan",
              "Makananmu masih aman",
              "error"
            );
          }
        });
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
