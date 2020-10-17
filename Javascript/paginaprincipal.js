let contenedordeproductosenventadelapaginaprincipal = document.getElementById(
  "contenedordeproductosenventadelapaginaprincipal"
);
window.onresize = () => {
  console.log(contenedordeproductosenventadelapaginaprincipal.offsetHeight);
};

// Configuracion de la barra de navegacion

let barradenavegacionpaginaprincipal = new BarradeNavegacion(
  "paginaprincipal",
  "paginadelaempresa.html",
  "#",
  "Nuevo",
  "#",
  "Ofertas",
  "paginadelaempresa.html",
  "Nosotoros",
  "iniciodesesion.html",
  "Iniciar Sesion"
);
barradenavegacionpaginaprincipal.agregarloalbody();
barradenavegacionpaginaprincipal.adaptaropcionesatamanospequenos();
barradenavegacionpaginaprincipal.adaptarinputdebusqueda();
barradenavegacionpaginaprincipal.buscarproducto();

// -----------------------------------------------------------------------------------------

// Busqueda de un producto en la barra de navegacion

const contenedordeinputdebusquedadeproductos = document.getElementById(
  "contenedordeinputdebusquedadeproductos"
);

const inputdebusquedadeproductos = document.getElementById(
  "inputdebusquedadeproductos"
);

let opcionesdebusquedadebarradenavegacion = document.createElement("div");
opcionesdebusquedadebarradenavegacion.setAttribute(
  "class",
  "opcionesdebusquedadebarradenavegacion"
);

inputdebusquedadeproductos.addEventListener("keyup", () => {
  console.log("se esta escribiendo algo en la barra de navegacion");
  opcionesdebusquedadebarradenavegacion.textContent =
    inputdebusquedadeproductos.value;
  console.log(inputdebusquedadeproductos.value);
  contenedordeinputdebusquedadeproductos.appendChild(
    opcionesdebusquedadebarradenavegacion
  );

  let resultadosdebusquedadebarradenavegacion = [];
});

inputdebusquedadeproductos.addEventListener("blur", () => {
  opcionesdebusquedadebarradenavegacion.remove();
});

// Configuracion del carrusel de productos

let carruseldeproductospaginaprincipal = new CarruseldeProductos(
  "paginaprincipal",
  "#",
  "https://www.revistaaral.com/uploads/s1/64/60/31/bodegon-sabor-del-ano-2018-46031.jpeg",
  "#",
  "https://www.revistaaral.com/uploads/s1/64/60/31/bodegon-sabor-del-ano-2018-46031.jpeg",
  "#",
  "https://www.revistaaral.com/uploads/s1/64/60/31/bodegon-sabor-del-ano-2018-46031.jpeg"
);
carruseldeproductospaginaprincipal.agregaralbody();

// -----------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------

// Carrusel de imagenes de productos nuevos y productos en oferta

const contenedordeimagenesdecarrusel = document.getElementById(
  "contenedordeimagenesdecarrusel"
);
const contenedordeimagendecarrusel = document.getElementById(
  "contenedordeimagendecarrusel"
);

const flechaizquierda = document.getElementById("flechaizquierda");
const flechaderecha = document.getElementById("flechaderecha");

const indicador1 = document.getElementById("indicador1");

indicador1.classList.add("indicadoractivo");

const indicador2 = document.getElementById("indicador2");

const indicador3 = document.getElementById("indicador3");

indicador1.addEventListener("click", (moverporindicador) => {
  contenedordeimagenesdecarrusel.scrollLeft =
    0 * contenedordeimagenesdecarrusel.offsetWidth;
  indicador1.classList.add("indicadoractivo");
  indicador2.classList.remove("indicadoractivo");
  indicador3.classList.remove("indicadoractivo");
  indicador1.style.backgroundColor = "red";
});

indicador2.addEventListener("click", (moverporindicador) => {
  contenedordeimagenesdecarrusel.scrollLeft =
    1 * contenedordeimagenesdecarrusel.offsetWidth;
  indicador2.classList.add("indicadoractivo");
  indicador1.classList.remove("indicadoractivo");
  indicador3.classList.remove("indicadoractivo");
  indicador1.style.backgroundColor = "#707070";
});

