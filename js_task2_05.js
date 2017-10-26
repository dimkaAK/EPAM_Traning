function maxNumber (mass){
	if(mass.every((item)=>{
  	return typeof item === 'number';
  })){
	mass.sort((a,b)=>{
  return a - b
  });
	return mass[mass.length-1];
  }
  else {
 return 'Ошибка!\nВ массиве должны быть только числа.';
 }
}

var massNumber1 = [1,1,700,1,1,50,351,1001,114];
var massNumber2 = [1,1,700,1,1,50,351,1001,'h'];

console.log(maxNumber(massNumber1));
console.log(maxNumber(massNumber2));