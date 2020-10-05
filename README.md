# What is 'is-valid-value'?
It is a simple class with a static function who Return a true if the value is not a empty,null or undefined and false if it is.


<b>null</b> =  when  the value wass set to null 
'<i>var somevalue = null</i>'

<b>empty</b> =  this just apply if is a string,  when the value wass set to empty string 
'<i>var somevalue = '' </i>'

<b>undefinid</b> =   when the values wass not defined y just wass declared '<i>var somevalue </i>' or when the value not exists


# How to use it?
```sh
const object = require(is-valid-value).Validate;

let varExample;

if(object.value(varExample))
{
  console.log('im validate')
}else{
  //it inside heare
  console.log('im not validate because im undefined')
}


```
