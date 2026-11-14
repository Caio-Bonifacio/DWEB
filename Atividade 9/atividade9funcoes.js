//função 1//
function funcao1(){
let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let num3 = Number(prompt("Digite o terceiro número: "));

alert("O maior número é: " + Math.max(num1, num2, num3));
}

//função 2//
function funcao2(){

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let num3 = Number(prompt("Digite o terceiro número: "));
let arr = [num1, num2, num3];

const n = arr.length
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    alert("Ordem crescente: " + arr);
}

//função 3//
function funcao3(){
    let TextString = prompt("Digite uma linha de texto ou palavra: ");

    TextString = TextString.toLowerCase().replaceAll(" ", "")

    let InvertString = TextString.split("").reverse().join("")

    if(TextString == InvertString){
        alert("É um pálindromo")
    }
    else{
        alert("Não é pálindromo")
    }
}

//função 4//
function funcao4(){
        let PrimString = prompt("Digite uma palavra: ");
        let SegString = prompt("Digite outra palavra: ");

        PrimString = PrimString.toLowerCase().replaceAll(",");
        SegString = SegString.toLowerCase().replaceAll(",");

        if(PrimString.includes(SegString)){
            alert("A segunda palavra esta contida na primeira")
        }
        else{
            alert("A segunda palavra não esta contida na primeira")
        }
}

//função 5//
function funcao5(){
    let DataInformada = prompt("Informe uma data no molde AAAA-MM-DD: ")

    let ObjetoData = new Date(DataInformada + 'T00:00:00');
    let Diasemana = ObjetoData.toLocaleDateString('pt-br',{weekday:'long'})

    alert("O dia da semana da data informada é: " + Diasemana)
}