class CartadeProductodelUsuario {
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
        <div class="contenedordeproducto contenedordeproducto${this.posiciondelatarjetaensucontendor}" id="contenedordeproducto${this.identificadordelatarjetaenlapagina}">
            <div class="contenedordeimagendeproducto" id="contenedordeimagendeproducto${this.identificadordelatarjetaenlapagina}">
                <img class="imagendeproducto" id="imagendeproducto${this.identificadordelatarjetaenlapagina}" src="${this.imagendelproducto}" alt="imagendeproducto">
            </div>
            <div class="informaciondeproducto" id="informaciondeproducto${this.identificadordelatarjetaenlapagina}">
                <div class="nombredeproducto" id="nombredeproducto${this.identificadordelatarjetaenlapagina}">${this.nombredelproducto}</div>
                <div class="preciodeproducto" id="preciodeproducto${this.identificadordelatarjetaenlapagina}">$ ${this.preciodelproducto}</div>
                <div class="ofertadeproducto" id="ofertadeproducto${this.identificadordelatarjetaenlapagina}">${this.ofertadelproducto} % off</div>
                <button class="botoneliminarproducto" id="botoneliminarproducto">Eliminar</button>
            </div>
        </div> 
        `;

    contenedordeundeterminadotipodeproducto.insertAdjacentHTML(
      "beforeend",
      cartadeproducto
    );
  } 

  mostrarpaginadeinformacion(ubicacion, id) {

    let contenedordeimagendeproducto = document.getElementById(`imagendeproducto${this.identificadordelatarjetaenlapagina}`)

    contenedordeimagendeproducto.addEventListener(
      "click",
      () => {
        console.log(id);
        localStorage.setItem("productoparaverinformacion", this.iddelproducto);
        console.log(localStorage.getItem("productoparaverinformacion"));
        window.location.href = `${this.paginadeinformaciondelproducto}`
      }
    );
  }

  eliminarproducto(id, categoria, nombre) {
    let botoneliminarproducto = document.getElementById(
      "botoneliminarproducto"
    );
    botoneliminarproducto.addEventListener("click", () => {
      console.log("el usuario quiere eliminar un producto")
      basededatos
        .collection("productos")
        .doc(id)
        .delete()
        .then(() => {
          basededatos
            .collection("categotias")
            .where("nombre", "==", categoria)
            .get()
            .then((informacion) => {
              informacion.docs.forEach((categoriaobtenida) => {
                let categoriaobtenidaid = categoriaobtenida.id
                let informaciondecategoriaobtenida = categoriaobtenida.data();
                let todoslosproductosdelacategoriaobtenida = informaciondecategoriaobtenida.todoslosproductos;

                let ubicaciondelproductoaeliminar = todoslosproductosdelacategoriaobtenida.indexOf(
                  id
                );
                todoslosproductosdelacategoriaobtenida.splice(
                  ubicaciondelproductoaeliminar,
                  1
                );

                basededatos
                  .collection("categotias")
                  .doc(categoriaobtenidaid)
                  .update({
                    todoslosproductos: todoslosproductosdelacategoriaobtenida,
                  })
                  .then(() => {
                    basededatos
                      .collection("usuarios")
                      .where("nombre", "==", nombre)
                      .get()
                      .then((informacion) => {
                          informacion.docs.forEach((usuario) => {
                            let usuarioobtenidoid = usuario.id
                            let informaciondeusuario = usuario.data();
                            let productosenventadelusuario =
                              informaciondeusuario.productosenventa;
    
                            let ubicaciondelproductoaeliminar = productosenventadelusuario.indexOf(
                              id
                            );
                            productosenventadelusuario.splice(
                              ubicaciondelproductoaeliminar,
                              1
                            );
    
                            basededatos
                              .collection("usuarios")
                              .doc(usuarioobtenidoid)
                              .update({
                                productosenventa: productosenventadelusuario,
                              })
                              .then(() => {
                                console.log("todo salio bien :)");
                                window.location.reload()
                              });
                          })
                      });
                  });
              });
            });
        });
    });
  }
}
