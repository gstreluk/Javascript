const productos = [
                    {id:1,imagen:"microfono.jpg" , nombre: "Micrófono HIGH ELECTRIC CONDERSER", precio:7000, codigo: "Cod. 101", },
                    {id:2,imagen:"panel_acustico.jpg" ,  nombre: "Cabina De Grabacion Panel Acustico 5 Tramos Portatil Estudio", precio:4500, codigo:"Cod. 102" },
                    {id:3,imagen:"MICRO_inalambrico.jpg" ,  nombre: "Microfonos inalambricos", precio: 11000, codigo:"Cod. 103" },
                    {id:4,imagen:"kit_de_grabacion.jpg" ,  nombre: "Kit Microfono Profesional Condenser Con Brazo + Phanton", precio: 15000, codigo:"Cod. 104" },
                    {id:5,imagen:"auriculares.jpg" ,  nombre: "Auriculares inalámbricos Sony WH-CH510 negro", precio: 5500, codigo:"Cod. 105" },
                    {id:6,imagen:"libro.jpg" ,  nombre: "Libro - Aula De Locución de Blanch, Margarita / Lázaro, Patrícia", precio: 3500, codigo:"Cod. 106 " }

                ]
 
function obtenerArticulosLS(){
    return JSON.parse(localStorage.getItem("articulos"))|| [];
}
function guardarArticulosLS(productos){
    localStorage.setItem("articulos", JSON.stringify(productos));
}
function obtenerArticulosCarrito(){
    return JSON.parse(localStorage.getItem("carrito"))|| [];
}
function guardarArticulosCarrito(productos){
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
            <p><a href="#" class="btn btn-primary" onclick="agregarCarrito(${producto.id})">Comprar</a><p/>`;
        }
        document.getElementById("articulos").innerHTML = contenido;
    }
function confirmarProducto(){
    Swal.fire({
        position: '',
        icon: 'success',
        title: 'Agregaste un producto al carrito!',
        showConfirmButton: false,
        timer: 2000
      })

}    

function actualizarBotonCarrito(){
    let productos= obtenerArticulosCarrito();
    let contenido =`<button type="button" class="btn btn-primary position-relative">
    Carrito
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      0</span></button>`;
    let total =0;

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
    confirmarProducto();
    mostrarArticulosCarrito();

}
function mostrarArticulosCarrito(){
    let  productos = obtenerArticulosCarrito();
    let contenido = `<table class="table">`;

    for (const producto of productos){
        contenido += `<tr>
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>$${producto.precio}</td>`;
    }
    contenido += `</table>`;

    document.getElementById("compras").innerHTML = contenido;

}



guardarArticulosLS(productos);
actualizarBotonCarrito();
mostrarArticulos();
mostrarArticulosCarrito();
