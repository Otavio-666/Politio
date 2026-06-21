document.getElementById('MENSAGEM').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento padrão da página

    const formData = new FormData(this); // Captura todos os dados do formulário

    // Envia os dados para o arquivo PHP
    fetch('/Politico/PHP/processador.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Exibe a mensagem que o PHP retornar dentro da div #statusEnvio
        document.getElementById('statusEnvio').innerHTML = data;
        document.getElementById('MENSAGEM').reset(); //limpa o formulario
        
        setTimeout(function() {
            document.getElementById('statusEnvio').innerHTML = ''; // Esvazia a div, fazendo o texto sumir
        }, 4000);// 4000 é o tempo
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});