let score = "33"
let score1= undefined
let score2= true
let score3= null

// console.log(typeof score1) 
// console.log(typeof score2) 
// console.log(typeof score3) 

let valueInNumber = Number(score)  //now the score isc onverted to number
// console.log(typeof valueInNumber)
// console.log(valueInNumber)  //may be it give nan which means "not a number" because it is not possible to convert string to number but here it is possible because it is a number in string form


//"33" = 33
// "33abc" = NaN
//true=1
//false=0


let isloggedIn=1

let booleanIsloggedIn=Boolean(isloggedIn) //it will convert 1 to true and 0 to false



//change a number into string
let score4= 44
let stringScore= String(score4)
// console.log(stringScore)
// console.log(typeof stringScore) 



//********************operations******************************* */


let value1=3
let negvalue=-value1
// console.log(negvalue)  //it will give -3 because we have used negation operator

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2%3)  //it will give 2 because 2 is less than 3 and it cannot be divided so the remainder is 2
// console.log(2**2)

let str1="hello"
let str2=" world"
console.log(str1+str2)  //it will give "helloworld" because + operator is used for concatenation in case of strings


// console.log("1"+2)  //it will give "12" because when we use + operator with a string and a number, the number is converted to a string and then concatenated
// console.log(1 + "2")  //it will give "12" for the same reason
// console.log("1"+2+3)  //it will give "123" because the + operator is left-associative, so it first concatenates "1" and 2 to get "12", then concatenates that with 3 to get "123"
// console.log(1+2+"3")  //it will give "33" because it first adds 1 and 2 to get 3, then concatenates that with "3" to get "33"
// console.log(+true)  //it will give 1 because the unary + operator converts true to 1
// console.log(+false)  //it will give 0 because the unary + operator converts false to 0
// console.log(+"")  //it will give 0 because the unary + operator converts an empty string to 


let num1,num2,num3
num1=num2=num3=2+2  //it will give 4 to all the variables because the assignment operator is right-associative, so it first evaluates 2+2 to get 4, then assigns that value to num3, then assigns num3 to num2, and finally assigns num2 to num1

let gamecounter=100
gamecounter++
console.log(gamecounter)