function variableType (varTp){
	if (typeof varTp !='string' && typeof varTp !='number'){
  	console.log('Ошибка!\nФункция может принимать только строку или число.')
  }
  else{
		if (typeof varTp === 'string'){
  		console.log('Это строка!');
  	}
  	if (typeof varTp === 'number'){
  		console.log('Это число!');
  	}
  }
}

variableType('Hello');

variableType(5);

variableType(true);