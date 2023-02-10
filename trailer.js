const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerEl = document.querySelector(".trailer-container");
btnEl.addEventListener("click", ()=>{
    trailerEl.classList.remove("active")
})
closeIconEl.addEventListener("click", ()=>{
    trailerEl.classList.add("active")
})