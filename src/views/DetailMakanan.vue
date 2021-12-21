<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <router-link class="btn btn-md btn-warning" to="/makanan"
            ><i class="fas fa-arrow-left"></i
          ></router-link>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-md-6">
          <img
            src="https://i.ytimg.com/vi/9qYtYm7HddM/maxresdefault.jpg"
            class="img-fluid shadow"
          />
        </div>
        <div class="col-md-6">
          <h2><strong>Tipat Cantok</strong></h2>
          <h5 class="harga">
            Rp 10.000 <span class="harga-palsu">Rp 12.000</span>
          </h5>
          <hr />
          <p class="card-text">
            Tipat dan tahu yang dicampur dengan sayur kangkung dan tauge dan
            disiram dengan bumbu kacang yang ditaburi dengan perasan jeruk nipis
            dan tambahan kerupuk sebagai pendamping.
          </p>
          <form>
            <div class="form-group mt-3">
              <label><strong>Jumlah Pesanan</strong></label>
              <input type="number" class="form-control mt-1" />
            </div>
            <div class="form-group mt-3">
              <label><strong>Level Kepedasan</strong></label>
              <input
                type="number"
                class="form-control mt-1"
                placeholder="Level 0 - 10"
              />
            </div>
            <div class="form-group mt-3">
              <label><strong>Catatan Untuk Pesanan</strong></label>
              <textarea
                placeholder="Contoh: Tanpa sayur kangkung ya!"
                class="form-control mt-1"
              ></textarea>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="submit" class="btn btn-warning mt-4">
                Pesan Makanan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "DetailMakanan",
  components: {
    Navbar,
  },
};
</script>
