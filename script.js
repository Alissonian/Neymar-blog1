// Botão para mudar o tema do site
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Mudar Tema';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '10px';
toggleButton.style.right = '10px';
toggleButton.style.padding = '10px';
toggleButton.style.backgroundColor = '#004080';
toggleButton.style.color = '#fff';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';
toggleButton.style.zIndex = '1000';
toggleButton.style.transition = 'background-color 0.3s';

document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        toggleButton.textContent = 'Tema Claro';
    } else {
        toggleButton.textContent = 'Mudar Tema';
    }
});

// Formulário de Contato
const formContato = document.getElementById('form-contato');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

if (formContato) {
    formContato.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados para um servidor
        mensagemSucesso.style.display = 'block';
        formContato.reset();
        setTimeout(() => {
            mensagemSucesso.style.display = 'none';
        }, 5000);
    });
}
