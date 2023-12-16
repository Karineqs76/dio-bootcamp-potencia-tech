let xp = 13000
let nome = "Vazio"

if (xp <= 1000){
    nome = "Ferro"
}
else if (xp >= 1001 && xp <= 2000){
    nome = "Bronze"
}
else if (xp >= 2001 && xp <= 5000){
    nome = "Prata"
}
else if (xp >= 6001 && xp <= 7000){
    nome = "Ouro"
}
else if (xp >= 7001 && xp <= 8000){
    nome = "Planita Diamante"
}
else if (xp >= 8001 && xp <= 9000){
    nome = "Ascendente"
}
else if (xp >= 9001 && xp <= 10000){
    nome = "Imortal"
}
else if (xp >= 10001){
    nome = "Radiante"
}
console.log ("O Herói está no nível de " + (nome))