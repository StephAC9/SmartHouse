<template>
    <div class="container-devices" >
        <v-card class="device-contain" v-for="(device,index) in CurrentRoom.devices" :key="index"> 
            <img :src="require(`@/assets/${device.imgUrl}.jpg`)" alt="Avatar" style="width:80%; height:70%">
            <div class="container">
            <div style="flex-basis:50%; text-align:end">
                <h2><b>{{device.deviceName}}</b></h2>
            </div>
            <div style="flex-basis:50%; text-align:end; margin-top:15px">
                <v-icon color="rgb(250, 200, 200,1)" left style="width:15px" @click="deleteDevice(device.key)">{{ icons.mdiDelete }}</v-icon>
            </div>
            </div>            
       </v-card>
    </div>
</template>

<script>
import {
    mdiDelete,
  } from '@mdi/js'
  import {createNamespacedHelpers} from 'vuex'
const {mapGetters} = createNamespacedHelpers('users')
export default {
    name:'DeviceItems',

    props:['currentRoom'],

    data(){
        return{
            dialog: false,

            icons: {
                mdiDelete,
            }
        }
    },

    watch:{
        currentRoom(v){
            if(v !== null || v !== undefined)
            console.log('In deviceitems')
            console.log(this.currentRoom)
        }
    },
    computed:{
        ...mapGetters(['user']),

    },

    created(){
        console.log('In deviceitems')
        console.log(this.currentRoom)
        //this.$store.dispatch('getRoom',{userId: user.id ,roomId: this.currentRoom.key})
        //this.$store.dispatch('users/fetchRooms',{id: this.user.id})
    },

    

    //  methods:{
    //     deleteRoom(roomId){
    //         this.$emit('deleteRoom', roomId)
    //     },
    //     gotoRoom(){
    //         this.$router.push('/room')
    //     },
    //}
}
</script>

<style scoped>

.container-devices{
      background-color: rgb(153, 149, 149,1);
      border-radius: 10px;
      display: flex;
      justify-content: space-around;      
      padding: 10px;
      flex-wrap:wrap;
      background-size: cover;
      overflow:hidden;
  }

  .device-contain {
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

.device-contain:hover {
  box-shadow: 0 10px 19px 0 rgba(251, 252, 252, 0.2);
} 

 .container {
    display: flex;
    padding: 5px;
}

</style>