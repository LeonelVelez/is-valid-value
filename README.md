# validate-value
It is a simple class with a static function who Return a true if is validate or false if is not.


<b>null</b> =  when  the value wass set to null 
'<i>var somevalue = null</i>'

<b>empty</b> =  this just apply if is a string,  when the value wass set to empty string 
'<i>var somevalue = '' </i>'

<b>undefinid</b> =   when the values wass not defined y just wass declared '<i>var somevalue </i>' or when the value not exists

# use 

const objet = require('validate-value').Validate; 
let varExamp = null;

if(objet.value(varExamp))
{
  
  console.log('is validate')
}else{
  //inside here 
  console.log('is not validate')
}
  


varExamp;

if(objet.value(varExamp))
{
  
  console.log('is validate')
}else{
  //inside here 
  console.log('is not validate')
}


varExamp= ' ';

if(objet.value(varExamp))
{
  
  console.log('is validate')
}else{
  //inside here 
  console.log('is not validate')
}




