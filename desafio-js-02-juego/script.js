const numeroSecreto = Math.floor(Math.random() * 10) + 1;

function verificarNumero() {
  const input = document.getElementById("input-numero");
  const mensaje = document.getElementById("mensaje");
  const valor = parseInt(input.value);

  if (!isNaN(valor) && valor >= 1 && valor <= 10) {
    if (valor === numeroSecreto) {
      mensaje.textContent = "🎉 ¡Correcto!. El número secreto era " + numeroSecreto;
      mensaje.style.color = "green";
    } else {
      mensaje.textContent = "❌ No es correcto. El número secreto era " + numeroSecreto;
      mensaje.style.color = "red";
    }
  } else {
    mensaje.textContent = "⚠️ Ingresá un número válido entre 1 y 10.";
    mensaje.style.color = "green";
  }
}
