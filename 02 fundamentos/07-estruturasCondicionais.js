// Estruturas condicionais em JavaScript
// if, else if, else,

// Exemplo 1: Verificar se um número é positivo, negativo ou zero
let numero1 = -5;

if (numero1 > 0) {
  console.log("é um número positivo");
} else if (numero1 < 0) {
  console.log("é um número negativo");
} else {
  console.log("é zero");
}

console.log(numero1);

// Exemplo 2: Verificar se uma pessoa é maior de idade
let idade = 18;

if (idade < 18) {
  console.log("é menor de idade");
} else if (idade >= 18 && idade < 65) {
  console.log("é maior de idade");
} else {
  console.log("é um idoso");
}

console.log(idade);
