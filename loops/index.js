console.log("lets learn about loop")
//basic for loop
a=1;
for (let i=0; i< 100; i++) {
    console.log(a+i);
    
}

//forin loop
let obj={
    name:"aryan",
    expertise:"python programming",
    project:"telegram bot"
}
for (const key in obj) {
    const element = obj[key];
    console.log(key,element)
    
    
}
//forout loop it is used for iterable data structure
for (const c of "aryan") {
    console.log(c)
}

//while loop
let i=0;
while (i<6) {
    console.log(i)
    i++;
    
}

//do while loop
let b=10;
do {
    console.log(b)
    b++;
    console.log(b)
    
} while (b<6);