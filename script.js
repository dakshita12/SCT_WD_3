const questions = [
    {
        question: "Which of the following is a JavaScript framework?",
        answers: [
            { text: "Django", correct: false },
            { text: "React", correct: true },
            { text: "Laravel", correct: false },
            { text: "Flask", correct: false }
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "HyperText Markup Language", correct: true },
            { text: "HyperTransfer Markup Language", correct: false },
            { text: "HighText Machine Language", correct: false },
            { text: "HyperText Markdown Language", correct: false }
        ]
    },
    {
    question: "Which method is used to add an element at the end of an array in JavaScript?",
    answers: [
        { text: "push()", correct: true },
        { text: "pop()", correct: false },
        { text: "shift()", correct: false },
        { text: "unshift()", correct: false }
        ]
    },
    {
        question: "What is the correct syntax to output 'Hello World' in Python?",
        answers: [
            { text: "echo('Hello World')", correct: false },
            { text: "print('Hello World')", correct: true },
            { text: "console.log('Hello World')", correct: false },
            { text: "printf('Hello World')", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a programming language?",
        answers: [
            { text: "Python", correct: false },
            { text: "Java", correct: false },
            { text: "HTML", correct: true },
            { text: "C++", correct: false }
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Colorful Style Sheets", correct: false },
            { text: "Computer Style Sheets", correct: false },
            { text: "Cascading Style Sheets", correct: true },
            { text: "Creative Style Sheets", correct: false }
        ]
    },
    {
        question: "What is the full form of API?",
        answers: [
            { text: "Advanced Programming Interface", correct: false },
            { text: "Application Programming Interface", correct: true },
            { text: "Application Protocol Interface", correct: false },
            { text: "Applied Programming Instruction", correct: false }
        ]
    },
    {
        question: "Which company developed the Windows operating system?",
        answers: [
            { text: "Google", correct: false },
            { text: "Apple", correct: false },
            { text: "IBM", correct: false },
            { text: "Microsoft", correct: true }
        ]
    },
    {
        question: "What does HTTP stand for?",
        answers: [
            { text: "HyperText Transfer Protocol", correct: true },
            { text: "Hyperlink Transfer Protocol", correct: false },
            { text: "HyperText Transmission Program", correct: false },
            { text: "Hyperlink Text Transfer Path", correct: false }
        ]
    },
    {
        question: "Which of the following is a database management system?",
        answers: [
            { text: "MySQL", correct: true },
            { text: "Chrome", correct: false },
            { text: "GitHub", correct: false },
            { text: "VS Code", correct: false }
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}


function showQuestion(){

    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})


startQuiz();