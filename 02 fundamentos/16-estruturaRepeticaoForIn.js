// Estruturas de repetição - for in

// for in- Lê os índices ou chaves do objeto

const pessoa = {
  nome: "Gabriel Santos",
  idade: 16,
  Profissão: "Estudante",
};

for (const atributo in pessoa) {
  console.log("O atributo " + atributo + " = " + pessoa[atributo]);
}
