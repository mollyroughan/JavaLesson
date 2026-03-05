// for...in Loop
// Returns the INDEX/KEY, not the value

//object example
const person = {
    name: "Molly",
    age: 19,
    city: "Boston"
};
console.log("for...in with object:");
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}


//array example
const cities = ["Boston", "Phoenix", "New York City", "Dallas", "Portland"];

console.log("\nfor...in with array:");
for (const index in cities) {
    console.log(cities[index]);
}

//Think of this as looping through an array or object and logging the value by increasing the index of the loop each time


//b/c essentially looping over indices, can do fun things:
console.log("\nfor...in with object making one long output:");
let tutor ="";
key=0;
for (key in person) {
    tutor += (person[key] + ", ");
}

console.log(tutor);

// --------------------------------------------------------------------------------------------------------


// for...of Loop
// Returns the actual value, not the value of the index


console.log("\nfor...of with array:");
for (const city of cities) {
    console.log(city);
}

const string = "Hello";

console.log("\nfor...of with string:");
for (const char of string) {
    console.log(char);
}

//Think of this more as just outputting the values of the array, not looping over them. 
//This one is much better for arrays (work for strings b/c JS saves strings as arrays of characters in memory!)

