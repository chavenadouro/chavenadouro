<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    if (isset($data['dailySpecial'])) {
        $json_data = array('dailySpecial' => $data['dailySpecial']);
        file_put_contents('daily-special.json', json_encode($json_data, JSON_PRETTY_PRINT));
        echo 'Atualização bem-sucedida';
    } else {
        echo 'Dados inválidos';
    }
} else {
    echo 'Método não suportado';
}
?>
