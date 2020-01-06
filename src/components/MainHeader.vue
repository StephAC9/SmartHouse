<template>
  <div class="main-nav-bar">
    <div class="app-title">
      <h1>SMART HOUSE</h1>
    </div>
    <div class="bar-container">
      <div class="bar-element">
        <NavigationBtn @goBack="goBack"></NavigationBtn>
      </div>

      <div class="bar-element">
        <img class="logo" src="@/assets/smarthus.png" alt="smart house" style="margin-top:20px" />
      </div>
      <div class="bar-element">
        <div class="bar_right_element" v-if="isActive">
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn color="#E1CFCF" dark v-on="on">
                <v-icon>{{ icons.mdiAccount }}</v-icon>
                <label class="user-name">{{userName}}</label>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                @click="selectedAction(item.title)"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

        <div class="bar_right_element" v-if="!isActive">
          <div class="element a" @click="gotoSignUp">
            <span>
              <v-icon>{{ icons.mdiAccount }}</v-icon>
              <span style="font-size:9px">
                <strong>SIGN UP</strong>
              </span>
            </span>
          </div>
          <div class="element a" @click="gotoSignIn">
            <div>
              <v-icon>{{ icons.mdiLock }}</v-icon>
              <span style="font-size:9px">
                <strong>SIGN IN</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <NotificationsBar></NotificationsBar>
    </div>
    <Alert-Danger class="alerts" v-if="alertOn"></Alert-Danger>
  </div>
</template>

<script>
import firebase from "firebase";
import AlertDanger from "./DangerAlert";
import WarningAlert from "./WarningAlert";
import NotificationsBar from "./NotificationsBar";
import NavigationBtn from "./NavigationBtn";
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("users");
import { mdiAccount, mdiLock } from "@mdi/js";
export default {
  name: "MainHeader",
  components: {
    AlertDanger,
    WarningAlert,
    NotificationsBar,
    NavigationBtn
  },
  props: {
    prepend: String
  },

  data() {
    return {
      alertOn: false,
      actionTitle: "",
      items: [{ title: "Profile" }, { title: "Log out" }],

      icons: {
        mdiAccount,
        mdiLock
      }
    };
  },
  computed: {
    ...mapGetters(["user", "userName"]),
    ...mapGetters(["isActive"])
  },

  watch: {
    user(value) {
      if (value !== null || value !== undefined) {
        console.log(this.user);
      }
    },

    isActive(value) {
      if (value === false) {
        console.log(this.isActive);
      }
    }
  },

  methods: {
    signOut() {
      console.log(this.isActive);
      firebase
        .auth()
        .signOut()
        .catch(error => {
          // An error happened.
          console.log(error.message);
        });
      this.$store.dispatch("users/logout");

      window.localStorage.clear();
      this.$router.replace("/");
    },

    gotoSignIn() {
      this.$router.push("/signin");
    },

    gotoSignUp() {
      this.$router.push("/signup");
    },

    selectedAction(value) {
      this.itemTitle = value;
      switch (this.itemTitle) {
        case "Profile":
          break;
        case "Log out":
          this.signOut();
          break;
      }
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.main-nav-bar {
  display: flex;
  flex-direction: column;
}
.app-title {
  /* background: rgb(44, 44, 44); */
  background: rgb(225, 207, 207);
  padding: 10px;
  color: rgb(126, 119, 119);
  text-align: center;
}

.logo {
  width: 30px;
  height: 30px;
}
.bar-container {
  text-align: center;
  background: rgb(209, 230, 225);
  display: flex;
  justify-content: space-between;
}
.bar-element {
  flex-basis: 30%;
}

.element {
  cursor: pointer;
  color: rgb(46, 44, 44);
}

.bar_right_element {
  display: flex;
  justify-content: space-evenly;
  padding: 8px;
}

label {
  color: rgb(247, 244, 244);
}
.element:hover {
  color: rgb(65, 62, 62);
}

.user-name {
  text-transform: lowercase;
  margin-top: 3px;
  margin-left: 5px;
  text-align: center;
  color: rgb(46, 44, 44);
}

.user-name::first-letter {
  text-transform: uppercase;
  font-weight: bold;
  /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
}
</style>