/*

Slice(): returns a piece of the array
          slice(startidx, endidx)

Splice() : change original array (add,remove, replace)
           splice(startidx, delCount, newEl1...)

*/


// slice()
let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "batman"];
console.log(marvelHeroes);
console.log(marvelHeroes.slice(1, 4));


//splice()
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.splice(2, 2, 101, 102);
console.log(arr);