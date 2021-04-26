// console.log('Hello')
const states = [
    {state: 'Alabama', capital:'Montomery'},
    {state: 'Alaska', capital:'Juneau'},
    {state: 'Arizona', capital:'Phoenix'},
    {state: 'Arkansas', capital:'Little Rock'},
    {state: 'California', capital:'Sacramento'},
    {state: 'Colorado', capital:'Denver'},
    {state: 'Connecticut', capital:'Hartford'},
    {state: 'Delaware', capital:'Dover'},
    {state: 'Florida', capital:'Tallahassee'},
    {state: 'Georgia', capital:'Atlanta'},
    {state: 'Hawaii', capital:'Honolulu'},
    {state: 'Idaho', capital:'Boise'},
    {state: 'Illinois', capital:'Springfield'},
    {state: 'Indiana', capital:'Indianapolis'},
    {state: 'Iowa', capital:'Des Moines'},
    {state: 'Kansas', capital:'Topeka'},
    {state: 'Louisiana', capital:'Baton Rouge'},
    {state: 'Maine', capital:'Augusta'},
    {state: 'Maryland', capital:'Annapolis'},
    {state: 'Massachusetts', capital:'Boston'},
    {state: 'Michigan', capital:'Lansing'},
    {state: 'Minnesota', capital:'Saint Paul'},
    {state: 'Mississippi', capital:'Jackson'},
    {state: 'Missouri', capital:'Jefferson City'},
    {state: 'Montana', capital:'Helena'},
    {state: 'Nebraska', capital:'Lincoln'},
    {state: 'Nevada', capital:'Carson City'},
    {state: 'New Hampshire', capital:'Concord'},
    {state: 'Nebraska', capital:'Lincoln'},
    {state: 'New Jersey', capital:'Trenton'},
    {state: 'New Mexico', capital:'Santa Fe'},
    {state: 'New York', capital:'Albany'},
    {state: 'North Carolina', capital:'Raleigh'},
    {state: 'Nebraska', capital:'Lincoln'},
    {state: 'Ohio', capital:'Columbus'},
    {state: 'Oklahoma', capital:'Oklahoma City'},
    {state: 'Oregon', capital:'Salem'},
    {state: 'Pennsylvania', capital:'Harrisburg'},
    {state: 'Rhode Island', capital:'Providence'},
    {state: 'South Carolina', capital:'Columbia'},
    {state: 'South Dakota', capital:'Pierre'},
    {state: 'Tennessee', capital:'Nashville'},
    {state: 'Texas', capital:'Austin'},
    {state: 'Utah', capital:'Salt Lake City'},
    {state: 'Vermont', capital:'Montpelier'},
    {state: 'Virginia', capital:'Richmond'},
    {state: 'Washington', capital:'Olympia'},
    {state: 'West Virgina', capital:'Charleston'},
    {state: 'Wisconsin', capital:'Madison'},
    {state: 'Wyoming', capital:'Cheyenne'},
]
function randomNumberGenerator(){
    num = Math.floor(Math.random() * 50)
    return num
}
// Shuffle array
 const shuffle = function(array) {
	var currentIndex = array.length;
	var temporaryValue, randomIndex;
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
// Create Elements on screen
 function makeElement(elem,text){
    const newElement = document.createElement(elem)
    newElement.textContent = text;
    return newElement;
} 
// Grab required DOM contents
const questionDiv = document.querySelector('#questions');
const answerDiv1 = document.querySelector('#answer1');
const answerDiv2 = document.querySelector('#answer2');
const answerDiv3 = document.querySelector('#answer3');


// Get full value of state (state and capital) then ask the question
function pickState(){
    // Pick random numbers to use in random state choice    
    let randomNum1 = randomNumberGenerator()
    let randomNum2 = randomNumberGenerator()
    let randomNum3 = randomNumberGenerator()
    // Pick a state to ask about its capital, with 2 other states as the wrong answers.
    let rightAnswer = states[randomNum1]
    let wrongAnswer1 = states[randomNum2]
    let wrongAnswer2 = states[randomNum3]

    // Add the random states to an array, to be displayed at random below
    let statesArray = [rightAnswer,wrongAnswer1,wrongAnswer2];
    let shuffledStates = shuffle(statesArray)
    
    // Present question and choices to the player
    const currentQuestion = `What is the capital of ${rightAnswer.state}?`
    const rightAnswerCapital = rightAnswer.capital

    // Create Elements, attach to page
    const askedQuestion = makeElement('p',currentQuestion)
    questionDiv.append(askedQuestion)

    const answer1 = makeElement('p',shuffledStates[0].capital)
    answerDiv1.append(answer1)
    const answer2 = makeElement('p',shuffledStates[1].capital)
    answerDiv2.append(answer2)
    const answer3 = makeElement('p',shuffledStates[2].capital)
    answerDiv3.append(answer3)

 
    // questionDiv.append(question)
    
/*   console.log(currentQuestion);
    console.log(shuffledStates[0].capital)
    console.log(shuffledStates[1].capital)
    console.log(shuffledStates[2].capital)
    
    console.log(`${rightAnswerCapital} is the capital of ${rightAnswer.state}`) */
}
pickState()