const frutas = ["banana", "maçã", "laranja", "uva", "abacaxi"];
console.log(frutas.length);

// Desafio 02 for
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// Desafio 03 for of...in
let usuario = {
  nome: "Gabriel",
  email: "gabriel@example.com",
};
for (let porta in usuario) {
  console.log(porta + ": " + usuario[porta]);
}

// Desafio 04 for...of
for (let fruta of frutas) {
  console.log(fruta);
}

// Desafio 5
function encontrarFruta(fruta) {
  for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] === fruta) {
      return "Fruta encontrada:";
    }
  }
  return "Fruta não encontrada";
}
console.log(encontrarFruta("banana"));
console.log(encontrarFruta("Coco"));
