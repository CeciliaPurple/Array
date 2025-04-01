const nome = ["Daniel", "Maria", "Joana", "João", "Manuel"]

let nomesPorOrdem = nome.reduce(function(nomes, nomeAtual) {
    let primeiraLetra = nomeAtual[0] //está pegando a primeira letra do nome
    if (nomes[primeiraLetra]) {
        nomes[primeiraLetra] ++
    }else {
        nomes[primeiraLetra] = 1
    }
    return nomes
}, {})
console.log(nomesPorOrdem)

const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9]
//const numerosUnicos = [1, 3, 4, 5, 8, 9]
const numerosUnicos = []

let numerosNaoRepete = numeros.reduce(function(numeros, numeroAtual) {
    if (numeros.indexOf(numeroAtual)){
        numeros.push(numeroAtual)
    }
    return numeros
})

console.log(numerosNaoRepete)