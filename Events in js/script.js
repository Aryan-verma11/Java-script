let button = document.getElementById("btn");
button.addEventListener("click",()=>{
document.querySelector(".box").innerHTML="<b>you were clicked...!</b>Enjoy your click"})
button.addEventListener("contextmenu",()=>{
document.querySelector(".box").innerHTML=alert("dont hack us")})

document.addEventListener("keydown",(e)=>{
console.log(e)



// button.addEventListener("click",()=>{
//     alert("Button was clicked!");


});