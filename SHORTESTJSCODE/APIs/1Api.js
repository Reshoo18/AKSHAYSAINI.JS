const URL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const factPara =document.querySelector("#fact") 
const btn=document.querySelector("#btn")

// const getFact=async ()=>{
//     console.log("getting data")
//     let response =await fetch(URL)
//     console.log(response);
//     let data = await response.json();
//     factPara.innerText=data[2].text;
// };

function getFact(){
    fetch(URL)
    .then((response)=>{
    return response.json();
    })
    .then((data)=>{
        console.log(data);
    });
}
btn.addEventListener("click",getFact);