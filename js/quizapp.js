// List of questions
const stateQuestions = [
    {question: 'What is the capital of Alabama?', 
    capital1:'Boise',
    capital2:'Dover',
    capital3:'Montgomery',
    answer:'Montgomery'
    },
    {question: 'What is the capital of Alaska?', capital1:'Montpelier', capital2:'Carson City', capital3:'Juneau', answer:'Juneau'},
    {question: 'What is the capital of Arizona?', capital1:'Boise', capital2:'Phoenix', capital3:'Jefferson City', answer:'Phoenix'},
    {question: 'What is the capital of Arkansas?', capital1:'Little Rock', capital2:'Springfield', capital3:'Jefferson City', answer:'Hartford', answer:'Little Rock'},
    {question: 'What is the capital of California?', capital1:'Trenton', capital2:'Santa Fe',capital3:'Sacramento',answer:'Sacramento',},
    {question: 'What is the capital of Colorado?', capital1:'Lincoln', capital2:'Denver',capital3:'Augusta', answer:'Denver'},
    /*{question: 'What is the capital of Connecticut?', capital:'Hartford'},
    {question: 'What is the capital of Delaware?', capital:'Dover'},
    {question: 'What is the capital of Florida?', capital:'Tallahassee'},
    {question: 'What is the capital of Georgia?', capital:'Atlanta'},
    {question: 'What is the capital of Hawaii?', capital:'Honolulu'},
    {question: 'What is the capital of Idaho?', capital:'Boise'},
    {question: 'What is the capital of Illinois?', capital:'Springfield'},
    {question: 'What is the capital of Indiana?', capital:'Indianapolis'},
    {question: 'What is the capital of Iowa?', capital:'Des Moines'},
    {question: 'What is the capital of Kansas?', capital:'Topeka'},
    {question: 'What is the capital of Louisiana?', capital:'Baton Rouge'},
    {question: 'What is the capital of Maine?', capital:'Augusta'},
    {question: 'What is the capital of Maryland?', capital:'Annapolis'},
    {question: 'What is the capital of Massachusetts?', capital:'Boston'},
    {question: 'What is the capital of Michigan?', capital:'Lansing'},
    {question: 'What is the capital of Minnesota?', capital:'Saint Paul'},
    {question: 'What is the capital of Mississippi?', capital:'Jackson'},
    {question: 'What is the capital of Missouri?', capital:'Jefferson City'},
    {question: 'What is the capital of Montana?', capital:'Helena'},
    {question: 'What is the capital of Nebraska?', capital:'Lincoln'},
    {question: 'What is the capital of Nevada?', capital:'Carson City'},
    {question: 'What is the capital of New Hampshire?', capital:'Concord'},
    {question: 'What is the capital of Nebraska?', capital:'Lincoln'},
    {question: 'What is the capital of New Jersey?', capital:'Trenton'},
    {question: 'What is the capital of New Mexico?', capital:'Santa Fe'},
    {question: 'What is the capital of New York?', capital:'Albany'},
    {question: 'What is the capital of North Carolina?', capital:'Raleigh'},
    {question: 'What is the capital of Nebraska?', capital:'Lincoln'},
    {question: 'What is the capital of Ohio?', capital:'Columbus'},
    {question: 'What is the capital of Oklahoma?', capital:'Oklahoma City'},
    {question: 'What is the capital of Oregon?', capital:'Salem'},
    {question: 'What is the capital of Pennsylvania?', capital:'Harrisburg'},
    {question: 'What is the capital of Rhode Island?', capital:'Providence'},
    {question: 'What is the capital of South Carolina?', capital:'Columbia'},
    {question: 'What is the capital of South Dakota', capital:'Pierre'},
    {question: 'What is the capital of Tennessee?', capital:'Nashville'},
    {question: 'What is the capital of Texas?', capital:'Austin'},
    {question: 'What is the capital of Utah?', capital:'Salt Lake City'},
    {question: 'What is the capital of Vermont?', capital:'Montpelier'},
    {question: 'What is the capital of Virginia', capital:'Richmond'},
    {question: 'What is the capital of Washington?', capital:'Olympia'},
    {question: 'What is the capital of West Virgina?', capital:'Charleston'},
    {question: 'What is the capital of Wisconsin?', capital:'Madison'},
    {question: 'What is the capital of Wyoming?', capital:'Cheyenne'}, */
]
// Last index of questions to know where to end.
let finalQuestionIndex = stateQuestions.length - 1

// track current question
let currentQuestionIndex = 0;

// Required DOM elements for changing/rendering
let qContainer = document.querySelector('#quiz-container')
let qDiv = document.querySelector('#questions-div')
let qAnswer1 = document.querySelector('#answer1')
let qAnswer2 = document.querySelector('#answer2')
let qAnswer3 = document.querySelector('#answer3')
let scoreDiv = document.querySelector('#score')
let qProgress = document.querySelector('#progress')
let start = document.querySelector('#start-button')
let timerDiv = document.querySelector('#timer-div')
let gameOverDiv = document.querySelector('#game-over')

