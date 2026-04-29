// Escopo em JavaScript
// O escopo em JavaScript refere-se à visibilidade e acessibilidade de variáveis e funções em diferentes partes do código.
// Existem três tipos principais de escopo: global, local (ou de função) e de bloco.

// Escopo Global
let escopoGlobal = "Eu sou uma variável global";

function mostrarEscopoGlobal() {
  let escopoLocal = "Eu sou uma variável local";
  console.log(escopoGlobal); // Acessa a variável global
}

mostrarEscopoGlobal(); //Chama a função para mostrar o escopo global
console.log(escopoLocal); // Isso causará um erro, pois escopoLocal não é acessível fora da função
console.log(escopoGlobal); // Acessa a variável global fora da função
