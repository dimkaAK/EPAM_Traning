var _string1 = 'user object name';


console.log(modSring(_string1));


//Область объявлений функций
function modSring (str){
	var newStr = str.split('');
  if(newStr[0]===' '){
  	newStr.shift();
  }
  if(newStr[newStr.length-1]===' '){
  	newStr.pop();
  }
	return newStr.filter((item,i,arr)=>{
  	if(item === ' '){
    	arr[i+1] = arr[i+1].toUpperCase();
    	return false;
    }
    else {
    	return true;
    }
	}).join('');
}