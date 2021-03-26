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

// Aula 24 - Arrays
const animals = [
  "Lion",
  "Monkey",
  {
    name: "Cat",
    age: 3,
  },
]

console.log(`Este animal de chama ${animals[0]}`); // mostra o primeiro valor salvo
console.log(`Existe ${animals.length} nomes de animais salvo`); // mostra quando valores existe
console.log(animals[2].name); // mostra o terceiro valor e seu objeto salvo

// Aula 25 - Exercícios
{
  let weight;

  console.log(typeof weight);

  let name, age, isSubscribed;
  name = "Deibson Cogo", age = 28, weight = 110.6, isSubscribed = true;

  let student = {
    name: "Deibson Cogo",
    age: 28,
    weight: 110.6,
    isSubscribed: true,
  };

  console.log(typeof student);

  console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`);

  let students = [];

  students = [student];
  
  console.log(students[0]);
  
  const john = {
    name: "John",
    age: 23,
    weight: 74.8,
    isSubscribed: true,
  }
  
  students[1] = john;

  console.log(students);

  console.log(a);
  var a = 1;
}
