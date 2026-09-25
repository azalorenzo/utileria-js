function iniciarSesion() {
  document.getElementById("alertaCorreo").innerHTML = "";
  document.getElementById("alertaPassword").innerHTML = "";
  let correo = document.getElementById("inputCorreo").value;
  let password = document.getElementById("inputContraseña").value;

  if (!validarCamposVacios([correo, password])) {
    document.getElementById("alertaCorreo").innerHTML = "Todos los campos son obligatorios";
  } else {
    if (!validarCorreo(correo)) {
      document.getElementById("alertaCorreo").innerHTML = "El formato del correo electrónico no es válido";
    } else if (!validarPassword(password)) {
      document.getElementById("alertaPassword").innerHTML = "El formato de la contraseña no es válido";
    } else if (!(correo == "azael@gmail.com")) {
      document.getElementById("alertaCorreo").innerHTML = "El correo electrónico no es válido";
    } else if (!(password == "Azael205#")) {
      document.getElementById("alertaPassword").innerHTML = "La contraseña no es válida";
    } else {
      window.location.href = "index.html";
    }
  }
}
