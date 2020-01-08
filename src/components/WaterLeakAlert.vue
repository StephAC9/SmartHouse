<template>
    <v-alert type="warning">
        WARNING!!! You have water leaking somewhere in the house.
    </v-alert>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("users");
import { watch } from 'fs'
export default {
    name:'WaterLeakAlert'    
}
</script>

<style scoped>
    
</style>