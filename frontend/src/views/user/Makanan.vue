<template>
  <div>
    <div class="content">
      <Navbar />
      <div class="container">
        <div class="row mt-4">
          <div class="col">
            <h2>Daftar Makanan</h2>
          </div>
        </div>

        <div class="row mb-3">
          <div
            class="col-md-3 mt-4"
            v-for="product in products"
            :key="product.id"
          >
            <ProductCard :product="product" />
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
import ProductCard from "../../components/user/ProductCard.vue";
import Footer from "@/components/user/Footer.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    ProductCard,
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
    searchFood() {
      axios
        .get("http://localhost:8080/api/makanan/nama/" + this.search)
        .then((response) => this.setProducts(response.data))
        .catch((error) => console.log("Gagal", error));
    },
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/makanan/menu")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log("Gagal", error));
  },
};
</script>
