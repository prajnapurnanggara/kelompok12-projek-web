<template>
  <div class="card shadow product-card">
    <img
      class="card-img-top"
      :src="'assets/makanan/'+product.file"
      height="180"
    >
    <div class="card-body">
      <h5 class="card-title"><strong>{{ product.nama }}</strong></h5>
      <h5 class="harga-card">Rp. {{ product.hargaasli }} <span class="harga-palsu">Rp. {{ product.hargapalsu }}<br></span></h5>
      <p class="card-text card-deskripsi">
            {{ product.deskripsi }}
      </p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <router-link class="btn btn-warning" type="button" :to="'/makanan/'+product.id">Pesan</router-link>
      </div>
    </div>
  </div>
</template>s

<script>
export default {
  name : 'ProductCard',
  props : ['product']
};
</script>