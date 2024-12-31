// Gera um número aleatório entre 1 e 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 10;

console.log("Bem-vindo ao jogo de adivinhação!");

// Laço para permitir até 10 tentativas
while (tentativasRestantes > 0) {
    let palpite = parseInt(prompt(`Você tem ${tentativasRestantes} tentativas restantes. Qual é o seu palpite?`));

    if (palpite === numeroSecreto) {
        console.log("Parabéns! Você acertou o número secreto!");
        break;
    } else if (palpite < numeroSecreto) {
        console.log("Errado! O número secreto é maior.");
    } else if (palpite > numeroSecreto) {
        console.log("Errado! O número secreto é menor.");
    }

    tentativasRestantes--;

    if (tentativasRestantes === 0) {
        console.log(`Que pena! Suas tentativas acabaram. O número secreto era: ${numeroSecreto}`);
    }
}
