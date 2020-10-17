class Producto {
  constructor(
    nombre,
    categoria,
    precio,
    empresa,
    vendedor,
    telefono,
    cantidad,
    oferta
  ) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.empresa = empresa;
    this.vendedor = vendedor;
    this.telefono = telefono;
    this.cantidad = cantidad;
    this.oferta = oferta;
  }
}


let productodatos;
let productoid;
let productodelaaplicacion;

const venderproductodelaaplicacion = (id) => {
  return new Promise((resolve, reject) => {
    basededatos
      .collection("productos")
      .doc(id)
      .get()
      .then((producto) => {
        console.log(producto.data());
        productoid = producto.id;
        productodatos = producto.data();

        productodelaaplicacion = new Producto(
          productodatos.nombre,
          productodatos.categoria,
          productodatos.precio,
          productodatos.empresa,
          productodatos.vendedor,
          productodatos.telefono,
          productodatos.cantidad,
          productodatos.oferta
        );
        resolve()
      });
  });
};

let productosenventadelaaplicacionparabuscar = []