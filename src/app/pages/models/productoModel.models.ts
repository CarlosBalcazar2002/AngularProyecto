export class ProductoModel {
    idproductos: number;
    nombre: string;
    descripcion: string;
    precio: number; // Cambiado a number para coincidir con decimal(10,2)
    cantidad: number; // Cambiado a number para coincidir con int
    imagenurl: string;

    constructor() {
        this.idproductos = 0;
        this.nombre = '';
        this.descripcion = '';
        this.precio = 0.0; // Valor inicial de 0.0 para precio decimal
        this.cantidad = 0; // Valor inicial de 0 para cantidad int
        this.imagenurl = '';
    }
}
