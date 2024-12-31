// Solicita altura e peso ao usuário
let altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75):"));
let peso = parseFloat(prompt("Digite seu peso em quilogramas (ex: 70):"));

// Calcula o IMC
let imc = peso / (altura * altura);

// Classifica o IMC conforme a tabela da OMS
let classificacao;
if (imc < 18.5) {
    classificacao = "Abaixo do peso";
} else if (imc >= 18.5 && imc < 24.9) {
    classificacao = "Peso normal";
} else if (imc >= 25 && imc < 29.9) {
    classificacao = "Sobrepeso";
} else {
    classificacao = "Obesidade";
}

// Exibe o resultado
console.log(`Seu IMC é: ${imc.toFixed(2)}`);
console.log(`Classificação: ${classificacao}`);
