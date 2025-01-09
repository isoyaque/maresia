const itens = document.querySelector('.itens-form');
const btnAdicionar = document.querySelector('#btn-adicionar');
const btnCotar = document.querySelector('#btn-finalizar');

// Inicializa a cotação
function AdicionarItens() {
    const criarLinha = document.createElement('input');
    criarLinha.type = 'text';
    criarLinha.placeholder = 'Item / Embalagem';
    criarLinha.className = 'cotacao-item';

    const remove = document.createElement('span');
    remove.innerHTML = 'Excluir';
    remove.className = 'remover';

    const novaLinha = document.createElement('div');
    novaLinha.appendChild(criarLinha);
    novaLinha.appendChild(remove);

    remove.addEventListener('click', function () {
        novaLinha.remove();
        atualizarItensCotacao(); // Atualiza a lista de itens após a exclusão
    });

    itens.appendChild(novaLinha);
    atualizarItensCotacao(); // Atualiza a lista de itens após adicionar
}

// Função para atualizar a lista de itens cotados
function atualizarItensCotacao() {
    // Atualiza a lista de itens cotados
    return document.querySelectorAll('.cotacao-item');
}

// Evento para adicionar itens
btnAdicionar.addEventListener('click', () => {
    AdicionarItens();
});

// Evento para finalizar a cotação
btnCotar.addEventListener('click', () => {
    const itensCotacao = atualizarItensCotacao(); // Atualiza a lista de inputs

    // Garante que haja pelo menos um item para cotação
    if (itensCotacao.length === 0) {
        alert("Por favor, adicione pelo menos um item para a cotação.");
        return; // Para a execução se não houver itens
    }

    let mensagem = 'Olá, vim do site e preciso dessa cotação:\n';
    
    itensCotacao.forEach((input) => {
        if (input.value.trim() !== "") { // Verifica se o input não está vazio
            mensagem += `${input.value}, `; // Adiciona cada valor de input à mensagem
        }
    });

    // Codifica a mensagem para a URL
    const mensagemCodificada = encodeURIComponent(mensagem);

    // Cria a URL do WhatsApp
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=5513997739347&text=${mensagemCodificada}`;
    
    // Abre a URL do WhatsApp em uma nova aba
    window.open(urlWhatsApp, '_blank');
});

// Adiciona um input inicial se ainda não existir
if (document.querySelectorAll('.cotacao-item').length === 0) {
    AdicionarItens();
}
