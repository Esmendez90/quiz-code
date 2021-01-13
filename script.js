// Grabbing elements from html page
var startButton = document.getElementsById("start-btn");
var timeEl = document.querySelector(".timer");
var correctAnswer = document.querySelector(".correctAnswer");
var wrongAnswer = document.querySelector(".wrongAnswer");
var container = document.querySelector(".container");

// Render last user container code
var lastUserContainer = document.querySelector("#lastUser-Container");
var userInfo = document.querySelector("#userInfo");
var initials = document.querySelector(".initials");
var score = document.querySelector(".score");
var lastUser = document.querySelector("#lastUser");
var saveDiv = document.querySelectord(".save-div");
var saveBtn = document.querySelector("#save");
var lastRegistered = document.querySelector(".lastRegistered");

// Variables
var seconds = 60;
var questionIndex = 0;
var correct = 0;
var wrong = 0;

startButton.addEventListener("click", startQuiz);

// WHEN I click the Start button, the startQuiz function will execute,
// The Start button will hide.
// The timer function will execute and the countdown timer will show on the page.
// The showNextQuestion function will also execute and a question with four choices
// will display on the page.
function startQuiz() {
  startButton.classList.add("hide");
  setTime();
  showNextQuestion();
}

// The timer will start decrementing from a set value of 60
// at a speed of 1 second (1000 ms.).
// When the seconds equals to zero the timer will stop.
// The timer, question, and four choices will hide.
// The renderLastUser function will execute.
var seconds = 60;
function setTime() {
  var timerInterval = setInterval(function () {
    seconds--;
    timeEl.textContent = seconds + " seconds left";
    if (seconds === -1) {
      clearInterval(timerInterval);
      container.classList.add("hide");
      lastUserContainer.classList.remove("hide");
      renderLastUser();
    }
  }, 1000);
}

// The questions and choices will be grabbed from the array of questions
var myQuestions = [
  {
    question: "What does CSS stand for?",
    answerIndex: 2,
    choices: [
      "Clerical Support Staff",
      "Charles Smith Sonye",
      "Cascading Styling Sheets",
      "College Scholarship Service",
    ],
  },
  {
    question: "JavaScript File Has An Extension Of?",
    answerIndex: 1,
    choices: [".java", ".js", ".script", ".JAVASCRIPT"],
  },
];

// The containerTag will target an html element with an id of 'container'.
var quizContainer = document.querySelector("#quizContainer");

function showQuestion() {
  quizContainer.textContent = "";

  // Create an h1 element that is a child of the containerTag
  // and will hold the questions from the array of questions.
  var questionTag = document.createElement("h1");
  quizContainer.appendChild(questionTag);
  questionTag.textContent = myQuestions[questionIndex].question;
  
  // Create a ul element that is a child of quizContainer
  var choiceListTag = document.createElement("ul");
  quizContainer.appendChild(choiceListTag);

  // Create a loop and li element to hold each of the choices,
  // the li element is a child of choiceListTag.
  for (var i = 0; i < myQuestions[questionIndex].choices.length; i++) {
    var choiceTag = document.createElement("li");
    choiceListTag.appendChild(choiceTag);

    var button = document.createElement("button");
    choiceTag.appendChild(button);
    choiceTag.style.width = "fit-content";
    button.textContent = myQuestions[questionIndex].choices[i]

    button.setAttribute("data-index", i);
    var index = parseInt(button.getAttribute("data-index"));

    // IF the use clicks on one of the four choices
    // then the browser will display "Correct" if the correct choice is clicked on
    // Or "Wrong" if any of the other choices are clicked on.
    // Add 1 to the count of correct or wrong variables.
    if(index === myQuestions[questionIndex].answerIndex){
      choiceListTag.addEventListener("click", function(event){
        alert("Wrong Choice");
        event.stopPropagation();
        wrong++
        wrongAnswer.textContent = "Wrong answers = " + wrong;
        questionIndex++
        showNextQuestion();
      });

      button.addEventListener("click", function(event){
        alert("Correct Choice");
        event.stopPropagation();
        correct++
        correctAnswer.textContent = "Correct answers = " + correct;
        questionIndex++
        showNextQuestion();
      });
    }
  }
}

// WHEN the seconds is equal to zero, the renderLastUser function will execute.
// The user will enter their initials and click Save.
function displayMessage(type, message){
  saveDiv.textContent = message;
  saveDiv.setAttribute("class", type);
}

function renderLastUser(){
  var userInitials = localStorage.getItem("userInitials");
  //need to do one for the score

  if(!userInitials){
    return "";
  }

  var lastUserEl = document.createElement("h2");
  lastRegistered.appendChild(lastUserEl);
  
}