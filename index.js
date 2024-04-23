document.addEventListener('DOMContentLoaded', function() {
    const loginsec = document.querySelector('.login-section');
    const loginlink = document.querySelector('.login-link');
    const registerlink = document.querySelector('.register-link');
    const loginForm = document.querySelector('.login form');
    const registerForm = document.querySelector('.register form');

    // Función para mostrar el formulario de registro
    registerlink.addEventListener('click', () => {
        loginsec.classList.add('active');
    });

    // Función para mostrar el formulario de inicio de sesión
    loginlink.addEventListener('click', () => {
        loginsec.classList.remove('active');
    });

    // Función para manejar el registro de un nuevo usuario
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombreCompleto = this.querySelector('input[name="nombre_completo"]').value;
        const usuario = this.querySelector('input[name="usuario"]').value;
        const contrasena = this.querySelector('input[name="contrasena"]').value;

        // Validar que todos los campos estén llenos
        if (nombreCompleto && usuario && contrasena) {
            // Simulación de almacenamiento en el localStorage
            const newUser = {
                nombreCompleto: nombreCompleto,
                usuario: usuario,
                contrasena: contrasena
            };

            // Guardar el usuario en localStorage (aquí deberías usar un backend real para almacenar usuarios)
            localStorage.setItem('currentUser', JSON.stringify(newUser));

            alert('¡Registro exitoso! Por favor inicia sesión.');
            this.reset(); // Limpiar el formulario de registro
        } else {
            alert('Por favor completa todos los campos del formulario.');
        }
    });

    // Función para manejar el inicio de sesión
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = this.querySelector('input[name="usuario"]').value;
        const password = this.querySelector('input[name="contrasena"]').value;

        // Obtener el usuario registrado en localStorage (simulación de inicio de sesión)
        const storedUser = JSON.parse(localStorage.getItem('currentUser'));

        // Verificar las credenciales
        if (storedUser && storedUser.usuario === username && storedUser.contrasena === password) {
            alert('¡Inicio de sesión exitoso! Redirigiendo a otra página.');

            // Redirigir a otra página después del inicio de sesión exitoso
            window.location.href = 'contenido/index.html'; // Cambia 'otra_pagina.html' por la página a la que quieres redirigir
        } else {
            alert('Credenciales incorrectas. Por favor intenta de nuevo.');
        }
    });
});
