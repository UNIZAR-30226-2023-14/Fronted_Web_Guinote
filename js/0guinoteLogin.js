const loginButton = document.getElementById('botonInicioSesion')
const registerButton = document.getElementById('botonRegistro')

const divBotonesInciales = document.getElementById('botonesIniciales')
const divInicioSesion = document.getElementById('inicioSesion')
const divRegistro = document.getElementById('registro')

const username = document.getElementById('username')
const password = document.getElementById('password')
const buttonLogin = document.getElementById('button1')

const usernameReg = document.getElementById('usernameReg')
const passwordReg = document.getElementById('passwordReg')
const passwordReg2 = document.getElementById('passwordReg2')
const buttonSingIn = document.getElementById('button2')

divInicioSesion.style.display = "none"
divRegistro.style.display = "none"

loginButton.addEventListener("click", function() {
    divBotonesInciales.style.display = "none";
    divInicioSesion.style.display = "flex";
  });

registerButton.addEventListener("click", function() {
    divBotonesInciales.style.display = "none";
    divRegistro.style.display = "flex";
  });

buttonLogin.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }

    console.log(data)
    window.location.href = 'guinote.html';
})

buttonSingIn.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: usernameReg.value,
        password: passwordReg.value,
        password2: passwordReg2.value
    }

    console.log(data)
    window.location.href = 'guinote.html';
})