let lightYear = prompt("Anos luz que deseja converte:")

let conversion = prompt("Converter para...\n\n1-Parsec(PC)\n2-Unidade Astronômica(AU)\n3-Quilômetros(KM)\n")

let convertedDictance = undefined

switch (conversion) {
    case "1":
        let parsec = lightYear * 0.306601
        conversion = "1-Parsec(PC)"
        convertedDictance = parsec + " PC"
        break
    case "2":
        let unidadeAstronomica = lightYear * 63241.1
        conversion = "2-Unidade Astronômica(AU)"
        convertedDictance = unidadeAstronomica + " AU"
        break
    case "3":
        let quilometros = lightYear * 9.5 * Math.pow(10,12)
        conversion = "3-Quilômetros (KM)"
        convertedDictance = quilometros + " KM"
        break
    default:
        alert("Falha na conversão")
        break
}

alert("Anos luz: " + lightYear  +"\nconverteu para: " + conversion + "\nDistância percorrida: " + convertedDictance)