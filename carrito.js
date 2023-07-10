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
    domicilio = prompt('Indique su domicilio de entrega');
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

/// traemos del localStorage
function tomarCarrito() {
    carrito = JSON.parse(localStorage.getItem('carrito'));
}

function dibujarTablaItems() {
    const bodyTabla = document.getElementById('items');
    bodyTabla.innerHTML = ``; // limpio datos de la tabla
    // recorremos el array del carrito
    carrito.forEach((item,index) => {
       let tr = document.createElement('tr'); ///creo una fila!
       let th = document.createElement('th'); ///creo el header de la fila!
       th.textContent = index+1;
       tr.appendChild(th); ///le agrego el th como hijito de la fila

       /////creo la celda para el nombre de item
       let td = document.createElement('td');
       td.textContent = item.producto;
       tr.appendChild(td); ///agrego un nuevo hijito con el nombre de item a la fila

       ///cantidad
       td = document.createElement('td');
       td.textContent = item.cantidad;
       tr.appendChild(td);

       ///precio unitario
       td = document.createElement('td');
       td.textContent = item.precio;
       tr.appendChild(td);

       // total_item
       td = document.createElement('td');
       td.textContent = item.precio * item.cantidad;
       tr.appendChild(td);


       ///hago la row hija del body de la tabla
       bodyTabla.appendChild(tr); 
    });
}

// Comienzo con el programa
alert("Bienvenido al proceso de compra")

// Limpio el Storage al comenzar
localStorage.clear()

// defino el carrito
var carrito = [];

do {
    // Solicito producto al usuarios
    cargar_productos();

    // Solicito la cantidad del producto
    cantidad = parseInt(prompt("¿Que cantidad del " + producto + " desea llevar?"))
    
    // Sumo al total de la compra
    total_compra = total_compra + (precio * cantidad);

    // (3) Enviar los valores del producto al storage
    localStorage.setItem('producto', producto)
    localStorage.setItem('cantidad', cantidad)
    localStorage.setItem('precio', precio)
    localStorage.setItem('total_compra', total_compra)

    nuevo_item = {'producto': producto, 'cantidad': cantidad, 'precio': precio}
    carrito.push(nuevo_item)

    salir = prompt('Desea agregar otro producto en el carrito de compras? SI/NO');


}while(salir.toUpperCase() != 'NO');

// (3) Guardar los datos en el storage
//console.log(carrito)
localStorage.setItem('carrito', JSON.stringify(carrito))

// (3) Tomar los valores de la compra del storage para cargar una tabla 
tomarCarrito();
dibujarTablaItems();

// Al realizar el click de confirmar compra se dispara el proceso de confirmación
let boton_enviar = document.getElementsByClassName("boton-envio")[0]

boton_enviar.addEventListener("click", function() {
    //Solicito datos al cliente
    pedir_datos_cliente();

    // Le muestro al cliente el total de su compras
    //alert(nombre_y_apellido.toUpperCase() + " el total de tu compra fue de $ " + total_compra) 

    // Cambio texto y color del botón
    //boton_enviar.value = "Compra confirmada por el total de $ xxxx"; // Modifica el valor del atributo "value" al hacer clic en el botón
    boton_enviar.value = nombre_y_apellido.toUpperCase() + " su pedido fue confirmado; el total de tu compra fue de $ " + total_compra; // Modifica el valor del atributo "value" al hacer clic en el botón
    boton_enviar.classList.add("clicked"); // Agrega la clase "clicked" al botón al hacer clic
});

