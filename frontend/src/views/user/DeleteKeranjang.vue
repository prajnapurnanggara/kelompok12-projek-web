<template></template>

<script>
import axios from "axios";

export default {
  name: "DeleteKeranjang",

  mounted() {
    axios
      .delete(`http://localhost:8080/api/keranjang/${this.$route.params.id}`)
      .then((response) => this.$router.push("/pesananku")(response.data))
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style>
</style>