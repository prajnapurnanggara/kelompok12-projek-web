<template>
  <div class="card shadow detail-card">
    <div class="card-body">
      <h5 class="card-title"><strong>Detail Makanan</strong></h5>
      <hr />
      <form>
        <div class="form-group mt-3">
          <label><strong>Nama</strong></label>
          <input type="text" class="form-control mt-1" />
        </div>
        <div class="form-group mt-3">
          <label><strong>Deskripsi</strong></label>
          <textarea class="form-control mt-1"></textarea>
        </div>
        <div class="form-group mt-3">
          <label><strong>Harga Asli</strong></label>
          <input type="number" class="form-control mt-1" />
        </div>
        <div class="form-group mt-3">
          <label><strong>Harga Palsu</strong></label>
          <input type="number" class="form-control mt-1" />
        </div>
        <div class="form-group mt-3">
          <label><strong>Upload</strong></label>
          <input type="number" class="form-control mt-1" />
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
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