class Usuario {
  constructor(
    id,
    nombre,
    apellido,
    edad,
    correo,
    contrasena,
    telefono,
    descripcion,
    sexo,
    avatar,
    pais,
    ciudad,
    tarjetadecredito,
    fondo,
    productoscomprados,
    productosvendidos,
    productosenventa,
    reclamos
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.correo = correo;
    this.contrasena = contrasena;
    this.telefono = telefono;
    this.descripcion = descripcion;
    this.sexo = sexo;
    this.avatar = avatar;
    this.pais = pais;
    this.ciudad = ciudad;
    this.tarjetadecredito = tarjetadecredito;
    this.fondo = fondo;
    this.productoscomprados = productoscomprados;
    this.productosvendidos = productosvendidos;
    this.productosenventa = productosenventa;
    this.reclamos = reclamos;
  }
  IniciarSesion() {}
  CrearCuenta() {}
  ModificarDatos() {}
  AgregarFondos() {}
  VenderProducto() {}
  ComprarProducto() {}
  Reclamar() {}
  CerrarSesion() {}
}


let usuariodatos;
let usuarioid;
let usuariodelaaplicacion;
let usuarioregistrado = false

const obtenerusuariousandolaaplicacion = (id) => {
  return new Promise((resolve, reject) => {
    basededatos
      .collection("usuarios")
      .doc(id)
      .get()
      .then((usuario) => {
        console.log(usuario.data());
        usuarioid = usuario.id;
        usuariodatos = usuario.data();

        usuariodelaaplicacion = new Usuario(
          usuarioid,
          usuariodatos.nombre,
          usuariodatos.apellido,
          usuariodatos.edad,
          usuariodatos.correo,
          usuariodatos.contrasena,
          usuariodatos.telefono,
          usuariodatos.descripcion,
          usuariodatos.sexo,
          usuariodatos.avatar,
          usuariodatos.pais,
          usuariodatos.ciudad,
          usuariodatos.tarjetadecredito,
          usuariodatos.fondo,
          usuariodatos.productoscomprados,
          usuariodatos.productosvendidos,
          usuariodatos.productosenventa,
          usuariodatos.reclamos
        );
        usuarioregistrado = true
        resolve()
      })
  });
};
