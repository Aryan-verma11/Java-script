let [x, y,...rest] = [1, 2,3,4,5,6,7,8]
console.log(x, y,rest)

//object destructuring
//agar hum x aur y ki array bnaye aur osy barabar rkhey 1 aur 2 ke to hmmey clog me 1 aur 2 dikhayega aur agar hum ...rest use krty hn to osy baad wali values ko array me store kr dega aur osy rest me store kr dega aur clog me x y rest likhey tb op me baki rest values ka array show hoga

let obj={
    a:1,
    b:2,
    c:3,
    d:4
}


let {a,b}=obj
console.log (a,b)


// agar hmmey bhot badey obj sy 3 ya 4 chizy xhahiye to hum iska use kr sky hai 



function sum (a,b,c){
    return a+b+c
}
let arr = [1,4,6]
console.log(arr[0]+arr[1]+arr[2])
console.log(sum(...arr)) // this is a spread operator used to open the array and distrbute the probem onto the index



//ek aur cncept hota hai jissy hum hoisting jismy agar kisi var variable ko agar kisi code me likthy hai to jaha pe humny declare kiya hai oosky oopr bhi hum oosy calll kr skty hai hai const pe kaam nhi krega


hello("aryan")

function hello(name){
    console.log(name)
}


