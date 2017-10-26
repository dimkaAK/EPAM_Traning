var _string1 = 'list-';
var _string2 = ' style ';
var _string3 = '-type';

console.log(_string1+delSpace(_string2)+_string3);


//Область объявлений функций
function delSpace (str){
	var strNoSpace = str.split('');
  if(strNoSpace[0]===' '){
  	strNoSpace.shift();
  }
  if(strNoSpace[strNoSpace.length-1]===' '){
  	strNoSpace.pop();
  }
  return strNoSpace.join('');
}