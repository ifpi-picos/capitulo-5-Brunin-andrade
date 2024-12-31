let num1 = parseInt(prompt("Insira o primeiro número:"))
let num2 = parseInt(prompt("Insira o segunda número:"))
let num3 = parseInt(prompt("Insira o terceiro número:"))
let maiornumero 

if (num1 >= num2 && num1 >= num3){
    maiornumero = num1
} else if ( num2 >= num1 && num2 >= num3){
    maiornumero = num2
}
else {
    maiornumero = num3
}
console.log("O maior número é: " + maiornumero);