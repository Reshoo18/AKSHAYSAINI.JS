//PROISE SYNTAX

   // let promise = new Promise((resolve,reject)=> {
   //  console.log("i am a promise")
   // })



         // ASYNCFUNCTION PROMICES

function asyncFunc() {
   return new Promise((resolve, reject) => {
   setTimeout(()=>{
      console.log("data1");
      resolve("sucess");
   }, 4000);
});
}
console.log("fetching data 1");
let p1=asyncFunc();
p1.then((res)=>{
console.log(res);
});