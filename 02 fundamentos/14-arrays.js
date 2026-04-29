// Arrays são objetos que armazena listas de valores em uma única variável.

// Declarando um array
let frutas = ["Maçã", "Banana", "Laranja"];

// Acessando elementos do array
console.log(frutas[2]);

// Adicionando um elemento ao final do array
frutas.push("Uva");
console.log(frutas);

// Removendo o último elemento do array
let ultimaFruta = frutas.pop();
console.log(ultimaFruta);
console.log(frutas);
