var startButton = document.getElementById("start-btn");

var nextButton = document.getElementById("next-btn");

var timeEl = document.querySelector(".timer");

startButton.addEventListener("click", startQuiz);

//...this function will execute when I click on the Start button...

function startQuiz() {
  startButton.classList.add("hide");

  nextButton.classList.remove("hide");

  setTime();
}

//...Timer code executes after clicking the Start button...

var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;

    timeEl.textContent = "You have " + secondsLeft + " seconds left";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);

  showNextQuestion();
}

//...Array of question and answer choices

var questionIndex = 0;

var myQuestions = [
  {
    question: "What does CSS stand for?",

    answerIndex: 2,

    choices: [
      "Clerical Support StaffS",

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

var containerTag = document.querySelector("#container");

//var correctAnswer = (myQuestions[questionIndex].answerIndex);

function showNextQuestion() {
  containerTag.textContent = "";

  // Create h1 element, that is a child of the containerTag, to hold the questions

  var questionTag = document.createElement("h1");

  containerTag.appendChild(questionTag);

  questionTag.textContent = myQuestions[questionIndex].question;

  // Create a list element that is a child of the containerTag

  var choiceListTag = document.createElement("ol");

  containerTag.appendChild(choiceListTag);

  // Creat a loop and li element to hold the choices. li element is a child of choiceListTag.

  for (var i = 0; i < myQuestions[questionIndex].choices.length; i++) {
    var choiceTag = document.createElement("li");

    choiceListTag.appendChild(choiceTag);

    choiceTag.textContent = myQuestions[questionIndex].choices[i];

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
    if (seconds === 0) {
      //CREATE A VARIABLE FOR SECONDS

      // clear timer

      //timerTag.textContent = " ";

      // stop timer

      clearInterval(questionInterval);

      // call the next function for speed reading

      showNextQuestion();
    }

    // subtract one second

    seconds--;
  }, 1000);
}
