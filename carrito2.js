let nombre_y_apellido;
let producto;
let precio;
let total_compra = 0;
let salir;
let error;
let id_producto;

class Producto {
    constructor (id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const productos = [];

async function cargarArticulos() {
    try {
        const response = await fetch('./articulos.json');
        if (response.ok) {
            const todos = await response.json();
            console.log(todos);
            for (const art of todos) {
                productos.push(new Producto(art.id, art.nombre, art.precio));
            }
            console.log("articulos");
            console.log(productos);
        } else {
            throw new Error('Vuelva a intentarlos más tarde - ' + response.status);
        }
    } catch (error) {
        console.log(error);
    }
}

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
            alert("El código ingresado no es correcto")
        }
    } while (error == 1);       

    return producto, precio
}

function tomarCarrito() {
    carrito = JSON.parse(localStorage.getItem('carrito'));
    carrito = carrito === undefined ? [] : carrito;
}

function dibujarTablaItems() {
    const bodyTabla = document.getElementById('items');
    bodyTabla.innerHTML = ``; // limpio datos de la tabla
    // recorremos el array del carrito
    carrito.forEach((item,index) => {
       let tr = document.createElement('tr'); ///creo una fila!
       let th = document.createElement('th'); ///creo el header de la fila!
       
       th.textContent = index+1
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


cargarArticulos().then(() => {
    alert("Bienvenido al proceso de compra")
    localStorage.clear()
    var carrito = [];
    do {
        cargar_productos();

        cantidad = parseInt(prompt("¿Que cantidad del " + producto + " desea llevar?"))

        total_compra = total_compra + (precio * cantidad);

        localStorage.setItem('producto', producto)
        localStorage.setItem('cantidad', cantidad)
        localStorage.setItem('precio', precio)
        localStorage.setItem('total_compra', total_compra)

        nuevo_item = {'producto': producto, 'cantidad': cantidad, 'precio': precio}
        carrito.push(nuevo_item)

        salir = prompt('Desea agregar otro producto en el carrito de compras? SI/NO');

    }while(salir.toUpperCase() != 'NO');

    localStorage.setItem('carrito', JSON.stringify(carrito))

    tomarCarrito();
    dibujarTablaItems();

    let boton_enviar = document.getElementsByClassName("boton-envio")[0]

    boton_enviar.addEventListener("click", function() {
        pedir_datos_cliente();

        boton_enviar.value = nombre_y_apellido.toUpperCase() + " su pedido fue confirmado; " + 
        "el total de tu compra fue de $ " + total_compra; 
        boton_enviar.classList.add("clicked");

        Swal.fire({
            title: 'ArtMatuiz',
            text: 'Gracias por su compra',
            icon: 'success',
            confirmButtonText: 'Ok'
        })

    });
});

