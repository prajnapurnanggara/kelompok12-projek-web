<template>
<div class="row mt-4">
    <div class="col">
        <div class="d-flex h-100">
        <div class="justify-content-center align-self-center">
            <h2>Tidak perlu menunggu pelayan untuk memesan makanan<br><strong>Pesan makananmu disini!</strong></h2>
        <router-link class="btn btn-lg btn-warning" to="/makanan">Mau Pesan</router-link>
        </div>
        </div>
    </div>
    <div class="col">
        <img src="../assets/img/hero.svg" width="400">
    </div>
</div>
</template>

<script>
export default {
    name: 'Hero'
}
</script>

<style>

</style>