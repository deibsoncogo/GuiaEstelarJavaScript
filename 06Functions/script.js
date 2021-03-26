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
