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

// Aula 62 - Throw e try/catch
console.log(`\n-> Aula 62 - Throw e try/catch`);

// se o throw for executado ele vai parar tudo que estiver dentro do try
function sayMyName(name = "") {
  if (name === "") {
    // vamos lançar uma mensagem que vai ser usada como erro
    throw "Nome não foi informado"
  }

  console.log("O nome é " + name);
}

try { // ele vai tentar resolver oque o throw enviar

  sayMyName("");
  console.log("Fim do try");

} catch (error) { // se o try não revolver o throw este vai
  console.log(`Erro: ${error}`);
}

console.log("Comando fora do try/catch");
