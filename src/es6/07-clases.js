// declarando
class User {};
// Instancia de una clase
// const newUser = new User();

class user {
    //metodos
    greeting(){
        return 'Hello';
    }
};

//instancia de user
const gndx = new user();
console.log(gndx.greeting());

const bebeloper = new user();
console.log(bebeloper.greeting())

//Constructor
class user {
    //Constructor
    constructor(){
        console.log('Nuevo Usuario');
    }
    greeting(){
        return 'Hello';
    }
}

const pedro = new user()

//this 
class user {
    constructor(name){
        this.name = name
    }
    // metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return`${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');

console.log(ana.greeting())

// setters getters

class user {
    //constructos
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodo
    speak() {
        return 'Hello';
    }

    greeting(){
        return`${this.speak()} ${this.name}`
    }

    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const bebeloperOne = new user('pedro', 15);
console.log(bebeloperOne.uAge);
console.log(bebeloperOne.uAge = 20)