document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('firstName').addEventListener('input', function() {
        let firstName = this.value.trim();
        let firstNameError = document.getElementById('firstNameError');
        if (!/^[a-zA-Z]+$/.test(firstName)) {
            firstNameError.textContent = 'El nombre no puede contener números';
        } else {
            firstNameError.textContent = '';
        }
    });

    document.getElementById('lastName').addEventListener('input', function() {
        let lastName = this.value.trim();
        let lastNameError = document.getElementById('lastNameError');
        if (!/^[a-zA-Z]+$/.test(lastName)) {
            lastNameError.textContent = 'El apellido no puede contener números';
        } else {
            lastNameError.textContent = '';
        }
    });
});


function validatePasswords() {
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let password1Error = document.getElementById("password1Error");
    let password2Error = document.getElementById("password2Error");
    let containsNumber = /\d/.test(password1); 
    password1Error.textContent = "";
    password2Error.textContent = "";

    if (password1 !== password2) {
        password2Error.textContent = "Las contraseñas no coinciden";
    }

    if (!containsNumber && password1 !== "") {
        password1Error.textContent = "La contraseña debe contener al menos un numero";
    }
}