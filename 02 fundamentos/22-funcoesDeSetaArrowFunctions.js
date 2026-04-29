// Funções de Seta (Arrow Functions)
// As funções de seta, ou arrow functions, são uma forma mais concisa de escrever funções em JavaScript.
// Elas foram introduzidas no ECMAScript 6 (ES6) e possuem uma sintaxe mais curta em comparação com as funções tradicionais.

// Exemplo 01: Função de seta simples
const saudacao = () => {
  return "Olá mundo!";
};

console.log(saudacao()); // Chama a função saudacao e exibe o resultado

// Exemplo 02:
const soma = (a, b) => {
  return a + b;
};
console.log(soma(5, 3));

// Exemplo 03:
const multiplicacao = (a, b) => a * b; // Sintaxe mais curta para funções de uma única expressão
console.log(multiplicacao(4, 6));
