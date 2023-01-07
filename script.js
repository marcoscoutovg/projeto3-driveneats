function selecionarPrato(pratoSelecionado) {

    const selecionadoAntes = document.querySelector('.comida .selecionada');

    if (selecionadoAntes !== null) {
        selecionadoAntes.classList.remove('selecionada');
    }

    pratoSelecionado.classList.add("selecionada");
}

function selecionarBebida(bebidaSelecionada) {

    const bebidaSelecionadaAntes = document.querySelector('.bebida .selecionada');

    if (bebidaSelecionadaAntes !== null) {
        bebidaSelecionadaAntes.classList.remove('selecionada');
    }

    bebidaSelecionada.classList.add("selecionada");
}

function selecionarSobremesa(sobremesaSelecionada) {

    const sobremesaSelecionadaAntes = document.querySelector('.sobremesa .selecionada');

    if (sobremesaSelecionadaAntes !== null) {
        sobremesaSelecionadaAntes.classList.remove('selecionada');
    }

    sobremesaSelecionada.classList.add("selecionada");
}