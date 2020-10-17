// Configuracion de la barra de navegacion

let barradenavegacioniniciarsesion = new BarradeNavegacion(
  "iniciodesesion",
  "paginadelaempresa.html",
  "#",
  "Nuevo",
  "#",
  "Ofertas",
  "paginadelaempresa.html",
  "Nosotoros",
  "crearcuenta.html",
  "Crear Cuenta"
);
barradenavegacioniniciarsesion.agregarloalbody();
barradenavegacioniniciarsesion.adaptaropcionesatamanospequenos();
barradenavegacioniniciarsesion.adaptarinputdebusqueda();
barradenavegacioniniciarsesion.buscarproducto();

// -----------------------------------------------------------------------------------------

// Configuracion del formulario de inicio de sesion

let formulariodeinciodesesion = document.getElementById(
  "formulariodeinciodesesion"
);

let inputnombre = document.getElementById("inputnombre");

let inputcorreo = document.getElementById("inputcorreo");

let inputcontrasena = document.getElementById("inputcontrasena");

let usuarioencontrado = false;

let usuarioactivo = "";

let usuarioenlaaplicacion = localStorage;

const obtenerusuariosdelabasededatos = () => {
  let nombreusuario = inputnombre.value;
  let correousuario = inputcorreo.value;
  let contrasenausuario = inputcontrasena.value;
  basededatos
    .collection("usuarios")
    .where("nombre", "==", nombreusuario)
    .where("correo", "==", correousuario)
    .where("contrasena", "==", contrasenausuario)
    .get()
    .then((informacion) => {
      informacion.docs.forEach((usuario) => {
        let informaciondelusuario = usuario.data();
        console.log(informaciondelusuario);
        usuarioactivo = usuario.id;
        usuarioenlaaplicacion.setItem(
          "usuarioactivodelaaplicacion",
          usuarioactivo
        );
        console.log(localStorage.getItem("usuarioactivodelaaplicacion"));
        console.log(usuarioactivo);
        usuarioencontrado = true;
        window.location.href = "paginadeopcionesdelusuario.html";
      });
    });
};

formulariodeinciodesesion.addEventListener("submit", (e) => {
  obtenerusuariosdelabasededatos();
  e.preventDefault();
});

// -----------------------------------------------------------------------------------------

// Configuracion de la piedepagina

let piedepaginainiciarsesion = new PiedePagina(
  "iniciodesesion",
  "paginadelaempresa.html",
  "#",
  "#",
  "paginadereclamos.html"
);
piedepaginainiciarsesion.agregaralbody();

// -----------------------------------------------------------------------------------------
