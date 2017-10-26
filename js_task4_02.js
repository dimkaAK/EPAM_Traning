var _string1 = 'list-';
var _string2 = ' style ';
var _string3 = '-type';

console.log(_string1+modSring(_string2)+_string3);


//Область объявлений функций
function modSring (str){
	var newStr = str.split('');
  if(newStr[0]===' '){
  	newStr.shift();
    newStr[0] = newStr[0].toUpperCase();
  }
  if(newStr[newStr.length-1]===' '){
  	newStr.pop();
  }
  return newStr.join('');
}