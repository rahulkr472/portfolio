let start = document.querySelector("#start")
let stop = document.querySelector("#stop")
let btnvalue = document.querySelector("#btn-value")
let btntype = document.querySelector("#btn-type")

start.addEventListener("click", () => {
    document.addEventListener("keydown", keydown)
    document.addEventListener("keyup", keyup)
   start.style.color = "#000"
    
})

stop.addEventListener("click", () => {
    document.removeEventListener("keydown", keydown)
    document.removeEventListener("keyup", keyup)
    btnvalue.innerHTML = "";
    btntype.innerHTML = "";
    start.style.color = "grey"

    
})

function keydown(e) {
    btnvalue.innerHTML = `key ${e.key} presses down`
    btntype.innerHTML = `key is down`
}

function keyup(e) {
     btnvalue.innerHTML = `key ${e.key} is relesed`
    btntype.innerHTML = `key is up`
}
