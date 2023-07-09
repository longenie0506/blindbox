var carddiv = document.getElementById("card")
var detaildiv = document.getElementById("detail")

carddiv.onclick = ()=>{
    detaildiv.style.display = "flex"
}

detaildiv.onclick = ()=>{
    detaildiv.style.display = "none"
}