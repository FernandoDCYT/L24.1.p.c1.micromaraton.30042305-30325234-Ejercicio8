export default class CL_factura{
    constructor(){
        this.acumMontArt=0.0;
    }
    procesarArticulo(a){
        this.acumMontArt+= a.montPorArticulo();
    }
    iva(){
        return (this.acumMontArt * 0.16);
    }
    montoTotal(){
        return this.acumMontArt + this.iva();
    }
}