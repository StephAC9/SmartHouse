<template>
    <div class="notification-main-container">
        <div class="my-2 ref">
             <House style="margin-top: 5px"></House>
        </div>
        <div></div>
        <div class="temp-display">
            <div><strong><span class="ref">TEMPERATURE IN  </span> <span class="data">  {{sensor.internalTemp}}°C</span></strong></div>
            <div><strong><span class="ref">TEMPERATURE OUT </span> <span class="data">{{sensor.externalTemp}}°C</span></strong></div>
            <div><strong><span class="ref">EL CONSUMPTION  </span> <span class="data">{{sensor.electricalConsumption}} KW</span></strong></div>
        </div>
    </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const {mapGetters} = createNamespacedHelpers('test_house')
import Favorites from './Favorites'
import House from './House'
  export default {
      name:'NotificationsBar',

      components:{
          House
      },

      computed:{
          ...mapGetters(['sensor'])
      },

      watch:{
          sensor(v){
              if(v){
                  console.log(this.sensor)
              }
          }
      },
     
        data () {
            return {
                temperatureIn: 20,
                temperatureOut: 5
            }
        },
  }
</script>

<style scoped>
    .notification-main-container{
        display: flex;
        flex-basis: 20%;
        justify-content: space-around
    }
    .temp-display{
        display: flex;
        flex-direction: column;
        justify-content: end;        
    }

    .ref{
        color: rgb(139, 137, 137);
        font-size: 11px
    }
    .data{
        color: rgb(230, 119, 15);
        font-size: 11px
    }
</style>
