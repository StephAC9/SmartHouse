<template>
  <div class="welcome-container">
    <div class="container-child"></div>

    <div class="container-child">
      <v-card class="elevation-12">
        <v-toolbar color="dark" dark>
          <v-toolbar-title style="color:gray">Login</v-toolbar-title>
          <div class="flex-grow-1"></div>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <div class="login-detail">
              <span style="margin-top:24px;margin-right:10px">
                <v-icon>{{ icons.mdiAccount }}</v-icon>
              </span>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                color="dark"
                label="Email"
                name="email"
                type="email"
              ></v-text-field>

              <!--  USE THIS TO CHANGE EMAIL TO USERNAME AND REMOVE ABOVE
                                    <v-text-field
                                    v-model="username"
                                    :rules="nameRules"
                                    color="dark"
                                    label="Username"
                                    name="username"
                                    type="name" >
                                </v-text-field>
              -->
            </div>
            <div class="login-detail">
              <span style="margin-top:24px;margin-right:10px">
                <v-icon>{{ icons.mdiLock }}</v-icon>
              </span>
              <v-text-field
                v-model="password"
                id="password"
                color="dark"
                label="Password"
                name="password"
                type="password"
              ></v-text-field>
            </div>
          </v-form>
          <v-card-actions style="margin-top:20px">
            <div class="flex-grow-1"></div>
            <v-btn
              @click="logMeIn"
              color="dark"
              style="margin-right:10px; font-size:10px; font-style:bold"
            >
              <strong>Login</strong>
            </v-btn>
          </v-card-actions>
        </v-card-text>
        <v-btn @click="gotoSignup" text style="margin: 10px">
          <label>
            <strong>Create new account</strong>
          </label>
        </v-btn>
        <hr />
        <v-btn x-large color="rgb(250, 230, 197)" dark style="width:100%; font-size:10px">
          <label>
            <strong>Recover your password</strong>
          </label>
        </v-btn>
      </v-card>

      <v-dialog v-model="show_loginFailed_dialog" hide-overlay persistent max-width="290">
        <v-card color="red">
          <v-card-title class="headline">
            <b>Oops!!</b>
          </v-card-title>
        </v-card>

        <v-card-text class="white">
          <span style="color:red">Incorrect Username or Password!</span>
        </v-card-text>

        <v-card-actions class="white">
          <div class="flex-grow-1"></div>
          <v-btn color="gray" @click="show_loginFailed_dialog = false">OK</v-btn>
        </v-card-actions>
      </v-dialog>
    </div>
    <div class="container-child"></div>
  </div>
</template>

<script>
import { mdiAccount, mdiDelete, mdiLock } from "@mdi/js";
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("users");

export default {
  name: "WelcomePage",

  props: {
    prepend: String
  },

  data() {
    return {
      show_loginFailed_dialog: false,
      email: "",
      //CHANGE EMAIL TO: username: '',
      password: "",
      icons: {
        mdiAccount,
        mdiDelete,
        mdiLock
      },
      emailRules: [
        v =>
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v.toLowerCase()
          ) || "Invalid E-mail address"
      ]
      /* USE THIS TO CHANGE EMAIL TO USENAME AND REMOVE ABOVE
                nameRules: [
                v => !!v || 'Name is required',
                v => new RegExp('^(.{3,25}$)').test(v) || 'Name must be atleast 3 and atmost 25 characters long',
                v => /^([a-ö']+(-| )?)+$/i.test(v) || 'Name is not valid'
            ],
            */
    };
  },
  computed: {
    ...mapGetters(["user"]),
    ...mapGetters(["getUser_not_found"]),
    ...mapGetters(["getsignInSuccessAlert"])
  },

  methods: {
    logMeIn() {
      console.log("signing in...");
      console.log(this.getUser_not_found);
      this.$store.dispatch("users/signIn", {
        email: this.email,
        password: this.password
      });

      //USE THIS TO USE USERNAME INSTEAD OF EMAIL AND REMOVE ABOVE
      //this.$store.dispatch('users/signIn',{username: this.username, password: this.password})

      setTimeout(() => {
        if (this.getUser_not_found === true) {
          this.email = "";
          this.password = "";
          this.show_loginFailed_dialog = true;
        }
      }, 2500);
    },
    gotoSignup() {
      this.$router.push("/signup");
    }
  },
  created() {
    this.$vuetify.theme.dark = false;
  },

  watch: {
    user(value) {
      if (value !== null || value !== undefined) {
        setTimeout(() => {
          this.$router.push({ name: "profilepage" });
        }, 1000);
      }
    }
  }
};
</script>

<style scoped>
.welcome-container {
  align-content: center;
  margin: 10%;
  display: flex;
  justify-content: space-evenly;
}

.container-child {
  min-width: 270px;
  flex-basis: 30%;
  align-content: center;
}

.login-detail {
  text-align: center;
  display: flex;
}

label {
  color: rgb(93, 107, 112);
}
label:hover {
  color: rgb(78, 240, 240);
}
</style>