const weeklyMiles = [100, 83, 92, 77, 79]
let monthlyTotal = 0
//This for loop assigns the mileage variable to the weeklyMiles elements.
for (const mileage of weeklyMiles) {
    monthlyTotal += mileage
}

const monthlyAverage = monthlyTotal / weeklyMiles.length
console.log(`I average ${monthlyAverage} each week.
I have driven a total of ${monthlyTotal} miles.`)