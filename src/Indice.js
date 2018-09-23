"use strict";
/*
	@Developed By: Maicom Ferreira;
	@Date: Inicio: 17/06/2018 - 12:19 AM
	@Function: This is a script that process the value inputted fur the
	user and calculates the number of banknotes and show in the window.
	
	Exercise of the Uri 1018 converted to web page.
*/

var ICON_TYPE = 'Real';
var value2 = 0;
var SobrouMostrado = false;

function UpDateInfo(value)
{
	if(value2 === value)return false;
	value2 = value;
	
	if(value.indexOf(',') != -1)
	{
		value = value.replace(',','.');
		value = parseFloat(value);
	}
	if(parseFloat(value) < 0.01 )
	{
		$('.Notas').html('');
		CheckExtr(value);
		return false;	
	}
	
	NOTAS['value'] = {};
	NOTAS['value'][0]  = 0;
	NOTAS['value'][1]  = 0;
	NOTAS['value'][2]  = 0;
	NOTAS['value'][3]  = 0;
	NOTAS['value'][4]  = 0;
	NOTAS['value'][5]  = 0;
	NOTAS['value'][6]  = 0;
	NOTAS['value'][7]  = 0;
	NOTAS['value'][8]  = 0;
	NOTAS['value'][9]  = 0;
	NOTAS['value'][10] = 0;

	value = parseFloat(value) + 0.001;//Fator correção.
	
	while(value >= 100)
	{
		NOTAS['value'][0]++;
		value -= 100;
	}
	while(value >= 50)
	{
		NOTAS['value'][1]++;
		value -= 50;
	}
	while(value >= 20)
	{
		NOTAS['value'][2]++;
		value -= 20;
	}
	while(value >= 10)
	{
		NOTAS['value'][3]++;
		value -= 10;
	}
	while(value >= 5)
	{
		NOTAS['value'][4]++;
		value -= 5;
	}
	while(value >= 2)
	{
		NOTAS['value'][5]++;
		value -= 2;
	}	
	while(value >= 1)
	{
		NOTAS['value'][6]++;
		value -= 1;
	}
	while(value >= 0.50)
	{
		NOTAS['value'][7]++;
		value -= 0.50;
	}
	while(value >= 0.25)
	{
		NOTAS['value'][8]++;
		value -= 0.25;
	}
	while(value >= 0.10)
	{
		NOTAS['value'][9]++;
		value -= 0.10;
	}
	while(value >= 0.05)
	{
		NOTAS['value'][10]++;
		value -= 0.05;
	}
	var html = "";
	$('.Notas').html('');
	for(var i=0; i<11; i++)
	{
		if(NOTAS['value'][i] > 0)
		{
			var type = (i < 6) ? ("Cedula") : ("Moeda");
			html +='<div class="'+type+'" id="'+i+'" \
			style="background-image:url(\'src/'+NOTAS['ICON'][ICON_TYPE]['IMG'][i] +'\');">\
			<span id="QtdsNotas">'+NOTAS['value'][i]+'</span></div>';
		}
	}
	$('.Notas').html('');
	$('.Notas').html(html);
	CheckExtr(value);

}
function CheckExtr(value)
{
	if(parseFloat(value) > 0.009)
	{
		if(SobrouMostrado == false)
		{
			$('.Sobrou').show();
			SobrouMostrado=true;
		}
		$('.Sobrou').html('Sobraram ' + parseFloat(value.toFixed(2)) * 100 + " Centavo(s)");
	}
	else
	{
		$('.Sobrou').html('');
		$('.Sobrou').hide();
		SobrouMostrado = false;
	}	
}
function CheckNumber(value)
{
	if(value > 100000000)
	{
		$("#nota").html("</b>Atenção!</b>: Em numeros acima de 100 milhões, dependendo do computador do navegador e dos processos em execução, as notas podem demorar a aparecer o resultado!");
		$("#nota").show();
	}
	else
	{
		$("#nota").hide();
	}
}
