// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Router from "./routes";
import axios from "axios";
import "./assets/styles.css";
import "jquery/src/jquery";
import "popper.js";
import "admin-lte/bower_components/bootstrap/dist/js/bootstrap.min.js";
import "admin-lte/dist/js/adminlte.min.js";
import VueToastr2 from "vue-toastr-2";
import "vue-toastr-2/dist/vue-toastr-2.min.css";

const baseURL = "http://localhost:8000/api";
Vue.prototype.$axios = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json"
  }
});
window.toastr = require("toastr");

Vue.use(VueToastr2);

Vue.config.productionTip = false;

/* eslint-disable no-new */

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  router: Router
});
