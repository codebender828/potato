import Vue from "vue";
import VueCodemirror from "vue-codemirror";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./scss/_theme.scss";
import "codemirror/lib/codemirror.css";

// Codemirror plugin
Vue.use(VueCodemirror);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
