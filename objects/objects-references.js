let myAccount = {
    name: 'Karolina Brucha',
    expenses: 0,
    income: 0
}

let addExpenses = function(account, total) {
    account.expenses = account.expenses + total
}
//addIncome
let addIncome = function(account, total) {
    account.income = account.income + total
}
//resetAccount
let restetAccount = function(account) {
    account.expenses = 0
    account.income = 0
}
//getAccountSummary
let getAccountSummary = function(account) {
    
    console.log(`Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} is expenses. `)
}

addIncome(myAccount, 500)
addIncome(myAccount,200)
addExpenses(myAccount, 100)
console.log(myAccount)
addExpenses(myAccount, 300)
console.log(myAccount)
getAccountSummary(myAccount)
restetAccount(myAccount)
getAccountSummary(myAccount)