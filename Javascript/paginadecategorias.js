// Configuracion de la barra de navegacion

let barradenavegacionpaginadecategorias = new BarradeNavegacion(
  "paginadecategorias",
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
    basededatos
      .collection("categotias")
      .get()
      .then((informacion) => {
        informacion.docs.forEach((categoria) => {
          console.log(categoria.data());

          let tecnologia = document.getElementById("tecnologia");
          let entretenimiento = document.getElementById("entretenimiento");
          let deporte = document.getElementById("deporte");
          let ropa = document.getElementById("ropa");
          let muebles = document.getElementById("muebles");
          let autos = document.getElementById("autos");
          let libros = document.getElementById("libros");

          tecnologia.addEventListener("click", () => {
            localStorage.setItem("categoriabuscada", "3yKJfmNdziusTB6XDOgK");
            console.log(localStorage.getItem("categoriabuscada"));
            window.location.href =
              "paginadelosproductosdeunadeterminadacategoria.html";
          });

          entretenimiento.addEventListener("click", () => {
            localStorage.setItem("categoriabuscada", "8rttYYNI6ObdKFXzckth");
            console.log(localStorage.getItem("categoriabuscada"));
            window.location.href =
              "paginadelosproductosdeunadeterminadacategoria.html";
          });

          deporte.addEventListener("click", () => {
            localStorage.setItem("categoriabuscada", "FKSqx8TgBB0lVXVZ5Ov6");
            console.log(localStorage.getItem("categoriabuscada"));
            window.location.href =
              "paginadelosproductosdeunadeterminadacategoria.html";
          });

          ropa.addEventListener("click", () => {
            localStorage.setItem("categoriabuscada", "IH9KQkVSdtJdRBe78t63");
            console.log(localStorage.getItem("categoriabuscada"));
            window.location.href =
              "paginadelosproductosdeunadeterminadacategoria.html";
          });

          muebles.addEventListener("click", () => {
            localStorage.setItem("categoriabuscada", "Jxe8qYFuNE78PJWOGBRu");
            console.log(localStorage.getItem("categoriabuscada"));
            window.location.href =
              "paginadelosproductosdeunadeterminadacategoria.html";
          });

          autos.addEventListener("click", () => {
            localStorage.setItem("categoriabuscada", "ao1KM3QzSHqEPKh6jpF9");
            console.log(localStorage.getItem("categoriabuscada"));
            window.location.href =
              "paginadelosproductosdeunadeterminadacategoria.html";
          });

          libros.addEventListener("click", () => {
            localStorage.setItem("categoriabuscada", "utXzZrEzKYXvzQye5L0D");
            console.log(localStorage.getItem("categoriabuscada"));
            window.location.href =
              "paginadelosproductosdeunadeterminadacategoria.html";
          });
        });
      });
  });
};

usardatosdeusuarioenlapaginadeproductosenventayvendidosporelusuario();

// Configuracion de la piedepagina

let piedepaginapaginadecategorias = new PiedePagina(
  "paginadecategorias",
  "paginadelaempresa.html",
  "#",
  "#",
  "paginadereclamos.html"
);
piedepaginapaginadecategorias.agregaralbody();

// -----------------------------------------------------------------------------------------
