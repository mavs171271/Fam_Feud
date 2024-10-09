<?php
// Database connection
$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'family_feud';
$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
}

// Insert player score into database
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $playerName = $_POST['player_name'];
    $score = $_POST['score'];

    $sql = "INSERT INTO scores (player_name, score, game_date) VALUES ('$playerName', '$score', NOW())";

    if (mysqli_query($conn, $sql)) {
        echo "Score saved!";
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}

mysqli_close($conn);
?>
