var obj = {};
obj.prop1 = 1;
obj.prop2 = 'str';
obj.prop3 = true;

var obj2 = addPropObj(obj,'prop4');

showPropObj(obj2);


// Область объявления функций
function addPropObj(ob,str){
	if(typeof ob === 'object' && typeof str ==='string'){
  	if(str in ob){
  		return ob;
  	}
  	else {
    	ob[str] = 'new'
  		return ob;
  	}
	}
  else {
  	console.log( 'Error arguments!\nПервым аргументом функции должен быть объект, вторым - строка.');
  }
}

function showPropObj(ob){
	if(typeof ob === 'object'){
		for(var key in ob){
  		console.log(key +': '+ob[key]);
  	}
  }
  else{
  	console.log( 'Error argument!\nТип передаваемого аргумента должен быть object.');
  }
}