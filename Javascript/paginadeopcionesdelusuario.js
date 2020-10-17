// Configuracion de la barra de navegacion

let barradenavegacionpaginadeopcionesdelusuario = new BarradeNavegacion(
  "paginadeopcionesdelusuario",
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
barradenavegacionpaginadeopcionesdelusuario.agregarloalbody();
barradenavegacionpaginadeopcionesdelusuario.adaptaropcionesatamanospequenos();
barradenavegacionpaginadeopcionesdelusuario.adaptarinputdebusqueda();
barradenavegacionpaginadeopcionesdelusuario.buscarproducto();

// -----------------------------------------------------------------------------------------

let titulodebienvenidaalusuario = document.getElementById(
  "titulodebienvenidaalusuario"
);

let usuariousuandolaaplicacion = localStorage.getItem(
  "usuarioactivodelaaplicacion"
);

console.log(usuariousuandolaaplicacion);

const usardatosdeusuarioenlapaginadelasopcionesdelusuario = () => {
  obtenerusuariousandolaaplicacion(usuariousuandolaaplicacion).then(() => {
    barradenavegacionpaginadeopcionesdelusuario.cerrarsesion();
    titulodebienvenidaalusuario.textContent = `Bienvenido de ${usuariodelaaplicacion.nombre}`;

    let botoncerrarsesion = document.getElementById("botoncerrarsesion");
    botoncerrarsesion.addEventListener("click", (e) => {
      usuarioactivo = "";
      localStorage.setItem("usuarioactivodelaaplicacion", usuarioactivo);
      console.log(usuarioactivo);
      console.log("el usuario cerro sesion");
      window.location.href = "index.html";
      e.preventDefault();
    });

    let botondereclamo = document.getElementById("botondereclamo");
    botondereclamo.addEventListener("click", () => {
      window.location.href = "paginadereclamos.html";
    });
  });
};

usardatosdeusuarioenlapaginadelasopcionesdelusuario();

// Configuracion de la piedepagina

let piedepaginapaginadeopcionesdelusuario = new PiedePagina(
  "paginadeopcionesdelusuario",
  "paginadelaempresa.html",
  "#",
  "#",
  "paginadereclamos.html"
);
piedepaginapaginadeopcionesdelusuario.agregaralbody();

// -----------------------------------------------------------------------------------------
