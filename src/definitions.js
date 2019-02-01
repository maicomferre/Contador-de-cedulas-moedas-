//Definitions
var NOTAS = {};
var ICON_TYPE = null;
var SELECTED = {};
var antDoubleCheck = 0;
var MenuPasso=0;
var LeftoverShowed = false;
var MaxMenu = 2;

//Criando
NOTAS['tipos'] = ['Real','Dolar'];
NOTAS['Real'] = {};
NOTAS['Dolar'] = {};


//global
NOTAS['value'] = [0,0,0,0,0,0,0,0,0,0,0,0];
//Imagens Local

NOTAS['main'] = 'src/';
NOTAS['Real']  [ 'img_src'  ] = NOTAS['main']+"Real/";
NOTAS['Dolar'] [ 'img_src'  ] = NOTAS['main']+"Dolar/";
NOTAS['all'] = [ "100.jpg"  ,"50.jpg","20.jpg","10.png","5.jpg","2.jpg","1m.jpg","50m.jpg","25m.jpg","10m.jpg","05m.jpg","1mm.jpg"];
NOTAS['Real']  [ 'img_file' ] = new Array(NOTAS['all'].length);
NOTAS['Dolar'] [ 'img_file' ] = new Array(NOTAS['all'].length);

NOTAS['Real']['notas'] = [100,50,20,10,5,2,1];
NOTAS['Real']['moedas'] = [.50,.25,.10,.05];
NOTAS['Real']['type'] = 6; 
//Dolar
NOTAS['Dolar']['notas'] = [100,50,20,10,5,2,1];
NOTAS['Dolar']['moedas'] = [.50,.25,.10,.05,.01];
NOTAS['Dolar']['type'] = 7; 

//Translation
var SETTINGS = {};

SETTINGS['lang'] = 'en';

SETTINGS['en'] = {
	inputplaceholder:"Please, insert a value",
	menu1Title:"Please, select your language:",
	menu2Title:"Please, select a coin:",
	rest:"» Rest {0} Cents(s)",
	note:"</b>Attention!</b>: Max value 100000000000000000000,00",
}

SETTINGS['pt-br'] = {
	inputplaceholder:"Por favor, insira um valor:",
	menu1Title:"Por favor, selecione uma linguagem:",
	menu2Title:"Por favor, selecione uma moeda:",
	rest:"» Sobraram {0} Centavo(s)",
	note:"</b>Atenção!</b>: Valor máximo 100000000000000000000,00",
}















