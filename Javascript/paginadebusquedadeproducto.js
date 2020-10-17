// Configuracion de la barra de navegacion

let barradenavegacionpaginadebusquedadeproducto = new BarradeNavegacion(
  "paginadebusquedadeproducto",
  "paginadelaempresa.html",
  "#",
  "Nuevo",
  "#",
  "Ofertas",
  "paginadelaempresa.html",
  "Nosotoros",
  "index.html",
  "Cerrar Sesion"
);
barradenavegacionpaginadebusquedadeproducto.agregarloalbody();
barradenavegacionpaginadebusquedadeproducto.adaptaropcionesatamanospequenos();
barradenavegacionpaginadebusquedadeproducto.adaptarinputdebusqueda();
barradenavegacionpaginadebusquedadeproducto.buscarproducto();

// -----------------------------------------------------------------------------------------

let usuariousuandolaaplicacion = localStorage.getItem(
  "usuarioactivodelaaplicacion"
);

console.log(usuariousuandolaaplicacion);

const usardatosdeusuarioenlapaginadeproductosenventayvendidosporelusuario = () => {
  obtenerusuariousandolaaplicacion(usuariousuandolaaplicacion).then(() => {
    let productobuscado = localStorage.getItem("productobuscado");
    console.log(productobuscado);

    basededatos
      .collection("productos")
      .where("nombre", "==", productobuscado)
      .get()
      .then((informacion) => {
        barradenavegacionpaginadebusquedadeproducto.cerrarsesion();

        informacion.docs.forEach((producto, ubicacion) => {
          let productodatos = producto.data();
          console.log(productodatos);
          let productoobtenido = new CartadeProducto(
            "paginadebusquedadeproductos",
            producto.id,
            "buscados",
            "#",
            ubicacion,
            ubicacion,
            productodatos.urldelaimagen,
            productodatos.nombre,
            productodatos.precio,
            productodatos.oferta
          );

          productoobtenido.agregaralbody();
          productoobtenido.obtenerdatosparamostrar(producto.id);
          productoobtenido.mostrarpaginadecompra(producto.id);
        });
      });
  });
};

usardatosdeusuarioenlapaginadeproductosenventayvendidosporelusuario();

// Configuracion de la piedepagina

let piedepaginapaginadebusquedadeproducto = new PiedePagina(
  "paginadebusquedadeproducto",
  "paginadelaempresa.html",
  "#",
  "#",
  "paginadereclamos.html"
);
piedepaginapaginadebusquedadeproducto.agregaralbody();

// -----------------------------------------------------------------------------------------
