// Solicita os lados do triângulo ao usuário
let lado1 = parseFloat(prompt('Digite o valor do primeiro lado do triângulo:'));
let lado2 = parseFloat(prompt('Digite o valor do segundo lado do triângulo:'));
let lado3 = parseFloat(prompt('Digite o valor do terceiro lado do triângulo:'));

// Verifica se os lados formam um triângulo válido
if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 === lado2 && lado2 === lado3) {
        console.log('O triângulo é Equilátero (todos os lados iguais).');
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log('O triângulo é Isósceles (dois lados iguais).');
    } else {
        console.log('O triângulo é Escaleno (todos os lados diferentes).');
    }
} else {
    console.log('Os valores não formam um triângulo válido.');
}
