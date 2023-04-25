function Pessoa(nome) {
  this.nome = nome;
  this.dizOi = function () {
    console.log(this.nome + " diz olá");
  };
}

function Funcionario(nome, cargo, salario) {
  this.cargo = cargo;
  //   this.salario = salario;
  let _salario = salario;

  this.getSalario = function () {
    return `O salário de ${this.nome} é ${_salario}`;
  };

  this.setSalario = function (valor) {
    if (typeof valor === "number") {
      _salario = valor;
    }
  };

  this.dizCargo = function () {
    console.log(this.cargo);
  };

  Pessoa.call(this, nome);
}

const funcionario1 = new Funcionario("Maria", "dev front-end", 5000);
const pessoa = new Pessoa("Gian");

funcionario1.dizOi();
funcionario1.dizCargo();

funcionario1.setSalario("mil");

console.log(funcionario1.getSalario());
