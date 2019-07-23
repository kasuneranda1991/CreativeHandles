import Vue from 'vue'
import App from './App.vue'
import DisableAutocomplete from 'vue-disable-autocomplete';
Vue.use(DisableAutocomplete);

new Vue({
  el: '#app',
  render: h => h(App)
})
