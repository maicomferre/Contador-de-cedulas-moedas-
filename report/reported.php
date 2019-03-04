<!DOCTYPE html>
<html>
	<head>
		<title></title>
		<meta charset="utf-8" />
		<style>*{font-family:sans-serif;}.relat{background-color:#CCC;border-buttom:1px;padding:20px;}
		#title{font-size:18px;}
		</style>
		<meta http-equiv="refresh" content="15" />
	<head>
	<body>
		<center>
			<h1>Relatórios registrados</h1>
			<h3>Lista de relatórios registrados</h3>
		</center>	
		<fieldset>
		<legend>Relatórios</legend>
			<?php
				$rel = ['Bug/Erro','Critica','Elogio'];
				$i = 0;
				$f = fopen('reports.data','r');
				while(($buffer = fgets($f)) !== false){
					$i++;
					$e = explode('|',$buffer);
					echo '<div class="relat">';
					echo '<span id="title">Por: <b>anônimo&nbsp;</b> - '.$e[1].' | Tipo: <b>'.$rel[$e[0]].'</b>'.'</span><hr />Relato: '.$e[2];
					echo '</div><br />';
				}
				fclose($f);
				echo "Relatórios: $i";
			?>
		</fieldset>	
	</body>
</html>	