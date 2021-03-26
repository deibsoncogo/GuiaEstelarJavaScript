// Aula 20 - Declaration assignment var
var name; // declaração de uma variável
name = "Deibson Cogo"; // atribuindo valores

console.log(typeof name); // exibindo o tipo da variável

// Aula 21 - Agrupando declarações
let age, isMen; // declarando várias variáveis
age = 28, isMen = true; // atribuindo vários valores

console.log(name, age, isMen); // exibindo várias informações

// Aula 22 - Concatenando e interpolando variáveis
let cidade, estado, pais;
cidade = "Itápolis", estado = "SP", pais = "Brasil";

// criando uma condição ternaria ágil e simples
console.log(`Ele é um homem: ${isMen ? "Sim" : "Não"}`);

// usando as template literals para unir texto estático com variáveis
console.log(`O ${name} tem ${age} anos`);

// usando variáveis com texto estático numa forma obsoleta
console.log("Ele mora em " + cidade + " - " + estado + " - " + pais);

// Aula 23 - Objects
const person = {
  name: "Leonardo",
  age: 27,
  weight: 95.6,
  isAdmin: true,
}

console.log(`${person.name} tem ${person.age} ${age > 1 ? "anos" : "ano"}`);
