class Producto {
    constructor(id, nombre, precio) {
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

console.log("cargarArticulos_await - Inicio");
cargarArticulos().then(() => {
    console.log("cargarArticulos_await - Fin");
});
