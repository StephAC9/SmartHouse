<template>
    <div class="container-rooms" >
        <v-card class="room-contain" v-for="(room,index) in rooms" :key="index"> 
            <img @click="gotoRoom(room.key)" :src="require(`@/assets/${room.imgUrl}.jpg`)" alt="Avatar" style="width:80%; height:70%">
            <div class="container">
            <div style="flex-basis:50%; text-align:end">
                <h2><b>{{room.roomName}}</b></h2>
                <h4><span>{{room.nbrOfDevices }}</span> devices </h4>  
            </div>
            <div style="flex-basis:50%; text-align:end; margin-top:15px">
                <v-icon color="rgb(255, 50, 50,1)" left style="width:25px" @click="showDeleteDialog(room.key)">{{ icons.mdiDelete }}</v-icon>
            </div>
            </div>            
       </v-card>
    </div>
</template>

<script>
import {
    mdiDelete,
  } from '@mdi/js'
export default {
    name:'RoomItem',

    props:['rooms'],

    data(){
        return{
            dialog: false,

            icons: {
                mdiDelete,
            }
        }
    },

     methods:{
        showDeleteDialog(roomId){
            this.$emit('showDeleteDialog', roomId)
        },
        gotoRoom(roomId){
            this.$router.push({name: 'room', params: { id: roomId}})
        },


    }
}
</script>

<style scoped>

.container-rooms{
      background-color: rgb(153, 149, 149,1);
      border-radius: 10px;
      display: flex;
      justify-content: space-around;      
      padding: 10px;
      flex-wrap:wrap;
      background-size: cover;
      overflow:hidden;
  }

  .room-contain {
    margin-top: 10px;  
    font-size: 10px;  
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s; 
    max-width: 300px;
    min-width: 200px;
    max-height: 200px;
    padding: 10px; 
    border-radius: 10px;
}

.room-contain:hover {
  box-shadow: 0 10px 19px 0 rgba(251, 252, 252, 0.2);
} 

 .container {
    display: flex;
    padding: 5px;
}

</style>