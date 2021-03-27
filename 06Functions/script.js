// Aula 26 - Functions
function createPhrases() { // declara uma função
  console.log("Estudar é muito bom");
  console.log("Paciência e persistência");
  console.log("Revisão é mãe do aprendizado");
}

createPhrases(); // chamando a função acima

// Aula 27 - Argumentos e parâmetros
const sum = function(item1, item2) {
  console.log(item1 + item2); // estes itens são parâmetros
}

sum(2, 3); // enviando argumentos para a função

// Aula 28 - Retornando valores dentro da função
const sumTwo = function(parameters1, parameters2) {
  let total = parameters1 + parameters2;
  return total
}

let argument1 = 34;
let argument2 = 25;

console.log(`O número 1 é ${argument1} e o número 2 é ${argument2}`);
console.log(`A soma dos dois números é ${sumTwo(argument1, argument2)}`);

// Aula 29 - Outra maneira de entender funções
function fazerSuco(fruta1, fruta2) {
  return "Suco de " + fruta1 + fruta2;
}

const copo = fazerSuco("banana", "maça");

console.log(copo);

// Aula 30 - Function scope
let subject = "create video";

// se não informamos o parâmetro, o subject se torna uma variável só
function createThink(subject) {
  subject = "study"
  return subject;
}

console.log(createThink(subject));
console.log(subject);
