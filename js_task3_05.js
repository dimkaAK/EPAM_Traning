var obj = {};
obj.prop1 = 1;
obj.prop2 = 'str';
obj.prop3 = true;

var obj2 = copyObj(obj);
obj.prop2 = 'strObj';

showPropObj(obj);
showPropObj(obj2);

// Область объявления функций
function copyObj(ob){
	if(typeof ob === 'object'){
		var ob2 = {};
    for(var key in ob){
    	ob2[key] = ob[key];
    }
    return ob2;
	}
  else {
  	console.log( 'Error argument!\nТип передаваемого аргумента должен быть object.');
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