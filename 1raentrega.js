/* /* /* /* variables */

/* let nombre;
let juguetes;
let precios;
let cantidad;
let operacion;
let subtotal=0;
let total=0;
let agregado = "SI";
let ticket=0;
let detalles;
let final;
let factura=0;

const PRECIO = 3000;

alert("Bienvenido a Curiositas!");

nombre=prompt('por favor escribe tu nombre');
if(nombre ==''){prompt('por favor escribe tu nombre');
}else{alert(`Muchas gracias por preferirnos ${nombre}!\n 
Por favor elige tu juguete favorito`)};

do{
juguetes = +prompt(`Ingrese el numero de su juguete favorito\n
1- HOT WHEELS $3000\n
2- MICRO BUILDER $3000 \n
3- METAL MACHINES $3000 \n
4- SPIDER FACES $3000 \n`);
if (juguetes !== 1 && juguetes !== 2 && juguetes !== 3 && juguetes !== 4) {
  +prompt("ingrese su numero de juguete favorito");
} else {
    if (juguetes == 1) {
        juguetes = "HOT WHEELS";        
      }
      if (juguetes == 2) {
        juguetes = "MICRO BUILDER";
      }
      if (juguetes == 3) {
        juguetes = "METAL MACHINES";
      }
      if (juguetes == 4) {
        juguetes = "SPIDER FACES";
      }
    cantidad = +prompt(`¿cuantos ${juguetes} quieres llevar?`);
  }

subtotal=cantidad*PRECIO;

total=total+subtotal; 

detalles= `${cantidad}und de ${juguetes} por $${PRECIO} cada uno\n`; 

ticket=ticket+detalles;

agregado =
prompt(`Has agregado ${cantidad} ${juguetes} a tu carrito de compras\n
Deseas agregar mas regalos? si/no`);


}while(agregado==='si');



factura=(factura+total);

alert(`Gracias por tu compra ${nombre}\n
Los articulos de tu carro de compras son:\n
${ticket}\n
El total de tu fatura es: $${factura}`); */

