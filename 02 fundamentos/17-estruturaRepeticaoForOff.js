// Estruturas de repetição - for of

// for of - Lê os valores dos elementos do array

const listaDeEmails = [
  "email1@example.com",
  "email2@example.com",
  "email3@example.com",
];
for (let email of listaDeEmails) {
  console.log(`Enviando email para: ${email}`);
}

// Exemplo de uso do for...of com uma string
const nome = "Gabriel Santos";
for (let char of nome) {
  console.log(char);
}
