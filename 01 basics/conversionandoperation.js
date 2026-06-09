let score = "33"
let score1= undefined
let score2= true
let score3= null

console.log(typeof score1) 
console.log(typeof score2) 
console.log(typeof score3) 

let valueInNumber = Number(score)  //now the score isc onverted to number
console.log(typeof valueInNumber)
console.log(valueInNumber)  //may be it give nan which means "not a number" because it is not possible to convert string to number but here it is possible because it is a number in string form


//"33" = 33
// "33abc" = NaN
//true=1
//false=0


let isloggedIn=1

let booleanIsloggedIn=Boolean(isloggedIn) //it will convert 1 to true and 0 to false



//change a number into string
let score4= 44
let stringScore= String(score4)
console.log(stringScore)
console.log(typeof stringScore) 