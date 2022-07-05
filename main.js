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

