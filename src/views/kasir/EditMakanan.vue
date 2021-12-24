<template>
  <div class="content">
    <NavbarKasir />
    <div class="container">
      <div class="row mt-4 mb-2">
        <div class="col">
          <h2>Edit Makanan</h2>
          <router-link class="btn btn-md btn-warning mt-4" to="/tambahmakanan"
            >Tambah Makanan</router-link
          >
        </div>
        <table class="table table-hover mt-2">
          <thead>
            <tr>
              <th scope="col" width="3%">#</th>
              <th scope="col" width="17%"></th>
              <th scope="col" width="10%">Nama</th>
              <th scope="col" width="45%">Deskripsi</th>
              <th scope="col" width="10%">Harga Asli</th>
              <th scope="col" width="10%">Harga Palsu</th>
              <th scope="col" width="5%"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <img
                  src="https://i.ytimg.com/vi/9qYtYm7HddM/maxresdefault.jpg"
                  width="200"
                  class="img-fluid shadow"
                />
              </td>
              <td>Tipat Cantok</td>
              <td>
                Tipat dan tahu yang dicampur dengan sayur kangkung dan tauge dan
                disiram dengan bumbu kacang yang ditaburi dengan perasan jeruk
                nipis dan tambahan kerupuk sebagai pendamping.
              </td>
              <td>Rp 10.000</td>
              <td>Rp 12.000</td>
              <td>
                <router-link
                  class="btn btn-icon btn-outline-dark"
                  to="/formeditmakanan"
                  ><i class="fas fa-pencil-alt"></i
                ></router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarKasir from "../../components/kasir/NavbarKasir.vue";

export default {
  name: "EditMakanan",
  components: {
    NavbarKasir,
  },
};
</script>

<style>
</style>