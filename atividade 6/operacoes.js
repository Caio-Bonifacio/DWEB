let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let produto = numero1 * numero2;

alert(
    "Soma: " + soma +
    "\nSubtração: " + subtracao +
    "\nProduto: " + produto
);

if (numero2 !== 0) {
    let divisao = numero1 / numero2;
    let resto = numero1 % numero2;

    alert(
        "Divisão: " + divisao +
        "\nResto da divisão: " + resto
    );
} else {
    alert("Não é possível dividir por zero!");
}

confirm("Deseja encerrar o programa?");