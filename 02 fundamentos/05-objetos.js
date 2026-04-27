// objetos são coleções de propriedades e métodos. Eles permitem armazenar e organizar dados relacionados em uma única estrutura. Um objeto é criado usando chaves {} e pode conter pares de chave-valor, onde a chave é uma string que representa o nome da propriedade e o valor pode ser qualquer tipo de dado, incluindo outros objetos ou funções.

// exemplo de objeto
let pessoa = {
  nome: "Gabriel Amorim",
  idade: 30,
  profissao: "Desenvolvedor",
  taTrabalhando: true,
  saudacao: function () {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  },
};

// Acessando propriedades
console.log(pessoa.nome); //acessando a propriedade 'nome'
