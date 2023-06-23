// Actividad 2 - Arrays - Clase 6 - 6/6/2023
// Incorporar Arrays al proyecto integrador (copio el codigo de la preentrega 1 como punto de partida)

let nombre_y_apellido;
let producto;
let precio;
let total_compra = 0;
let salir;
let error;
let id_producto;

// Class para dar de alta los productos

class Producto {
    constructor (id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Declaro un array de productos para almacenar los objetos (BDD)
const productos = [];

// Genero los productos
productos.push(new Producto(1, "Kit", 5000))
productos.push(new Producto(2, "Amiguris", 10000))
productos.push(new Producto(3, "Alfombra", 35000))


function listar_productos(){
    listado_productos = ""
    for (const prod of productos){
        listado_productos = listado_productos + prod.id + " " + prod.nombre + " " + prod.precio + "\n";
    }
    
    return listado_productos
}

function pedir_datos_cliente(){
    nombre_y_apellido = prompt('Indique su nombre y apellido');
}

function cargar_productos(){
    do {
        error = 0;
        id_producto = parseInt(prompt("Ingrese el código de producto que quiere llevar" + "\n" + 
        listar_productos()))

        producto = "";
        const elegido = productos.find(prod => prod.id === id_producto) ?? "";
        producto = elegido.nombre ?? "";

        if (producto != "" ){
            console.log("Tiene valor")
            precio = elegido.precio
            producto = elegido.nombre
        }else{
            console.log("No tiene valor")
            error = 1
            alert("El código ingresado no es el correcto")
        }
    } while (error == 1);       

    return producto, precio
}


// Comienzo con el programa
alert("Bienvenido al proceso de compra")

//Solicito datos al cliente
pedir_datos_cliente();

do {
    // Solicito producto al usuarios
    cargar_productos();

    // Solicito la cantidad del producto
    cantidad = parseInt(prompt("¿Que cantidad del " + producto + " desea llevar?"))
    
    // Sumo al total de la compra
    total_compra = total_compra + (precio * cantidad);

    salir = prompt('Desea agregar otro producto en el carrito de compras? SI/NO');

}while(salir.toUpperCase() != 'NO');

// Le muestro al cliente el total de su compras
alert(nombre_y_apellido.toUpperCase() + " el total de tu compra fue de $ " + total_compra) 