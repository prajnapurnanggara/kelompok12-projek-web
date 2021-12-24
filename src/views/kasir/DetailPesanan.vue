<template>
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
            <DetailCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../../components/kasir/NavbarKasir.vue";
import DetailCard from "../../components/kasir/DetailCard.vue";

export default {
  name: "DetailPesanan",
  components: {
    Navbar,
    DetailCard
  },
};
</script>
