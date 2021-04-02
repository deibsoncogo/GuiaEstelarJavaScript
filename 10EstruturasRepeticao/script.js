// Aula 63 - For
console.log(`\n-> Aula 63 - For`);

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

// Aula 64 - While
console.log(`\n-> Aula 64 - While`);

let dividing = 1;

while (dividing > 0.01) {
  console.log(dividing);
  dividing /= 2;
}
