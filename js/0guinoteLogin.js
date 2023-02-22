const loginButton = document.getElementById('botonInicioSesion')
const registerButton = document.getElementById('botonRegistro')

const divBotonesInciales = document.getElementById('botonesIniciales')
const divInicioSesion = document.getElementById('inicioSesion')


const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

divInicioSesion.style.display = "none"

loginButton.addEventListener("click", function() {
    divBotonesInciales.style.display = "none";
    divInicioSesion.style.display = "flex";
  });

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }

    console.log(data)
})