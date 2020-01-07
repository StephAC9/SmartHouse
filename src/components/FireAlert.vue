<template>
    <v-alert v-if="alertFire == 1" type="error">
      WARNING!!! The house fire alert in on.
    </v-alert>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("users");
export default {
    name:'FireAlert',
    data(){
      return{
        alertFire: 0
      }
    },
    computed:{
      ...mapGetters('users',['fireAlert'])
    },
    watch:{
      fireAlarm(val){
        if(val !== null || val !== undefined){
          this.alertFire = this.fireAlert.status
          console.log('Fire alert status: '+this.alertFire)
        }
      }
    }
}
</script>

<style scoped>
    
</style>