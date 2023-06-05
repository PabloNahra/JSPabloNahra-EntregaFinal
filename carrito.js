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
        producto = parseInt(prompt('Ingrese el código de producto que quiere llevar (1-Kit / 2-Amiguris / 3-Alfombra): '))
        switch(producto) {
            case 1:
                precio = 5000
                producto = "Kit"
                break; ///salimos de la estructura switch
            case 2:
                precio = 10000
                producto = "Amiguis"
                break; ///salimos de la estructura switch
            case 3:
                precio = 35000
                producto = "Alfombra"
                break; ///salimos de la estructura switch
            default:
                alert('Opción incorrecta. Digite nuevamente');
                error = 1;
        }
    } while (error == 1);       

    return producto, precio
}

alert("Bienvenido al proceso de compra")

pedir_datos_cliente();

do {
    // console.log('agregando un nuevo item en el carrito de compras...');
    // precio = parseFloat(prompt('precio del item: '));
    // cantidad = parseInt(prompt('cantidad: '));
    cargar_productos();

    cantidad = parseInt(prompt("¿Que cantidad del " + producto + " desea llevar?"))

    console.log(producto)
    console.log(precio)
    console.log(cantidad)
    
    total_compra = total_compra + (precio * cantidad);

    salir = prompt('Desea agregar otro producto en el carrito de compras? SI/NO');

}while(salir != 'NO');

console.log(nombre_y_apellido)
console.log(total_compra)

alert("El total de su compra fue de " + total_compra)