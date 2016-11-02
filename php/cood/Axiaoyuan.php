<?php
$a = $_GET["xiaoyuanzhaopin_id"];

$mysql = new mysqli("localhost","root","","sannuo");

if($mysql->connect_errno){
die($mysql->connect_errno);
};
$mysql->query("set names utf8");


$sqlstr = "select * from xiaoyuanzhaopin where xiaoyuanzhaopin_id=\"$a\"";

$result = $mysql->query($sqlstr);

$myArray = array();

while ($record = $result->fetch_assoc()) {
array_push($myArray,$record);
};
echo json_encode($myArray[0]);


?>
