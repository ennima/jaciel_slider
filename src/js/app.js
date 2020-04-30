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
            bg: "./images/casa_4_1.jpg",
            img: "./images/casa_4_1.jpg",
            title: "",
            caption: "",
          },
          {
            bg: "./images/casa_4_2.jpg",
            img: "./images/casa_4_2.jpg",
            title: "",
            caption: "",
          },
        ],
      },
    ],
  },
  beforemount: function () {},
  mounted: function () {
    //alert("Ready");
  },
  methods: {
      loadEntidad: function(entidad) {
          console.log(entidad)
      }
  },
});
