/*
    Define a variable named `notes` and assign a value of an empty array
*/
const notes = []
notes.push({
    id: 1,
    text: "Trust your gut and your own experience.",
    author: "Ryan Allred",
    date: "August 18",
    topics: ["Practice", "Challenging", "Fresh"]
}
)
notes.push({
    id: 2,
    text: "I need to be more patient and breathe.",
    author: "Rusty Shackleford",
    date: "December 7",
    topics: ["Algorithms", "Habits"]
})
notes.push({
    id: 3,
    text: "Stop trying to rush through the exercise.",
    author: "Evangelos",
    date: "September 2",
    topics: ["Rushing", "Practice", "Habits"]
})

/*Create a variable to assign the total amount of topics I have in the notes object.
This for loop has a nested loop to access those topics in order to give me the average amount of topics. Referring back to 
previous exercise where I had to average out weekly miles. UPDATE: A nested for loop was not needed. All that was needed was some extra
dot notation.
*/
let totalTopics = 0
for (const note of notes) {
    totalTopics += note.topics.length
}

/*Declare a variable that assigns the operation which will divide the totalTopics variable by the amount of elements in the notes array. No need
*/
 const averageTopics = totalTopics / notes.length
//console.log(averageTopics)

const filteredNotes = []
const criteria = "Habits"
/*This for loop will access the id of the objects that contain "Habits" in the topics arrays. Then those id's will be placed in the 
filteredNotes array using the .push() method.
*/
for (const note of notes) {
    if (note.topics.includes(criteria)) {
        filteredNotes.push(note.id)
    }
}
//console.log(filteredNotes)

// HEY! Remember to refer back to this code when you have to do a stupid simple for loop to access an array's object property.
//  for (const note of notes) {
//      for (const topic of note.topics) {
//          console.log(topic)
//      }
//  }

/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

/*This for loop will iterate through the objects to find their text property. I will declare a new variable named notesText that has been
assigned an empty string. When the loop iterates the array, the strings contained within the text property will be added to the notesText
variable. The <article> HTML element will be on either side of each string.
    Next I will add a nested loop that specifically adds the topics property of each object, which will be bookended with the 
<section> element. Because topic is its own property and not an object, I only need to write topic in the string interpolation. In this
case, dot notation is necessary.
    I will need to place the closing </article> element outside of the nested loop at the bottom.
*/
let notesText = ""
for (const note of notes) {
    notesText += ` 
    <article>
        ${note.text} `
    for (const topic of note.topics) {
        notesText += ` 
        <section>${topic}</section> `
    }
    notesText += `
    </article> `
}
console.log(notesText)