class Usuario {
    constructor(id,nombre,apellido,edad,correo,contrasena,telefono,descripcion,sexo,avatar,pais,ciudad,tarjetadecredito,fondo,productoscomprados,productosvendidos,productosenventa,reclamos){
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.correo = correo
        this.contrasena = contrasena
        this.telefono = telefono
        this.descripcion = descripcion
        this.sexo = sexo
        this.avatar = avatar
        this.pais = pais
        this.ciudad = ciudad
        this.tarjetadecredito = tarjetadecredito
        this.fondo = fondo
        this.productoscomprados = productoscomprados
        this.productosvendidos = productosvendidos
        this.productosenventa = productosenventa
        this.reclamos = reclamos
    }
    IniciarSesion(){}
    CrearCuenta(){}
    ModificarDatos(){}
    AgregarFondos(){}
    VenderProducto(){}
    ComprarProducto(){}
    Reclamar(){}
    CerrarSesion(){}
}


let usuariosdelaaplicacion = []