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
