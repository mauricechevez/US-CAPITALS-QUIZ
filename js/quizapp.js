// List of questions
const stateQuestions = [
    {question: 'What is the capital of Alabama?', 
    capital1:'Montgomery',
    capital2:'Dover',
    capital3:'Boise',
    answer:'Montgomery'
    },
    {question: 'What is the capital of Alaska?', capital1:'Montpelier', capital2:'Carson City', capital3:'Juneau', answer:'Juneau'},
    {question: 'Arizona', capital1:'Boise', capital2:'Phoenix', capital3:'Jefferson City', answer:'Phoenix'},
    {question: 'Arkansas', capital1:'Little Rock', capital2:'Springfield', capital3:'Jefferson City', answer:'Hartford', answer:'Little Rock'},
  /*   {question: 'California', capital:'Sacramento'},
    {question: 'Colorado', capital:'Denver'},
    {question: 'Connecticut', capital:'Hartford'},
    {question: 'Delaware', capital:'Dover'},
    {question: 'Florida', capital:'Tallahassee'},
    {question: 'Georgia', capital:'Atlanta'},
    {question: 'Hawaii', capital:'Honolulu'},
    {question: 'Idaho', capital:'Boise'},
    {question: 'Illinois', capital:'Springfield'},
    {question: 'Indiana', capital:'Indianapolis'},
    {question: 'Iowa', capital:'Des Moines'},
    {question: 'Kansas', capital:'Topeka'},
    {question: 'Louisiana', capital:'Baton Rouge'},
    {question: 'Maine', capital:'Augusta'},
    {question: 'Maryland', capital:'Annapolis'},
    {question: 'Massachusetts', capital:'Boston'},
    {question: 'Michigan', capital:'Lansing'},
    {question: 'Minnesota', capital:'Saint Paul'},
    {question: 'Mississippi', capital:'Jackson'},
    {question: 'Missouri', capital:'Jefferson City'},
    {question: 'Montana', capital:'Helena'},
    {question: 'Nebraska', capital:'Lincoln'},
    {question: 'Nevada', capital:'Carson City'},
    {question: 'New Hampshire', capital:'Concord'},
    {question: 'Nebraska', capital:'Lincoln'},
    {question: 'New Jersey', capital:'Trenton'},
    {question: 'New Mexico', capital:'Santa Fe'},
    {question: 'New York', capital:'Albany'},
    {question: 'North Carolina', capital:'Raleigh'},
    {question: 'Nebraska', capital:'Lincoln'},
    {question: 'Ohio', capital:'Columbus'},
    {question: 'Oklahoma', capital:'Oklahoma City'},
    {question: 'Oregon', capital:'Salem'},
    {question: 'Pennsylvania', capital:'Harrisburg'},
    {question: 'Rhode Island', capital:'Providence'},
    {question: 'South Carolina', capital:'Columbia'},
    {question: 'South Dakota', capital:'Pierre'},
    {question: 'Tennessee', capital:'Nashville'},
    {question: 'Texas', capital:'Austin'},
    {question: 'Utah', capital:'Salt Lake City'},
    {question: 'Vermont', capital:'Montpelier'},
    {question: 'Virginia', capital:'Richmond'},
    {question: 'Washington', capital:'Olympia'},
    {question: 'West Virgina', capital:'Charleston'},
    {question: 'Wisconsin', capital:'Madison'},
    {question: 'Wyoming', capital:'Cheyenne'}, */
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

// Required Variables
let timer;
let score = 0; // Items correct
let qTimeCounter = 10; // Seconds for each question
let count = 0 // place holder for each second that passes


// helper function to create elements
function makeElement(elem,text){
    const newElement = document.createElement(elem)
    newElement.textContent = text;
    return newElement;
} 

// Question logic and writing to screen
function renderQuestion(){
   /* 
    start.className = 'hidden' */
    let q = stateQuestions[currentQuestionIndex]
    let qText = makeElement('p',q.question)
    let aChoice1 = makeElement('p',q.capital1);
    let aChoice2 = makeElement('p',q.capital2);
    let aChoice3 = makeElement('p',q.capital3);
    qDiv.append(qText)
    qAnswer1.append(aChoice1)
    qAnswer2.append(aChoice2)
    qAnswer3.append(aChoice3)

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
    showProgress()
    timer = setInterval(showTimer,1000); // run function every second
}
// Track Score
function checkAnswer(clickedAnswer){
    if (clickedAnswer == stateQuestions[currentQuestionIndex].answer){
        console.log('Correct!')
        score++
    } else {
        console.log('Incorrect')
    }
}
// Countdown timer for player to choose an answer
function showTimer(){
    if (count <= qTimeCounter){
        timerDiv.textContent = count
        count++
    } else {
        count = 0
        if (currentQuestionIndex < finalQuestionIndex){
            // go to next question
            currentQuestionIndex++
            renderQuestion()
        } else {
            // Reached the end of the questions
            clearInterval(timer)
        }
    }
}


function showProgress(){
    
    for (let i = 0; i <=finalQuestionIndex; i++){
        for (let i = 0 ; i <= finalQuestionIndex; i++)
        qProgress.textContent = `${i} of ${finalQuestionIndex} questions`
    }
}


/*  ------ Start of Event Listeners section ------ */
start.addEventListener('click',() =>{
    startQuiz();
})

// Event Listeners for all buttons
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
   checkAnswer()
})
/*  ------ End of Event Listeners section ------ */