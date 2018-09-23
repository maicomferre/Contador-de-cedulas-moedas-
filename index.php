<!DOCTYPE html>
<html>
	<head>
		<title>Contador de Notas</title>
		<meta charset="utf-8" />
		<script type="text/javascript" src="src/jquery-3.1.0.min.js"></script>
		<script type="text/javascript" src="src/definitions.js" ></script>
		<script type="text/javascript" src="src/Indice.js"></script>
		<link rel="stylesheet" type="text/css" href="src/Indice.css">
	</head>
	<body>
		<div class="Title">
			<input type="text" placeholder="Por favor, digite o valor." id="ed" onKeyPress="CheckNumber(this.value);" onChange="UpDateInfo(this.value);" />
			<input type="submit" value="Verificar"  onClick="UpDateInfo(document.getElementById('ed').value);" /><br />
			<span id="nota" style="color:#AA0000"></span>
		</div>
		<div class="Notas"></div>
		</div><br /><br />
		<p class="Sobrou"></p>
	</body>
</html>	