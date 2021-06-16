# United States Capitals Quiz

Test your knowledge of the 50 U.S State Capitals.

# HOW TO PLAY
Player starts the quiz by clicking the start button. Player has 10 seconds to correctly guess each state capital. Player needs at least **51% or higher** to recieve a passing score. There are 50 questions. 

## Start Screens and Gameplay
![Start Screen](/img/Start-Screen.png) 
![Gameplay Screenshot](/img/Gameplay_Screenshot.png)

## Play Online at the Github Page
Please visit the **[United States Capitals Quiz](https://mauricechevez.github.io/US-CAPITALS-QUIZ/)** page to play on your browser.


## Score scale
| Score      | Description |
| ----------- | ----------- |
|50% or less      |  Fail        |
|51% to 59%       | 1 Eagle      |
|60% to 69%       | 2 Eagles     |
|70% to 79%       | 3 Eagles     |
|80% to 89%       | 4 Eagles     |
|90% to 100%      | 5 Eagles     |

### Eagle Pictures
| Pass | Fail |
| ----------- | ----------- |
|![Pass Eagle](/img/eagle-sm_md.png)|![Fail Eagle](/img/Mighty_Eagle_sm.png)| 

### Passing and Failing screenshots
 ![Pass Screenshot](/img/Pass_Screenshot.png) ![Fail Screenshot](/img/Fail_Screenshot.png)| 

## Start Up Screen:
Player will click the "Start the Quiz" button to begin.



# HOW TO INSTALL LOCALLY
If you prefer not to play online, please follow the instructions below
1. *`Fork`* and *`Clone`* this respository to your local machine
2. Open `index.html` in your browser to play or 
3. Open the directory in your text editor of choice to view or edit the code

# HOW IT WORKS

## Questions, Choices and Answers
Each state, with choices of right and wrong answers, is stored in its own object. These objects are stored in one array. Example of a state object below:
```javascript
{   question: 'What is the capital of California?', 
    capital1:'Trenton',
    capital2:'Santa Fe',
    capital3:'Sacramento',
    answer:'Sacramento' }
```
## Shuffling the Questions
There are 2 arrays which contain the questions for the player. One has the list of questions in alphabetical order. The other has a copy of that array which is shuffled, so the order presented to the player is never the same. Below is the code used to shuffle the items in the array:
```javascript
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
```


## Score Tracking
Each time a player clicks a selection, an event listner is set to grab the textContent of the element (in this case, a DIV) and passes that value to a paramter. The function then uses **IF** statements to check whether the textContent matches what the answer is. This same function also checks if it has reached the last object in the array of questions, then presents the player with their score.
### Event Listeners
Each button value (the **textContent**) is passed to the CheckAnswer function.
```javascript
qAnswer1.addEventListener('click', () =>{
    console.log('Answer1 clicked')
    let answerValue = qAnswer1.textContent
    console.log(answerValue)
    checkAnswer(answerValue)
})
```
### CheckAnswer function
```javascript
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
        console.log('Quiz over!')
        gameOverScreen()
        clearInterval(timer)
    }      
}
```


## Timer
Each question is has a 10 second time limit. Once reached, the next question is rendered. Questions that reach this limit are not marked, and therefore considered wrong.
At the last question, if the timer's limit has been reached, the quiz ends and shows the score. It uses the shuffled questions array's   **finalQuestionIndex** variable, it will stop the game and the player will be shown their score.
```javascript
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
            console.log('Quiz Over - Times up.')
            gameOverScreen()
            clearInterval(timer)
        }
    }
}
```

## Score Calculation
Each score range is broken down into different **IF** statements. Each range adds eagle emojis and writes it to the page.
```javascript
 /* ------ LAST SCREEN ------ */
 function gameOverScreen(){
    gameOverDiv.style.display = "block";
    const scorePercent = Math.round(100 * score/shuffledQuestions.length)
    /* gameOverDiv.innerHTML = `Quiz Complete`
    gameOverDiv.innerHTML += `<br \>` */
    console.log(scorePercent)
    if (scorePercent <= 50){ 
        gameOverDiv.innerHTML += `<img src=./img/Mighty_Eagle_sm.png id='mighty-eagle'>` //Mighty Eagle from Angry Birds
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
```

# FUTURE CONSIDERATIONS
* Add Reset Button.
* Add a count down instead of count up.
* Add a Progress Bar.
* Add a current score to screen
* Fix media queries to make game mobile compatible.

# Change Log
- [X] (6/15/2021) Added difficulty selection screen. Player can now choose Easy, Medium, or Hard modes, displaying 10, 25, or 50 questions, respectively.
