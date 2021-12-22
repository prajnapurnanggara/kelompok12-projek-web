<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Pesananku</h2>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col" width="2%">#</th>
              <th scope="col"></th>
              <th scope="col">Makanan</th>
              <th scope="col">Harga</th>
              <th scope="col">Jumlah</th>
              <th scope="col">Total Harga</th>
              <th scope="col">Catatan</th>
              <th scope="col" width="2%"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="col">1</td>
              <td>
                <img
                  src="https://i.ytimg.com/vi/9qYtYm7HddM/maxresdefault.jpg"
                  width="200"
                  class="img-fluid shadow"
                />
              </td>
              <td>Tipat Cantok</td>
              <td>Rp 10.000</td>
              <td>3</td>
              <td>Rp 30.000</td>
              <td>1 tanpa sayur kangkung, semuanya cabe 2</td>
              <td><a class="btn btn-icon btn-danger"><i class="fas fa-trash"></i></a></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><strong>Total : Rp 30.000</strong></td>
              <td></td>
            </tr>
          </tfoot>
        </table>

        <div class="row justify-content-end">
          <div class="col-3">
            <form>
              <div class="form-group mt-3">
                <label><strong>Nama</strong></label>
                <input type="Text" class="form-control mt-1" />
              </div>
              <div class="form-group mt-3">
                <label><strong>Nomer Meja</strong></label>
                <input type="number" class="form-control mt-1" />
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
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../../components/user/Navbar.vue";

export default {
  name: "Pesananku",
  components: {
    Navbar,
  },
};
</script>
