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
````
console.log("Bem vindo as Starter"); // este é o comando correto
consolelog("Bem vindo as Starter"); // aqui vai gerar um erro
````

## Aula 04 - Maneiras de executar o JavaScript
O modo mais fácil de executar ele é pelo inspecionar do navegador de internet

Temos também o [Codepen](http://www.codepen.io/pen) que é um site onde com ele conseguimos executar comandos HTML, CSS e JavaScript

E por último e mais eficiente é a utilização de um IDE ou editor de código pois é com ele que criamos uma aplicação, o **Visual Studio Code** é o mais recomendado no momento

## Aula 05 - Adicionando arquivos JS
Os nomes dos arquivos não podem conter espaços os caracteres especiais

Para criar a estrutura inicial do HTML podemos usar o comando abaixo onde o Emmet Abbreviation vai criar todos os comandos necessários
````
!
````

## Aula 06 - Comentários
Para criar um comentários devemos usar duas barras
Eles servem para criar anotações ou ignorar comandos
````
// console.log("Bem vindos ao Starter!!");
````

Existe três modelos de comentário, ai usamos o que mais se adegar ao momento

# Modulo 03 - Tipos de dados

## Aula 07 - Introdução
A primeira coisa que devemos aprender é os elementos da linguagem e suas combinações, assim aprendendo como escrever e oque significa

## Aula 08 - String
O tipo de dados **string** é uma cadeia de caracteres que permite a utilização de texto, temos três modo de criar uma string
````
'Aspas simples é um modo'
"Aspas duplas seria outro"
`Templete literals é um modo avançado`
````

## Aula 09 - Number
O tipo de dados **number** são os números onde pode ser desde inteiros como reais (Quebrado), para utilizar ele basta digitar o número
````
45 // número inteiro
7.913 // número real
NaN // representa um erro
Infinity // serve para verifica se o número é infinito
````

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
````
let clima:String = "Frio"
````

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
````
const numeroCasa = 96;
````

E por último é muito importante usamos a lingua inglesa para desenvolver nossa aplicações pois tudo é em ingles, assim enquanto desenvolvemos aprendemos um pouco sobre ela

# Modulo 05 - Praticando e avançando

## Aula 20 - Declaration assignment var
Nesta aula revisamos como declaramos uma variável, como atribuir um valor para ela e como identificar o tipo que dados que está salvo na mesma

## Aula 21 - Agrupando declarações
Agora aprendemos como realizar a declaração, atribuição e exibição de várias variáveis
