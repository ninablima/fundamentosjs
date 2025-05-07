// let a = 10;
// let b = 20;
// let c;

// c = a
// a = b;
// b = c;

// console.log(`a = ${a}, b = ${b}`);




// let nomeUsuario = prompt("Qual seu nome?")
// let profissaoUsuario = prompt("Qual sua profissão? ")

// alert(`Olá ${nomeUsuario}! Que interessante saber que você trabalha como ${profissaoUsuario}.`);



// let nome = prompt("Qual seu nome? ");
// let idade = parseInt(prompt("Qual sua idade? "));
// let habilitado = confirm("Você é habilitado? ")

// if (idade >= 18 && habilitado) {
//     alert(`Olá, ${nome}! Você pode dirigir.`)
// } else if (idade >= 18) {
//     alert(`Olá, ${nome}! Você não pode dirigir, precisa de habilitação.`)
// }else {
//     alert(`Olá, ${nome}! Você não pode dirigir.`)
// }




// let temperatura = parseInt(prompt("Digite a temperatura local atual: "));

// if (temperatura > 35) {
//     alert(" Calor intenso");
// } else if (temperatura >= 25) {
//     alert(" Clima quente");
// } else if (temperatura >= 15) {
//     alert(" Clima agradável");
// } else if (temperatura >= 5) {
//     alert(" Clima frio");
// } else {
//     alert("Frio intenso");
// }




// let temperatura = prompt("Qual a temperatura? ");

// temperatura > 35 ? alert("Calor extremo"):
// temperatura >= 25 ? alert("Clima quente"):
// temperatura >= 15 ? alert("Clima agradável"):
// temperatura >= 5 ? alert("Clima frio"): alert("Frio intenso");




// let num = parseInt(prompt("Digite um número: "));

// num % 2 == 0 ? alert("Número par"): alert("Número impar");



let menu = parseInt(prompt(` 
    1- Saque
    2- Transferência
    3- Saldo
    4- Extrato
    `));

switch (menu) {
    case 1:
        alert("Faça um saque aqui");
        break;

    case 2: 
        alert("Faça uma transferência aqui");
        break;

    case 3:
        alert("Faça um saldo aqui");
        break

    case 4:
        alert("Faça um extrato aqui");
        break

    default:
        alert("Opção inválida.")
        break;
}