// for-in loop are used for Object.

/*
syntax:-    
          for(let key in objVar){
             // do some work
          }
 */


let student = {
    fullName: "Aryan",
    age: 20,
    cgpa: 8.7,
    isPass: true
};

for (let key in student) {
    console.log("key =", key, "value=", student[key]);
}