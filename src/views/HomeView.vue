<template>
  <div class="container-fluid">
      <div class="row mt-5 mx-2" style="cursor:pointer" >
        <h1 class="fs-1">Welcome!</h1>
        <div class="col-md-4 card py-4 fs-4">
          <i class="fa-solid fa-clapperboard"></i>
          Hello Movie
        </div>
        <div class="col-md-4 card py-4 fs-4" style="cursor:pointer" @click="goHomePage()">
          <i class="fa-solid fa-passport"></i>
          Passport Helper
        </div>
        <div class="col-md-4 card py-4 fs-4" style="cursor:pointer">
          <i class="fa-solid fa-ellipsis"></i>
          Coming Soon
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name:'HomeView',
    data() {
      return {
        
      }
    },
    methods: {
      goHomePage() {
        this.$router.push('/home');
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>