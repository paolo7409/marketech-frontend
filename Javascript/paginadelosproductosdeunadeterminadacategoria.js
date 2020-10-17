// Configuracion de la barra de navegacion

let barradenavegacionpaginadelosproductosdeunadeterminadacategoria = new BarradeNavegacion(
  "paginadelosproductosdeunadeterminadacategoria",
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
barradenavegacionpaginadelosproductosdeunadeterminadacategoria.agregarloalbody();
barradenavegacionpaginadelosproductosdeunadeterminadacategoria.adaptaropcionesatamanospequenos();
barradenavegacionpaginadelosproductosdeunadeterminadacategoria.adaptarinputdebusqueda();
barradenavegacionpaginadelosproductosdeunadeterminadacategoria.buscarproducto();

// -----------------------------------------------------------------------------------------

let usuariousuandolaaplicacion = localStorage.getItem(
  "usuarioactivodelaaplicacion"
);

console.log(usuariousuandolaaplicacion);

const usardatosdeusuarioenlapaginadeproductosenventayvendidosporelusuario = () => {
  obtenerusuariousandolaaplicacion(usuariousuandolaaplicacion).then(() => {
    barradenavegacionpaginadelosproductosdeunadeterminadacategoria.cerrarsesion();
    let categoriabuscada = localStorage.getItem("categoriabuscada");
    console.log(categoriabuscada);

    basededatos
      .collection("categotias")
      .doc(categoriabuscada)
      .get()
      .then((categoria) => {
        let categoriadatos = categoria.data();
        console.log(categoriadatos);

        let titulocategoria = document.getElementById("titulocategoria");
        titulocategoria.textContent = categoriadatos.nombre;
        let productosnuevosdelacategoria = categoriadatos.productosnuevos;
        console.log(productosnuevosdelacategoria);
        let productosenofertadelacategoria = categoriadatos.productosenoferta;
        console.log(productosenofertadelacategoria);

        let contenedordetodoslosproductosdeunacategoria = new ContendordeProductos(
          "paginadelosproductosdeunadeterminadacategoria",
          "losproductosdeunadeterminadacategoria",
          "delacategoriabuscada",
          "Productos"
        );

        contenedordetodoslosproductosdeunacategoria.agregaralbody();

        let todoslosproductosdelacategoria = categoriadatos.todoslosproductos;
        console.log(todoslosproductosdelacategoria);

        todoslosproductosdelacategoria.forEach((producto, ubicacion) => {
          basededatos
            .collection("productos")
            .doc(producto)
            .get()
            .then((productoobtenido) => {
              let productoobtenidodatos = productoobtenido.data();

              let productodelacategoriabuscada = new CartadeProducto(
                "paginadelosproductosdeunadeterminadacategoria",
                producto,
                "delacategoriabuscada",
                "#",
                ubicacion,
                ubicacion,
                productoobtenidodatos.urldelaimagen,
                productoobtenidodatos.nombre,
                productoobtenidodatos.precio,
                productoobtenidodatos.oferta
              );

              productodelacategoriabuscada.agregaralbody();
            });
        });
      });
  });
};

usardatosdeusuarioenlapaginadeproductosenventayvendidosporelusuario();

// Configuracion de la piedepagina

let piedepaginapaginadelosproductosdeunadeterminadacategoria = new PiedePagina(
  "paginadelosproductosdeunadeterminadacategoria",
  "paginadelaempresa.html",
  "#",
  "#",
  "paginadereclamos.html"
);
piedepaginapaginadelosproductosdeunadeterminadacategoria.agregaralbody();

// -----------------------------------------------------------------------------------------
