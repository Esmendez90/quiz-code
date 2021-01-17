// Grab elements from html page
var startButton = document.getElementById("start-btn");
var timeEl = document.querySelector(".timer");
var container = document.querySelector(".container");

// Grab elements for renderring last user from localStorage
var lastUserContainer = document.querySelector("#lastUser-Container");
var saveDiv = document.querySelector(".save-div");
var saveBtn = document.querySelector("#save");

var seconds = 60;
var questionIndex = 0;
var wrong = false;
var correct = 0;
var quizContainer = document.querySelector("#quizContainer");
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
  {
    question: "Difference between “==” and “===” ?",
    answerIndex: 3,
    choices: [
      "There is no difference",
      "Both only compares values",
      "Both compare values and types",
      "== only compares values and === compares values and type",
    ],
  },
  {
    question: "Select the correct opening and closing tags",
    answerIndex: 2,
    choices: [
      "<h1><h1>",
      "<heading></heading>",
      "<button></button>",
      "-button- -button-",
    ],
  },
  {
    question: "How to add one new element at end of an array in javascript?",
    answerIndex: 0,
    choices: [
      "Use the push() method",
      "Use the add() method",
      "Concatenate the new element to the array",
      "Create a new array that contains the new element",
    ],
  },
  {
    question:
      "What is the correct JavaScript syntax to change the content of the following HTML element: <p id='demo'>change this line.</p>",
    answerIndex: 1,
    choices: [
      "#demo.innerHTML = 'Hello World'",
      "document.getElementById('demo').innerHTML = 'Love coding'",
      "document.querySelector('demo').innerHTML = 'I like cats'",
      "There is no correct way to do this because life is multifaceted",
    ],
  },
];

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
// When the seconds equals to zero or the user has completed answeing all questions, the timer will stop.
// The timer, question, and four choices will hide.
// The highScores function will execute.
function setTime() {
  var timerInterval = setInterval(function () {
    seconds--;
    timeEl.textContent = "You have " + seconds + " seconds left";
    if (seconds === -1 || questionIndex > 5) {
      clearInterval(timerInterval);
      highScores();
    }
    if (wrong === true) {
      seconds = seconds - 10;
      wrong = false;
      return seconds;
    }
  }, 1000);
}

function showNextQuestion() {
  if (questionIndex <= 5) {
    quizContainer.textContent = "";

    // Create an h1 element that is a child of the containerTag
    // and will hold the questions from the array of questions.
    var questionTag = document.createElement("h1");
    quizContainer.appendChild(questionTag);
    questionTag.textContent = myQuestions[questionIndex].question; // this displays the question on page

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
      button.textContent = myQuestions[questionIndex].choices[i]; // displays the four choices for each question

      // Set a data-index attribute for each of the four choices and save it to a variable.
      button.setAttribute("data-index", i);
      var index = parseInt(button.getAttribute("data-index"));

      // IF the user clicks on one of the four choices
      // then an alert will display "Correct" if the correct choice is clicked on
      // Or "Wrong" if any of the other choices are clicked on.
      // Add 1 to the count of correct or wrong variables.
      // In either scenario, the showNextQuestion function will execute.
      if (index === myQuestions[questionIndex].answerIndex) {
        choiceListTag.addEventListener("click", function (event) {
          document.getElementById("alert-msg").textContent = "WRONG!!!";
          event.stopPropagation();
          wrong = true;
          questionIndex++;
          showNextQuestion();
        });

        button.addEventListener("click", function (event) {
          document.getElementById("alert-msg").textContent = "CORRECT!!!";
          event.stopPropagation();
          correct++;
          questionIndex++;
          showNextQuestion();
        });
      }
    }
  }
}

// WHEN the seconds is equal to zero, the renderLastUser function will execute.
// The user will enter their initials and click Save.
function displayMessage(type, message) {
  saveDiv.textContent = message;
  saveDiv.setAttribute("class", type);
}

function highScores() {
  container.classList.add("hide");
  lastUserContainer.classList.remove("hide");
  renderLastUser();
  document.getElementById("yourScore").textContent =
    "Your Score is " + correct + "/6";
}

// The last user's initials and score will be displayed.
function renderLastUser() {
  var storage = JSON.parse(localStorage.getItem("last-user-score"));
  for (var i = 0; i < storage.length; i++) {
    console.log(storage[i]);
    document.getElementById("lastUserScore").textContent = storage[i];
  }
}

saveBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var userInitials = document.querySelector(".initials").value;

  if (userInitials === "") {
    displayMessage("error", "Please, enter your initials");
  } else {
    displayMessage("success", "Score saved!");

    var userScore = userInitials + " " + correct + "/6";
    var storage = JSON.parse(localStorage.getItem("last-user-score"));
    storage.push(userScore);
    localStorage.setItem("last-user-score", JSON.stringify(storage));

    renderLastUser();
  }
});

startButton.addEventListener("click", startQuiz);
document
  .getElementById("play-again")
  .addEventListener("click", function (event) {
    console.log(event.target);
    location.reload();
  });

if (localStorage.getItem("last-user-score") === null) {
  localStorage.setItem("last-user-score", JSON.stringify([]));
}
