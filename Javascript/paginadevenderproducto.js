// Configuracion de la barra de navegacion

let barradenavegacionpaginadevenderproducto = new BarradeNavegacion(
  "paginadevenderproducto",
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
barradenavegacionpaginadevenderproducto.agregarloalbody();
barradenavegacionpaginadevenderproducto.adaptaropcionesatamanospequenos()
barradenavegacionpaginadevenderproducto.adaptarinputdebusqueda()
barradenavegacionpaginadevenderproducto.buscarproducto()

// -----------------------------------------------------------------------------------------


let usuariousuandolaaplicacion = localStorage.getItem("usuarioactivodelaaplicacion");

console.log(usuariousuandolaaplicacion);

let formulariodevenderproducto = document.getElementById(
  "formulariodevenderproducto"
);

let categoriasdisponibles = [
  "tecnologia",
  "entretenimiento",
  "deporte",
  "ropa",
  "muebles",
  "autos",
  "libros",
];

const usardatosdeusuarioenlapaginadevenderproducto = () => {
  obtenerusuariousandolaaplicacion(usuariousuandolaaplicacion).then(() => {
    barradenavegacionpaginadevenderproducto.cerrarsesion()
    let inputnombre = document.getElementById("inputnombre");
    let inputcategoria = document.getElementById("inputcategoria");
    let inputprecio = document.getElementById("inputprecio");
    let inputempresa = document.getElementById("inputempresa");
    let inputvendedor = document.getElementById("inputvendedor");
    let inputtelefono = document.getElementById("inputtelefono");
    let inputcantidad = document.getElementById("inputcantidad");
    let inputoferta = document.getElementById("inputoferta");
    let inputdeurldelaimagendelproducto = document.getElementById(
      "inputdeurldelaimagendelproducto"
    );
    let imagendeproducto = document.getElementById("imagendeproducto");

    let productosenventadelusuario = usuariodelaaplicacion.productosenventa;

    let nuevoproducto = {
      id: "",
      nombre: "",
      categoria: "",
      precio: 0,
      empresa: "",
      vendedor: usuariodelaaplicacion.nombre,
      telefono: usuariodelaaplicacion.telefono,
      cantidad: "",
      oferta: 0,
      urldelaimagen: "",
    };

    let aceptadordeformulario = {
      nombreaceptado: "",
      categoriaaceptada: "",
      precioaceptado: "",
      empresaaceptada: "",
      cantidadaceptada: "",
      ofertaaceptada: "",
      urlaceptada: "",
    };

    inputdeurldelaimagendelproducto.addEventListener("keyup", (e) => {
      imagendeproducto.setAttribute(
        "src",
        inputdeurldelaimagendelproducto.value
      );
    });

    inputvendedor.value = usuariodelaaplicacion.nombre;
    inputvendedor.setAttribute("readonly", "readonly");
    inputtelefono.value = usuariodelaaplicacion.telefono;
    inputtelefono.setAttribute("readonly", "readonly");

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
        nuevoproducto.nombre = nombreproducto;
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
        nuevoproducto.categoria = categoriaproducto;
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
        nuevoproducto.precio = precioproducto;
        console.log(precioproducto);
      }
    };

    const inspeccionadordeinputempresaproducto = () => {
      let empresaproducto = inputempresa.value.trim();

      if (parseInt(empresaproducto) <= 0 || parseInt(empresaproducto) >= 0) {
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
        nuevoproducto.empresa = empresaproducto;
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
        nuevoproducto.cantidad = cantidadproducto;
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
        nuevoproducto.oferta = ofertaproducto;
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
        nuevoproducto.urldelaimagen = urldelaimagenproducto;
        console.log(urldelaimagenproducto);
      }
    };

    formulariodevenderproducto.addEventListener("submit", (e) => {
      if (usuariodatos.productosenventa.length >= 8) {
        alert("no puede tener a la ventar mas de 8 productos");
      } else {
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

          let multiplicaciondeprecioporoferta = precioproducto * ofertaproducto
          let divisiondeelresultado = multiplicaciondeprecioporoferta / 100

          let preciodefinitivodelnuevoproducto = divisiondeelresultado

          nuevoproducto.precio = preciodefinitivodelnuevoproducto
          console.log(nuevoproducto.precio)

          const agregarproductoalabasededatos = () => {
            return new Promise((resolve, reject) => {
              basededatos.collection("productos").add(nuevoproducto);
              resolve();
            });
          };

          agregarproductoalabasededatos().then(() => {
            return new Promise((resolve, reject) => {
              basededatos
                .collection("productos")
                .where("nombre", "==", nuevoproducto.nombre)
                .where("categoria", "==", nuevoproducto.categoria)
                .where("precio", "==", nuevoproducto.precio)
                .where("empresa", "==", nuevoproducto.empresa)
                .where("vendedor", "==", nuevoproducto.vendedor)
                .where("telefono", "==", nuevoproducto.telefono)
                .where("cantidad", "==", nuevoproducto.cantidad)
                .where("oferta", "==", nuevoproducto.oferta)
                .get()
                .then((informacion) =>
                  informacion.docs.forEach((producto) => {
                    console.log(producto.data());
                    resolve(producto.id);
                  })
                );
            }).then((productonuevodelusuario) => {
              productosenventadelusuario.push(productonuevodelusuario);
              basededatos
                .collection("usuarios")
                .doc(usuariousuandolaaplicacion)
                .update({
                  productosenventa: productosenventadelusuario,
                });

              basededatos
                .collection("categotias")
                .where("nombre", "==", nuevoproducto.categoria)
                .get()
                .then((informacion) => {
                  informacion.docs.forEach((categoria) => {
                    let categoriaid = categoria.id;
                    let categoriainformacion = categoria.data();
                    let todoslosproductosdelacategoria =
                      categoriainformacion.todoslosproductos;
                    todoslosproductosdelacategoria.push(
                      productonuevodelusuario
                    );
                    console.log(productonuevodelusuario)
                    console.log(todoslosproductosdelacategoria);
                    console.log(categoriainformacion);

                    basededatos
                      .collection("categotias")
                      .doc(categoriaid)
                      .update({
                        todoslosproductos: todoslosproductosdelacategoria,
                      })
                      .then(() => {
                        console.log(todoslosproductosdelacategoria)
                        window.location.href = "paginadeproductosenventayvendidosporelusuario.html"
                      })
                  });
                });
            });
          });
        } else {
          console.log("ta mal");
        }
      }
      e.preventDefault()
    });
  });
};

usardatosdeusuarioenlapaginadevenderproducto();

// Configuracion de la piedepagina

let piedepaginapaginadevenderproducto = new PiedePagina(
  "paginadevenderproducto",
  "paginadelaempresa.html", "#", "#", "paginadereclamos.html"
);
piedepaginapaginadevenderproducto.agregaralbody();

// -----------------------------------------------------------------------------------------
