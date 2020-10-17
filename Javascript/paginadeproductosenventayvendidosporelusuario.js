// Configuracion de la barra de navegacion

let barradenavegacionpaginadecategorias = new BarradeNavegacion(
  "paginadeproductosenventayvendidosporelusuario",
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
barradenavegacionpaginadecategorias.agregarloalbody();
barradenavegacionpaginadecategorias.adaptaropcionesatamanospequenos();
barradenavegacionpaginadecategorias.adaptarinputdebusqueda();
barradenavegacionpaginadecategorias.buscarproducto();

// -----------------------------------------------------------------------------------------

let usuariousuandolaaplicacion = localStorage.getItem(
  "usuarioactivodelaaplicacion"
);

console.log(usuariousuandolaaplicacion);

const usardatosdeusuarioenlapaginadeproductosenventayvendidosporelusuario = () => {
  obtenerusuariousandolaaplicacion(usuariousuandolaaplicacion).then(() => {
    barradenavegacionpaginadecategorias.cerrarsesion();
    let productosenventadelusuario = usuariodelaaplicacion.productosenventa;

    console.log(productosenventadelusuario);

    let cantidaddeproductosenventadelusuario =
      usuariodelaaplicacion.productosenventa.length;
    console.log(cantidaddeproductosenventadelusuario);

    let contenedordeproductosenventa = new ContendordeProductos(
      "paginadeproductosenventayvendidosporelusuario",
      "productosenventayvendidosporelusuario",
      "enventadelusuario",
      "En venta"
    );
    contenedordeproductosenventa.agregaralbody();

    productosenventadelusuario.forEach((producto, ubicacion) => {
      basededatos
        .collection("productos")
        .doc(producto)
        .get()
        .then((productoobtenido) => {
          let informaciondeproductoobtenido = productoobtenido.data();
          console.log(informaciondeproductoobtenido);

          let productoenventadelusuario = new CartadeProductodelUsuario(
            "paginadeproductosenventayvendidosporelusuario",
            productoobtenido.id,
            "enventadelusuario",
            "paginadeinformaciondeunproducto.html",
            ubicacion + 1,
            ubicacion + 1,
            informaciondeproductoobtenido.urldelaimagen,
            informaciondeproductoobtenido.nombre,
            informaciondeproductoobtenido.precio,
            informaciondeproductoobtenido.oferta
          );

          let cartaparainspeccionar = document.getElementsByClassName(
            "contenedordeproducto"
          );
          console.log(cartaparainspeccionar);

          productoenventadelusuario.agregaralbody();
          productoenventadelusuario.eliminarproducto(
            productoobtenido.id,
            informaciondeproductoobtenido.categoria,
            informaciondeproductoobtenido.vendedor
          );
          productoenventadelusuario.mostrarpaginadeinformacion(
            ubicacion,
            productoenventadelusuario.iddelproducto
          );
        });
    });

    if (cantidaddeproductosenventadelusuario === 0) {
      let contenedordeproductosenventaparaagregar = document.getElementById(
        "contenedordeproductosenventadelusuario"
      );
      let mensajedesinproductosenventa = document.createElement("div");
      mensajedesinproductosenventa.setAttribute(
        "id",
        "mensajedesinproductosenventa"
      );
      mensajedesinproductosenventa.setAttribute(
        "class",
        "mensajedesinproductosenventa"
      );
      mensajedesinproductosenventa.textContent =
        "No tienes productos en venta !";
      mensajedesinproductosenventa.insertAdjacentHTML(
        "beforeend",
        `<button class="botondeagregarproductoparavender" id="botondeagregarproductoparavender">
            Agregar Producto para Vender
        </button>`
      );
      contenedordeproductosenventaparaagregar.appendChild(
        mensajedesinproductosenventa
      );

      let botondeagregarproductoparavender = document.getElementById(
        "botondeagregarproductoparavender"
      );
      botondeagregarproductoparavender.addEventListener("click", () => {
        window.location.href = "paginadevenderproducto.html";
      });
    }

    let contenedordeproductosenventadelusuario = document.getElementById(
      "contenedordeproductosenventadelusuario"
    );

    let contenedordeproductosenvendidos = new ContendordeProductos(
      "paginadeproductosenventayvendidosporelusuario",
      "productosenventayvendidosporelusuario",
      "vendidosdelusuario",
      "Vendidos"
    );
    contenedordeproductosenvendidos.agregaralbody();

    let productosvendidosdelusuario = usuariodelaaplicacion.productosvendidos;

    console.log(productosvendidosdelusuario);

    productosvendidosdelusuario.forEach((producto, ubicacion) => {
      basededatos
        .collection("productos")
        .doc(producto)
        .get()
        .then((productoobtenido) => {
          let informaciondeproductoobtenido = productoobtenido.data();
          console.log(informaciondeproductoobtenido);

          let productovendidodelusuario = new CartadeProductodelUsuarionoEliminable(
            "paginadeproductosenventayvendidosporelusuario",
            productoobtenido.id,
            "vendidosdelusuario",
            "#",
            ubicacion + 1,
            ubicacion + 1,
            productoobtenido.urldelaimagen,
            informaciondeproductoobtenido.nombre,
            informaciondeproductoobtenido.precio,
            informaciondeproductoobtenido.oferta
          );

          productovendidodelusuario.agregaralbody();

          productovendidodelusuario.mostrarpaginadeinformacion(
            ubicacion,
            productovendidodelusuario.iddelproducto
          );
        });
    });

    let contenedordeproductosvendidosdelusuario = document.getElementById(
      "contenedordeproductosvendidosdelusuario"
    );

    let cantidaddeproductosvendidosdelusuario =
      usuariodelaaplicacion.productosvendidos.length;
    console.log(cantidaddeproductosvendidosdelusuario);

    let divisiondenumerodeproductosentrecantidad =
      cantidaddeproductosvendidosdelusuario / 4;

    let resultadofinalparacontenedor = Math.ceil(
      divisiondenumerodeproductosentrecantidad
    );
    console.log(resultadofinalparacontenedor);

    contenedordeproductosvendidosdelusuario.style.gridTemplateRows = `10px repeat(${resultadofinalparacontenedor} 1fr)`;

    if (cantidaddeproductosvendidosdelusuario === 0) {
      let contenedordeproductosvendidosparaagregar = document.getElementById(
        "contenedordeproductosvendidosdelusuario"
      );
      let mensajedesinproductosvendidos = document.createElement("div");
      mensajedesinproductosvendidos.setAttribute(
        "id",
        "mensajedesinproductosvendidos"
      );
      mensajedesinproductosvendidos.setAttribute(
        "class",
        "mensajedesinproductosvendidos"
      );
      mensajedesinproductosvendidos.style.gridRow = `2/span ${resultadofinalparacontenedor}`;

      mensajedesinproductosvendidos.textContent =
        "No tienes productos vendidos !";
      mensajedesinproductosvendidos.insertAdjacentHTML(
        "beforeend",
        `<button class="botondecomprarproducto" id="botondecomprarproducto">
            Compra un nuevo producto
         </button>`
      );
      contenedordeproductosvendidosparaagregar.appendChild(
        mensajedesinproductosvendidos
      );

      let botondecomprarproducto = document.getElementById(
        "botondecomprarproducto"
      );
      botondecomprarproducto.addEventListener("click", () => {
        window.location.href = "paginaprincipal.html";
      });
    }

    let tamanoparacambiarloscontenedoresdeproductos1 = matchMedia(
      "(min-width: 481px) and (max-width: 768px)"
    );

    let tamanoparacambiarloscontenedoresdeproductos2 = matchMedia(
      "(min-width: 0px) and (max-width: 480px)"
    );

    let relleno1 = document.getElementById("relleno1");
    let relleno2 = document.getElementById("relleno2");
    let relleno3 = document.getElementById("relleno3");

    const modificarcontenedordeproductosvendidos = (tamanodepantalla) => {
      if (tamanodepantalla.matches) {
        let divisiondenumerodeproductosentrecantidad2 =
          cantidaddeproductosvendidosdelusuario / 2;

        let resultadofinalparacontenedor2 = Math.ceil(
          divisiondenumerodeproductosentrecantidad2
        );
        console.log(resultadofinalparacontenedor2);

        contenedordeproductosvendidosdelusuario.style.gridTemplateRows = `10px repeat(${resultadofinalparacontenedor2} 1fr)`;
      }
    };

    modificarcontenedordeproductosvendidos(
      tamanoparacambiarloscontenedoresdeproductos1
    );
    tamanoparacambiarloscontenedoresdeproductos1.addListener(
      modificarcontenedordeproductosvendidos
    );

    const modificarcontenedordeproductosvendidos2 = (tamanodepantalla) => {
      if (tamanodepantalla.matches) {
        let divisiondenumerodeproductosentrecantidad3 =
          cantidaddeproductosvendidosdelusuario / 1;

        let resultadofinalparacontenedor3 = Math.ceil(
          divisiondenumerodeproductosentrecantidad3
        );
        console.log(resultadofinalparacontenedor3);

        contenedordeproductosvendidosdelusuario.style.gridTemplateRows = `10px repeat(${resultadofinalparacontenedor3} 1fr)`;
      }
    };

    modificarcontenedordeproductosvendidos2(
      tamanoparacambiarloscontenedoresdeproductos2
    );
    tamanoparacambiarloscontenedoresdeproductos2.addListener(
      modificarcontenedordeproductosvendidos2
    );
  });
};

usardatosdeusuarioenlapaginadeproductosenventayvendidosporelusuario();

// Configuracion de la piedepagina

let piedepaginapaginadecategorias = new PiedePagina(
  "paginadeproductosenventayvendidosporelusuario",
  "paginadelaempresa.html",
  "#",
  "#",
  "paginadereclamos.html"
);
piedepaginapaginadecategorias.agregaralbody();

// -----------------------------------------------------------------------------------------\
