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

// Aula 49 - Typeof delete
console.log(`\n-> Aula 49 - Typeof delete`);

const person = {
  empresa: "Romagnole Produtos Elétricos",
  setor: "Administração",
  cargo: [
    2,
    "Assistente",
  ],
}

delete person.cargo; // exclui um item do objeto

console.log(person);

// Aula 50 - Operadores aritméticos
console.log(`\n-> Aula 50 - Operadores aritméticos`);

console.log(`Multiplicação: ${3.2 * 5}`);
console.log(`Divisão: ${12 / 5}`);
console.log(`Adição: ${34 + 67}`);
console.log(`Subtração: ${74 - 68}`);

console.log(`Resto da divisão: ${12 % 5}`);

let increment = 8;
increment++; // realiza uma soma de 1
console.log(`Incremento: ${increment}`);

let decrement = 8;
decrement--; // realiza uma subtração de 1
console.log(`Decremento: ${decrement}`);

console.log(`Exponencial: ${ 3 ** 3}`);

// Aula 51 - Grouping operator
console.log(`\n-> Aula 51 - Grouping operator`);
console.log((2 + 3) * 5); // mudando a sequencia do calculo
console.log(2 + 3 * 5); // sem a mudando da sequencia do calculo

// Aula 52 - Operadores de comparação
console.log(`\n-> Aula 52 - Operadores de comparação`);
let one = 1, two = 2;

console.log(`${one} é igual a ${two}: ${one == two}`);
console.log(`${one} é diferente a ${two}: ${one != two}`);
console.log(`${one} é estritamente igual a ${two}: ${one === two}`);
console.log(`${one} é estritamente diferente a ${two}: ${one !== two}`);
console.log(`${one} é maior que ${two}: ${one > two}`);
console.log(`${one} é maior ou igual que ${two}: ${one >= two}`);
console.log(`${one} é menor que ${two}: ${one < two}`);
console.log(`${one} é menor ou igual que ${two}: ${one <= two}`);

// Aula 53 - Operadores de atribuição
console.log(`\n-> Aula 53 - Operadores de atribuição`);
let x = 1;

x += 2; // vai somar x com 2
x -= 1; // vai subtrair x por 1
x *= 9; // vai multiplicar x por 9
x /= 3; // vai dividir x por 3

x %= 4; // vai pegar o resto da divisão por 4
x **= 8; // vai calcular a elevação por 8

console.log(x); // valor final é 256

// Aula 54 - Operadores lógicos
console.log(`\n-> Aula 54 - Operadores lógicos`);
let pao = true, queijo = false;

console.log(`Temos pão: ${pao}\t\tTemos queijo: ${queijo}\n\n`);

console.log(`Tem pão e queijo para comer: ${pao && queijo}`); // ambos tem que ser verdadeiro
console.log(`Tem pão ou queijo para comer: ${pao || queijo}`); // algum tem que ser verdadeiro
console.log(`Não pode ter pão ou queijo para comer: ${!pao && !queijo}`); // nenhum pode ser verdadeiro

// Aula 55 - Operador condicional ternário
console.log(`\n-> Aula 55 - Operador condicional ternário`);
let leite = true;
let fruta = false;

// método rápido e pratico
const niceBreakFast = leite && fruta ? "Alimentação completa :(" : "Falta um alimento :("

console.log(niceBreakFast);

let ageDriver = 16

// método complexo e grande
if( ageDriver >= 18 ) {
  console.log("Pode tirar CNH");
} else {
  console.log("Não pode tirar CNH");
}

// Aula 56 - Operadores para string
console.log(`\n-> Aula 56 - Operadores para string`);
let alpha = "alpha"; // cria uma string com este valor
alpha += "bet"; // adiciona este valor na string

console.log(alpha + 345); // informação impressa é alphabet345

// Aula 57 - Falsy e truthy
console.log(`\n-> Aula 57 - Falsy e truthy`);

// vai retornar como valor falso
let tipoValorUm = NaN ? "Verdadeiro" : "Falso";
console.log(tipoValorUm);

// vai retornar como valor verdadeiro
let tipoValorDois = [] ? "Verdadeiro" : "Falso";
console.log(tipoValorDois);

// Aula 58 - Precedência dos operadores
console.log(`\n-> Aula 58 - Precedência dos operadores`);

console.log(2 + 5 * 10, (2 + 5) *10); // parenteses é o mais forte
console.log(3 > 2 && 2 > 1); // o sinal de maior é o primeiro a ser verificado
console.log(3 > 2 > 1, 3 > 2 == 1); // é verificado um item por vez

console.log(`
  False é a mesma coisa que 0? ${false == 0}
  True é a mesma coisa que 1? ${true == 1}`
); 
