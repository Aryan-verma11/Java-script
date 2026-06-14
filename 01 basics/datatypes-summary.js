// lets talk abouut primitive data types in js
// there are 7 primitive data types in js
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. bigint
 
const score= 100
const scoreValue= 100.5
const isloggedIn= true
const outsideTemp= null
let userEmail;  //undefined


const id= Symbol("123")
const anotherId= Symbol("123")
console.log(id===anotherId)  //it will give false because symbol is a unique identifier and even if we create two symbols with the same description, they are different and not equal

const bignumber= 1234567890123456789012345678901234567890

console.log(typeof score)  //it will give number
console.log(typeof scoreValue)  //it will give number
console.log(typeof isloggedIn)  //it will give boolean
console.log(typeof outsideTemp)  //it will give object
console.log(typeof userEmail)  //it will give undefined
console.log(typeof id)  //it will give symbol
console.log(typeof bignumber)  //it will give number because js can only represent numbers up to a certain limit and beyond that it will give infinity or -infinity depending on the sign of the number

//refrence data types are objects and arrays also called non-primitive data types
// 1.array
// 2.object
// 3.function

const heros=["shaktiman","naagraj","doga"]  //array is a reference data type

let myObj={
    name:"aryan",
    age: 21,
}

const myFunction= function(){
    console.log("hello world")
}

console.log(typeof myFunction) //output comes as function object bcz it is a object
console.log(typeof myObj) //output comes as object because it is a object
console.log(typeof heros)     //output comes as object because array is also a object in js


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack uses (primitive data types) and heap uses (reference data types)

let iam ="python developer"  //stored in stack
let anotherIam= "webdev"  //stored in stack
console.log(anotherIam)  // it means the stack stores the copy of the value and not the reference to the value

let userone={
    email: "av87657@gmail.com",
    name: "Aryan"
}

let usertwo= userone  //stored in heap

console.log(userone.email)
console.log(usertwo.email)  //it will give the same email because both userone and usertwo are referencing the same object in the heap