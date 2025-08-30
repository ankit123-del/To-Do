// let name = "Rahul";
// console.log(`Hello ${name}, welcome to ES6!`);
// let obj={x:1,y:2};
// let newObj={...obj,z:1};
// console.log(newObj);
// let arr=[1,2,3];
// let [a,b,c]=arr;
// console.log(a,b,c);
// let  obj={name:"ankit",age:21};
// let {name:n,age}=obj;
// console.log(n,age)
// try{
//     let result=10/0;
//     console.log(result);
// }
// catch(error){
//     console.log("error",error.message);
// }
// try {
//   // Risky code
//   let result = 10/0;
//   console.log(result);
// } catch (error) {
//   // Agar error aata hai to yahan handle hoga
//   console.log("Error:", error.message);
// }
// function getname(input){
//     try{
//         if(typeof input !=="number"){
//             throw new Error("enter the number only");
//         }
//         console.log("valid number",input);
//     }
//     catch (error) {
//     console.log("Error:", error.message);
//   }
// }
// getname(12);
// getname("n");
// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// greet("Rahul", () => {
//   console.log("Welcome to Async JS!");
// });
// const fakePromise=new Promise ((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("promise resolve after after 2 second")
//   },2000);
// });
// fakePromise
// .then((msg)=>{
//   console.log(msg);
// })
// .catch((err)=>{
//   console.error(err);
// });
// const p1=new Promise((res)=>setTimeout(()=>res("promise p1"),2000));

// const p2=new Promise((res)=>setTimeout(()=>res("First done!"),1000));
// const p3=new Promise((res)=>setTimeout(()=>res("promise p3"),3000));
// Promise.all([p1,p2,p3]).then((values)=>{
//     console.log("All promises resolved:",values);
// });
// function getMessage() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello, this is resolved after 2 seconds!");
//     }, 2000);
//   });
// }

// async function showMessage() {
//   console.log("⏳ Waiting for message...");
  
//   const msg = await getMessage();  // wait until promise resolves
//   console.log(msg);

//   console.log("🎉 Done!");
// }

// showMessage();

// function getMessage(){
//     return new Promise((res)=>{
//         setTimeout(()=>{
//             res("hello ,this is resolv after 2 sec.")
//         },2000);
//     });
// }
// async function showMessage() {
//     console.log("waiting for message...");

//     let message=await getMessage();
//     console.log(message);
//     console.log("done");
    
// }
// showMessage();
// const user={name:"ankit",age:21};
// const jsonstr=JSON.stringify(user);
// console.log(typeof(user));
// console.log(typeof jsonstr);
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())  // convert response to JS object
  .then((users) => {
    console.log("Users:", users);
    users.forEach(user => {
      console.log(`${user.id}. ${user.name} - ${user.email}`);
    });
  })
  .catch((error) => console.error("Error:", error));
