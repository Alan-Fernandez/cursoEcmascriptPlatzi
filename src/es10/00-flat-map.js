// Flat-map

// Flat
// El método flat de los array permite aplanar los elementos internos de un array permitiendo eliminar array internos.
const array = [1,1,2,3,4, [1,3,5,6,[1,2,4]]];

console.log(array.flat(3))
// Si se quiere aplanar todo el arreglo sin pasar una profundidad exacta, se puede hacer uso de Infinity.



// Flat-map
// Permite aplanar los elementos de un array en un nivel, pasando un función que mapeara cada elemento del nuevo array.
const array2 = [1,1,2,3,4];
console.log(array2.flatMap(v => [v, v * 2]))

// Este método no se podría utilizar para array que tengan más de un nivel de profundidad. Sin embargo, se pueden combinar los métodos flat y map para tener un mismo resultado.