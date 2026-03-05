// for...in Loop
// Returns the index/key, not the value

//object example
let person = {
    name: "Molly",
    age: 19,
    city: "Boston"
};

console.log("for...in with object:");
let key;
for (key in person) {
    console.log(key);
    console.log(person[key]);
}


//array example
let cities = ["Boston", "Phoenix", "New York City", "Dallas", "Portland"];

console.log("\nfor...in with array:");
let index;
for (index in cities) {
    console.log(index) + " ";      // shows index
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
let city; //just acting as a kind of index, just with a fun name
for (city of cities) {
    console.log(city);
}

const string = "Hello World";

console.log("\nfor...of with string:");
let letter;
for (letter of string) {
    console.log(letter);
}

//Think of this more as just outputting the values of the array, not looping over them. 
//This one is much better for arrays (work for strings b/c JS saves strings as arrays of characters in memory!)

//Long story short: 
    // with for..in, you interate over some kind of key or index, and then call on values at that index or key
    // with for...of, you interate directly over the values of the interable, so you don't need to call on an another value. 
    

//normal for loop
let trees = ["oak", "fir","elm", "maple"]
let i=0;
for (i = 1; i<4; i++) {
    console.log(trees[i])
}