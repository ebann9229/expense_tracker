export const TransactionCalculator = (amount, balance, income, expense) => {
  amount = parseFloat(amount)
  balance = parseFloat(balance)
  income = parseFloat(income)
  expense = parseFloat(expense)
  
  if (amount > 0){
     return {
      balance: balance+amount,
      income: income+amount,
      expense
    }
  }
  return {
    balance: balance+amount,
    income,
    expense: expense+amount
  }
}
