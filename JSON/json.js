const user = {
  nome: "Alexandre",
  idade: 60,
  filhos: 1,
  filhas: 1,
  hobbies: ["Programação", "Automação", "series de filmes"],
  casado: true,
  endereco: {
    logradouro: "Rua dos bobos",
    numero: 0,
  },
  profissao: "Administrador",
};

console.log(user);

const userJson = JSON.stringify(user); //stringify
console.log(userJson);
console.log(typeof userJson);

const userJsontoJS = JSON.parse(userJson); //parse - transforma um json em um objectoJS

console.log(userJsontoJS);
console.log(typeof userJsontoJS);
