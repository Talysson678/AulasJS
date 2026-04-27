let pessoa = {
  nome: "Gabriel Amorim",
  idade: 30,
  profissao: "Desenvolvedor",
  taTrabalhando: true,
  saudacao: function () {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  },
};

// Modificando propriedades
pessoa.idade = 31;
pessoa.profissao = "Desenvolvedor Sênior";
console.log(pessoa); //a propriedade 'idade' do objeto pessoa é modificada para 31. A função console.log é usada para imprimir o valor atualizado da propriedade 'idade' no console, que agora será 31.

// adicionando novas propriedades
pessoa.cidade = "São Paulo";

console.log(pessoa);

// Deletando propriedades
delete pessoa.taTrabalhando;
console.log(pessoa); //a propriedade 'taTrabalhando' do objeto pessoa é deletada usando a palavra-chave delete. A função console.log é usada para imprimir o valor atualizado do objeto pessoa no console, que agora não incluirá mais a propriedade 'taTrabalhando'.
