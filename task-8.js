function calculateBalance(incomes, expenses){
    const incomeArray = incomes.split(",").map(Number);
  const expenseArray = expenses.split(",").map(Number);

  const totalIncome = incomeArray.reduce((acc, curr) => acc + curr, 0);
  const totalExpense = expenseArray.reduce((acc, curr) => acc + curr, 0);

  return totalIncome - totalExpense;
}
const incomes = "100,200,300";
const expenses = "50,75,125";
const balance = calculateBalance(incomes, expenses);
console.log(balance);