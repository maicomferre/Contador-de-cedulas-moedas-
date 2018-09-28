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
var LeftoverShowed = false;

function UpDateInfo(value)
{
	if(value2 === value)return false;
	value2 = value;

	if(value.indexOf(',') != -1)
	{
		value = value.replace(',','.');
	}
	
	value = parseFloat(value);
	
	if(value < 0.01 )
	{
		$('.Notas').html('');
		CheckExtr(value);
		return false;	
	}
	
	value += 0.001;//Fator correção.		
	
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
			html +='<div title="'+NOTAS['ICON']['Real']['Ext'][i]+'" class="' + type + '" id="'+ i +'" \
			style="background-image:url(\'src/' + NOTAS['ICON'][ICON_TYPE]['IMG'][i] + '\');">\
			<span id="QtdsNotas"> ' + NOTAS['value'][i] + '</span></div>';
		}
	}
	
	$('.Notas').html('');
	$('.Notas').html(html);
	CheckLeftover(value);

}
function CheckLeftover(value)
{
	if(parseFloat(value) > 0.009)
	{
		if(LeftoverShowed == false)
		{
			$('.Sobrou').show();
			LeftoverShowed=true;
		}
		$('.Sobrou').html('Sobraram ' + parseFloat(value.toFixed(2)) * 100 + " Centavo(s)");
	}
	else
	{
		$('.Sobrou').hide();
		LeftoverShowed = false;
	}	
}
function CheckIfNumberIsBig(value)
{
	if(value > 100000000)
		$("#nota").show();
	else
		$("#nota").hide();
}
//Events
document.getElementById('input').addEventListener('keyup',function(e){
	var val = document.getElementById('input').value;
	CheckIfNumberIsBig(val);
	UpDateInfo(val);
});
