let EscolhaUser = parseInt(prompt("Escolha uma opção (Pedra: 1;Papel: 2;Tesoura: 3): "))
let Computador = Math.floor(Math.random()* 3) + 1

if(EscolhaUser <= 0 || EscolhaUser > 3)
    alert('Escolha inválida')

if(EscolhaUser == Computador)
    alert('Empate')
else
    if(EscolhaUser == 1 && Computador == 2)
        alert('Você perdeu')
    else
        if(EscolhaUser == 1 && Computador == 3)
            alert('Você ganhou')
        else
            if(EscolhaUser == 2 && Computador == 1)
                alert('Você ganhou')
            else
                if(EscolhaUser == 2 && Computador == 3)
                    alert('Você perdeu')
                else
                    if(EscolhaUser == 3 && Computador == 1)
                        alert('Você perdeu')
                    else
                        if(EscolhaUser == 3 && Computador == 2)
                            alert('Você ganhou')

