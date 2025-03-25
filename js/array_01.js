let arr = [1, 5, 10, "ola", true]

//console.log(arr)

//mostra apenas o elemento selecionado em '[]'. ps: a primeira posição é sempre 0.
//console.log(arr[4])

//quantos elementos tem no ARRAY
//console.log("Tamanho array: ", arr.length)

//esse exemplo não funcionou
//for (i = 0; i < arr.length; i++) {
//    console.log(arr[1])
//}

// forEach é do Array e exige uma função, esse serve para mostrar todos os elementos de um Array
arr.forEach(function(el, i, _arr){
    console.log("Elemento: ", el)
    console.log("Index: ", i)
    console.log("Array: ", _arr)
})