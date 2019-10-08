import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import firebase from "firebase";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  methods: {},
  created() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyA_YapuxOyvMGFc0dPaB4hgm5Lds0xGP3E",
      authDomain: "vue-pokedex-86c27.firebaseapp.com",
      databaseURL: "https://vue-pokedex-86c27.firebaseio.com",
      projectId: "vue-pokedex-86c27",
      storageBucket: "",
      messagingSenderId: "751288359991",
      appId: "1:751288359991:web:84b19bad2ee7b2fec1b3b2",
      measurementId: "G-5M2KZ4KHTC"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}).$mount("#app");
