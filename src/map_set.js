// map
let meuMap = new Map();
meuMap.set("nome", "higor");
meuMap.set("stack", "html, css, js");
console.log(meuMap);

const nome = meuMap.get("nome");
console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has("nome"));
console.log(meuMap.has("sobrenome"));

// meuMap.clear();
// console.log(meuMap.size);

for (let chave of meuMap.keys()) {
  console.log(chave);
}
for (let valor of meuMap.values()) {
  console.log(valor);
}
for (let entrada of meuMap.entries()) {
  console.log(entrada);
}
for (let [chave, valor] of meuMap.entries()) {
  console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack");
console.log(meuMap);

// set
const cpfs = new Set();
cpfs.add("38496349063");
cpfs.add("34033850007");
cpfs.add("36750917089");
console.log(cpfs);
console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((valor) => {
  console.log(valor);
});

const array = [
  "Higor Cruz",
  "Thaís Cruz",
  "Erick Cruz",
  "Vinícius Cruz",
  "Thaís Cruz",
  "Erick Cruz",
];
const arrayComoSet = new Set([...array]);
console.log(arrayComoSet);

const arraySemItensDuplicados = [...arrayComoSet];
console.log(arraySemItensDuplicados);
