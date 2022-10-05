<template>
    <div class="container-fluid m-0 p-1">
        <NavBar></NavBar>
        <div class="row">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Case</th>
                        <th scope="col">အမည်</th>
                        <th scope="col">အမျိုးအစား</th>
                        <th scope="col">အထောက်အထား</th>
                        <th>ပိုမို</th>
                    </tr>
                </thead>
                <tbody v-if="homePage.searchKey.length == 0">
                    <tr>
                        <td colspan="5" class="py-5">
                            <h1><i class="fa-solid fa-keyboard text-success"></i> Please Input Search Key</h1>
                        </td>
                    </tr>
                </tbody>
                <tbody v-if="homePage.isLoading">
                    <tr>
                        <td colspan="5" class="py-5">
                            <div class="d-flex justify-content-center">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody v-if="homePage.data.length == 0 && !homePage.isLoading && homePage.searchKey.length > 0">
                    <tr>
                        <td colspan="5" class="py-5">
                            <h1>Hmm!Cannot find data concern with <span>{{ homePage.searchKey }}</span></h1>
                        </td>
                    </tr>
                </tbody>
                <tbody v-if="!homePage.isLoading && homePage.data.length > 0 ">
                    <tr v-for="(d,index) in homePage.data" :key="index">
                        <th scope="row">{{ d.id }}</th>
                        <td>{{ d.name }}</td>
                        <td>{{ d.type }}</td>
                        <td>
                            <a v-if="isValidUrl(d.evidence)" target="_black" :href="d.evidence" class="btn btn-link">ကြည့်ရန်</a>
                            <span v-else class="">404 <i class="fa-solid fa-link-slash"></i></span>
                        </td>
                        <td>
                            <router-link class="btn btn-primary" :to="'more/'+d.id">ဖတ်ရန်</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import NavBar from './Componts/NavBar.vue';
export default {
    name: 'HomePage',
    data() {
        return {
            lists : [],
        }
    },
    methods: {
        isValidUrl(string) {
            try {
                new URL(string);
                return true;
            } catch (err) {
                return false;
            }
        },
    },
    components: {
        NavBar,
    },
    computed: {
        ...mapState(['homePage'])
    },
    
}
</script>

<style lang="scss" scoped>

</style>