// valida que si el mensaje tiene la palabra venta o compra el tipo de solicitud cambie de manera automática

function updateSolicitudType() {
    const mensaje = document.getElementById('mensaje').value.toLowerCase();
    const tipoSolicitud = document.getElementById('tipo_solicitud');
    if (mensaje.includes('compra')) {
        tipoSolicitud.value = 'Compra';
    } else if (mensaje.includes('venta')) {
        tipoSolicitud.value = 'Venta';
    } else {
        tipoSolicitud.value = 'Consulta';
    }
    return true;
}


// Validar que se completen los valores en el formulario
function validateForm() {
    var nombre = document.getElementById('nombre').value;
    var mensajeErrorNombre = document.getElementById('mensajeErrorNombre');
    var correo = document.getElementById('correo').value;
    var mensajeErrorCorreo = document.getElementById('mensajeErrorCorreo');
    var mensaje = document.getElementById('mensaje').value;
    var mensajeErrorMensaje = document.getElementById('mensajeErrorMensaje');
    var mensajeErrorFormulario = document.getElementById('mensajeErrorFormulario');

    // Validar campo de nombre
    if (nombre.trim() === '') {
        document.getElementById('mensajeErrorNombre').style.display = 'block';
        mensajeErrorFormulario.style.display = 'block';
        return false; // Devuelve false si el campo de nombre está vacío
    } else {
        document.getElementById('mensajeErrorNombre').style.display = 'none';
    }
    if (correo.trim() === '') {
        // Si el campo de correo está vacío, mostrar mensaje de error y devolver false
        document.getElementById('mensajeErrorCorreo').style.display = 'block';
        mensajeErrorFormulario.style.display = 'block';
        return false;
    } else {
        document.getElementById('mensajeErrorCorreo').style.display = 'none';
        // Si se pasa la validación
    }
    if (mensaje.trim() === '') {
        // Si el campo de correo está vacío, mostrar mensaje de error y devolver false
        document.getElementById('mensajeErrorMensaje').style.display = 'block';
        mensajeErrorFormulario.style.display = 'block';
        return false;
    } else {
        document.getElementById('mensajeErrorMensaje').style.display = 'none';
        // Si se pasa la validación
    }
    mensajeErrorFormulario.style.display = 'none';
    var mensajeExito = document.getElementById('mensajeExito');
    mensajeExito.style.display = 'block';
    setTimeout(function() {
        // Ocultar el mensaje de éxito después de 5 segundos
        mensajeExito.style.display = 'none';
    }, 5000);
    return true
}













