<template>
  <div style="backgroud: rgb(153, 149, 149,1)">
      <v-btn class="btn" dark @click="openHouse"><span><v-icon color="red">mdi-home</v-icon></span>TestHouse</v-btn>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const {mapGetters} = createNamespacedHelpers('users')
import {
    mdiDelete,
    mdiHeart
  } from '@mdi/js'
  export default {
    name:'House',

    data () {
      return {
        dialog: false,
        icons: {
                mdiDelete,
                mdiHeart
            },
      }
    },

    methods:{
      openHouse(){
        this.$router.push({name:'test-house'})
      }
    },
  }
</script>

<style scoped>

    @media screen and (max-width: 660px) {
        .btn{
            font-size:5px;
            margin-right:5px;
            width: 30px;
        }
    }
</style>