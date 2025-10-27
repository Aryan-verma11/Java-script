
let random=Math.random()
let a = prompt("Enter first number:")
let b = prompt("Enter operator:")
let c = prompt("Enter second number:")



let obj={
    "+":"-",
    "-":"+",
    "/":"*",
    "*":"/"
}

if (random>0.10){
    //perform correct calculation
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    //perform wrong calculation
    c=obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
