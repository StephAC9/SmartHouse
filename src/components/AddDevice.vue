<template>  
<div class="add-device">
        <v-menu top :close-on-content-click="closeOnContentClick" style="border-raduis:100%;max-width:40px">
            <template v-slot:activator="{ on }">
                <div dark v-on="on" > 
                    <v-btn class="mx-2" fab dark color="rgb(220, 220, 220)" style="margin:10px;width:30px; height:30px">
                        <v-icon dark>mdi-plus</v-icon>
                    </v-btn><span style="color:rgb(200, 200, 200);font-size:10px;margin-top:5px"><strong>ADD</strong></span>
                </div>
            </template>

            <v-list>
                <v-list-item v-for="(title, index) in devicesNames" :key="index" @click="selectDevice(title.text)" >
                <v-list-item-title>{{ title.text }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Confirm</v-card-title>

        <v-card-text>
            <span >Would like to add the <b>{{selectedDevice}}?</b></span>
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
    name:'AddDevice',
    props:['id'],

    data(){
        return{
            showList: false,
            dialog: false,
            loadingDialog :false,
            selectedDevice:'',
            deviceName:'',
            device_imgUrl:'',
            roomID:'',
            deviceStatus: false,
            devicesNames: [
                { text: 'Lamp' },
                { text: 'Coffe maker' },
                { text: 'Air-conditioner' },
                { text: 'Dishwasher' },
                { text: 'SmartTv' },
                { text: 'Windows blind' },
            ],
            closeOnContentClick: true,
        }
    },
        computed:{
            ...mapGetters(['user'])
        },
        
    methods:{
        selectDevice(value){
             this.selectedDevice = value
             this.dialog = true

            switch(this.selectedDevice){
                case'Lamp':
                this.deviceName = 'Lamp'
                this.device_imgUrl = 'lamp-off'
                break
                case'Coffe maker':
                this.deviceName = 'Coffee_Maker'
                this.device_imgUrl = 'coffee_maker'
                break
                case'Air-conditioner':
                this.deviceName = 'Air_conditioner'
                this.device_imgUrl = 'air_conditioner'
                break
                case'Dishwasher':
                this.deviceName = 'Dishwasher'
                this.device_imgUrl = 'dishwasher'
                break

                case'SmartTv':
                this.deviceName = 'SmartTv'
                this.device_imgUrl = 'smart_tv'
                break

                case'Windows blind':
                this.deviceName = 'Window blind'
                this.device_imgUrl = 'window_blind'
                break
            }
        },


        onAddClicked () {          
            this.loadingDialog = true
            this.$store.dispatch('users/addDevice',{userId: this.user.id, roomId: this.id, deviceName: this.deviceName, imgUrl: this.device_imgUrl, status: this.deviceStatus})
            this.$store.dispatch('users/fetchDevices',{userId: this.user.id, roomId: this.id})
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
    .add-device{
        cursor:pointer;
        text-align: center;
        border-radius: 100%;
        font-size: 12px;
        padding: 5px;
    }

    .add-btn{
        text-align: center;
        display: flex;
        justify-content: space-between;
        margin: 10px; 
    }

    .add-device:hover {
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