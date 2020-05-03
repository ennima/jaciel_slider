/**
 * Aquí vamos a contener la lógica de la app
 * Usaremos Vue por lo sencillo de implementar
 * Va muy bien con el problema a resolver
 *
 * Haremos algunas cosas no tan buenas en esta primera
 * refactorización, pero lo ideal será ir empujando
 * todo a una web app bien estructurada.
 *
 * El presente código está escrito en ES8
 * pero se transpilará a ES5
 */
"use strict";

const app = new Vue({
  el: "#app",
  data: {
    entidades: [
      {
        name: "Aguascalientes",
        slides: [
          {
            bg: "./images/casa_1.jpg",
            img: "./images/casa_1.jpg",
            title: "",
            caption: "",
          },
        ],
      },
      {
        name: "Baja California",
        slides: [
          {
            bg: "./images/casa_2_1.jpg",
            img: "./images/casa_2_1.jpg",
            title: "",
            caption: "",
          },
          {
            bg: "./images/casa_2_2.jpg",
            img: "./images/casa_2_2.jpg",
            title: "",
            caption: "",
          },
        ],
      },
      {
        name: "Baja California Sur",
        slides: [
          {
            bg: "./images/casa_3_1.jpg",
            img: "./images/casa_3_1.jpg",
            title: "",
            caption: "",
          },
          {
            bg: "./images/casa_3_2.jpg",
            img: "./images/casa_3_2.jpg",
            title: "",
            caption: "",
          },
        ],
      },
      {
        name: "Chiapas",
        slides: [
          {
            bg: "./images/casa_5_1.jpg",
            img: "./images/casa_5_1.jpg",
            title: "ii",
            caption: "oo",
          },
          {
            bg: "./images/casa_5_2.jpg",
            img: "./images/casa_5_2.jpg",
            title: "",
            caption: "",
          },
        ],
      },
    ],
    current_entidad: {},
    curr_entidad_bg: ""
  },
  beforemount: function () {},
  mounted: function () {
    //alert("Ready");
    this.loadEntidad(this.entidades[1])
  },

  watch: {
    current_entidad: function(val){
        console.log(val.slides[0].bg)
        console.log("FFF")
        this.curr_entidad_bg = `background-image:url(${val.slides[0].bg})`
    }
  },
  methods: {
      loadEntidad: function(entidad) {
          console.log(entidad)
          this.current_entidad = entidad;
          
      },
      getBg(slide) {
        return `background-image:url(${slide})`
      }
  },
});
