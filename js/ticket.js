

function mostrarTicket() {
  const nombre = localStorage.getItem("nombreUsuario");
  const carrito = JSON.parse(localStorage.getItem("Carrito")) || [];
  const total = parseFloat(localStorage.getItem("Total")) || 0;
  const fecha = new Date().toLocaleString("es-AR");

  // Mostrar datos del usuario y fecha
  const datosUsuario = document.getElementById("datos-usuario");
  datosUsuario.innerHTML = `
    <p><strong>Cliente:</strong> ${nombre}</p>
    <p><strong>Fecha:</strong> ${fecha}</p>`;

  // Mostrar detalle de productos
  const lista = document.getElementById("detalle-productos");
  lista.innerHTML = "";

  carrito.forEach(prod => {
    const cantidad = prod.cantidad;
    const li = document.createElement("li");
    li.textContent = `${prod.nombre} x${cantidad} - $${(prod.precio * cantidad).toFixed(2)}`;
    lista.appendChild(li);
  });

  // Mostrar total
  const totalFinal = document.getElementById("total-final");
  totalFinal.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
}

// Reiniciar el sistema
function reiniciarSistema() {
  localStorage.clear();
  window.location.href = "/html/ingresoNombre.html"; 
}

document.getElementById("reiniciar").addEventListener("click", reiniciarSistema);

mostrarTicket();