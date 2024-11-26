let input = document.querySelector("#input")
let btn = document.querySelector("button")
let city1 = document.querySelector("#city")
let temp = document.querySelector("#temp")
let cloud = document.querySelector("#cloud")
let country = document.querySelector("span")
console.log(country.innerText);

let weather = document.querySelector(".wheather")


// console.log(city.innerHTML);



async function wheather() {
    let city = input.value;
    // console.log(city);

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"95c85d2b178e43593c6ce659ce2b8111"}`);
        const data = await response.json()
        // console.log(data)

        if(input.value === "") {
            weather.style.display = "none"
        } else {
             weather.style.display = "block"
        }

        city1.innerHTML = `${data.name}`
        country.innerHTML = `${data.sys.country}`
        temp.innerHTML = `${data.main.temp} °C`
        cloud.innerHTML = `${data.weather[0].main}`
        // temp.innerHTML = 
     

    } catch (error) {
       console.error("error occur");
        
    }
    
}


btn.addEventListener("click", () => {
   wheather()
    
})