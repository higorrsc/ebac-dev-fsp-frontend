// gerar número interio aleatoriamente
function notaAleatoria(minimo, maximo) {
  return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

// array com os nomes dos alunos
const nomes = ["John Snow", "Daenerys Targaryen", "Khal Drogo", "Ygritte"];

// gerar a nota aleatoriamente
const notas = [
  notaAleatoria(0, 10),
  notaAleatoria(0, 10),
  notaAleatoria(0, 10),
  notaAleatoria(0, 10),
];

// array final iniciado vazio
const alunos = [];

// nota média de corte
const media = 6;

// filtrar alunos com nota maior ou igual a média
function filtrarAlunosAcimaMedia(alunoNota) {
  return alunoNota.nota >= media;
}

// verificar se há a mesma quantidade de alunos e notas para prosseguir
if (nomes.length === notas.length) {
  //   for (let i = 0; i < nomes.length; i++) {
  //     alunos.push({
  //       nome: nomes[i],
  //       nota: notas[i],
  //     });
  //   }
  nomes.forEach(function (nome, indice) {
    alunos.push({
      nome: nome,
      nota: notas[indice],
    });
  });
  console.log("|-- Aluno(s) cadastrados --|");
  console.log(alunos);
  const alunosAcimaMedia = alunos.filter(filtrarAlunosAcimaMedia);
  console.log();
  if (alunosAcimaMedia.length > 0) {
    console.log(`|-- Aluno(s) com nota igual ou superior a ${media} --|`);
    console.log(alunosAcimaMedia);
  } else {
    console.log(`Não há aluno com nota igual ou superior a ${media}!`);
  }
} else {
  console.log("Arrays com tamanhos diferentes! Não é permitido prosseguir!");
}
