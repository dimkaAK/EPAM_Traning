var obj = {};
obj.prop1 = 1;
obj.prop2 = 'str';
obj.prop3 = true;

console.log(isPropObj(obj,'prop3'));


// Область объявления функций
function isPropObj(ob,str){
	if(typeof ob === 'object' && typeof str ==='string'){
	return str in ob;
  }
  else {
  return 'Error arguments!\nПервым аргументом функции должен быть объект, вторым - строка.';
  }
}