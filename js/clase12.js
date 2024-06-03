document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('firstName').addEventListener('input', function() {
        const firstName = this.value.trim();
        const firstNameError = document.getElementById('firstNameError');
        if (!/^[a-zA-Z]+$/.test(firstName)) {
            firstNameError.textContent = 'El nombre no puede contener números';
        } else {
            firstNameError.textContent = '';
        }
    });

    document.getElementById('lastName').addEventListener('input', function() {
        const lastName = this.value.trim();
        const lastNameError = document.getElementById('lastNameError');
        if (!/^[a-zA-Z]+$/.test(lastName)) {
            lastNameError.textContent = 'El apellido no puede contener números';
        } else {
            lastNameError.textContent = '';
        }
    });

    const usernameInput = document.querySelector('input[type="text"]');
    usernameInput.addEventListener('input', function() {
        const username = this.value.trim();
        const usernameError = document.getElementById('usernameError');
        if (username === '') {
            usernameError.textContent = 'El usuario es requerido';
        } else {
            usernameError.textContent = '';
        }
    });

    function validatePasswords() {
        const password1 = document.getElementById("password1").value;
        const password2 = document.getElementById("password2").value;
        const password1Error = document.getElementById("password1Error");
        const password2Error = document.getElementById("password2Error");
        const containsNumber = /\d/.test(password1);
        const containsUpperCase = /[A-Z]/.test(password1);
        const containsSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password1);
        
        password1Error.textContent = "";
        password2Error.textContent = "";

        if (password1 !== password2) {
            password2Error.textContent = "Las contraseñas no coinciden";
        }

        if (!containsNumber || !containsUpperCase || !containsSpecialChar || password1.length < 8) {
            password1Error.textContent = "La contraseña debe contener 8 caracteres,una mayúscula,un número y un carácter especial";
        }
    }

    const passwordInputs = document.querySelectorAll('input[type="password"]');
    passwordInputs.forEach(function(input) {
        input.addEventListener('input', validatePasswords);
    });

    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const firstNameError = document.getElementById('firstNameError').textContent;
        const lastNameError = document.getElementById('lastNameError').textContent;
        const usernameError = document.getElementById('usernameError').textContent;
        const password1Error = document.getElementById('password1Error').textContent;
        const password2Error = document.getElementById('password2Error').textContent;

        if (firstNameError || lastNameError || usernameError || password1Error || password2Error) {
            alert('Por favor, completa todos los campos correctamente.');
        } else {
            const formData = {
                firstName: document.getElementById('firstName').value.trim(),
                lastName: document.getElementById('lastName').value.trim(),
                username: document.querySelector('input[type="text"]').value.trim(),
                password: document.getElementById('password1').value.trim(),
                birthday: document.querySelector('input[type="date"]').value,
                subscribeNewsletter: document.querySelector('input[type="checkbox"]').checked
            };

            localStorage.setItem('formData', JSON.stringify(formData));
            alert('¡Registro exitoso! Los datos han sido guardados en el localStorage.');
        }
    });
});
