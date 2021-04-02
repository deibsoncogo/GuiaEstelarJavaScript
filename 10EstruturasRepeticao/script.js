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
