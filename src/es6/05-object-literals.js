// enhanced object literals
 

// • Dentro de la carpeta es6, crear el archivo llamado: 05-object-literals.js
// ◦ El código de los ejercicios queda:
//Compilar: seleccionar el código + click derecho + Run Code

//Ejercicio #1
// enhanced object literals

function newUser(user, age, country){
	return{
		user,
		age,
		country,
		id: uId
	}
}

console.log(newUser('gndx', 34, "MX", 1));

/*output:
id: uId
^

ReferenceError: uId is not defined
*/

function newUser2(user, age, country, uId){
	return{
		user,
		age,
		country,
		id: uId
	}
}

console.log(newUser2('gndx', 34, "MX", 1));

/*output:
{ user: 'gndx', age: 34, country: 'MX', id: 1 }
*/
