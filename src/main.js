import Vue from "vue";
import PrismicVue from "prismic-vue";
import linkResolver from "./prismic/link-resolver";
import htmlSerializer from "./prismic/html-serializer";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";

Vue.config.productionTip = false;

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver,
  htmlSerializer
});

new Vue({
  created() {
    AOS.init();
    var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1000
    });
  },
  router,
  render: h => h(App)
}).$mount("#app");
