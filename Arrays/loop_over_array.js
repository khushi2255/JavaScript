// print all elements of an array
// loop -> iterable(strings, arrays, objects).
// we access index in arrays.


let heroes = ["ironman", "shaktiman", "thor", "hulk"];

// for loop
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}


// for-of loop
for (let hero of heroes) {
    console.log(hero);
}


// example-02
let cities = ["delhi", "gurgaon", "mumbai", "haryana", "punjab"];

for (let city of cities) {
    // console.log(city);
    console.log(city.toUpperCase());
}