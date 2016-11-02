<?php
	$bigid = $_GET["b"];
	$littleId =$_GET["a"];
$mysql = new mysqli("localhost","root","","sannuo");

if($mysql->connect_errno){
  die($mysql->connect_errno);
};
$mysql->query("set names utf8");
$sqlstr = "select * from meitibaodao where meiti_id between 1 and 15";

$result = $mysql->query($sqlstr);

$myArray = array();

while ($record = $result->fetch_assoc()) {
array_push($myArray,$record);
};

echo json_encode($myArray);


?>
