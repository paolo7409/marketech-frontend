// Configuracion de la barra de navegacion

let barradenavegacionpaginadelosproductoscompradosdelusuario = new BarradeNavegacion(
  "paginadeproductoscompradosdelusuario",
  "paginadelaempresa.html",
  "#",
  "Nuevo",
  "#",
  "Ofertas",
  "paginadelaempresa.html",
  "Nosotoros",
  "paginaprincipal.html",
  "Cerrar Sesion"
);
barradenavegacionpaginadelosproductoscompradosdelusuario.agregarloalbody();
barradenavegacionpaginadelosproductoscompradosdelusuario.adaptaropcionesatamanospequenos();
barradenavegacionpaginadelosproductoscompradosdelusuario.adaptarinputdebusqueda *
  barradenavegacionpaginadelosproductoscompradosdelusuario.buscarproducto();

// -----------------------------------------------------------------------------------------

let usuariousuandolaaplicacion = localStorage.getItem(
  "usuarioactivodelaaplicacion"
);

console.log(usuariousuandolaaplicacion);

const usardatosdeusuarioenlapaginadeproductosenventayvendidosporelusuario = () => {
  obtenerusuariousandolaaplicacion(usuariousuandolaaplicacion).then(() => {
    barradenavegacionpaginadelosproductoscompradosdelusuario.cerrarsesion();

    let productoscompradosdelusuario = usuariodelaaplicacion.productoscomprados;
    console.log(productoscompradosdelusuario);

    let cantidadeproductoscompradosdelusuario =
      usuariodelaaplicacion.productoscomprados.length;
    console.log(cantidadeproductoscompradosdelusuario);

    let contenedordeproductoscompradosresientemente = new ContendordeProductos(
      "paginadelosproductoscompradosdelusuario",
      "productoscompradosdelusuario",
      "compradosresientementedelusuario",
      "Resientemente"
    );
    contenedordeproductoscompradosresientemente.agregaralbody();

    let productocompradoresientemente1 = productoscompradosdelusuario[0];
    let productocompradoresientemente2 = productoscompradosdelusuario[1];
    let productocompradoresientemente3 = productoscompradosdelusuario[2];
    let productocompradoresientemente4 = productoscompradosdelusuario[3];

    let todoslosproductoscompradosresientementedelusuario = [
      productocompradoresientemente1,
      productocompradoresientemente2,
      productocompradoresientemente3,
      productocompradoresientemente4,
    ];

    if (cantidadeproductoscompradosdelusuario === 0) {
      let contenedordeproductoscompradosparaagregar = document.getElementById(
        "contenedordeproductoscompradosresientementedelusuario"
      );
      let mensajedesinproductoscomprados = document.createElement("div");
      mensajedesinproductoscomprados.setAttribute(
        "id",
        "mensajedesinproductoscomprados"
      );
      mensajedesinproductoscomprados.setAttribute(
        "class",
        "mensajedesinproductoscomprados"
      );

      mensajedesinproductoscomprados.textContent =
        "No tienes productos comprados !";
      mensajedesinproductoscomprados.insertAdjacentHTML(
        "beforeend",
        `<button class="botondecomprarproducto" id="botondecomprarproducto">
            Compra un nuevo producto
         </button>`
      );
      contenedordeproductoscompradosparaagregar.appendChild(
        mensajedesinproductoscomprados
      );

      let botondecomprarproducto = document.getElementById(
        "botondecomprarproducto"
      );
      botondecomprarproducto.addEventListener("click", () => {
        window.location.href = "paginaprincipal.html";
      });

      let relleno1 = document.getElementById("relleno1");
      let relleno2 = document.getElementById("relleno2");
      let relleno3 = document.getElementById("relleno3");
    }

    todoslosproductoscompradosresientementedelusuario.forEach(
      (producto, ubicacion) => {
        basededatos
          .collection("productos")
          .doc(producto)
          .get()
          .then((productoobtenido) => {
            let informaciondeproductoobtenido = productoobtenido.data();
            console.log(informaciondeproductoobtenido);

            let productocompradodelusuario = new CartadeProductodelUsuarionoEliminable(
              "paginadelosproductoscompradosdelusuario",
              productoobtenido.id,
              "compradosresientementedelusuario",
              "paginadeinformaciondeproductosvendidosycomprados.html",
              ubicacion + 1,
              ubicacion + 1,
              productoobtenido.urldelaimagen,
              informaciondeproductoobtenido.nombre,
              informaciondeproductoobtenido.precio,
              informaciondeproductoobtenido.oferta
            );

            productocompradodelusuario.agregaralbody();

            productocompradodelusuario.mostrarpaginadeinformacion(
              ubicacion,
              productocompradodelusuario.iddelproducto
            );
          });
      }
    );

    let contenedordetodoslosproductoscomprados = new ContendordeProductos(
      "paginadelosproductoscompradosdelusuario",
      "productoscompradosdelusuario",
      "todosloscompradosdelusuario",
      "Todos"
    );
    contenedordetodoslosproductoscomprados.agregaralbody();

    productoscompradosdelusuario.forEach((producto, ubicacion) => {
      basededatos
        .collection("productos")
        .doc(producto)
        .get()
        .then((productoobtenido) => {
          let informaciondeproductoobtenido = productoobtenido.data();
          console.log(informaciondeproductoobtenido);

          let productocompradodelusuario = new CartadeProductodelUsuarionoEliminable(
            "paginadelosproductoscompradosdelusuario",
            productoobtenido.id,
            "todosloscompradosdelusuario",
            "paginadeinformaciondeproductosvendidosycomprados.html",
            ubicacion + 1,
            ubicacion + 1,
            productoobtenido.urldelaimagen,
            informaciondeproductoobtenido.nombre,
            informaciondeproductoobtenido.precio,
            informaciondeproductoobtenido.oferta
          );

          productocompradodelusuario.agregaralbody();

          productocompradodelusuario.mostrarpaginadeinformacion(
            ubicacion,
            productocompradodelusuario.iddelproducto
          );
        });
    });
  });
};

usardatosdeusuarioenlapaginadeproductosenventayvendidosporelusuario();

// Configuracion de la piedepagina

let piedepaginapaginadelosproductoscompradosdelusuario = new PiedePagina(
  "paginadeproductoscompradosdelusuario",
  "paginadelaempresa.html",
  "#",
  "#",
  "paginadereclamos.html"
);
piedepaginapaginadelosproductoscompradosdelusuario.agregaralbody();

// -----------------------------------------------------------------------------------------
