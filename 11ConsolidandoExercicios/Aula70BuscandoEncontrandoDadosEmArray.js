// Aula 70 - Buscando e encontrando dados em Array
console.log(`\n-> Aula 70 - Buscando e encontrando dados em Array`);

// banco de dados
const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },

  {
    category: "Inteligência emocional",
    books: [
      {
        title: "Você é insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade, como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
]

// conta a quantidade de categoria e livro
function quantityCategory() {
  let plural = new String() // vai salvar a conjugação das coisas

  const quantityCat = booksByCategory.length; // quantidade de categoria
  quantityCat > 1 ? plural = "s" : plural = ""; // conjuga a pluralidade de categoria
  console.log(`Existe ${quantityCat} categoria${plural}`); // imprime
  
  let quantityBoo = 0; // quantidade de livro

  for (let i1 of booksByCategory) {
    quantityBoo = i1.books.length; // quantidade de livro
    quantityBoo > 1 ? plural = "s" : plural = ""; // conjuga a pluralidade de livro
    console.log(`Na categoria ${i1.category} temos ${quantityBoo} livro${plural}`);
  }

  console.log("\n"); // para criar uma linha em branco
}

// conta a quantidade de autor cadastrado sem duplicar
function quantityAuthor() {
  let authors = new Array(); // para salvar os nomes dos autores
  
  for (let i1 of booksByCategory) { // extrai os itens dentro das categorias
    for (let i2 of i1.books) { // extrai os itens dentro dos livros
      authors.push(i2.author); // salva os autores neste array
    }
  }

  // o set não permite que itens duplicado seja cadastrado
  const authorsOnly = new Set();

  // salva os nomes dos autores sem duplicar
  authors.forEach((author) => {
    authorsOnly.add(author);
  });

  // conta quantos autores existe sem duplicar
  const quantity = [...authorsOnly.values()].length;

  console.log(`Os livros cadastrado pertencem a ${quantity} autores ou autoras`); // imprime
  console.log("\n"); // para criar uma linha em branco
}

// mostra os livros do autor Augusto Cury
function filterByActorAugustoCury() {
  const author = "Augusto Cury"; // autor a ser pesquisado
  let books = new Array(); // para salvar os livros que pertencem ao autor informado

  for (let i1 of booksByCategory) { // extrai os itens dentro das categorias
    for (let i2 of i1.books) { // extrai os itens dentro dos livros
      if (i2.author == author) { // verifica se o autor selecionado é oque estamos procurando
        books.push(i2.title); // salva os livros que pertencem ao autor desejado
      }
    }
  }

  // identifica se existe mais de um livro para conjugar no plural
  const plural = books.length > 1 ? "s" : "";
  if (books == 0) {
    console.log(`${author} não possui livro cadastrado`);
  } else {
    console.log(`${author} possui ${books.length} livro${plural} como:`); // imprime saudações
  }

  for (let i1 of books) {
    console.log("\t" + i1); // imprime o nome dos livros
  }

  console.log("\n"); // para criar uma linha em branco
}

// mostra os livros e o autor informado dinamicamente
function filterByActorDynamics(author) {
  let books = new Array(); // para salvar os livros que pertencem ao autor informado

  for (let i1 of booksByCategory) { // extrai os itens dentro das categorias
    for (let i2 of i1.books) { // extrai os itens dentro dos livros
      if (i2.author == author) { // verifica se o autor selecionado é oque estamos procurando
        books.push(i2.title); // salva os livros que pertencem ao autor desejado
      }
    }
  }

  // identifica se existe mais de um livro para conjugar no plural
  const plural = books.length > 1 ? "s" : "";
  if (books == 0) {
    console.log(`${author} não possui livro cadastrado`);
  } else {
    console.log(`${author} possui ${books.length} livro${plural} como:`); // imprime saudações
  }

  for (let i1 of books) {
    console.log("\t" + i1); // imprime o nome dos livros
  }

  console.log("\n"); // para criar uma linha em branco

}

quantityCategory();
quantityAuthor();
filterByActorAugustoCury();
filterByActorDynamics("George S. Clason");


console.log("\nAlgorítimo apresentado pelo Mayk na aula");

// conta a quantidade de categorias
const totalCategories = booksByCategory.length;
console.log("Total de categoria: ", totalCategories);

for (let category of booksByCategory) {
  console.log("Total de livro da categoria " + category.category + " é: ", category.books.length);
}

console.log("\n"); // para criar uma linha em branco

// conta a quantidade de autor cadastrado sem duplicar
function countAuthors() {
  let authors = []; // para salvar os autores sem duplicar

  for (let category of booksByCategory) { // extrai os itens dentro das categorias
    for (let book of category.books) { // extrai os itens os livros
      if (authors.indexOf(book.author) == -1) { // retornar verdadeiro se não tiver este autor salvo
        authors.push(book.author); // salva o autor no array
      }
    }
  }

  console.log("Total de autores: " + authors.length); // imprime

  console.log("\n"); // para criar uma linha em branco
}

// mostra os livros do autor Augusto Cury
function booksOfAugustoCury() {
  let books = []; // para salvar os livros do Augusto Cury

  for (let category of booksByCategory) { // extrai os itens dentro das categorias
    for (let book of category.books) { // extrai os itens os livros
      if (book.author === "Augusto Cury") {
        books.push(book.title);
      }
    }
  }

  console.log("Livros do autor: " + books); // imprime

  console.log("\n"); // para criar uma linha em branco
}

// mostra os livros e o autor informado dinamicamente
function booksOfAuthor(author) {
  let books = []; // para salvar os livros do Augusto Cury

  for (let category of booksByCategory) { // extrai os itens dentro das categorias
    for (let book of category.books) { // extrai os itens os livros
      if (book.author === author) { // verificar se o autor selecionado é oque queremos
        books.push(book.title); // salva o título do livro do autor desejado
      }
    }
  }

  // join vai transformar o array em string e criar um divisor entre eles
  console.log(`Livros do autor ${author}: ${books.join(", ")}`); // imprime
}

countAuthors();
booksOfAugustoCury();
booksOfAuthor("George S. Clason");
