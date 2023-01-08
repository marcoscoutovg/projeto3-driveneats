function selecionarPrato(pratoSelecionado) {

    const selecionadoAntes = document.querySelector('.comida .selecionada');

    if (selecionadoAntes !== null) {
        selecionadoAntes.classList.remove('selecionada');
    }

    pratoSelecionado.classList.add("selecionada");

    comidaEscolhida = pratoSelecionado;

    verificarPedidos();
}

let comidaEscolhida;

function selecionarBebida(bebidaSelecionada) {

    const bebidaSelecionadaAntes = document.querySelector('.bebida .selecionada');

    if (bebidaSelecionadaAntes !== null) {
        bebidaSelecionadaAntes.classList.remove('selecionada');
    }

    bebidaSelecionada.classList.add("selecionada");

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
                finalizarPedido();
    }
}

function finalizarPedido() {
        const habilitar = document.querySelector('button');
        habilitar.disabled = false;
        console.log(habilitar);
}
