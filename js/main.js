function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

// lista criada com todos os elementos com a class 'tecla'
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];

    // pega o nome da class na posição 1 porque possui dois nomes de class
    const instrumento = tecla.classList[1];

    // template string
    const idAudio = `#som_${instrumento}`;

    // função anônima foi atribuída no evento onclick
    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    contador++;
}