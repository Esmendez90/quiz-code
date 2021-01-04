var startButton = document.getElementById('start-btn');
var welcomeIntro = document.getElementById('welcome');
var container_boxElement = document.getElementById('container-box');
var nextButton = document.getElementById('next-btn');
var questionElement = document.getElementById('questions');
var optionElement = document.querySelectorAll('#option');

startButton.addEventListener('click', startQuiz);

var arrOfQuestions = [
    {
        question:"What is 2 plus 2?",
    },
    {
        question:"What is 30 into 10?",
       
    },
]

var arrOfAnswers = ['2','3','4','5'];
//...this function will execute when I click on the Start button...
function startQuiz(){
    startButton.classList.add('hide');
    welcomeIntro.classList.add('hide');
    container_boxElement.classList.remove('hide');
    nextButton.classList.remove('hide');
    nextQuestion()
   
}

//...when I select an answer I will click on the next button 
//...this function will execute when clickin on the next button...
function nextQuestion(){
    questionElement.innerText = arrOfQuestions[0].question
    for (var i = 0; i < arrOfAnswers.length; i++){
        console.log(optionElement[i]);
        console.log(arrOfAnswers[i]);
        optionElement[i].innerText = arrOfAnswers[i];
    }
    
}   
//...this will execute when I choose an answer...
function selectAnswer(){

}

