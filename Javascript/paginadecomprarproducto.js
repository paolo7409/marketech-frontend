// Configuracion de la barra de navegacion

let barradenavegacionpaginadecomprarproducto = new BarradeNavegacion(
  "paginadecomprarproducto",
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
barradenavegacionpaginadecomprarproducto.agregarloalbody();
barradenavegacionpaginadecomprarproducto.adaptaropcionesatamanospequenos();
barradenavegacionpaginadecomprarproducto.adaptarinputdebusqueda();
barradenavegacionpaginadecomprarproducto.buscarproducto();

// -----------------------------------------------------------------------------------------

let usuariousuandolaaplicacion = localStorage.getItem(
  "usuarioactivodelaaplicacion"
);

console.log(usuariousuandolaaplicacion);

const obtenerusuariodelapaginadecomprarproducto = () => {
  obtenerusuariousandolaaplicacion(usuariousuandolaaplicacion).then(() => {
    barradenavegacionpaginadecomprarproducto.cerrarsesion();
    console.log(usuariodatos);

    let productoparasercomprado = localStorage.getItem(
      "productoparaservendido"
    );
    console.log(productoparasercomprado);

    venderproductodelaaplicacion(productoparasercomprado).then(() => {
      let titulodecomprarproducto = document.getElementById(
        "titulodecomprarproducto"
      );
      let fondodelusuario = document.getElementById("fondodelusuario");
      let metododepagodelusuario = document.getElementById(
        "metododepagodelusuario"
      );
      let nombredelproducto = document.getElementById("nombredelproducto");
      let categoriadelproducto = document.getElementById(
        "categoriadelproducto"
      );
      let preciodelproducto = document.getElementById("preciodelproducto");
      let empresadelproducto = document.getElementById("empresadelproducto");
      let vendedordelproducto = document.getElementById("vendedordelproducto");
      let telefonodelproducto = document.getElementById("telefonodelproducto");
      let cantidaddelproducto = document.getElementById("cantidaddelproducto");
      let ofertadelproducto = document.getElementById("ofertadelproducto");
      let urldelaimagendelproducto = document.getElementById(
        "urldelaimagendelproducto"
      );
      let imagendelproducto = document.getElementById("imagendelproducto");
      let botondecomprarproducto = document.getElementById(
        "botondecomprarproducto"
      );

      titulodecomprarproducto.textContent = `Estas Comprando ${productodatos.nombre}`;

      fondodelusuario.textContent = `$ ${usuariodatos.fondo}`;

      if (usuariodatos.tarjetadecredito.empresadelatarjeta === "visa") {
        metododepagodelusuario.setAttribute(
          "src",
          "https://i.pinimg.com/originals/07/73/4c/07734cf160091516ce46a0e71b9f1cab.jpg"
        );
      } else if (
        usuariodatos.tarjetadecredito.empresadelatarjeta === "mastercard"
      ) {
        metododepagodelusuario.setAttribute(
          "src",
          "https://www.888casino.es/blog/sites/newblog.888casino.es/files/2019-06/hfghfghjgfhfg.png"
        );
      } else {
        console.log("el usuario no tiene metodo de pago");
      }
      nombredelproducto.textContent = productodatos.nombre;
      categoriadelproducto.textContent = productodatos.categoria;
      preciodelproducto.textContent = productodatos.precio;
      empresadelproducto.textContent = productodatos.empresa;
      vendedordelproducto.textContent = productodatos.vendedor;
      telefonodelproducto.textContent = productodatos.telefono;
      cantidaddelproducto.textContent = productodatos.cantidad;
      ofertadelproducto.textContent = productodatos.oferta;
      urldelaimagendelproducto.textContent = productodatos.urldelaimagen;
      imagendelproducto.setAttribute("src", productodatos.urldelaimagen);
      imagendelproducto.style.width = "100%";

      let aceptadordecompra = "";

      if (usuariodatos.nombre === productodatos.vendedor) {
        botondecomprarproducto.addEventListener("click", () => {
          alert("no puedes comprar tu propio producto");
        });
      } else {
        const inpeccionparacomprarproducto = () => {
          if (usuariodatos.tarjetadecredito.empresadelatarjeta === "") {
            alert("los datos de su tarjeta de credito estan incompletos");
          } else if (usuariodatos.fondo < productodatos.precio) {
            alert("no tiene suficiente dinero para comprar este producto");
          } else {
            aceptadordecompra = true;
          }
        };

        botondecomprarproducto.addEventListener("click", () => {
          inpeccionparacomprarproducto();

          if (
            usuariodatos.productoscomprados.some(
              (producto) => producto === productoparasercomprado
            )
          ) {
            alert("ya compro este producto");
          } else {
            if (aceptadordecompra === true) {
              console.log("se acepto la posibilidad de usar de comprar");

              if (productodatos.cantidad === 0) {
                alert("el stock de este producto se agoto");
              } else {
                let nuevosproductoscomprados = usuariodatos.productoscomprados;
                nuevosproductoscomprados.push(productoparasercomprado);

                let nuevofondodelusuario =
                  usuariodatos.fondo - productodatos.precio;

                basededatos
                  .collection("usuarios")
                  .doc(usuariousuandolaaplicacion)
                  .update({
                    productoscomprados: nuevosproductoscomprados,
                    fondo: nuevofondodelusuario,
                  });

                basededatos
                  .collection("usuarios")
                  .where("nombre", "==", productodatos.vendedor)
                  .where("telefono", "==", productodatos.telefono)
                  .get()
                  .then((informacion) => {
                    informacion.docs.forEach((usuario) => {
                      let iddeusuarioduenodelproducto = usuario.id;
                      let informaciondelusuarioduenodelproducto = usuario.data();
                      console.log(iddeusuarioduenodelproducto);

                      let productosvendidos =
                        informaciondelusuarioduenodelproducto.productosvendidos;

                      productosvendidos.push(productoparasercomprado);

                      let ubicaciondelproductoenventaaeliminar = informaciondelusuarioduenodelproducto.productosenventa.indexOf(
                        productoparasercomprado
                      );

                      let eliminaciondeproductosenventa = informaciondelusuarioduenodelproducto.productosenventa.splice(
                        ubicaciondelproductoenventaaeliminar,
                        1
                      );

                      basededatos
                        .collection("usuarios")
                        .doc(iddeusuarioduenodelproducto)
                        .update({
                          productosvendidos: productosvendidos,
                          productosenventa: eliminaciondeproductosenventa,
                        });
                    });
                  });

                let nuevacantidaddelproducto = productodatos.cantidad - 1;

                basededatos
                  .collection("productos")
                  .doc(productoparasercomprado)
                  .update({
                    cantidad: nuevacantidaddelproducto,
                  })
                  .then(() => {
                    window.location.href =
                      "paginadelosproductoscompradosdelusuario.html";
                  });
              }
            } else {
              console.log("no se pudo realizar la compra");
            }
          }
        });
      }

      telefonodelproducto.addEventListener("click", () => {
        if (productodatos.vendedor === usuariodatos.nombre) {
          console.log("usted es el dueno");
        } else {
          basededatos
            .collection("usuarios")
            .where("nombre", "==", productodatos.vendedor)
            .get()
            .then((informacion) => {
              informacion.docs.forEach((usuario) => {
                localStorage.setItem("usuariobuscado", usuario.id);
                console.log(localStorage.getItem("usuariobuscado"));
                window.location.href = "paginadebusquedadeusuario.html";
              });
            });
        }
      });

      vendedordelproducto.addEventListener("click", () => {
        if (usuarioregistrado === false) {
          alert("necesita registrarse para realizar esta accion");
        } else {
          console.log(productodatos.vendedor);
          console.log(usuariodatos.nombre);
          if (productodatos.vendedor === usuariodatos.nombre) {
            console.log("usted es el dueno");
          } else {
            basededatos
              .collection("usuarios")
              .where("nombre", "==", productodatos.vendedor)
              .get()
              .then((informacion) => {
                informacion.docs.forEach((usuario) => {
                  localStorage.setItem("usuariobuscado", usuario.id);
                  console.log(localStorage.getItem("usuariobuscado"));
                  window.location.href = "paginadebusquedadeusuario.html";
                });
              });
          }
        }
      });
    });
  });
};

obtenerusuariodelapaginadecomprarproducto();

// Configuracion de la piedepagina

let piedepaginapaginadecomprarproducto = new PiedePagina(
  "paginadecomprarproducto",
  "paginadelaempresa.html",
  "#",
  "#",
  "paginadereclamos.html"
);
piedepaginapaginadecomprarproducto.agregaralbody();

// -----------------------------------------------------------------------------------------
