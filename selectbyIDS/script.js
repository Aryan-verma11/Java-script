console.log("Aryan verma");

let av=document.getElementsByClassName("box") 
console.log(av);
// it is a array like object but not an array
// it is used to select the element by class name and it return a array like object which is called HTML collection
// ------->>av[2].style.backgroundColor="red"; 
// here the 3rd element of the HTML collection is selected and its background color is changed to red which is selected by class
// but if we want to add the box in between than the 1 to 3 box it will always color the 2nd index box therefor we use ids
// ------->document.getElementById("red").style.backgroundColor="red";
//  here the element is selected by id and its background color is changed to red which is selected by id and it will always select the same element even if we add the box in between the 1 to 3 box because it is selected by id and id is unique for each element
// it is unique for each element  
document.querySelector(".box").style.backgroundColor="yellow";
// here the first element of the class box is selected and its background color is changed to yellow
document.querySelectorAll(".box").forEach(e=>e.style.backgroundColor="cyan");
// here all the element of the class box is selected and its background color is changed to cyan
e= document.getElementsByTagName("div");
e[4].matches("red");
// here the 5th element of the div is selected and it is checked that it has the class box or not and it return true because it has the class box
