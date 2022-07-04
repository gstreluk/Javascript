// Tienda Web

function bienvenida() {
    alert("Bienvenido a la tienda Web");
}

function comprar () {
    producto = prompt(
      "Elegí el producto que deseas comprar: \n 1: Micrófono $ 7.000 \n 2: Panel acústico $ 4.500 \n 3: Kit de grabación $ 15.000\n 4: Auriculares $ 5.500\n 5: Volver"
    );
      if (producto === "1") {
      alert(" Elegiste Micrófono");
    } else if (producto === "2") {
      alert(" Elegiste Panel acústico");
    } else if (producto === "3") {
      alert(" Elegiste Kit de grabación");
    } else if (producto === "4") {
      alert(" Elegiste Auriculares");
    }
    else if (producto === "5") {
        inicio();
    }
    totalCompra();
  }
  
function inicio() {
    let opcion = parseInt(
      prompt(
        "Ingrese :\n1)Comenzar a comprar \n2)Recibir ofertas por mail \n3)Salir"
        )
    );
    while (opcion !== 3) {
      switch (opcion) {
        case 1:
          comprar();
          break;
        case 2:
          ofertas();
          break;
      }
      opcion = parseInt(
        prompt(
        "Ingrese :\n1)Comenzar a comprar \n2)Recibir ofertas por mail \n3)Salir"
        )
      );
    }
  }
  function totalCompra(mi_array, funcion) {
    for (const indice of numeros) {
        funcion(indice);
    }
  }
  //let compras1=parseFloat(prompt("ingrese el monto"));
  //let compras2=parseFloat(prompt("ingrese el segundo monto"));
  function acumular(num) {
      total += num;
  }
  
  function ofertas (){
    let mail = prompt("Ingrese el mail donde desea recibir las novedades con los mejores precios")
    alert ("Informacion enviada al mail:  " + mail)
  }

let producto;
bienvenida();
inicio();
totalCompra(numeros, acumular);
  console.log("Mi total es: " + total);

  const numeros= [producto+producto]
totalCompra(numeros, console.log)
let total = 0;  

