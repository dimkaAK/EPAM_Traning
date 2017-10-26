console.log(randomNumber(0,5));


//Область объявлений функций
function randomNumber(min,max){
	return Math.floor(Math.random() * (max+1 - min) + min);
}