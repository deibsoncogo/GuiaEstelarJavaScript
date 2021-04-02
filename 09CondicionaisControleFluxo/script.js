// Aula 60 - If e else
console.log(`\n-> Aula 60 - If e else`);

let temperature = 39;

if (temperature >= 37.5) {
  console.log("Estado febril alto");
} else if(temperature >= 37.0 && temperature < 37.5) {
  console.log("Estado febril moderado");
} else {
  console.log("Fora do estado febril");
}

// Aula 61 - Switch
console.log(`\n-> Aula 61 - Switch`);
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

  // se result não tiver valor salvo será um undefined que é false
  result ? "" : result = "Operador não válido";

  return result;
}

console.log(calculate(18, "++", 36));
console.log(calculate(18, "+", 36));
console.log(calculate(18, "*", 36));
