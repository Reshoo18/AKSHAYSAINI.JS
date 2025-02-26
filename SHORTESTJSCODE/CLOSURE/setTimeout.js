// function x(){
//     var a =1
//     setTimeout(function(){
//         console.log(a)
//     },5000)
// }
// x();



                                   //CLOSURE

function x(){
    var i =100;
    setTimeout(function(){
        console.log(i)
    },3000)
}
x();