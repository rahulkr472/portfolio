let banner = document.querySelector(".project")
let night = document.querySelector("#night")
let day = document.querySelector("#day")
let logo = document.querySelector("#one h2 a")
let list = document.querySelectorAll("#one ul a");
let projectlist1 = document.querySelectorAll(".project-box #project-list a")
let projectbox = document.querySelector("#project-list")
let main = document.querySelector(".main-div")
let projectdiv = document.querySelectorAll(".project1")

console.log(projectlist1);



night.addEventListener("click",() => {

   
    logo.classList.add("active")
    // maintext[0].classList.add("active")
    // btn[0].classList.add("active")
    main.classList.add("active")
    
    projectdiv.forEach((val) => {
        val.classList.add("active")
    })

    list.forEach((val) => {
        val.classList.add("active")
    })

    projectlist1.forEach((val) => {
        val.classList.add("active")
    })
   
    projectbox.classList.add("active")
    // crossbtn.style.color = "#fff"


     banner.style.backgroundColor = "#333"
    night.style.display = "none"
    day.style.display = "block"

     
})

day.addEventListener("click",() => {

    logo.classList.remove("active")
    // maintext[0].classList.remove("active")
    // btn[0].classList.remove("active")
    main.classList.remove("active")
    
    projectdiv.forEach((val) => {
        val.classList.remove("active")
    })
    
    list.forEach((val) => {
        val.classList.remove("active")
    })

    projectlist1.forEach((val) => {
        val.classList.remove("active")
    })

    projectbox.classList.remove("active")
    //  crossbtn.style.color = "#000"

     banner.style.backgroundColor = "white"
    //  console.log("hello");
     night.style.display = "block"
    day.style.display = "none"
     
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