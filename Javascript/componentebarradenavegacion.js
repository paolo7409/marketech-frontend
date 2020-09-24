class BarradeNavegacion {
    constructor(paginadetrabajo,rutadelogo,rutadeopcion1,opcion1,rutadeopcion2,opcion2,rutadeopcion3,opcion3,rutadebotondebarradenavegacion,contenidodebotondebarradenavegacion){
        this.paginadetrabajo = paginadetrabajo
        this.rutadelogo = rutadelogo
        this.rutadeopcion1 = rutadeopcion1
        this.opcion1 = opcion1
        this.rutadeopcion2 = rutadeopcion2
        this.opcion2 = opcion2
        this.rutadeopcion3 = rutadeopcion3
        this.opcion3 = opcion3
        this.rutadebotondebarradenavegacion = rutadebotondebarradenavegacion
        this.contenidodebotondebarradenavegacion = contenidodebotondebarradenavegacion
    }
    agregarloalbody(){

        let contenedorgeneral = document.getElementById("contenedorgeneral")

        let barradenavegacion = `

        <div class="barradenavegacionde${this.paginadetrabajo}" id="barradenavegacionde${this.paginadetrabajo}">
            <div class="logo" id="logo"><a href="${this.rutadelogo}">Marketech</a></div>
            <form action="#" class="busquedadeproducto" id="busquedadeproducto">
                <div class="contenedordeinputdebusquedadeproductos" id="contenedordeinputdebusquedadeproductos">
                    <input class="inputdebusquedadeproductos" id="inputdebusquedadeproductos" type="text" placeholder="producto" autocomplete="off">
                </div>
                <button class="botonbuscadordeproductos" id="botonbuscadordeproductos">Buscar</button>
            </form>
            <div class="contenedordelistadeopciones" id="contenedordelistadeopciones">
                <div class="listadeopcionesitem"><a href="${this.rutadeopcion1}">${this.opcion1}</a></div>
                <div class="listadeopcionesitem"><a href="${this.rutadeopcion2}">${this.opcion2}</a></div>
                <div class="listadeopcionesitem"><a href="${this.rutadeopcion3}">${this.opcion2}</a></div>
            </div>
            <button class="botondeiniciodesesion"><a href="${this.rutadebotondebarradenavegacion}">${this.contenidodebotondebarradenavegacion}</a></button>
        </div>
        `
        contenedorgeneral.insertAdjacentHTML("afterbegin",barradenavegacion)

    }
}
