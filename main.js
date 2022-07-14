// Tienda Web

let nombre = prompt ("ingrese su nombre");

alert ("Hola"+" "+nombre+" "+"bienvenido a la tienda web");

 

let entrada2 = prompt("Te gusto algun producto?");

if ((entrada2 == "si") || (entrada2 == "SI")) {

    alert("Perfecto, te ayudaremos a elegir correctamente");

} else {

    alert("sigue disfrutando de nuestro contenido");

}

 

const productos = [];

class Productos {

    constructor (codigo,producto, precio) {

this.producto = producto;

this.precio =precio;

this.codigo = codigo;

    }

}

let cantidad =parseInt(prompt("Cuantos productos quieres agregar?"))

 

function agregarproductos (arr,cantidad) {

  for (let i = 0; i < cantidad; i++) {

   let producto=prompt("ingrese el producto")

   let precio=parseInt(prompt("ingrese el precio"))

   let codigo = prompt("ingrese el codigo")

   arr.push(new Productos (codigo,producto,precio))

  }

}

function mostrarproductos(arr){

    arr.forEach(item => {

        console.log ("Producto: "+ item.producto+" Precio: "+item.precio+ " Codigo: "+ item.codigo)

    });

}
 

agregarproductos(productos,cantidad)

mostrarproductos (productos)

 

let operacion = prompt ("Ingrese el codigo del producto seleccionado")

 

let productoselegidos = productos.filter((item)=> item.codigo == operacion)

let mensaje = ""

productoselegidos.forEach(item => {

    mensaje += "Producto: "+ item.producto + "Precio: "+item.precio + "Codigo: "+item.codigo

});

 

alert(mensaje)

let compras = document.getElementById("productos")
compras[0].innerText = "Microfonos"
compras[1].innerText = "Auriculares"
compras[2].innerText = "Otros"

let boton1 = document.getElementById("micro")
      boton1.addEventListener("click", respuestaClick1)
      function respuestaClick1(){
        let compras = document.getElementById("compras")
        compras.innerText ="Micrófono HIGH ELECTRIC CONDERSER \n $ 7.000 \nCod.270" 
      }

let boton2 = document.getElementById("panel")
boton2.addEventListener("click", respuestaClick2)
function respuestaClick2() {
    let compras = document.getElementById("compras")
    compras.innerText ="Cabina De Grabacion Panel Acustico 5 Tramos Portatil \n $ 4.500 \nCod.150" 
}
let boton3 = document.getElementById("kit")
boton3.addEventListener("click", respuestaClick3)
function respuestaClick3(){
    let compras = document.getElementById("compras")
    compras.innerText ="Kit Microfono Profesional Condenser Con Brazo + Phanton 20hz \n $ 15.000 \nCod.203" 
}
let boton4 = document.getElementById("auriculares")
boton4.addEventListener("click", respuestaClick4)
function respuestaClick4(){
    let compras = document.getElementById("compras")
    compras.innerText ="Auriculares inalámbricos Sony WH-CH510 negro \n $ 5.500 \nCod.150" 
}