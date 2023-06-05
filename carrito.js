let nombre_y_apellido;
let producto;
let precio;
let total_compra = 0;
let salir;
let error;


function pedir_datos_cliente(){
    nombre_y_apellido = prompt('Indique su nombre y apellido');
}

function cargar_productos(){
    do {
        error = 0;
        producto = parseInt(prompt("Ingrese el código de producto que quiere llevar" + "\n" + 
        "1-Kit" + "\n" +
        "2-Amiguris"  + "\n" + 
        "3-Alfombra"))

        switch(producto) {
            case 1:
                precio = 5000
                producto = "Kit"
                break; ///salimos de la estructura switch
            case 2:
                precio = 10000
                producto = "Amiguris"
                break; 
            case 3:
                precio = 35000
                producto = "Alfombra"
                break; 
            default:
                alert('Opción incorrecta. Digite nuevamente');
                error = 1;
        }
    } while (error == 1);       

    return // producto, precio
}


// Comienzo con el programa
alert("Bienvenido al proceso de compra")

//Solicito datos al cliente
pedir_datos_cliente();

do {
    // Solicito cliente al usuarios
    cargar_productos();

    // Solicito la cantidad del producto
    cantidad = parseInt(prompt("¿Que cantidad del " + producto + " desea llevar?"))

    console.log(producto)
    console.log(precio)
    console.log(cantidad)
    
    // Sumo al total de la compra
    total_compra = total_compra + (precio * cantidad);

    salir = prompt('Desea agregar otro producto en el carrito de compras? SI/NO');

}while(salir.toUpperCase() != 'NO');

console.log(nombre_y_apellido)
console.log(total_compra)

// Le muestro al cliente el total de su compras
alert(nombre_y_apellido.toUpperCase() + " el total de tu compra fue de $ " + total_compra) 