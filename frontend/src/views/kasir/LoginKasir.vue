<template>
  <div class="row">
    <div class="col-4 mx-auto">
      <div class="card cardlogin shadow my-5">
        <div class="card-body p-4 p-sm-5">
          <h5 class="card-title text-center mb-5 fw-light fs-5">Login</h5>
          <form>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="ID Kasir"
              />
              <label for="floatingInput">ID Kasir</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div class="d-grid">
              <button
                class="btn btn-warning"
                type="submit"
              >
               Login
              </button>
            </div>
            <hr class="my-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.row {
  margin-top: 10%;
}
.card {
  border-radius: 20px;
}
</style>