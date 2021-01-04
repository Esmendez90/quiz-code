var startButton = document.getElementById('start-btn');
var welcomeIntro = document.getElementById('welcome');
var container_boxElement = document.getElementById('container-box');
var nextButton = document.getElementById('next-btn');
var questionElement = document.getElementById('questions');
var optionElement = document.getElementById('option');

startButton.addEventListener('click', startQuiz);

var arrOfQuestions = [
    {
        question:"What is 2 plus 2?",
        answer:['2','4','67','5'],
        correct:'4'
    },
    {
        question:"What is 30 into 10?",
        answer:['3','4','7','53'],
        correct:'3'
    },
]
//...this function will execute when I click on the Start button...
function startQuiz(){
    welcomeIntro.classList.add('hide');
    startButton.classList.add('hide');
    container_boxElement.classList.remove('hide');
    nextButton.classList.remove('hide');
    nextQuestion()
   
}

//...when I select an answer I will click on the next button 
//...this function will execute when clickin on the next button...
function nextQuestion(){
    questionElement.innerText = arrOfQuestions[0].question
    optionElement.innerText = '';
    
}   
//...this will execute when I choose an answer...
function selectAnswer(){

}

