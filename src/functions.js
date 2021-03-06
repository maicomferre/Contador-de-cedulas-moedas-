function Next(go=-1) {
	$('.rqst_'+MenuPasso).slideToggle();
	MenuPasso++;
	setTimeout(function(){
		$('.rqst_'+MenuPasso).slideToggle();
		$('.rqst_'+i).hide();
	},500);
	
	if(MenuPasso == MaxMenu){
		for(var i=0; i<MenuPasso; i++){
			$('.rqst_'+i).hide();
		}
		$('.fundo').hide();
		setTimeout(function(){
			$('.content').show();
		},500);
	}
	if(go != -1){
		$('.rqst_'+go).hide();
		$('.rqst_'+go).slideToggle();
		$('.content').hide();
	}
}
function openMenu() {
	$('.rqst_0').show();
	$('.fundo').show();
	$('.content').hide();
	MenuPasso = 0;
}
function setSetting(param0,param1) {
	switch(param0) {
		case "lang":
			$("#h1_0title").html(SETTINGS[param1].menu1Title);
			$("#h1_1title").html(SETTINGS[param1].menu2Title);
			$("#input").attr('placeholder',SETTINGS[param1].inputplaceholder);
			$("#notaAlerta").html(SETTINGS[param1].note);
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
function roundNumber (rnum) {
   return Math.round(rnum*Math.pow(10,2))/Math.pow(10,2);
}
function checkLeftOver(value) {
	if(parseFloat(value) > 0.009){
		if(LeftoverShowed == false){
			$('.Sobrou').show();
			LeftoverShowed=true;
		}

		$('.Sobrou').html(SETTINGS[SETTINGS['lang']].rest.replace('{0}',parseFloat(value.toFixed(2)) * 100));
	}
	else{
		$('.Sobrou').hide();
		LeftoverShowed = false;
	}
}
function loadImages(){
	if(new window.Image() === undefined){
		console.log('[Navegador Obsoleto]');
		alert('Erro: Este navegador está obsoleto e não suporta alguns elementos básico desta página.\nPor favor, atualize seu navegador!\n\n\
		Error: This browser are obsolete and not have support to some elements of this page. Please, update your browser.');
	}
	
	for(var i=0; i<NOTAS['tipos'].length; i++){ 
		if(NOTAS['tipos'][i] === undefined){
			console.log("loadImages(): Erro: Elemento NOTAS['tipos']["+i+"] = indefinido.");
			continue;
		}
		if(NOTAS[NOTAS['tipos'][i]] ['img_src'] === undefined){
			console.log("loadImages(): Erro: NOTAS[  NOTAS['tipos']["+i+"]  ] ['img_src'] = indefinido.");
			continue;
		}
		var t = NOTAS['tipos'][i];
		var value = NOTAS[t]['notas'].length + NOTAS[t]['moedas'].length;
		
		for(var x = 0; x<value; x++){
			NOTAS[t]['img_file'][x] = {};
			NOTAS[t]['img_file'][x]['loaded'] = true;			
			var _src = NOTAS[t] ['img_src'] + NOTAS['all'][x];
			
			NOTAS[t]['img_file'][x]['img'] = new Image();
			
			NOTAS[t]['img_file'][x]['img'].onload = function(){
				NOTAS[t]['img_file']['loaded'] = true;
			}
			NOTAS[t]['img_file'][x]['img'].onerror = function(){
				NOTAS[t]['img_file']['loaded'] = false;
				setTimeout(function(){TRY_loadImage(t,x,_src,0);},5 * 1000);
			}
			
			NOTAS[t]['img_file'][x]['img'].src = _src;
		}
	}
}
function TRY_loadImage(t,x,_src,trying){
	if(NOTAS[t]['img_file'][x]['loaded'])return;
	NOTAS[t]['img_file'][x]['img'].onload = function(){
		NOTAS[t]['img_file'][x]['loaded'] = true;
	}
	NOTAS[t]['img_file'][x]['img'].onerror = function(){
		NOTAS[t]['img_file'][x]['loaded'] = false;
		if(trying > 3)return;
		setTimeout(function(){TRY_loadImage(t,x,_src,trying);},5 * 1000);
	}
	
	NOTAS[t]['img_file'][x]['img'].src = _src;	
}
function ShowReportBugs(){
	$('.report').show();
	$('.fundo').show();
	$('.content').hide();
	
}