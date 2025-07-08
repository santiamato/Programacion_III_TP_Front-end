let productos = [];

// DOM
const contenedorProductos = document.getElementById("contenedor-productos");
const nombreUsuario = document.querySelector(".nombreUsuario");
const btnVinilos = document.getElementById("mostrar-vinilos");
const btnDiscos = document.getElementById("mostrar-discos");

// Mostrar nombre guardado
const usuario = localStorage.getItem("clienteNombre");
if (nombreUsuario) {
  nombreUsuario.textContent = `Hola ${usuario}!!`;
}

// Cargar productos desde JSON y mostrarlos
async function cargarProductosDesdeAPI() {
  try {
    const response = await fetch("/data/productos.json");
    const data = await response.json();

    productos = data.filter(p => p.activo);
    mostrarProductos(productos);
    mostrarCarrito(); // para mostrar botón "Continuar" si hay productos
  } catch (error) {
    console.error("Error al cargar productos:", error);
  }
}

function mostrarProductos(array) {
  if (!contenedorProductos) return;

  let html = "";
  array.forEach(producto => {
    html += `
      <div class="card-producto">
        <img src=${producto.img} alt="imagen-${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <button onclick="agregarCarrito(${producto.id})">Agregar a carrito</button>
      </div>`;
  });

  contenedorProductos.innerHTML = html;
}

// Filtrar por tipo
function filtrarPorTipo(tipo) {
  const filtrados = productos.filter(p => p.tipo === tipo);
  mostrarProductos(filtrados);
}

// Eventos para botones
if (btnVinilos) {
  btnVinilos.addEventListener("click", () => filtrarPorTipo("vinilo"));
}
if (btnDiscos) {
  btnDiscos.addEventListener("click", () => filtrarPorTipo("disco"));
}

function init() {
  cargarProductosDesdeAPI();

  let btnContinuar = document.getElementById("btn-continuar");
  if (btnContinuar) {
    btnContinuar.addEventListener("click", () => {
      window.location.href = "/html/carrito.html";
    });
  }
}

init();
