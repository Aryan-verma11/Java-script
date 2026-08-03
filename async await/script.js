//maan lo agr network me data load ho rha hai server sy to hmmey nhi pata kitna time lgta hai server sy data time load hone me to isky help sy hum ek ek karky data load kr skty h or data load hone k bad humy pata chl jata h k data load ho gya h ya nhi
//agr data load ho gya to humy data mil jata h or agr nhi to humy error milta h
//agar hum chahty hai process data ruk jaye jab tak succesfull na batyae

// function getdata() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 35000);
//   });
// }
async function getdata() { //here we put async keyword bcz we want to wait for data to load and then we want to process it
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 35000);
  });
}
//humny yaha par timeout 35 sec kiya hai kiuki hum oos data ko rok skty hai itny sec ke liye jis sy wo data aany me time lgayega aur tab tak wo data load ho jayega or humy data mil jayega
//aur agar hmmey ye property nhi chahiye to hum async await ka use kr skty hai jisme humy data load hone me time nhi lgta or humy data mil jata hai
console.log("loading modules..");
console.log("do anything");
console.log("load data ");
let data = await getdata(); //yaha await lgany sy wait krega async function k liye or data load hone k bad hi process hoga
data.then((V) => {
  console.log(data);
  console.log("processung data succesfully");
});
