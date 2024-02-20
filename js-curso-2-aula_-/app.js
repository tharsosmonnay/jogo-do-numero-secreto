//let titulo = document.querySelector ('h1');
//titulo.innerHTML = 'jogo do numero secreto.';
//let paragrafo = document.querySelector ('p');
//paragrafo.innerHTML = 'escolha um numero entre 1 e 10.';


let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
 function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
 }
 function exibirMensagemInicial() {
        exibirTextoNaTela('h1', 'jogo do numero secreto');
        exibirTextoNaTela('p', 'escolha um numero entre 1 e 100');
        
 }
 exibirMensagemInicial()


 //Código omitido
//funcao do chute
 function verificarChute() {
let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
                exibirTextoNaTela('h1', 'Acertou!');
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
let mensagemTentativas = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}.`;
                exibirTextoNaTela('p',mensagemTentativas);
document.getElementById ('reiniciar').removeAttribute('disabled');
//desabilitamos o disable do botao reiniciar no html com esse comando .


        } else {
        if (chute > numeroSecreto) {
                exibirTextoNaTela('p', 'O número secreto é menor');
         } else {
         if (chute < numeroSecreto)  {    
         exibirTextoNaTela('p', 'O número secreto é maior');
         }
        }
         tentativas++;
         limparCampo();
        }
}


    


//funcao para gerar numero aleatorio
 function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    quanquantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quanquantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = []; 
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
//includes e uma funcao


function limparCampo() {
        chute = document.querySelector ('input');
        chute.value = '';
}
//chute.value = '';fez isso para ficar vazio, ou seja reiniciar.
//funcao do botao reiniciar
function reiniciarJogo() {
        numeroSecreto = gerarNumeroAleatorio;
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial();
        document.getElementById ('reiniciar').setAttribute ('disabled', true);
}