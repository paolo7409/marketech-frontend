class CartadeProductodelUsuarionoEliminable {
  constructor(
    paginadetrabajo,
    iddelproducto,
    contendordeproductos,
    paginadecompradelproducto,
    posiciondelatarjetaensucontendor,
    identificadordelatarjetaenlapagina,
    imagendelproducto,
    nombredelproducto,
    preciodelproducto,
    ofertadelproducto
  ) {
    this.paginadetrabajo = paginadetrabajo;

    this.iddelproducto = iddelproducto;

    this.contendordeproductos = contendordeproductos;

    this.paginadeinformaciondelproducto = paginadecompradelproducto;

    this.posiciondelatarjetaensucontendor = posiciondelatarjetaensucontendor;

    this.identificadordelatarjetaenlapagina = identificadordelatarjetaenlapagina;

    this.imagendelproducto = imagendelproducto;

    this.nombredelproducto = nombredelproducto;

    this.preciodelproducto = preciodelproducto;

    this.ofertadelproducto = ofertadelproducto;
  }

  agregaralbody() {
    let contenedordeundeterminadotipodeproducto = document.getElementById(
      `contenedordeproductos${this.contendordeproductos}`
    );

    let cartadeproducto = `
          <a class="contenedordeproducto contenedordeproducto${this.posiciondelatarjetaensucontendor}" id="contenedordeproducto${this.identificadordelatarjetaenlapagina}" href="${this.paginadeinformaciondelproducto}">
              <div class="contenedordeimagendeproducto" id="contenedordeimagendeproducto${this.identificadordelatarjetaenlapagina}">
                  <img class="imagendeproducto" id="imagendeproducto${this.identificadordelatarjetaenlapagina}" src="${this.imagendelproducto}" alt="imagendeproducto">
              </div>
              <div class="informaciondeproducto" id="informaciondeprod ucto${this.identificadordelatarjetaenlapagina}">
                  <div class="nombredeproducto" id="nombredeproducto${this.identificadordelatarjetaenlapagina}">${this.nombredelproducto}</div>
                  <div class="preciodeproducto" id="preciodeproducto${this.identificadordelatarjetaenlapagina}">$ ${this.preciodelproducto}</div>
                  <div class="ofertadeproducto" id="ofertadeproducto${this.identificadordelatarjetaenlapagina}">${this.ofertadelproducto} % off</div>
              </div>
          </a>
          `;

    contenedordeundeterminadotipodeproducto.insertAdjacentHTML(
      "beforeend",
      cartadeproducto
    );
  }

  mostrarpaginadeinformacion(ubicacion, id) {
    let productoenventadelusuarioparaverinformacion = document.getElementById(
      `contenedordeproducto${this.posiciondelatarjetaensucontendor}`
    );

    productoenventadelusuarioparaverinformacion.addEventListener(
      "click",
      () => {
        console.log(id);
        localStorage.setItem("productoparaverinformacion", this.iddelproducto);
        console.log(localStorage.getItem("productoparaverinformacion"));
      }
    );
  }
}
