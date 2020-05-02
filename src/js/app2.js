"use strict";
const app = new Vue({
  el: "#app",
  data: {
    country: [],
    current_state: {}
  },
  mounted: async function () {
    this.country = await getData();
    let region_0 = this.country[0];
    this.current_state = region_0.estados[0];
  },
  methods: {
      loadState: function(entidad){
          console.warn(entidad);
          this.current_state = entidad;
      }
  }
});


