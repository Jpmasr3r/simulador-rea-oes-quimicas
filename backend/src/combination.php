<?php
include "./config/db.php";

if ($mysqli->connect_error) {
	die("Conexão falhou: " . $mysqli->connect_error);
}

$element1 = $_POST['element1'];
$element2 = $_POST['element2'];

$query = "
	SELECT e3.name AS result FROM combination 
	INNER JOIN element e3 ON e3.id = combination.result_id
	WHERE (combination.element1_id = ? AND combination.element2_id = ?)
	OR (combination.element1_id = ? AND combination.element2_id = ?)
";

$stmt = $mysqli->prepare($query);

if ($stmt) {
	$stmt->bind_param("iiii", $element1, $element2, $element2, $element1);

	$stmt->execute();

	$result = $stmt->get_result();

	$data = [];
	while ($row = $result->fetch_assoc()) {
		$data[] = $row['result'];
	}
	echo json_encode($data);
} else {
	echo json_encode(["error" => "Erro ao preparar a consulta."]);
}