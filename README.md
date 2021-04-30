# United States Capitals Quiz

Test your knowledge of the 50 U.S State Capitals.

# HOW TO PLAY
Player starts the quiz by clicking the start button. Player has 10 seconds to correctly guess each state capital. Player needs at least 60% or higher to recieve a passing score. There are 50 questions. 

## Start Screens and Gameplay
![Start Screen](/img/Start-Screen.png) 
![Gameplay Screenshot](img/Gameplay_Screenshot.png)

## Visit the Github Page
Please visit the **[United States Capitals Quiz](https://mauricechevez.github.io/US-CAPITALS-QUIZ/)** page to play on your browser


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
{question: 'What is the capital of California?', capital1:'Trenton', capital2:'Santa Fe',capital3:'Sacramento',answer:'Sacramento',}
```

## Score Tracking
Each time a player clicks a selection, an event listner is set to grab the textContent of the element (in this case, a DIV) and passes that value to a paramter. The following function then uses **IF** statements to check whether the textContent matches what the answer is. This same function also checks if it has reached the last object in the array of questions, then presents the player with their score.
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
## Event Listeners
Each button value (the **textContent**) is passed up to the function above.
```javascript
qAnswer1.addEventListener('click', () =>{
    console.log('Answer1 clicked')
    let answerValue = qAnswer1.textContent
    console.log(answerValue)
    checkAnswer(answerValue)
})
```


## Timer
Each question is limited to 10 seconds. Once the limit has been reached, the next question is displayed, and the question is marked wrong. When the list of questions has reached its limit using the **finalQuestionIndex** variable, it will stop the game and the player will be shown their score.
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

# FUTURE CONSIDERATIONS
* Add Reset Button
* Add a count down instead of count up
* Add difficulty levels, which would consist of subsets of the 50 states. For example, player can choose easy (10 questions), medium (25 questions), or hard (50 questions).
* Add a Progress Bar
* Add a Score on Screen
