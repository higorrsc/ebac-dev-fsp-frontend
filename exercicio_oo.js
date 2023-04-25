// Classe de Abstração
function Pessoa(nome, tipo) {
  this.nome = nome;

  let _tipo = tipo;

  this.getTipo = function () {
    return _tipo;
  };

  this.setTipo = function (tipoPessoa) {
    if (typeof tipoPessoa === "string" && tipoPessoa.length === 1) {
      _tipo = tipoPessoa;
    }
  };
}

// Classe 01 - Herdeira
function Fisica(nome, tipo, cpf, sexo) {
  this.cpf = cpf;
  this.sexo = sexo;
  Pessoa.call(this, nome, tipo);
}

// Classe 02 - Herdeira
function Juridica(nome, nomeFantasia, tipo, cnpj) {
  this.cnpj = cnpj;
  this.nomeFantasia = nomeFantasia;
  Pessoa.call(this, nome, tipo);
}

// Instäncia 01 da Classe 01
const empresa1 = new Juridica(
  "Empresa XPTO",
  "XPTO Eventos",
  "J",
  "00000000000000"
);
empresa1.setTipo("MEI");

// Instância 01 da Classe 02
const empregado1 = new Fisica("John Doe", "F", "00000000000", "M");
empregado1.setTipo(null);

// Instância 02 da Classe 02
const empregado2 = new Fisica("Jane Doe", "F", "00000000001", "F");
empregado2.setTipo("PJ");

// Retorno dos valores atribuídos
console.log("Empresa: " + empresa1.nomeFantasia + " (" + empresa1.nome + ")");
console.log("CNPJ: " + empresa1.cnpj);
console.log("Tipo: " + empresa1.getTipo());
console.log();
console.log("Empregado(a) 01: " + empregado1.nome);
console.log("Tipo: " + empregado1.getTipo());
console.log("CPF: " + empregado1.cpf);
console.log("Sexo: " + empregado1.sexo);
console.log();
console.log("Empregado(a) 02: " + empregado2.nome);
console.log("Tipo: " + empregado2.getTipo());
console.log("CPF: " + empregado2.cpf);
console.log("Sexo: " + empregado2.sexo);
