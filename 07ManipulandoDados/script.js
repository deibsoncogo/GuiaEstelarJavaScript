// Aula 35 - Prototype
console.log("Deibson Cogo".length); // vai contar a quantidade de caracteres

console.log(23.0.__proto__); // devemos tomar cuidado com ponto nos números

// Aula 36 - Type conversion ou coersion
console.log("9" + 5); // coersion transformando o 5 em string

console.log(Number("9") + 5); // conversion transformando o 9 em número

// Aula 37 - Strings em números
let isString = "123";
console.log(Number(isString), typeof Number(isString)); // transforma a string em número

let isNumber = 321;
console.log(String(isNumber), typeof String(isNumber)); // transforma o número em string

// Aula 38 - Contando caracteres e dígitos
let tell = [
  "Paralelepípedo", 1234, 8, "Deibson Henrique Cogo", 5,
];

console.log(`Existe ${tell.length} palavra${tell.length > 1 ? `s` : ``} salva`);

for (let f of tell) {
  let a = String(f).length;
  console.log(` * ${f} contem ${a} carácter${a > 1 ? `es` : ``}`);
}

// Aula 39 - Casas decimais
let numberBroken = 534.786290;

// a utilização de virgula transforma o número em string
console.log(numberBroken
  .toFixed(2) // arredonda para duas casas decimais
  .replace(".", ",") // troca um item por outro
);

// Aula 40 - Maiúsculas e minúsculas
let word = "ProGramAr é muITO BAcaNA!";

console.log(word.toLowerCase()); // deixa tudo minusculo
console.log(word.toUpperCase()); // deixa tudo maiúsculo

console.log(
  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
); // deixa somente a primeira letra em maiúsculo

// Aula 41 - Encontrando palavras em frases
let phrase = "Eu quero viver o amor!";
console.log(phrase.includes("amor")); // ele é case-sensitive

// Aula 42 - Separando strings
let onePhrase = "Eu quero viver o Amor!";

let removeSpace = onePhrase.split(" "); // cria um array sem espaço
let endPhrase = removeSpace.join("_"); // junta os itens de um array

console.log(endPhrase.toLowerCase());

// Aula 43 - Criando array com construtor
let arrayConstructor = new Array("a", "b", "c");
console.log(arrayConstructor); // este array foi criado com o construtor

let arrayDeclaration = ["a", "b", "c"];
console.log(arrayDeclaration); // este array foi criado com uma declaração

// Aula 44 - Elementos do Array
eleArray = [
  "Primero é o elemento zero no tipo string",
  {
    type: "Segundo é um objeto dentro do array",
  },
  function tudoDentro() {
    return "Terceiro é uma função dentro de um array"
  },
];

console.log(eleArray.length); // mostra quando elementos existe

console.log(eleArray[0]); // exibe oque tem salvo
console.log(eleArray[1]); // exibe oque tem salvo
console.log(eleArray[2]); // exibe oque tem salvo

console.log(eleArray[2]()); // executa a função

// Aula 45 - Strings para arrays
let aula45 = "manipulação";

console.log(Array.from(aula45)); // cria um elemento para cada letra no array

// Aula 46 - Manipulando arrays
let techs = ["html", "css", "js"]; // cria o array
console.log(techs);

techs.push("nodejs"); // adiciona no final
console.log(techs);

techs.unshift("sql"); // adiciona no começo
console.log(techs);

let index = techs.indexOf("js"); // busca em qual elemento este dado está salvo
techs.splice(index, 1); // remove o elemento
console.log(techs);

techs.pop(); // remove no final
console.log(techs);

techs.shift(); // remove no começo
console.log(techs);

console.log(techs.slice(1, 3)); // estrai uma sequencia de dados

techs.splice(1, 1); // remove uma sequencia de dados
console.log(techs);
