
                                   //block code 
// if(true){
//     //compount statemen
//     var a=10;
//     console.log(a);
// }






                                            //output ayega let & const ayenge block space m and var ayega global space m
// {
//     var a =10;
//     let b =20;
//     const c=30;

// }
                            





                                     // SHADOWING AND ILLEGAL SHADOWING
 //shadowing
 
 
//  let b =100;
//  {
//     var a =10;
//     let b =20;
//     const c=30;
//     console.log(a)
//     console.log(b)
//     console.log(c)
//  }
//  console.log(b)
 // var k time pr change ho jayega block m bhi but let and const m nhi hoga

                                   

                                       
 
 
 
 
 
 
 
 
 
 
 
 
 
                                          //illega shadowing
// let a =10;
// {
//     var a =20;
// }






                                     






                                            //LEXIAL SCOPE

const a =20;
{
    const a=100;{
        const a=300;
        //`console.log(a)
    }
    //console.log(a);
}
console.log(a)






