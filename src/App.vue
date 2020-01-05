<template>
  <v-app id="app">
    <MainHeader></MainHeader>
    <v-content>
      <v-container fluid>
        <v-alert v-model="alarmFire.flag" type="error">
             FIRE ALARM IS ON !!!
        </v-alert>
        <v-alert v-model="alarmWaterLeakage.flag" type="error">
             WATER LEAKAGE ALARM IS ON !!!
        </v-alert>
        <v-alert v-model="alarmHouseBreakin.flag" type="error">
             HOUSE BREAKIN ALARM ON !!!
        </v-alert>
        <v-alert v-model="getsignUpSuccessAlert" type="success">
            Account created successfuly. <span style="margin:3px;color:white;font-size:17px">YOU CAN LOGIN NOW !!!</span>
        </v-alert>
        <v-alert v-model="getsignInSuccessAlert" type="success">
            Welcome  <span style="margin:3px;color:white;font-size:17px">{{user.name}}</span>
        </v-alert>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer>
      <div class="px-4">&copy; {{ new Date().getFullYear() }}  <span style="font-size: 11px">Smart House web remote control. A software engineering 2 project. By Oskar, Stephan and Elias</span></div>
    </v-footer>
  </v-app>
</template>

<script>
import MainHeader from './components/MainHeader'
 import { mapGetters } from 'vuex';
  export default {
    name:'app',

    components:{
      MainHeader
    },
    computed:{
      ...mapGetters('test_house',['alarmFire','alarmWaterLeakage','alarmHouseBreakin']),
      ...mapGetters('users',['user','getsignUpSuccessAlert','getsignInSuccessAlert']),
    
    },

    watch:{
      getsignUpSuccessAlert(value){
        setTimeout(() => (this.$store.dispatch('users/resetSignUpSuccessAlert')), 5000)
      },

      getsignInSuccessAlert(value){
        setTimeout(() => (this.$store.dispatch('users/resetSignInSuccessAlert')), 3000)
      },

      alarmFire(v){
        if(v){
          console.log(this.alarmFire.flag)
        }
      }

    }
  }
</script>

<style>

#app {
  background-image: url("./assets/bg12.jpg");
  background-size: cover;
  overflow:hidden;
}
  
</style>
