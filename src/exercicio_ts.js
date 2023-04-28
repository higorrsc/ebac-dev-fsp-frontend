"use strict";
function multiplicacao(fatorA, fatorB) {
    return fatorA * fatorB;
}
function saudacao(nome) {
    return `Olá ${nome}`;
}
let fatorA = 3;
let fatorB = 15;
const produto = multiplicacao(fatorA, fatorB);
console.log(`A multiplicação de ${fatorA} por ${fatorB} é ${produto}`);
let nome = "Higor";
console.log(saudacao(nome));
