function CountVariablesInArray (mass){
	mass.forEach((item)=>{
  	console.log(item);
  });
  console.log('Общее число элементов = '+mass.length);
}

CountVariablesInArray([1,58,346,684,6,84]);