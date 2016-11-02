<?php
$mysql = new mysqli("localhost","root","","sannuo");

if($mysql->connect_errno){
  die($mysql->connect_errno);
};

$mysql->query("set names utf8");

$sqlstr = "select * from lbt";
// $sqlstr = "select * from ztlbt";

$result = $mysql->query($sqlstr);
// var_dump($result);
$myArray = array();
//fetch_assoc:查询出每一条在result中的数据;
while ($record = $result->fetch_assoc()) {
  array_push($myArray,$record);
}
echo json_encode($myArray);



?>
