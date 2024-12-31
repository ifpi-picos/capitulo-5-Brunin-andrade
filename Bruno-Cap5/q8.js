let continuar = true;

while (continuar) {
    let opcao = prompt(
        "Escolha uma opção:\n1. Dizer o dia da semana\n2. Explicar switch\n3. Sair"
    );

    switch (opcao) {
        case "1":
            let dia = prompt("Digite um dia da semana:");
            switch (dia.toLowerCase()) {
                case "segunda":
                    console.log("Hoje é segunda-feira.");
                    break;
                case "terça":
                    console.log("Hoje é terça-feira.");
                    break;
                case "quarta":
                    console.log("Hoje é quarta-feira.");
                    break;
                case "quinta":
                    console.log("Hoje é quinta-feira.");
                    break;
                case "sexta":
                    console.log("Hoje é sexta-feira.");
                    break;
                case "sábado":
                    console.log("Hoje é sábado.");
                    break;
                case "domingo":
                    console.log("Hoje é domingo.");
                    break;
                default:
                    console.log("Dia inválido.");
            }
            break;

        case "2":
            console.log(
                "O switch é usado para verificar várias opções de uma forma mais organizada."
            );
            break;

        case "3":
            console.log("Saindo... Até logo!");
            continuar = false;
            break;

        default:
            console.log("Opção inválida, tente novamente.");
    }
}
