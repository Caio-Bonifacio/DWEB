let idades = [];
let homens = 0;
let mulheres = 0;
let outros = 0;

let otimo = 0;
let bom = 0;
let pessimo = 0;

let somaIdades = 0;
let quantidade = 0;

let continuar = "s";

while(continuar  == "s"){
    let idade = Number(prompt("Digite sua idade: "));
    let sexo = prompt("Digite seu sexo(M, F ou O): ").toUpperCase();
    let opiniao = Number(prompt("Informe sua opnião do filme: \n1-Péssimo \n2-Regular \n3-Bom \n4-Ótimo"));

    idades.push(idade);
    somaIdades += idade;
    quantidade++;

    if(sexo == "F"){
        mulheres++;
    }
    else if(sexo == "M"){
        homens++;
    }
    else if(sexo == "O"){
        outros++;
    }

    if(opiniao == 1){
        pessimo++;
    }
    else if(opiniao == 3){
        bom++;
    }
    else if(opiniao == 4){
        otimo++;
    }

continuar = prompt("Deseja passar o questionário a outra pessoa? (s/n)").toLowerCase();
}

let media = somaIdades / quantidade;

let maiorIdade = idades[0];
let menorIdade = idades[0];

for (let i = 0; i < idades.length; i++) {
    if (idades[i] > maiorIdade) {
        maiorIdade = idades[i];
    }

    if (idades[i] < menorIdade) {
        menorIdade = idades[i];
    }
}

let porcentagemBomOtimo = ((bom + otimo) / quantidade) * 100;

alert(
    "RESULTADO DA PESQUISA\n\n" +
    "Média das idades: " + media.toFixed(2) + "\n" +
    "Pessoa mais velha: " + maiorIdade + " anos\n" +
    "Pessoa mais nova: " + menorIdade + " anos\n" +
    "Respostas péssimo: " + pessimo + "\n" +
    "Porcentagem bom e ótimo: " + porcentagemBomOtimo.toFixed(2) + "%\n\n" +
    "Mulheres: " + mulheres + "\n" +
    "Homens: " + homens + "\n" +
    "Outros: " + outros
);