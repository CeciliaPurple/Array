let arr1 = [3, 2, 1]
let arr2 = [5, 7, 8]
let arr3 = [1, 4, 2025]
let arr4 = arr1.concat(arr2)



//ADICIONANDO E REMOVENDO//
arr1.push(4) //acrescenta elementos NO final
console.log(arr1)
arr2.push(9, 8, 0, true, "denovo")
console.log(arr2)
console.log(arr2.unshift(12))
console.log(arr2) //acrescenta elementos no INICIO

let elemento = arr2.pop() //remove o ULTIMO elemento
console.log(elemento)
let primeiro = arr2.shift() //remove o PRIMEIRO elemento
console.log(primeiro) 

//retorna parte de um array, o "()" serve para declarar a 
//partir de qual posição vai ser pego os elementos do array
//mas não remove do array original
let arr5 = arr2.slice(1, 4)
console.log(arr5)
let arr6 = arr2.splice(4) // faz o mesmo que o SLICE porem remove do original
console.log(arr6)


// NÚMEROS //
/*console.log(arr1.concat(arr2)) //junta arrays
console.log(arr1.concat(arr3, 4, 8, 0, 3)) //junta arrays e números soltos

console.log(arr4)
console.log(arr4.sort()) //coloca em ordem crescente os números
console.log(arr4.reverse()) //inverte a ordem que foi colocado os números*/