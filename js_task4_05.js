var _string1 = 'abcdefghijklmnopqrstuvwxyz';


console.log(modSring(_string1,18));


//Область объявлений функций
function modSring (str, num){
	if(str.length>num){
  	var newStr = str.substr(0,num-3)+'...';
    return newStr;
  }
  else {
  	return str;
  }
}