// Required Variables
let timer;
let score = 0; // Items correct
let qTimeCounter = 10; // Seconds for each question
let count = 0 // place holder for each second that passes
let questionNumber = 1


// helper function to create elements
/* function makeElement(elem,text){
    const newElement = document.createElement(elem)
    newElement.textContent = text;
    return newElement;
}  */

// Question logic and writing to screen
function renderQuestion(){
   /* 
    start.className = 'hidden' */
    let q = stateQuestions[currentQuestionIndex]
    qDiv.innerHTML = `<p>${q.question}</p>`;
    qAnswer1.innerHTML = `<p>${q.capital1}</p>`
    qAnswer2.innerHTML = `<p>${q.capital2}</p>`
    qAnswer3.innerHTML = `<p>${q.capital3}</p>`
    showProgress()
}

//Start Quiz function
function startQuiz(){
    start.className = 'hidden'
    // Call on the function Render Question to display on screen
    renderQuestion();
    // Make questions visible
    qContainer.className ='unhidden'
    // Display the timer
    showTimer()
    timer = setInterval(showTimer,1000); // run function every second
}
// Check answer and track the score
function checkAnswer(clickedAnswer){
    if (clickedAnswer == stateQuestions[currentQuestionIndex].answer){
        console.log('Correct!')
        score++
        questionNumber++
    } else {
        console.log('Incorrect')
    } 
    count = 0
    if (currentQuestionIndex < finalQuestionIndex){
        currentQuestionIndex++
        renderQuestion()
    } else{
        console.log('Quiz over! Do something else')
        gameOverScreen()
        clearInterval(timer)
    }
        
}
// Countdown timer for player to choose an answer. At limit, next question will appear
function showTimer(){
    if (count <= qTimeCounter){
        timerDiv.textContent = count
        count++
        changeTimerColor()   // Changes the color of font the closer it gets to 10.
        } else {
        count = 0
        questionNumber++
        console.log('Took too long, next question')
        if (currentQuestionIndex < finalQuestionIndex){
            // go to next question
            currentQuestionIndex++
            renderQuestion()
        } else {
            // Reached the end of the questions
            console.log('Quiz Over - Times up. Do something else')
            gameOverScreen()
            clearInterval(timer)
        }
    }
}

function changeTimerColor(){
    if (count > 6){
        timerDiv.style.color = 'red'
    } else {
        timerDiv.style.color = 'black'
    }
}


// How many questions left
 function showProgress(){
    qProgress.textContent = 'Question ' + questionNumber + ' of ' + stateQuestions.length
 }


 /* ------ LAST SCREEN ------ */
 function gameOverScreen(){
    gameOverDiv.style.display = "block";
    const scorePercent = Math.round(100 * score/stateQuestions.length)
    /* gameOverDiv.innerHTML = `Quiz Complete`
    gameOverDiv.innerHTML += `<br \>` */
    console.log(scorePercent)
    if (scorePercent < 50){
        console.log("Less than 50%")
        gameOverDiv.innerHTML += `<p> ${scorePercent}% Correct</p>`
    } else if (scorePercent >=50 && scorePercent < 60){
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png>`
        gameOverDiv.innerHTML += `<p> ${scorePercent}% Correct</p>`
    } else if (scorePercent >=60 && scorePercent < 70){
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png>`
        gameOverDiv.innerHTML += `<p> ${scorePercent}% Correct</p>`
    } else if (scorePercent >=70 && scorePercent < 80){
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png>`
        gameOverDiv.innerHTML += `<p> ${scorePercent}% Correct</p>`
    } else if (scorePercent >= 80 && scorePercent < 90){
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png>`
        gameOverDiv.innerHTML += `<p> ${scorePercent}% Correct</p>`
    } else if (scorePercent >=90){
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png>`
        gameOverDiv.innerHTML += `<p> ${scorePercent}% Correct</p>`
    } else{
        console.log('Something is broken....')
    }
    
    }

    

 

/*  ------ Start of Event Listeners section ------ */
start.addEventListener('click',() =>{
    startQuiz();
})

// Event Listeners for all choice buttons
qAnswer1.addEventListener('click', () =>{
    console.log('Answer1 clicked')
    let answerValue = qAnswer1.textContent
    console.log(answerValue)
    checkAnswer(answerValue)
})

qAnswer2.addEventListener('click', () =>{
    console.log('Answer2 clicked')
    let answerValue = qAnswer2.textContent
    console.log(answerValue)
    checkAnswer(answerValue)
})
qAnswer3.addEventListener('click', () =>{
   console.log('Answer3 clicked')
   let answerValue = qAnswer3.textContent
   console.log(answerValue)
   checkAnswer(answerValue)
})
/*  ------ End of Event Listeners section ------ */