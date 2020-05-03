"use strict";
const app = new Vue({
  el: "#app",
  data: {
    country: [],
    current_state: {},
    carousel: 0
  },
  mounted: async function () {
    this.country = await getData();
    let region_0 = this.country[0];
    this.current_state = region_0.estados[0];
  },
  methods: {
      loadState: function(entidad){
        this.carousel = 1;
        this.current_state = entidad;
        //this.carousel = 0;
        setTimeout(()=>{
          this.carousel = 0;
        },100);
      }
  }
});


