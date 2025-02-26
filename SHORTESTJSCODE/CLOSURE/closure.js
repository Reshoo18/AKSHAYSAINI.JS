// function x(){
//     var a=7
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();





                          //CLOSURE
// function x(){
//     var a =7;
//     function y(){
//         console.log(a);
//     }
//     return y;

// }
// var z=x();
// console.log(z);
// z();
                                             













                                               //CLOSUE 2.0
function z(){
    var b =900;
    function x(){
        var a =10;
        function y(){
            console.log(a,b)
        }
        y();
    }
    x();
}
z();