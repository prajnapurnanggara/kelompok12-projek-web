<template>
  <div class="card shadow product-card">
    <img
      class="card-img-top"
      src="https://i.ytimg.com/vi/9qYtYm7HddM/maxresdefault.jpg"
      alt="Card image cap"
    >
    <div class="card-body">
      <h5 class="card-title"><strong>Tipat</strong></h5>
      <h5 class="harga-card">Rp. 10000 <span class="harga-palsu">Rp. 11000</span></h5>
      <p class="card-text">
            asd
      </p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <router-link class="btn btn-warning" type="button" to="/home">Pesan</router-link>
      </div>
    </div>
  </div>
</template>s

<script>
export default {
  name : 'BestProductCard'
};
</script>

<style>
</style>