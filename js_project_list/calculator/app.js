let input = document.querySelector("input");
let btn = document.querySelectorAll("button")
// console.log(btn);

let string = " ";

    btn.forEach((btn) => {
       btn.addEventListener("click", (e) => {
        
        let number = e.target.innerText;

        if(number == "="){
            value = eval(input.value)
            input.value = value;

        } else if (number == "C") {
            input.value = ""

        }else if(number == ">"){
             input.value = input.value.slice(0, -1)
        }else {
            input.value +=  number
        }
        
       })
    })
