let navLinks = document.querySelector(".navNarrow");
let narrowLinks = document.querySelector(".narrowLinks");


navLinks.addEventListener("click", toggle);

function toggle() {
    narrowLinks.classList.toggle("hidden")
}



var images = [];
images[0]="/images/magasin.jpg";
images[1]="/images/vitrine1.jpg";
images[2]="/images/vitrine2.jpg";

var i = 0;
var timer = 3000;

function changerImage () {
    document.diapo.src=images[i];
    if (i<images.length-1) {
        i++;
    } else {
        i=0
    }
    setTimeout("changerImage()",timer);
}
window.onload=changerImage;



let list = document.querySelectorAll(".list li");
let box = document.querySelectorAll(".box");

list.forEach((el)=>{
    el.addEventListener("click" , (e)=>{
        list.forEach((el1)=>{
            el1.style.color = "#000";
        })
        e.target.style.color = "#d4a373"
        box.forEach((el2)=>{
            el2.style.display = "none";
        })
        document.querySelectorAll(e.target.dataset.color).forEach((el3)=>{
            el3.style.display = "flex";
        })
    })
})