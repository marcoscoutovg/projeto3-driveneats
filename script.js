let valorPrato;

let nomePrato;

function selecionarPrato(pratoSelecionado) {

    const selecionadoAntes = document.querySelector('.comida .selecionada');

    if (selecionadoAntes !== null) {
        selecionadoAntes.classList.remove('selecionada');
    }

    pratoSelecionado.classList.add("selecionada");

    if (pratoSelecionado.innerHTML === document.querySelector('.um').innerHTML) {
        valorPrato = document.querySelector('.um h2').innerHTML;
        nomePrato = document.querySelector('.um h1').innerHTML;
    }

    if (pratoSelecionado.innerHTML === document.querySelector('.dois').innerHTML) {
        valorPrato = document.querySelector('.dois h2').innerHTML;
        nomePrato = document.querySelector('.dois h1').innerHTML;
    }

    if (pratoSelecionado.innerHTML === document.querySelector('.tres').innerHTML) {
        valorPrato = document.querySelector('.tres h2').innerHTML;
        nomePrato = document.querySelector('.tres h1').innerHTML;
    }

    valorPrato = valorPrato.replace('R$ ', '');
    valorPrato = valorPrato.replace(',', '.');

    parseFloat(valorPrato);

    comidaEscolhida = pratoSelecionado;

    verificarPedidos();
}

let valorBebida;

let nomeBebida;

let valorSobremesa;

let nomeSobremesa;

let comidaEscolhida;

function selecionarBebida(bebidaSelecionada) {

    const bebidaSelecionadaAntes = document.querySelector('.bebida .selecionada');

    if (bebidaSelecionadaAntes !== null) {
        bebidaSelecionadaAntes.classList.remove('selecionada');
    }

    bebidaSelecionada.classList.add("selecionada");


    if (bebidaSelecionada.innerHTML === document.querySelector('.cocaA').innerHTML) {
        valorBebida = document.querySelector('.cocaA h2').innerHTML;
        nomeBebida = document.querySelector('.cocaA h1').innerHTML;
    }

    if (bebidaSelecionada.innerHTML === document.querySelector('.cocaB').innerHTML) {
        valorBebida = document.querySelector('.cocaB h2').innerHTML;
        nomeBebida = document.querySelector('.cocaB h1').innerHTML;
    }

    if (bebidaSelecionada.innerHTML === document.querySelector('.cocaC').innerHTML) {
        valorBebida = document.querySelector('.cocaC h2').innerHTML;
        nomeBebida = document.querySelector('.cocaC h1').innerHTML;
    }

    valorBebida = valorBebida.replace('R$ ', '');
    valorBebida = valorBebida.replace(',', '.');

    parseFloat(valorBebida);

    bebidaEscolhida = bebidaSelecionada;

    verificarPedidos();
}

let bebidaEscolhida;

function selecionarSobremesa(sobremesaSelecionada) {

    const sobremesaSelecionadaAntes = document.querySelector('.sobremesa .selecionada');

    if (sobremesaSelecionadaAntes !== null) {
        sobremesaSelecionadaAntes.classList.remove('selecionada');
    }

    sobremesaSelecionada.classList.add("selecionada");

    if (sobremesaSelecionada.innerHTML === document.querySelector('.pudimA').innerHTML) {
        valorSobremesa = document.querySelector('.pudimA h2').innerHTML;
        nomeSobremesa = document.querySelector('.pudimA h1').innerHTML;
    }

    if (sobremesaSelecionada.innerHTML === document.querySelector('.pudimB').innerHTML) {
        valorSobremesa = document.querySelector('.pudimB h2').innerHTML;
        nomeSobremesa = document.querySelector('.pudimB h1').innerHTML;
    }

    if (sobremesaSelecionada.innerHTML === document.querySelector('.pudimC').innerHTML) {
        valorSobremesa = document.querySelector('.pudimC h2').innerHTML;
        nomeSobremesa = document.querySelector('.pudimC h1').innerHTML;
    }

    valorSobremesa = valorSobremesa.replace('R$ ', '');
    valorSobremesa = valorSobremesa.replace(',', '.');

    parseFloat(valorSobremesa);

    sobremesaEscolhida = sobremesaSelecionada;

    verificarPedidos();
}

let sobremesaEscolhida;

function verificarPedidos() {
    if (comidaEscolhida !== undefined && bebidaEscolhida !== undefined && sobremesaEscolhida !== undefined) {
                const habilitarBotao = document.querySelector('button');
                habilitarBotao.classList.add('botao-marcado');
                
                const trocaTexto = document.querySelector('.texto-botao');
                trocaTexto.innerHTML = 'Fechar pedido';

                const habilitar = document.querySelector('button');
                habilitar.disabled = false;
    }   
}

function enviarMensagem() {

    const total = Number(valorPrato) + Number(valorBebida) + Number(valorSobremesa);
    valorTotal = total.toFixed(2);
    
    const mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${nomePrato}\n- Bebida: ${nomeBebida}\n -Sobremesa: ${nomeSobremesa}\n Total: R$ ${valorTotal}`;

    const textoZap = encodeURIComponent(mensagem);

    window.open(`https://wa.me/5521999999999?text=${textoZap}`);
}