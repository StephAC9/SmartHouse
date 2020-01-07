<template>
    <v-alert v-if="alertHouseBreakIn == 1" type="error">
      WARNING!!! Someone is trying to enter you house.
    </v-alert>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("users");
export default {
    name:'Alert-Danger',
    data(){
      return{
        alertHouseBreakIn: 0
      }
    },
    computed:{
      ...mapGetters('users',['houseBreakInAlarm'])
    },
    watch:{
      houseBreakInAlarm(val){
        if(val !== null || val !== undefined){
          this.alertHouseBreakIn = this.houseBreakInAlarm.status
          console.log('House BreakIn alert status: '+this.alertHouseBreakIn)
        }
      }
    }
}
</script>

<style scoped>
    
</style>