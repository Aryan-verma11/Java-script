// Variable declarations with different data types
let x = "gafoor bhai";  // string data type
let y = 22;             // number data type
let z = 6.99;           // number (decimal) data type
const p = true;         // boolean data type
let q = undefined;      // undefined data type
let r = null;           // null (special object type in JS, but used for "empty" values), object data types bcz it is primitively written and used in various places

// Logging values
console.log(x, y, z, p, q, r);

// Logging data types
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

//what is object in js
//it is a key value pair combination

// Object declaration with key–value pairs
let o = {
    name: "aryan",                // string property (key without quotes since no spaces)
    "student role": "moniter",    // key with space must be written inside quotes (" ")
    is_poor: "true"               // string value (not boolean true)
};

// Display the initial object
console.log(o);

// Add a new property 'job' to the object
o.job = "watchman";
console.log(o);

// Add another property 'salary' to the object
o.salary = "40rs";
console.log(o);

// Update the value of an existing property 'salary'
o.salary = "50rs";
console.log(o);