indicador3.addEventListener("click", (moverporindicador) => {
  contenedordeimagenesdecarrusel.scrollLeft =
    2 * contenedordeimagenesdecarrusel.offsetWidth;
  indicador3.classList.add("indicadoractivo");
  indicador2.classList.remove("indicadoractivo");
  indicador1.classList.remove("indicadoractivo");
  indicador1.style.backgroundColor = "#707070";
});

flechaderecha.addEventListener("click", (scrollhacialaderecha) => {
  contenedordeimagenesdecarrusel.scrollLeft +=
    contenedordeimagenesdecarrusel.offsetWidth;
  const indicadoractivo = document.querySelector(".indicadoractivo");
  if (indicadoractivo.nextElementSibling) {
    indicador1.style.backgroundColor = "#707070";
    indicadoractivo.nextElementSibling.classList.add("indicadoractivo");
    indicadoractivo.classList.remove("indicadoractivo");
  }
});

flechaizquierda.addEventListener("click", (scrollhacialaizquierda) => {
  contenedordeimagenesdecarrusel.scrollLeft -=
    contenedordeimagenesdecarrusel.offsetWidth;
  const indicadoractivo = document.querySelector(".indicadoractivo");
  if (indicadoractivo.previousElementSibling) {
    indicadoractivo.previousElementSibling.classList.add("indicadoractivo");
    indicadoractivo.classList.remove("indicadoractivo");
  }
  if (indicador1.getAttribute("class") === "indicador indicadoractivo") {
    indicador1.style.backgroundColor = "red";
  }
});

// -----------------------------------------------------------------------------------------

// Configuracion de los productos en oferta

let productosdestacados = [];

