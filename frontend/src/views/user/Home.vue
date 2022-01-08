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
          <div class="col-md-3 mt-4">
            <BestProductCard />
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

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    BestProductCard,
    Footer,
  },
};
</script>
