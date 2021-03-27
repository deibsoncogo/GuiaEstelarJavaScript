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
