//asynchronus nature of js which tell that first script will run than the other things

console.log("Aryan is a hacker") //synchronus
console.log("Arun is a hacker")

setTimeout(() => {
    console.log("it is set time out")  //asynchronus 

}, 2000);

console.log("all the above info is fake")



 //lets talk about callback function

setTimeout(() => {
    console.log("i am in inside settimeout")
  
},0);
setTimeout(() => {
    console.log("i am in inside settimeout 2")
  
},0);

console.log("the end")

const fn = () => {
  console.log("nothing")
}
const callback = (arg,fn) => {
  console.log(arg)
}

 const loadscript = (src,callback) => {
    let sc=document.createElement("script")
    sc.src=src
    sc.onload= callback("harry",fn)
    document.head.append(sc)
 }

 loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

 //callback ka matlab hota hai function ko variable me call krna
 //kabhi kabhi cllback ke andar multiple callback(pyramid of doom) hoty hai to code ko managable bnany ke liye hum
 //promises ka istemaal krty hai 

