const quizData =[
    {
        question: 'How old is Hakeem?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'

    }, {
        question: 'What is the most used programming language in 2022?',
        a: 'Java',
        b: 'C',
        c: 'Javascript',
        d: 'Python',
        correct: 'd'
    }, {
        question: 'Who is the president of Nigeria?',
        a: 'Hakeembreaks',
        b: 'Muhammadu Buhari',
        c: 'Peter Obi',
        D: 'Tinubu',
        correct: 'b',

    }, {
        question: 'What does HTML stands for',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Breaks Object Notation',
        d: 'Application Programming Interface',
        correct: 'a',

    }, {
        question: 'What year was JavaScript launched',
        a: '1998',
        b: '1995',
        c: '1996',
        d: 'none of the above', 
        correct: 'b', 
    }
] 

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");


const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text"); 
const d_text = document.getElementById("d_text");
const submitbtn = document.getElementById("submit");

let currentQuiz = 0;
let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz() { 
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.
    question; 
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b; 
    c_text.innerText = currentQuizData.c; 
    d_text.innerText = currentQuizData.d;

   
}


function getSelected(){
    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;


}

 function deselectAnswers(){
    answersEls.forEach((answerEl) => {
       answerEl.checked = false;
    });
 }

submitbtn.addEventListener("click", ( ) => {
    //check to see the answer
    const answer = getSelected(); 


    if (answer) { 

        if (answer === quizData[currentQuiz].correct){
            score++; 
        }

            currentQuiz++;

            if (currentQuiz < quizData.length){

                loadQuiz();    
            } else{
                //TODO: SHOW RESULTS.
        
                quiz.innerHTML = `<h2>Your score is: ${score}/${quizData.length} </h2>
                <button onclick="location.reload()">Reload</button>`;
            }
        
           }

});
    
