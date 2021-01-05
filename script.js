var startButton = document.getElementById("start-btn");

var questionEL = document.querySelector("#question");

var answersEL = document.querySelector("#container-answers");

startButton.addEventListener("click", startQuiz);

//...this function will execute when I click on the Start button...

function startQuiz() {
  startButton.classList.add("hide");

  document.querySelector("#container-answers").classList.remove("hide");

  showQuestion();
}

//...This function will display the first question and choices from

// the array of questions.

function showQuestion() {
  questionEL.innerText = myQuestions[0].question;
}

//...this will execute when I choose an answer...

function selectAnswer() {}

//...Array of questions and answer choices

var myQuestions = [
  {
    question: "What does CSS stand for?",

    answers: {
      a: "Clerical Support StaffS",

      b: "Charles Smith Sonye",

      c: "Cascading Styling Sheets",

      d: "College Scholarship Service",
    },

    correctAnswer: "c",
  },

  {
    question: "JavaScript File Has An Extension Of",

    answers: {
      a: ".Java",

      b: ".js",

      c: ".javascript",

      d: ".xml",
    },

    correctAnswer: "b",
  },
];
