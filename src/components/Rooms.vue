<template>
 <div class="main-container-rooms">
    <div>
      <h2><strong>AVAILABLE ROOMS</strong></h2>
    </div>

    <div>
        <AddRoom ></AddRoom>
    </div>
    <!-- <div>

        <DeleteNotice v-model="dialog"></DeleteNotice>
    </div> -->

    <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
            <v-card-title class="headline">DELETION NOTICE</v-card-title>
            <v-card-text>This room with all the devices in it will be completely removed <span style="font-size:25px; color:red;font-style:bold">!!!</span></v-card-text>
            <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="grey darken-1" text @click="dialog = false">Cancel</v-btn>
            <v-btn color="red darken-1" text @click="deleteRoom">Delete</v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>

        <RoomItem v-bind:rooms="rooms" @showDeleteDialog="showDeleteDialog"></RoomItem>
</div>
</template>

<script>
import DeleteNotice from './DeleteNotice'
import AddRoom from './AddRoom'
import RoomItem from './RoomItem'
import {createNamespacedHelpers} from 'vuex'
const {mapGetters} = createNamespacedHelpers('users')
import {
    mdiDelete,
  } from '@mdi/js'
export default {
    name:'Rooms',

    components:{
        AddRoom,
        RoomItem,
        DeleteNotice
    },

    data(){
        return{
            dialog: false,
            roomId:'',

            icons: {
                mdiDelete,
            }
        }
    },

    computed:{
         ...mapGetters(['rooms']),
         ...mapGetters(['user'])
    },

     created () {
      this.$vuetify.theme.dark = false
      if (this.user.id !== null || this.user.id !== undefined)
            this.$store.dispatch('users/fetchRooms',{id: this.user.id})
            console.log(this.user)
    },

    methods:{
        showDeleteDialog(roomId){ 
            this.roomId = roomId
            this.dialog = true
        },

        deleteRoom(){
            this.dialog = false
            this.$store.dispatch('users/deleteRoom',{roomId: this.roomId, userId: this.user.id}) // Remove room from the database
            this.$store.dispatch('users/fetchRooms',{id: this.user.id}) // reload state of room sothat you have new state without the room that have been removed
        }
    }
    
}
</script>

<style scoped>


  .main-container-rooms{
      text-align: center;
      display: flex;
      flex-direction:column;
      border-radius: 10px;
      background: rgb(114, 114, 112);
      padding: 10px;
      justify-content: space-between;
      flex-wrap:wrap;
  }

</style>