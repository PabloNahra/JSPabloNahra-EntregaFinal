// Probando Fetch a un URL

function peticionServer(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (response.ok){
                return response.json()
            } else {
                throw new Error('Hubo un error en el servidor: ' + response.status);
            }
        })
        .then((todos) => console.log(todos))
        .catch((error) => console.log(error));
    }

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// peticionServer();


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
// productos.push(new Producto(1, "Kit", 5000))
// productos.push(new Producto(2, "Amiguris", 10000))
// productos.push(new Producto(3, "Alfombra", 35000))


// Fetch a un archivo Local.

function cargarArticulos(){
//const cargarArticulos = 
    fetch('./articulos.json')
        .then(response => {
            if (response.ok){
                return response.json();
            } else {
                throw new Error('Vuelva a intentarlos más tarde - ' + response.status);
            }
        })
        // Aca deberia cargar los productos (dibujar las cards con los productos) // Por el momento los carga en la función anterior
        .then((todos) => {
            console.log(todos);
            for (const art of todos){
                productos.push(new Producto(art.id, art.nombre, art.precio))
            }
            console.log("articulos");
            console.log(productos);
        })
        .catch((error) => {
            console.log(error)
        });
    }

// cargarArticulos();
// console.log("cargarArticulos - constante")




async function cargarArticulos_await(){
    //const cargarArticulos = 
        const response = await fetch('./articulos.json')
            .then(response => {
                if (response.ok){
                    return response.json();
                } else {
                    throw new Error('Vuelva a intentarlos más tarde - ' + response.status);
                }
            })
            // Aca deberia cargar los productos (dibujar las cards con los productos) // Por el momento los carga en la función anterior
            .then((todos) => {
                console.log(todos);
                for (const art of todos){
                    productos.push(new Producto(art.id, art.nombre, art.precio))
                }
                console.log("articulos await");
                console.log(productos);
            })
            .catch((error) => {
                console.log(error)
            });
        }
    
console.log("cargarArticulos_await - Inicio")
async function carga(){
    await cargarArticulos_await();
}
carga();
console.log("cargarArticulos_await - Fin")