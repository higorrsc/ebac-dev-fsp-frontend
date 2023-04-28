function multiplicacao(fatorA: number, fatorB: number): number {
  return fatorA * fatorB;
}

function saudacao(nome: string): string {
  return `Olá ${nome}`;
}

let fatorA: number = 3;
let fatorB: number = 15;
const produto: number = multiplicacao(fatorA, fatorB);
console.log(`A multiplicação de ${fatorA} por ${fatorB} é ${produto}`);

let nome: string = "Higor";
console.log(saudacao(nome));
