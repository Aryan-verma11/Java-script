let a=[1,94,56,78]


// forEach array me value index aur array ko bhi print karny me hlp krta hai

a.forEach((value,index,arr)=>{
    console.log(value,index,arr)
    
})

//for in loop key aur element ko print karny me kaam aata hai aur ek object ke roop me use krty hai jaisy:-
let objectkanaam={
    a:1,
    b:2,
    c:3
}
for (const key in objectkanaam) {
    if (!Object.hasOwn(objectkanaam, key)) continue;
    
    const element = objectkanaam[key];
    console.log(key,element);
}

//for off loop

for (const iterator of a) {
    console.log(iterator);
}