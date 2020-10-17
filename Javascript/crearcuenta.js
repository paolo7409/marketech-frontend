// Configuracion de la barra de navegacion

let barradenavegacioncrearcuenta = new BarradeNavegacion(
  "crearcuenta",
  "paginadelaempresa.html",
  "#",
  "Nuevo",
  "#",
  "Ofertas",
  "paginadelaempresa.html",
  "Nosotoros",
  "iniciodesesion.html",
  "Iniciar Sesion"
);
barradenavegacioncrearcuenta.agregarloalbody();
barradenavegacioncrearcuenta.adaptaropcionesatamanospequenos();
barradenavegacioncrearcuenta.adaptarinputdebusqueda()
barradenavegacioncrearcuenta.buscarproducto();

// -----------------------------------------------------------------------------------------

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

      let formulariodecrearcuenta = document.getElementById(
        "formulariodecrearcuenta"
      );

      let nuevousuario = {
        id: "",
        nombre: "",
        apellido: "",
        edad: 0,
        correo: "",
        contrasena: "",
        telefono: 0,
        descripcion: "",
        sexo: "",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSymjxHoVB2hlH41ioYDjkzOd7oVPhJu-uIeQ&usqp=CAU",
        pais: "",
        ciudad: "",
        tarjetadecredito: {
          numero: "",
          caducidad: "",
          codigocvv2: "",
          titulardelatarjeta: "",
          direcciondelatarjeta: "",
          ciudaddelatarjeta: "",
          provinciadelatarjeta: "",
          empresadelatarjeta: "",
        },
        fondo: 0,
        productoscomprados: [],
        productosvendidos: [],
        productosenventa: [],
        reclamos: [],
      };

      let aceptadordeformulario = {
        nombreaceptado: "",
        apellidoaceptado: "",
        edadaceptada: "",
        correoaceptado: "",
        contrasenaaceptada: "",
        telefonoaceptado: "",
        descripcionaceptada: "",
        sexoaceptado: "",
      };

      const inspeccionadordeinputnombreusuario = () => {
        let inputnombreusuario = document.getElementById("inputnombre");
        let nombreusuario = inputnombreusuario.value.trim();

        console.log(nombresparainspeccionar.some(nombre => nombre === inputnombreusuario.value.trim()))

        if (nombresparainspeccionar.some(nombre => nombre === inputnombreusuario.value.trim())) {
          inputnombreusuario.style.borderColor = "red";
          inputnombreusuario.placeholder = "el nombre ya existe";
          aceptadordeformulario.nombreaceptado = false;
        } else if (
          parseInt(nombreusuario) <= 0 ||
          parseInt(nombreusuario) >= 0
        ) {
          inputnombreusuario.style.borderColor = "red";
          inputnombreusuario.placeholder = "ingrese un nombre valido";
        } else if (nombreusuario === "") {
          inputnombreusuario.style.borderColor = "red";
          inputnombreusuario.value = "";
          inputnombreusuario.placeholder = "ingrese un nombre valido";
        } else if (nombreusuario.length <= 2) {
          inputnombreusuario.style.borderColor = "red";
          inputnombreusuario.value = "";
          inputnombreusuario.placeholder = "ingrese un nombre valido";
        } else {
          aceptadordeformulario.nombreaceptado = true;
          nuevousuario.nombre = nombreusuario;
          console.log(nombreusuario);
        }
      };

      const inspeccionadordeinputapellidousuario = () => {
        let inputapellidousuario = document.getElementById("inputapellido");
        let apellidousuario = inputapellidousuario.value.trim();

        if (parseInt(apellidousuario) <= 0 || parseInt(apellidousuario) >= 0) {
          inputapellidousuario.style.borderColor = "red";
          inputapellidousuario.placeholder = "ingrese un apellido valido";
        } else if (apellidousuario === "") {
          inputapellidousuario.style.borderColor = "red";
          inputapellidousuario.placeholder = "ingrese un apellido valido";
        } else if (apellidousuario.length <= 2) {
          inputapellidousuario.style.borderColor = "red";
          inputapellidousuario.placeholder = "ingrese un apellido valido";
        } else {
          aceptadordeformulario.apellidoaceptado = true;
          nuevousuario.apellido = apellidousuario;
          console.log(apellidousuario);
        }
      };

      const inspeccionadordeinputedadusuario = () => {
        let inputedadusuario = document.getElementById("inputedad");
        let edadusuario = parseInt(inputedadusuario.value.trim());

        if (edadusuario <= 0 || edadusuario >= 100) {
          inputedadusuario.style.borderColor = "red";
          inputedadusuario.placeholder = "ingrese una edad valido";
        } else if (edadusuario === "") {
          inputedadusuario.style.borderColor = "red";
          inputedadusuario.placeholder = "ingrese una edad valido";
        } else if (isNaN(edadusuario)) {
          inputedadusuario.style.borderColor = "red";
          inputedadusuario.placeholder = "ingrese una edad valido";
        } else if (edadusuario.length >= 2) {
          inputedadusuario.style.borderColor = "red";
          inputedadusuario.placeholder = "ingrese una edad valido";
        } else {
          aceptadordeformulario.edadaceptada = true;
          nuevousuario.edad = edadusuario;
          console.log(edadusuario);
        }
      };

      const inspeccionadordeinputcorreousuario = () => {
        let inputcorreousuario = document.getElementById("inputcorreo");
        let correousuario = inputcorreousuario.value.trim();

        console.log(correosparainspeccionar.some(correo => correo === inputcorreousuario.value.trim()))

        if (correosparainspeccionar.some(correo => correo === inputcorreousuario.value.trim())) {
          inputcorreousuario.style.borderColor = "red";
          inputcorreousuario.placeholder = "el correo ya existe";
          aceptadordeformulario.correoaceptado = false;
        } else if (
          parseInt(correousuario) <= 0 ||
          parseInt(correousuario) >= 0
        ) {
          inputcorreousuario.style.borderColor = "red";
          inputcorreousuario.placeholder = "ingrese un correo valido";
        } else if (correousuario === "") {
          inputcorreousuario.style.borderColor = "red";
          inputcorreousuario.placeholder = "ingrese un correo valido";
        } else if (correousuario.length <= 12) {
          inputcorreousuario.style.borderColor = "red";
          inputcorreousuario.placeholder = "ingrese un correo valido";
        } else if (
          correousuario.endsWith("@gmail.com") ||
          correousuario.endsWith("@hotmail.com")
        ) {
          aceptadordeformulario.correoaceptado = true;
          nuevousuario.correo = correousuario;
          console.log(correousuario);
        } else {
          inputcorreousuario.style.borderColor = "red";
          inputcorreousuario.placeholder = "ingrese un correo valido";
        }
      };

      const inspeccionadordeinputcontrasenausuario = () => {
        let inputcontrasenausuario = document.getElementById("inputcontrasena");
        let contrasenausuario = inputcontrasenausuario.value.trim();

        if (
          parseInt(contrasenausuario) >= 0 ||
          parseInt(contrasenausuario) <= 0
        ) {
          inputcontrasenausuario.style.borderColor = "red";
          inputcontrasenausuario.placeholder = "ingrese una contrasena valido";
        } else if (contrasenausuario === "") {
          inputcontrasenausuario.style.borderColor = "red";
          inputcontrasenausuario.placeholder = "ingrese una contrasena valido";
        } else if (
          contrasenausuario.length <= 8 ||
          contrasenausuario.length >= 20
        ) {
          inputcontrasenausuario.style.borderColor = "red";
          inputcontrasenausuario.placeholder = "ingrese una contrasena valido";
        } else {
          aceptadordeformulario.contrasenaaceptada = true;
          nuevousuario.contrasena = contrasenausuario;
          console.log(contrasenausuario);
        }
      };

      const inspeccionadordeinputtelefonousuario = () => {
        let inputtelefonousuario = document.getElementById("inputtelefono");
        let telefonousuario = parseInt(inputtelefonousuario.value.trim());

        console.log(telefonosparainspeccionar.some(telefono => telefono === parseInt(inputtelefonousuario.value.trim())))

        if (telefonosparainspeccionar.some(telefono => telefono === parseInt(inputtelefonousuario.value.trim()))) {
          inputtelefonousuario.style.borderColor = "red";
          inputtelefonousuario.placeholder = "el telefono ya existe";
          aceptadordeformulario.telefonoaceptado = false;
        } else if (telefonousuario === "") {
          inputtelefonousuario.style.borderColor = "red";
          inputtelefonousuario.placeholder = "ingrese un telefono valido";
        } else if (telefonousuario.length > 9) {
          inputtelefonousuario.style.borderColor = "red";
          inputtelefonousuario.placeholder = "ingrese un telefono valido";
        } else if (isNaN(telefonousuario)) {
          inputtelefonousuario.style.borderColor = "red";
          inputtelefonousuario.placeholder = "ingrese un telefono valido";
        } else if (typeof telefonousuario === "string") {
          inputtelefonousuario.style.borderColor = "red";
          inputtelefonousuario.placeholder = "ingrese un telefono valido";
        } else {
          aceptadordeformulario.telefonoaceptado = true;
          nuevousuario.telefono = telefonousuario;
          console.log(telefonousuario);
        }
      };

      const inspeccionadordeinputdescripcionusuario = () => {
        let inputdescripcionusuario = document.getElementById(
          "inputdescripcion"
        );
        let descripcionusuario = inputdescripcionusuario.value.trim();

        if (
          parseInt(descripcionusuario) >= 0 ||
          parseInt(descripcionusuario) <= 0
        ) {
          inputdescripcionusuario.style.borderColor = "red";
          inputdescripcionusuario.placeholder = "ingrese minimo 50 letras";
        } else if (descripcionusuario === "") {
          inputdescripcionusuario.style.borderColor = "red";
          inputdescripcionusuario.placeholder = "ingrese minimo 50 letras";
        } else if (
          descripcionusuario.length < 50 ||
          descripcionusuario.length > 100
        ) {
          inputdescripcionusuario.style.borderColor = "red";
          inputdescripcionusuario.placeholder = "ingrese minimo 50 letras";
        } else {
          aceptadordeformulario.descripcionaceptada = true;
          nuevousuario.descripcion = descripcionusuario;
          console.log(descripcionusuario);
        }
      };

      const inspeccionadordeinputsexousuario = () => {
        let sexohombre = document.getElementById("sexohombre");
        let sexomujer = document.getElementById("sexomujer");
        let inputsexohombreusuario = document.getElementById("inputsexohombre");
        let inputsexomujerusuario = document.getElementById("inputsexomujer");
        let sexousuario = "";

        if (inputsexohombreusuario.checked) {
          aceptadordeformulario.sexoaceptado = true;
          sexousuario = inputsexohombreusuario.value;
          nuevousuario.sexo = sexousuario;
          console.log(sexousuario);
        } else if (inputsexomujerusuario.checked) {
          aceptadordeformulario.sexoaceptado = true;
          sexousuario = inputsexomujerusuario.value;
          nuevousuario.sexo = sexousuario;
          console.log(sexousuario);
        } else {
          sexohombre.style.color = "red";
          sexomujer.style.color = "red"; 
        }
      };

      const agregarusuarioalabasededatos = () => {
        basededatos.collection("usuarios").add(nuevousuario);
      };

      let botondecrearcuenta = document.getElementById("botondecrearcuenta")

      botondecrearcuenta.addEventListener("click", (e) => {
        inspeccionadordeinputnombreusuario();
        inspeccionadordeinputapellidousuario();
        inspeccionadordeinputedadusuario();
        inspeccionadordeinputcorreousuario();
        inspeccionadordeinputcontrasenausuario();
        inspeccionadordeinputtelefonousuario();
        inspeccionadordeinputdescripcionusuario();
        inspeccionadordeinputsexousuario();
        if (
          aceptadordeformulario.nombreaceptado === true &&
          aceptadordeformulario.apellidoaceptado === true &&
          aceptadordeformulario.edadaceptada === true &&
          aceptadordeformulario.correoaceptado === true &&
          aceptadordeformulario.contrasenaaceptada === true &&
          aceptadordeformulario.telefonoaceptado === true &&
          aceptadordeformulario.descripcionaceptada === true &&
          aceptadordeformulario.sexoaceptado === true
        ) {
          agregarusuarioalabasededatos();
          nombresparainspeccionar.push(nuevousuario.nombre);
          correosparainspeccionar.push(nuevousuario.correo);
          telefonosparainspeccionar.push(nuevousuario.telefono);

          basededatos
            .collection("datosunicos")
            .doc("KGAghAnJgejtBNq7vSfD")
            .update({
              nombres: nombresparainspeccionar,
              correos: correosparainspeccionar,
              telefonos: telefonosparainspeccionar,
            })
            .then(() => {
              location.reload()
            })
        } else {
          console.log("complete el formulario con datos validos");
        } 
        e.preventDefault();
      });
    });

    let botondeiniciarsesion = document.getElementById("botondeiniciarsesion")
    botondeiniciarsesion.addEventListener("click",() => {
      window.location.href = "iniciodesesion.html"
    })
  });

// Configuracion de la piedepagina

let piedepaginacrearcuenta = new PiedePagina("crearcuenta", "paginadelaempresa.html", "#", "#", "paginadereclamos.html");
piedepaginacrearcuenta.agregaralbody();

// -----------------------------------------------------------------------------------------
