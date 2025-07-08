

document.getElementById("confirmar-compra").addEventListener("click", confirmarCompra);
document.getElementById("volver").addEventListener("click", volverAtras);

///  func confirmar compra
function confirmarCompra() {
  if (carritoProductos.length === 0) {
    alert("El carrito está vacío.");
    return;
  }

  window.location.href = "/html/ticket.html";
}

function volverAtras(){
    window.location.href = "/html/index.html";
}
  
function init() {
  mostrarCarrito(); 

  

  const nombreUsuario = document.querySelector(".nombreUsuario");
  const usuario = localStorage.getItem("clienteNombre");
  if (nombreUsuario && usuario) {
    nombreUsuario.textContent = `Ya estamos terminando ${usuario}!!`;
  }
}

init();
