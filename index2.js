let resultadoFinal = rankeadas(100, 15)
let nivel = undefined

function rankeadas(derrotas, vitorias){
    let resultado = derrotas - vitorias
    return resultado
}

if (resultadoFinal <= 10){
    nivel = "Ferro"
}
else if (resultadoFinal >= 11 && resultadoFinal <= 20){
    nivel = "Bronze"
}
else if (resultadoFinal >= 21 && resultadoFinal <= 50){
    nivel = "Prata"
}
else if (resultadoFinal >= 51 && resultadoFinal <= 80){
    nivel = "Ouro"
}
else if (resultadoFinal >= 81 && resultadoFinal <= 90){
    nivel = "Diamante"
}
else if (resultadoFinal >= 91 && resultadoFinal <= 100){
    nivel = "Lendário"
}
else if (resultadoFinal >= 101){
    nivel = "Imortal"
}

console.log(`O herói tem saldo de ${resultadoFinal} e está no nível de ${nivel}`)