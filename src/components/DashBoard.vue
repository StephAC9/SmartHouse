<template>
  <div class="dashboard"> 
        <div>    
            <FavoriteDevices></FavoriteDevices>
        </div>
        <div>
            <Rooms></Rooms>
        </div>
        </div>
</template>

<script>
import FavoriteDevices from './FavoriteDevices'
import Rooms from './Rooms'

  export default {
    name: 'DashBoard',
    components:{
        FavoriteDevices,
        Rooms
    },
  }

</script>

<style scoped>

.dashboard{
    display: flex;
    flex-direction: column;
    justify-content: space-between
}
</style>