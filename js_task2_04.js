function equallyVarInArray (mass){
	var boolRezult = mass.every((item,i,arr)=>{
  	return item === arr[0];
  });
  return boolRezult;
}

var massNumber = [1,1,1,1,1,1];
console.log(equallyVarInArray(massNumber));