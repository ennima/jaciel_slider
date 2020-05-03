/** ES8 */

/* const zona = {
  estado_id,
  nombre,
  coleccion_casas,
};

const casa = {
  imagenes: [url],
};

const estado = {
  nombre,
  icono,
  coleccion_casas: [
    {
      casa: {
        imagenes: [],
      },
    },
  ],
};

const region = {
  nombre: "Centro",
  estados: [],
}; */


function getData() {
  // Modificar esta estructura de datos
  const pais = [
    {
      nombre: "Norte",
      estados: [
        {
          nombre: "BC Norte",
          icono: "",
          coleccion_casas: [
            {
              img: "./images/casa_5_1.jpg",
              title: "ii",
              caption: "oo",
            },
            {
              img: "./images/casa_5_2.jpg",
              title: "",
              caption: "",
            },
            {
              img: "./images/casa_5_3.jpg",
              title: "",
              caption: "",
            },
          ],
        },
      ],
    },
    {
      nombre: "Centro",
      estados: [
        {
          nombre: "CDMX",
          icono: "",
          coleccion_casas: [
            {
              img: "./images/casa_6_1.jpg",
              title: "ii",
              caption: "oo",
            },
            {
              img: "./images/casa_6_2.jpg",
              title: "",
              caption: "",
            },
          ],
        },
      ],
    },
    {
      nombre: "Sur",
      estados: [
        {
          nombre: "Oaxaca",
          icono: "",
          coleccion_casas: [
            {
              img: "./images/casa_27_1.jpg",
              title: "ii",
              caption: "oo",
            },
            {
              img: "./images/casa_27_2.jpg",
              title: "",
              caption: "",
            },
          ],
        },
        {
          nombre: "Chiapas",
          icono: "",
          coleccion_casas: [
            {
              img: "./images/casa_26_1.jpg",
              title: "ii",
              caption: "oo",
            },
            {
              img: "./images/casa_26_2.jpg",
              title: "",
              caption: "",
            },
          ],
        },
        {
          nombre: "Veracruz",
          icono: "",
          coleccion_casas: [
            {
              img: "./images/casa_25_1.jpg",
              title: "ii",
              caption: "oo",
            },
            {
              img: "./images/casa_25_2.jpg",
              title: "",
              caption: "",
            },
            {
              img: "./images/casa_25_3.jpg",
              title: "",
              caption: "",
            },
          ],
        },
      ],
    },
  ];
  return new Promise(function (resolve, reject) {
    resolve(pais);
  });
}
