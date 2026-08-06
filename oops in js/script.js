//object kaisy banaty hai js me 

let obj = {
    a:1,
    b:"aryan"
}

console.log(obj)
//jab obj ban jata hai to oosky nichy ek prototype banta hai jisme object ke methods hote hai jaise ki hasOwnProperty, isPrototypeOf, toString etc. ye methods object ke liye use hote hai

let animal={
    eats: true
};
let rabbit ={
    jumps: true
};

rabbit.__proto__=animal;



//prototype kiu bnaya jata hai 
//js obj hai a special property called prototype that is either an null or refrence another object. prototype is used to add methods and properties in objects. it is a way to share methods and properties between objects.




//jaisy ek example liya hai animal khata hai aur rabbit kudta hai ismy hum yah dekh skty hai ki rabbit bhi to ek animal hi hai jo ki jo animal ki property ko inherit kart hai 

//object ki apni property to hoti hi hai lkin prototype oony aur qualities add krny ka kaam krta hai 
