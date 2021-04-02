# Rocketseat - Guia Estelar de JavaScript

Agora neste aprenderemos o básico que envolve o JavaScript que é a linguagem de programação, não é um ensinamento fácil mais muito importante, seremos guiado pelo _**Mayk Brito**_ da Rocketseat

>Enquanto o HTML e CSS definem a parte estrutural e visual da aplicação, o JavaScript traz vida e interatividade à página

# Modulo 01 - Introdução

## Aula 01 - Abertura
Iremos aprender para que ele serve e como funciona utilizando variáveis, funções, objetos, manipulação de dados e muitos mais

## Aula 02 - JavaScript
O JavaScript é uma linguagem de programação onde no seu inicio de criação ele servia para criar somente sites hoje podemos também fazer aplicações web, mobile (React Native) ou desktop (Electron)

Diversas grandes empresas utilizam o JavaScript como Facebook, Google, Uber e Netflix

A maioria dos sites utilizam está linguagem e ela é uma linguagem obrigatória para quem trabalha com a metodologia de front-end

durante o curso iremos ver sobre os tipos de dados, variáveis, funções, condicionais, estruturas de repetição e muitos mais

A dinâmica do curso será baseada em primeiro aprender os conceitos e fundamentos, depois iremos realizar a pratica e por último a revisão de tudo

# Modulo 02 - Primeiros passos

## Aula 03 - Sintaxe
Todas linguagens possui uma sintaxe onde ela a padronização de como os textos (Comandos) devem ser escrito para o computador conseguir entender, escrever os comandos errado é o principal erro no desenvolvimento das aplicações principalmente pelos iniciantes

No exemplo abaixo a posição do ponto muda por completo comando
```
console.log("Bem vindo as Starter"); // este é o comando correto
consolelog("Bem vindo as Starter"); // aqui vai gerar um erro
```

## Aula 04 - Maneiras de executar o JavaScript
O modo mais fácil de executar ele é pelo inspecionar do navegador de internet

