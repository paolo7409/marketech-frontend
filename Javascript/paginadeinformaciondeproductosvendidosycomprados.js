// Configuracion de la barra de navegacion

let barradenavegacionpaginadelainformaciondeunproducto = new BarradeNavegacion(
  "paginadeinformaciondeundeterminadoproducto",
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
barradenavegacionpaginadelainformaciondeunproducto.agregarloalbody();
barradenavegacionpaginadelainformaciondeunproducto.adaptaropcionesatamanospequenos();
barradenavegacionpaginadelainformaciondeunproducto.adaptarinputdebusqueda();
barradenavegacionpaginadelainformaciondeunproducto.buscarproducto();

// -----------------------------------------------------------------------------------------

let usuariousuandolaaplicacion = localStorage.getItem(
  "usuarioactivodelaaplicacion"
);

console.log(usuariousuandolaaplicacion);

const usardatosdeusuarioenlapaginadeproductosenventayvendidosporelusuario = () => {
  obtenerusuariousandolaaplicacion(usuariousuandolaaplicacion).then(() => {
    barradenavegacionpaginadelainformaciondeunproducto.cerrarsesion();
    let productoparaverinformacion = localStorage.getItem(
      "productoparaverinformacion"
    );
    console.log(productoparaverinformacion);

    basededatos
      .collection("productos")
      .doc(productoparaverinformacion)
      .get()
      .then((producto) => {
        let productodatos = producto.data();

        let informaciondeundeterminadoproducto = document.getElementById(
          "informaciondeundeterminadoproducto"
        );
        let titulodeproducto = document.getElementById("titulodeproducto");
        let inputnombre = document.getElementById("inputnombre");
        let inputcategoria = document.getElementById("inputcategoria");
        let inputprecio = document.getElementById("inputprecio");
        let inputempresa = document.getElementById("inputempresa");
        let inputvendedor = document.getElementById("inputvendedor");
        let inputtelefono = document.getElementById("inputtelefono");
        let inputcantidad = document.getElementById("inputcantidad");
        let inputoferta = document.getElementById("inputoferta");
        let imagendeproducto = document.getElementById("imagendeproducto");
        let inputdeurldelaimagendelproducto = document.getElementById(
          "inputdeurldelaimagendelproducto"
        );
        let botondevermisproductos = document.getElementById(
          "botondevermisproductos"
        );

        titulodeproducto.textContent = productodatos.nombre;
        inputnombre.value = productodatos.nombre;
        inputnombre.setAttribute("readonly", "readonly");
        inputcategoria.value = productodatos.categoria;
        inputcategoria.setAttribute("readonly", "readonly");
        inputprecio.value = productodatos.precio;
        inputprecio.setAttribute("readonly", "readonly");
        inputempresa.value = productodatos.empresa;
        inputempresa.setAttribute("readonly", "readonly");
        inputvendedor.value = productodatos.vendedor;
        inputvendedor.setAttribute("readonly", "readonly");
        inputtelefono.value = productodatos.telefono;
        inputtelefono.setAttribute("readonly", "readonly");
        inputcantidad.value = productodatos.cantidad;
        inputcantidad.setAttribute("readonly", "readonly");
        inputoferta.value = productodatos.oferta;
        inputoferta.setAttribute("readonly", "readonly");
        imagendeproducto.setAttribute("src", productodatos.urldelaimagen);
        inputdeurldelaimagendelproducto.value = productodatos.urldelaimagen;
        inputdeurldelaimagendelproducto.setAttribute("readonly", "readonly");

        botondevermisproductos.addEventListener("click", () => {
          console.log("traslado");
          window.location.href =
            "paginadeproductosenventayvendidosporelusuario.html";
        });
      });
  });
};

usardatosdeusuarioenlapaginadeproductosenventayvendidosporelusuario();

// Configuracion de la piedepagina

let piedepaginapaginadelainformaciondeunproducto = new PiedePagina(
  "paginadeinformaciondeundeterminadoproducto",
  "paginadelaempresa.html",
  "#",
  "#",
  "paginadereclamos.html"
);
piedepaginapaginadelainformaciondeunproducto.agregaralbody();

// -----------------------------------------------------------------------------------------
