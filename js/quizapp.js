// List of questions
const stateQuestions = [
    {question: 'What is the capital of Alabama?', capital1:'Boise', capital2:'Dover', capital3:'Montgomery', answer:'Montgomery'},
    {question: 'What is the capital of Alaska?', capital1:'Montpelier', capital2:'Carson City', capital3:'Juneau', answer:'Juneau'},
    {question: 'What is the capital of Arizona?', capital1:'Boise', capital2:'Phoenix', capital3:'Jefferson City', answer:'Phoenix'},
    {question: 'What is the capital of Arkansas?', capital1:'Little Rock', capital2:'Bismarck', capital3:'Jefferson City', answer:'Little Rock'},
    {question: 'What is the capital of California?', capital1:'Trenton', capital2:'Santa Fe',capital3:'Sacramento',answer:'Sacramento',},
    {question: 'What is the capital of Colorado?', capital1:'Lincoln', capital2:'Denver',capital3:'Augusta', answer:'Denver'},
    {question: 'What is the capital of Connecticut?', capital1:'Salem', capital2:'Harrisburg',capital3:'Hartford', answer:'Hartford'},
    {question: 'What is the capital of Delaware?', capital1:'Dover', capital2:'Helena',capital3:'Providence', answer:'Dover'},
    {question: 'What is the capital of Florida?', capital1:'Concord', capital2:'Saint Paul',capital3:'Tallahassee', answer:'Tallahassee'},
    {question: 'What is the capital of Georgia?', capital1:'Atlanta', capital2:'Honolulu',capital3:'Des Moines', answer:'Atlanta'},
    {question: 'What is the capital of Hawaii?', capital1:'Annapolis', capital2:'Honolulu', capital3:'Cheyenne', answer:'Honolulu'},
    {question: 'What is the capital of Idaho?', capital1:'Pierre', capital2:'Nashville', capital3:'Boise', answer:'Boise'},
    {question: 'What is the capital of Illinois?', capital1:'Springfield', capital2:'Columbus', capital3:'Madison', answer:'Springfield'},
    {question: 'What is the capital of Indiana?', capital1:'Salt Lake City', capital2:'Providence',capital3:'Indianapolis', answer:'Indianapolis'},
    {question: 'What is the capital of Iowa?', capital1:'Topeka', capital2:'Des Moines',capital3:'Richmond', answer:'Des Moines'},
    {question: 'What is the capital of Kansas?', capital1:'Topeka', capital2:'Helena',capital3:'Columbia', answer:'Topeka'},
    {question: 'What is the capital of Kentucky?', capital1:'Frankfort', capital2:'Boston',capital3:'Phoenix', answer:'Frankfort'},
    {question: 'What is the capital of Louisiana?', capital1:'Pierre', capital2:'Montpelier',capital3:'Baton Rouge',answer:'Baton Rouge'},
    {question: 'What is the capital of Maine?', capital1:'Augusta', capital2:'Raleigh',capital3:'Charleston', answer:'Augusta'},
    {question: 'What is the capital of Maryland?',capital1:'Jefferson City', capital2:'Harrisburg', capital3:'Annapolis', answer:'Annapolis'},
    {question: 'What is the capital of Massachusetts?',capital1:'Saint Paul', capital2:'Boston',capital3:'Nashville',answer:'Boston'},
    {question: 'What is the capital of Michigan?', capital1:'Denver', capital2:'Pierre', capital3:'Lansing', answer:'Lansing'},
    {question: 'What is the capital of Minnesota?', capital1:'Saint Paul', capital2:'Tallahassee',capital3:'Salt Lake City', answer:'Saint Paul'},
    {question: 'What is the capital of Mississippi?', capital1:'Jackson', capital2:'Albany', capital3:'Salem', answer:'Jackson'},
    {question: 'What is the capital of Missouri?',capital1:'Jackson', capital2:'Little Rock', capital3:'Jefferson City', answer:'Jefferson City'},
    {question: 'What is the capital of Montana?', capital1:'Carson City', capital2:'Helena', capital3:'Raleigh', answer:'Helena'},
    {question: 'What is the capital of Nebraska?', capital1:'Montpelier', capital2:'Columbia', capital3:'Lincoln', answer:'Lincoln'},
    {question: 'What is the capital of Nevada?', capital1:'Madison', capital2:'Lincoln', capital3:'Carson City', answer:'Carson City'},
    {question: 'What is the capital of New Hampshire?', capital1:'Richmond', capital2:'Concord', capital3:'Providence', answer:'Concord'},
    {question: 'What is the capital of New Jersey?', capital1:'Trenton', capital2:'Albany', capital3:'Salem', answer:'Trenton'},
    {question: 'What is the capital of New Mexico?', capital1:'Columbus', capital2:'Columbia', capital3:'Santa Fe', answer:'Santa Fe'},
    {question: 'What is the capital of New York?', capital1:'Richmond', capital2:'Salem', capital3:'Albany', answer:'Albany'},
    {question: 'What is the capital of North Carolina?', capital1:'Raleigh', capital2:'Hartford', capital3:'Nashville', answer:'Raleigh'},
    {question: 'What is the capital of North Dakota?', capital1:'Bismarck', capital2:'Montgomery', capital3:'Frankfort', answer:'Bismarck'},
    {question: 'What is the capital of Ohio?', capital1:'Olympia', capital2:'Columbia', capital3:'Columbus', answer:'Columbus'},
    {question: 'What is the capital of Oklahoma?', capital1:'Jefferson City', capital2:'Carson City', capital3:'Oklahoma City',  answer:'Oklahoma City'},
    {question: 'What is the capital of Oregon?', capital1:'Salem', capital2:'Charleston', capital3:'Madison', answer:'Salem'},
    {question: 'What is the capital of Pennsylvania?', capital1:'Des Moines', capital2:'Atlanta', capital3:'Harrisburg', answer:'Harrisburg'},
    {question: 'What is the capital of Rhode Island?', capital1:'Honolulu', capital2:'Providence', capital3:'Denver', answer:'Providence'},
    {question: 'What is the capital of South Carolina?', capital1:'Tallahassee', capital2:'Saint Paul', capital3:'Columbia', answer:'Columbia'},
    {question: 'What is the capital of South Dakota', capital1:'Lincoln', capital2:'Topeka', capital3:'Pierre', answer:'Pierre'},
    {question: 'What is the capital of Tennessee?', capital1:'Nashville', capital2:'Boise', capital3:'Juneau', answer:'Nashville'},
    {question: 'What is the capital of Texas?', capital1:'Sacramento', capital2:'Austin', capital3:'Santa Fe', answer:'Austin'},
    {question: 'What is the capital of Utah?', capital1:'Salt Lake City', capital2:'Cheyenne', capital3:'Augusta', answer:'Salt Lake City'},
    {question: 'What is the capital of Vermont?', capital1:'Baton Rouge', capital2:'Springfield', capital3:'Montpelier', answer:'Montpelier'},
    {question: 'What is the capital of Virginia', capital1:'Richmond', capital2:'Hartford', capital3:'Montpelier', answer:'Richmond'},
    {question: 'What is the capital of Washington?', capital1:'Jackson', capital2:'Olympia', capital3:'Carson City', answer:'Olympia'},
    {question: 'What is the capital of West Virgina?', capital1:'Madison', capital2:'Charleston', capital3:'Annapolis', answer:'Charleston'},
    {question: 'What is the capital of Wisconsin?', capital1:'Baton Rouge', capital2:'Trenton', capital3:'Madison', answer:'Madison'},
    {question: 'What is the capital of Wyoming?', capital1:'Indianapolis', capital2:'Cheyenne', capital3:'Austin', answer:'Cheyenne'}, 
]
// Shuffle the stateQuestions
// let shuffledQuestions = shuffle(stateQuestions)
let shuffledQuestions = shuffle(stateQuestions)

