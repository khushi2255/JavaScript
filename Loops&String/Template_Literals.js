/*
Template Literals: A way to have embedded expressions in strings.

 `this is a template literal`
*/

let specialString = `This is a template literal`;
console.log(specialString);
console.log(typeof specialString);



// String Interpolation
/* to create strings by doing substitution of placeholders.

        `string text ${expression} string text`       */


let obj = {
    item: pen,
    price: 10,
};

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

// console.log("the cose of", obj.item, "is", obj.price, "rupees");