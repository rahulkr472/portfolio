let textvalue = document.querySelector("#text")

function saveText() {
    let input = document.querySelector("#input");
    value = input.value;
    
    localStorage.setItem("savedText", value);
    // localStorage.removeItem("savedText")
    text.innerHTML = ""
}

function RetriveText() {
   let text = localStorage.getItem("savedText")
   console.log(text);

   if(text){
    textvalue.innerHTML = text
   }else{
    textvalue.innerHTML = "no saved text"
   }

//    let p = document.createElement("p")
//    textvalue.append(p)
   
//    p.innerText = savedText  
}