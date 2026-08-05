let a = prompt("Enter a number");
let b = prompt("Enter second number");
if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Please enter valid numbers.");
}
let sum = parseInt(a) + parseInt(b);

function main() {
  try {
    console.log("the sum is", sum * X);
    return true;
  } catch (error) {
    console.log("Error aa gya halku re...");
    return false;
  } finally {
    console.log("Execution completed.");
  }
}
main();
//try ka kaam hota hai code ko chala kar dekhna aur check krna ki koi error to nhi aya hai

//catch oosi error ko pakadta haia oos sy related jo error ata hai oosy btata hai aapky dwara msg diya hua

//finally jroor sy jroor code chalta hai chahy code try catch chaly ya na chaly
//SyntaxError ka kaam hota hai ki agar koi error aata hai to usko pakadna aur uska msg dikhana

//hum finally ki jagah consolelog ka bhi use kar skty hai lkin agar try catch me agar koi return krega to wo consolelog nhi chalega sirf finaaly hi chal skta hai tb

//yaha return k matlab hota hai wapas jao agar code awapas chala gya to kuch aagy ka code nhi padha jayega isliye hum finally ka use krty hai
