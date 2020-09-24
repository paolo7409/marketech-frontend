// Configuracion de la barra de navegacion

let barradenavegacioncrearcuenta = new BarradeNavegacion("crearcuenta","#", "#", "Nuevo", "#", "Ofertas","#", "Nosotoros","paginadeopcionesdelusuario.html", "Iniciar Sesion")
barradenavegacioncrearcuenta.agregarloalbody()

// -----------------------------------------------------------------------------------------

let formulariodecrearcuenta = document.getElementById("formulariodecrearcuenta")


let nuevousuario = {
    id : "",
    nombre : "",
    apellido : "",
    edad : "",
    correo : "",
    contrasena : "",
    telefono : "",
    descripcion : "",
    sexo : "",
}

let aceptadordeformulario = {
    nombreaceptado : "",
    apellidoaceptado : "",
    edadaceptada : "",
    correoaceptado : "",
    contrasenaaceptada : "",
    telefonoaceptado : "",
    descripcionaceptada : "",
    sexoaceptado : "", 
}


const inspeccionadordeinputnombreusuario = () => {
    let inputnombreusuario = document.getElementById("inputnombre")
    let nombreusuario = inputnombreusuario.value.trim()
    if(parseInt(nombreusuario) <= 0 || parseInt(nombreusuario) >= 0){
        inputnombreusuario.style.borderColor = "red"
        inputnombreusuario.placeholder = "ingrese un nombre valido"
    }
    else if(nombreusuario === ""){
        inputnombreusuario.style.borderColor = "red"
        inputnombreusuario.value = ""
        inputnombreusuario.placeholder = "ingrese un nombre valido"
    }
    else if(nombreusuario.length <= 2){
        inputnombreusuario.style.borderColor = "red"
        inputnombreusuario.value = ""
        inputnombreusuario.placeholder = "ingrese un nombre valido"
    }
    else{
        aceptadordeformulario.nombreaceptado = true
        nuevousuario.nombre = nombreusuario
        nuevousuario.id = nombreusuario
        console.log(nombreusuario)
    }
}

const inspeccionadordeinputapellidousuario = () =>{
    let inputapellidousuario = document.getElementById("inputapellido")
    let apellidousuario = inputapellidousuario.value.trim()
    if(parseInt(apellidousuario) <= 0 || parseInt(apellidousuario) >= 0){
        inputapellidousuario.style.borderColor = "red"
        inputapellidousuario.placeholder = "ingrese un apellido valido"
    }
    else if(apellidousuario === ""){
        inputapellidousuario.style.borderColor = "red"
        inputapellidousuario.placeholder = "ingrese un apellido valido"
    }
    else if(apellidousuario.length <= 2){
        inputapellidousuario.style.borderColor = "red"
        inputapellidousuario.placeholder = "ingrese un apellido valido"
    }
    else{
        aceptadordeformulario.apellidoaceptado = true
        nuevousuario.apellido = apellidousuario
        console.log(apellidousuario)
    }
}

const inspeccionadordeinputedadusuario = () => {
    let inputedadusuario = document.getElementById("inputedad")
    let edadusuario = parseInt(inputedadusuario.value.trim())
    if(edadusuario <= 0 || edadusuario >= 100){
        inputedadusuario.style.borderColor = "red"
        inputedadusuario.placeholder = "ingrese una edad valido"
    }
    else if(edadusuario === ""){
        inputedadusuario.style.borderColor = "red"
        inputedadusuario.placeholder = "ingrese una edad valido"
    }
    else if(isNaN(edadusuario)){
        inputedadusuario.style.borderColor = "red"
        inputedadusuario.placeholder = "ingrese una edad valido"
    }
    else if(edadusuario.length >= 2){
        inputedadusuario.style.borderColor = "red"
        inputedadusuario.placeholder = "ingrese una edad valido" 
    }
    else{
        aceptadordeformulario.edadaceptada = true
        nuevousuario.edad = edadusuario
        console.log(edadusuario)
    }
}

const inspeccionadordeinputcorreousuario = () => {
    let inputcorreousuario = document.getElementById("inputcorreo")
    let correousuario = inputcorreousuario.value.trim()
    if(parseInt(correousuario) <= 0 || parseInt(correousuario) >= 0){
        inputcorreousuario.style.borderColor = "red"
        inputcorreousuario.placeholder = "ingrese un correo valido"
    }
    else if(correousuario === ""){
        inputcorreousuario.style.borderColor = "red"
        inputcorreousuario.placeholder = "ingrese un correo valido"
    }
    else if(correousuario.length <= 12){
        inputcorreousuario.style.borderColor = "red"
        inputcorreousuario.placeholder = "ingrese un correo valido"
    }
    else if(correousuario.endsWith("@gmail.com") || correousuario.endsWith("@hotmail.com")){
        aceptadordeformulario.correoaceptado = true
        nuevousuario.correo = correousuario
        console.log(correousuario)
    }
    else{
        inputcorreousuario.style.borderColor = "red"
        inputcorreousuario.placeholder = "ingrese un correo valido"
    }
}

