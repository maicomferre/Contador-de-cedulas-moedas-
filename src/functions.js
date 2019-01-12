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
			$("#nota").html();
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