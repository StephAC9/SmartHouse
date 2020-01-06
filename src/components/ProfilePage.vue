
<template>
    <div class="ownerPage">
        <template>
  <v-card
  style="background:rgb(220, 220, 220)"
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >

<v-img
height="250"
src="../assets/animated-house.png">
</v-img>
     
    <v-card-title>Personal Details</v-card-title>

    <v-card-text>
     {{username}}
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-list v-for="(house, h) in houses" :key = "h" style="background:rgb(220, 220, 220)">
    <v-card-text class="houseMessage">
        {{ house.message }}
    </v-card-text>

    <v-card-actions class ="justify-center">
      <v-btn 
          style="background-color: lightgray"
        @click="goInHouse(house.message)"
      >Go in
      </v-btn>
    </v-card-actions>

    <v-divider class="mx-4"></v-divider>
    </v-list>

    <v-card-actions class="justify-center">
    <v-btn 
        style="margin-right: 50px"
        class="button-fix"
    >New house
    </v-btn>

    <v-btn 
        style="margin-left: 50px"
        class="button-fix"
    >Load house</v-btn>
    </v-card-actions>
    </v-card>

    </template>
    </div>
    </template>
<script>
import {createNamespacedHelpers} from 'vuex';

const {mapGetters} = createNamespacedHelpers('test')
  export default {
    
    data: () => ({
      username: 'Sven',
      loading: false,
      selection: 1,
      selectedImage: null,
      image: null,
      houses: [
          {message: 'Strandgatan 45b'},
          {message: 'Hästvägen 11'},
          {message: 'Buskstigen 1'}
      ]
    }),
    

    computed:{
      ...mapGetters(['getCurrentOwner','isTokenExpired']),
      ...mapGetters('getHouses')
    },

    watch:{
    //   isTokenExpired(val){
    //     console.log('in ownerpage')
    //     console.log('isTokenExpired: '+val)
    //   }
    },

    // created(){
    //   this.$store.dispatch('test/isTokenExpired')  
    //   this.$store.dispatch('test/fetchFavorites')
    //   if(this.getCurrentOwner.name !== 'Visitor/ No one logged in'){
    //   const timerID = setInterval(() => this.$store.dispatch('test/stoveOn'), 5000);
    //   }else clearInterval(timerID)
    // },
  

    methods: {
      goInHouse (msg) {
          console.log(msg)
        this.loading = true
        setTimeout(() => this.loading = false, 2000)
        this.$router.push('/rooms')
      },
    }
}

      
  
</script>

<style scoped>
.houseMessage {
    text-align: center;
    font-size: 18px;
}

.button-fix { 
    background-color: lightgray !important;
    font-size: 10px;
    height: 25px !important;
}
</style>