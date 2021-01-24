let shipName = prompt("Qual nome da nave?")

let enterFold = ""
let fold = 0
enterFold = prompt("Deseja entrar na dobra espacial?\n1-Sim\n2-Não")

while (enterFold == "1") {
    fold += 1
    enterFold = prompt("Deseja Realizar mais uma dobra?\n1-Sim\n2-Não")
}

alert("Nave: " + shipName + "\nDobras: " + fold)