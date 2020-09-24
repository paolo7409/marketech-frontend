class PiedePagina {
    constructor(paginadetrabajo,rutadenosotros,rutadecategorias,rutadeofertas,rutadereclamos){
        this.paginadetrabajo = paginadetrabajo
        this.rutadenosotros = rutadenosotros
        this.rutadecategorias = rutadecategorias
        this.rutadeofertas = rutadeofertas
        this.rutadereclamos = rutadereclamos
    }

    agregaralbody(){

        let contenedorgeneral = document.getElementById("contenedorgeneral")

        let piedepagina = `
        <div class="piedepaginade${this.paginadetrabajo}" id="piedepaginade${this.paginadetrabajo}">
            <div class="contenedordenosotros contenedordeopciones" id="contenedordenosotros">
                <div class="nosotrospiedepagina titulopiedepagina" id="nosotrospiedepagina"><a href="${this.rutadenosotros}">Nosotros</a></div>
                <ul class="listadeopciones">
                    <li><div class="opciondepiedepeagina"><a href="${this.rutadenosotros}">Quienes somos?</a></div></li>
                    <li><div class="opciondepiedepeagina"><a href="${this.rutadenosotros}">Como trabajamos?</a></div></li>
                    <li><div class="opciondepiedepeagina"><a href="${this.rutadenosotros}">Somos de confianza?</a></div></li>
                    <li><div class="opciondepiedepeagina"><a href="${this.rutadenosotros}">Calificanos</a></div></li>
                    <li><div class="opciondepiedepeagina"><a href="${this.rutadenosotros}">Contactanos</a></div></li>
                </ul> 
            </div>
            <div class="contenedordecategorias contenedordeopciones" id="contenedordecategorias">
                <div class="categoriaspiedepagina titulopiedepagina" id="categoriaspiedepagina"><a href="${this.rutadecategorias}">Categorias</a></div>
                <ul class="listadeopciones">
                    <li><div class="opciondepiedepeagina"><a href="${this.rutadecategorias}">Tecnologia</a></div></li>
                    <li><div class="opciondepiedepeagina"><a href="${this.rutadecategorias}">Entretenimiento</a></div></li>
                    <li><div class="opciondepiedepeagina"><a href="${this.rutadecategorias}">Deporte</a></div></li>
                    <li><div class="opciondepiedepeagina"><a href="${this.rutadecategorias}">Ropa</a></div></li>
                    <li><div class="opciondepiedepeagina"><a href="${this.rutadecategorias}">Muebles</a></div></li>
                    <li><div class="opciondepiedepeagina"><a href="${this.rutadecategorias}">Autos</a></div></li>
                    <li><div class="opciondepiedepeagina"><a href="${this.rutadecategorias}">Libros</a></div></li>
                </ul>
            </div>
            <div class="contenedordeofertas contenedordeopciones" id="contenedordeofertas">
                <div class="ofertaspiedepagina titulopiedepagina" id="ofertaspiedepagina"><a href="${this.rutadeofertas}">Ofertas</a></div>
                <ul class="listadeopciones">
                    <li><div class="opciondepiedepeagina"><a href=""${this.rutadeofertas}>Diarias</a></div></li>
                    <li><div class="opciondepiedepeagina"><a href="${this.rutadeofertas}">Semanales</a></div></li>
                    <li><div class="opciondepiedepeagina"><a href="${this.rutadeofertas}">Mensuales</a></div></li>
                    <li><div class="opciondepiedepeagina"><a href="${this.rutadeofertas}">Especiales</a></div></li>
                    <li><div class="opciondepiedepeagina"><a href="${this.rutadeofertas}">Cupones</a></div></li>
                </ul>
            </div>
            <div class="contenedordereclamos contenedordeopciones" id="contenedordereclamos">
                <div class="reclamospiedepagina titulopiedepagina" id="reclamospiedepagina"><a href="${this.rutadereclamos}">Reclamos</a></div>
                <ul class="listadeopciones">
                    <li><div class="opciondepiedepeagina"><a href="${this.rutadereclamos}">A la empresa</a></div></li>
                    <li><div class="opciondepiedepeagina"><a href="${this.rutadereclamos}">A un usuario</a></div></li>
                    <div class="opciondepiedepeagina"><a href="${this.rutadereclamos}"><img class="imagendelibrodereclamaciones" id="imagendelibrodereclamaciones" src="https://electrosertec.com/img/cms/libro_de_reclamaciones.jpg" alt="imagen de libro de reclamaciones"></a></div>
                </ul>
            </div>
        </div>
        `

        contenedorgeneral.insertAdjacentHTML("beforeend",piedepagina)
    }
}