console.log("lets learn about functions in java script")

function nice(name) {
    console.log("hii " + name + " you are lucky")
    console.log("hii " + name + " you are soo good looking")
    console.log("hii " + name + " you have awesome hairs")
    console.log("hii " + name + ", you guys are amazing")
    console.log("hii " + name + " you all are awesome")
}

// nice("johny") 

function sum(a,b) {
    // console.log(a+b)
    return a+b //return keyword me return de dega ye
}
result=sum(3,5)
console.log("the sum of two number is:",result)
function sum1(a,b,c=3) { //cis the default value
    // console.log(a+b)
    return a+b+c //return keyword me return de dega ye
}
result1=sum1(3,5)
console.log("the sum of two number is:",result1)

//agar sare parameters function me nahi milengy tab NaN return dega nan means not a number