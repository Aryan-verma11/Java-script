async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(45);
        }, 1000);
    });
}



//async fun jo oopr bana hai ye poora code ke sath chlega lkin jab hmmey jarurat padey turant function chala kr chalany ki tb hum_..>
//iife ka istemal krty hai immediately invoke function expression ismy jab hum function bnaty hai to hum oosi me oosi jagah oosy call kr dety hai 


(async function main (){
    let a = await sleep()
    console.log(a)
    let b= await sleep()
    console.log(b)
})()