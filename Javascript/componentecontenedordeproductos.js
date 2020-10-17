class ContendordeProductos {
    constructor(paginadetrabajo,contenedordecomponente,tematicadeproductos,titulodelatematicadeproductos){
        this.paginadetrabajo = paginadetrabajo
        this.contenedordecomponente = contenedordecomponente
        this.tematicadeproductos = tematicadeproductos
        this.titulodelatematicadeproductos = titulodelatematicadeproductos
    }

    agregaralbody(){

        let contenedordecomponente = document.getElementById(`contenedorde${this.contenedordecomponente}`)

        let contendordeproductos = `
        <div class="contenedordeundeterminadotipodeproducto" id="contenedordeproductos${this.tematicadeproductos}">
            <div class="titulodeundeterminadoconjuntodeproductos" id="titulodeundeterminadoconjuntodeproductos">${this.titulodelatematicadeproductos}</div>
            <div class="relleno1" id="relleno1"></div>
            <div class="relleno2" id="relleno2"></div>
            <div class="relleno3" id="relleno3"></div>
        </div>
        `

        contenedordecomponente.insertAdjacentHTML("beforeend",contendordeproductos)
    }
}