Temos também o [Codepen](http://www.codepen.io/pen) que é um site onde com ele conseguimos executar comandos HTML, CSS e JavaScript

E por último e mais eficiente é a utilização de um IDE ou editor de código pois é com ele que criamos uma aplicação, o **Visual Studio Code** é o mais recomendado no momento

## Aula 05 - Adicionando arquivos JS
Os nomes dos arquivos não podem conter espaços os caracteres especiais

Para criar a estrutura inicial do HTML podemos usar o comando abaixo onde o Emmet Abbreviation vai criar todos os comandos necessários
```
!
```

## Aula 06 - Comentários
Para criar um comentários devemos usar duas barras
Eles servem para criar anotações ou ignorar comandos
```
// console.log("Bem vindos ao Starter!!");
```

Existe três modelos de comentário, ai usamos o que mais se adegar ao momento

# Modulo 03 - Tipos de dados

## Aula 07 - Introdução
A primeira coisa que devemos aprender é os elementos da linguagem e suas combinações, assim aprendendo como escrever e oque significa

## Aula 08 - String
O tipo de dados **string** é uma cadeia de caracteres que permite a utilização de texto, temos três modo de criar uma string
```
'Aspas simples é um modo'
"Aspas duplas seria outro"
`Templete literals é um modo avançado`
```

## Aula 09 - Number
O tipo de dados **number** são os números onde pode ser desde inteiros como reais (Quebrado), para utilizar ele basta digitar o número
```
45 // número inteiro
7.913 // número real
NaN // representa um erro
Infinity // serve para verifica se o número é infinito
```

## Aula 10 - Boolean
O **boolean** possui somente dois tipos de valores como verdadeiro ou falso

Parece ser simples mais é muito util no desenvolvimento dos projetos, é muito utilizado para comparação de dados e análisar uma situação

## Aula 11 - Undefined vs null
`Undefined` é um dado indefinido, algo que foi criado sem especificações
`Null` é um dado nullo, um objeto sem qualquer valor salvo

## Aula 12 - Object
O `object` é um tipo de dado estrutural contendo dentro dele diversas propriedades e funcionalidades, um exemplo seria um celular onde suas propriedades (Altura, peso, cor e outros) e funcionalidades (Realizar ligações e outros)

Propriedade pode ser chamada também de atributos e funcionalidade de método, para criar ele precisamos utilizar o `{}`

## Aula 13 - Array
O `array` ou também chamado de `vetor` é um tipo de dados estruturado que permite agrupar dados e gerar listas com extrema facilidade

## Aula 14 - Conclusão
Conforme o `ECMAScript standard` temos 9 tipos de dados que são definidos em 3 grupos

**Primitive**
  * String
  * Number
  * Boolean
  * Undefined
  * Symbol
  * BigInt

**Structural**
  * Object
    * Array
    * Map
    * Set
    * Date
    * E outros
  * Function

**Structural primitive**
  * Null

# Modulo 04 - Variáveis

## Aula 15 - Conhecendo as variáveis
Uma variável recebe um nome simbólico para poder guardar algum valor

Para criar uma devemos usar um destes comandos:
  * **var:** Funciona globalmente e seu valor pode ser alterado
  * **let:** Funciona localmente e seu valor pode sofre alteração
  * **const:** O valor atribuído não pode mudar

## Aula 16 - Tipos dinâmicos
As variáveis do JavaScript são fracamente tipada e dinâmica, isso quer dizer que a propriá linguagem vai definir o tipo da variável a partir do valor salvo

Podemos usar o comando `typeof` para verificar qual tipagem a variável está recebendo

Podemos transforma uma variável em estática e fortemente tipada com este método
```
let clima:String = "Frio";
```

## Aula 17 - Scope e var
`Scope` é oque define a visibilidade das variáveis do JavaScript, ele é uma limitação que mostra até onde uma variável local deve existir

O JavaScript sempre vai realizar a criação das variáveis globais por primeiro, isso é chamado de `hoisting`, ele vai somente criar não vai definir os valores que elas devem contem

## Aula 18 - Scope let e const
Nesta aula usamos variáveis locais para mostrar detalhadamente como funciona a visibilidade

Quando uma variável é chamada e não é encontrada dentro daquele scope o JavaScript vai buscar a criação dela em scopes anteriores

## Aula 19 - Nomeando variáveis
Esta linguagem é `case-sensitive`, isso quer dizer que letras minusculas e maiúsculas são totalmente diferentes

Não podemos iniciar nomes com números, espaços, caracteres especiais ou espaços

A metodologia de `camelCase` é muito úti quando desejamos usar mais de uma palavra
```
const numeroCasa = 96;
```

E por último é muito importante usamos a lingua inglesa para desenvolver nossa aplicações pois tudo é em ingles, assim enquanto desenvolvemos aprendemos um pouco sobre ela

# Modulo 05 - Praticando e avançando

## Aula 20 - Declaration assignment var
Nesta aula revisamos como declaramos uma variável, como atribuir um valor para ela e como identificar o tipo que dados que está salvo na mesma

## Aula 21 - Agrupando declarações
Agora aprendemos como realizar a declaração, atribuição e exibição de várias variáveis

## Aula 22 - Concatenando e interpolando variáveis
Revisamos como juntar um texto estático com os valores que uma variável possa ter

## Aula 23 - Objects
Nesta trabalhamos com um objeto desde sua criação a chamada

## Aula 24 - Arrays
Agora vimos como criar arrays, a diferença em objeto é que os campos não possui nome e para chamar ele devemos usar números onde o primeiro começa por zero

Tem como unificar arrays com objetos mais esta é uma pratica não recomendada
Devemos usar somente um tipo ou ser usarmos mais de um devemos ter um padrão para evitar erros

## Aula 25 - Exercícios
Agora iremos resolver alguns execícios:
  1. Declare uma variável de nome weight
  2. Que tipo de dado é a variável acima
  3. Declare uma variável e atribua valores para cada um dos dados
    * name: String
    * age: Number (Integer)
    * stars: Number (Float)
    * isSubscribed: Boolean
  4. A variável student abaixo é de que tipo de dado
    A. Atribua a ela as mesmas propriedades e valores do exercício 3
    B. Mostre no console log a seguinte mensagem
      * <name> de idade <age> pesa <weight> kg
  5. Declare uma variável do tipo array vazia de nome students
  6. Reatribua valor para a variável acima, colocando dentro dela o objeto student
  7. Coloque no console o valor da posição zero do array
  8. Crie um novo student e coloque na posição 1 do array students
  9. Sem rodar o código responda qual é a resposta do código abaixo e por que

# Modulo 06 - Funções

## Aula 26 - Functions
Uma função é um tipo de dado estrutural, com as funções conseguimos reutilizar códigos e com a nomeação delas conseguimos deixar mais fácil oque acontece na nossa aplicação

## Aula 27 - Argumentos e parâmetros
Conseguimos também criar funções dentro de variáveis, assim a função se torna anonima
Conseguimos também enviar informação (Argumentos) para as funções
As informações precisa ser criada na função e depois que é recebida é chamada de parâmetro

## Aula 28 - Retornando valores dentro da função
Quando uma função não possui o comando `return` ela não vai exportar nada se tornando `undefined`

Quando criamos uma variável sem informar seu tipo ela vai se tornar extremamente global, isso pode gerar um problema futuramente muito grande

## Aula 29 - Outra maneira de entender funções
Nesta aula revisamos oque vimos anteriormente com um outro exemplo

## Aula 30 - Function scope
Quando não informamos um parâmetro na função as variáveis que existe dentro dela vai se juntar com outra fora do scope de mesmo nome

## Aula 31 - Function hoisting
Uma função com seu nome sofre um hoisting assim sendo criado primeiro no arquivo de comandos

## Aula 32 - Arrow function
A arrow function é um método fácil de criar uma função ela possui as mesmas propriedade de um função tradicional
```
() => {};
```

## Aula 33 - Callback function
Este tipo de função é criado e salvo na nossa memória somente uma vez
Também podemos chamar uma função a partir de um comando dentro de outro função

## Aula 34 - Funções construtoras
Serve para criar objetos nomeado e baseado em um modelo

# Modulo 07 - Manipulando dados

## Aula 35 - Prototype
O prototype é uma das coisas mais incrível do JavaScript
Ele vem da ideia de criação ou utilização de um protótipo

Todo objeto possui diversas funcionalidade que são criadas automaticamente

Para saber quais funções um item possui devemos adicionar `__proto__` no final
```
"Deibson Cogo".__proto__;
```

## Aula 36 - Type conversion ou coersion
Eles servem para pegar um dados e transformar ele em outro tipo de dado

A `coersion` é utilizada comente pelo sistema transformando um dado em outro com o intuito de evitar o acontecimento de erros, já o `conversion` é mais utilizada pelo usuário (Manual) mais o sistema as vezes também vai utilizar

## Aula 37 - Strings em números
Agora vimos uma maneira simples de transformar um número em string e o contrário
```
let isString = "123", isNumber = 321;

Number(isString); // transforma a string em número
String(isNumber); // transforma o número em string
```

## Aula 38 - Contando caracteres e dígitos
Nesta aula vimos o comando `length` não funciona com números, com isso devemos transformar ele em uma string para a contagem dar certo, também apliquei o método de `forof`

## Aula 39 - Casas decimais
Aprendemos a utilizar dois comandos como podemos ver abaixo
```
toFixed(2); // arredonda para duas casas decimais
replace(".", ","); // troca um item por outro
```

## Aula 40 - Maiúsculas e minúsculas
Temos este dois comando que deixa tudo em maiúscula ou minuscula o string
```
toLowerCase(); // deixa tudo minusculo
toUpperCase(); // deixa tudo maiúsculo
```

E para deixar somente a primeira letra em maiúscula usamos esta técnica
```
let word = "ProGramAr é muITO BAcaNA!";
word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
```

## Aula 41 - Encontrando palavras em frases
Temos este comando para verificar se uma palavra existe mais ele é case-sensitive
```
includes();
```

## Aula 42 - Separando strings
Para remover espaços em branco de uma frase usamos a combinação de um comando que transformar um string em array a partir de um item e depois outro que junta um array adicionando algum carácter entre os campos
```
split(" "); // cria um array sem espaço
join("_"); // junta os itens de um array
```

## Aula 43 - Criando array com construtor
Na aula vimos como criar um array com o método de constructor e no modo de declaração
```
let arrayConstructor = new Array("a", "b", "c");
let arrayDeclaration = ["a", "b", "c"];
```

## Aula 44 - Elementos do Array
Um array pode conter qualquer tipo de dado como uma função
E para saber quantos elementos existe basta usar o `length`

## Aula 45 - Strings para arrays
Para criar um array onde cada letra de uma string ocupe um elemento podemos usar o `from`
```
let aula45 = "manipulação";
Array.from(aula45);
```

## Aula 46 - Manipulando arrays
Aprendemos algumas formas de como adicionar ou remover um elemento
```
let techs = ["html", "css", "js"]; // cria o array

techs.push("nodejs"); // adiciona no final
techs.unshift("sql"); // adiciona no começo

let index = techs.indexOf("js"); // busca em qual elemento este dado está salvo
techs.splice(index, 1); // remove o elemento

techs.pop(); // remove no final
techs.shift(); // remove no começo

techs.slice(1, 3); // estrai uma sequencia de dados sem salvar
techs.splice(1, 1); // remove uma sequencia de dados
```

# Modulo 08 - Expressões e operadores

## Aula 47 - Expressões e operadores
Uma expressão é qualquer linha de código que resolve algo
Elas podem terminar com virgula, ponto e outros itens

Temos três tipos de operadores como binário, unário e ternário
O binário é quando existe a combinação de dois comandos como abaixo
```
aula47 + 1;
```

O unário é quando temos somente um elemento principal
```
++number;
```

E o ternário é quando termos alguma verificação como um `if`
```
aula47 >= 0 ? sinal = true : sinal = false;
```

A utilização de parenteses como baixo faz o comando ser executado de imediato
```
(function() {
  console.log("Alo");
}) ()
```

## Aula 48 - New
O comando new serve para criar um objeto
Ela também é chamada de `left hand side expression`

## Aula 49 - Typeof delete
Temos o `delete` que exclui propriedades existente em um objeto

## Aula 50 - Operadores aritméticos
Na programação iremos muitas vezes realizar cálculos matemático

Temos os 4 operadores que utilizamos muito como o multiplicação, divisão, soma e subtração
Também temos alguns especiais na programação como podemos ver
  * Resto da divisão (`%`): É oque sobra de uma divisão
  * Incremento (`++`): Ele pega uma variável e soma 1
  * Decremento (`--`): Ele vai subtrair 1 de uma variável
  * Exponencial (`**`): É uma multiplicação elevada

O incremento e decremento funcionam depois de ser executado, com isso se colocarmos um deste operadores no `console.log()` ele não vai mostrar o resultado da operação pois ela ainda não aconteceu

## Aula 51 - Grouping operator
Na programação também temos a regra de presidência onde a multiplicação é realizado primeiro em uma conta

Para mudar isso podemos usar o parenteses assim oque estiver dentro será calculado primeiro

## Aula 52 - Operadores de comparação
O sinal de igual atribui um valor para algo

Temos 8 operadores de comparação onde eles são
  * `==` Igual
  * `!=` Diferente
  * `===` Estritamente igual
  * `!==` Estritamente diferente
  * `>` Maior que
  * `>=` Maior ou igual que
  * `<` Menor que
  * `<=` Menor ou igual que

O estritamente quer dizer que o tipo de dado deve ser igual ou diferente também

## Aula 53 - Operadores de atribuição
Ele também é conhecido por `assignment` onde é um método mais fácil de realizar contas, os operadores são os seguintes
```
let x = 1;

x += 2; // vai somar x com 2
x -= 1; // vai subtrair x por 1
x *= 9; // vai multiplicar x por 9
x /= 3; // vai dividir x por 3
x %= 4; // vai pegar o resto da divisão por 4
x **= 8; // vai calcular a elevação por 8

console.log(x); // valor final é 256
```

## Aula 54 - Operadores lógicos
Temos 3 operadores que podem ser utilizado por várias vezes
  * `&&` ambos tem que ser verdadeiro
  * `||` algum tem que ser verdadeiro
  * `!` nenhum pode ser verdadeiro

O sinal de exclamação deve ser adicionado na variável afirmando que os valores verdadeiro não pode ser aceito

## Aula 55 - Operador condicional ternário
Ele precisa trabalhar com um valor booleano, podemos criar a propriá verificação nele, existe dos modelos de criar um `if`
```
// método rápido e pratico
const niceBreakFast = leite && fruta ? "Alimentação completa :(" : "Falta um alimento :("

// método complexo e grande
if( ageDriver >= 18 ) {
  console.log("Pode tirar CNH");
} else {
  console.log("Não pode tirar CNH");
}
```

## Aula 56 - Operadores para string
Temos o operador de string (`+`) que serve para concatenar itens, temos que tomar cuidado pois as vezes podemos tentar usar ele para somar algo para mais ele vai concatenar o conteúdo como abaixo

## Aula 57 - Falsy e truthy
Temos alguns valores que se forem colocados no lugar de uma variável booliana vão receber o valore de falso como
  * 0
  * -0
  * ""
  * null
  * undefined
  * NaN
```
NaN ? "Verdadeiro" : "Falso"
```

Temos também valores que serão considerados como verdadeiro
  * {}
  * []
  * 1
  * 3.23
  * "0"
  * false
  * -1
  * Infinity
  * -Infinity

## Aula 58 - Precedência dos operadores
A precedência de operador funciona neste modelo, onde isso seria a sequencia de execução dos operadores na mesma linha
  * Grouping que sobrescreve a sequencia: ()
  * Negação e incremento: ! ++ --
  * Multiplicação e divisão? * /
  * Adição e subtração: + -
  * Relacional: < <= > >= C
  * Igualdade: == != === !==
  * AND: &&
  * OR: ||
  * Condicional: ?:
  * Assignment: = += -+ *+

# Modulo 09 - Condicionais e controle de fluxo

## Aula 59 - Controle de fluxo da aplicação
Toda aplicação possui um fluxo padrão que é a execução de todos os comandos da primeira a última linha

O controle é falar para o sistema quando ums linha de comandos deve ser ignorada pois ela não atende a uma necessidade

## Aula 60 - If e else
O `if` e `else` são controladores simples muito potente
Conseguimos criar a quantidade que precisamos

## Aula 61 - Switch
Ele é utilizado para executar algo conforme o valor recebido, mais para ele funcionar corretamente precisa conter um `break` no final de todos os `case` e por último um `default` para tratar valores inesperado

```
function calculate(number1, operator, number2) {
  let result;

  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    default: break;
  }

  result ? "" : result = "Operador não válido";

  return result;
}

console.log(calculate(18, "++", 36));
console.log(calculate(18, "+", 36));
```

## Aula 62 - Throw e try/catch
O `try/catch` serve para capitar envio de informação do `throw`
Está metodologia é muito utilizada para envio de erros
Se o `throw` não estiver dentro de um try/catch a aplicação vai cair

# Modulo 10 - Estruturas de repetição

## Aula 63 - For
Temos o `for` que cria um loop baseando-se em uma regra
O `break` pode ser usado para encerra o loop
E `continue` para pular pra próxima etapa do loop
```
manyInformation = ["Deibson", "Lucas", "Rafael", "Tales", "Guilherme", "Matheus"]

for (let i = 0; i < 10; i++) {
  if(manyInformation[i] === "Lucas") {
    continue; // faz pular para o próximo loop
  }

  if(manyInformation[i] === "Guilherme") {
    break; // encerra o loop
  }

  console.log(manyInformation[i]);
}
```

## Aula 64 - While
É uma estrutura de loop um pouco diferente da anterior onde ele precisa de um valor booleano para funcionar e vai executar até o valor deixar de ser verdadeiro
```
let dividing = 1;

while (dividing > 0.01) {
  console.log(dividing);
  dividing /= 2;
}
```

## Aula 65 - For of
Este tipo de `for` precisa de um `array` pois ele vai pegar elemento por elemento e trazer para dentro do `for` assim disponibilizando a informação salva
```
let contributors = ["Lucas Oliveira", "Rafael Rodrigues", "Matheus Lima"]

for (let contributor of contributors) {
  console.log(contributor);
}
```

Se usarmos ele com outro tipo de dado como uma string ele vai pegar uma letra por vez e trazer para dentro do `for of`

## Aula 65 - For in
Este é muito parecido com o anterior mais ele é para ser utilizado com dados do tipo objeto, se usarmos uma `string` ele vai contar quantas caracteres existe e usar este número
```
let person = {
  name: "Leonardo",
  age: 27,
}

for (let property in person) {
  console.log(`${property}: ${person[property]}`);
  
  // console.log(property); // pega o nome da propriedade
  // console.log(person[property]); // pega o valor dentro da propriedade
}
```

# Modulo 11 - Consolidando com exercícios

## Aula 66 - Praticar para aperfeiçoar
Agora iremos praticar tudo que aprendemos tudo que vimos no curso
Teremos quatro exercícios para resolver
