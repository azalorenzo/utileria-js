function validar() {
  document.getElementById("advertenciaNombre").innerHTML = "";
  document.getElementById("advertenciaCorreo").innerHTML = "";
  document.getElementById("advertenciaTelefono").innerHTML = "";
  document.getElementById("advertenciaNumero").innerHTML = "";
  document.getElementById("advertenciaFechaNacimiento").innerHTML = "";
  document.getElementById("advertenciaPassword").innerHTML = "";

  let nombre = document.getElementById("inputNombre").value;
  let correo = document.getElementById("inputCorreo").value;
  let telefono = document.getElementById("inputTelefono").value;
  let numero = document.getElementById("inputNumero").value;
  let fechaNacimiento = document.getElementById("inputFechaNacimiento").value;
  let password = document.getElementById("inputPassword").value;

  if (!validarCamposVacios([nombre, correo, telefono, numero, fechaNacimiento, password])) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Todos los campos son obligatorios",
    });
  } else {
    if (!soloLetras(nombre)) {
      document.getElementById("advertenciaNombre").innerHTML = "El nombre solo puede contener letras";
    } else if (!validarCorreo(correo)) {
      document.getElementById("advertenciaCorreo").innerHTML = "El correo electrónico no es válido";
    } else if (!validarTelefono(telefono)) {
      document.getElementById("advertenciaTelefono").innerHTML = "El teléfono debe contener 10 dígitos";
    } else if (!validarLongitud(numero, 8)) {
      document.getElementById("advertenciaNumero").innerHTML =
        "El número de identificación no puede tener más de 8 dígitos";
    } else if (!esMayorDeEdad(fechaNacimiento)) {
      document.getElementById("advertenciaFechaNacimiento").innerHTML = "Debes ser mayor de edad para registrarte";
    } else if (!validarPassword(password)) {
      document.getElementById("advertenciaPassword").innerHTML = "La contraseña no cumple con los requisitos";
    } else {
      let edad = calcularEdad(fechaNacimiento);

      Swal.fire({
        title: "Datos registrados",
        html: `
        Nombre: ${nombre}<br>
        Correo: ${correo}<br>
        Telefono: ${telefono}<br>
        Numero de identificación: ${numero}<br>
        Fecha de nacimiento: ${fechaNacimiento}<br>
        Edad: ${edad} años
        `,
        icon: "success",
      });
    }
  }
}
