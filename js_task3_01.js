var obj = {};
obj.prop1 = 1;
obj.prop2 = 'str';
obj.prop3 = true;

showPropObj(obj);

delete obj.prop2;

showPropObj(obj);

// Область объявления функций
function showPropObj(ob){
	if(typeof ob === 'object'){
		for(var key in ob){
  		console.log(ob[key]);
  	}
  }
  else{
  	console.log( 'Error argument!\nТип передаваемого аргумента должен быть object.');
  }
}