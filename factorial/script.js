// write a program to calculate the factorial of a number by using reduce and for loop

//6!=5x4x3x2x1



let a=6;
let arr=[]

for (i=a; i>=1; i--) {
    return arr
}
console.log(arr);

let arr2=[1,2,3,4,5,6,7,8,9]
const reducefunckanaam=(a,b)=>{   
    return a+b  //koi bhi operation laag skty hai
}

console.log(arr2.reduce(reducefunckanaam))

//using filter method agar hmmey kuch specific elements chahiye tab use krty hai jaisy ki wo elements jo ki 5 sy badey hai\

const greaterthanfive=(e)=>{
    if(e>5){
        return true
    }
    return false
}
console.log(arr.filter(greaterthanfive));
