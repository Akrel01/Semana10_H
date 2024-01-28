let articulos = [
    {
        producto: 'monitor',
        precio: 200
    },
    {
        producto: 'teclado',
        precio: 20
    },
    {
        producto: 'raton',
        precio: 10
    },
]


function consultaPrecio(producto) {
    producto = producto.toLowerCase();

    let articulo = articulos.find(articulo => articulo.producto == producto)

    if (articulo) {
        return articulo.precio;
    } else{
        return "No existe el producto"
    }
}

let productoSolicitado = prompt("Ingrese el producto a consultar:")

let precioDeProducto = consultaPrecio(productoSolicitado);
console.log(`${precioDeProducto} es el precio del producto`)