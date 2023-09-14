// La desestructuración es de las coas más geniales que le paso al lenguaje, sin duda un feature de lo más útil.

// Recuerda los tipos:

let fruits = ['Apple', 'Banana']
let [a, b] = fruits;

// Opcion 1
console.log(a, b);

// Opcion 2
console.log(a, fruits[1])

// Object destructuring

let user ={username: 'Alan', age: 34};
let {username, age} = user;

// Opcion 1
console.log(username, age);

// Opcion 2
console.log(username, user.age);

// sprad operator

let person = { name: "Alexa", age: 24 };
let country = "COL"

let data = { ...person, country };
console.log(data);

//Rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3)