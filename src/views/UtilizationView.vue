<template>
    <section class="fixed w-20 h-20 bg-red-100 main-nav z-10">
        <ul class="list-none nav cursor-pointer">

            <li @click="toggleTelco('mtn')" class="text-xs bg-mtn font-bold font-['Soleil'] border  rounded-sm-r-sm p-2 "
                :class="{ 'bg-transparent border-[#9B57D6] font-normal text-black': mtnState, 'border-mtn': !mtnState }">
                MTN
            </li>
            <li @click="toggleTelco('airtel')"
                class="text-xs font-['Soleil'] font-bold bg-airtel border hover:font-normal border-r-0  p-2 "
                :class="{ 'bg-transparent border-[#9B57D6] font-normal text-black': airtelState, 'border-airtel text-white': !airtelState }">
                AIRTEL</li>
            <li @click="toggleTelco('glo')"
                class="text-xs font-['Soleil'] font-bold bg-glo hover:font-normal border border-r-0  p-2 "
                :class="{ 'bg-transparent border-[#9B57D6] font-normal text-black': gloState, 'border-glo text-white': !gloState }">
                GLO
            </li>
            <li @click="toggleTelco('etisalat')"
                class="text-xs font-['Soleil'] font-bold bg-etisalat  border hover:border-[#9B57D6] rounded-l-sm p-2"
                :class="{ 'bg-transparent border-[#9B57D6] font-normal text-black': etisalatState, 'border-etisalat text-white': !etisalatState }">
                ETISALAT</li>
        </ul>


    </section>
    <div class="md:mx-20">
        <section class="md:flex md:flex-col md:justify-center md:items-center">

            <h1
                class="leading-8 font-normal text-lg md:text-4xl md:font-bold md:leading-[67px] text-black md:text-[#4F4F4F] mt-20 md:mt-[105px]">
                Model Utilization Estimation</h1>
            <p class="font-['Soleil'] text-[#828282]  text-sm md:text-xl leading-8 mt-3 md:mt-0">Kindly fill the form below
                to use the
                model</p>
            <p class="text-xs font-['Soleil']">*Telcos can be de-selected from the process by clicking on them in the
                vertical bar </p>
            <p class="text-xs mt-1 font-['Soleil']">* All fields are required</p>
        </section>

        <section class="flex justify-center items-center font-['Soleil'] mt-8 mb-20">
            <form @submit.prevent="predict" class="w-full" action="">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <input required v-model="formData.commons.Longitude" class="bg-[#F1F6FD] h-12 p-3 rounded" type="number"
                        step="any" placeholder="Longitude">
                    <input required v-model="formData.commons.Latitude" class="bg-[#F1F6FD] h-12 p-3 rounded" type="number"
                        step="any" placeholder="Latitude">
                    <input required v-model="formData.commons.minutes" class="bg-[#F1F6FD] h-12 p-3 rounded" type="number"
                        step="any" placeholder="Minutes">
                    <input required v-model="formData.commons.seconds" class="bg-[#F1F6FD] h-12 p-3 rounded" type="number"
                        step="any" placeholder="Seconds">
                </div>
                <!-- ---MTN--- -->

                <section class="mt-2 border-t border-mtn w-full " :class="{ hidden: mtnState }">
                    <div class="bg-mtn w-8 h-4">
                        <span class="text-xs flex items-center justify-center">mtn</span>
                    </div>
                    <div class="grid grid-cols-3 gap-2 p-3">
                        <select v-model="formData.mtn.ServingCellIdentity" class="bg-[#F1F6FD] h-12 p-3 rounded"
                            name="ServingCellId" id="">
                            <option disabled selected value="">Serving Cell Identity</option>
                            <option v-for="(item, index) in mtnData.servingCellIdentity" :key="index" :value="item">{{
                                item
                            }}</option>
                        </select>
                        <select v-model="formData.mtn.CellName" class="bg-[#F1F6FD] h-12 p-3 rounded" name="cellname" id="">
                            <option disabled selected value="">Cell Name</option>
                            <option v-for="(item, index) in mtnData.cellName" :key="index" :value="item">{{ item }}
                            </option>
                        </select>
                        <select v-model="formData.mtn.SiteName" class="bg-[#F1F6FD] h-12 p-3 rounded" name="sitename" id="">
                            <option disabled selected value="">Site Name</option>
                            <option v-for="(item, index) in mtnData.siteName" :key="index" :value="item">{{ item }}
                            </option>
                        </select>
                        <input type="number" v-model="formData.mtn.RSSINRdB" class="bg-[#F1F6FD] h-12 p-3 rounded"
                            placeholder="RSSINRdB">
                        <input v-model="formData.mtn.ServingCellRSRQdB" class="bg-[#F1F6FD] h-12 p-3 rounded" type="number"
                            step="any" placeholder="ServingCellRSRQdB">
                        <input v-model="formData.mtn.ServingCellRSRPdBm" class="bg-[#F1F6FD] h-12 p-3 rounded" type="number"
                            step="any" placeholder="ServingCellRSRPdBm">
                        <input v-model="formData.mtn.num_users" class="bg-[#F1F6FD] h-12 p-3 rounded" type="number"
                            step="any" placeholder="Number of Users">
                    </div>
                </section>

                <!-- ---AIRTEL--- -->
                <section class="mt-2 border-t border-airtel w-full " :class="{ hidden: airtelState }">
                    <div class="bg-airtel w-8 h-4">
                        <span class="text-xs flex text-white items-center justify-center">airtel</span>
                    </div>

                    <div class="grid grid-cols-3 gap-2 p-3">
                        <select v-model="formData.airtel.ServingCellIdentity" class="bg-[#F1F6FD] h-12 p-3 rounded"
                            name="ServingCellId" id="">
                            <option disabled selected value="">Serving Cell Identity</option>
                            <option v-for="(item, index) in airtelData.servingCellIdentity" :key="index" :value="item">{{
                                item
                            }}</option>
                        </select>
                        <select v-model="formData.airtel.CellName" class="bg-[#F1F6FD] h-12 p-3 rounded" name="cellname"
                            id="">
                            <option disabled selected value="">Cell Name</option>
                            <option v-for="(item, index) in airtelData.cellName" :key="index" :value="item">{{ item }}
                            </option>
                        </select>
                        <select v-model="formData.airtel.SiteName" class="bg-[#F1F6FD] h-12 p-3 rounded" name="sitename"
                            id="">
                            <option disabled selected value="">Site Name</option>
                            <option v-for="(item, index) in airtelData.siteName" :key="index" :value="item">{{ item }}
                            </option>
                        </select>
                        <input v-model="formData.airtel.RSSINRdB" class="bg-[#F1F6FD] h-12 p-3 rounded" type="number"
                            step="any" placeholder="RSSINRdB">
                        <input v-model="formData.airtel.ServingCellRSRQdB" class="bg-[#F1F6FD] h-12 p-3 rounded"
                            type="number" step="any" placeholder="ServingCellRSRQdB">
                        <input v-model="formData.airtel.ServingCellRSRPdBm" class="bg-[#F1F6FD] h-12 p-3 rounded"
                            type="number" step="any" placeholder="ServingCellRSRPdBm">
                        <input v-model="formData.airtel.num_users" class="bg-[#F1F6FD] h-12 p-3 rounded" type="number"
                            step="any" placeholder="Number of Users">
                    </div>

                </section>
                <!-- ---GLO--- -->
                <section class="mt-2 border-t border-glo w-full " :class="{ hidden: gloState }">
                    <div class="bg-glo w-8 h-4">
                        <span class="text-xs text-white flex items-center justify-center">glo</span>
                    </div>

                    <div class="grid grid-cols-3 gap-2 p-3">
                        <select v-model="formData.glo.ServingCellIdentity" class="bg-[#F1F6FD] h-12 p-3 rounded"
                            name="ServingCellId" id="">
                            <option disabled selected value="">Serving Cell Identity</option>
                            <option v-for="(item, index) in gloData.servingCellIdentity" :key="index" :value="item">{{
                                item
                            }}</option>
                        </select>
                        <select v-model="formData.glo.CellName" class="bg-[#F1F6FD] h-12 p-3 rounded" name="cellname" id="">
                            <option disabled selected value="">Cell Name</option>
                            <option v-for="(item, index) in gloData.cellName" :key="index" :value="item">{{ item }}
                            </option>
                        </select>
                        <select v-model="formData.glo.SiteName" class="bg-[#F1F6FD] h-12 p-3 rounded" name="sitename" id="">
                            <option disabled selected value="">Site Name</option>
                            <option v-for="(item, index) in gloData.siteName" :key="index" :value="item">{{ item }}
                            </option>
                        </select>
                        <input v-model="formData.glo.RSSINRdB" class="bg-[#F1F6FD] h-12 p-3 rounded" type="number"
                            step="any" placeholder="RSSINRdB">
                        <input v-model="formData.glo.ServingCellRSRQdB" class="bg-[#F1F6FD] h-12 p-3 rounded" type="number"
                            step="any" placeholder="ServingCellRSRQdB">
                        <input v-model="formData.glo.ServingCellRSRPdBm" class="bg-[#F1F6FD] h-12 p-3 rounded" type="number"
                            step="any" placeholder="ServingCellRSRPdBm">
                        <input v-model="formData.glo.num_users" class="bg-[#F1F6FD] h-12 p-3 rounded" type="number"
                            step="any" placeholder="Number of Users">
                    </div>

                </section>
                <!-- ---ETISALAT--- -->
                <section class="mt-2 border-t border-etisalat w-full " :class="{ hidden: etisalatState }">
                    <div class="bg-etisalat w-12 h-4">
                        <span class="text-xs  text-white flex items-center justify-center">etisalat</span>
                    </div>

                    <div class="grid grid-cols-3 gap-2 p-3">
                        <select v-model="formData.etisalat.ServingCellIdentity" class="bg-[#F1F6FD] h-12 p-3 rounded"
                            name="ServingCellId" id="">
                            <option disabled selected value="">Serving Cell Identity</option>
                            <option v-for="(item, index) in etisalatData.servingCellIdentity" :key="index" :value="item">{{
                                item
                            }}</option>
                        </select>
                        <select v-model="formData.etisalat.CellName" class="bg-[#F1F6FD] h-12 p-3 rounded" name="cellname"
                            id="">
                            <option disabled selected value="">Cell Name</option>
                            <option v-for="(item, index) in etisalatData.cellName" :key="index" :value="item">{{ item }}
                            </option>
                        </select>
                        <select v-model="formData.etisalat.SiteName" class="bg-[#F1F6FD] h-12 p-3 rounded" name="sitename"
                            id="">
                            <option disabled selected value="">Site Name</option>
                            <option v-for="(item, index) in etisalatData.siteName" :key="index" :value="item">{{ item }}
                            </option>
                        </select>
                        <input v-model="formData.etisalat.RSSINRdB" class="bg-[#F1F6FD] h-12 p-3 rounded" type="number"
                            step="any" placeholder="RSSINRdB">
                        <input v-model="formData.etisalat.ServingCellRSRQdB" class="bg-[#F1F6FD] h-12 p-3 rounded"
                            type="number" step="any" placeholder="ServingCellRSRQdB">
                        <input v-model="formData.etisalat.ServingCellRSRPdBm" class="bg-[#F1F6FD] h-12 p-3 rounded"
                            type="number" step="any" placeholder="ServingCellRSRPdBm">
                        <input v-model="formData.etisalat.num_users" class="bg-[#F1F6FD] h-12 p-3 rounded" type="number"
                            step="any" placeholder="Number of Users">
                    </div>

                </section>

                <div class="flex flex-col justify-center items-center mt-5">
                    <p v-if="!canSubmitForm" class="text-sm font-['Soleil'] font-normal text-red-600">*Pick at least 3
                        telcos
                    </p>

                    <button type="submit" :disabled="!canSubmitForm" :class="{ 'btn-disabled': canSubmitForm == false }"
                        class=" mt-2 w-80 h-12 text-white btn-primary">Predict Channel Utility for Borrowing</button>
                </div>
            </form>
        </section>


    </div>
