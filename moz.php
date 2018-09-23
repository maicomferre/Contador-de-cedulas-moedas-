<?php

#include "leitorpaginas\includes\arrays.variables.include.php";

$dom = new DOMDocument();
			libxml_use_internal_errors(false);
			@$dom->LoadHTML( file_get_contents($_GET['Link']) );
			libxml_clear_errors();
$globalElements=0;
$ElementosTotal = 0;
?>
<!DOCTYPE html>
<html>
	<head>
		<title>Pagina De paginas</title>
		<meta charset="utf-8" />
		<style>
			tr,td{
				padding:5px;
				text-align:center;
			}
			tr:hover,td:hover{
				background-color:#CCC;
				cursor:pointer;
			}
			td{
				border:1px solid #000;
			}
			table{
				margin:10px;
			}
			.List{
				position:relative;
				width:auto;
				border:1px solid #000;
				display:inline-block;
				float:left;
				padding:10px;
				margin:10px;
			}
			h1{
				text-align:center;
			}
		</style>
	</head>
	<body>
	<h1>Informações da pagina <i><?php echo $_GET['Link'] ?></i></h1>
		<div class="Fundo">
		<div class="List">
		<h1>Contador<br /> de<br /> Elementos</h1>
		<table>
		<tr>
			<td>Elemento</td>
			<td>Numero</td>
		</tr>	
			<?php 



			$indice = 0;
			$indiceGlobal=0;
			$ELEMENTOS = array('a','abbr','acronym','address','applet','area','article','aside','audio','b','base','basefont','bdi','bdo','big','blockquote'
			,'br','button','canvas','caption','center','cite','code','col','colgroup','data','datalist','dd','del','details','dfn',
			'dialog','dir','div','dl','dt','em','embed','fieldset','figcaption','figure','figure','footer','form','frame','frameset','header','hr','i','iframe'
			,'img','input','ins','kbd','label','legend','li','link','main','map','mark','meta','meter','nav','noframes','noscript','object','ol','optgroup','option'
			,'output','param','p','picture','progress','q','rp','rt','ruby','s','samp','script','section','select','small','source','span','strike','strong'
			,'style','sub','summary','sup','svg','table','tbody','td','template','textarea','tfoot','th','thead','time','title','tr','track','tt','u','ul','var'
			,'video','wbr');
			$IndiceElemento = [];
			$Elemento_Dados = [];
			while(isset($ELEMENTOS[$indiceGlobal]))
			{
				$element = $dom->getElementsByTagName($ELEMENTOS[$indiceGlobal]);
				$Elemento_Dados[$ELEMENTOS[$indiceGlobal]] = [];
				while(isset($element[$indice]->nodeValue))
				{	
					$Elemento_Dados[$ELEMENTOS[$indiceGlobal]][$indice] = [];
					$Elemento_Dados[$ELEMENTOS[$indiceGlobal]][$indice]['HTML'] = $element[$indice]->nodeValue;		
					//$Elemento_Dados[$ELEMENTOS[$indiceGlobal]][$indice]['Length']= sz($element[$indice]->nodeValue);		
					$indice++;
				}
				if($indice>0)
				{
					echo '<tr onClick="Show(\''.$ELEMENTOS[$indiceGlobal].'\');"><td>'.$ELEMENTOS[$indiceGlobal].'</td><td>'.$indice.'</td></tr>';
					$globalElements++;
				}
				$ElementosTotal+= $indice;
				$indice = 0;
				$indiceGlobal++;
			}
			$indice = 0;
			while(isset($Elemento_Dados['p'][$indice]))
			{
				//echo '<br /><hr />'.$Elemento_Dados['p'][$indice]['HTML'];
				$indice++;
			} 
			
			?>
		</table>
		</div>
		<div class="List">
		<h1>Info<br /> da<br /> Pagina</h1>
			<table>
				<tr>
					<td>Info</td>
					<td>Data</td>
					<td>Length</td>
				</tr>

				<tr>
					<td>Title</td>
					<td><?php $tmp=$dom->getElementsByTagName('title'); echo $tmp[0]->nodeValue; ?></td>
					<td><?php echo strlen($tmp[0]->nodeValue); ?></td>
				</tr>
				<tr>
					<td>LINK</td>
					<td><?php echo $_GET['Link']; ?></td>
					<td><?php echo strlen($_GET['Link']) ; ?></td>
				</tr>
				<tr>
					<td>Elementos Diferentes</td>
					<td><?php  echo $globalElements; ?></td>
					<td>-</td>
				</tr>
				<tr>
					<td>Elementos Total</td>
					<td><?php echo $ElementosTotal; ?></td>
					<td>-</td>
				</tr>				
			</table>
		</div>
		</div>
	</body>
</html>	