// foreach
const redesSociais = ["Facebook", "Instagram", "Twitter"];

for (let i = 0; i < redesSociais.length; i++) {
  console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
}

redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`);
});

// map
const alunos = ["Gustavo", "Julia", "Paula", "Wagner"];

const alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: "Frontend",
  };
});
console.log(alunos2);

// find
const paula = alunos2.find(function (itemAtual) {
  return itemAtual.nome == "Paula";
});
console.log(paula);

// findIndex
const indiceDaPaula = alunos2.findIndex(function (itemAtual) {
  return itemAtual.nome == "Paula";
});
console.log(indiceDaPaula);

// every
alunos2.push({
  nome: "Lucio",
  curso: "Backend",
});
const todosAlunosSaoDeFrontEnd = alunos2.every(function (itemAtual) {
  return itemAtual.curso === "Frontend";
});
console.log(todosAlunosSaoDeFrontEnd);

// some
const existeAlgumAlunoDeBackEnd = alunos2.some(function (itemAtual) {
  return itemAtual.curso === "Backend";
});
console.log(existeAlgumAlunoDeBackEnd);

// filter
function filtraAlunosDeBackEnd(aluno) {
  return aluno.curso === "Backend";
}
const alunosDeBackEnd = alunos2.filter(filtraAlunosDeBackEnd);
console.log(alunosDeBackEnd);

// reduce
const nums = [10, 20, 30, 10];
const soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);

let somaComFor = 0;
for (let i = 0; i < nums.length; i++) {
  somaComFor += nums[i];
}
console.log(somaComFor);

const nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += `${itemAtual.nome} `;
  return acumulador;
}, "");
console.log(nomesDosAlunos);
