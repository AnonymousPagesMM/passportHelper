<template>
    <div class="container-fluid">
        <NavBar></NavBar>
        <div class="row mt-5 m-2 p-0 text-start">
            <div class="card m-0 p-0">
                <div class="card-header">
                    Insert Form For Passport Helper Server
                </div>
                <div class="card-body row">
                    <div class="col-md-4 mt-2 form-group">
                        <label class="mb-1" for="">Name</label>
                        <input type="text" v-model="insertData.name" placeholder="အမည်ထည့်သွင်းပါ" class="form-control">
                    </div>
                    <div class="col-md-4 mt-2 form-group">
                        <label class="mb-1" for="">Type </label>
                        <select v-model="insertData.type" class=" form-select">
                            <option value="">ရွေးချယ်ပါ..</option>
                            <option value="customer">Customer</option>
                            <option value="agent">Agent</option>
                        </select>
                    </div>
                    <div class="col-md-4 mt-2 form-group">
                        <label class="mb-1" for="">Phone Number </label>
                        <input type="number" v-model="insertData.phone" placeholder="ဖုန်းနံပါတ်" class="form-control">
                    </div>
                    <div class="col-md-12 mt-4 form-group">
                        <label class="mb-1" for="">Account Link (facebook စသည့် အကောင့် ၏ profile link) </label>
                        <input type="text" v-model="insertData.accountLink" class="form-control"
                            placeholder="အကောင့်လင့် ကို ထည့်သွင်းပါ">
                    </div>
                    <div class="col-md-12 mt-4 form-group">
                        <label class="mb-1" for="">Evidence Link (လိမ်လည်ထား ကြောင်း facebook စသည် တို တွင် public ဖြင့်
                            share(သို့)တင်ထားသော post ၏ link) </label>
                        <input type="text" v-model="insertData.evidence" class="form-control"
                            placeholder="အထောက်အထားလင့် ကို ထည့်သွင်းပါ">
                    </div>
                    <div class="col-md-12 mt-4 form-group">
                        <label class="mb-1" for="">Description (အခြားဖော်ပြ လို သော အကြောင်းအရာ)</label>
                        <textarea rows="6" v-model="insertData.description" class=" form-control"></textarea>
                    </div>
                    <div class="text-end mt-3">
                        <button class="btn btn-primary" @click="saveData()">Finish&Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import NavBar from './Componts/NavBar.vue';
import { mapState } from 'vuex';
export default {
    name: 'AddData',
    data() {
        return {
            insertData: {
                name: '',
                accountLink: '',
                phone: '',
                type: '',
                description: '',
                evidence: ''
            },
        }
    },
    components: {
        NavBar,
    },
    methods: {
        saveData() {
            if (this.validationData()) {
                axios.post(this.web + 'api/lie_user/insert',this.insertData)
                    .then(response => {
                        if (response.data.success) {
                            this.$swal('Success', response.data.success, 'success');
                            this.backToStart();
                        } else {
                            let errors = response.data.errors;
                            let showError = '';
                            for (let i = 0; i < errors.length; i++) {
                                showError += errors[i];
                            }
                            this.$swal('Error!', showError, 'error')
                        }
                    })
            }
        },
        validationData() {
            if (this.insertData.name == '') {
                this.$swal('Errors', 'Please Enter the name (အမည်ဖြည့်ရန်လိုအပ်နေပါသည်)', 'error')
            } else if (this.insertData.type == '') {
                this.$swal('Errors', 'Please Enter the type (အေးဂျင့် (သို့) ကာစတန်မာ တစ်ခုခုကိုရွေးပါ)', 'error')
            } else if (this.insertData.accountLink == '') {
                this.$swal('Errors', 'Please Enter the AccountLink (facebook စသည့် အကောင့် ၏ profile link လိုအပ်ပါသည်)', 'error')
            } else if (!this.isValidUrl(this.insertData.accountLink)) {
                this.$swal('Errors', 'Please Enter the AccountLink (လင့် မှားယွင်းနေပါသည် ပြန်ထည့်သွင်းပါ)', 'error')
            } else if (this.insertData.evidence == '') {
                this.$swal('Errors', 'Please Enter the Evidence (လိမ်လည်ထား ကြောင်း facebook စသည် တို တွင် public ဖြင့် share(သို့)တင်ထားသောအထောက်အထားလင့် လိုအပ်ပါသည်)', 'error')
            } else if (!this.isValidUrl(this.insertData.evidence)) {
                this.$swal('Errors', 'Please Enter the Evidence (လင့် မှားယွင်းနေပါသည် ပြန်ထည့်သွင်းပါ)', 'error')
            } else if (this.insertData.description == '') {
                this.$swal('Errors', 'Please Enter the Description (တစ်ခုခု ရေးသားပေးပါ)', 'error')
            } else {
                return true;
            }
        },
    isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (err) {
            return false;
        }
    },
    backToStart() {
        this.insertData = {
            name: '',
            accountLink: '',
            phone: '',
            type: '',
            description: '',
            evidence: ''
        };
        this.validationPass = false;
    },
},
    computed: {
        ...mapState(['web']),
    },
}
</script>

<style lang="scss" scoped>

</style>