function CreateObj(n,e){
	this.name = n;
  this.age = e;
}
var massiveObj = [
	new CreateObj('����',17),
	new CreateObj('�����',47),
  new CreateObj('����',22),
  new CreateObj('�����',17),
  new CreateObj('������',31),
  new CreateObj('������',18)];

function objFilter(mass){
	mass.sort((a,b)=>{
  return a.age - b.age
  });
  console.log('������ ���� �� ��������:');
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
  
  console.log('������ 18:');
  
	more18.forEach((item,i)=>{
  	console.log(i+1+'. '+item.name+' - '+item.age);
	});
  
	console.log('����� 18:');
  
  less18.forEach((item,i)=>{
		console.log(i+1+'. '+item.name+' - '+item.age);
	});
}

objFilter(massiveObj);

