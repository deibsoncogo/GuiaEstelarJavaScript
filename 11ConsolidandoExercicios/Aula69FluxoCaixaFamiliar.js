// Aula 68 - Fluxo de caixa familiar
console.log(`\n-> Aula 68 - Fluxo de caixa familiar`);

const transactions = {
  incomes: [ 243.89, 150.99, 48.00, 578.00 ],
  expenses: [ 89.00, 12.99, 333.82, 374.44 ],
}

let total = {
  incomes: null,
  expenses: null,
}

function getSummation(transactions, total) {
  for (const a in transactions) {  // recebe o objeto
    for (const o of transactions[a]) { // recebe o array
      total[a] += o; // soma e salva no objeto total
    }
  }

  const balanceValue = total.incomes - total.expenses;
  const balanceStatus = balanceValue < 0 ? "negativo" : "positivo";

  console.log(`A família está com um saldo ${balanceStatus} no valor de R$ ${balanceValue.toFixed(2)}`);
  console.log(`Com uma receita total de R$ ${total.incomes.toFixed(2)}`);
  console.log(`E despesa total de R$ ${total.expenses.toFixed(2)}`);
}

getSummation(transactions, total);


console.log("\nAlgorítimo apresentado pelo Mayk na aula");

let family = {
  incomes: [ 2500, 3200, 250.43, 360.45 ],
  expenses: [ 320.34, 128.45, 176.87, 1450.00 ],
}

function sum(array) {
  let total = 0;

  for (let value of array) {
    total += value;
  }

  return total;
}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes);
  const calculateExpenses = sum(family.expenses);

  const total = calculateIncomes - calculateExpenses;

  const itsOk = total >= 0;

  let balanceText = "negativo";

  if (itsOk) {
    balanceText = "positivo";
  }

  console.log(`Seu saldo é ${balanceText}: R$ ${total}`);
}

calculateBalance();
