// ES6

// Promesas

const anotherFuncion = () =>{
    return new Promise((resolve, reject)=>{
        if(false){
            resolve('Hey!!');
        } else {
            reject ('Whoops!');
        }
    })
}

anotherFuncion()
    .then(response => console.log(response))
    .catch(err => console.log(err))