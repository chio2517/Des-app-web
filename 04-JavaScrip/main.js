function calcularIMC(peso,altura){
    return peso / (altura * altura)

}

function preguntarIMC(){
    const peso = prompt("¿Cuál es tu peso?")
    const altura = prompt("¿Cuál es tu altura?")
    const IMC = calcularIMC(peso, altura)

    var categoria = ""
    if (IMC < 18.5) categoria = "Bajo Peso"
    else if (IMC < 25) categoria = "Peso Normal"
    else if (IMC < 30) categotia = "Sobrepeso"
    else categoria = "Obesidad"

    alert("Tu indice de masa corporal es: "+ IMC + " Estas con " + categoria)
}

preguntarIMC()
