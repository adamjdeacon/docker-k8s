<?php

echo "hello, world, I'm " . $_ENV['MY_NODE_NAME'] . ". Nice to meet you" .PHP_EOL;
echo "The time is: " . date('l jS \of F Y h:i:s A') . PHP_EOL;

$host	= "ajd-db";
$user	= "app";
$pass	= "Ohchoo1keiv8iipha6Oo";
$db		= "staff";

$conn = new mysqli($host,$user,$pass,$db);

if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT id,name FROM employees";
$result = $conn->query($sql);

if ( $result->num_rows > 0 ) {
	while ($row = $result->fetch_assoc() ) {
		echo "ID: " . $row['id'] . " - Name: " . $row['name'] . PHP_EOL;
	}
} else {
	echo "No records found";
}
