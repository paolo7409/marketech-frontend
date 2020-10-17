class CartadeProducto {
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

    this.paginadecompradelproducto = paginadecompradelproducto;

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
        <a class="contenedordeproducto contenedordeproducto${this.posiciondelatarjetaensucontendor}" id="contenedordeproducto${this.identificadordelatarjetaenlapagina}" href="${this.paginadecompradelproducto}">
            <div class="contenedordeimagendeproducto" id="contenedordeimagendeproducto${this.identificadordelatarjetaenlapagina}">
                <img class="imagendeproducto" id="imagendeproducto${this.identificadordelatarjetaenlapagina}" src="${this.imagendelproducto}" alt="imagendeproducto">
            </div>
            <div class="informaciondeproducto" id="informaciondeproducto${this.identificadordelatarjetaenlapagina}">
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

  obtenerdatosparamostrar(id) {
    basededatos
      .collection("productos")
      .doc(id)
      .get()
      .then((producto) => {
          let informaciondeproducto = producto.data()
          console.log(informaciondeproducto) 
          let imagendelproducto = document.getElementById(`imagendeproducto${this.identificadordelatarjetaenlapagina}`)
          let nombredelproducto = document.getElementById(`nombredeproducto${this.identificadordelatarjetaenlapagina}`)
          let preciodelproducto = document.getElementById(`preciodeproducto${this.identificadordelatarjetaenlapagina}`)
          let ofertadelproducto = document.getElementById(`ofertadeproducto${this.identificadordelatarjetaenlapagina}`)
          imagendelproducto.setAttribute("src",informaciondeproducto.urldelaimagen)
          nombredelproducto.textContent = informaciondeproducto.nombre
          preciodelproducto.textContent = `$ ${informaciondeproducto.precio}`
          ofertadelproducto.textContent = `${informaciondeproducto.oferta} % off`

          if(informaciondeproducto.cantidad === 0){
            let contenedordeimagendeproducto = document.getElementById(`contenedordeimagendeproducto${this.identificadordelatarjetaenlapagina}`)
            
            let mensajedeagotado = `<div class="mensajedeagotado">Agotado</div>`

            contenedordeimagendeproducto.insertAdjacentHTML("beforeend",mensajedeagotado)
          }
      });
  }

  mostrarpaginadecompra(id) {
    let productoenventadelusuarioparamostrar = document.getElementById(
      `contenedordeproducto${this.identificadordelatarjetaenlapagina}`
    );

    productoenventadelusuarioparamostrar.addEventListener("click", () => {
      console.log(id);
      localStorage.setItem("productoparaservendido", this.iddelproducto);
      console.log(localStorage.getItem("productoparaservendido"));
    });
  }
}

