let banner = document.querySelector(".project")
let night = document.querySelector("#night")
let day = document.querySelector("#day")
let logo = document.querySelector("#one h2 a")
let maintext = document.querySelectorAll("#two h1")
let btn = document.querySelectorAll("#btn2");
let list = document.querySelectorAll("#one ul a");
let projectlist1 = document.querySelector("#project-list")

console.log(projectlist1);



night.addEventListener("click",() => {

   
    logo.classList.add("active")
    maintext[0].classList.add("active")
    btn[0].classList.add("active")
    list.forEach((val) => {
        val.classList.add("active")
    })
    projectlist1.classList.add("active")

     banner.style.backgroundColor = "#333"
    night.style.display = "none"
    day.style.display = "block"

     
})

day.addEventListener("click",() => {

    logo.classList.remove("active")
    maintext[0].classList.remove("active")
    btn[0].classList.remove("active")
    
    
    list.forEach((val) => {
        val.classList.remove("active")
    })

     banner.style.backgroundColor = "white"
    //  console.log("hello");
     night.style.display = "block"
    day.style.display = "none"
     
})

let typeEffect = new Typed("#text", {
    strings: ["rahul","coder","web developer","portfolio"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 100,
})

let project = document.querySelector("#project")
let projectlist = document.querySelector(".project-box")

console.log(projectlist);

project.addEventListener("mouseenter", () => {
        projectlist.classList.add("active")
       console.log("hello");
       
})

project.addEventListener("mouseleave", () => {
    projectlist.classList.remove("active")
   console.log("hello");
   
})

projectlist.addEventListener("mouseenter", () => {
    projectlist.classList.add("active")
    console.log("hello");
    
})
projectlist.addEventListener("mouseleave", () => {
    projectlist.classList.remove("active")
    console.log("hello");
    
})




