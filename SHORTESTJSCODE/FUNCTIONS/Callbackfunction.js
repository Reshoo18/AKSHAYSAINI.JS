
// CREATE A EVENT LISTNER 
function addEventListener(){
    let count =0;
    document.getElementById("clickme")
        .addEventListener("click",function xyz(){
            console.log("button clicked",++count);
    
        });
    

}
addEventListener();
