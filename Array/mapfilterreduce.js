// jab koi new array bana ni ho purani array se to map function kaam ata hai 

let arr=[1,2,3,4,5,6,7,8]
// let newarr=[]
//by taking normal for loop


// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)// newarr me arr waly element ka square krky dalta jayega
    
// }


// this is a very large method by using classical loop function so we use mapping function which is one liner and less error prob we can also operate value index and array

let newarr=arr.map((e,index,array)=>{
    return e**2
})
console.log(newarr);

//using filter method agar hmmey kuch specific elements chahiye tab use krty hai jaisy ki wo elements jo ki 5 sy badey hai\

const greaterthanfive=(e)=>{
    if(e>5){
        return true
    }
    return false
}
console.log(arr.filter(greaterthanfive));

//using reduce method
//

let arr2=[1,2,3,4,5,6,7,8,9]
const reducefunckanaam=(a,b)=>{
    return a+b  //koi bhi operation laag skty hai
}

console.log(arr2.reduce(reducefunckanaam))


//use of from jab kisi bhi obj ko array me convert karna ho tab

let h=Array.from("aryan")
console.log(h)