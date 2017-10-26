function CreateObj(n,e){
	this.name = n;
  this.age = e;
}
var massiveObj = [
	new CreateObj('Рома',17),
	new CreateObj('Игорь',47),
  new CreateObj('Лена',22),
  new CreateObj('Света',17),
  new CreateObj('Степан',31),
  new CreateObj('Сергей',18)];

function objFilter(mass){
	mass.sort((a,b)=>{
  return a.age - b.age
  });
  console.log('Список имен по возрасту:');
  mass.forEach((item,i)=>{
  	console.log(i+1+'. '+item.name+' - '+item.age);
  });
	var more18 = mass.filter((item)=>{
  
  if(item.age>=18){
  	return true
    }
  else {
  	return false
  }
  });
  
  var less18 = mass.filter((item)=>{
  
  if(item.age<18){
  	return true
    }
  else {
  	return false
  }
  });
  
  console.log('Больше 18:');
  
	more18.forEach((item,i)=>{
  	console.log(i+1+'. '+item.name+' - '+item.age);
	});
  
	console.log('Менше 18:');
  
  less18.forEach((item,i)=>{
		console.log(i+1+'. '+item.name+' - '+item.age);
	});
}

objFilter(massiveObj);

