//These were multiple objects at first. They are consolidated into a single array.
const toys = [
 {
    id: 1,
    name: "Edward",
    brand: "Thomas and Friends",
    manufacturer: "Fisher-Price",
    color: "Blue",
    material: "plastic",
    price: 21.99,
    'battery powered': false,
    'age range': "2 and up"
},
{
    id: 2,
    name: "Mars Research Shuttle",
    brand: "LEGO",
    manufacturer: "LEGO",
    color: "multi",
    material: "plastic",
    'number of pieces': 273,
    price: 39.99,
    'battery powered': false,
    'age range': "5 and up"
},
{
    id: 3,
    name: "Bob It! Extreme",
    brand: "Hasbro Gaming",
    manufacturer: "Hasbro",
    color: ["black", "yellow", "turquoise", "purple", "red", "light blue"],
    material: "plastic",
    price: 27.99,
    'battery powered': true,
    'age range': "8 and up"
}
]

//Running a for loop to check the properties of each toy
/*for (const toy of toys) {
    console.log(toy.brand)
}*/

//The next two objects will be added to the toys array
const giJoe = {
    id: 4,
    name: "Spirit Iron-Knife", 
    brand: "G.I. Joe",
    manufacturer: "Hasbro",
    color: "multi",
    material: "plastic",
    price: 22.99,
    'battery powered': false,
    'age range': "4 and up"
}

const pikachu = {
    id: 5,
    name: "Pikachu",
    brand: "Pokemon",
    manufacturer: "Jazwares, LLC",
    color: ["yellow", "black", "red"],
    material: "polyester",
    price: 24.99,
    'battery powered': false,
    'age range': "2 and up"
}

//Using the push method to add the above objects to the toys array
toys.push(giJoe)
toys.push(pikachu)

//For loop with the two added the toys array
/*for (const toy of toys) {
    console.log(toy.brand)
}*/

//This for loop will utilize string interpolation to access the properties in the toys array.
const findToy = 3
for (const toy of toys)
if (toy.id === findToy) {
    toy.price = toy.price + 1.05
    console.log(`${toy.price} for a ${toy.name}? ${toy.manufacturer} should be ashamed. They're made of cheap ${toy.material} too.`)
}