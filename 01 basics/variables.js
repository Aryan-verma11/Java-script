const accountId=15678  //cannt be changed after assigning value
let accountEmail="trama@jkhejsd"
var accountpassword="896779"
accountcity="jaipur" // tarika achaa nhi hai but variable assign ho jata hai 
let accountis; // ye undefined dega 

// js ko scope nhi pata hota tha {{}} isliye var use karte the but ab let and const use karte hai
/*
prefer not to use var because of its scope issue and hoisting issue
*/



// accountId = 2
accountEmail="hgsdahg.com"
accountpassword="hsgdhs"
accountcity="delhi"

console.log(accountId) ;
console.log(accountEmail) ;
console.log(accountpassword) ;
console.log(accountcity) ;

console.table([accountId,accountEmail,accountpassword,accountcity])