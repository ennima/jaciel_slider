"use strict";
const app = new Vue({
  el: "#app",
  data: {
    country: [],
  },
  mounted: async function () {
    this.country = await getData();
  },
  methods: {
      loadState: function(entidad){
          console.warn(entidad);
      }
  }
});

