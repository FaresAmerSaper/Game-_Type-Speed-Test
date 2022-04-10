// Array Of Words
const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];

// Setting Levels
const lvls = {
    "Easy": 5,
    "Normal": 3,
    "Hard": 2
};

let defultLvls = 'Easy';
let defultSec = lvls[defultLvls];
//Catch Selectors
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

lvlNameSpan.innerHTML = defultLvls;
secondsSpan.innerHTML = defultSec;
timeLeftSpan.innerHTML = defultSec;
scoreTotal.innerHTML = words.length;

startButton.onclick = function () {
    this.remove();
    input.focus();
    genWords()
}
input.onpaste = () => {
    return false
}
function genWords() {
    // Get Random Word
    let randomWord = words[Math.floor(Math.random() * words.length)];
    // Get IndexOf This Word
    let wordindex = words.indexOf(randomWord);
    // remove the random word from array
    words.splice(wordindex, 1);
    // add the random word to doc
    theWord.innerHTML = randomWord;
    upcomingWords.innerHTML = '';
    // Generate Words
    for (let i = 0; i < words.length; i++) {
      // Create Div Element
        let div = document.createElement("div");
        let txt = document.createTextNode(words[i]);
        div.appendChild(txt);
        upcomingWords.appendChild(div);
    }
    startPlay()
}

function startPlay() {
    timeLeftSpan.innerHTML = defultSec;
    let start = setInterval(() => {
        timeLeftSpan.innerHTML--;
        if (timeLeftSpan.innerHTML === '0') {
            //
            clearInterval(start);
            //
            if (theWord.innerHTML.toLocaleLowerCase() === input.value.toLocaleLowerCase()) {
                //  
                input.value = ""
                //
                scoreGot.innerHTML++
                // 
                if (words.length > 0) {
                    genWords()
                } else {
                    let span = document.createElement("span");
                    span.className = 'good';
                    let spanText = document.createTextNode("Congratz");
                    span.appendChild(spanText);
                    finishMessage.appendChild(span);
                    // Remove Upcoming Words Box
                    upcomingWords.remove();
                  }
                } else {
                    let span = document.createElement("span");
                    span.className = 'bad';
                    let spanText = document.createTextNode("Game Over");
                    span.appendChild(spanText);
                    finishMessage.appendChild(span);
                  }
        }
    }, 1000)
}