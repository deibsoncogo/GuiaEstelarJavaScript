// string
console.log('Aspas simples é um modo');
console.log("Aspas duplas seria outro");
console.log(`Templete literals é um modo avançado`);

console.log(`A soma de 23 com 57 é ${23 + 57}`); // permite combinar comandos com texto

// number
console.log(+45);
console.log(-82);
console.log(7.913); // devemos usar ponto para números quebrados
console.log(16 / "Criando um erro"); // teremos um NaN quando um erro acontecer
console.log(98.555555 === Infinity); // verifica se o número é infinito

// boolean
console.log(true);
console.log(1 == 1);

console.log(false);
console.log(1 > 4);

// undefined vs null
console.log(undefined === null); // não são iguais

// object
console.log({
  nome: "Deibson Cogo",
  idade: 28,
  moradia: function() {
    console.log("Rua México 96");
  }
});

// array
console.log([
  ["Deibson", "Henrique", "Cogo"],
  [40812356790, 495438761],
]);
