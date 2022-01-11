<template>
  <div>
    <div class="content">
      <Navbar />
      <div class="container">
        <Hero />
        <div class="row mt-4 mb-2">
          <div class="col">
            <h2><strong>Makanan Terlaris</strong></h2>
          </div>
          <div class="col-2">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <router-link class="btn btn-md btn-warning" to="/makanan"
                >Lihat Semua <i class="fas fa-eye"></i
              ></router-link>
            </div>
          </div>
        </div>

        <div class="row mb-3">
          <div
            class="col-md-3 mt-4"
            v-for="product in products"
            :key="product.id"
          >
            <BestProductCard :product="product"  />
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
import Hero from "../../components/user/Hero.vue";
import BestProductCard from "../../components/user/BestProductCard.vue";
import Footer from "@/components/user/Footer.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    BestProductCard,
    Footer,
  },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/makanan/bestseller")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log("Gagal", error));
  },
};
</script>
