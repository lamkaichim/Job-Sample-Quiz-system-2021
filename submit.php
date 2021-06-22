<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

//json to array
$new1 = json_decode($_POST['NumCorrect']);
$array2 = json_decode($_POST['Answerstring']);
$new2 = implode(',',$array2);
  
$stmt = $conn->prepare("INSERT INTO abc (Score, UserAnswer) VALUES (?,?)");
$stmt->bind_param("ss", $NumCorrect, $Answerstring);
//retrieve json value
$NumCorrect = $new1;
$Answerstring = $new2;
$stmt->execute();

$stmt->close();
$conn->close();

?>