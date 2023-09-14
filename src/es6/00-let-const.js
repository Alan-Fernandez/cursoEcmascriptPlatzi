// ES6 (2015)
// A partir de esta versión se hace referencia a “El gran cambio”

// LET Y CONST
// Nuevas palabras reservadas para guardar variables. Antes solo existía var.

//Declarar la variable lastName y esta siendo asignada a David//
var lastName = "David";
//Reasignar el valor que originalmente habiamos agregado ya que var es global//
lastName = "Oscar";
console.log(lastName);

// Declarando y asignando //
let fruit = "apple";
// Reasignamos ya que let tiene un alcanze de bloque //
fruit = "kiwi";
console.log(fruit);


const animal = "dog";
// No se puede reasignar un valor con const//
animal = "cat";
console-log(animal);


const fruits = () => {
    if(true) {
        var fruit1 = "Apple"; // function scope
        let fruit2 = "kiwi";  // block scope
        const fruit3 = "banana"; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();

// Let permite la reasignación de valores de una variable, con la particularidad de que solo tiene un alcance de bloque, mientras que var tiene un alcance global.
// Sin embargo con const el valor no puede ser reasignado y también tiene alcance de bloque.

// Todo lo que sea un bloque es lo que está entre llaves {}

