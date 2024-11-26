let slider = document.querySelectorAll("#slider")

console.log(slider);

let sliderIndex = 0;
const totalslide = slider.length;
console.log(totalslide);


function showSlider() {
    slider.forEach((val, index) => {
    
        
       if(sliderIndex < 0){
          sliderIndex = totalslide-1;
        // sliderIndex = 0;
       } else if (sliderIndex >= totalslide) {
              sliderIndex = 0;
       }
        

        if(index === sliderIndex){
              val.style.display = "block"
        }else {
            val.style.display = "none"
        }
    })

}

const prev = () => {
    sliderIndex--
    showSlider()
}

const next = () => {
    sliderIndex++;
    showSlider()
}

showSlider()