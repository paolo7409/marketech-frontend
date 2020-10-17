class TarjetasdeCredito {
  constructor(
    id,
    numero,
    caducidad,
    codigocvv2,
    titulardelatarjeta,
    direcciondelatarjeta,
    ciudaddelatarjeta,
    provinciadelatarjeta,
    empresadelatarjeta
  ) {
    (this.id = id),
      (this.numero = numero),
      (this.caducidad = caducidad),
      (this.codigocvv2 = codigocvv2),
      (this.titulardelatarjeta = titulardelatarjeta),
      (this.direcciondelatarjeta = direcciondelatarjeta),
      (this.ciudaddelatarjeta = ciudaddelatarjeta),
      (this.provinciadelatarjeta = provinciadelatarjeta),
      (this.empresadelatarjeta = empresadelatarjeta);
  }
}

let tarjetadecreditodatos;
let tarjetadecreditoid;
let tarjetadecreditodelaaplicacion;

const obtenertarjetadecreditousadaenlaaplicacion = (id) => {
  return new Promise((resolve, reject) => {
    basededatos
      .collection("tarjetasdecredito")
      .doc(id)
      .get()
      .then((tarjetadecredito) => {
        console.log(tarjetadecredito.data());
        tarjetadecreditoid = tarjetadecredito.id;
        tarjetadecreditodatos = tarjetadecredito.data();

        tarjetadecreditodelaaplicacion = new TarjetasdeCredito(
          tarjetadecreditoid,
          tarjetadecreditodatos.numero,
          tarjetadecreditodatos.caducidad,
          tarjetadecreditodatos.codigocvv2,
          tarjetadecreditodatos.titulardelatarjeta,
          tarjetadecreditodatos.direcciondelatarjeta,
          tarjetadecreditodatos.ciudaddelatarjeta,
          tarjetadecreditodatos.provinciadelatarjeta,
          tarjetadecreditodatos.empresadelatarjeta
        );
        resolve();
      });
  });
};
