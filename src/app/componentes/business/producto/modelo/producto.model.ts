export class ProductoModel{
    id:number;
    nombre:string;
    detalle:string;
    urlImg:string;
    activo:boolean;
    precio:number;
    constructor(id:number,
        nombre:string,
        detalle:string,
        urlImg:string,
        activo:boolean,
        precio:number) {
            this.id=id;
            this.nombre=nombre;
            this.detalle=detalle;
            this.urlImg=urlImg;
            this.activo=activo;
            this.precio=precio;
        
    }
}