// Lista de usuários, senhas e suas respectivas páginas de redirecionamento
const users = [
    { username: "usuario1", password: "senha123", page: "pagina1.html" },
    { username: "usuario2", password: "senha456", page: "pagina2.html" },
    { username: "usuario3", password: "senha789", page: "pagina2.html" }
];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Encontra o usuário que corresponde às credenciais
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Armazena o estado de login no localStorage
        localStorage.setItem('loggedIn', 'true');
        // Redireciona para a página correspondente se o login for bem-sucedido
        window.location.href = user.page;
    } else {
        // Exibe uma mensagem de erro se as credenciais estiverem incorretas
        errorMessage.textContent = "Usuário ou senha incorretos!";
    }
}

// Função para alternar entre as telas de login e recuperação de senha
function senha() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('esqueceuSenha').style.display = 'block';
}

function toggleLogin() {
    document.getElementById('login').style.display = 'block';
    document.getElementById('esqueceuSenha').style.display = 'none';
}
