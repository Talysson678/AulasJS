// tipos primitivos

// string
// number
// boolean
// null
// undefined
// symbol

// string: Representa uma sequência de caracteres. Pode ser usada para armazenar texto, como nomes, mensagens ou qualquer outra informação textual. As strings são delimitadas por aspas simples (' '), aspas duplas (" ") ou crases (` `) para template literals.
let nome = "Gabriel Amorim"; //a variável nome é declarada e atribuída o valor "João". Essa variável armazena uma string que representa o nome de uma pessoa.
let nome2 = "Talysson"; //a variável nome2 é declarada e atribuída o valor 'Maria'. Essa variável armazena uma string que representa o nome de outra pessoa.
let nome3 = `Thiago`; //a variável nome3 é declarada e atribuída o valor `Carlos`. Essa variável armazena uma string que representa o nome de mais uma pessoa. As crases são usadas para criar template literals, que permitem incluir expressões dentro da string usando a sintaxe ${expressão}.
console.log(nome); //a função console.log é usada para imprimir o valor da variável nome no console. Nesse caso, ela imprimirá "João".
console.log(nome2); //a função console.log é usada para imprimir o valor da variável nome2 no console. Nesse caso, ela imprimirá "Maria".
console.log(nome3); //a função console.log é usada para imprimir o valor da variável nome3 no console. Nesse caso, ela imprimirá "Carlos".

// number: Representa valores numéricos, incluindo inteiros e números de ponto flutuante. Os números podem ser usados para realizar cálculos matemáticos, como adição, subtração, multiplicação e divisão.
let idade = 30; //a variável idade é declarada e atribuída o valor 30. Essa variável armazena um número que representa a idade de uma pessoa.
let altura = 1.75; //a variável altura é declarada e atribuída o valor 1.75. Essa variável armazena um número de ponto flutuante que representa a altura de uma pessoa em metros.
console.log(idade); //a função console.log é usada para imprimir o valor da variável idade no console. Nesse caso, ela imprimirá 30.
console.log(altura); //a função console.log é usada para imprimir o valor da variável altura no console. Nesse caso, ela imprimirá 1.75.

// boolean: Representa um valor lógico que pode ser verdadeiro (true) ou falso (false). Os booleanos são usados para expressar condições e tomar decisões em programas.
let eEstudante = true;
let eCasado = false;
console.log(eEstudante); //a função console.log é usada para imprimir o valor da variável eEstudante no console. Nesse caso, ela imprimirá true, indicando que a pessoa é um estudante.
console.log(eCasado); //a função console.log é usada para imprimir o valor da variável eCasado no console. Nesse caso, ela imprimirá false, indicando que a pessoa não é casada.

// undefined: Representa a ausência de um valor atribuído a uma variável. Quando uma variável é declarada, mas não recebe um valor, ela é automaticamente atribuída o valor undefined.
let endereco;
console.log(endereco); //a função console.log é usada para imprimir o valor da variável endereco no console. Nesse caso, ela imprimirá undefined, indicando que a variável foi declarada, mas ainda não recebeu um valor.

// null: Representa a ausência intencional de um valor. É usado para indicar que uma variável não tem um valor válido ou que um objeto não existe.
let telefone = null; //a variável telefone é declarada e atribuída o valor null. Isso indica que a variável telefone não tem um valor válido ou que um número de telefone não foi fornecido.
console.log(telefone); //a função console.log é usada para imprimir o valor da variável telefone no console. Nesse caso, ela imprimirá null, indicando que a variável foi explicitamente definida como nula.

// symbol: Representa um valor único e imutável. Os símbolos são usados para criar identificadores únicos, especialmente em objetos, para evitar conflitos de nomes.
let id = Symbol("id"); //a variável id é declarada e atribuída um valor do tipo symbol usando a função Symbol(). O argumento "id" é uma descrição opcional que pode ser usada para identificar o símbolo. Cada vez que a função Symbol() é chamada, ela retorna um valor único, mesmo que a descrição seja a mesma.
console.log(id); //a função console.log é usada para imprimir o valor da variável id no console. O valor impresso será algo como Symbol(id), indicando que é um símbolo com a descrição "id".
