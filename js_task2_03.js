function evenOddNumbers(massiveNumbers){
	if(massiveNumbers.every((item)=>{
  	return typeof item === 'number';
  })){  
	var evenAmount = 0;
	var oddAmount = 0;
  var zeroAmount = 0;
	massiveNumbers.forEach((item)=>{
  	if(item!==0){
  		if(item%2===0){
  			evenAmount++;
  		}
  		else {
  			oddAmount++;
  		}
		}
    else {
    	zeroAmount++
    }
  });
 console.log('���������� ������ = '+evenAmount);
 console.log('���������� �������� = '+oddAmount);
 console.log('���������� ����� = '+zeroAmount);
 }
 else {
 console.log('������!\n� ������� ������ ���� ������ �����.');
 }
}
var numbersGroup1 = [2,5,0,10,200,61,0,16];
var numbersGroup2 = [2,5,0,10,200,61,0,16,'string'];

evenOddNumbers(numbersGroup1);

evenOddNumbers(numbersGroup2);
