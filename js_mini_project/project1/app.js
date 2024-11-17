//loader

let webloader = document.querySelector(".web-loader")
console.log(webloader);
let hidden = document.querySelector(".hidden")
console.log(hidden);

function loader() {
    setTimeout(() => {
        webloader.style.display = "none";
        hidden.style.display = "block"
    },3000)
}

loader()

    //home content
let home = document.querySelector(".main-website #section-one .navbar .sub-navbar .navbar-text #home");
let home2 = document.querySelector("#section-one .home");

    home.addEventListener("mouseenter", () => {
        home2.classList.add("active")
    
    })
    home.addEventListener("mouseleave", () => {
       home2.classList.remove("active")
    })

    //page content
    let page = document.querySelector(".main-website #section-one .navbar .sub-navbar .navbar-text #page");
    let page2 = document.querySelector("#section-one .page");    

    page.addEventListener("mouseenter", () => {
        page2.classList.add("active")
    
    })
    page.addEventListener("mouseleave", () => {
       page2.classList.remove("active")
    })


//blog

let blog = document.querySelector(".main-website #section-one .navbar .sub-navbar .navbar-text #blog");
let blog2 = document.querySelector("#section-one .blog");    

blog.addEventListener("mouseenter", () => {
    blog2.classList.add("active")

})
blog.addEventListener("mouseleave", () => {
   blog2.classList.remove("active")
})

window.addEventListener("scroll", () => {
    let navbar = document.querySelector("#section-one .navbar")
    let logo1 = document.querySelector(".logo1")
    let logo2 = document.querySelector(".logo2")

    if (window.scrollY > 50) {
        navbar.classList.add("sticky");
        logo1.style.display = "none"
        logo2.style.display = "block"
        
  
    } else {
        navbar.classList.remove("sticky")
         logo1.style.display = "block"
        logo2.style.display = "none"
    }
})

let content1 = document.querySelector("#section-six .main-div .content1")
let content2 = document.querySelector("#section-six .main-div .containor .overlay")
// console.log(content1);

content1.addEventListener("click", () => {
    content2.style.display = "block"
    content2.classList.add("active")

    
});


//section 4 and 6 7
let content11 = document.querySelector("#section-four .main-div .containor .content1")
let content22 = document.querySelector("#section-four .main-div .containor .content2")
let content33 = document.querySelector("#section-four .main-div .containor .content3")
console.log(content22);


window.addEventListener("scroll", () => {
    if (scrollY >= 1000) {
        content11.classList.add("active")
        content22.classList.add("active")
       content33.classList.add("active")
        
    } else {
        content11.classList.remove("active")
        content22.classList.remove("active")
        content33.classList.remove("active")
    }

    let section6 = document.querySelector("#section-six .main-div")

    if (scrollY >=1600) {
        section6.classList.add("active")
        // console.log(Window.length);   
    }else {
        section6.classList.remove("active")
    }

    let section7 = document.querySelector("#section-seven .main-div")

    if (scrollY >=2800) {
        section7.classList.add("active")
    }else {
        section7.classList.remove("active")
    }

    let section9 = document.querySelector("#section-nine .main-div")

    if (scrollY >=4000) {
        section9.classList.add("active")
        console.log("hello");
        
    }else {
        section9.classList.remove("active")
    }
})



window.onload = () => {
    $('#section-eight .main-div').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
}


window.onload = () => {
    $('#section-eleven .main-div').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
}

