// Botones principales
const btnLogin = document.getElementById("Login");
const btnRegister = document.getElementById("Register");

// Popups
const popupLogin = document.getElementById("popup-login");
const popupRegister = document.getElementById("popup-register");

// Botones de cerrar
const closeLogin = document.getElementById("closeLogin");
const closeRegister = document.getElementById("closeRegist");

// Mostrar popups
btnLogin.addEventListener("click", () => popupLogin.style.display = "flex");
btnRegister.addEventListener("click", () => popupRegister.style.display = "flex");

// Cerrar popups
closeLogin.addEventListener("click", () => popupLogin.style.display = "none");
closeRegister.addEventListener("click", () => popupRegister.style.display = "none");

//Casos particulares de pop-up para las acciones
//abrir
function showMessage(title, body) {
  document.getElementById("message-title").textContent = title;
  document.getElementById("message-body").textContent = body;
  document.getElementById("popup-message").style.display = "flex";
}

//cerrar
document.getElementById("closeMessage").addEventListener("click", () => {
  document.getElementById("popup-message").style.display = "none";
});

// Registro
const RegistRaR = document.getElementById("registerbtn"); 
RegistRaR.addEventListener("click", async () => {
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const telefono = document.getElementById("telefono").value;
  const contra = document.getElementById("contrasena").value;

  try {
    const res = await fetch("/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, correo, telefono, contra })
    });

    const data = await res.text();
    showMessage("Registro", "Registro exitoso");
  } catch (err) {
    console.error(err);
    showMessage("Error", "Error al registrarse");
  }
});

// Login
const LoginRaR = document.getElementById("loginbtn");
LoginRaR.addEventListener("click", async () => {
  const ident = document.getElementById("ident").value;
  const contra = document.getElementById("contra").value;

  try {
    const res = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo: ident, telefono: ident, contra })
    });

    if (res.ok) {
      window.location.href = "/tabla";
    } else {
      const data = await res.text();
      showMessage("Error", data);
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    }
  } catch (err) {
    console.error(err);
    showMessage("Error", "Error al iniciar sesión");
  }
});