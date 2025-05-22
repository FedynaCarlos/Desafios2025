// Solicita el nombre y la edad al usuario
let nombre = prompt("Ingrese su nombre:");
let edadTexto = prompt("Ingrese su edad:");
let edad = parseInt(edadTexto); // Convierte la edad a número

// Verifica que el nombre no esté vacío y que la edad sea un número válido sí o sí.
if (nombre && !isNaN(edad)) {

  if (edad >= 7 && edad < 18) {
    alert("Hola " + nombre + ", tenés una edad ideal para estudiar mucho sobre JavaScript. ¡Aprovechá esta etapa!");

  } else if (edad >= 18 && edad <= 39) {
    alert("Hola " + nombre + ", estás en una edad excelente para crecer profesionalmente. ¡Adelante!");

  } else {
    alert("Hola " + nombre + ", por el momento este desafío está orientado a personas de entre 7 y 39 años.");
  }

} else {
  alert("Por favor, volvé a ingresar datos de forma válida.");
}