// Last index of questions to know where to end.
let finalQuestionIndex = shuffledQuestions.length - 1

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
let knowledgeCheck = document.querySelector('#knowledge-check')
let statusContainer = document.querySelector('#status-container')
let americanFlag = document.querySelector('title-container__img--left')


/* Difficulty screen variables */
const difficultyScreen = document.getElementById('choose-difficulty')
const easyMode = document.getElementById('easy')
const mediumMode = document.getElementById('medium')
const hardMode = document.getElementById('hard')

// Required Variables

let timer;
let score = 0; // Items correct
let incorrectQuestions = 0
let qTimeCounter = 10; // Seconds for each question
let count = 0 // place holder for each second that passes
let questionNumber = 1

/* **** FUNCTIONS SECTION ******/

function chooseDifficultyScreen(){
    start.className = 'hidden'
    difficultyScreen.style.display = 'flex'
    knowledgeCheck.innerHTML = 'Choose a difficulty level'
}

function easyModeQuestions(questions){
    const result = questions.slice(0,10)
    return result
}
function mediumModeQuestions(questions){
    const result = questions.slice(0,25)
    return result
}

function hardModeQuestions(questions){
    const result = questions
    return result
}

function renderQuestion(){
   let q = shuffledQuestions[currentQuestionIndex]
    qDiv.innerHTML = `<p class="question-line">${q.question}</p>`;
    qAnswer1.innerHTML = `<p>${q.capital1}</p>`
    qAnswer2.innerHTML = `<p>${q.capital2}</p>`
    qAnswer3.innerHTML = `<p>${q.capital3}</p>`
    showProgress()
}

