const productos = ["Pan", "Huevo", "Leche", "Zumo", "Galletas"];
const form = document.getElementById("form");
const lista_html = document.getElementById("lista_compra");

for(const producto of productos) {
    mostrarProducto(producto);
}

function mostrarProducto(producto) {

    const li = document.createElement('li');
    const borrar = window.document.createElement('button');
    borrar.textContent = "(X) Borrar";
    borrar.addEventListener("click", () => {
        productos.splice(productos.indexOf(producto), 1);
        lista_html.removeChild(li);
    });
    li.textContent = producto;
    li.appendChild(borrar);
    lista_html.appendChild(li);

}

function agregarElemento(event) {
    event.preventDefault();

    const producto = document.getElementById("producto");

    productos.push(producto.value);

    mostrarProducto(producto.value);

    producto.value = "";
    
}

form.addEventListener("submit", agregarElemento);