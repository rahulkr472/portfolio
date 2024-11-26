let input = document.querySelector("#input");
let para = document.querySelector("#text");
let time = document.querySelector("#time");
let mistake = document.querySelector("#mistake");
let wpm = document.querySelector("#wpm");
let cpm = document.querySelector("#cpm");


let timer;
let maxTimeNum = 60;
let timeLeftNum = maxTimeNum;
let mistakeNum = 0;
let indexNum = 0;
let isTyping = false;

function randomText() {
    
    paragraph = [
        " Avoid daydreaming about the years to come.",
        "You are the most important person in your whole life.",
        "Always be true to who you are, and ignore what other people have to say about you.",
        "Only demonstrate your strength when it’s really required.",
        "Subscribe to Drop X Out"
    ]

    let randomText = Math.floor(Math.random() * paragraph.length);
    para.innerHTML = "";

    for(let val of paragraph[randomText]){
        para.innerHTML += `<span>${val}</span>`
    
    }



    
    

}

function initTyping() {
    const char =  para.querySelectorAll("span");
    const typedChar = input.value.charAt(indexNum)
    console.log(typedChar);
    

    if(indexNum < char.length && timeLeftNum > 0 ){

        if(!isTyping){
             timer = setInterval(initTime,1000);
             isTyping = true;
        }

        if (char[indexNum].innerText === typedChar) {
            console.log("correct");
            char[indexNum].classList.add("active")
            mistake
            
        }else {
            console.log("incorrect");
            let mistakeRec = mistakeNum+=1;
            console.log(mistakeRec);
            mistake.innerText = mistakeRec;
            char[indexNum].classList.add("incorrect")
            
        }
      
        indexNum++
        cpm.innerText = indexNum - mistakeNum
    }else {
        clearInterval(timer);
        input.value = "";
    }

}    

function initTime() {
   if(timeLeftNum > 0){
          timeLeftNum--;
          time.innerText = timeLeftNum;
          let timeElapsed = maxTimeNum - timeLeftNum;
          let wpmVal =  Math.round(((indexNum - mistakeNum)/5) / Math.max(1, timeElapsed)*60);
         console.log(wpmVal);
         
          wpm.innerText = wpmVal;
          
   } else {
    clearInterval(timer)
    input.disabled = true;
   }
}

function reset() {
    randomText();
    clearInterval(timer);
    timeLeftNum = maxTimeNum;
    time.innerText = timeLeftNum
    mistake.innerText = 0;
    wpm.innerText = 0;
    cpm.innerText = 0;
    mistakeNum = 0;
    indexNum = 0;
    isTyping = false;
    input.value = ""

}

let btn = document.querySelector("#btn")

btn.addEventListener("click",reset)

input.addEventListener("input",initTyping);

randomText();


