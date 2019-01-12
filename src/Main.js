"use strict";
/*
	@Developed By: Maicom Ferreira;
	@Date: Inicio: 17/06/2018 - 12:19 AM
	@Function: This is a script that process the value inputted fur the
	user and calculates the number of banknotes and show in the window.
	
	Exercise of the Uri 1018 converted to web page.
*/

function UpDateInfo(value)
{
	if(antDoubleCheck === value)return;
	antDoubleCheck = value;
	
	if(value.indexOf(',') != -1){
		value = value.replace(',','.');
	}
	
	if(value > 100000000000000000000){
		$("#nota").show();
		return false;
	}else
		$("#nota").hide();	
	
	value = roundNumber(parseFloat(value));
	
	if(value < 0.01 || isNaN(value)){
		$('.Notas').html('');
		checkLeftOver(value);
		return false;	
	}
		
	var indice = 0;
	for(var i=0; i<NOTAS[ICON_TYPE]['notas'].length && value > 0; i++,indice++){
		if(value / NOTAS[ICON_TYPE]['notas'][i] <= 0)continue;
		NOTAS['value'][indice] = parseInt(value / NOTAS[ICON_TYPE]['notas'][i]);
		value = (value % NOTAS[ICON_TYPE]['notas'][i]);
	}
	indice = NOTAS[ICON_TYPE]['notas'].length;

	for(var i=0; i<NOTAS[ICON_TYPE]['moedas'].length; i++,indice++){
		if(parseInt(value / NOTAS[ICON_TYPE]['notas'][i]) > 0.01)continue;
		NOTAS['value'][indice] = parseInt(value / NOTAS[ICON_TYPE]['moedas'][i]);
		value = roundNumber(value % NOTAS[ICON_TYPE]['moedas'][i]);
	}
	
	var html = "";
	$('.Notas').html('');
	
	for(var i=0; i<12; i++){
		if(NOTAS['value'][i] == 0)continue;
		var img = "background-image:url('src/"+ NOTAS[ICON_TYPE]['img_src']+NOTAS['all'][i] +"');";
		var type = (i < NOTAS[ICON_TYPE]['type']) ? ("Cedula") : ("Moeda");	
		var qntnotas = NOTAS['value'][i].toLocaleString(SETTINGS['lang']);
		html +='<div class="'+type+'" id="'+i+'" style="'+img+'"><span id="QtdsNotas">'+qntnotas+'</span></div>';
	}
	NOTAS['value'] = [0,0,0,0,0,0,0,0,0,0,0];
	$('.Notas').html('');
	$('.Notas').html(html);
	checkLeftOver(value);
}

//Events
document.getElementById('input').addEventListener('keyup',function(e){
	var val = document.getElementById('input').value;
	UpDateInfo(val);
});
$(document).ready(function(){	
	$('.rqst_0').show();
	$('.fundo').show();
	MenuPasso = 0;
});


