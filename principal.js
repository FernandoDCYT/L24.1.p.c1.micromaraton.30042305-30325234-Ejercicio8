/* por cada aticulo vendido se conoce: nombre, precio y cantidad.
se desea conocer: a)subtotal por articulo
                  b)subtotal por factura 
                  c) 16% en iva
                  d) total de la factura al aplicar el iva 
suministran los siguientes datos (nombre,precio, cantidad)
    (harina,40,2)(arroz,45,4)(azucar,45,2)(pasta,47.5,3) 
*/
import CL_factura from "./factura.js";
import CL_articulo from "./articulo.js";

//instancia al objeto articulo 

let articulo1= new CL_articulo ("harina", 40.0, 2);
let articulo2= new CL_articulo ("arroz", 45.0, 4);
let articulo3= new CL_articulo ("azucar", 45.0, 2);
let articulo4= new CL_articulo ("pasta", 47.5, 3);

let factura= new CL_factura();

factura.procesarArticulo(articulo1);
factura.procesarArticulo(articulo2);
factura.procesarArticulo(articulo3);
factura.procesarArticulo(articulo4);

let salida= document.getElementById("salida");
salida.innerHTML = ` 
subtotal del Articulo ${articulo1.montPorArticulo()}
<br> subtotal del Articulo ${articulo2.montPorArticulo()}
<br>subtotal del Articulo ${articulo3.montPorArticulo()}
<br>subtotal del Articulo ${articulo4.montPorArticulo()}
<br>Subtotal de la factura ${factura.acumMontArt}
<br>Monto a pagar por IVA (16%) ${factura.iva().toFixed(1)} Bs
<br> Total de la Factura: ${factura.montoTotal()} Bs
`
