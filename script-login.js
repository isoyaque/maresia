// Conjunto de credenciais válidas
const validCredentials = [
    { username: 'admin', password: 'admin123' },
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

// Função de login
function login() {
    // Obtém os valores dos campos de usuário e senha
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica se as credenciais são válidas
    const isValid = validCredentials.some(
        cred => cred.username === username && cred.password === password
    );

    if (isValid) {
        // Define 'loggedIn' no localStorage
        localStorage.setItem('loggedIn', 'true');
        // Redireciona para a página protegida
        window.location.href = 'pagina1.html';
    } else {
        // Mostra mensagem de erro se as credenciais estiverem erradas
        document.getElementById('error-message').textContent = 'Usuário ou senha incorretos.';
    }
}

// Função de autenticação na página protegida
function authenticate() {
    const enteredPassword = document.getElementById('password').value;
    console.log('Senha digitada:', enteredPassword); // Debugging
    
    const adminPassword = 'admin123';
    
    if (enteredPassword === adminPassword) {
        console.log('Senha correta. Mostrando formulário.'); // Debugging
        document.getElementById('form-container').style.display = 'block';
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('auth-error').classList.add('hidden');
    } else {
        console.log('Senha incorreta.'); // Debugging
        document.getElementById('auth-error').classList.remove('hidden');
    }
}

// Função para enviar um novo comunicado
function submitAnnouncement() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const announcement = document.getElementById('announcement').value;

    if (title && description && announcement) {
        const values = [[title, description, announcement]];
        const body = {
            values: values
        };

        fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}:append?valueInputOption=RAW&key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Comunicado enviado com sucesso:', data);
            // Limpa o formulário e recarrega os comunicados
            document.getElementById('title').value = '';
            document.getElementById('description').value = '';
            document.getElementById('announcement').value = '';
            loadAnnouncements();
        })
        .catch(error => console.error('Erro ao enviar o comunicado:', error));
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Função para fazer logout
function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'index.html'; // Redireciona para a página de login
}

// Função para carregar os comunicados
function loadAnnouncements() {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            const announcementsDiv = document.getElementById('announcements');
            const rows = data.values.slice(1); // Ignora o cabeçalho
            announcementsDiv.innerHTML = rows.map(row => 
                `<div class="announcement">
                    <h3>${row[0]}</h3>
                    <p><strong>Descrição:</strong> ${row[1]}</p>
                    <p>${row[2]}</p>
                </div>`
            ).join('');
        })
        .catch(error => console.error('Erro ao carregar os dados da planilha:', error));
}

// Verifica o estado de login na página protegida
window.onload = function () {
    if (document.getElementById('login')) {
        // Página de login
        document.getElementById('login').style.display = 'block';
    } else if (document.getElementById('auth-container')) {
        // Página protegida
        const loggedIn = localStorage.getItem('loggedIn');
        if (loggedIn !== 'true') {
            alert('Você precisa estar logado para acessar esta página.');
            window.location.href = 'index.html';
        }
        // Carrega comunicados na página protegida
        loadAnnouncements();
    }
};
