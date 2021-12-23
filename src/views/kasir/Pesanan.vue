<template>
  <div class="content">
    <NavbarKasir />
    <div class="container">
      <div class="row mt-4 mb-2">
        <div class="col">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col" width="2%">#</th>
                <th scope="col">ID Pesanan</th>
                <th scope="col">Nama</th>
                <th scope="col" width="10%">No Meja</th>
                <th scope="col">Status</th>
                <th scope="col" width="2%"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>PSN001</td>
                <td>Otto</td>
                <td>12</td>
                <td><span class="badge rounded-pill bg-warning text-dark">Dipesan</span></td>          
                <td><a class="btn btn-icon btn-outline-dark"><i class="fas fa-eye"></i></a></td>                      
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarKasir from "../../components/kasir/NavbarKasir.vue";

export default {
  name: "Pesanan",
  components: {
    NavbarKasir,
  },
};
</script>

<style>
</style>