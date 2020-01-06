<template>
  <div>
    <div style="text-align:center; font-size:16px; font-style:italic">
      <p style="padding:40px">
        <strong>
          A smart home is a residence that uses internet-connected devices to enable the remote monitoring and management of appliances and systems, such as lighting and heating.
          Smart home technology, also often referred to as home automation or domotics (from the Latin "domus" meaning home), provides homeowners security, comfort, convenience
          and energy efficiency by allowing them to control smart devices, often by a smart home app on their smartphone or other networked device.
        </strong>
      </p>
    </div>

    <v-carousel cycle height="300" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">{{ item.alt }}</div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("../assets/one.jpg"),
          alt: "Control your home from this website!"
        },
        {
          src: require("../assets/two.png"),
          alt: "Connect all your devices and control them remotely!"
        },
        {
          src: require("../assets/three.jpg"),
          alt: "Bring the future to your home, Today!"
        },
        { src: require("../assets/four.jpg"), alt: "Download our android app!" }
      ]
    };
  }
};
</script>

<style scoped>
.display-3 {
  padding: 7%;
  text-align: center;
  color: white;
}
</style>