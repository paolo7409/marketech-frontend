class BarradeNavegacion {
  constructor(
    paginadetrabajo,
    rutadelogo, 
    rutadeopcion1,
    opcion1,
    rutadeopcion2,
    opcion2,
    rutadeopcion3,
    opcion3,
    rutadebotondebarradenavegacion,
    contenidodebotondebarradenavegacion
  ) {
    this.paginadetrabajo = paginadetrabajo;
    this.rutadelogo = rutadelogo;
    this.rutadeopcion1 = rutadeopcion1;
    this.opcion1 = opcion1;
    this.rutadeopcion2 = rutadeopcion2;
    this.opcion2 = opcion2;
    this.rutadeopcion3 = rutadeopcion3;
    this.opcion3 = opcion3;
    this.rutadebotondebarradenavegacion = rutadebotondebarradenavegacion;
    this.contenidodebotondebarradenavegacion = contenidodebotondebarradenavegacion;
  }
  agregarloalbody() {
    let contenedorgeneral = document.getElementById("contenedorgeneral");

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
                <div class="listadeopcionesitem" id="listadeopcionesitem"><a href="${this.rutadeopcion1}">${this.opcion1}</a></div>
                <div class="listadeopcionesitem" id="listadeopcionesitem"><a href="${this.rutadeopcion2}">${this.opcion2}</a></div>
                <div class="listadeopcionesitem" id="listadeopcionesitem"><a href="${this.rutadeopcion3}">${this.opcion3}</a></div>
            </div>
            <button class="botondeiniciodesesion" id="botondeiniciodesesion"><a href="${this.rutadebotondebarradenavegacion}">${this.contenidodebotondebarradenavegacion}</a></button>
        </div>
        `;
    contenedorgeneral.insertAdjacentHTML("afterbegin", barradenavegacion);
  }

  adaptaropcionesatamanospequenos() {
    let contenedordelistadeopciones = document.getElementById(
      "contenedordelistadeopciones"
    );

    let tamanoparacambiarbarradenavegacion1 = matchMedia(
      "(min-width: 481px) and (max-width: 768px)"
    );

    let tamanoparacambiarbarradenavegacion2 = matchMedia(
      "(min-width: 0px) and (max-width: 480px)"
    );

    let opcionesentamanospequenos = `<div class="opcionesentamanospequenos" id="opcionesentamanospequenos">
        <a class="opcionesitem" href="${this.rutadeopcion1}">${this.opcion1}</a>
        <a class="opcionesitem" href="${this.rutadeopcion2}">${this.opcion2}</a>
        <a class="opcionesitem" href="${this.rutadeopcion3}">${this.opcion3}</a>
        <a class="opcionesitemboton" href="iniciodesesion.html"><button class="botondeiniciodesesionenhamburguesa" id="botondeiniciodesesionenhamburguesa">Iniciar Sesion</button></a>
    </div>`;

    let opcionesentamanospequenosactivado = false;

    const modificarcontenedordelistadeopciones = (tamanodepantalla) => {
      if (tamanodepantalla.matches) {
        contenedordelistadeopciones.addEventListener("click", () => {
          if (opcionesentamanospequenosactivado === false) {
            opcionesentamanospequenosactivado = true;
            let contenedorgeneral = document.getElementById(
              "contenedorgeneral"
            );
            contenedorgeneral.insertAdjacentHTML(
              "afterbegin",
              opcionesentamanospequenos
            );
          }
          else{
            let opcionesentamanospequenosparaobtener = document.getElementById("opcionesentamanospequenos")
            opcionesentamanospequenosparaobtener.remove()
            opcionesentamanospequenosactivado = false
          }
        });
      } else {
        console.log(opcionesentamanospequenos);
      }
    };

    modificarcontenedordelistadeopciones(tamanoparacambiarbarradenavegacion1);
    tamanoparacambiarbarradenavegacion1.addListener(
      modificarcontenedordelistadeopciones
    );

    const modificarcontenedordelistadeopciones2 = (tamanodepantalla) => {
      if (tamanodepantalla.matches) {
        contenedordelistadeopciones.addEventListener("click", () => {
          if (opcionesentamanospequenosactivado === false) {
            opcionesentamanospequenosactivado = true;
            let contenedorgeneral = document.getElementById(
              "contenedorgeneral"
            );
            contenedorgeneral.insertAdjacentHTML(
              "afterbegin",
              opcionesentamanospequenos
            );
          }
          else{
            let opcionesentamanospequenosparaobtener = document.getElementById("opcionesentamanospequenos")
            opcionesentamanospequenosparaobtener.remove()
            opcionesentamanospequenosactivado = false
          }
        });
      } else {
        console.log(opcionesentamanospequenos);
      }
    };

    modificarcontenedordelistadeopciones2(tamanoparacambiarbarradenavegacion2);
    tamanoparacambiarbarradenavegacion2.addListener(
      modificarcontenedordelistadeopciones2
    );
  }

  adaptarinputdebusqueda() {

    let barradenavegacion = document.getElementById(`barradenavegacionde${this.paginadetrabajo}`)

    let botondebuscarparatamanospequenos = 
    `<button class="botondebuscarparatamanospequenos" id="botondebuscarparatamanospequenos">Buscar</button>`
    

    let tamanoparacambiarbarradenavegacion = matchMedia(
      "(min-width: 0px) and (max-width: 480px)"
    );

    const modificarinputdebusqueda = (tamanodepantalla) => {
      let botondebusquedaenmodopresentacion = true

      if (tamanodepantalla.matches) {
        barradenavegacion.insertAdjacentHTML("beforeend",botondebuscarparatamanospequenos)
        let botondebuscarparatamanospequenosparaobtener = document.getElementById("botondebuscarparatamanospequenos")
        botondebuscarparatamanospequenosparaobtener.addEventListener("click",() => {
          if(botondebusquedaenmodopresentacion === true){
            barradenavegacion.classList.toggle("barradenavegacionenmodobusqueda")
            let logo = document.getElementById("logo")
            logo.style.display = "none"
            let busquedadeproducto = document.getElementById("busquedadeproducto")
            busquedadeproducto.style.display = "none"
            let contenedordelistadeopciones = document.getElementById("contenedordelistadeopciones")
            contenedordelistadeopciones.style.display = "none"
            let listadeopcionesitem = document.getElementById("listadeopcionesitem")
            listadeopcionesitem.style.display = "none"
            let inputdebusquedadeproductos = 
            `<input class="inputdebusquedadeproductosenmodobusqueda" id="inputdebusquedadeproductosenmodobusqueda" type="text" placeholder="producto" autocomplete="off">`
            
            botondebuscarparatamanospequenosparaobtener.classList.toggle("botondebusquedaenmodobusqueda")
  
            barradenavegacion.insertAdjacentHTML("beforeend",inputdebusquedadeproductos)
            botondebusquedaenmodopresentacion = false
          } 
          else{
          }
        })
      } else {
        console.log("ta mal");
      }
    };

    modificarinputdebusqueda(tamanoparacambiarbarradenavegacion);
    tamanoparacambiarbarradenavegacion.addListener(modificarinputdebusqueda);

  }

  buscarproducto() {
    let botonbuscadordeproductos = document.getElementById(
      "botonbuscadordeproductos"
    );
    botonbuscadordeproductos.addEventListener("click", () => {
      let inputdebusquedadeproductos = document.getElementById(
        "inputdebusquedadeproductos"
      );
      let productobuscado = inputdebusquedadeproductos.value.trim();

      basededatos
        .collection("productos")
        .where("nombre", "==", productobuscado)
        .get()
        .then((informacion) => {
          informacion.docs.forEach((producto) => {
            console.log(producto.data());
            localStorage.setItem("productobuscado", productobuscado);
            window.location.href = "paginadebusquedadeproducto.html";
          });
        });
    });


  }

  cerrarsesion() {
    let botondeiniciodesesion = document.getElementById(
      "botondeiniciodesesion"
    );
    botondeiniciodesesion.textContent = "Cerrar Sesion";
    botondeiniciodesesion.addEventListener("click", (e) => {
      localStorage.setItem("usuarioactivodelaaplicacion", "");
      console.log(localStorage.getItem("usuarioactivodelaaplicacion"));
      console.log("el usuario cerro sesion");
      window.location.href = "paginaprincipal.html";
      e.preventDefault();
    });
  }
}
