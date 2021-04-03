// Aula 69 - Celsius to Fahrenheit
console.log(`\n-> Aula 69 - Celsius to Fahrenheit`);

function convertTemperature(temperature) {
  // transforma em objeto para poder tratar um carácter por vez
  let extractNumbers = new Object(temperature);

  // variáveis que iremos usar durante a aplicação
  let numbers = new String, unityTemperature = new String, unityTemperatureReverse = new String;
  const unityTemperatureCelsius = "°C", unityTemperatureFahrenheit = "°F";
  
  // faz a tratativa de um carácter por vez
  for (let i of extractNumbers) {
    if (i == " " || i == "°") {continue}; // remove estes itens
    if (i == "." || i == ",") {numbers += "."; continue}; // substitui por ponto

    // identifica qual temperatura recebeu e qual e a oposta
    if (i == "C" || i == "c") {
      unityTemperature = unityTemperatureFahrenheit;
      unityTemperatureReverse = unityTemperatureCelsius;
      continue;
    } else if (i == "F" || i == "f") {
      unityTemperature = unityTemperatureCelsius;
      unityTemperatureReverse = unityTemperatureFahrenheit;
      continue;
    };
    
    // se tiver um campo sem valor é porque existe um erro
    if (isNaN(i)) {
      throw new Error(
        "Um valor inesperado foi informado, use um destes padrões 33 °C ou 91.40 °F"
      );
    };

    // vai salvar os caracteres depois da tratativa acima
    numbers += i;
  }

  // converter de string para number
  numbers = Number(numbers);
  
  // converte a temperatura
  if (unityTemperature == unityTemperatureFahrenheit) {
    temperatureConverted = numbers * 9/5 + 32 // para fahrenheit
  } else if (unityTemperature == unityTemperatureCelsius) {
    temperatureConverted = (numbers - 32) * 5/9 // para celsius
  } else {
    // identifica que uma unidade de medida esperada não foi informada
    throw new Error("A unidade da temperatura não foi informada, celsius ou fahrenheit");
  }

  // envia para o usuário a temperatura convertida e a anterior
  console.log(`A conversão de ${numbers.toFixed(2)} ${unityTemperatureReverse} é ${temperatureConverted.toFixed(2)} ${unityTemperature}`);
}

try {
  convertTemperature("30,5c"); // 30 °C === 86 °F
} catch (error) {
  console.log(error.message); // capta mensagens de erro
}


console.log("\nAlgorítimo apresentado pelo Mayk na aula");

function transformDegree(degree) {
  // vai deixar a variável em maiúscula e verificar se existe a letra C ou F
  const celsiusExists = degree.toUpperCase().includes("C");
  const fahrenheitExists = degree.toUpperCase().includes("F");

  // se ambos booleanos forem falso existe um erro
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error("Grau não identificado");
  }

  // para converter de F para C
  let updateDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = fahrenheit => (fahrenheit - 32) * 5/9;
  let degreeSign = "C";

  // para converter de C para F
  if (celsiusExists) {
    updateDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = celsius => celsius * 9/5 + 32;
    degreeSign = "F";
  }

  return formula(updateDegree) + degreeSign;
}

try {
  console.log(transformDegree("10c"));
} catch (error) {
  console.log(error.message);
}
