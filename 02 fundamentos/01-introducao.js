function soma(a, b) {
  //essa função recebe dois parâmetros, a e b, e retorna a soma deles.
  return a + b; //a palavra-chave return é usada para retornar o resultado da soma. Quando a função é chamada, ela executa o código dentro dela e retorna o valor calculado.
}

const numero1 = 5; //a variável numero1 é declarada e atribuída o valor 5. Essa variável será usada como um dos argumentos para a função soma.
const numero2 = 10; //a variável numero2 é declarada e atribuída o valor 10. Essa variável será usada como o outro argumento para a função soma.

const resultado = soma(numero1, numero2); //a função soma é chamada com os argumentos numero1 e numero2. O resultado da soma é armazenado na variável resultado.
console.log(`A soma de ${numero1} e ${numero2} são ${resultado}.`); //a função console.log é usada para imprimir a mensagem no console. A mensagem inclui os valores de numero1, numero2 e resultado usando template literals (as crases ``) para formatar a string de forma mais legível.
