var numero = document.querySelector('#num');
var buton = document.querySelector('#btn');
var ganhou = document.querySelector('#ganhou')
var guardandoValor = [];
var i = 0;
var numeroAleatorio = Number.parseInt((Math.random()*99 + 1))
var jogo = document.querySelector('#jogo');
var reta = 2;
var resposta = document.querySelector('#resultado')



function numeral() {
    var pegando = numero.value


    if (guardandoValor.length < 10 && pegando != "" && guardandoValor.indexOf(pegando) == -1){
        if(pegando < 100 && pegando > 0){
        guardandoValor.push(pegando)
        var criarParagrafo = document.createElement('p')
        criarParagrafo.textContent = guardandoValor[i]
        
        document.querySelector('#inserir').appendChild(criarParagrafo)

        if(guardandoValor[i] == numeroAleatorio){
            resposta.textContent = "Acertou"
            buton.style = "display: none;"
            ganhou.style = "display: flex;"
            resposta.style ="background-color: green; color:white"
        }
        else{
            
            if(numeroAleatorio > pegando){
                resposta.textContent = "ERROU - seu palpite está baixo!"
            }else{
                resposta.textContent = "ERROU - seu palpite está alto!"
            }
            resposta.style ="background-color:red; color:white;"
        }
        i++
         }

    }
    if(guardandoValor.length == 10){
        buton.style = "display: none;"
        ganhou.style = "display: flex"
        resposta.textContent="Voce Perdeu!"
    }

}
function pagina(){
    window.location.reload()
}
buton.addEventListener('click', numeral);
ganhou.addEventListener('click',pagina);