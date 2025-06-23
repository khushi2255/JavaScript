/*

Array Methods:-

.Push(): add to end
.Pop() : delete from end & return
.toString() : converts array to string
.Concat() :joins multiple arrays & returns result
.unshift() : add to start
.shift(): delete from start & return

*/



let foodItems = ["potato", "onion", "tomato"];

// push (): add to end
console.log(foodItems);
foodItems.push("chips", "burger");
console.log(foodItems);


// pop()
// console.log(foodItems);
// let deletedItem = foodItems.pop();
// console.log(foodItems);
// console.log("deleted", deletedItem);


//toString()
// console.log(foodItems);
// console.log(foodItems.toString());
// console.log(foodItems);



//Concat() 
let marvelHeroes = ["thor", "spiderman", "ironman"];
let dcHeroes = ["batman", "superman"];
let heroes = marvelHeroes.concat(dcHeroes);
console.log(heroes);



//unshift()
// let marvelHeroes = ["thor", "spiderman", "ironman"];
// marvelHeroes.unshift("antman");
// console.log(marvelHeroes);



// shift()
// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let val = marvelHeroes.shift();
// console.log("deleted", val);
