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
/* fetch('/productos.json')
.then((response) => response.json())
.then((contenido) => { */
    //console.log(contenido)
      let productos= obtenerArticulosLS();
        let contenido = "";

        for (const producto of productos){
            contenido += `<img src=../assets/img/${producto.imagen}><br>
            <h5 >${producto.id}</h5>
            <p >${producto.nombre}</p>
            <p>$${producto.precio}</p>
            <p>${producto.codigo}</p>
            <p><a href="#" class="btn btn-primary" title="Agregar al carrito" onclick="agregarCarrito(${producto.id})">Comprar</a><p/>`;
        }
        document.getElementById("articulos").innerHTML = contenido;
    };
   function confirmarProducto(){
        Swal.fire({
            position: '',
            icon: 'success',
            title: 'Agregaste un producto al carrito!',
            showConfirmButton: false,
            timer: 2000
        })

    } 
    function borrarProducto(){
        Swal.fire({
            position: '',
            icon: 'success',
            title: 'Eliminaste un producto del carrito!',
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
    
    let productos_carrito = obtenerArticulosCarrito();
    let pos = productos_carrito.findIndex(x=>x.id == id);

    if (pos >-1){
        productos_carrito[pos].cantidad += 1;
    } else {
        let producto = buscarProducto(id);
        producto.cantidad = 1;
        productos_carrito.push(producto);
    } 
    guardarArticulosCarrito(productos_carrito);
    actualizarBotonCarrito();
    confirmarProducto();
    mostrarArticulosCarrito();
}
function eliminarCarrito(id){
    let productos_carrito = obtenerArticulosCarrito();
    let pos = productos_carrito.findIndex(x=>x.id == id);
    productos_carrito[pos].cantidad -= 1;
    
    if (productos_carrito[pos].cantidad == 0){
        productos_carrito.splice(pos,1);
    }
    
    guardarArticulosCarrito(productos_carrito);
    actualizarBotonCarrito();
    borrarProducto();
    mostrarArticulosCarrito();
}
function vaciarCarrito(){
    localStorage.removeItem("carrito");
    //actualizarBotonCarrito();
    mostrarArticulosCarrito();

}

function mostrarArticulosCarrito(){
    let  productos = obtenerArticulosCarrito();
    let contenido = `<p class="text-end"><a href="#" class="btn btn-danger text-white" onclick="vaciarCarrito()" title="Vaciar carrito">Vaciar Carrito<img src="/assets/img/Eliminar.png" width="24"></a></p>
    <table class="table">`;
    let total = 0;
    for (const producto of productos){
        let precio = producto.precio * producto.cantidad;
        contenido += `<tr>
        <td>${producto.id}</td>
        <td>${producto.nombre}<b> X ${producto.cantidad}</td>
        <td><b>$${precio}</td>
        <td><a href="#" class="btn btn-danger" title="Eliminar del carrito" onclick="eliminarCarrito(${producto.id})"><img src="/assets/img/Eliminar.png" width="24"></a></td>
        </tr>`;
        total += precio;
    }
    contenido += `<tr>
    <td>&nbsp;</td>
    <td><b>Total a pagar:</td>
    <td><b>$${total}</td>
    <td class="text-end"><a href="#" class="btn btn-primary">Finalizar compra</a></td>
    </tr>`;

    contenido += `</table>`;

    document.getElementById("compras").innerHTML = contenido;

}



guardarArticulosLS(productos);
actualizarBotonCarrito();
mostrarArticulos();
mostrarArticulosCarrito();
