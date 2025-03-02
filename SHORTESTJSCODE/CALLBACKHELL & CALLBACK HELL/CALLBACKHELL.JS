// function getData(dataId,getNextData){
// setTimeout(() => {
//     console.log("data",dataId);
//     if(getData){
//         getNextData();

//     }
    
// }, 2000);
// }
// getData(1,()=> {
//     getData(2,()=>{
//         getData(3);
//     });
// })


function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getData){
            getNextData();
        }
    },2000);
}
getData(1,()=>{
    getData(2,()=>{
        getData(3)
    });
}
)