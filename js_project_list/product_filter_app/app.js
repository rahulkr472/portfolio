let input = document.querySelector("input")
let search = document.querySelector("#search")
let categorybtn = document.querySelectorAll("#category-btn")
// console.log(categorybtn[1].innerHTML);





function productSearch () {
   let searchValue = input.value.toLowerCase()
   let item = document.querySelectorAll(".item")
   let activeCategory = document.querySelector("#category-btn.active").dataset.category;


   item.forEach((val) => {
      title = val.querySelector("h1").innerText.toLowerCase();
      category = val.dataset.category;
      // console.log(category);
      
      if((title.includes(searchValue) || searchValue === "") && (activeCategory === category || activeCategory === "all")){
         val.style.display = "block"
      }else {
         val.style.display = "none"
      }  
        
      
   })
}


function setcategory(e){
   
   categorybtn.forEach((btn) => {
         btn.classList.remove("active")      

   })
   e.target.classList.add("active")
   // console.log(e.target.innerText);

   
   productSearch()
}

search.addEventListener("click", () => {
   productSearch()
})

input.addEventListener("keyup", () => {
   productSearch()
})

categorybtn.forEach((btn)  => {
  btn.addEventListener("click", setcategory)
})
