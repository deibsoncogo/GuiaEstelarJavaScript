// Aula 15 - Conhecendo as variáveis
var clima; // variável global
const graus = 24; // variável que não muda

if(graus <= 30) {
  let aula15 = "O clima não está quente"; // variável local
  clima = "Normal";
  console.log(aula15);
}

console.log(clima, graus);
