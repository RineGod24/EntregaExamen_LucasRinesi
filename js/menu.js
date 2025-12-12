// MENU HAMBURGUESA

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');

// EVENTO: ABRIR/CERRAR MENU AL HACER CLICK

menuToggle.addEventListener('click', function(){
    navMenu.classList.toggle('active');
});

// CERRAR MENU AL HACER CLICK EN UN ENLACE

const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', function(){
        navLinks.classList.remove('active');
    });
});