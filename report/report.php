<?php

if(!isset($_POST['select']) || !isset($_POST['textarea'])){
	header('Location: ../');
	exit;
}
if($_POST['select'] < 0 ||  $_POST['select'] > 2){
	header('Location: ../');
	exit;
}

$length = strlen($_POST['textarea']) > 5000 ? 5000 : strlen($_POST['textarea']);
$order = array('\r\n','\n','\r','\t',PHP_EOL);
$replaced = str_replace($order,'',$_POST['textarea']);

$f = fopen('reports.data','a');
fwrite($f,$_POST['select'].'|'.date('F j, Y, g:i a').'|');
$htmlizado = htmlspecialchars($replaced);
fwrite($f,$htmlizado.PHP_EOL,$length+strlen(PHP_EOL));
fclose($f);

header('Location: reported.php');
?>