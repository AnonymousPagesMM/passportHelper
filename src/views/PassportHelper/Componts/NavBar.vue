<template>
        <nav class="navbar bg-light">
            <div class="container-fluid d-flex justify-content-between">
                <a class="navbar-brand" href="#">
                    <i class="fa-solid fa-passport fs-1 text-danger"></i>
                    Passport Helper
                </a>
                <div class="navbar-brand my-2 m-2">
            <div class="col-md-12 text-start">
                <router-link to="/" class="btn btn-link"><i class="fa-solid fa-house"></i> Home</router-link>
                <router-link to="/insert" class="btn btn-link"><i class="fa-solid fa-circle-plus"></i> Add</router-link>
            </div>
        </div>
                <div class="d-flex" role="search">
                    <input v-model="searchKey" @keyup="searchData()" class="form-control me-2" type="search"
                        placeholder="Enter to Search" aria-label="Search">
                    <button @click="searchData(true)" class="btn btn-outline-success" type="submit"><i
                            class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
        </nav>
</template>

<script>
    export default {
        name : 'NavBar',
        data() {
            return {
                searchKey : localStorage.getItem('lastSearch'),
            }
        },
        methods: {
         searchData(route){
            this.$store.dispatch("searchUserData",this.searchKey);
            if (route) {
                this.$router.push('/home');
            }
         }
        },
        beforeMount () {
            this.searchData();
        },
    }
</script>

<style lang="scss" scoped>

</style>