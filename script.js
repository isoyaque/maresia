function abrir(divId) {
    let descricoes = document.querySelectorAll('.descricao');
    descricoes.forEach(function (descricao) {
        if (descricao.id !== divId) {
            descricao.classList.remove('mostrar', 'anime');
        }
    });

    let descricao = document.getElementById(divId);
    if (!descricao.classList.contains('mostrar')) {
        descricao.classList.add('mostrar');
        setTimeout(() => descricao.classList.add('anime'), 10); // Pequeno atraso para garantir a transição
    } else {
        descricao.classList.remove('anime');
        setTimeout(() => descricao.classList.remove('mostrar'), 1000); // Tempo de transição de 1 segundo
    }
}

function mostrarAdega() {
    let adega = document.getElementById("adega");
    let distribuidora = document.getElementById("distribuidora");

    if (adega.style.display === "none" || adega.style.display === "") {
        adega.style.display = "block";
        distribuidora.style.display = "none";
    } else {
        adega.style.display = "none";
    }
}

function mostrarDistribuidora() {
    let adega = document.getElementById("adega");
    let distribuidora = document.getElementById("distribuidora");

    if (distribuidora.style.display === "none" || distribuidora.style.display === "") {
        distribuidora.style.display = "block";
        adega.style.display = "none";
    } else {
        distribuidora.style.display = "none";
    }
}
const produtos = document.querySelectorAll('.produto');

produtos.forEach(produto => {
    const img = produto.querySelector('img');
    const spans = produto.querySelectorAll('span'); 

    img.addEventListener('mouseover', () => {
        spans.forEach(span => span.style.opacity = '1'); 
    });

    img.addEventListener('mouseout', () => {
        spans.forEach(span => span.style.opacity = '0');
    });
});
