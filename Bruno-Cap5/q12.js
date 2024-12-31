let numero = parseInt(prompt("Digite um número inteiro não negativo:"));

// Verifica se o número é válido
if (numero >= 0) {
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i; // Multiplica o valor atual do fatorial pelo número atual
    }

    console.log(`O fatorial de ${numero} é: ${fatorial}`);
} else {
    console.log("Por favor, digite um número inteiro não negativo.");
}
