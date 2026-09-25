// validarCorreo(correo) → boolean
// Valida el formato de un correo electrónico
// Devuelve true si el formato es válido y false si no lo es
function validarCorreo(correo) {
  const expresion = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let resultado = expresion.test(correo);
  return resultado;
}

// soloLetras(texto) → boolean
// Valida que el texto contenga únicamente letras mayúsculas o minúsculas incluyendo vocales acentuadas
// Devuelve true si cumple y false si contiene otros caracteres
function soloLetras(texto) {
  const expresion = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+$/;
  let resultado = expresion.test(texto);
  return resultado;
}

// validarLongitud(numero, maxLongitud) → boolean
// Valida que la longitud de un número no supere el máximo indicado
// Devuelve true si está dentro del límite y false si lo supera
function validarLongitud(numero, maxLongitud) {
  let num = numero.toString();

  if (num.length <= maxLongitud) {
    return true;
  } else {
    return false;
  }
}

// calcularEdad(fechaNacimiento) → número entero
// Calcula la edad de una persona a partir de su fecha de nacimiento
// Devuelve la edad actual como un número entero
function calcularEdad(fechaNacimiento) {
  const [anio, mes, dia] = fechaNacimiento.split("-");
  const anioActual = new Date().getFullYear();
  const mesActual = new Date().getMonth() + 1;
  const diaActual = new Date().getDate();

  let edad = anioActual - parseInt(anio);

  if (mesActual < parseInt(mes) || (mesActual === parseInt(mes) && diaActual < parseInt(dia))) {
    edad--;
  }

  return edad;
}

// esMayorDeEdad(fechaNacimiento) → boolean
// Comprueba si una persona tiene 18 años o más a partir de su fecha de nacimiento
// Devuelve true si es mayor de edad y false si es menor de edad
function esMayorDeEdad(fechaNacimiento) {
  let edad = calcularEdad(fechaNacimiento);

  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

// validarPassword(password) → boolean
// Valida que una contraseña tenga mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial
// Devuelve true si cumple todos los requisitos y false si no los cumple
function validarPassword(password) {
  let resultado = false;

  if (password.length >= 8) {
    const expresion = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9\s_]).+$/;
    resultado = expresion.test(password);
    return resultado;
  }

  return resultado;
}

// validarCamposVacios(campos) → boolean
// Revisa un conjunto de campos y comprueba que ninguno se encuentre vacío
// Devuelve true si todos contienen información y false si encuentra un campo vacío
function validarCamposVacios(campos) {
  for (let i = 0; i < campos.length; i++) {
    if (campos[i].trim() == "") {
      return false;
    }
  }

  return true;
}

// validarTelefono(telefono) → boolean
// Valida que un número de teléfono esté formado exactamente por 10 dígitos
// Devuelve true si cumple el formato y false si hay diferente cantidad de dígitos o si aparecen letras o símbolos que no sean dígitos
function validarTelefono(telefono) {
  const expresion = /^[0-9]{10}$/;

  let resultado = expresion.test(telefono);

  return resultado;
}
