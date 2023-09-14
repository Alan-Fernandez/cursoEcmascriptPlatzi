// Before ES6



function newUser(name, age, country){
    var name = name || 'Pepe';
    var age = age || 34;
    var country = country || 'AR'
    console.log(name, age, country)
}


newUser();
newUser('Alan', 60, 'BR')


// After ES6
function newAdmin(name='Alan', age=24,  country= 'br'){
    console.log(name, age, country);
}

newAdmin()
newAdmin('Alan', 60, 'BR');


// OTRA FORMA :
//nullish coalescing operator "??"
function Users(name,age,country) {
    console.log(name??"user",age??0,country??"default");
}

Users();
Users("marco",25,"nicaragua");