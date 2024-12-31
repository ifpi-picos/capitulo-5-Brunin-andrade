let num1 = parseFloat(prompt("Forneça sua primeira nota:"))
let num2 = parseFloat(prompt("Forneça sua segunda nota:"))
let num3 = parseFloat(prompt("Forneça sua terceira nota:"))
let num4 = num1 + num2 + num3

const media =  num4 / 3

if (media >= 7) {
    console.log("Aprovado sua media foi:",media)
}
else {
    console.log("Reprovado")
}