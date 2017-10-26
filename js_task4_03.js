var _string1 = 'list style type';
var _string2 = 'style';


console.log(findSring(_string1,_string2));


//Область объявлений функций
function findSring (basicStr, str){
	var findRezult = basicStr.indexOf(str);
	if (findRezult===-1){
  	return false;
  }
  else {
  	return true;
  }
}