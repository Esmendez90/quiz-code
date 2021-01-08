var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var timeEl = document.querySelector(".timer");

startButton.addEventListener("click", startQuiz);

// WHEN I click the Start button, the startQuiz function will execute.
// The Start button will hide, and the Next button will show.
// The timer function will execute and the countdown timer will show on the page.
// The showNextQuestion function will also execute and a question with four choices
//  will display on the page.
function startQuiz() {
  startButton.classList.add("hide");
  nextButton.classList.remove("hide");
  setTime();
  showNextQuestion();
}

// The timer will start decrementing from a set value of 60
//  at a speed of 1000 milliseconds.
// When the seconds equals to zero the timer will stop.

var seconds = 60;

function setTime() {
  var timerInterval = setInterval(function () {
    seconds--;
    timeEl.textContent = "You have " + seconds + " seconds left";
    if (seconds === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);

}

// The questions and choices will be grabbed from the array of questions
var questionIndex = 0;
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
var containerTag = document.querySelector("#container");

function showNextQuestion() {
  containerTag.textContent = "";

  // Create an h1 element that is a child of the containerTag
  //  and will hold the questions from the array of questions.
  var questionTag = document.createElement("h1");
  containerTag.appendChild(questionTag);
  questionTag.textContent = myQuestions[questionIndex].question;

  // Create a list element that is a child of the containerTag
  var choiceListTag = document.createElement("ol");
  containerTag.appendChild(choiceListTag);

  // Creat a loop and li element to hold the choices, 
  //  the li element is a child of choiceListTag.
  for (var i = 0; i < myQuestions[questionIndex].choices.length; i++) {
    var choiceTag = document.createElement("li");
    choiceListTag.appendChild(choiceTag);
    choiceTag.textContent = myQuestions[questionIndex].choices;

    // If the user clicks on one of the four choices

    // Then the browser will display 'Correct Answer' if the correct choice was clicked on

    // Or 'Wrong Answer' is any of the other choices were clicked on

    // Add 1 to the count of correct answers or wrong answers

    // When the user clicks on the Next button, then the following question will be displayed

    choiceTag.addEventListener("click", function () {
      clearInterval(questionInterval);

      questionIndex++;

      showNextQuestion();
    });
  }

  var questionInterval = setInterval(function () {
    if (secondsLeft === 0) {
      //CREATE A VARIABLE FOR SECONDS

      // clear timer

      //timerTag.textContent = " ";

      // stop timer

      clearInterval(questionInterval);

      // call the next function for speed reading

      showNextQuestion();
    }

    // subtract one second

    secondsLeft--;
  }, 1000);
}
