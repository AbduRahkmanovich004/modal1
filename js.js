let modalBtn = document.querySelector(".btn")
let modal = document.querySelector(".modal")
let overley = document.querySelector(".overley")
let closeBtn = document.querySelector(".closeModal")

const openModallFunk = () => {
    modal.classList.remove("hidden")
    overley.classList.remove("hidden1")
}
const closeModallFunk = () => {
    modal.classList.add("hidden")
    overley.classList.add("hidden1")
}
modalBtn.addEventListener("click",openModallFunk)
overley.addEventListener("click",closeModallFunk)
closeBtn.addEventListener("click",closeModallFunk)
document.addEventListener("keydown",(e)=>{
    if(e.key=="Escape") closeModallFunk();
})
document.addEventListener("keydown",(e)=>{
    if(e.key=="Enter") openModallFunk();
})