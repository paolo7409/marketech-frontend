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
        let botondemodificarproducto = document.getElementById(
          "botondemodificarproducto"
        );

        titulodeproducto.textContent = productodatos.nombre;
        inputnombre.value = productodatos.nombre;
        inputcategoria.value = productodatos.categoria;
        inputprecio.value = productodatos.precio;
        inputempresa.value = productodatos.empresa;
        inputvendedor.value = productodatos.vendedor;
        inputvendedor.setAttribute("readonly", "readonly");
        inputtelefono.value = productodatos.telefono;
        inputtelefono.setAttribute("readonly", "readonly");
        inputcantidad.value = productodatos.cantidad;
        inputoferta.value = productodatos.oferta;
        imagendeproducto.setAttribute("src", productodatos.urldelaimagen);
        inputdeurldelaimagendelproducto.value = productodatos.urldelaimagen;

        let categoriasdisponibles = [
          "tecnologia",
          "entretenimiento",
          "deporte",
          "ropa",
          "muebles",
          "autos",
          "libros",
        ];

        let productoactualizado = {
          nombre: "",
          categoria: "",
          precio: "",
          empresa: "",
          vendedor: "",
          telefono: "",
          cantidad: "",
          oferta: "",
          urldelaimagen: "",
        };

        let aceptadordeformulario = {
          nombreaceptado: "",
          categoriaaceptada: "",
          precioaceptado: "",
          empresaaceptada: "",
          vendedoraceptada: "",
          telefonoaceptado: "",
          cantidadaceptada: "",
          ofertaaceptada: "",
          urldelaimagenaceptada: "",
        };

        const inspeccionadordeinputnombreproducto = () => {
          let nombreproducto = inputnombre.value.trim();

          if (parseInt(nombreproducto) <= 0 || parseInt(nombreproducto) >= 0) {
            inputnombre.style.borderColor = "red";
            inputnombre.placeholder = "ingrese un nombre valido";
          } else if (nombreproducto === "") {
            inputnombre.style.borderColor = "red";
            inputnombre.placeholder = "ingrese un nombre valido";
          } else if (nombreproducto.length <= 2) {
            inputnombre.style.borderColor = "red";
            inputnombre.placeholder = "ingrese un nombre valido";
          } else {
            aceptadordeformulario.nombreaceptado = true;
            productoactualizado.nombre = nombreproducto;
            console.log(nombreproducto);
          }
        };

        const inspeccionadordeinputcategoriaproducto = () => {
          let categoriaproducto = inputcategoria.value.toLowerCase().trim();

          if (
            parseInt(categoriaproducto) <= 0 ||
            parseInt(categoriaproducto) >= 0
          ) {
            inputnombre.style.borderColor = "red";
            inputnombre.placeholder = "ingrese una categoria valida";
          } else if (categoriaproducto === "") {
            inputnombre.style.borderColor = "red";
            inputnombre.placeholder = "ingrese una categoria valida";
          } else if (categoriaproducto.length <= 2) {
            inputnombre.style.borderColor = "red";
            inputnombre.placeholder = "ingrese una categoria valida";
          } else if (
            categoriasdisponibles.some(
              (categoria) => categoria === categoriaproducto
            ) === false
          ) {
            inputnombre.style.borderColor = "red";
            inputnombre.placeholder = "ingrese una categoria valida";
          } else {
            aceptadordeformulario.categoriaaceptada = true;
            productoactualizado.categoria = categoriaproducto;
            console.log(categoriaproducto);
          }
        };

        const inspeccionadordeinputprecioproducto = () => {
          let precioproducto = parseInt(inputprecio.value.trim());

          if (precioproducto <= 0 || precioproducto >= 1000000000) {
            inputprecio.style.borderColor = "red";
            inputprecio.placeholder = "ingrese un precio valido";
          } else if (precioproducto === "") {
            inputprecio.style.borderColor = "red";
            inputprecio.placeholder = "ingrese un precio valido";
          } else if (isNaN(precioproducto)) {
            inputprecio.style.borderColor = "red";
            inputprecio.placeholder = "ingrese un precio valido";
          } else if (precioproducto.length >= 0) {
            inputprecio.style.borderColor = "red";
            inputprecio.placeholder = "ingrese un precio valido";
          } else {
            aceptadordeformulario.precioaceptado = true;
            productoactualizado.precio = precioproducto;
            console.log(precioproducto);
          }
        };

        const inspeccionadordeinputempresaproducto = () => {
          let empresaproducto = inputempresa.value.trim();

          if (
            parseInt(empresaproducto) <= 0 ||
            parseInt(empresaproducto) >= 0
          ) {
            inputempresa.style.borderColor = "red";
            inputempresa.placeholder = "ingrese una empresa valida";
          } else if (empresaproducto === "") {
            inputempresa.style.borderColor = "red";
            inputempresa.placeholder = "ingrese una empresa valida";
          } else if (empresaproducto.length <= 2) {
            inputempresa.style.borderColor = "red";
            inputempresa.placeholder = "ingrese una empresa valida";
          } else {
            aceptadordeformulario.empresaaceptada = true;
            productoactualizado.empresa = empresaproducto;
            console.log(empresaproducto);
          }
        };

        const inspeccionadordeinputcantidadproducto = () => {
          let cantidadproducto = parseInt(inputcantidad.value.trim());

          if (cantidadproducto <= 0 || cantidadproducto >= 101) {
            inputcantidad.style.borderColor = "red";
            inputcantidad.placeholder = "ingrese una cantidad valida";
          } else if (cantidadproducto === "") {
            inputcantidad.style.borderColor = "red";
            inputcantidad.placeholder = "ingrese una cantidad valida";
          } else if (isNaN(cantidadproducto)) {
            inputcantidad.style.borderColor = "red";
            inputcantidad.placeholder = "ingrese una cantidad valida";
          } else if (cantidadproducto.length >= 0) {
            inputcantidad.style.borderColor = "red";
            inputcantidad.placeholder = "ingrese una cantidad valida";
          } else {
            aceptadordeformulario.cantidadaceptada = true;
            productoactualizado.cantidad = cantidadproducto;
            console.log(cantidadproducto);
          }
        };

        const inspeccionadordeinputofertaproducto = () => {
          let ofertaproducto = parseInt(inputoferta.value.trim());

          if (ofertaproducto <= 0 || ofertaproducto >= 100) {
            inputoferta.style.borderColor = "red";
            inputoferta.placeholder = "ingrese una oferta valida";
          } else if (ofertaproducto === "") {
            inputoferta.style.borderColor = "red";
            inputoferta.placeholder = "ingrese una oferta valida";
          } else if (isNaN(ofertaproducto)) {
            inputoferta.style.borderColor = "red";
            inputoferta.placeholder = "ingrese una oferta valida";
          } else if (ofertaproducto.length >= 0) {
            inputoferta.style.borderColor = "red";
            inputoferta.placeholder = "ingrese una oferta valida";
          } else {
            aceptadordeformulario.ofertaaceptada = true;
            productoactualizado.oferta = ofertaproducto;
            console.log(ofertaproducto);
          }
        };

        const inspeccionadordeinputimagenproducto = () => {
          let urldelaimagenproducto = inputdeurldelaimagendelproducto.value.trim();

          if (
            parseInt(urldelaimagenproducto) <= 0 ||
            parseInt(urldelaimagenproducto) >= 0
          ) {
            inputdeurldelaimagendelproducto.style.borderColor = "red";
            inputdeurldelaimagendelproducto.placeholder =
              "ingrese una empresa valida";
          } else if (urldelaimagenproducto === "") {
            inputdeurldelaimagendelproducto.style.borderColor = "red";
            inputdeurldelaimagendelproducto.placeholder =
              "ingrese una empresa valida";
          } else if (urldelaimagenproducto.length <= 2) {
            inputdeurldelaimagendelproducto.style.borderColor = "red";
            inputdeurldelaimagendelproducto.placeholder =
              "ingrese una empresa valida";
          } else {
            aceptadordeformulario.urlaceptada = true;
            productoactualizado.urldelaimagen = urldelaimagenproducto;
            console.log(urldelaimagenproducto);
          }
        };

        const actualizarproducto = () => {
          basededatos
            .collection("productos")
            .doc(productoparaverinformacion)
            .update(productoactualizado)
            .then(() => {
              window.location.href =
                "paginadeproductosenventayvendidosporelusuario.html";
            });
        };

        informaciondeundeterminadoproducto.addEventListener("submit", (e) => {
          inspeccionadordeinputnombreproducto();
          inspeccionadordeinputcategoriaproducto();
          inspeccionadordeinputprecioproducto();
          inspeccionadordeinputempresaproducto();
          inspeccionadordeinputcantidadproducto();
          inspeccionadordeinputofertaproducto();
          inspeccionadordeinputimagenproducto();

          if (
            aceptadordeformulario.nombreaceptado === true &&
            aceptadordeformulario.categoriaaceptada === true &&
            aceptadordeformulario.precioaceptado === true &&
            aceptadordeformulario.empresaaceptada === true &&
            aceptadordeformulario.cantidadaceptada === true &&
            aceptadordeformulario.ofertaaceptada === true &&
            aceptadordeformulario.urlaceptada === true
          ) {
            let precioproducto = parseInt(inputprecio.value.trim());
            let ofertaproducto = parseInt(inputoferta.value.trim());

            let multiplicaciondeprecioporoferta =
              precioproducto * ofertaproducto;
            let divisiondeelresultado = multiplicaciondeprecioporoferta / 100;

            let preciodefinitivodelproducto = divisiondeelresultado;

            productoactualizado.precio = preciodefinitivodelproducto;
            console.log(productoactualizado.precio);

            actualizarproducto();
          } else {
            console.log("ta mal");
          }

          e.preventDefault();
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
