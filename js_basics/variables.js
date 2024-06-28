const accountId = 459165

//const is a datatype to define variable which cannot be changed further in the code. once the vallue is assigned it cannot be modified.

// accountId = 123110021
// console.log(accountId);

//hence above case is not possible



let accountEmail="459165@nitkkr.ac.in"
//let is datatype to define variable which can be changed or modified further in the code but in a scope.
//we cannot redefine the same variable later in the code. it will show error.
accountEmail="123110021@nitkkr.ac.in"
//possible
//console.log(accountEmail);
//above case is possible



var accountPassword=12345
/*var is a datatype to define variable without any scope. hence we can
redefine the same variable later in the code which results in changing of
variable in whole code and resulting in error.
*/
accountPassword=98765



//4th without any data type.
//it is possible to define a variable without a data type. but not a good practise
accountCity="Faridabad"
//without any data type we can define a variable without a data type. but not a good practise
 
accountCity="Noida"


console.table([accountId, accountEmail, accountPassword, accountCity])