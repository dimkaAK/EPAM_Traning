var _string1 = 'i am cool';


console.log(modSring(_string1));


//Область объявлений функций
function modSring (str){
	var newStr = str.split(' ').map((item)=>{
  	var st = item.split('');
    st[0] = st[0].toUpperCase();
    return st.join('');
  });
  return newStr.join(' ');
}