<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand">Pesan Makan</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/makanan">Makanan</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/pesananku"
              >Pesananku
              <span class="fas fa-shopping-cart"></span>
            </router-link>
          </li>
        </ul>
        <ul
          class="navbar-nav ml-auto"
          v-for="keranjang in keranjangs"
          :key="keranjang.id"
        >
          <li class="nav-item">
            <router-link class="nav-link" to="/pesananku">
              <span class="badge bg-warning">{{ keranjang.jumlah }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  name: "Navbar",

  data() {
    return {
      keranjangs: [],
    };
  },
  methods: {
    setKeranjangs(data) {
      this.keranjangs = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/keranjang/jumlah")
      .then((response) => this.setKeranjangs(response.data))
      .catch((error) => console.log("Gagal", error));
  },
};
</script>