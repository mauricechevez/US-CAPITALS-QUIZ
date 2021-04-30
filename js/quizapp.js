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
    {question: 'What is the capital of Connecticut?', capital1:'Salem', capital2:'Harrisburg',capital3:'Hartford', answer:'Hartford'},
    {question: 'What is the capital of Delaware?', capital1:'Dover', capital2:'Helena',capital3:'Providence', answer:'Dover'},
    {question: 'What is the capital of Florida?', capital1:'Concord', capital2:'Saint Paul',capital3:'Tallahassee', answer:'Tallahassee'},
    {question: 'What is the capital of Georgia?', capital1:'Atlanta', capital2:'Honolulu',capital3:'Des Moines', answer:'Atlanta'},
     /*{question: 'What is the capital of Hawaii?', capital1:'Annapolis', capital2:'Honolulu', capital3:'Cheyenne', answer:'Honolulu'},
    {question: 'What is the capital of Idaho?', capital1:'Pierre', capital2:'Nashville', capital3:'Boise', answer:'Boise'},
    {question: 'What is the capital of Illinois?', capital1:'Springfield', capital2:'Columbus', capital3:'Madison', answer:'Springfield'},
    {question: 'What is the capital of Indiana?', capital1:'Salt Lake City', capital2:'Providence',capital3:'Indianapolis', answer:'Indianapolis'},
    {question: 'What is the capital of Iowa?', capital1:'Topeka', capital2:'Des Moines',capital3:'Richmond', answer:'Des Moines'},
    {question: 'What is the capital of Kansas?', capital1:'Topeka', capital2:'Helena',capital3:'Columbia', answer:'Topeka'},
    {question: 'What is the capital of Louisiana?', capital1:'Pierre', capital2:'Montpelier',capital3:'Baton Rouge',answer:'Baton Rouge'},
    {question: 'What is the capital of Maine?', capital:'Augusta'},
    {question: 'What is the capital of Maryland?', capital:'Annapolis'},
    {question: 'What is the capital of Massachusetts?', capital:'Boston'},
    {question: 'What is the capital of Michigan?', capital:'Lansing'},
    {question: 'What is the capital of Minnesota?', capital:'Saint Paul'},
    {question: 'What is the capital of Mississippi?', capital:'Jackson'},
    {question: 'What is the capital of Missouri?', capital:'Jefferson City'},
    {question: 'What is the capital of Montana?', capital:'Helena'},
    {question: 'What is the capital of Nevada?', capital:'Carson City'},
    {question: 'What is the capital of New Hampshire?', capital:'Concord'},
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
// Shuffle the stateQuestions
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

// Required Variables

let timer;
let score = 0; // Items correct
let qTimeCounter = 10; // Seconds for each question
let count = 0 // place holder for each second that passes
let questionNumber = 1

function renderQuestion(){
   /* 
    start.className = 'hidden' */
    let q = shuffledQuestions[currentQuestionIndex]
    qDiv.innerHTML = `<p>${q.question}</p>`;
    qAnswer1.innerHTML = `<p>${q.capital1}</p>`
    qAnswer2.innerHTML = `<p>${q.capital2}</p>`
    qAnswer3.innerHTML = `<p>${q.capital3}</p>`
    showProgress()
}

//Start Quiz function
function startQuiz(){
    start.className = 'hidden'
    renderQuestion(); // Call on the function Render Question to display on screen
    qContainer.className ='unhidden' // Make questions visible
    showTimer()
    timer = setInterval(showTimer,1000); // run function every second
}
// Check answer and track the score
function checkAnswer(clickedAnswer){
    if (clickedAnswer == shuffledQuestions[currentQuestionIndex].answer){
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


 /* ------ LAST SCREEN ------ */
 function gameOverScreen(){
    gameOverDiv.style.display = "block";
    const scorePercent = Math.round(100 * score/shuffledQuestions.length)
    /* gameOverDiv.innerHTML = `Quiz Complete`
    gameOverDiv.innerHTML += `<br \>` */
    console.log(scorePercent)
    if (scorePercent <= 50){
        gameOverDiv.innerHTML += `<img src=./img/Mighty_Eagle_sm.png id='mighty-eagle'>`
        gameOverDiv.innerHTML += `<p> ${scorePercent}% Correct</p>`
    } else if (scorePercent >=51 && scorePercent < 60){
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png id='eagle'>`
        gameOverDiv.innerHTML += `<p> ${scorePercent}% Correct</p>`
    } else if (scorePercent >=60 && scorePercent < 70){
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<p> ${scorePercent}% Correct</p>`
    } else if (scorePercent >=70 && scorePercent < 80){
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<p> ${scorePercent}% Correct</p>`
    } else if (scorePercent >= 80 && scorePercent < 90){
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<p> ${scorePercent}% Correct</p>`
    } else if (scorePercent >=90){
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<img src=./img/eagle-sm.png class='eagle'>`
        gameOverDiv.innerHTML += `<p> ${scorePercent}% Correct</p>`
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