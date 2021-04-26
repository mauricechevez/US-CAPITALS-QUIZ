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

// Get full value of state (state and capital) then ask the question
function pickState(){
    // Pick random numbers to use in random state choice
    let randomNum1 = randomNumberGenerator()
    let randomNum2 = randomNumberGenerator()
    let randomNum3 = randomNumberGenerator()
    // Pick a state to ask about its capital, with 2 other states as the wrong answers.
    let questionState = states[randomNum1]
    let wrongAnswer1 = states[randomNum2]
    let wrongAnswer2 = states[randomNum3]

    // Add states to an array, to pick them at random
    let statesArray = [questionState,wrongAnswer1,wrongAnswer2];
    

    //Ask the question
    let currentQuestion = `What is the capital of ${questionState.state}?`
    let rightAnswer = questionState.capital

    // Present choices to the player at random from an array

    console.log(currentQuestion);
    console.log(wrongAnswer1.capital)
    console.log(wrongAnswer2.capital)
    console.log(rightAnswer);

    console.log(`${rightAnswer} is the capital of ${questionState.state}`)
}
pickState()