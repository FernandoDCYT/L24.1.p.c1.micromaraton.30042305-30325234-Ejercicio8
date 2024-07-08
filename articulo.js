export default class CL_articulo{
    constructor(nombre,precio,cantidad){
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
    }
    set nombre(n){
        this._nombre=n;
    }
    get nombre(){
        return this._nombre;
    }
    set precio(p){
        this._precio=p;
    }
    get precio(){
        return this._precio;
    }
    set cantidad(c){
        this._cantidad=c;
    }
    get cantidad(){
        return this._cantidad;
    }
    montPorArticulo(){
        return this.precio * this.cantidad;
    }

}