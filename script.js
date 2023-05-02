// Code For Responsive Navbar Starts

const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close-menu");

menu.addEventListener("click", () => {
    document.getElementById("nav").classList.toggle("active");
})
closeMenu.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("active");
})

// Code For Responsive Navbar Ends

// Code for loader Starts

function loader(){
    document.querySelector(".loader-container").classList.add("fade-out")
}

function fadeOut(){
    setInterval(loader, 3000)
}

window.onload = fadeOut;

// Code for loader Ends
