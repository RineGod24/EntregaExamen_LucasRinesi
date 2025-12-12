// SELECCION DE ELEMENTOS DEL DOM

const form = document.getElementById('contactForm');

const mensaje = document.getElementById('mensaje');

// EVENTO: CUANDO SE ENVIA EL FORMULARIO

form.addEventListener('submit', function(e){
    e.preventDefault();

    // OBTENER VALORES DEL FORMULARIO

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();

    // LIMPIAR MENSAJE ANTERIOR

    mensaje.className = 'mensaje';
    mensaje.textContent = '';

    // VALIDACIONES

    if (nombre === ''){
        mostrarMensaje('Por favor, ingrese su nombre y apellido', 'error');
        return;
    }
    if (email === ''){
        mostrarMensaje('Por favor, ingrese su email', 'error');
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        mostrarMensaje('Por favor, ingrese un email valido', 'error');
        return;
    }
    mostrarMensaje('¡Mensaje enviado con exito! Nos contactaremos pronto.', 'exito');
    form.reset();
});

// FUNCION MOSTAR MENSAJE AL USUARIO

function mostrarMensaje(texto, tipo){
    mensaje.textContent = texto;
    mensaje.className = `mensaje ${tipo}`;
    mensaje.scrollIntroView({
        bahavior: 'smooth',
        block: 'nearest'
    });
};