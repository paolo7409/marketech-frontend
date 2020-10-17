// Configuracion de la barra de navegacion

let barradenavegacionpaginadereclamos = new BarradeNavegacion(
  "paginadereclamos",
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
barradenavegacionpaginadereclamos.agregarloalbody();
barradenavegacionpaginadereclamos.adaptaropcionesatamanospequenos();
barradenavegacionpaginadereclamos.adaptarinputdebusqueda();
barradenavegacionpaginadereclamos.buscarproducto();

// -----------------------------------------------------------------------------------------

let usuariousuandolaaplicacion = localStorage.getItem(
  "usuarioactivodelaaplicacion"
);

console.log(usuariousuandolaaplicacion);

const usardatosdeusuarioenlapaginadereclamos = () => {
  obtenerusuariousandolaaplicacion(usuariousuandolaaplicacion).then(() => {
    barradenavegacionpaginadereclamos.cerrarsesion();
    let inputdereclamador = document.getElementById("inputdereclamador");
    inputdereclamador.value = usuariodatos.nombre;
    inputdereclamador.setAttribute("readonly", "readonly");

    let nuevoreclamo = {
      reclamador: usuariodatos.nombre,
      reclamado: "",
      reclamo: "",
    };

    let aceptadordereclamo = {
      reclamadoaceptado: "",
      reclamoaceptado: "",
    };

    let inputdereclamado = document.getElementById("inputdereclamado");

    let inputdereclamo = document.getElementById("contenidodereclamo");

    let botondereclamo = document.getElementById("botondereclamo");

    const inspeccionadordeinputreclamado = () => {
      let reclamado = inputdereclamado.value.trim();

      if (parseInt(reclamado) <= 0 || parseInt(reclamado) >= 0) {
        inputdereclamado.style.borderColor = "red";
        inputdereclamado.placeholder = "ingrese un nombre valido";
      } else if (reclamado === "") {
        inputdereclamado.style.borderColor = "red";
        inputdereclamado.placeholder = "ingrese un nombre valido";
      } else if (reclamado.length <= 2) {
        inputdereclamado.style.borderColor = "red";
        inputdereclamado.placeholder = "ingrese un nombre valido";
      } else {
        aceptadordereclamo.reclamadoaceptado = true;
        nuevoreclamo.reclamado = reclamado;
        console.log(reclamado);
      }
    };

    const inspeccionadordeinputreclamo = () => {
      let contenidodereclamo = inputdereclamo.value.trim();

      if (
        parseInt(contenidodereclamo) <= 0 ||
        parseInt(contenidodereclamo) >= 0
      ) {
        inputdereclamo.style.borderColor = "red";
        inputdereclamo.placeholder = "ingrese un reclamo valido";
      } else if (contenidodereclamo === "") {
        inputdereclamo.style.borderColor = "red";
        inputdereclamo.placeholder = "ingrese un reclamo valido";
      } else if (contenidodereclamo.length <= 19) {
        inputdereclamo.style.borderColor = "red";
        inputdereclamo.placeholder = "ingrese al menos 20 caracteres";
      } else {
        aceptadordereclamo.reclamoaceptado = true;
        nuevoreclamo.reclamo = contenidodereclamo;
        console.log(contenidodereclamo);
      }
    };

    botondereclamo.addEventListener("click", () => {
      inspeccionadordeinputreclamado();
      inspeccionadordeinputreclamo();
      if (
        aceptadordereclamo.reclamadoaceptado === true &&
        aceptadordereclamo.reclamoaceptado
      ) {
        basededatos
          .collection("reclamos")
          .add(nuevoreclamo)
          .then(() => {
            basededatos
              .collection("reclamos")
              .where("reclamador", "==", usuariodatos.nombre)
              .where("reclamado", "==", nuevoreclamo.reclamado)
              .where("reclamo", "==", nuevoreclamo.reclamo)
              .get()
              .then((informacion) => {
                informacion.docs.forEach((reclamo) => {
                  let reclamoid = reclamo.id;
                  basededatos
                    .collection("usuarios")
                    .where("nombre", "==", usuariodatos.nombre)
                    .get()
                    .then((informacionobtenida) => {
                      informacionobtenida.docs.forEach((usuario) => {
                        let usuarioid = usuario.id;
                        let reclamosdelusuario = usuariodatos.reclamos;
                        console.log(reclamosdelusuario);
                        reclamosdelusuario.push(reclamoid);
                        basededatos
                          .collection("usuarios")
                          .doc(usuarioid)
                          .update({
                            reclamos: reclamosdelusuario,
                          });
                      });
                    });
                });
              });
          });
      } else {
        console.log("haga un reclamo valido");
      }
    });
  });
};

usardatosdeusuarioenlapaginadereclamos();

// Configuracion de la piedepagina

let piedepaginapaginadereclamos = new PiedePagina(
  "paginadereclamos",
  "paginadelaempresa.html",
  "#",
  "#",
  "paginadereclamos.html"
);
piedepaginapaginadereclamos.agregaralbody();

// -----------------------------------------------------------------------------------------
