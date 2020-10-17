// Configuracion de la barra de navegacion

let barradenavegacionpaginadeinformaciondelusuario = new BarradeNavegacion(
  "paginadelainformaciondelusuario",
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
barradenavegacionpaginadeinformaciondelusuario.agregarloalbody();
barradenavegacionpaginadeinformaciondelusuario.adaptaropcionesatamanospequenos();
barradenavegacionpaginadeinformaciondelusuario.adaptarinputdebusqueda();
barradenavegacionpaginadeinformaciondelusuario.buscarproducto();

// -----------------------------------------------------------------------------------------

let usuariousuandolaaplicacion = localStorage.getItem(
  "usuarioactivodelaaplicacion"
);

let nombredelusuarioparaactualizar = usuariousuandolaaplicacion.nombre;
let correodelusuarioparaactualizar = usuariousuandolaaplicacion.correo;
let telefonodelusuarioparaacatualizar = usuariousuandolaaplicacion.telefono;

let titulodelainformaciondelusuario = document.getElementById(
  "titulodelainformaciondelusuario"
);
let nombredelusuario = document.getElementById("nombredelusuario");
let apellidodelusuario = document.getElementById("apellidodelusuario");
let edaddelusuario = document.getElementById("edaddelusuario");
let correodelusuario = document.getElementById("correodelusuario");
let contrasenadelusuario = document.getElementById("contrasenadelusuario");
let telefonodelusuario = document.getElementById("telefonodelusuario");
let sexodelusuario = document.getElementById("sexodelusuario");
let avatardelusuario = document.getElementById("avatardelusuario");
let paisdelusuario = document.getElementById("paisdelusuario");
let ciudaddelusuario = document.getElementById("ciudaddelusuario");
let descripciondelusuario = document.getElementById("descripciondelusuario");
let fondoactualdelusuario = document.getElementById("fondoactualdelusuario");
let productoscompradosdelusuario = document.getElementById(
  "productoscompradosdelusuario"
);
let productosenventadelusuario = document.getElementById(
  "productosenventadelusuario"
);
let productosvendidosdelusuario = document.getElementById(
  "productosvendidosdelusuario"
);
let reclamosalaempresadelusuario = document.getElementById(
  "reclamosalaempresadelusuario"
);
let reclamosaunusuariodelusuario = document.getElementById(
  "reclamosaunusuariodelusuario"
);
let reclamosrecividosdelusuario = document.getElementById(
  "reclamosrecividosdelusuario"
);
let botondemodificarinformacionprincipal = document.getElementById(
  "botondemodificarinformacionprincipal"
);

let botondemodificardescripcion = document.getElementById(
  "botondemodificardescripcion"
);

const usardatosdeusuarioenlapaginadelainformaciodelusuario = () => {
  obtenerusuariousandolaaplicacion(usuariousuandolaaplicacion).then(() => {
    barradenavegacionpaginadeinformaciondelusuario.cerrarsesion();
    console.log(usuariodelaaplicacion);
    titulodelainformaciondelusuario.textContent = `Bienvenido ${usuariodelaaplicacion.nombre}`;
    nombredelusuario.value = usuariodelaaplicacion.nombre;
    apellidodelusuario.value = usuariodelaaplicacion.apellido;
    edaddelusuario.value = usuariodelaaplicacion.edad;
    correodelusuario.value = usuariodelaaplicacion.correo;
    contrasenadelusuario.value = usuariodelaaplicacion.contrasena;
    telefonodelusuario.value = usuariodelaaplicacion.telefono;
    sexodelusuario.value = usuariodelaaplicacion.sexo;
    avatardelusuario.value = usuariodelaaplicacion.avatar;
    paisdelusuario.value = usuariodelaaplicacion.pais;
    ciudaddelusuario.value = usuariodelaaplicacion.ciudad;
    descripciondelusuario.value = usuariodelaaplicacion.descripcion;
    fondoactualdelusuario.textContent = `$ ${usuariodelaaplicacion.fondo}`;
    productoscompradosdelusuario.textContent =
      usuariodelaaplicacion.productoscomprados.length;
    productosenventadelusuario.textContent =
      usuariodelaaplicacion.productosenventa.length;
    productosvendidosdelusuario.textContent =
      usuariodelaaplicacion.productosvendidos.length;
    reclamosalaempresadelusuario.textContent =
      usuariodelaaplicacion.reclamos.length;
    reclamosaunusuariodelusuario.textContent =
      usuariodelaaplicacion.reclamos.length;
    reclamosrecividosdelusuario.textContent =
      usuariodelaaplicacion.reclamos.length;

    basededatos
      .collection("datosunicos")
      .get()
      .then((informacion) => {
        informacion.docs.forEach((datos) => {
          let datosunicos = datos.data();
          let nombresparainspeccionar = datosunicos.nombres;
          let correosparainspeccionar = datosunicos.correos;
          let telefonosparainspeccionar = datosunicos.telefonos;
          console.log(nombresparainspeccionar);
          console.log(correosparainspeccionar);
          console.log(telefonosparainspeccionar);

          let usuarioactualizado = {
            id: "",
            nombre: "",
            apellido: "",
            edad: 0,
            correo: "",
            contrasena: "",
            telefono: 0,
            descripcion: usuariodelaaplicacion.descripcion,
            sexo: "",
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSymjxHoVB2hlH41ioYDjkzOd7oVPhJu-uIeQ&usqp=CAU",
            pais: "",
            ciudad: "",
          };

          let aceptadordeformulario = {
            nombreaceptado: "",
            apellidoaceptado: "",
            edadaceptada: "",
            correoaceptado: "",
            contrasenaaceptada: "",
            telefonoaceptado: "",
            sexoaceptado: "",
            paisaceptado: "",
            ciudadaceptada: "",
            descripcionaceptada: "",
          };

          const inspeccionadordeinputnombreusuario = () => {
            let nombreusuario = nombredelusuario.value.trim();

            if (nombreusuario === usuariodelaaplicacion.nombre) {
              aceptadordeformulario.nombreaceptado = true;
              console.log(aceptadordeformulario.nombreaceptado);
              usuarioactualizado.nombre = nombreusuario;
              console.log(nombreusuario);
            } else if (
              parseInt(nombreusuario) <= 0 ||
              parseInt(nombreusuario) >= 0
            ) {
              nombredelusuario.style.borderColor = "red";
              nombredelusuario.placeholder = "ingrese un nombre valido";
              console.log("esta mal");
            } else if (nombreusuario === "") {
              nombredelusuario.style.borderColor = "red";
              nombredelusuario.placeholder = "ingrese un nombre valido";
              console.log("esta mal");
            } else if (nombreusuario.length <= 2) {
              nombredelusuario.style.borderColor = "red";
              nombredelusuario.placeholder = "ingrese un nombre valido";
              console.log("esta mal");
            } else if (
              nombresparainspeccionar.some(
                (nombre) => nombre === nombredelusuario
              )
            ) {
              nombredelusuario.style.borderColor = "red";
              nombredelusuario.placeholder = "el nombre ya existe";
              console.log("esta mal");
            } else {
              aceptadordeformulario.nombreaceptado = true;
              usuarioactualizado.nombre = nombreusuario;
              console.log(nombreusuario);
            }
          };

          const inspeccionadordeinputapellidousuario = () => {
            let apellidousuario = apellidodelusuario.value.trim();

            if (
              parseInt(apellidousuario) <= 0 ||
              parseInt(apellidousuario) >= 0
            ) {
              apellidodelusuario.style.borderColor = "red";
              apellidodelusuario.placeholder = "ingrese un apellido valido";
              console.log("esta mal");
            } else if (apellidousuario === "") {
              apellidodelusuario.style.borderColor = "red";
              apellidodelusuario.placeholder = "ingrese un apellido valido";
              console.log("esta mal");
            } else if (apellidousuario.length <= 2) {
              apellidodelusuario.style.borderColor = "red";
              apellidodelusuario.placeholder = "ingrese un apellido valido";
              console.log("esta mal");
            } else {
              aceptadordeformulario.apellidoaceptado = true;
              console.log(aceptadordeformulario.apellidoaceptado);
              usuarioactualizado.apellido = apellidousuario;
              console.log(apellidousuario);
            }
          };

          const inspeccionadordeinputedadusuario = () => {
            let edadusuario = parseInt(edaddelusuario.value.trim());

            if (edadusuario <= 0 || edadusuario >= 100) {
              edaddelusuario.style.borderColor = "red";
              edaddelusuario.placeholder = "ingrese una edad valido";
              console.log("esta mal");
            } else if (edadusuario === "") {
              edaddelusuario.style.borderColor = "red";
              edaddelusuario.placeholder = "ingrese una edad valido";
              console.log("esta mal");
            } else if (isNaN(edadusuario)) {
              edaddelusuario.style.borderColor = "red";
              edaddelusuario.placeholder = "ingrese una edad valido";
              console.log("esta mal");
            } else if (edadusuario.length >= 2) {
              edaddelusuario.style.borderColor = "red";
              edaddelusuario.placeholder = "ingrese una edad valido";
              console.log("esta mal");
            } else {
              aceptadordeformulario.edadaceptada = true;
              console.log(aceptadordeformulario.edadaceptada);
              usuarioactualizado.edad = edadusuario;
              console.log(edadusuario);
            }
          };

          const inspeccionadordeinputcorreousuario = () => {
            let correousuario = correodelusuario.value.trim();

            if (correousuario === usuariodelaaplicacion.correo) {
              aceptadordeformulario.correoaceptado = true;
              console.log(aceptadordeformulario.correoaceptado);
              usuarioactualizado.correo = correousuario;
              console.log(correousuario);
            } else if (
              parseInt(correousuario) <= 0 ||
              parseInt(correousuario) >= 0
            ) {
              correodelusuario.style.borderColor = "red";
              correodelusuario.placeholder = "ingrese un correo valido";
              console.log("esta mal");
            } else if (correousuario === "") {
              correodelusuario.style.borderColor = "red";
              correodelusuario.placeholder = "ingrese un correo valido";
              console.log("esta mal");
            } else if (correousuario.length <= 12) {
              correodelusuario.style.borderColor = "red";
              correodelusuario.placeholder = "ingrese un correo valido";
              console.log("esta mal");
            } else if (
              correousuario.endsWith("@gmail.com") ||
              correousuario.endsWith("@hotmail.com")
            ) {
              aceptadordeformulario.correoaceptado = true;
              console.log(aceptadordeformulario.correoaceptado);
              usuarioactualizado.correo = correousuario;
              console.log(correousuario);
            } else if (
              correosparainspeccionar.some((correo) => correo === correousuario)
            ) {
              correodelusuario.style.borderColor = "red";
              correodelusuario.placeholder = "el correo ya existe";
              console.log("esta mal");
            } else {
              correodelusuario.style.borderColor = "red";
              correodelusuario.placeholder = "ingrese un correo valido";
              console.log("esta mal");
            }
          };

          const inspeccionadordeinputcontrasenausuario = () => {
            let contrasenausuario = contrasenadelusuario.value.trim();

            if (
              parseInt(contrasenausuario) >= 0 ||
              parseInt(contrasenausuario) <= 0
            ) {
              contrasenadelusuario.style.borderColor = "red";
              contrasenadelusuario.placeholder =
                "ingrese una contrasena valido";
              console.log("esta mal");
            } else if (contrasenausuario === "") {
              contrasenadelusuario.style.borderColor = "red";
              contrasenadelusuario.placeholder =
                "ingrese una contrasena valido";
              console.log("esta mal");
            } else if (
              contrasenausuario.length <= 8 ||
              contrasenausuario.length >= 20
            ) {
              contrasenadelusuario.style.borderColor = "red";
              contrasenadelusuario.placeholder =
                "ingrese una contrasena valido";
              console.log("esta mal");
            } else {
              aceptadordeformulario.contrasenaaceptada = true;
              console.log(aceptadordeformulario.contrasenaaceptada);
              usuarioactualizado.contrasena = contrasenausuario;
              console.log(contrasenausuario);
            }
          };

          const inspeccionadordeinputtelefonousuario = () => {
            let telefonousuario = parseInt(telefonodelusuario.value.trim());

            if (telefonousuario === usuariodelaaplicacion.telefono) {
              aceptadordeformulario.telefonoaceptado = true;
              console.log(aceptadordeformulario.telefonoaceptado);
              usuarioactualizado.telefono = telefonousuario;
              console.log(telefonousuario);
            } else if (telefonousuario === "") {
              telefonodelusuario.style.borderColor = "red";
              telefonodelusuario.placeholder = "ingrese un telefono valido";
              console.log("esta mal");
              console.log("esta mal");
            } else if (telefonousuario.length > 9) {
              telefonodelusuario.style.borderColor = "red";
              telefonodelusuario.placeholder = "ingrese un telefono valido";
              console.log("esta mal");
              onsole.log("esta mal");
            } else if (isNaN(telefonousuario)) {
              telefonodelusuario.style.borderColor = "red";
              telefonodelusuario.placeholder = "ingrese un telefono valido";
              console.log("esta mal");
            } else if (typeof telefonousuario === "string") {
              telefonodelusuario.style.borderColor = "red";
              telefonodelusuario.placeholder = "ingrese un telefono valido";
              console.log("esta mal");
            } else if (
              telefonosparainspeccionar.some(
                (telefono) => telefono === parseInt(telefonousuario)
              )
            ) {
              telefonodelusuario.style.borderColor = "red";
              telefonodelusuario.placeholder = "el telefono ya existe";
              console.log("esta mal");
            } else {
              aceptadordeformulario.telefonoaceptado = true;
              console.log(aceptadordeformulario.telefonoaceptado);
              usuarioactualizado.telefono = telefonousuario;
              console.log(telefonousuario);
            }
          };

          const inspeccionadordeinputsexousuario = () => {
            let sexousuario = sexodelusuario.value.trim().toLowerCase();

            if (sexousuario === "hombre" || sexousuario === "mujer") {
              aceptadordeformulario.sexoaceptado = true;
              console.log(aceptadordeformulario.sexoaceptado);
              usuarioactualizado.sexo = sexousuario;
              console.log(sexousuario);
            } else {
              sexodelusuario.style.borderColor = "red";
              sexodelusuario.placeholder = "ingrese un sexo valido";
              console.log("esta mal");
            }
          };

          const inspeccionadordeinputpaisusuario = () => {
            let paisusuario = paisdelusuario.value.trim();

            if (parseInt(paisusuario) <= 0 || parseInt(paisusuario) >= 0) {
              paisdelusuario.style.borderColor = "red";
              paisdelusuario.placeholder = "ingrese un pais valido";
              console.log("esta mal");
            } else if (paisusuario === "") {
              paisdelusuario.style.borderColor = "red";
              paisdelusuario.placeholder = "ingrese un pais valido";
              console.log("esta mal");
            } else if (paisusuario.length <= 2) {
              paisdelusuario.style.borderColor = "red";
              paisdelusuario.placeholder = "ingrese un pais valido";
              console.log("esta mal");
            } else {
              aceptadordeformulario.paisaceptado = true;
              console.log(aceptadordeformulario.paisaceptado);
              usuarioactualizado.pais = paisusuario;
              console.log(paisusuario);
            }
          };

          const inspeccionadordeinputciudadusuario = () => {
            let ciudadusuario = ciudaddelusuario.value.trim();

            if (parseInt(ciudadusuario) <= 0 || parseInt(ciudadusuario) >= 0) {
              ciudaddelusuario.style.borderColor = "red";
              ciudaddelusuario.placeholder = "ingrese una ciudad valida";
              console.log("esta mal");
            } else if (ciudadusuario === "") {
              ciudaddelusuario.style.borderColor = "red";
              ciudaddelusuario.placeholder = "ingrese una ciudad valida";
              console.log("esta mal");
            } else if (ciudadusuario.length <= 2) {
              ciudaddelusuario.style.borderColor = "red";
              ciudaddelusuario.placeholder = "ingrese una ciudad valida";
              console.log("esta mal");
            } else {
              aceptadordeformulario.ciudadaceptada = true;
              console.log(aceptadordeformulario.ciudadaceptada);
              usuarioactualizado.ciudad = ciudadusuario;
              console.log(ciudadusuario);
            }
          };

          const actualizarusuarioalabasededatos = () => {
            basededatos
              .collection("usuarios")
              .doc(usuariousuandolaaplicacion)
              .update(usuarioactualizado);
          };

          botondemodificarinformacionprincipal.addEventListener(
            "click",
            (e) => {
              inspeccionadordeinputnombreusuario();
              inspeccionadordeinputapellidousuario();
              inspeccionadordeinputedadusuario();
              inspeccionadordeinputcorreousuario();
              inspeccionadordeinputcontrasenausuario();
              inspeccionadordeinputtelefonousuario();
              inspeccionadordeinputsexousuario();
              inspeccionadordeinputpaisusuario();
              inspeccionadordeinputciudadusuario();

              if (
                aceptadordeformulario.nombreaceptado === true &&
                aceptadordeformulario.apellidoaceptado === true &&
                aceptadordeformulario.edadaceptada === true &&
                aceptadordeformulario.correoaceptado === true &&
                aceptadordeformulario.contrasenaaceptada === true &&
                aceptadordeformulario.telefonoaceptado === true &&
                aceptadordeformulario.sexoaceptado === true &&
                aceptadordeformulario.paisaceptado === true &&
                aceptadordeformulario.ciudadaceptada === true
              ) {
                if (
                  nombresparainspeccionar.some(
                    (nombre) => nombre === usuariodelaaplicacion.nombre
                  )
                ) {
                  console.log("esta el nombre");
                  let indicedenombreparaeliminar = nombresparainspeccionar.indexOf(
                    usuariodelaaplicacion.nombre
                  );
                  nombresparainspeccionar.splice(indicedenombreparaeliminar, 1);
                }

                if (
                  correosparainspeccionar.some(
                    (correo) => correo === usuariodelaaplicacion.correo
                  )
                ) {
                  console.log("esta el correo");
                  let indicedecorreoparaeliminar = correosparainspeccionar.indexOf(
                    usuariodelaaplicacion.correo
                  );
                  correosparainspeccionar.splice(indicedecorreoparaeliminar, 1);
                }

                if (
                  telefonosparainspeccionar.some(
                    (telefono) => telefono === usuariodelaaplicacion.telefono
                  )
                ) {
                  console.log("esta el telefono");
                  let indicedetelefonoparaeliminar = telefonosparainspeccionar.indexOf(
                    usuariodelaaplicacion.telefono
                  );
                  telefonosparainspeccionar.splice(
                    indicedetelefonoparaeliminar,
                    1
                  );
                }

                actualizarusuarioalabasededatos();

                nombresparainspeccionar.push(usuarioactualizado.nombre);
                correosparainspeccionar.push(usuarioactualizado.correo);
                telefonosparainspeccionar.push(usuarioactualizado.telefono);

                let nombresparainspeccionarmodificados = [
                  ...new Set(nombresparainspeccionar),
                ];
                let correosparainspeccionarmedificados = [
                  ...new Set(correosparainspeccionar),
                ];
                let telefonosparainspeccionarmodificados = [
                  ...new Set(telefonosparainspeccionar),
                ];

                basededatos
                  .collection("datosunicos")
                  .doc("KGAghAnJgejtBNq7vSfD")
                  .update({
                    nombres: nombresparainspeccionarmodificados,
                    correos: correosparainspeccionarmedificados,
                    telefonos: telefonosparainspeccionarmodificados,
                  })
                  .then(() => {
                    location.reload();
                  });
              } else {
                console.log("complete el formulario con datos validos");
              }
              e.preventDefault();
            }
          );

          const inspeccionadordeinputdescripcionusuario = () => {
            let descripcionusuario = descripciondelusuario.value.trim();

            if (
              parseInt(descripcionusuario) >= 0 ||
              parseInt(descripcionusuario) <= 0
            ) {
              descripciondelusuario.style.borderColor = "red";
              descripciondelusuario.placeholder = "ingrese minimo 50 letras";
            } else if (descripcionusuario === "") {
              descripciondelusuario.style.borderColor = "red";
              descripciondelusuario.placeholder = "ingrese minimo 50 letras";
            } else if (
              descripcionusuario.length < 50 ||
              descripcionusuario.length > 100
            ) {
              descripciondelusuario.style.borderColor = "red";
              descripciondelusuario.placeholder = "ingrese minimo 50 letras";
            } else {
              aceptadordeformulario.descripcionaceptada = true;
              usuarioactualizado.descripcion = descripcionusuario;
              console.log(descripcionusuario);
            }
          };

          botondemodificardescripcion.addEventListener("click", (e) => {
            inspeccionadordeinputdescripcionusuario();

            if (aceptadordeformulario.descripcionaceptada === true) {
              let descripcionusuario = descripciondelusuario.value.trim();
              basededatos
                .collection("usuarios")
                .doc(usuariousuandolaaplicacion)
                .update({
                  descripcion: descripcionusuario,
                })
                .then(() => {
                  window.location.reload();
                });
            } else {
              console.log("ingrese una descripcion valida");
            }
          });

          let botondeagregarfondo = document.getElementById(
            "botondeagregarfondo"
          );
          botondeagregarfondo.addEventListener("click", () => {
            window.location.href = "paginadefondosdelusuario.html";
          });
        });
      });
  });
};

usardatosdeusuarioenlapaginadelainformaciodelusuario();

// Configuracion de la piedepagina

let piedepaginapaginadeinformaciondelusuario = new PiedePagina(
  "paginadelainformaciondelusuario",
  "paginadelaempresa.html",
  "#",
  "#",
  "paginadereclamos.html"
);
piedepaginapaginadeinformaciondelusuario.agregaralbody();

// -----------------------------------------------------------------------------------------
