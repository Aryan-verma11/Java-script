console.log("this is promises");

let promt1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("no rndm number num was not supporting you");
  } else {
    setTimeout(() => {
      console.log("yes i am done");
      resolve("aryan");
    }, 3000);
  }
});
let promt2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("no rndm number num was not supporting you 2");
  } else {
    setTimeout(() => {
      console.log("yes i am done");
      resolve("aryan 2");
    }, 1000);
  }
});

// promt1
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


let p3=Promise.all([promt1,promt2])
p3.then((a)=>{
    console.log(a);
    
}).catch(err=>{
    console.log(err);
    
})