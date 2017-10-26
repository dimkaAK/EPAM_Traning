var calculatorConstructor = function (){
	var rezult = 0;
  return {add:function (sum){
  	rezult += sum;
    return function (sum2){
    	return rezult = sum + sum2;
     }
  },
  subtract:function (sub){
  	rezult -= sub;
    return function (sub2){
    	return rezult = sub - sub2;
     }
  },
  divide:function (del){
  	rezult /= del;
    return function (del2){
    	return rezult = del / del2;
     }
  },
  multiply:function (mul){
  	rezult *= mul;
    return function (mul2){
    	return rezult = mul * mul2;
     }
  },
  getRezult:function (){
  	    return rezult;
  },
  reset:function (){
  	rezult = 0;
  },
  }
}
var calc = calculatorConstructor ();
calc.add (4);
console.log(calc.getRezult());
calc.subtract(1);
console.log(calc.getRezult());
calc.multiply(2);
console.log(calc.getRezult());
calc.divide(3);
console.log(calc.getRezult());
calc.reset();
console.log(calc.getRezult());
console.log(calc.add(4)(4));
console.log(calc.divide(20)(4));