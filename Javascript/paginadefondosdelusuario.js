// Configuracion de la barra de navegacion

let barradenavegacionpaginadefondosdelusuario = new BarradeNavegacion(
  "paginadefondosdelusuario",
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
barradenavegacionpaginadefondosdelusuario.agregarloalbody();
barradenavegacionpaginadefondosdelusuario.adaptaropcionesatamanospequenos();
barradenavegacionpaginadefondosdelusuario.adaptarinputdebusqueda();
barradenavegacionpaginadefondosdelusuario.buscarproducto();

// -----------------------------------------------------------------------------------------

let usuariousuandolaaplicacion = localStorage.getItem(
  "usuarioactivodelaaplicacion"
);

console.log(usuariousuandolaaplicacion);

const usardatosdeusuarioenlapaginadefondosdelusuario = () => {
  obtenerusuariousandolaaplicacion(usuariousuandolaaplicacion).then(() => {
    barradenavegacionpaginadefondosdelusuario.cerrarsesion();
    basededatos
      .collection("datosunicos")
      .get()
      .then((informacion) => {
        informacion.docs.forEach((tarjetadecredito) => {
          let datosunicos = tarjetadecredito.data();
          let informacionunica = datosunicos.datosdetarjetasdecredito;
          console.log(informacionunica);

          let cantidaddefondosdelusuario = document.getElementById(
            "cantidaddefondosdelusuario"
          );

          cantidaddefondosdelusuario.textContent = `$ ${usuariodelaaplicacion.fondo}`;

          let formulariodeagregaciondelosfondosdelusuario = document.getElementById(
            "formulariodeagregaciondelosfondosdelusuario"
          );

          let nuevatarjeta = {
            numero: "",
            caducidad: "",
            codigocvv2: "",
            titulardelatarjeta: "",
            direcciondelatarjeta: "",
            ciudaddelatarjeta: "",
            provinciadelatarjeta: "",
            empresadelatarjeta: "",
          };

          let fondoactualdelusuario = usuariodelaaplicacion.fondo;

          let aceptadordecantidaagregadaalfondodelusuario = "";

          let nuevofondoactualdelusuario = "";

          let aceptadordeformulariodetarjeta = {
            numeroaceptado: "",
            caducidadaceptada: "",
            codigocvv2aceptado: "",
            titulardelatarjetaaceptado: "",
            direcciondelatarjetaaceptada: "",
            ciudaddelatarjetaaceptada: "",
            provinciadelatarjetaaceptada: "",
            empresadelatarjetaaceptada: "",
          };

          let datosdetarjetadecreditopordefecto = {
            numero: usuariodelaaplicacion.tarjetadecredito.numero,
            caducidad: usuariodelaaplicacion.tarjetadecredito.caducidad,
            codigocvv2: usuariodelaaplicacion.tarjetadecredito.codigocvv2,
            titulardelatarjeta:
              usuariodelaaplicacion.tarjetadecredito.titulardelatarjeta,
            direcciondelatarjeta:
              usuariodelaaplicacion.tarjetadecredito.direcciondelatarjeta,
            ciudaddelatarjeta:
              usuariodelaaplicacion.tarjetadecredito.ciudaddelatarjeta,
            provinciadelatarjeta:
              usuariodelaaplicacion.tarjetadecredito.provinciadelatarjeta,
            empresadelatarjeta:
              usuariodelaaplicacion.tarjetadecredito.empresadelatarjeta,
          };

          let inputnumerodetarjeta = document.getElementById(
            "inputnumerodetarjeta"
          );
          inputnumerodetarjeta.value = datosdetarjetadecreditopordefecto.numero;

          let inputcaducidad = document.getElementById("inputcaducidad");
          inputcaducidad.value = datosdetarjetadecreditopordefecto.caducidad;

          let inputcodigocvv2 = document.getElementById("inputcodigocvv2");
          inputcodigocvv2.value = datosdetarjetadecreditopordefecto.codigocvv2;

          let inputtitulardelatarjeta = document.getElementById(
            "inputtitulardelatarjeta"
          );
          inputtitulardelatarjeta.value =
            datosdetarjetadecreditopordefecto.titulardelatarjeta;

          let inputdireccion = document.getElementById("inputdireccion");
          inputdireccion.value =
            datosdetarjetadecreditopordefecto.direcciondelatarjeta;

          let inputciudad = document.getElementById("inputciudad");
          inputciudad.value =
            datosdetarjetadecreditopordefecto.ciudaddelatarjeta;

          let inputprovincia = document.getElementById("inputprovincia");
          inputprovincia.value =
            datosdetarjetadecreditopordefecto.provinciadelatarjeta;

          let tarjetavisa = document.getElementById("visa");
          let tarjetamastercard = document.getElementById("mastercard");
          let empresadelatarjetadelusuario = "";

          if (
            usuariodelaaplicacion.tarjetadecredito.numero === "" &&
            usuariodelaaplicacion.tarjetadecredito.caducidad === "" &&
            usuariodelaaplicacion.tarjetadecredito.codigocvv2 === "" &&
            usuariodelaaplicacion.tarjetadecredito.titulardelatarjeta === "" &&
            usuariodelaaplicacion.tarjetadecredito.direcciondelatarjeta ===
              "" &&
            usuariodelaaplicacion.tarjetadecredito.ciudaddelatarjeta === "" &&
            usuariodelaaplicacion.tarjetadecredito.provinciadelatarjeta ===
              "" &&
            usuariodelaaplicacion.tarjetadecredito.provinciadelatarjeta === ""
          ) {
            const inspeccionadordeinputfondoparaagregar = () => {
              let inputcantidadqueseagregaraalosfondosdelusuario = document.getElementById(
                "cantidadqueseagregaraalosfondosdelusuario"
              );
              let cantidadqueseagregaraalosfondosdelusuario = parseInt(
                inputcantidadqueseagregaraalosfondosdelusuario.value.trim()
              );

              if (cantidadqueseagregaraalosfondosdelusuario <= 0) {
                inputcantidadqueseagregaraalosfondosdelusuario.style.borderColor =
                  "red";
                inputcantidadqueseagregaraalosfondosdelusuario.placeholder =
                  "ingrese un numero valido";
              } else if (isNaN(cantidadqueseagregaraalosfondosdelusuario)) {
                inputcantidadqueseagregaraalosfondosdelusuario.style.borderColor =
                  "red";
                inputcantidadqueseagregaraalosfondosdelusuario.placeholder =
                  "ingrese un numero valido";
              } else if (cantidadqueseagregaraalosfondosdelusuario === "") {
                inputcantidadqueseagregaraalosfondosdelusuario.style.borderColor =
                  "red";
                inputcantidadqueseagregaraalosfondosdelusuario.placeholder =
                  "ingrese un numero valido";
              } else if (
                cantidadqueseagregaraalosfondosdelusuario.length <= 2 ||
                cantidadqueseagregaraalosfondosdelusuario.length >= 8
              ) {
                inputcantidadqueseagregaraalosfondosdelusuario.style.borderColor =
                  "red";
                inputcantidadqueseagregaraalosfondosdelusuario.placeholder =
                  "ingrese un numero valido";
              } else {
                aceptadordecantidaagregadaalfondodelusuario = true;
                nuevofondoactualdelusuario =
                  fondoactualdelusuario +
                  cantidadqueseagregaraalosfondosdelusuario;
                console.log(nuevofondoactualdelusuario);
              }
            };

            const inspeccionadordeinputnumerodetarjeta = () => {
              let inputnumerodetarjeta = document.getElementById(
                "inputnumerodetarjeta"
              );
              let numerodelatarjetadelusuario = parseInt(
                inputnumerodetarjeta.value.trim()
              );

              console.log(
                informacionunica.some(
                  (numero) => numero === numerodelatarjetadelusuario
                )
              );

              if (
                informacionunica.some(
                  (numero) => numero === numerodelatarjetadelusuario
                )
              ) {
                inputnumerodetarjeta.style.borderColor = "red";
                inputnumerodetarjeta.placeholder = "el numero ya existe";
                aceptadordeformulariodetarjeta.numeroaceptado = false;
              } else if (numerodelatarjetadelusuario <= 0) {
                inputnumerodetarjeta.style.borderColor = "red";
                inputnumerodetarjeta.placeholder = "ingrese un numero valido";
              } else if (isNaN(numerodelatarjetadelusuario)) {
                inputnumerodetarjeta.style.borderColor = "red";
                inputnumerodetarjeta.placeholder = "ingrese un numero valido";
              } else if (numerodelatarjetadelusuario === "") {
                inputnumerodetarjeta.style.borderColor = "red";
                inputnumerodetarjeta.placeholder = "ingrese un numero valido";
              } else if (
                numerodelatarjetadelusuario.length <= 7 ||
                numerodelatarjetadelusuario.length >= 9
              ) {
                inputnumerodetarjeta.style.borderColor = "red";
                inputnumerodetarjeta.placeholder = "ingrese un numero valido";
              } else {
                aceptadordeformulariodetarjeta.numeroaceptado = true;
                nuevatarjeta.numero = numerodelatarjetadelusuario;
                console.log(numerodelatarjetadelusuario);
              }
            };

            const inspeccionadordeinputcaducidad = () => {
              let inputcaducidad = document.getElementById("inputcaducidad");
              let caducidaddelatarjetadelusuario = inputcaducidad.value;

              if (
                caducidaddelatarjetadelusuario <= 0 ||
                caducidaddelatarjetadelusuario >= 0
              ) {
                inputcaducidad.style.borderColor = "red";
                inputcaducidad.placeholder = "ingrese un numero valido";
              } else if (caducidaddelatarjetadelusuario === "") {
                inputcaducidad.style.borderColor = "red";
                inputcaducidad.placeholder = "ingrese un numero valido";
              } else if (caducidaddelatarjetadelusuario.length <= 7) {
                inputcaducidad.style.borderColor = "red";
                inputcaducidad.placeholder = "ingrese un numero valido";
              } else {
                aceptadordeformulariodetarjeta.caducidadaceptada = true;
                nuevatarjeta.caducidad = caducidaddelatarjetadelusuario;
                console.log(caducidaddelatarjetadelusuario);
              }
            };

            const inspeccionadordeinputcodigocvv2 = () => {
              let inputcodigocvv2 = document.getElementById("inputcodigocvv2");
              let codigocvv2delatarjetadelusuario = parseInt(
                inputcodigocvv2.value.trim()
              );

              console.log(
                informacionunica.some(
                  (codigocvv2) => codigocvv2 === codigocvv2delatarjetadelusuario
                )
              );

              if (
                informacionunica.some(
                  (codigocvv2) => codigocvv2 === codigocvv2delatarjetadelusuario
                )
              ) {
                inputcodigocvv2.style.borderColor = "red";
                inputcodigocvv2.placeholder = "el codigocvv2 ya existe";
              } else if (codigocvv2delatarjetadelusuario <= 0) {
                inputcodigocvv2.style.borderColor = "red";
                inputcodigocvv2.placeholder = "ingrese un codigocvv2 valido";
              } else if (isNaN(codigocvv2delatarjetadelusuario)) {
                inputcodigocvv2.style.borderColor = "red";
                inputcodigocvv2.placeholder = "ingrese un codigocvv2 valido";
              } else if (codigocvv2delatarjetadelusuario === "") {
                inputcodigocvv2.style.borderColor = "red";
                inputcodigocvv2.placeholder = "ingrese un codigocvv2 valido";
              } else if (
                codigocvv2delatarjetadelusuario.length <= 2 ||
                codigocvv2delatarjetadelusuario.length >= 4
              ) {
                inputcodigocvv2.style.borderColor = "red";
                inputcodigocvv2.placeholder = "ingrese un codigocvv2 valido";
              } else {
                aceptadordeformulariodetarjeta.codigocvv2aceptado = true;
                nuevatarjeta.codigocvv2 = codigocvv2delatarjetadelusuario;
                console.log(codigocvv2delatarjetadelusuario);
              }
            };

            const inspeccionadordeinputtitulardelatarjeta = () => {
              let inputtitulardelatarjeta = document.getElementById(
                "inputtitulardelatarjeta"
              );
              let titulardelatarjetadelusuario = inputtitulardelatarjeta.value.trim();

              if (
                parseInt(titulardelatarjetadelusuario) <= 0 ||
                parseInt(titulardelatarjetadelusuario) >= 0
              ) {
                inputtitulardelatarjeta.style.borderColor = "red";
                inputtitulardelatarjeta.placeholder =
                  "ingrese un numero valido";
              } else if (titulardelatarjetadelusuario === "") {
                inputtitulardelatarjeta.style.borderColor = "red";
                inputtitulardelatarjeta.placeholder =
                  "ingrese un numero valido";
              } else if (titulardelatarjetadelusuario.length <= 2) {
                inputtitulardelatarjeta.style.borderColor = "red";
                inputtitulardelatarjeta.placeholder =
                  "ingrese un numero valido";
              } else {
                aceptadordeformulariodetarjeta.titulardelatarjetaaceptado = true;
                nuevatarjeta.titulardelatarjeta = titulardelatarjetadelusuario;
                console.log(titulardelatarjetadelusuario);
              }
            };

            const inspeccionadordeinputdireccion = () => {
              let inputdireccion = document.getElementById("inputdireccion");
              let direcciondelatarjetadelusuario = inputdireccion.value.trim();

              if (
                parseInt(direcciondelatarjetadelusuario) <= 0 ||
                parseInt(direcciondelatarjetadelusuario) >= 0
              ) {
                inputdireccion.style.borderColor = "red";
                inputdireccion.placeholder = "ingrese un numero valido";
              } else if (direcciondelatarjetadelusuario === "") {
                inputdireccion.style.borderColor = "red";
                inputdireccion.placeholder = "ingrese un numero valido";
              } else if (direcciondelatarjetadelusuario.length <= 2) {
                inputdireccion.style.borderColor = "red";
                inputdireccion.placeholder = "ingrese un numero valido";
              } else {
                aceptadordeformulariodetarjeta.direcciondelatarjetaaceptada = true;
                nuevatarjeta.direcciondelatarjeta = direcciondelatarjetadelusuario;
                console.log(direcciondelatarjetadelusuario);
              }
            };

            const inspeccionadordeinputciudad = () => {
              let inputciudad = document.getElementById("inputciudad");
              let ciudaddelatarjetadelusuario = inputciudad.value.trim();

              if (
                parseInt(ciudaddelatarjetadelusuario) <= 0 ||
                parseInt(ciudaddelatarjetadelusuario) >= 0
              ) {
                inputciudad.style.borderColor = "red";
                inputciudad.placeholder = "ingrese un numero valido";
              } else if (ciudaddelatarjetadelusuario === "") {
                inputciudad.style.borderColor = "red";
                inputciudad.placeholder = "ingrese un numero valido";
              } else if (ciudaddelatarjetadelusuario.length <= 2) {
                inputciudad.style.borderColor = "red";
                inputciudad.placeholder = "ingrese un numero valido";
              } else {
                aceptadordeformulariodetarjeta.ciudaddelatarjetaaceptada = true;
                nuevatarjeta.ciudaddelatarjeta = ciudaddelatarjetadelusuario;
                console.log(ciudaddelatarjetadelusuario);
              }
            };

            const inspeccionadordeinputprovincia = () => {
              let inputprovincia = document.getElementById("inputprovincia");
              let provinciadelatarjetadelusuario = inputprovincia.value.trim();

              if (
                parseInt(provinciadelatarjetadelusuario) <= 0 ||
                parseInt(provinciadelatarjetadelusuario) >= 0
              ) {
                inputprovincia.style.borderColor = "red";
                inputprovincia.placeholder = "ingrese un numero valido";
              } else if (provinciadelatarjetadelusuario === "") {
                inputprovincia.style.borderColor = "red";
                inputprovincia.placeholder = "ingrese un numero valido";
              } else if (provinciadelatarjetadelusuario.length <= 2) {
                inputprovincia.style.borderColor = "red";
                inputprovincia.placeholder = "ingrese un numero valido";
              } else {
                aceptadordeformulariodetarjeta.provinciadelatarjetaaceptada = true;
                nuevatarjeta.provinciadelatarjeta = provinciadelatarjetadelusuario;
                console.log(provinciadelatarjetadelusuario);
              }
            };

            tarjetavisa.addEventListener("click", () => {
              empresadelatarjetadelusuario = "visa";
              tarjetavisa.style.border = "2px solid green";
              tarjetamastercard.style.border = "";
              empresadelatarjetadelusuario = "visa";
            });

            tarjetamastercard.addEventListener("click", () => {
              empresadelatarjetadelusuario = "mastercard";
              tarjetamastercard.style.border = "2px solid green";
              tarjetavisa.style.border = "";
              empresadelatarjetadelusuario = "mastercard";
            });

            const inspeccionadordelaempresadelatarjeta = () => {
              if (empresadelatarjetadelusuario === "visa") {
                aceptadordeformulariodetarjeta.empresadelatarjetaaceptada = true;
                nuevatarjeta.empresadelatarjeta = "visa";
                console.log("visa");
              } else {
                aceptadordeformulariodetarjeta.empresadelatarjetaaceptada = true;
                nuevatarjeta.empresadelatarjeta = "mastercard";
                console.log("mastercard");
              }
            };

            formulariodeagregaciondelosfondosdelusuario.addEventListener(
              "submit",
              (e) => {
                inspeccionadordeinputfondoparaagregar();
                inspeccionadordeinputnumerodetarjeta();
                inspeccionadordeinputcaducidad();
                inspeccionadordeinputcodigocvv2();
                inspeccionadordeinputtitulardelatarjeta();
                inspeccionadordeinputdireccion();
                inspeccionadordeinputciudad();
                inspeccionadordeinputprovincia();
                inspeccionadordelaempresadelatarjeta();
                if (
                  aceptadordecantidaagregadaalfondodelusuario === true &&
                  aceptadordeformulariodetarjeta.numeroaceptado === true &&
                  aceptadordeformulariodetarjeta.caducidadaceptada &&
                  aceptadordeformulariodetarjeta.codigocvv2aceptado &&
                  aceptadordeformulariodetarjeta.titulardelatarjetaaceptado ===
                    true &&
                  aceptadordeformulariodetarjeta.direcciondelatarjetaaceptada ===
                    true &&
                  aceptadordeformulariodetarjeta.ciudaddelatarjetaaceptada ===
                    true &&
                  aceptadordeformulariodetarjeta.provinciadelatarjetaaceptada ===
                    true &&
                  aceptadordeformulariodetarjeta.empresadelatarjetaaceptada ===
                    true
                ) {
                  basededatos.collection("tarjetasdecredito").add(nuevatarjeta);

                  informacionunica.push(nuevatarjeta.numero);
                  informacionunica.push(nuevatarjeta.codigocvv2);

                  basededatos
                    .collection("datosunicos")
                    .doc("KGAghAnJgejtBNq7vSfD")
                    .update({
                      datosdetarjetasdecredito: informacionunica,
                    })
                    .then(() => {
                      basededatos
                        .collection("usuarios")
                        .doc(usuariousuandolaaplicacion)
                        .update({
                          fondo: nuevofondoactualdelusuario,
                          tarjetadecredito: nuevatarjeta,
                        })
                        .then(() => {
                          console.log(
                            "se anadio la tarjeta de credito exitosamente"
                          );
                          window.location.reload();
                        });
                    });
                } else {
                  console.log("complete el formulario con datos validos");
                }

                e.preventDefault();
              }
            );
          } else {
            inputnumerodetarjeta.value =
              usuariodelaaplicacion.tarjetadecredito.numero;
            inputnumerodetarjeta.setAttribute("readonly", "readonly");
            inputcaducidad.value =
              usuariodelaaplicacion.tarjetadecredito.caducidad;
            inputcaducidad.setAttribute("readonly", "readonly");
            inputcodigocvv2.value =
              usuariodelaaplicacion.tarjetadecredito.codigocvv2;
            inputcodigocvv2.setAttribute("readonly", "readonly");
            inputtitulardelatarjeta.value =
              usuariodelaaplicacion.tarjetadecredito.titulardelatarjeta;
            inputtitulardelatarjeta.setAttribute("readonly", "readonly");
            inputdireccion.value =
              usuariodelaaplicacion.tarjetadecredito.direcciondelatarjeta;
            inputdireccion.setAttribute("readonly", "readonly");
            inputciudad.value =
              usuariodelaaplicacion.tarjetadecredito.ciudaddelatarjeta;
            inputciudad.setAttribute("readonly", "readonly");
            inputprovincia.value =
              usuariodelaaplicacion.tarjetadecredito.provinciadelatarjeta;
            inputprovincia.setAttribute("readonly", "readonly");
            if (
              usuariodelaaplicacion.tarjetadecredito.empresadelatarjeta ===
              "visa"
            ) {
              tarjetavisa.style.border = "2px solid green";
              tarjetamastercard.style.border = "";
            } else if (
              usuariodelaaplicacion.tarjetadecredito.empresadelatarjeta ===
              "mastercard"
            ) {
              tarjetamastercard.style.border = "2px solid green";
              tarjetavisa.style.border = "";
            } else {
              tarjetavisa.style.border = "";
              tarjetamastercard.style.border = "";
            }

            let aceptadordefondoparaagregar = "";

            const inspeccionadordeinputfondoparaagregar = () => {
              let inputcantidadqueseagregaraalosfondosdelusuario = document.getElementById(
                "cantidadqueseagregaraalosfondosdelusuario"
              );
              let cantidadqueseagregaraalosfondosdelusuario = parseInt(
                inputcantidadqueseagregaraalosfondosdelusuario.value.trim()
              );

              if (cantidadqueseagregaraalosfondosdelusuario <= 0) {
                inputcantidadqueseagregaraalosfondosdelusuario.style.borderColor =
                  "red";
                inputcantidadqueseagregaraalosfondosdelusuario.placeholder =
                  "ingrese un numero valido";
              } else if (isNaN(cantidadqueseagregaraalosfondosdelusuario)) {
                inputcantidadqueseagregaraalosfondosdelusuario.style.borderColor =
                  "red";
                inputcantidadqueseagregaraalosfondosdelusuario.placeholder =
                  "ingrese un numero valido";
              } else if (cantidadqueseagregaraalosfondosdelusuario === "") {
                inputcantidadqueseagregaraalosfondosdelusuario.style.borderColor =
                  "red";
                inputcantidadqueseagregaraalosfondosdelusuario.placeholder =
                  "ingrese un numero valido";
              } else if (
                cantidadqueseagregaraalosfondosdelusuario.length <= 2 ||
                cantidadqueseagregaraalosfondosdelusuario.length >= 8
              ) {
                inputcantidadqueseagregaraalosfondosdelusuario.style.borderColor =
                  "red";
                inputcantidadqueseagregaraalosfondosdelusuario.placeholder =
                  "ingrese un numero valido";
              } else {
                aceptadordefondoparaagregar = true;
                nuevofondoactualdelusuario =
                  fondoactualdelusuario +
                  cantidadqueseagregaraalosfondosdelusuario;
                console.log(nuevofondoactualdelusuario);
              }
            };

            formulariodeagregaciondelosfondosdelusuario.addEventListener(
              "click",
              (e) => {
                inspeccionadordeinputfondoparaagregar();
                if (aceptadordefondoparaagregar === true) {
                  basededatos
                    .collection("usuarios")
                    .doc(usuariousuandolaaplicacion)
                    .update({
                      fondo: nuevofondoactualdelusuario,
                    })
                    .then(() => {
                      console.log("se anadio el fondo exitosamente");
                      window.location.reload();
                    });
                }
                e.preventDefault();
              }
            );
          }
        });
      });
  });
};

usardatosdeusuarioenlapaginadefondosdelusuario();

// Configuracion de la piedepagina

let piedepaginapaginadefondosdelusuario = new PiedePagina(
  "paginadefondosdelusuario",
  "paginadelaempresa.html",
  "#",
  "#",
  "paginadereclamos.html"
);
piedepaginapaginadefondosdelusuario.agregaralbody();

// -----------------------------------------------------------------------------------------
