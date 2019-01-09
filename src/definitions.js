//Definitions
var NOTAS = {};
var ICON_TYPE = null;
var SELECTED = {};
var antDoubleCheck = 0;
var MenuPasso=0;
var LeftoverShowed = false;

//Criando
NOTAS['Real'] = {};
NOTAS['Dolar'] = {};


//global
NOTAS['value'] = [0,0,0,0,0,0,0,0,0,0,0];
//Imagens Local
NOTAS['Real'] ['img_src'] = "Real/";
NOTAS['Dolar']['img_src'] = "Dolar/";
NOTAS['all'] = ["100.jpg","50.jpg","20.jpg","10.png","5.jpg","2.jpg","1m.jpg","50m.jpg","25m.jpg","10m.jpg","05m.jpg","1m.jpg"];

NOTAS['Real']['notas'] = [100,50,20,10,5,2,1];
NOTAS['Real']['moedas'] = [.50,.25,.10,.05];

//Dolar
NOTAS['Dolar']['notas'] = [100,50,20,10,5,1];
NOTAS['Dolar']['moeda'] = [.50,.25,.10,.05,0.01];

//Translation
var SETTINGS = {};

SETTINGS['lang'] = 'en';

SETTINGS['en'] = {
	inputplaceholder:"Please, insert a value",
	menu1Title:"Please, select your language:",
	menu2Title:"Please, select a coin:",
}

SETTINGS['pt-br'] = {
	inputplaceholder:"Por favor, insira um valor:",
	menu1Title:"Por favor, selecione uma linguagem:",
	menu2Title:"Por favor, selecione uma moeda:",
}















