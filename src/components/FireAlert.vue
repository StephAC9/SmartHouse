<template>
    <v-alert type="error">
      WARNING!!! The house fire alert in on.
    </v-alert>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("users");
export default {
    name:'FireAlert',
}
</script>

<style scoped>
    
</style>