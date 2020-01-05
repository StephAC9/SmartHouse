<template>  
<div class="adding-room-container">
    <div class="title">
        <span style="font-size:12px; color:darkgray">Add room</span>
    </div>
    <div class="menus">
        <v-menu top :close-on-content-click="closeOnContentClick">
            <template v-slot:activator="{ on }">
                <v-btn class="add-room" color="grey" dark v-on="on" > <strong>ROOM</strong> </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(title, index) in roomNames" :key="index" @click="selectRoom(title.text)" >
                <v-list-item-title>{{ title.text }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Confirm</v-card-title>

        <v-card-text>
            <span >Would like to add the <b>{{selectedRoom}}?</b></span>
        </v-card-text>

        <v-card-actions>
          <div class="flex-grow-1"></div>

          <v-btn
            color="gray"
            text
            @click="dialog = false" >
            ABANDON
          </v-btn>
        <v-btn
            :disabled="loadingDialog"
            :loading="loadingDialog"
            color="gray"
            @click="onAddClicked"> 
            ADD
        </v-btn>
            <v-dialog
            v-model="loadingDialog"
            hide-overlay
            persistent
            width="300"
            >
            <v-card color="dark" dark >
                <v-card-text>
                Please wait
                <v-progress-linear
                    indeterminate
                    color="white"
                    class="mb-0"
                ></v-progress-linear>
                </v-card-text>
            </v-card>
            </v-dialog>
        </v-card-actions>
      </v-card>
    </v-dialog>
</div>      


</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const {mapGetters} = createNamespacedHelpers('users')
export default {
    name:'AddRoom',

    data(){
        return{
            dialog: false,
            loadingDialog :false,
            selectedRoom:'',
            roomName:'',
            imgUrl:'',
            userID:'',
            roomNames: [
                { text: 'Livingroom' },
                { text: 'Bedroom' },
                { text: 'Kitchen' },
                { text: 'Office' },
            ],
            closeOnContentClick: true,
        }
    },
        computed:{
            ...mapGetters(['user'])
        },
        
    methods:{
        selectRoom(value){
             this.selectedRoom = value
             this.dialog = true

            switch(this.selectedRoom){
                case'Livingroom':
                this.roomName = 'Livingroom'
                this.imgUrl = 'living_room'
                break
                case'Bedroom':
                this.roomName = 'Bedroom'
                this.imgUrl = 'bedroom'
                break
                case'Kitchen':
                this.roomName = 'Kitchen'
                this.imgUrl = 'kitchen'
                break
                case'Office':
                this.roomName = 'Office'
                this.imgUrl = 'office'
                break
            }
        },


        onAddClicked () {
            console.log(this.user)
            this.loadingDialog = true
             this.$store.dispatch('users/addNewRoom',{userId: this.user.id,roomName: this.roomName, imageUrl: this.imgUrl})
             //window.location.reload()

             if (this.user.id !== null || this.user.id !== undefined)
                 this.$store.dispatch('users/fetchRooms',{id: this.user.id})
        },
    
    
    },



     watch: {
      loadingDialog (val) {
        if (!val) return
        setTimeout(() => (this.loadingDialog = false), 500)
        this.dialog = false
      },

      user(value){
          if(value !== null || value !== undefined)
          console.log(this.user)
      }
    },
    
}
</script>

<style scoped>
    .adding-room-container{
        text-align: center;
        border-radius: 10px;
        padding: 10px;
        max-width: 100px;
        min-width: 80px;
        margin: 20px;
        box-shadow: 0 10px 19px 0 rgba(0,0,0,0.2);
    }

    .add-btn{
        text-align: center;
        display: flex;
        justify-content: space-between;
        margin: 10px; 
    }

    .add-room {
        margin: 10px;
        width: 30px;
        font-size: 10px;  
        transition: 0.3s;
    }

    .add-room:hover {
        box-shadow: 0 10px 19px 0 rgba(0,0,0,0.2);
        background: grey;
        }

     .headline{
         background: rgb(233, 226, 226);
         padding: 20px;
         text-align: center;
         margin-bottom: 10px;
     }   

</style>