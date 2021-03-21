// Aula 15 - Conhecendo as variáveis
var clima; // variável global
const graus = 24; // variável que não muda

if(graus <= 30) {
  let aula15 = "O clima não está quente"; // variável local
  clima = "Normal";
  console.log(aula15);
}

console.log(clima, graus);

// Aula 16 - Tipos dinâmicos
let valor

valor = 39
console.log(valor, typeof valor);

valor = true // boolean
console.log(valor, typeof valor);

valor = "Salame" // string
console.log(valor, typeof valor);

// Aula 17 - Scope e var
console.log("> O x existe aqui?", x);

{
  var x = true;
}

console.log("> O x existe aqui?", x);
