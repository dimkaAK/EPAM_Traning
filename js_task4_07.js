var _string1 = 'create user name'; //Отсчет подстрок идёт с 1.


console.log(modSring(_string1,'object',1));


//Область объявлений функций
function modSring (basicStr,newStr,pos){
	var newString = basicStr.split(' ');
  newString.splice(pos,0,newStr);
  return newString.join(' ');
}