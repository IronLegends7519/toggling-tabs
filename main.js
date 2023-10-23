let Price = document.querySelector("#price")
let Name = document.querySelector("#name")
let Revelance = document.querySelector("#revelance") 
let selectRevelance=document.querySelector("#selectrevelance")
let selectPrice=document.querySelector("#selectprice")
let selectName=document.querySelector("#selectname")
let Selecteur=document.querySelector("#selecteur")
Price.addEventListener("click", ()=>{
  Price.style.backgroundColor="aqua";
  Name.style.backgroundColor="white";
  Revelance.style.backgroundColor="white";
})
Name.addEventListener("click", ()=>{
  Name.style.backgroundColor="aqua";
  Price.style.backgroundColor="white";
  Revelance.style.backgroundColor="white";
  selectName=getSelection;
})
Revelance.addEventListener("click", ()=>{
  Revelance.style.backgroundColor="aqua";
  Name.style.backgroundColor="white";
  Price.style.backgroundColor="white";
})

Selecteur.addEventListener("change", ()=>{
  console.log(Selecteur.value)
if(Selecteur.value =="price")
{
  Price.style.backgroundColor="aqua";
  Name.style.backgroundColor="white";
  Revelance.style.backgroundColor="white";}
  if(Selecteur.value =="name")
  {
    Name.style.backgroundColor="aqua";
    Price.style.backgroundColor="white";
    Revelance.style.backgroundColor="white";}
    
    if(Selecteur.value =="revelance")
    {
      Revelance.style.backgroundColor="aqua";
      Name.style.backgroundColor="white";
      Price.style.backgroundColor="white"; }
})
