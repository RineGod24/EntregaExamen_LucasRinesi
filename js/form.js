// SELECCION DE ELEMENTOS DEL DOM

const form = document.getElementById('contactForm');
const mensaje = document.getElementById('mensaje');
const telefonoInput = document.getElementById('telefono');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const comentariosInput = document.getElementById('comentarios');

// LIMITES DE CARACTERES
const LIMITES = {
    nombre: 100,
    email: 100,
    telefono: 20,
    comentarios: 500
};

// VALIDACION EN TIEMPO REAL PARA TELEFONO (SOLO NUMEROS)
telefonoInput.addEventListener('input', function(e){
    let valor = e.target.value;                          // Remover cualquier caracter que no sea numero, +, -, espacio o parentesis
    e.target.value = valor.replace(/[^\d+\-\s()]/g, ''); // Permitir solo numeros, +, -, espacios y parentesis
    
    // Aplicar limite de caracteres
    if(e.target.value.length > LIMITES.telefono){
        e.target.value = e.target.value.slice(0, LIMITES.telefono);
    }
});

// APLICAR LIMITES DE CARACTERES A TODOS LOS CAMPOS
nombreInput.addEventListener('input', function(e){
    if(e.target.value.length > LIMITES.nombre){
        e.target.value = e.target.value.slice(0, LIMITES.nombre);
    }
});

emailInput.addEventListener('input', function(e){
    if(e.target.value.length > LIMITES.email){
        e.target.value = e.target.value.slice(0, LIMITES.email);
    }
});

comentariosInput.addEventListener('input', function(e){
    if(e.target.value.length > LIMITES.comentarios){
        e.target.value = e.target.value.slice(0, LIMITES.comentarios);
    }
});

// EVENTO: CUANDO SE ENVIA EL FORMULARIO

form.addEventListener('submit', function(e){
    e.preventDefault();

    // OBTENER VALORES DEL FORMULARIO

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const comentarios = document.getElementById('comentarios').value.trim();

    // LIMPIAR MENSAJE ANTERIOR

    mensaje.className = 'mensaje';
    mensaje.textContent = '';

    // VALIDACIONES

    if (nombre === ''){
        mostrarMensaje('Por favor, ingrese su nombre y apellido', 'error');
        return;
    }
    if (nombre.length > LIMITES.nombre){
        mostrarMensaje(`El nombre no puede exceder ${LIMITES.nombre} caracteres`, 'error');
        return;
    }
    if (email === ''){
        mostrarMensaje('Por favor, ingrese su email', 'error');
        return;
    }
    if (email.length > LIMITES.email){
        mostrarMensaje(`El email no puede exceder ${LIMITES.email} caracteres`, 'error');
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        mostrarMensaje('Por favor, ingrese un email valido', 'error');
        return;
    }
    if(telefono !== ''){
        const telefonoRegex = /^[\d+\-\s()]+$/;
        if(!telefonoRegex.test(telefono)){
            mostrarMensaje('El teléfono solo puede contener números', 'error');
            return;
        }
        if(telefono.length > LIMITES.telefono){
            mostrarMensaje(`El teléfono no puede exceder ${LIMITES.telefono} caracteres`, 'error');
            return;
        }
    }
    if(comentarios.length > LIMITES.comentarios){
        mostrarMensaje(`Los comentarios no pueden exceder ${LIMITES.comentarios} caracteres`, 'error');
        return;
    }
    mostrarMensaje('¡Mensaje enviado con exito! Nos contactaremos pronto.', 'exito');
    form.reset();
});

// FUNCION MOSTAR MENSAJE AL USUARIO

function mostrarMensaje(texto, tipo){
    mensaje.textContent = texto;
    mensaje.className = `mensaje ${tipo}`;
    mensaje.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
    });
};