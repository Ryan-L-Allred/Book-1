const monthlyExpenses = [ 201.43, 189.22, 132.09,  238.85, 195.41 ]
let totalExpense = 0

for (const price of monthlyExpenses) {
	totalExpense += price
}

// Calculate your average monthly food costs
const averageExpense = totalExpense / monthlyExpenses.length

// Make sure you use backticks for multi-line string output
console.log(`I spent a total of ${totalExpense} this month, 
which averaged out to ${averageExpense}`)