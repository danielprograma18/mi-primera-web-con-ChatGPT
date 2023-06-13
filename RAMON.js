function enviarFormulario(event) {
    event.preventDefault();
  
    // Obtener los valores del formulario
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var mensaje = document.getElementById("mensaje").value;
  
    // Realizar validaciones adicionales si es necesario
  
    // Enviar los datos del formulario a través de una solicitud AJAX o cualquier otro método
  
    // Limpiar el formulario después de enviar los datos
    document.getElementById("formulario").reset();
  
    // Mostrar un mensaje de confirmación o redirigir a otra página
    alert("¡Gracias por tu interés en adoptar una mascota! Nos pondremos en contacto contigo pronto.");
  }
  