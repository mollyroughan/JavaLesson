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
    console.log(`Index ${index}: ${cities[index]}`);
}

// ============================================


// for...of Loop
// Returns the actual VALUE, not the index

console.log("\nfor...of with array:");
for (const city of cities) {
    console.log(city);
}

const string = "Hello";

console.log("\nfor...of with string:");
for (const char of string) {
    console.log(char);
}

