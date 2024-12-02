let hamMenuIcon = document.getElementById("ham-menu")
let navBar = document.getElementById("nav-bar")
let navLinks = navBar.querySelectorAll("li");


hamMenuIcon.addEventListener("click", () => {
    navBar.classList.toggle("active");
    hamMenuIcon.classList.toggle("fa-times")
    

})

navLinks.forEach((navlinks)=>{
    navlinks.addEventListener("click", ()=> {
        navBar.classList.remove("active")
        hamMenuIcon.classList.remove("fa-times")
        
    })
})
