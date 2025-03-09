//PROISE SYNTAX

   // let promise = new Promise((resolve,reject)=> {
   //  console.log("i am a promise")
   // })



         // ASYNCFUNCTION PROMICES

// function asyncFunc() {
//    return new Promise((resolve, reject) => {
//    setTimeout(()=>{
//       console.log("data1");
//       resolve("sucess");
//    }, 4000);
// });
// }
// console.log("fetching data 1");
// let p1=asyncFunc();
// p1.then((res)=>{
// console.log(res);
// });



function asynFunc1(){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         console.log("some data1")
         resolve("success")
      },5000)
   });
}
function asynFunc2(){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         console.log("some data2")
         resolve("success")
      },5000)
   });
}

console.log("fetching data1")
let p1=asynFunc1();
p1.then((res)=>{
  console.log("fetching data2");
  let p2=asynFunc2();
  p2.then((res)=>{});
   
});