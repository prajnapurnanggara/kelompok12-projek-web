<template>
  <div id="app">
  </div>
  <router-view/>
  <Footer/>
</template>
<script>
import Footer from "@/components/user/Footer.vue"

export default{
  components:{
    Footer
  }
}
</script>
