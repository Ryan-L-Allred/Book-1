const originalDisorderFormat = "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia"
const allDisorders = originalDisorderFormat.split("|$|")
const allDisordersDiv = allDisorders.join("</div> <div>")
console.log(`<div>${allDisordersDiv}</div>`)