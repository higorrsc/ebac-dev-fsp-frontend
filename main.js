let linhas = "";

const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji aprovado" />';
const imgReprovado =
  '<img src="./images/reprovado.png" alt="Emoji reprovado" />';

const form = document.getElementById("form-atividade");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputNomeAtividade = document.getElementById("nome-atividade");
  const inputNotaAtividade = document.getElementById("nota-atividade");
  const corpoTabela = document.querySelector("tbody");

  let linha = "<tr>";
  linha += `<td>${inputNomeAtividade.value}</td>`;
  linha += `<td>${inputNotaAtividade.value}</td>`;
  linha += `<td>${
    inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado
  }</td>`;
  linha += "</tr>";

  linhas += linha;

  corpoTabela.innerHTML = linhas;

  inputNomeAtividade.value = "";
  inputNotaAtividade.value = "";
});
