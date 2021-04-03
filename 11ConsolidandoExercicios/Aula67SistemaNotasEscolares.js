// Aula 67 - Sistema de notas escolares
console.log(`\n-> Aula 67 - Sistema de notas escolares`);

// alunos e suas notas
const twoMonths = [
  { name: "Deibson Cogo", grades: { Math: 99, Art: 84, Story: 45 }, genre: "men" },
  { name: "Maria Cogo", grades: { Math: 89, Art: 72, Story: 88 }, genre: "women" },
  { name: "Mayk Brito", grades: { Math: 80, Art: 30, Story: 83 }, genre: "men" },
  { name: "Jonas Carlos", grades: { Math: 69, Art: 70, Story: 79 }, genre: "men" },
]

// tabela das notas
const tableGrades = { A: 90, B: 80, C: 70, D: 60, F: 0 }

for (const a of twoMonths) { // recebe o array
  console.log(`${a.genre == "men" ? "O aluno" : "A aluna"} ${a.name} tem as notas:`);
  for (const o in a.grades) { // recebe o objeto
    for (const oo in tableGrades) { // recebe a tabela das notas
      if (a.grades[o] >= tableGrades[oo]) { // verifica a nota tipo letra
        console.log(`${o}: ${a.grades[o]} - ${oo}`);
        break;
      }
    }
  }
  console.log("\n");
}


console.log("Algorítimo apresentado pelo Mayk na aula");
function getScore(score) {
  // peso das notas
  let scoreA = score >= 90 && score <= 100;
  let scoreB = score >= 80 && score < 90;
  let scoreC = score >= 70 && score < 80;
  let scoreD = score >= 60 && score < 70;
  let scoreF = score >= 0 && score < 60;

  let scoreFinal;

  if (scoreA) {
    scoreFinal = "A";
  } else if (scoreB) {
    scoreFinal = "B";
  } else if (scoreC) {
    scoreFinal = "C";
  } else if (scoreD) {
    scoreFinal = "D";
  } else if (scoreF) {
    scoreFinal = "F";
  } else {
    scoreFinal = "Nota inválida";
  }

  return scoreFinal;
}

console.log(getScore(-95));
console.log(getScore(95));
console.log(getScore(74));
