const   hamburger = document.querySelector(".hamburger");
const  menu = document.querySelector(".menu-navegacion")


console.log (menu)
console.log(hamburger)

hamburger.addEventListener("click", ()=> {
    menu.classList.toggle("spread")
})
/*condicional para no ver el boton hamburguesa*/
window.addEventListener("click", e=> {
if(menu.classList.contains("spread")
&& e.target != menu && e.target != hamburger ){menu.classList.toggle("spread")
}
})