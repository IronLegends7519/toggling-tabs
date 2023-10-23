let Price = document.querySelector("#price")
let Name = document.querySelector("#name")
let Revelance = document.querySelector("#revelance") 


Price.addEventListener("click", ()=>{
  Price.style.backgroundColor="aqua";
  Name.style.backgroundColor="white";
  Revelance.style.backgroundColor="white";
})
Name.addEventListener("click", ()=>{
  Name.style.backgroundColor="aqua";
  Price.style.backgroundColor="white";
  Revelance.style.backgroundColor="white";
})
Revelance.addEventListener("click", ()=>{
  Revelance.style.backgroundColor="aqua";
  Name.style.backgroundColor="white";
  Price.style.backgroundColor="white";
})