basededatos
  .collection("productos")
  .get()
  .then((informacion) => {
    informacion.docs.forEach((producto) => {
      let productoid = producto.id;
      let productoinformacion = producto.data();
      console.log(productoinformacion);
      productosdestacados.push(productoinformacion);
      console.log(productosdestacados);
      let productodestacadoobtenido1 = productosdestacados[0];
      let productodestacadoobtenido2 = productosdestacados[1];
      let productodestacadoobtenido3 = productosdestacados[2];
      let productodestacadoobtenido4 = productosdestacados[3];
      console.log(
        productodestacadoobtenido1,
        productodestacadoobtenido2,
        productodestacadoobtenido3,
        productodestacadoobtenido4
      );

      let contendordeproductosdestacados = new ContendordeProductos(
        "paginaprincipal",
        "productosenventadelapaginaprincipal",
        "destacados",
        "Destacados"
      );
      contendordeproductosdestacados.agregaralbody();

      let productodestacado1 = new CartadeProducto(
        "paginaprincipal",
        productodestacadoobtenido1,
        "destacados",
        "paginadecomprarproducto.html",
        "1",
        "2.1",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodestacado1.agregaralbody();
      productodestacado1.obtenerdatosparamostrar(productodestacadoobtenido1);
      productodestacado1.mostrarpaginadecompra(productodestacadoobtenido1);

      let productodestacado2 = new CartadeProducto(
        "destacados",
        productodestacadoobtenido2,
        "nuevo",
        "paginadecomprarproducto.html",
        "2",
        "2.2",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodestacado2.agregaralbody();
      productodestacado2.obtenerdatosparamostrar(productodestacadoobtenido2);
      productodestacado2.mostrarpaginadecompra(productodestacadoobtenido2);

      let productodestacado3 = new CartadeProducto(
        "paginaprincipal",
        productodestacadoobtenido3,
        "destacados",
        "paginadecomprarproducto.html",
        "3",
        "2.3",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodestacado3.agregaralbody();
      productodestacado3.obtenerdatosparamostrar(productodestacadoobtenido3);
      productodestacado3.mostrarpaginadecompra(productodestacadoobtenido3);

      let productodestacado4 = new CartadeProducto(
        "paginaprincipal",
        productodestacadoobtenido4,
        "destacados",
        "paginadecomprarproducto.html",
        "4",
        "2.4",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodestacado4.agregaralbody();
      productodestacado4.obtenerdatosparamostrar(productodestacadoobtenido4);
      productodestacado4.mostrarpaginadecompra(productodestacadoobtenido4);
    });
  });

// -----------------------------------------------------------------------------------------

// Configuracion de los productos nuevos

let productosnuevos = [];

basededatos
  .collection("productos")
  .get()
  .then((informacion) => {
    informacion.docs.forEach((producto) => {
      let productoid = producto.id;
      let productoinformacion = producto.data();
      console.log(productoinformacion);
      productosnuevos.push(productoinformacion);
      console.log(productosnuevos);
      let productonuevoobtenido1 = productosnuevos[0];
      let productonuevoobtenido2 = productosnuevos[1];
      let productonuevoobtenido3 = productosnuevos[2];
      let productonuevoobtenido4 = productosnuevos[3];
      console.log(
        productonuevoobtenido1,
        productonuevoobtenido2,
        productonuevoobtenido3,
        productonuevoobtenido4
      );

      let contendordeproductosnuevos = new ContendordeProductos(
        "paginaprincipal",
        "productosenventadelapaginaprincipal",
        "nuevos",
        "Nuevo"
      );
      contendordeproductosnuevos.agregaralbody();

      let productonuevo1 = new CartadeProducto(
        "paginaprincipal",
        productonuevoobtenido1,
        "nuevos",
        "paginadecomprarproducto.html",
        "1",
        "2.1",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productonuevo1.agregaralbody();
      productonuevo1.obtenerdatosparamostrar(productonuevoobtenido1);
      productonuevo1.mostrarpaginadecompra(productonuevoobtenido1);

      let productonuevo2 = new CartadeProducto(
        "paginaprincipal",
        productonuevoobtenido2,
        "nuevos",
        "paginadecomprarproducto.html",
        "2",
        "2.2",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productonuevo2.agregaralbody();
      productonuevo2.obtenerdatosparamostrar(productonuevoobtenido2);
      productonuevo2.mostrarpaginadecompra(productonuevoobtenido2);

      let productonuevo3 = new CartadeProducto(
        "paginaprincipal",
        productonuevoobtenido3,
        "nuevos",
        "paginadecomprarproducto.html",
        "3",
        "2.3",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productonuevo3.agregaralbody();
      productonuevo3.obtenerdatosparamostrar(productonuevoobtenido3);
      productonuevo3.mostrarpaginadecompra(productonuevoobtenido3);

      let productonuevo4 = new CartadeProducto(
        "paginaprincipal",
        productonuevoobtenido4,
        "nuevos",
        "paginadecomprarproducto.html",
        "4",
        "2.4",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productonuevo4.agregaralbody();
      productonuevo4.obtenerdatosparamostrar(productonuevoobtenido4);
      productonuevo4.mostrarpaginadecompra(productonuevoobtenido4);
    });
  });

// -----------------------------------------------------------------------------------------

// Configuracion de los productos de tecnologia

basededatos
  .collection("categotias")
  .where("nombre", "==", "tecnologia")
  .get()
  .then((informacion) => {
    informacion.docs.forEach((categoria) => {
      let categoriaid = categoria.id;
      let categoriainformacion = categoria.data();
      let todoslosproductosdelacategoria =
        categoriainformacion.todoslosproductos;
      console.log(todoslosproductosdelacategoria);
      let productoobtenidodetecnologia1 = todoslosproductosdelacategoria[0];
      let productoobtenidodetecnologia2 = todoslosproductosdelacategoria[1];
      let productoobtenidodetecnologia3 = todoslosproductosdelacategoria[2];
      let productoobtenidodetecnologia4 = todoslosproductosdelacategoria[3];
      console.log(
        productoobtenidodetecnologia1,
        productoobtenidodetecnologia2,
        productoobtenidodetecnologia3,
        productoobtenidodetecnologia4
      );

      let contendordeproductosdetecnologia = new ContendordeProductos(
        "paginaprincipal",
        "productosenventadelapaginaprincipal",
        "detecnologia",
        "Tecnologia"
      );
      contendordeproductosdetecnologia.agregaralbody();

      let productodetecnologia1 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidodetecnologia1,
        "detecnologia",
        "paginadecomprarproducto.html",
        "1",
        "3.1",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodetecnologia1.agregaralbody();
      productodetecnologia1.obtenerdatosparamostrar(
        productoobtenidodetecnologia1
      );
      productodetecnologia1.mostrarpaginadecompra(
        productoobtenidodetecnologia1
      );

      let productodetecnologia2 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidodetecnologia2,
        "detecnologia",
        "paginadecomprarproducto.html",
        "2",
        "3.2",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodetecnologia2.agregaralbody();
      productodetecnologia2.obtenerdatosparamostrar(
        productoobtenidodetecnologia2
      );
      productodetecnologia2.mostrarpaginadecompra(
        productoobtenidodetecnologia2
      );

      let productodetecnologia3 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidodetecnologia3,
        "detecnologia",
        "paginadecomprarproducto.html",
        "3",
        "3.3",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodetecnologia3.agregaralbody();
      productodetecnologia3.obtenerdatosparamostrar(
        productoobtenidodetecnologia3
      );
      productodetecnologia3.mostrarpaginadecompra(
        productoobtenidodetecnologia3
      );

      let productodetecnologia4 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidodetecnologia4,
        "detecnologia",
        "paginadecomprarproducto.html",
        "4",
        "3.4",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodetecnologia4.agregaralbody();
      productodetecnologia4.obtenerdatosparamostrar(
        productoobtenidodetecnologia4
      );
      productodetecnologia4.mostrarpaginadecompra(
        productoobtenidodetecnologia4
      );
    });
  });

// -----------------------------------------------------------------------------------------

// Configuracion de los productos de entretenimiento

basededatos
  .collection("categotias")
  .where("nombre", "==", "entretenimiento")
  .get()
  .then((informacion) => {
    informacion.docs.forEach((categoria) => {
      let categoriaid = categoria.id;
      let categoriainformacion = categoria.data();
      let todoslosproductosdelacategoria =
        categoriainformacion.todoslosproductos;
      console.log(todoslosproductosdelacategoria);
      let productoobtenidodeentretenimiento1 =
        todoslosproductosdelacategoria[0];
      let productoobtenidodeentretenimiento2 =
        todoslosproductosdelacategoria[1];
      let productoobtenidodeentretenimiento3 =
        todoslosproductosdelacategoria[2];
      let productoobtenidodeentretenimiento4 =
        todoslosproductosdelacategoria[3];
      console.log(
        productoobtenidodeentretenimiento1,
        productoobtenidodeentretenimiento2,
        productoobtenidodeentretenimiento3,
        productoobtenidodeentretenimiento4
      );

      let contendordeproductosdeentretenimiento = new ContendordeProductos(
        "paginaprincipal",
        "productosenventadelapaginaprincipal",
        "deentretenimiento",
        "Entretenimiento"
      );
      contendordeproductosdeentretenimiento.agregaralbody();

      let productodeentretenimiento1 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidodeentretenimiento1,
        "deentretenimiento",
        "paginadecomprarproducto.html",
        "1",
        "4.1",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodeentretenimiento1.agregaralbody();
      productodeentretenimiento1.obtenerdatosparamostrar(
        productoobtenidodeentretenimiento1
      );
      productodeentretenimiento1.mostrarpaginadecompra(
        productoobtenidodeentretenimiento1
      );

      let productodeentretenimiento2 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidodeentretenimiento2,
        "deentretenimiento",
        "paginadecomprarproducto.html",
        "2",
        "4.2",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodeentretenimiento2.agregaralbody();
      productodeentretenimiento2.obtenerdatosparamostrar(
        productoobtenidodeentretenimiento2
      );
      productodeentretenimiento2.mostrarpaginadecompra(
        productoobtenidodeentretenimiento2
      );

      let productodeentretenimiento3 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidodeentretenimiento3,
        "deentretenimiento",
        "paginadecomprarproducto.html",
        "3",
        "4.3",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodeentretenimiento3.agregaralbody();
      productodeentretenimiento3.obtenerdatosparamostrar(
        productoobtenidodeentretenimiento3
      );
      productodeentretenimiento3.mostrarpaginadecompra(
        productoobtenidodeentretenimiento3
      );

      let productodeentretenimiento4 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidodeentretenimiento4,
        "deentretenimiento",
        "paginadecomprarproducto.html",
        "4",
        "4.4",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodeentretenimiento4.agregaralbody();
      productodeentretenimiento4.obtenerdatosparamostrar(
        productoobtenidodeentretenimiento4
      );
      productodeentretenimiento4.mostrarpaginadecompra(
        productoobtenidodeentretenimiento4
      );
    });
  });

// -----------------------------------------------------------------------------------------

// Configuracion de los productos de Deporte

basededatos
  .collection("categotias")
  .where("nombre", "==", "deporte")
  .get()
  .then((informacion) => {
    informacion.docs.forEach((categoria) => {
      let categoriaid = categoria.id;
      let categoriainformacion = categoria.data();
      let todoslosproductosdelacategoria =
        categoriainformacion.todoslosproductos;
      console.log(todoslosproductosdelacategoria);
      let productoobtenidodedeporte1 = todoslosproductosdelacategoria[0];
      let productoobtenidodedeporte2 = todoslosproductosdelacategoria[1];
      let productoobtenidodedeporte3 = todoslosproductosdelacategoria[2];
      let productoobtenidodedeporte4 = todoslosproductosdelacategoria[3];
      console.log(
        productoobtenidodedeporte1,
        productoobtenidodedeporte2,
        productoobtenidodedeporte3,
        productoobtenidodedeporte4
      );

      let contendordeproductosdedeporte = new ContendordeProductos(
        "paginaprincipal",
        "productosenventadelapaginaprincipal",
        "dedeporte",
        "Deporte"
      );
      contendordeproductosdedeporte.agregaralbody();

      let productodedeporte1 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidodedeporte1,
        "dedeporte",
        "paginadecomprarproducto.html",
        "1",
        "5.1",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodedeporte1.agregaralbody();
      productodedeporte1.obtenerdatosparamostrar(productoobtenidodedeporte1);
      productodedeporte1.mostrarpaginadecompra(productoobtenidodedeporte1);

      let productodedeporte2 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidodedeporte2,
        "dedeporte",
        "paginadecomprarproducto.html",
        "2",
        "5.2",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodedeporte2.agregaralbody();
      productodedeporte2.obtenerdatosparamostrar(productoobtenidodedeporte2);
      productodedeporte2.mostrarpaginadecompra(productoobtenidodedeporte2);

      let productodedeporte3 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidodedeporte3,
        "dedeporte",
        "paginadecomprarproducto.html",
        "3",
        "5.3",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodedeporte3.agregaralbody();
      productodedeporte3.obtenerdatosparamostrar(productoobtenidodedeporte3);
      productodedeporte3.mostrarpaginadecompra(productoobtenidodedeporte3);

      let productodedeporte4 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidodedeporte4,
        "dedeporte",
        "paginadecomprarproducto.html",
        "4",
        "5.4",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodedeporte4.agregaralbody();
      productodedeporte4.obtenerdatosparamostrar(productoobtenidodedeporte4);
      productodedeporte4.mostrarpaginadecompra(productoobtenidodedeporte4);
    });
  });

// -----------------------------------------------------------------------------------------

// Configuracion de los productos de Ropa

basededatos
  .collection("categotias")
  .where("nombre", "==", "ropa")
  .get()
  .then((informacion) => {
    informacion.docs.forEach((categoria) => {
      let categoriaid = categoria.id;
      let categoriainformacion = categoria.data();
      let todoslosproductosdelacategoria =
        categoriainformacion.todoslosproductos;
      console.log(todoslosproductosdelacategoria);
      let productoobtenidoderopa1 = todoslosproductosdelacategoria[0];
      let productoobtenidoderopa2 = todoslosproductosdelacategoria[1];
      let productoobtenidoderopa3 = todoslosproductosdelacategoria[2];
      let productoobtenidoderopa4 = todoslosproductosdelacategoria[3];
      console.log(
        productoobtenidoderopa1,
        productoobtenidoderopa2,
        productoobtenidoderopa3,
        productoobtenidoderopa4
      );

      let contendordeproductosderopa = new ContendordeProductos(
        "paginaprincipal",
        "productosenventadelapaginaprincipal",
        "deropa",
        "Ropa"
      );
      contendordeproductosderopa.agregaralbody();

      let productoderopa1 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidoderopa1,
        "deropa",
        "paginadecomprarproducto.html",
        "1",
        "6.1",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productoderopa1.agregaralbody();
      productoderopa1.obtenerdatosparamostrar(productoobtenidoderopa1);
      productoderopa1.mostrarpaginadecompra(productoobtenidoderopa1);

      let productoderopa2 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidoderopa2,
        "deropa",
        "paginadecomprarproducto.html",
        "2",
        "6.2",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productoderopa2.agregaralbody();
      productoderopa2.obtenerdatosparamostrar(productoobtenidoderopa2);
      productoderopa2.mostrarpaginadecompra(productoobtenidoderopa2);

      let productoderopa3 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidoderopa3,
        "deropa",
        "paginadecomprarproducto.html",
        "3",
        "6.3",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productoderopa3.agregaralbody();
      productoderopa3.obtenerdatosparamostrar(productoobtenidoderopa3);
      productoderopa3.mostrarpaginadecompra(productoobtenidoderopa3);

      let productoderopa4 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidoderopa4,
        "deropa",
        "paginadecomprarproducto.html",
        "4",
        "6.4",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productoderopa4.agregaralbody();
      productoderopa4.obtenerdatosparamostrar(productoobtenidoderopa4);
      productoderopa4.mostrarpaginadecompra(productoobtenidoderopa4);
    });
  });

// -----------------------------------------------------------------------------------------

// Configuracion de los productos de Muebles

basededatos
  .collection("categotias")
  .where("nombre", "==", "muebles")
  .get()
  .then((informacion) => {
    informacion.docs.forEach((categoria) => {
      let categoriaid = categoria.id;
      let categoriainformacion = categoria.data();
      let todoslosproductosdelacategoria =
        categoriainformacion.todoslosproductos;
      console.log(todoslosproductosdelacategoria);
      let productoobtenidodemuebles1 = todoslosproductosdelacategoria[0];
      let productoobtenidodemuebles2 = todoslosproductosdelacategoria[1];
      let productoobtenidodemuebles3 = todoslosproductosdelacategoria[2];
      let productoobtenidodemuebles4 = todoslosproductosdelacategoria[3];
      console.log(
        productoobtenidodemuebles1,
        productoobtenidodemuebles2,
        productoobtenidodemuebles3,
        productoobtenidodemuebles4
      );

      let contendordeproductosdemuebles = new ContendordeProductos(
        "paginaprincipal",
        "productosenventadelapaginaprincipal",
        "demuebles",
        "Muebles"
      );
      contendordeproductosdemuebles.agregaralbody();

      let productodemuebles1 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidodemuebles1,
        "demuebles",
        "paginadecomprarproducto.html",
        "1",
        "7.1",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodemuebles1.agregaralbody();
      productodemuebles1.obtenerdatosparamostrar(productoobtenidodemuebles1);
      productodemuebles1.mostrarpaginadecompra(productoobtenidodemuebles1);

      let productodemuebles2 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidodemuebles2,
        "demuebles",
        "paginadecomprarproducto.html",
        "2",
        "7.2",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodemuebles2.agregaralbody();
      productodemuebles2.obtenerdatosparamostrar(productoobtenidodemuebles2);
      productodemuebles2.mostrarpaginadecompra(productoobtenidodemuebles2);

      let productodemuebles3 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidodemuebles3,
        "demuebles",
        "paginadecomprarproducto.html",
        "3",
        "7.3",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodemuebles3.agregaralbody();
      productodemuebles3.obtenerdatosparamostrar(productoobtenidodemuebles3);
      productodemuebles3.mostrarpaginadecompra(productoobtenidodemuebles3);

      let productodemuebles4 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidodemuebles4,
        "demuebles",
        "paginadecomprarproducto.html",
        "4",
        "7.4",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodemuebles4.agregaralbody();
      productodemuebles4.obtenerdatosparamostrar(productoobtenidodemuebles4);
      productodemuebles4.mostrarpaginadecompra(productoobtenidodemuebles4);
    });
  });

// -----------------------------------------------------------------------------------------

// Configuracion de los productos de Autos

basededatos
  .collection("categotias")
  .where("nombre", "==", "autos")
  .get()
  .then((informacion) => {
    informacion.docs.forEach((categoria) => {
      let categoriaid = categoria.id;
      let categoriainformacion = categoria.data();
      let todoslosproductosdelacategoria =
        categoriainformacion.todoslosproductos;
      console.log(todoslosproductosdelacategoria);
      let productoobtenidodeautos1 = todoslosproductosdelacategoria[0];
      let productoobtenidodeautos2 = todoslosproductosdelacategoria[1];
      let productoobtenidodeautos3 = todoslosproductosdelacategoria[2];
      let productoobtenidodeautos4 = todoslosproductosdelacategoria[3];
      console.log(
        productoobtenidodeautos1,
        productoobtenidodeautos2,
        productoobtenidodeautos3,
        productoobtenidodeautos4
      );

      let contendordeproductosdeautos = new ContendordeProductos(
        "paginaprincipal",
        "productosenventadelapaginaprincipal",
        "deautos",
        "Autos"
      );
      contendordeproductosdeautos.agregaralbody();

      let productodeautos1 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidodeautos1,
        "deautos",
        "paginadecomprarproducto.html",
        "1",
        "8.1",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodeautos1.agregaralbody();
      productodeautos1.obtenerdatosparamostrar(productoobtenidodeautos1);
      productodeautos1.mostrarpaginadecompra(productoobtenidodeautos1);

      let productodeautos2 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidodeautos2,
        "deautos",
        "paginadecomprarproducto.html",
        "2",
        "8.2",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodeautos2.agregaralbody();
      productodeautos2.obtenerdatosparamostrar(productoobtenidodeautos2);
      productodeautos2.mostrarpaginadecompra(productoobtenidodeautos2);

      let productodeautos3 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidodeautos3,
        "deautos",
        "paginadecomprarproducto.html",
        "3",
        "8.3",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodeautos3.agregaralbody();
      productodeautos3.obtenerdatosparamostrar(productoobtenidodeautos3);
      productodeautos3.mostrarpaginadecompra(productoobtenidodeautos3);

      let productodeautos4 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidodeautos4,
        "deautos",
        "paginadecomprarproducto.html",
        "4",
        "8.4",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodeautos4.agregaralbody();
      productodeautos4.obtenerdatosparamostrar(productoobtenidodeautos4);
      productodeautos4.mostrarpaginadecompra(productoobtenidodeautos4);
    });
  });

// -----------------------------------------------------------------------------------------

// Configuracion de los productos de Libros

basededatos
  .collection("categotias")
  .where("nombre", "==", "libros")
  .get()
  .then((informacion) => {
    informacion.docs.forEach((categoria) => {
      let categoriaid = categoria.id;
      let categoriainformacion = categoria.data();
      let todoslosproductosdelacategoria =
        categoriainformacion.todoslosproductos;
      console.log(todoslosproductosdelacategoria);
      let productoobtenidodelibros1 = todoslosproductosdelacategoria[0];
      let productoobtenidodelibros2 = todoslosproductosdelacategoria[1];
      let productoobtenidodelibros3 = todoslosproductosdelacategoria[2];
      let productoobtenidodelibros4 = todoslosproductosdelacategoria[3];
      console.log(
        productoobtenidodelibros1,
        productoobtenidodelibros2,
        productoobtenidodelibros3,
        productoobtenidodelibros4
      );

      let contendordeproductosdelibros = new ContendordeProductos(
        "paginaprincipal",
        "productosenventadelapaginaprincipal",
        "delibros",
        "Libros"
      );
      contendordeproductosdelibros.agregaralbody();

      let productodelibros1 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidodelibros1,
        "delibros",
        "paginadecomprarproducto.html",
        "1",
        "9.1",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodelibros1.agregaralbody();
      productodelibros1.obtenerdatosparamostrar(productoobtenidodelibros1);
      productodelibros1.mostrarpaginadecompra(productoobtenidodelibros1);

      let productodelibros2 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidodelibros2,
        "delibros",
        "paginadecomprarproducto.html",
        "2",
        "9.2",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodelibros2.agregaralbody();
      productodelibros2.obtenerdatosparamostrar(productoobtenidodelibros2);
      productodelibros2.mostrarpaginadecompra(productoobtenidodelibros2);

      let productodelibros3 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidodelibros3,
        "delibros",
        "paginadecomprarproducto.html",
        "3",
        "9.3",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodelibros3.agregaralbody();
      productodelibros3.obtenerdatosparamostrar(productoobtenidodelibros3);
      productodelibros3.mostrarpaginadecompra(productoobtenidodelibros3);

      let productodelibros4 = new CartadeProducto(
        "paginaprincipal",
        productoobtenidodelibros4,
        "delibros",
        "paginadecomprarproducto.html",
        "4",
        "9.4",
        "",
        "nombre",
        "precio",
        "oferta"
      );
      productodelibros4.agregaralbody();
      productodelibros4.obtenerdatosparamostrar(productoobtenidodelibros4);
      productodelibros4.mostrarpaginadecompra(productoobtenidodelibros4);
    });
  });

// -----------------------------------------------------------------------------------------

// Configuracion de pie de pagina

let piedepaginadepaginaprincipal = new PiedePagina(
  "paginaprincipal",
  "paginadelaempresa.html",
  "#",
  "#",
  "paginadereclamos.html"
);
piedepaginadepaginaprincipal.agregaralbody();

// ------------------------------------------------------------------------------------------
