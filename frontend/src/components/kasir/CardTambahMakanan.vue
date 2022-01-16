<template>
  <div class="card shadow detail-card">
    <div class="card-body">
      <h5 class="card-title"><strong>Tambah Makanan</strong></h5>
      <hr />
      <form @submit.prevent="addProduct">
        <div class="form-group mt-3">
          <label for="id"><strong>ID</strong></label>
          <input
            type="number"
            class="form-control mt-1" required
            :value="ids+1" readonly
          />
        </div>
        <div class="form-group mt-3">
          <label for="nama"><strong>Nama</strong></label>
          <input
            type="text"
            class="form-control mt-1" required
            id="nama"
            name="nama"
            v-model="product.nama"
          />
        </div>
        <div class="form-group mt-3">
          <label for="deskripsi"><strong>Deskripsi</strong></label>
          <textarea
            class="form-control mt-1" required
            id="deskripsi"
            name="deskripsi"
            v-model="product.deskripsi"
          ></textarea>
        </div>
        <div class="form-group mt-3">
          <label for="hargaasli"><strong>Harga Asli</strong></label>
          <input
            type="number"
            class="form-control mt-1" required
            id="hargaasli"
            name="hargaasli"
            v-model="product.hargaasli"
          />
        </div>
        <div class="form-group mt-3">
          <label for="hargapalsu"><strong>Harga Palsu</strong></label>
          <input
            type="number"
            class="form-control mt-1" required
            id="hargapalsu"
            name="hargapalsu"
            v-model="product.hargapalsu"
          />
        </div>
        <div class="form-group mt-3">
          <label for="status"><strong>Status</strong></label>
          <select
            id="Select"
            class="form-select mt-1" required
            name="status"
            v-model="product.status"
          >
            <option>Best Seller</option>
            <option>Tersedia</option>
            <option>Habis</option>
          </select>
        </div>
        <div class="form-group mt-3">
          <label><strong>Foto</strong></label
          ><br />

          <label class="btn-sm btn-warning mt-2"
            ><strong>Upload Foto</strong>
            <input
              class="form-control upload" required
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
          <button type="submit" class="btn btn-warning mt-4">Tambah</button>
        </div>
      </form>
    </div>
  </div>
</template>s

<script>
import axios from "axios";

export default {
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
      ids: ""
    };
  },
  

  methods: {
    addProduct() {
      const product = {
        id: this.ids,
        nama: this.product.nama,
        deskripsi: this.product.deskripsi,
        hargaasli: this.product.hargaasli,
        hargapalsu: this.product.hargapalsu,
        status: this.product.status,
        file: this.file,
      };

      axios
        .post("http://localhost:8080/api/makanan", product)
        .then((response) => this.$router.push ("/editmakanan") (response))
        .catch(function (error) {
          console.log(error);
        });
    },
    onFileSelected(e) {
      this.file = e.target.files[0].name;
      console.log(typeof this.files);
    },
    setLast(data) {
      this.ids = data[0].id;
    },
  },

  mounted() {
    axios
      .get("http://localhost:8080/api/makanan/last")
      .then((response) => this.setLast(response.data))
      .catch((error) => console.log("Gagal", error));
  },
};
</script>