function changeStatus(){
  statusContainer.innerHTML = `<p><span class="blue-text">${score} </span>Correct | <span class="red-text">${incorrectQuestions ? incorrectQuestions : 0} Incorrect</span></p>`
}

//Start Quiz function
function startQuiz(){
    difficultyScreen.style.display = 'none'
    // document.querySelector('h3').style.display = 'none'
    knowledgeCheck.style.display = 'none'
    renderQuestion(); // Call on the function Render Question to display on screen
    qContainer.className ='unhidden' // Make questions visible
    changeStatus()
    showTimer()
    timer = setInterval(showTimer,1000); // run function every second
}
// Check answer and track the score
function checkAnswer(clickedAnswer){
    if (clickedAnswer == shuffledQuestions[currentQuestionIndex].answer){
        console.log('Correct!')
        score++
        questionNumber++
        changeStatus()
    } else {
        console.log('Incorrect')
        incorrectQuestions++
        changeStatus()
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
        timerDiv.textContent = `${count} of 10 seconds to choose`
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
    qProgress.textContent = 'Question ' + questionNumber + ' of ' + shuffledQuestions.length
 }



/* REFRESH PAGE */
function refreshPage(){
    location.reload();
}

 /* ------ LAST SCREEN ------ */
 function gameOverScreen(){
    gameOverDiv.style.display = "block";
    const scorePercent = Math.round(100 * score/shuffledQuestions.length)
    console.log(scorePercent)
    if (scorePercent <= 50){
        gameOverDiv.innerHTML += `<img src=./img/Mighty_Eagle_sm.png id='mighty-eagle'>`
        gameOverDiv.innerHTML += `<p> ${scorePercent}% Correct</p>`
        gameOverDiv.innerHTML += `<p class='refresh-page' onclick='refreshPage()'>Click here to retake quiz</p>`
        qContainer.className = 'hidden';
    } else if (scorePercent >=51 && scorePercent < 60){
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png id='eagle'>`
        gameOverDiv.innerHTML += `<p> ${scorePercent}% Correct</p>`
        gameOverDiv.innerHTML += `<p class='refresh-page' onclick='refreshPage()'>Click here to retake quiz</p>`
        qContainer.className = 'hidden';
    } else if (scorePercent >=60 && scorePercent < 70){
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<p> ${scorePercent}% Correct</p>`
        gameOverDiv.innerHTML += `<p class='refresh-page' onclick='refreshPage()'>Click here to retake quiz</p>`
        qContainer.className = 'hidden';
    } else if (scorePercent >=70 && scorePercent < 80){
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<p> ${scorePercent}% Correct</p>`
        gameOverDiv.innerHTML += `<p class='refresh-page' onclick='refreshPage()'>Click here to retake quiz</p>`
        qContainer.className = 'hidden';
    } else if (scorePercent >= 80 && scorePercent < 90){
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<p> ${scorePercent}% Correct</p>`
        gameOverDiv.innerHTML += `<p class='refresh-page' onclick='refreshPage()'>Click here to retake quiz</p>`
        qContainer.className = 'hidden';
    } else if (scorePercent >=90){
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<p> ${scorePercent}% Correct</p>`
        gameOverDiv.innerHTML += `<p class='refresh-page' onclick='refreshPage()'>Click here to retake quiz</p>`
        qContainer.className = 'hidden';
    } else{
        console.log('Something is broken....')
    }
    
    }

/* -------- Fisher-Yates shuffle -------- */
/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
 function shuffle(array) {
	let currentIndex = array.length;
	let temporaryValue, randomIndex;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
};

/*  ------ Start of Event Listeners section ------ */
start.addEventListener('click',() =>{
    // startQuiz();
    chooseDifficultyScreen()
})
easyMode.addEventListener('click',()=>{
    slicedQuestions = easyModeQuestions(shuffledQuestions)
    shuffledQuestions = slicedQuestions
    finalQuestionIndex = shuffledQuestions.length - 1
    startQuiz()
})
mediumMode.addEventListener('click', ()=>{
    slicedQuestions = mediumModeQuestions(shuffledQuestions)
    shuffledQuestions = slicedQuestions
    finalQuestionIndex = shuffledQuestions.length - 1
    startQuiz()
})
hardMode.addEventListener('click', ()=>{
    startQuiz()
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