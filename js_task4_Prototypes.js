var obj1 = {
	a:1,
  b:2,
  c:3
};
var obj2 = Object.create(obj1);
obj2.a = 100;
obj2.b = 200;
obj2.c = 300;

var obj3 = Object.create(obj2);
obj3.a = 1000;
obj3.b = 2000;
obj3.c = 3000;
findProp('a',obj3);

var objNoProto = createObjNoProto ();
console.log(objNoProto);
//Область объявлений функций
function findProp (prop,obj){
var objProto = Object.getPrototypeOf(obj);
	if(objProto.hasOwnProperty(prop)){
  	console.log(prop +': '+objProto[prop]);
  }
  else {
  	console.log('Свойство не найдено!');
  }
}

function createObjNoProto (){
	return Object.create(null);
}