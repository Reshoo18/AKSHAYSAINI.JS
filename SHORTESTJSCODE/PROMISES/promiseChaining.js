function getData(dataId,){
    return new promise((resolve , reject)=>{
     setTimeout(()=>{
      console.log("data",dataId);
      resolve("success");
     },5000);

     });

}

//Promise Chain

getData(1)
.then((res)=>{
    return getData(2);
})
.then ((res)=>{
    return getData(3)
})
.then((res)=>{
    console.log(res)
});