const inspeccionadordeinputcontrasenausuario = () => {
    let inputcontrasenausuario = document.getElementById("inputcontrasena")
    let contrasenausuario = inputcontrasenausuario.value.trim()
    if(parseInt(contrasenausuario) >= 0 || parseInt(contrasenausuario) <= 0){
        inputcontrasenausuario.style.borderColor = "red"
        inputcontrasenausuario.placeholder = "ingrese una contrasena valido"
    }
    else if(contrasenausuario === ""){
        inputcontrasenausuario.style.borderColor = "red"
        inputcontrasenausuario.placeholder = "ingrese una contrasena valido"
    }
    else if(contrasenausuario.length <= 8 || contrasenausuario.length >= 20){
        inputcontrasenausuario.style.borderColor = "red"
        inputcontrasenausuario.placeholder = "ingrese una contrasena valido"
    }
    else{
        aceptadordeformulario.contrasenaaceptada = true
        inputcontrasenausuario.contrasena = contrasenausuario
        console.log(contrasenausuario)
    }
}

const inspeccionadordeinputtelefonousuario = () => {
    let inputtelefonousuario = document.getElementById("inputtelefono")
    let telefonousuario = parseInt(inputtelefonousuario.value.trim())
    if(telefonousuario === ""){
        inputtelefonousuario.style.borderColor = "red"
        inputtelefonousuario.placeholder = "ingrese un telefono valido"
    }
    else if(telefonousuario.length > 9){
        inputtelefonousuario.style.borderColor = "red"
        inputtelefonousuario.placeholder = "ingrese un telefono valido"
    }
    else if(isNaN(telefonousuario)){
        inputtelefonousuario.style.borderColor = "red"
        inputtelefonousuario.placeholder = "ingrese un telefono valido"
    }
    else if(typeof telefonousuario === "string"){
        inputtelefonousuario.style.borderColor = "red"
        inputtelefonousuario.placeholder = "ingrese un telefono valido"
    }
    else{
        aceptadordeformulario.telefonoaceptado = true
        nuevousuario.telefono = telefonousuario
        console.log(telefonousuario)
    }
}

const inspeccionadordeinputdescripcionusuario = () => {
    let inputdescripcionusuario = document.getElementById("inputdescripcion")
    let descripcionusuario = inputdescripcionusuario.value.trim()
    if(parseInt(descripcionusuario) >= 0 || parseInt(descripcionusuario) <= 0){
        inputdescripcionusuario.style.borderColor = "red"
        inputdescripcionusuario.placeholder = "ingrese minimo 50 letras"
    }
    else if(descripcionusuario === ""){
        inputdescripcionusuario.style.borderColor = "red"
        inputdescripcionusuario.placeholder = "ingrese minimo 50 letras"
    }
    else if(descripcionusuario.length < 50 || descripcionusuario.length > 100){
        inputdescripcionusuario.style.borderColor = "red"
        inputdescripcionusuario.placeholder = "ingrese minimo 50 letras"
    }
    else{
        aceptadordeformulario.descripcionaceptada = true
        nuevousuario.descripcion = descripcionusuario
        console.log(descripcionusuario)
    }
}

const inspeccionadordeinputsexousuario = () => {
    let inputsexohombreusuario = document.getElementById("inputsexohombre")
    let inputsexomujerusuario = document.getElementById("inputsexomujer")
    let sexousuario = ""
    if(inputsexohombreusuario.checked){
        aceptadordeformulario.sexoaceptado = true
        sexousuario = inputsexohombreusuario.value
        nuevousuario.sexo = sexousuario
        console.log(sexousuario)
    }
    else if(inputsexomujerusuario.checked){
        aceptadordeformulario.sexoaceptado = true
        sexousuario = inputsexomujerusuario.value
        nuevousuario.sexo = sexousuario
        console.log(sexousuario)
    }
    else{
        inputsexohombreusuario.style.backgroundColor = "red"
        inputsexomujerusuario.style.backgroundColor = "red"
    }
}

let inputsexohombreusuario = document.getElementById("inputsexohombre")
let inputsexomujerusuario = document.getElementById("inputsexomujer")



const anadidordeusuariosalaaplicacion = () => {
    let nuevousuariocreado = new Usuario(nuevousuario.id,nuevousuario.nombre,nuevousuario.apellido,nuevousuario.edad,nuevousuario.correo,nuevousuario.contrasena,nuevousuario.telefono, nuevousuario.descripcion,nuevousuario.sexo,"https://www.pikpng.com/pngl/m/80-805523_default-avatar-svg-png-icon-free-download-264157.png","","","",0,0,0,0,0)
    console.log(nuevousuariocreado)
    usuariosdelaaplicacion.push(nuevousuariocreado.id)
    console.log(usuariosdelaaplicacion)
}



formulariodecrearcuenta.addEventListener("submit",(e) => {
    inspeccionadordeinputnombreusuario()
    inspeccionadordeinputapellidousuario()
    inspeccionadordeinputedadusuario()
    inspeccionadordeinputcorreousuario()
    inspeccionadordeinputcontrasenausuario()
    inspeccionadordeinputtelefonousuario()
    inspeccionadordeinputdescripcionusuario()
    inspeccionadordeinputsexousuario()
    
    if(aceptadordeformulario.nombreaceptado === true && aceptadordeformulario.apellidoaceptado === true && aceptadordeformulario.edadaceptada === true && aceptadordeformulario.correoaceptado === true && aceptadordeformulario.contrasenaaceptada === true && aceptadordeformulario.telefonoaceptado === true && aceptadordeformulario.descripcionaceptada === true && aceptadordeformulario.sexoaceptado === true){
        anadidordeusuariosalaaplicacion()
    }
    else{
        console.log("complete el formulario con datos validos")
    }
    e.preventDefault()
})

// Configuracion de la piedepagina

let piedepaginacrearcuenta = new PiedePagina("crearcuenta","#","#","#","#")
piedepaginacrearcuenta.agregaralbody()

// -----------------------------------------------------------------------------------------