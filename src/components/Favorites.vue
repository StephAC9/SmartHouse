<template>
  <v-row justify="center">
    <v-dialog class="dialog" v-model="dialog" width="90%">
      <template  v-slot:activator="{ on }">
        <v-btn class="btn" dark v-on="on"><span><v-icon color="red">mdi-heart</v-icon></span> Favorites</v-btn>
      </template>
      <v-card class="dialog" >
        <v-card-title>
          <span class="headline"> <strong style="font-size:10px">FAVORITES</strong></span>
        </v-card-title><hr>
        <div class="container-devices" >
                <v-card class="device-contain" v-for="(device,index) in favorites" :key="index"> 
                    <div class="device-image">
                        <img :src="require(`@/assets/${device.imageUrl}.jpg`)" alt="Avatar" style="height: 50px; width:90%">
                    </div>
                    <div style="margin:3px">
                        <h4><b>{{device.deviceName}}</b></h4>
                    </div>
                    <div class="container-action">
                        <div>
                            <v-switch color="yellow" style="height: 20px"></v-switch>
                        </div>
                        <div style="text-align:end">
                            <v-btn text icon color="rgb(255, 100, 200,1)">
                                <v-icon style="width:5px;" @click="addToFavorite(device.id)">mdi-heart</v-icon>
                            </v-btn>
                            <v-icon color="rgb(255, 50, 50,1)" left style="width:20px" @click="deleteDevice(device.key)">{{ icons.mdiDelete }}</v-icon>
                        </div>
                    </div>            
            </v-card>
         </div>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="darken-1" text @click="dialog = false">Exit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const {mapGetters} = createNamespacedHelpers('users')
import {
    mdiDelete,
    mdiHeart
  } from '@mdi/js'
  export default {
    name:'Favorites',

    props:['user','id'],

    data () {
      return {
        dialog: false,
        icons: {
                mdiDelete,
                mdiHeart
            },
      }
    },

    watch:{
      currentRoom(v){
        if(v !== null || v !== undefined){
          console.log(this.currentRoom)
        }
      }
    },

    computed:{
      ...mapGetters(['favorites','currentRoom'])
    },

    created(){
      //window.location.reload()
      this.$store.dispatch('users/fetchFavorites',
                                              {
                                                userId: this.user.id,
                                                roomId: this.id
                                              })
      this.$store.dispatch('users/fetchCurrentRoom',{userId: this.user.id ,roomId: this.id})
      console.log(this.favorites)
    }
  }
</script>

<style scoped>
    .headline{
        border-radius: 10px;
        margin-left:27%;
        width: 50%;
        padding: 5px;
        background: darkgrey;
        text-align: center;
    }
    .dialog{
        max-height: 400px;
        background: grey;
    }
    .btn{
        margin-top: 40%;
    }

  .container-devices{
      background-color: rgb(153, 149, 149,1);
      border-radius: 10px;
      display: flex;
      justify-content: space-evenly;      
      padding: 10px;
      flex-wrap:wrap;     
      background-size: cover;
      overflow:hidden;
  }

  .device-contain {
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-around;   
    max-width: 130px;
    min-width: 130px;
    margin: 10px;
    padding: 5px; 
    border-radius: 10px;
}
    .container-action {
        border-radius: 10px;
        background: rgb(241, 238, 230);
        display: flex;
        padding: 5px;
        flex-direction: column;
    }

    @media screen and (max-width: 660px) {
        .btn{
            font-size:5px;
            margin-right:5px;
            width: 30px;
        }
    }
</style>