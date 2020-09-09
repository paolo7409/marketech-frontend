// Busqueda de un producto en la barra de navegacion

//const barradenavegaciondepaginaprincipal = document.getElementById("barradenavegaciondepaginaprincipal")

//const inputdebusquedadeproductos = document.getElementById("inputdebusquedadeproductos")

//inputdebusquedadeproductos.addEventListener("focus", () => {
    //console.log("se esta escribiendo algo en la barra de navegacion")
    //let opcionesdebusquedadebarradenavegacion = document.createElement("div")
    //opcionesdebusquedadebarradenavegacion.setAttribute("class","opcionesdebusquedadebarradenavegacion")
    //opcionesdebusquedadebarradenavegacion.textContent = "Hola"
    //barradenavegaciondepaginaprincipal.appendChild(opcionesdebusquedadebarradenavegacion)
//})


// -----------------------------------------------------------------------------------------

// Carrusel de imagenes de productos nuevos y productos en oferta


const contenedordeimagenesdecarrusel = document.getElementById("contenedordeimagenesdecarrusel")
const contenedordeimagendecarrusel = document.getElementById("contenedordeimagendecarrusel")

const flechaizquierda = document.getElementById("flechaizquierda")
const flechaderecha = document.getElementById("flechaderecha")


const indicador1 = document.getElementById("indicador1")

indicador1.classList.add("indicadoractivo")

const indicador2 = document.getElementById("indicador2")

const indicador3 = document.getElementById("indicador3")


indicador1.addEventListener("click",moverporindicador => {
    contenedordeimagenesdecarrusel.scrollLeft = 0 * contenedordeimagenesdecarrusel.offsetWidth
    indicador1.classList.add("indicadoractivo")
    indicador2.classList.remove("indicadoractivo")
    indicador3.classList.remove("indicadoractivo")
    indicador1.style.backgroundColor = "red"
})


indicador2.addEventListener("click",moverporindicador => {
    contenedordeimagenesdecarrusel.scrollLeft = 1 * contenedordeimagenesdecarrusel.offsetWidth
    indicador2.classList.add("indicadoractivo")
    indicador1.classList.remove("indicadoractivo")
    indicador3.classList.remove("indicadoractivo")
    indicador1.style.backgroundColor = "#707070"
})


indicador3.addEventListener("click",moverporindicador => {
    contenedordeimagenesdecarrusel.scrollLeft = 2 * contenedordeimagenesdecarrusel.offsetWidth
    indicador3.classList.add("indicadoractivo")
    indicador2.classList.remove("indicadoractivo")
    indicador1.classList.remove("indicadoractivo")
    indicador1.style.backgroundColor = "#707070"
})





flechaderecha.addEventListener("click",scrollhacialaderecha  => {
    contenedordeimagenesdecarrusel.scrollLeft += contenedordeimagenesdecarrusel.offsetWidth
    const indicadoractivo = document.querySelector(".indicadoractivo")
    if(indicadoractivo.nextElementSibling){
        indicador1.style.backgroundColor = "#707070"
        indicadoractivo.nextElementSibling.classList.add("indicadoractivo")
        indicadoractivo.classList.remove("indicadoractivo")
    }
})

flechaizquierda.addEventListener("click",scrollhacialaizquierda  => {
    contenedordeimagenesdecarrusel.scrollLeft -= contenedordeimagenesdecarrusel.offsetWidth
    const indicadoractivo = document.querySelector(".indicadoractivo")
    if(indicadoractivo.previousElementSibling){
        indicadoractivo.previousElementSibling.classList.add("indicadoractivo")
        indicadoractivo.classList.remove("indicadoractivo")
    }
    if(indicador1.getAttribute("class") === "indicador indicadoractivo"){
        indicador1.style.backgroundColor = "red"
    }
})



// -----------------------------------------------------------------------------------------


