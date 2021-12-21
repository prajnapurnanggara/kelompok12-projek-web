<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Daftar Makanan</h2>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-6">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Mau makan apa hari ini?"
              aria-label="Mau makan apa hari ini?"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-warning"
              type="button"
              id="button-addon2"
            >
            Cari
            </button>
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
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    ProductCard,
  },
};
</script>
