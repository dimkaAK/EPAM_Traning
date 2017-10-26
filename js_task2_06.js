function numberanAlysis (n){
 if (n<=1 || n>1000) {
 console.log('Ошибка!\nФункция принимает только числа от 1 до 1000');
 }
 else {
	var count = 0;
  for(i=1;i<=n;i++){
  	if (n%i===0){
    count++;
    }
    if (count>2){
    	console.log(n+' - составное число!');
    	break;
    }
  }
  
	if (count===2){
  	console.log(n+' - простое число!');
  }
 }
}

numberanAlysis(998);