// Tienda Web
/* 
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

}); */

 

//alert(mensaje)

const productos = [
                    {imagen:"microfono.jpg" , id:1, nombre: "Micrófono HIGH ELECTRIC CONDERSER", precio: 7.000, codigo: "Cod. 101", },
                    {imagen:"panel_acustico.jpg" , id:2, nombre: "Cabina De Grabacion Panel Acustico 5 Tramos Portatil Estudio", precio: "4.500", codigo:"Cod. 102" },
                    {imagen:"MICRO_inalambrico.jpg" , id:3, nombre: "Microfonos inalambricos", precio: 11.000, codigo:"Cod. 103" },
                    {imagen:"kit_de_grabacion.jpg" , id:4, nombre: "Kit Microfono Profesional Condenser Con Brazo + Phanton", precio: 15.000, codigo:"Cod. 104" },
                    {imagen:"auriculares.jpg" , id:5, nombre: "Auriculares inalámbricos Sony WH-CH510 negro", precio: 5.500, codigo:"Cod. 105" },
                    {imagen:"libro.jpg" , id:6, nombre: "Libro - Aula De Locución de Blanch, Margarita / Lázaro, Patrícia", precio: 3.500, codigo:"Cod. 106 " }

                ]
 
function obtenerArticulosLS(){
    return JSON.parse(localStorage.getItem("articulos"))|| [];
}
function guardarArticulosLS(){
    localStorage.setItem("articulos", JSON.stringify(productos));
}
function obtenerArticulosCarrito(){
    return JSON.parse(localStorage.getItem("carrito"))|| [];
}
function guardarArticulosCarrito(){
    localStorage.setItem("carrito", JSON.stringify(productos));
}





function mostrarArticulos(){
        let productos= obtenerArticulosLS();
        let contenido = "";

        for (const producto of productos){
            contenido += `<img src=../assets/img/${producto.imagen}><br>
            <h5 >${producto.id}</h5>
            <p >${producto.nombre}</p>
            <p>$${producto.precio}</p>
            <p>${producto.codigo}</p>
            <button type="button" class="btn btn-primary" id=${producto.id}" >Comprar</button>`;
        }
        document.getElementById("articulos").innerHTML = contenido;
    }

function actualizarBotonCarrito(){
    let productos= obtenerArticulosCarrito();
    let contenido =`<button type="button" class="btn btn-primary position-relative">
    Carrito
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      0</span></button>`;
    let total = 0;

     if(productos.lenght > 0) {
        for (let producto of productos){
            total += producto.cantidad;
        }
        contenido =`<button type="button" class="btn btn-primary position-relative">
    Carrito
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      ${total}</span></button>`;
    }

    document.getElementById("boton_carrito").innerHTML = contenido;
}
function buscarProducto(id){
    let productos= obtenerArticulosLS();
    return productos.find(x => x.id ==id)
}
function agregarCarrito(id){
    let producto = buscarProducto(id);
    let productos_carrito = obtenerArticulosCarrito();
    producto.cantidad = 1;
    productos_carrito.push(producto);
    guardarArticulosCarrito(productos_carrito);
    actualizarBotonCarrito();

}

guardarArticulosLS(productos);
actualizarBotonCarrito();
mostrarArticulos();



/*
 for (const articulo of articulos){
    let contenedor = document.createElement("div");
    contenedor.innerHTML= `
                        <img src=../assets/img/${articulo.imagen}><br>
                        <h5 >${articulo.id}</h5>
                        <p >${articulo.nombre}</p>
                        <p>$${articulo.precio}</p>
                        <p>${articulo.codigo}</p>
                        <button type="button" class="btn btn-primary" id=${articulo.id} >Comprar</button>`;
 document.getElementById("articulos").appendChild(contenedor);
}


let compras = document.getElementById("productos")
compras[0].innerText = "Microfonos"
compras[1].innerText = "Auriculares"
compras[2].innerText = "Otros"
*/
let boton1 = document.getElementById("1")
      boton1.addEventListener("click", respuestaClick1)
      function respuestaClick1(){
        let compras = document.getElementById("compras")
        compras.innerHTML = "Micrófono HIGH ELECTRIC CONDERSER \n $ 7.000 \nCod.270" 
      }

let boton2 = document.getElementById("2")
boton2.addEventListener("click", respuestaClick2)
function respuestaClick2() {
    let compras = document.getElementById("compras")
    compras.innerText ="Cabina De Grabacion Panel Acustico 5 Tramos Portatil \n $ 4.500 \nCod.150" 
}
let boton3 = document.getElementById("3")
boton3.addEventListener("click", respuestaClick3)
function respuestaClick3(){
    let compras = document.getElementById("compras")
    compras.innerText ="Kit inalambrico \n $ 11.000 \nCod.203" 
}

let boton4 = document.getElementById("4")
boton3.addEventListener("click", respuestaClick4)
function respuestaClick4(){
    let compras = document.getElementById("compras")
    compras.innerText ="Kit Microfono Profesional Condenser Con Brazo + Phanton 20hz \n $ 15.000 \nCod.203" 
}
let boton5 = document.getElementById("5")
boton4.addEventListener("click", respuestaClick5)
function respuestaClick5(){
    let compras = document.getElementById("compras")
    compras.innerText ="Auriculares inalámbricos Sony WH-CH510 negro \n $ 5.500 \nCod.150" 
}
let boton6 = document.getElementById("6")
boton3.addEventListener("click", respuestaClick6)
function respuestaClick6(){
    let compras = document.getElementById("compras")
    compras.innerText ="Libro \n $ 15.000 \nCod.203" 
}
