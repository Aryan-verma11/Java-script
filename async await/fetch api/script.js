async function getdata() {
  //here we put async keyword bcz we want to wait for data to load and then we want to process it

  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await x.json(); //data chunks me atta hai to humy json me convert krna pdta hai
  console.log(data);
}

async function main() {
  console.log("loading modules..");
  console.log("do anything");
  console.log("load data");
  let data = await getdata(); //yaha await lgany sy wait krega async function k liye or data load hone k bad hi process hoga
  console.log(data);
  console.log("processung data succesfully");
  console.log("task 2");
}

main();

//agar promise settle hoga tahi json data show hoga agr promise settle nhi hoga to json data show nhi hoga

//promise ka settle hony ka matlab hai ki resolve ya reject
//resolve ka matlab hai ki promise settle ho chuki hai succeassfully
//reject ka matlab hai ki promise settle ho chuki hai but unsuccessfully

//post request example

async function postdata(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
postData("https://jsonplaceholder.typicode.com/posts", { answer: 42 }).then(
  (data) => {
    console.log(data); // JSON data parsed by response.json() call
  },
);

//GET data lety hai web sy POST sensitive data submit krty hai
//PUT update ke liye
//DELETE delete ke kiye
