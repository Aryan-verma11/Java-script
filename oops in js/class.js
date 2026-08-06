class Animal{
    constructor(name){
        this.name=name;
        console.log("Object is created")
    }
    eats(){
        console.log("animal khata hai")
    }
    jumps(){
        console.log("animal kuud rha hai")
    }
}




class lion extends Animal{ //lion ab inherit kar lega animals ki prop ko
    constructor(name){
        super(name); //super ka use hum parent class ko call krny k liye krty hai jaisy ki hum animal ka constructor call krty hai
        console.log("Object is created and now he is a lion")
    }
    eats(){
        super.eats(); //super ka use hum parent class ke method ko call krny k liye krty hai jaisy ki hum animal ka eats method call krty hai
        console.log ("animal khata hai sirf")
        }
            //ye hota hai method overriding
    
}
let a= new Animal("Bunny");
console.log(a)

let l= new lion ("shera");
console.log(l)  


//constructor ko hum kuch chizy pass kara skty hai jaisy agar hum animal ka naam rkhna chahy

//this keyword ka use hum object ke properties ko access krny k liye krty hai jaisy ki hum animal ka naam rkhna chahte hai to hum this.name ka use krty hai


//ek keyword kur hota hai instance  naam ka jo ki hum check kar skaty hai ki wo jo l naam ki lion class hai wo animal class ka instance hai ya nahi