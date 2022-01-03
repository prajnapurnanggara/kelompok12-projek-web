<template>
  <div class="card shadow detail-card">
    <div class="card-body">
      <h5 class="card-title"><strong>PSN001</strong></h5>
      <hr />
      <form>
        <div class="form-group mt-3">
          <label><strong>Nama</strong></label>
          <input type="text" class="form-control mt-1" />
        </div>
        <div class="form-group mt-3">
          <label><strong>No Meja</strong></label>
          <input type="number" class="form-control mt-1" />
        </div>
        <div class="form-group mt-3">
          <label><strong>Status</strong></label>
          <select id="Select" class="form-select mt-1">
            <option>Dipesan</option>
            <option>Dibayar</option>
            <option>Selesai</option>
            <option>Cancel</option>
          </select>
        </div>
        <div class="form-group mt-3">
          <label><strong>Pesanan</strong></label>
          <table class="table tabledetail mt-1">
            <thead>
              <tr>
                <th scope="col" width="3%">#</th>
                <th scope="col" width="15%">Makanan</th>
                <th scope="col" width="10%">Harga</th>
                <th scope="col" width="7%">Jumlah</th>
                <th scope="col" width="15%">Total Harga</th>
                <th scope="col" width="50%">Catatan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="col">1</td>
                <td>Tipat Cantok</td>
                <td>Rp 10.000</td>
                <td>3</td>
                <td>Rp 30.000</td>
                <td>1 tanpa sayur kangkung, semuanya cabe 2</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><strong>Total : Rp 30.000</strong></td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="submit" class="btn btn-dark mt-4">Print</button>
          <button type="submit" class="btn btn-warning mt-4">Ubah</button>
        </div>
      </form>
    </div>
  </div>
</template>s

<script>
export default {};
</script>

<style>
</style>