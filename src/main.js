import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";

import vuetify from "./plugings/vuetify"; // path to vuetify export

// import { library } from "@fortawesome/fontawesome-svg-core";

// import "animate.css/animate.css";
Vue.config.productionTip = false;

// import {
//   faShoppingCart,
//   faDollarSign
// } from "@fortawesome/free-solid-svg-icons";

// library.add(faShoppingCart, faDollarSign);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
