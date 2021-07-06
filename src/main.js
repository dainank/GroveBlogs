import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(Vue2Editor);  // initialising editor

Vue.config.productionTip = false;

let app;  // check app initialization
firebase.auth().onAuthStateChanged(() => {  // makes sure firebase is in sync with application
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
})


