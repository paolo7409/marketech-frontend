// Configuracion de la barra de navegacion

let barradenavegacionpaginadebusquedadeusuario = new BarradeNavegacion(
  "paginadebusquedadeusuario",
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
barradenavegacionpaginadebusquedadeusuario.agregarloalbody();
barradenavegacionpaginadebusquedadeusuario.adaptaropcionesatamanospequenos();
barradenavegacionpaginadebusquedadeusuario.adaptarinputdebusqueda();
barradenavegacionpaginadebusquedadeusuario.buscarproducto();

// -----------------------------------------------------------------------------------------

let usuariobuscado = localStorage.getItem("usuariobuscado");

console.log(usuariobuscado);

const obtenerusuariodelapaginadebusquedadeusuario = () => {
  obtenerusuariousandolaaplicacion(usuariobuscado).then(() => {
    barradenavegacionpaginadebusquedadeusuario.cerrarsesion();
    console.log(usuariodatos);

    let avatardelusuario = document.getElementById("avatardelusuario");
    let nombredelusuario = document.getElementById("nombredelusuario");
    let emaildelusuario = document.getElementById("emaildelusuario");
    let telefonodelusuario = document.getElementById("telefonodelusuario");
    let descripciondelusuario = document.getElementById(
      "descripciondelusuario"
    );

    avatardelusuario.setAttribute("src", usuariodatos.avatar);
    nombredelusuario.textContent = usuariodatos.nombre;
    emaildelusuario.textContent = usuariodatos.correo;
    telefonodelusuario.textContent = usuariodatos.telefono;
    descripciondelusuario.value = usuariodatos.descripcion;
    descripciondelusuario.setAttribute("readonly", "readonly");

    let productosenventadelusuariobuscado = usuariodatos.productosenventa;

    console.log(productosenventadelusuariobuscado);

    let cantidaddeproductosenventadelusuariobuscado =
      usuariodatos.productosenventa.length;
    console.log(cantidaddeproductosenventadelusuariobuscado);

    let contenedordeproductosenventadelusuariobuscado = new ContendordeProductos(
      "paginadebusquedadeusuario",
      "labusquedadeusuario",
      "enventadelusuariobuscado",
      "Productos en Venta"
    );
    contenedordeproductosenventadelusuariobuscado.agregaralbody();

    if (usuariodatos.productosenventa.length === 0) {
      console.log("el usuario no tiene productos");
    } else {
      productosenventadelusuariobuscado.forEach((producto, ubicacion) => {
        basededatos
          .collection("productos")
          .doc(producto)
          .get()
          .then((productoobtenido) => {
            let informaciondeproductoobtenido = productoobtenido.data();
            console.log(informaciondeproductoobtenido);

            let productosenventadelusuariobuscado = new CartadeProducto(
              "paginadebusquedadeusuario",
              productoobtenido.id,
              "enventadelusuariobuscado",
              "#",
              ubicacion + 1,
              ubicacion + 1,
              productoobtenido.urldelaimagen,
              informaciondeproductoobtenido.nombre,
              informaciondeproductoobtenido.precio,
              informaciondeproductoobtenido.oferta
            );

            productosenventadelusuariobuscado.agregaralbody();

            productosenventadelusuariobuscado.mostrarpaginadecompra(
              ubicacion,
              productosenventadelusuariobuscado.iddelproducto
            );
          });
      });
    }
  });
};

obtenerusuariodelapaginadebusquedadeusuario();

// Configuracion de la piedepagina

let piedepaginapaginadebusquedadeusuario = new PiedePagina(
  "paginadebusquedadeusuario",
  "paginadelaempresa.html",
  "#",
  "#",
  "paginadereclamos.html"
);
piedepaginapaginadebusquedadeusuario.agregaralbody();

// -----------------------------------------------------------------------------------------\
