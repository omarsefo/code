let cods =document.getElementById("cods");
let play =document.getElementById("play");
let remove =document.getElementById("remove");
let result =document.getElementById("result");

play.onclick = ()=>{
    result.innerHTML = cods.value;
    localStorage.setItem("res", cods.value)
}
remove.onclick = ()=>{
result.innerHTML ="";
cods.value = "";
}
onload =()=>{
    cods.value = localStorage.getItem("res");
}