let arr1 = [1, 2, 3]
let arr2 = [5, 6, 7]
let arr3 = [1, 4, 2025]

//transforma o valor em String
console.log(arr1.toString())
//adciona uma string entre os elementos
console.log(arr3.join('/'))
console.log(arr2.join(' - '))


/*//procurar o elemento pela posição. se for '-1' é porque não foi encontrado
console.log(arr.indexOf(2))
console.log(arr.lastIndexOf(2))
//mostra se o elemento dentro das '()' existe no array = true ou false
console.log(arr.includes(20))
//retorna o rpimeiro elemento que está de acordo com a condição.
console.log(arr.find(el => el >= 3))
console.log(arr.findIndex(el => el >= 3))
*/

//mostra apenas o elemento selecionado em '[]'. ps: a primeira posição é sempre 0.
//console.log(arr[4])

//quantos elementos tem no ARRAY
//console.log("Tamanho array: ", arr.length)

//esse exemplo não funcionou
/*for (i = 0; i < arr.length; i++) {
    console.log(arr[1])
}*/

// forEach é do Array e exige uma função, esse serve para mostrar todos os elementos de um Array
/*arr.forEach((el, i, _arr) =>{
    console.log("Elemento: ", el)
    mostra o tipo do elemento
    console.log(typeof el)
    mostra a posição do elemento
    console.log("Index: ", i)
    
    if (typeof el === 'number')
        console.log(el * 2)
})*/

/*
//Aqui está perguntando sobre os elementos: 'every' é sobre todos, 'some' é alguns,
//'filter' é filtrar e traz apenas os elementos desejados
let todosNumeros = arr.filter(el => {
    return typeof el === "number"
})
console.log(todosNumeros)//false
*/

