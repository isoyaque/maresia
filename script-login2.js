// Lista de usuários e senhas válidos
const users = [
    { username: "Luan", password: "123" },
    { username: "usuario2", password: "senha456" },
    { username: "usuario3", password: "senha789" }
];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Verifica se as credenciais correspondem a algum usuário válido
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Armazena o estado de login no localStorage
        localStorage.setItem('loggedIn2', 'true');
        // Armazena o nome do usuário no localStorage
        localStorage.setItem('username', username);
        // Redireciona para a página protegida
        window.location.href = "pagina2.html";
    } else {
        // Exibe uma mensagem de erro se as credenciais estiverem incorretas
        errorMessage.textContent = "Usuário ou senha incorretos!";
    }
}