</template>

<script setup lang="ts">
import Form from '@/components/Form.vue'
import { ref, watch, watchEffect, inject } from 'vue'
import { mtn, glo, etisalat, airtel } from '@/data'
import api from '@/services/AxiosService'

const isLoading: any = inject('isLoading')
const hasError: any = inject('hasError')

const mtnData = ref(mtn)
const gloData = ref(glo)
const etisalatData = ref(etisalat)
const airtelData = ref(airtel)

const mtnState = ref(false)
const airtelState = ref(false)
const gloState = ref(false)
const etisalatState = ref(false)
const canSubmitForm = ref<boolean>(true)

const toggleTelco = (telco: string) => {
    switch (telco) {
        case 'mtn':
            mtnState.value = !mtnState.value
            break;
        case 'airtel':
            airtelState.value = !airtelState.value
            break;
        case 'glo':
            gloState.value = !gloState.value
            break;
        case 'etisalat':
            etisalatState.value = !etisalatState.value
            break;

        default:
            break;
    }
}
const checkDisableSubmitButton = () => {
    const truthyCount = [mtnState.value, gloState.value, airtelState.value, etisalatState.value].filter(Boolean).length;
    canSubmitForm.value = truthyCount < 2

};

watch([mtnState, airtelState, etisalatState, gloState], checkDisableSubmitButton)



