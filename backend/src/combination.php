<?php

include "./backend/src/config/db.php";

$query = "SELECT e3.name AS result FROM combination 
INNER JOIN element e3 ON e3.id = combination.result_id
WHERE (combination.element1_id = ? AND combination.element2_id = ?)
OR (combination.element1_id = ? AND combination.element2_id = ?)";

$element1 = $_POST["element1"];
$element2 = $_POST["element2"];

try {
        $stmt = $conn->prepare($query);
        
        $stmt->bind_param("iiii", $element1, $element2, $element2, $element1);
        
        $stmt->execute();
        
        $result = $stmt->fetch();
        
        echo $result;
} catch (Error $error) {
        echo $error;
}       