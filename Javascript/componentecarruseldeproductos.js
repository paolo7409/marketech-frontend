class CarruseldeProductos {
    constructor(paginadetrabajo,rutadeimagendeproductodecarrusel1,imagendeproductodecarrusel1,rutadeimagendeproductodecarrusel2,imagendeproductodecarrusel2,rutadeimagendeproductodecarrusel3,imagendeproductodecarrusel3){
        this.paginadetrabajo = paginadetrabajo
        this.rutadeimagendeproductodecarrusel1 = rutadeimagendeproductodecarrusel1
        this.imagendeproductodecarrusel1 = imagendeproductodecarrusel1
        this.rutadeimagendeproductodecarrusel2 = rutadeimagendeproductodecarrusel2
        this.imagendeproductodecarrusel2 = imagendeproductodecarrusel2
        this.rutadeimagendeproductodecarrusel3 = rutadeimagendeproductodecarrusel3
        this.imagendeproductodecarrusel3 = imagendeproductodecarrusel3
    }

    agregaralbody(){

        let contenedorgeneral = document.getElementById("contenedorgeneral")

        let carruseldeproductos = `
        <div class="contenedordecarrusel" id="contenedordecarrusel">
            <div class="contenedordeimagendefecha flechaizquierda" id="flechaizquierda"><img class="imagendefecha imagendefechaderecha" src="https://www.flaticon.com/svg/static/icons/svg/271/271220.svg" alt="imagendeflechaizquierda flechaderecha"></div>
            <div class="contenedordeimagenesdecarrusel" id="contenedordeimagenesdecarrusel">
                <div class="contenedordeimagendecarrusel" id="contenedordeimagendecarrusel">
                    <a href="${this.rutadeimagendeproductodecarrusel1}">
                        <img class="imagendecarrusel" src=${this.imagendeproductodecarrusel1} alt="imagendeproductoespecial">
                    </a>
                </div>
                <div class="contenedordeimagendecarrusel" id="contenedordeimagendecarrusel">
                    <a href="${this.rutadeimagendeproductodecarrusel2}">
                        <img class="imagendecarrusel" src=${this.imagendeproductodecarrusel2} alt="imagendeproductoespecial">
                    </a>
                </div>
                <div class="contenedordeimagendecarrusel" id="contenedordeimagendecarrusel">
                    <a href="${this.rutadeimagendeproductodecarrusel3}">
                        <img class="imagendecarrusel" src=${this.imagendeproductodecarrusel3} alt="imagendeproductoespecial">
                    </a>
                </div>
            </div>
            <div class="contenedordeimagendefecha flechaderecha" id="flechaderecha"><img class="imagendefecha imagendeflechaizquierda" src="https://www.flaticon.com/svg/static/icons/svg/271/271228.svg" alt="imagendeflechaderecha"></div>
            <div class="contenedorindicadores">
                <div class="indicador" id="indicador1"></div>
                <div class="indicador" id="indicador2"></div>
                <div class="indicador" id="indicador3"></div>
            </div>
        </div>
        `

        contenedorgeneral.insertAdjacentHTML("afterbegin",carruseldeproductos)
    }
}