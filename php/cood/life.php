<?php
$a = $_GET["life_id"];

$mysql = new mysqli("localhost","root","","sannuo");

if($mysql->connect_errno){
die($mysql->connect_errno);
};
$mysql->query("set names utf8");


$sqlstr = "select * from life where life_id=\"$a\"";

$result = $mysql->query($sqlstr);

$myArray = array();

while ($record = $result->fetch_assoc()) {
array_push($myArray,$record);
};
echo json_encode($myArray[0]);


?>
