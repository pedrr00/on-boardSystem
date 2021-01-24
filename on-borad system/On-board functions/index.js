let spaceship = prompt("qual nome da nave")

let spaceshipVelocity = 0

let chosenOption

function showMenu() {
  let option
  while (option != "1" && option != "2" && option != "3" && option !="4") {
    option = prompt("o que deseja fazer?\n" +
                    "1-acelerar para 5 km/s\n"+
                    "2-desacelerar para 5 km/s\n"+
                    "3-imprimir Dados\n" +
                    "4-Sair do programa")
  }
  return option

}

function speedUp(velocity){
  let newVelocity = velocity + 5
  return newVelocity
}

function slowDown(velocity){
  let newVelocity = velocity - 5
  if(newVelocity < 0){
    velocity = 0
  }
  return velocity
}

function dataPrint(Name, velocity) {
  alert("Nave: " + spaceship + "\nvelocidade: " + velocity + " km/s")
}

do {
  chosenOption = showMenu()
  switch (chosenOption) {
    case "1":
      spaceshipVelocity = speedUp(spaceshipVelocity)
      break
    case "2":
      spaceshipVelocity = slowDown(spaceshipVelocity)
      break
    case "3":
      dataPrint(spaceship, spaceshipVelocity)
      break
    case "4":
      break
    default:
      alert("Encerrando programa de bordo")
      break
  }
} while (chosenOption != "4");