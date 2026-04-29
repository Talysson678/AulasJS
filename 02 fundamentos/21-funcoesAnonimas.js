// Funções Anônimas
// São funções sem nome, geralmente atribuidas a variaveis ou passadas como argumentos para outras funções

// Exemplo: Atribuindo uma função anônima atribuida a uma variável
const saudacao = function (nome) {
  return `Olá, ${nome}! Bem-vindo!`;
};

console.log(saudacao("Gabriel")); // Chama a função saudacao passando o argumento "Gabriel"

// Exemplo 2: Passando uma função anônima como argumento para outra função
setTimeout(function () {
  console.log("Essa mensagem será exibida após 2 segundos");
}, 2000);
