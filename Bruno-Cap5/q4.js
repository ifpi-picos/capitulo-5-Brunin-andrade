let anoNascimento = prompt("Digite seu ano de nascimento:")

anoNascimento = parseInt(anoNascimento)

let idade = 2024 - anoNascimento

if( idade >=18 ){
    console.log('De maior,com:',idade )
}else {
    console.log("De menor,com:",idade)
}
