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


//********************************************OPERATIONS***********************************************/

console.log("1"+2)/*this will give output as 12 as one of the input is sring so addition will be done as of string*/

console.log(1+"2")// same as above

console.log("1"+2+2)//this will give output as 122 as first input is string so all wil be considered as string

console.log(1+2+"2")// this will give output as 32 as first addition will be normalyy and then it will be converted into string 

let gc=100
console.log(++gc)
console.log(gc)

//comparison and equality//

console.log(2===2)//True
console.log("2"===2)//False
console.log("2"==2)//True