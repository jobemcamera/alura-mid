function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    // verifica se elemento é nulo e do tipo audio
    if (elemento && elemento.localName === 'audio') {
            elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido.');
    }
}

// lista criada com todos os elementos com a class 'tecla'
const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];

    // pega o nome da class na posição 1 porque possui dois nomes de class
    const instrumento = tecla.classList[1];

    // template string
    const idAudio = `#som_${instrumento}`;

    // função anônima foi atribuída ao evento onclick
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    // função anônima foi atribuída ao evento onkeydown
    tecla.onkeydown = function (evento) {
        // condição das telcas (enter e espaço)
        if (evento.conde === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    // função anônima foi atribuída ao evento onkeyup
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
