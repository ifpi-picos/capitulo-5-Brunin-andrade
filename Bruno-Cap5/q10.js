let numero = parseInt(prompt("Digite um número positivo:"));

// Verifica se o número é válido
if (numero >= 0) {
    let contador = 0;

    console.log(`Números pares de 0 até ${numero}:`);
    
    while (contador <= numero) {
        if (contador % 2 === 0) {
            console.log(contador);
        }
        contador++;
    }
} else {
    console.log("Por favor, digite um número positivo.");
}
