//number//string//boolean//null//undefined//symbol//object
//datatype of null is object
//datatype of undefined is undefined
/*
conversion of one datatype to another
*/
let score="123abc"//check on null, undefined, boolean value like true also.
let scoreNum=Number(score)
console.log(typeof score)
console.log(typeof scoreNum)
console.log(scoreNum)// as the string is 123abc and it cant be converted into a number hence it gives nan as an output.
//hence typeof shows number but the output of scoreNum is Nan as 123abc cannot be converted into a number.
console.log(typeof NaN)// typeof NaN is also a number only.


/*
conversion of number to booleanLogged
*/
let isLoggedIn=1
let booleanLogged=Boolean(isLoggedIn)
console.log(typeof isLoggedIn)
console.log(typeof booleanLogged)
console.log(booleanLogged)
