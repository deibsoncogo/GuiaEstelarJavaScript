// Aula 47 - Expressões e operadores
console.log(`-> Aula 47 - Expressões e operadores`);

let aula47 = 1; // exemplo de expressão

aula47 + 1; // operador do tipo binário

++aula47; // operador do tipo unário

aula47 >= 0 ? sinal = true : sinal = false; // operador do tipo ternário

console.log(`O número é positivo? ${sinal}`);

(function() {
  console.log("Hello word!");
}) ();

// Aula 48 - New
console.log(`\n-> Aula 48 - New`);

let name48 = new String("Eduardo"); // cria um objeto tipo texto
name48.surName = "Ferreira"; // adiciona um elemento

let age48 = new Number(19); // cria um objeto tipo número

let date48 = new Date("2002-03-05"); // cria um objeto tipo data

// vai imprimir o objeto com suas informações
console.log(name48, "\n", name48.surName, "\n", age48, "\n", date48);

// vai imprimir somente as informações
console.log(`${name48} \n ${name48.surName} \n ${age48} \n ${date48}`);
