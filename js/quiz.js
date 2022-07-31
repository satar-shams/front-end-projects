//Quiz Questions Data
const data = [{
        question: "Question 1",
        answers: [{
                text: "answer1",
                state: false
            },
            {
                text: "answer2",
                state: false
            },
            {
                text: "answer3",
                state: false
            },
            {
                text: "correct",
                state: true
            }
        ]
    },
    {
        question: "Question 2",
        answers: [{
                text: "correct",
                state: true
            },
            {
                text: "answer2",
                state: false
            }
        ]
    },
    {
        question: "Question 3",
        answers: [{
                text: "answer1",
                state: false
            },
            {
                text: "correct",
                state: true
            },
            {
                text: "answer3",
                state: false
            }
        ]
    },
];

//initialization
var i = 0;
var answered = false;
const quiz = document.getElementById("quiz");
const next = document.getElementById("next");
const again = document.getElementById("again");
const steps = document.getElementById("steps");

//functions

//start quiz
function start(element) {
    element.classList.add("hide");
    quiz.classList.remove("hide");
    updateQuestion(0);
}

//check answer 
function valid(element, state) {
    if (!answered) {
        if (state) {
            element.classList.add("true");
            if (i === data.length - 1) {
                i++;
                alert("you have finished quiz succesfully");
                next.classList.add("hide");
                again.classList.remove("hide");
            } else {
                next.classList.remove("hide");
            }

        } else {
            element.classList.add("false");
            again.classList.remove("hide");
        }
        answered = true;
    }
}

//remove all answers
function removeChildrens() {
    while (steps.firstChild) {
        steps.removeChild(steps.lastChild)
    }
}

//add new question to quiz
function updateQuestion(i) {
    removeChildrens();
    var questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.innerHTML = data[i].question;
    steps.appendChild(questionDiv);
    for (var j = 0; j < data[i].answers.length; j++) {
        const answerDiv = document.createElement("div");
        answerDiv.classList.add("answer");
        answerDiv.innerHTML = data[i].answers[j].text;
        const bl = data[i].answers[j].state;
        answerDiv.addEventListener("click", () => valid(answerDiv, bl));
        steps.appendChild(answerDiv);
    }
}

//next questions after true answer
function nextStep() {
    i++;
    if (i < data.length) {
        updateQuestion(i);
        answered = false;
        next.classList.add("hide");
    } else {}
}

//button for when user answer wrong
function startAgain() {
    if (i < data.length)
        alert("quiz finished and your score is : " + i + " of " + data.length);
    i = 0;
    updateQuestion(i);
    answered = false;
    again.classList.add("hide");
}