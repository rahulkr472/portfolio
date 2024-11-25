let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");

let box5 = document.querySelector("#box5");
let box6 = document.querySelector("#box6");
let box7 = document.querySelector("#box7");
let box8 = document.querySelector("#box8");



window.addEventListener("scroll", () => {
    if(scrollY >= 1300){
        box1.classList.add("active") //box1
        box2.classList.add("active")  //box2
        box3.classList.add("active")  //box2
        box4.classList.add("active")  //box2
        
    } else {
        box1.classList.remove("active")  //box1
        box2.classList.remove("active")  //box2
        box3.classList.remove("active")  //box2
        box4.classList.remove("active")  //box2
    }


    if(scrollY >= 1500){
        box5.classList.add("active")
        box6.classList.add("active")  //box2
        box7.classList.add("active")  //box2
        box8.classList.add("active")  //box2
        
    } else {
        box5.classList.remove("active")
        box6.classList.remove("active")  //box2
        box7.classList.remove("active")  //box2
        box8.classList.remove("active")  //box2
    }

 
})

//1000+ Element
//container1
let box11 = document.querySelector("#main-section4 #boxes-content .box1-content .box1")
let box22 = document.querySelector("#main-section4 #boxes-content .box1-content .box2")
let box33 = document.querySelector("#main-section4 #boxes-content .box1-content .box3")
let box44 = document.querySelector("#main-section4 #boxes-content .box1-content .box4")
//container2
let box55 = document.querySelector("#main-section4 #boxes-content .box2-content .box5")
let box66 = document.querySelector("#main-section4 #boxes-content .box2-content .box6")
let box77 = document.querySelector("#main-section4 #boxes-content .box2-content .box7")
let box88 = document.querySelector("#main-section4 #boxes-content .box2-content .box8")


window.addEventListener("scroll", () => {
    //container1
    if (scrollY >= 2100) {
        box11.classList.add("active")
        box22.classList.add("active")
        box33.classList.add("active")
        box44.classList.add("active")
    }else{
        box11.classList.remove("active")
        box22.classList.remove("active")
        box33.classList.remove("active")
        box44.classList.remove("active")
    }
      //container2
    if (scrollY >= 2200) {
        box55.classList.add("active")
        box66.classList.add("active")
        box77.classList.add("active")
        box88.classList.add("active")
    }else{
        box55.classList.remove("active")
        box66.classList.remove("active")
        box77.classList.remove("active")
        box88.classList.remove("active")
    }


})

//container3
let box99 = document.querySelector("#main-section4 #boxes-content .box3-content .box9")
let box111 = document.querySelector("#main-section4 #boxes-content .box3-content .box10")
let box122 = document.querySelector("#main-section4 #boxes-content .box3-content .box11")
let box133 = document.querySelector("#main-section4 #boxes-content .box3-content .box12")

//container4
let box144 = document.querySelector("#main-section4 #boxes-content .box4-content .box13")
let box155 = document.querySelector("#main-section4 #boxes-content .box4-content .box14")
let box166 = document.querySelector("#main-section4 #boxes-content .box4-content .box15")
let box177 = document.querySelector("#main-section4 #boxes-content .box4-content .box16")

window.addEventListener("scroll", () => {
     //container3
     if (scrollY >= 2400) {
        box99.classList.add("active")
        box111.classList.add("active")
        box122.classList.add("active")
        box133.classList.add("active")
    }else{
        box99.classList.remove("active")
        box111.classList.remove("active")
        box122.classList.remove("active")
        box133.classList.remove("active")
    }

      //container4
      if (scrollY >= 2500) {
        box144.classList.add("active")
        box155.classList.add("active")
        box166.classList.add("active")
        box177.classList.add("active")
    }else{
        box144.classList.remove("active")
        box155.classList.remove("active")
        box166.classList.remove("active")
        box177.classList.remove("active")
    }
})

//contaner11

//container1
boxA = document.querySelector("#main-section5 .main-content .boxes-content .box1")
boxB = document.querySelector("#main-section5 .main-content .boxes-content .box2")
boxC = document.querySelector("#main-section5 .main-content .boxes-content .box3")
boxD = document.querySelector("#main-section5 .main-content .boxes-content .box4")

//container2
boxE = document.querySelector("#main-section5 .main-content .boxes-content .box5")
boxF = document.querySelector("#main-section5 .main-content .boxes-content .box6")
boxG = document.querySelector("#main-section5 .main-content .boxes-content .box7")
boxH = document.querySelector("#main-section5 .main-content .boxes-content .box8")

window.addEventListener("scroll",() => {
    if (scrollY >= 2900) {
        boxA.classList.add("active")
        boxB.classList.add("active")
        boxC.classList.add("active")
        boxD.classList.add("active")
    }else {
        boxA.classList.remove("active")
        boxB.classList.remove("active")
        boxC.classList.remove("active")
        boxD.classList.remove("active")

    }

    if (scrollY >= 3000) {
        boxE.classList.add("active")
        boxF.classList.add("active")
        boxG.classList.add("active")
        boxH.classList.add("active")
    }else {
        boxE.classList.remove("active")
        boxF.classList.remove("active")
        boxG.classList.remove("active")
        boxH.classList.remove("active")

    }
})

//container3
boxI = document.querySelector("#main-section5 .main-content .boxes-content .box9")
boxJ = document.querySelector("#main-section5 .main-content .boxes-content .box10")
boxK = document.querySelector("#main-section5 .main-content .boxes-content .box11")
boxL = document.querySelector("#main-section5 .main-content .boxes-content .box12")

//container4
boxM = document.querySelector("#main-section5 .main-content .boxes-content .box4-content .box13")
boxN = document.querySelector("#main-section5 .main-content .boxes-content .box14")
boxO = document.querySelector("#main-section5 .main-content .boxes-content .box15")
boxP = document.querySelector("#main-section5 .main-content .boxes-content .box16")

window.addEventListener("scroll",() => {
    if (scrollY >= 3200) {
        boxI.classList.add("active")
        boxJ.classList.add("active")
        boxK.classList.add("active")
        boxL.classList.add("active")
    }else {
        boxI.classList.remove("active")
        boxJ.classList.remove("active")
        boxK.classList.remove("active")
        boxL.classList.remove("active")

    }

    if (scrollY >= 3300) {
        boxM.classList.add("active")
        // boxN.classList.add("active")
        // boxO.classList.add("active")
        // boxP.classList.add("active")
    }else {
        boxM.classList.remove("active")
        // boxN.classList.remove("active")
        // boxO.classList.remove("active")
        // boxP.classList.remove("active")

    }
})

window.onload = () => {
    setTimeout(() => {
        document.querySelector(".container").style.display = "none"
        document.querySelector(".main-div").classList.remove("hidden")
    },1000)
}

let btn = document.querySelector(".main-content .part3 #btn2")
let shop = document.querySelector(".shop .main-div")
console.log(shop);


btn.addEventListener("click", () => {
    console.log("hello");
    shop.style.display = "block"
    shop.classList.add("active")
    
})

let cross = document.querySelector(".shop .main-div #cross ")

cross.addEventListener("click", () => {
    shop.style.display = "none"
})