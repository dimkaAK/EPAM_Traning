var _string1 = 'jkhdfbkjhfbkjzhgvlknfpvbshkgbkjzfd';


countSimbol(_string1);


//Область объявлений функций
function countSimbol (Str){
	var massiveSimbol = Str.split('');
  var rezultObj = {};
  massiveSimbol.forEach((item)=>{
  	if(item in rezultObj){
    	rezultObj[item]++ 
    }
    else {
    	rezultObj[item] = 1;
    }
  });
  for(var key in rezultObj){
  console.log(key+': '+rezultObj[key]);
  }
}