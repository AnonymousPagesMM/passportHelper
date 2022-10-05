<template>
    <div class="container-fluid m-0 p-0">
        <NavBar></NavBar>
        <div class="card" style="">
            <div class="card-header">
                <router-link to="/home" class="btn btn-outline-primary float-start"><i
                        class="fa-solid fa-arrow-left-long"></i> Back
                </router-link>
                <span class="text-end float-end" v-if="info"><i class="fa-regular fa-calendar-check fs-3"></i> {{
                created_at }}</span>
            </div>
            <div v-if="!info" class="d-flex justify-content-center card-body">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <div v-if="info" class="card-body">
                <h5 class="card-title">Information of <span class="fw-bold fs-4"><i class="fa-solid fa-user-secret"></i>
                        {{ info.name }}</span></h5>
                <h6 class="card-subtitle mb-2 text-muted">
                    <span class="badge text-bg-primary me-2">{{ info.type }}</span>
                    <a :href="'tel:'+info.phone" class="badge text-bg-primary"><i class="fa-solid fa-phone"></i> {{
                    info.phone }}</a>
                </h6>
                <p class="card-text">{{ info.description }}</p>
            </div>
            <div v-if="info" class="card-footer">
                <a v-if="accountLink" target="_black" :href="info.account_link" class="card-link col">Account Link</a>
                <span class="card-link col" v-else><i class="fa-solid fa-link-slash me-1"></i>404 Account</span>
                <a target="_black" :href="info.evidence" v-if="evidenceLink"
                    class="card-link  col">အထောက်အထားအားကြည့်ရန်</a>
                <span class="card-link col" v-else><i class="fa-solid fa-link-slash me-1"></i>အထောက်အထားမရနိုင်ပါ</span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import NavBar from './Componts/NavBar.vue'
export default {
    name: "MoreReadPage",
    data() {
        return {
            info: '',
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
        accountLink() {
            return this.isValidUrl(this.info.account_link);
        },
        evidenceLink() {
            return this.isValidUrl(this.info.evidence);
        },
        created_at() {
            let date = new Date(this.info.created_at);
            let d = date.getDate();
            let M = this.$store.state.months[0];
            let Y = date.getFullYear();
            return d + '-' + M + '-' + Y;
        }
    },
    beforeMount() {
        axios.get(this.$store.state.web + 'api/lie_user/' + this.$route.params.id)
            .then(response => { this.info = response.data })
    },
}
</script>

<style lang="scss" scoped>

</style>