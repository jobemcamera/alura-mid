function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

// função tocaSomPom foi guardada dentro do evento onclick
document.querySelector('.tecla_pom').onclick = tocaSomPom;