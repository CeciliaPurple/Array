let texto = "Hello World!"
let letras = Array.from(texto) //cria um array
console.log(letras)

let arr = [1, 2, 3, 4]
console.log("Array Original: ", arr)
let arr2 = Array.from(arr, num => num * 2)
console.log("Array Modificado: ", arr2)

let arr0 = Array.of (1,2,3,4,5); //cria um array com os elementos passados como argumento
console.log(arr)

let arr3 = new Array(6)// cria um array vazio com tantas posições"()" vazias
console.log(arr3) 
arr3[4] = 9
console.log(arr3)//vai preencher o espaço 4 com o número 9