// Configuracion de la barra de navegacion

let barradenavegacionpaginadelaempresa = new BarradeNavegacion(
  "paginadelaempresa",
  "paginadelaempresa.html",
  "#",
  "Nuevo",
  "#",
  "Ofertas",
  "paginadecategorias.html",
  "Categorias",
  "iniciodesesion.html",
  "Iniciar Sesion"
);
barradenavegacionpaginadelaempresa.agregarloalbody();
barradenavegacionpaginadelaempresa.adaptaropcionesatamanospequenos();
barradenavegacionpaginadelaempresa.adaptarinputdebusqueda();
barradenavegacionpaginadelaempresa.buscarproducto();

// -----------------------------------------------------------------------------------------

let usuariousuandolaaplicacion = localStorage.getItem(
  "usuarioactivodelaaplicacion"
);

console.log(usuariousuandolaaplicacion);

const usardatosdeusuarioenlapaginadelaempresa = () => {
  obtenerusuariousandolaaplicacion(usuariousuandolaaplicacion).then(() => {
    barradenavegacionpaginadelaempresa.cerrarsesion();
    console.log(usuariodatos);
  });
};

usardatosdeusuarioenlapaginadelaempresa();

// Configuracion de la piedepagina

let piedepaginapaginadelaempresa = new PiedePagina(
  "paginadelaempresa",
  "paginadelaempresa.html",
  "#",
  "#",
  "paginadereclamos.html"
);
piedepaginapaginadelaempresa.agregaralbody();

// -----------------------------------------------------------------------------------------
