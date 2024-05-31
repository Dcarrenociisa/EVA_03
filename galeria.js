// Permite ver detalles adiciones a la obra
function mostrarDetalles(autor, obra, resena, imagen) {
    var modal = document.getElementById('modal');
    var tituloObra = document.getElementById('titulo-obra');
    var resenaObra = document.getElementById('resena');
    var descripcionObra = document.getElementById('descripcion-obra');
    var imagenObra = document.getElementById('imagen-obra')

    tituloObra.textContent = autor;
    descripcionObra.textContent = obra;
    resenaObra.textContent = resena;
    imagenObra.src = imagen;
    modal.style.display = 'block';
}

// Permite cerrar el modal o vetnana emergente con información de la obra
function cerrarModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Permite eliminar imagen de la grilla
function eliminarImagen(boton) {
    var imagen = boton.parentNode;
    imagen.parentNode.removeChild(imagen);
}