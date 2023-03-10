const frmVerificar = document.getElementById("frmVerificar");
const txtPrimeiroNumero = document.getElementById("txtPrimeiroNumero");
const txtSegundoNumero = document.getElementById("txtSegundoNumero");

let validado = false;

function validaNumeros(primeiroNumero, segundoNumero) {
  return parseFloat(segundoNumero) > parseFloat(primeiroNumero);
}

frmVerificar.addEventListener("submit", function (e) {
  e.preventDefault();

  const msgResult = document.querySelector(".msgResult");
  msgResult.classList.remove("valid");
  msgResult.classList.remove("invalid");

  if (validaNumeros(txtPrimeiroNumero.value, txtSegundoNumero.value)) {
    msgResult.innerHTML = "O segundo número é maior que o primeiro";
    msgResult.classList.add("valid");
  } else {
    msgResult.innerHTML = "O segundo número não é maior que o primeiro";
    msgResult.classList.add("invalid");
  }
});
