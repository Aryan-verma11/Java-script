console.log("making business name generator by combining list of adjectives ")

// adjective list
// crazy
// Amazing
// fire

// shop name
// Engine
// foods
// garments

// another words:
// bros 
// limited 
// hub

function getrandword() {
    const random=Math.floor(Math.random()*3);
    return random===0?"crazy":
    random===1?"amazing":
    "fire";
}
function getrandword1() {
    const random=Math.floor(Math.random()*3);
    return random===0?"Engine":
    random===1?"food":
    "garments";
}
function getrandword2() {
    const random=Math.floor(Math.random()*3);
    return random===0?"bros":
    random===1?"limited":
    "hub";
}




console.log(getrandword(),getrandword1(),getrandword2());