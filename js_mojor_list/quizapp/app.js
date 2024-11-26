let question = document.querySelector(".question");
let answer = document.querySelector(".answer");
let mark = document.querySelector("span")
let markResult = document.querySelector(".marks h3")
let btn1 = document.querySelector("#try")
let timer = document.querySelector("#timer")

let ques = [
        {
            question: "What is the capital of France?",
            answers: ["Paris", "London", "Rome", "Berlin"],
            correct: 0
        },
        {
            question: "Which language runs in a browser?",
            answers: ["Java", "C", "Python", "JavaScript"],
            correct: 3
        },
        {
            question: "What does CSS stand for?",
            answers: [
                "CentralStyleSheets",
                "CascadingStyleSheets",
                "CascadingSimpleSheets",
                "ComputationalStyleSheets"
            ],
            correct: 1
        },
        {
            question: "What is 2 + 2?",
            answers: ["3", "4", "22", "5"],
            correct: 1
        },
        {
            question: "Which company developed JavaScript?",
            answers: ["Microsoft", "Apple", "Netscape", "Google"],
            correct: 2
        },
        {
            question: "What is the largest planet in our solar system?",
            answers: ["Earth", "Mars", "Jupiter", "Saturn"],
            correct: 2
        },
        {
            question: "Which year was the first iPhone released?",
            answers: ["2005", "2007", "2008", "2010"],
            correct: 1
        },
        {
            question: "What is the chemical symbol for water?",
            answers: ["O2", "H2O", "CO2", "HO"],
            correct: 1
        },
        {
            question: "Who wrote 'Hamlet'?",
            answers: ["CharlesDickens", "WilliamShakespeare", "JaneAusten", "MarkTwain"],
            correct: 1
        },
        {
            question: "Which element has the chemical symbol 'Au'?",
            answers: ["Silver", "Oxygen", "Gold", "Iron"],
            correct: 2
        }
    ];

let currentIndex = 0;
let recordMarks = 0;
let time;
let maxTime = 10;
let timeleft = maxTime;
// let isTimer = false;


function randomQuestion(){

        question.innerText = "start"

        if (currentIndex < ques.length) {
             let randomtext = ques[currentIndex].question
             let randomAns = ques[currentIndex].answers
             let correct = ques[currentIndex].correct
            
             question.innerHTML = `<p>${randomtext}</p>`
             answer.innerHTML = `
                              <ul>
                              <li>
                                 <label for="one">
                                 <input type="radio" name="answer" id="one" value=${randomAns[0]} > 
                                 <p>${randomAns[0]}</p>
                                 </label>
                             </li>
                              <li>
                                  <label for="two">
                                 <input type="radio" name="answer" id="two" value=${randomAns[1]} >
                                 <p>${randomAns[1]}</p>
                                 </label>
                              </li>
                              <li>
                                 <label for="three">
                                 <input type="radio" name="answer" id="three" value=${randomAns[2]} >
                                 <p>${randomAns[2]}</p>
                                 </label>
                              </li>
                              <li>
                                 <label for="four">
                                 <input type="radio" name="answer" id="four" value=${randomAns[3]}> 
                                 <p>${randomAns[3]}</p>
                                 </label>
                              </li>
                              </ul>
                               `
 
     
            
             let input = document.querySelectorAll("input")
    
             input.forEach((val) => {
                val.addEventListener("click", (e) => {
                    //   console.log(e.target.value)
                    let right = randomAns[correct]


    
                      if (e.target.value === right) {
                        marks()
                      }else{
                        console.log("wrong");  
                      }   
                    
                      moveNext()
 
                })   
            })

                time = setInterval(timeRemain,1000)
          
           

        }else{
           endQuiz()
        }   

}

function marks() {
    recordMarks++
    mark.innerText = recordMarks
    
}


  
function timeRemain() {
    if(timeleft > 0){
     timeleft--
     timer.innerText = timeleft
   }else{
    clearInterval(time)
     moveNext();
    }
 }
 
 function moveNext(){
    clearInterval(time);
    timeleft = 11;
    currentIndex++;
    randomQuestion()
 
 }

 function endQuiz() {
    clearInterval(time);
    alert("game over bro!");
   markResult.style.display = "block"
    timeleft = 0
    timer.innerText = timeleft; // Stop showing the timer
    answer.innerHTML = ""; // Clear the options
    question.innerHTML = "<p>Quiz completed!</p>";
}

btn1.addEventListener("click", () => {
    currentIndex = 0;
    recordMarks = 0;
    markResult.style.display = "none";
    randomQuestion();
    let maxTime = 10;
    timeleft = maxTime;
    timer.innerText = timeleft;
    // btn2.disabled = true;
})



randomQuestion()