const formData: any = ref({
    "commons": {
        "Longitude": null,
        "Latitude": null,
        "minutes": null,
        "seconds": null,
    },
    "mtn": {
        "ServingCellIdentity": "",
        "CellName": "",
        "SiteName": "",
        "ServingCellRSRQdB": null,
        "RSSINRdB": null,
        "ServingCellRSRPdBm": null,
        "num_users": null
    },
    "airtel": {
        "ServingCellIdentity": "",
        "CellName": "",
        "SiteName": "",
        "ServingCellRSRQdB": null,
        "RSSINRdB": null,
        "ServingCellRSRPdBm": null,
        "num_users": null
    },
    "glo": {
        "ServingCellIdentity": "",
        "CellName": "",
        "SiteName": "",
        "ServingCellRSRQdB": null,
        "RSSINRdB": null,
        "ServingCellRSRPdBm": null,
        "num_users": null
    },
    "etisalat": {
        "ServingCellIdentity": "",
        "CellName": "",
        "SiteName": "",
        "ServingCellRSRQdB": null,
        "RSSINRdB": null,
        "ServingCellRSRPdBm": null,
        "num_users": null
    },
})

type BooleanObject = {
    [key: string]: boolean;
}

const predict = async () => {
    isLoading.value = true
    // get selected telcos
    const telcos: BooleanObject = {
        "mtn": mtnState.value,
        "airtel": airtelState.value,
        "glo": gloState.value,
        "etisalat": etisalatState.value,
    };
    const selectedTelcos = Object.keys(telcos)
        .filter(key => !telcos[key])
        .map(key => key);

    // make requests to all selected telcos simultaneously
    const requests = selectedTelcos.map((telco) => {
        return api.post('predict_' + telco, {
            inputs: [Object.assign({}, formData.value.commons, formData.value[telco])]
        })
    })

    const allRequests = Promise.all(requests)
    try {
        const allResponses = await allRequests;
        console.log(allResponses);

        isLoading.value = false

    } catch (anyErrors) {
        hasError.value = true
        console.log(anyErrors);
    } finally {

        isLoading.value = false

    }

    watchEffect(() => {
        if (hasError.value) {
            setTimeout(() => {
                hasError.value = false
            }, 3000)
        }
    })


}


</script>

<style scoped >
ul {
    margin: 0;
}

.main-nav {
    width: 40vh;
    height: 35px;
    position: fixed;
    top: 41%;
    background: white;
    -webkit-transform-origin: left top;
    transform-origin: left top;
    transform: rotate(-90deg) translateX(-100%);
    -webkit-transform: rotate(-90deg) translateX(-100%);


}

@media only screen and (max-width: 480px) {
    .main-nav {
        height: 24px;
        left: 0;
    }

    ul.nav li {
        line-height: 10px !important;
    }
}


ul.nav {
    margin: 0 auto;
    height: 100%;
}

ul.nav li {
    float: right;
    height: 100%;
    line-height: 25px;
}
</style>