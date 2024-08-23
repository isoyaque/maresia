

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
        setTimeout(() => descricao.classList.add('anime'), 0); // Pequeno atraso para garantir a transição
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

document.addEventListener('DOMContentLoaded', () => {
    const produtos = document.querySelectorAll('.produto');

    produtos.forEach(produto => {
        const img = produto.querySelector('img');
        const spans = produto.querySelectorAll('span');

        if (img) { // Verifica se o elemento img existe
            img.addEventListener('mouseover', () => {
                spans.forEach(span => {
                    if (span) { // Verifica se o span existe
                        span.style.opacity = '1';
                    }
                });
            });

            img.addEventListener('mouseout', () => {
                spans.forEach(span => {
                    if (span) { // Verifica se o span existe
                        span.style.opacity = '0';
                    }
                });
            });
        } else {
            console.error('Imagem não encontrada dentro de um .produto');
        }
    });
});

// geladeira

let miniPet = document.querySelector('.pet200ml');
let miniLata = document.querySelector('.lata220ml');
let lata = document.querySelector('.lata350ml');
let garrafa = document.querySelector('.pet600ml');
let garrafaGrande = document.querySelector('.pet2l');

let range = document.getElementById('embalagem');

// Função para atualizar a visibilidade com base no valor do range
function atualizarVisibilidade() {
    let valor = parseInt(range.value);

    // Remove a classe 'ativo' de todos os elementos
    miniPet.classList.remove('ativo');
    miniLata.classList.remove('ativo');
    lata.classList.remove('ativo');
    garrafa.classList.remove('ativo');
    garrafaGrande.classList.remove('ativo');

    // Adiciona a classe 'ativo' ao elemento correspondente
    if (valor == 0) {
        miniPet.classList.add('ativo');
    } else if (valor == 1) {
        miniLata.classList.add('ativo');
    } else if (valor == 2) {
        lata.classList.add('ativo');
    } else if (valor == 3) {
        garrafa.classList.add('ativo');
    } else if (valor == 4) {
        garrafaGrande.classList.add('ativo');
    }
}

// Adiciona o evento de mudança para o input range
range.addEventListener('input', atualizarVisibilidade);

// Chama a função inicialmente para definir o estado inicial
atualizarVisibilidade();

console.log("carregou")