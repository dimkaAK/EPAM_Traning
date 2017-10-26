var _string1 = 'abcdefghijklmnopqrstuvwxyz';


console.log(modSring(_string1));


//Область объявлений функций
function modSring (Str){
	var newStr = Str.split('');
  return newStr.reverse().join('');
}