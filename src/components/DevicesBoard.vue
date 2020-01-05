<template>
    <div>
        <div class="devices-board">
            <div class="column" style="flex:1;color:grey">
                <Favorites :user="user" :id="id"></Favorites>
            </div>
            <div class="column" style="flex:2; color:rgb(233, 226, 226);">
                <Devices :id="id" :user="user"></Devices> 
            </div>
            <div class="column" style="flex:1;"></div>
        </div>

    </div>
</template>
<script>
import Favorites from './Favorites'
import Devices from './Devices'
import {createNamespacedHelpers} from 'vuex'
const {mapGetters} = createNamespacedHelpers('users')

export default {
    name:'DevicesBoard',

     components:{
         Devices,
         Favorites
     },

    props:['id'],

    computed:{
        ...mapGetters(['user','currentRoom']),
    },
   
     created () {
      this.$vuetify.theme.dark = false
      this.$store.dispatch('users/fetchCurrentRoom',{userId: this.user.id ,roomId: this.id})
      this.$store.dispatch('users/fetchDevices',{userId: this.user.id, roomId: this.id})
    },
}
</script>
<style scoped>
    .devices-board{
      display: flex;
    }

    .column{
        text-align: center;
    }

    main-column{
        display: flex;
        flex-direction: column;
    }

</style>