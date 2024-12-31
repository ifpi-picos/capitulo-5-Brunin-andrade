let num1 = parseInt (prompt("Forneça o primeiro número:"))
let num2 = parseInt (prompt("Forneça o segundo número:"))

if (num1 % num2 === 0 || num2 % num1 === 0 ){
    alert("Pelo menos um dos números é múltiplo do outro")
}
else  {
    alert('Nenhum dos números é múltiplo do outro')
}