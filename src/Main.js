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
	
	for(var i=0; i<11; i++){
		if(NOTAS['value'][i] > 0){
			var img = "background-image:url('src/"+NOTAS[ICON_TYPE]['img_src']+NOTAS['all'][i]+"');";
			var type = (i < 6) ? ("Cedula") : ("Moeda");	
			var qntnotas = NOTAS['value'][i].toLocaleString(SETTINGS['lang']);
			html +='<div class="'+type+'" id="'+i+'" style="'+img+'"><span id="QtdsNotas">'+qntnotas+'</span></div>';
		}
	}
	NOTAS['value'] = [0,0,0,0,0,0,0,0,0,0,0];
	$('.Notas').html('');
	$('.Notas').html(html);
	checkLeftOver(value);
}
function checkLeftOver(value){
	if(parseFloat(value) > 0.009){
		if(LeftoverShowed == false){
			$('.Sobrou').show();
			LeftoverShowed=true;
		}

		$('.Sobrou').html('» Sobraram {0} Centavo(s)'.format(parseFloat(value.toFixed(2)) * 100));
	}
	else{
		$('.Sobrou').hide();
		LeftoverShowed = false;
	}
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

var max = 2;
function Next()
{
	$('.rqst_'+MenuPasso).slideToggle();
	MenuPasso++;
	setTimeout(function(){
		$('.rqst_'+MenuPasso).slideToggle();
		$('.rqst_'+i).hide();
	},500);
	
	if(MenuPasso == max){
		for(var i=0; i<MenuPasso; i++){
			$('.rqst_'+i).hide();
		}
		$('.fundo').hide();
		setTimeout(function(){
			$('.content').show();
		},500);
	}
	
}
function openMenu(){
	$('.rqst_0').show();
	$('.fundo').show();
	$('.content').hide();
	MenuPasso = 0;	
	
}
function setSetting(param0,param1) {
	switch(param0) {
		case "lang":
			if(SETTINGS['lang'] == param1)break;
			$("#h1_0title").html(SETTINGS[param1].menu1Title);
			$("#h1_1title").html(SETTINGS[param1].menu2Title);
			$("#input").attr('placeholder',SETTINGS[param1].inputplaceholder);
			SETTINGS['lang'] = param1;
			break;
		case "coin":
			ICON_TYPE = param1;
			break;
		default:
			console.log("javascript error: function setSetting('"+param0+"','"+param1+"'); The first parameter is invalid.");
			return false;
	}
	
}
//functions 
function roundNumber (rnum) {
   return Math.round(rnum*Math.pow(10,2))/Math.pow(10,2);
 
}

