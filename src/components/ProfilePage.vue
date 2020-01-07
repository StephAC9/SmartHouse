
<template>
  <div class="ownerPage">
    <template>
      <v-card
        style="background:rgb(220, 220, 220)"
        :loading="loading"
        class="mx-auto my-12"
        max-width="374"
      >
        <v-img height="250" src="../assets/animated-house.png"></v-img>

        <v-card-title>Personal Details</v-card-title>

        <v-card-text style="font-size:20px">{{userName}}</v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions class="justify-center">
          <!--  <v-btn 
        style="margin-right: 50px"
        class="button-fix"
    >ADD A HOUSE
          </v-btn>-->
          <!--     <AddHouse></AddHouse>
          -->
          <div class="dialog">
            <v-row justify="center">
              <v-btn color="light-grey" dark @click.stop="dialog1 = true">ADD NEW HOUSE</v-btn>

              <v-dialog v-model="dialog1" max-width="290">
                <v-card>
                  <v-card-text>
                    <div>
                      <v-text-field
                        v-model="houseName1"
                        color="dark"
                        label="Add a name"
                        name="HouseName1"
                        type="text"
                      ></v-text-field>

                      <v-text-field
                        v-model="housePassword"
                        color="dark"
                        label="House Password"
                        name="HousePassword"
                        type="password"
                      ></v-text-field>
                    </div>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="green darken-1" text @click="addHouse">SUBMIT</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </div>

          <!-- <v-btn 
        style="margin-left: 50px"
        class="button-fix"
          > ACCESS EXISTING HOUSE</v-btn>-->
          <div class="dialog">
            <v-row justify="center">
              <v-btn color="light-grey" dark @click.stop="dialog2 = true">ACCESS EXISTING HOUSE</v-btn>

              <v-dialog v-model="dialog2" max-width="290">
                <v-card>
                  <v-card-text>
                    <div>
                      <v-text-field
                        v-model="houseName2"
                        color="dark"
                        label="Add a name"
                        name="HouseName2"
                        type="text"
                      ></v-text-field>
                    </div>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="green darken-1" text @click="accessHouse">SUBMIT</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </div>
        </v-card-actions>
      </v-card>
    </template>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("users");
import AddHouse from "./AddHouse";
export default {
  components: {
    AddHouse
  },
  data: () => ({
    loading: false,
    selection: 1,
    selectedImage: null,
    image: null,
    houses: [
      { message: "Strandgatan 45b" },
      { message: "Hästvägen 11" },
      { message: "Buskstigen 1" }
    ],
    dialog1: false,
    dialog2: false,
    houseName1: "",
    houseName2: "",
    housePassword: "",
    houseAccessGranted: false,
  }),

  computed: {
    ...mapGetters(["userName",'houseAccess']),
    //...mapGetters("getHouses")
  },

  watch: {

  },


  methods: {
    goInHouse(msg) {
      console.log(msg);
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
      this.$router.push("/rooms");
    },

    accessHouse() {
      console.log('In Access House Method')
      this.dialog2 = false;
      const token = localStorage.getItem("token");
      this.$store.dispatch("users/accessHouse", {
        userName: this.userName,
        houseName: this.houseName2,
        token: token
      });
        if(this.houseAccess){
        console.log('House access: '+this.houseAccess)
        this.$router.push("/testhouse");
      }else{
        console.log('Errorrrr!!')
      } 
    },
    addHouse() {
      this.dialog1 = false;
      const token = localStorage.getItem("token");
      this.$store.dispatch("users/addHouse", {
        userName: this.userName,
        houseName: this.houseName1,
        password: this.housePassword,
        token: token
      });

    }
  }
};
</script>

<style scoped>
.houseMessage {
  text-align: center;
  font-size: 18px;
}

.button-fix {
  background-color: lightgray !important;
  font-size: 10px;
  height: 25px !important;
  margin: 20px;
}

.dialog {
  margin: 15px;
}
</style>