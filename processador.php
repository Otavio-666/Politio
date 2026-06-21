<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    include 'conect.php'; // <--- Adicionado o ponto e vírgula aqui!

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $mensagem = $_POST['mensagem'];

    $sql = "INSERT INTO mensagens (nome, email, telefone, mensagem) VALUES ('$nome', '$email', '$telefone', '$mensagem')";
    
    // Executa a query e verifica se deu certo
    if ($conn->query($sql) === TRUE) {
        echo "Mensagem enviada com sucesso, $nome!";
    } else {
        echo "Erro ao enviar a mensagem: " . $conn->error;
    }

    // Fecha a conexão por último (apenas uma vez)
    $conn->close();
}
?>