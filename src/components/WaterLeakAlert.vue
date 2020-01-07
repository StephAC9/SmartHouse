<template>
    <v-alert v-if="wlAlarm" type="warning">
        WARNING!!! You have water leaking somewhere in the house.
    </v-alert>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("users");
import { watch } from 'fs'
export default {
    name:'WaterLeakAlert',

    data(){
        return{
            wlAlarm: 0,
            alertMessage: null,
            }        
    },

    computed:{
      ...mapGetters('users',['waterLeakageAlert'])
    },

    watch:{
        waterLeakageAlarm(val){
            if(val !== null || val !== undefined){
                this.wlAlarm = this.waterLeakageAlert.status  
            }

        }
    }

    
}
</script>

<style scoped>
    
</style>