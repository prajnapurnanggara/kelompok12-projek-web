<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />

      <div class="row mt-4 mb-2">
        <div class="col">
          <h2><strong>Makanan Terlaris</strong></h2>
        </div>
        
        <div class="col-5"></div>
        <div class="col-2">
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <a class="btn btn-warning" type="button">Lihat Semua
              <i class="fas fa-eye"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-3 mt-4">
          <ProductCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    ProductCard,
  },
};
</script>
