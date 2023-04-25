const minhaFuncao = () => "Diz olá!";
console.log(minhaFuncao());

const retornaUmCarro = () => ({
  modelo: "Ka",
  fabricante: "Ford",
});
console.log(retornaUmCarro());

const alunos = ["Gustavo", "Julia", "Paula", "Wagner"];
const alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: "Frontend",
  };
});
alunos2.push({
  nome: "Lucio",
  curso: "Backend",
});
const filtraAlunosDeBackEnd = (aluno) => aluno.curso === "Backend";
const alunosDeBackEnd = alunos2.filter(filtraAlunosDeBackEnd);
console.log(alunosDeBackEnd);

const carro = {
  velocidadeAtual: 40,
  acelerar: function () {
    console.log(this);
    this.velocidadeAtual += 10;
  },
  frear: () => {
    console.log(this);
    this.velocidadeAtual -= 10;
  },
};
carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual);
