const quizData = [
    {
        question: 'Qual a idade do Renato?',
        a: '10',
        b: '17' ,
        c: '26',
        d: '32',
        correct: 'd'
         
    }, {
        question: 'Qual é o time favorito de Renato?', 
        a: 'São Paulo',
        b: 'Florinthians' ,
        c: 'Florminense',
        d: 'Porcomeiras',
        correct: 'a'
    }, {
        question: 'Qual a cor dos olhos de Renato?', 
        a: 'Azul',
        b: 'Preto' ,
        c: 'Verde',
        d: 'Castanho',
        correct: 'c'
    }, {
        question: 'Qual a comida favorita de Renato', 
        a: 'Lasanha',
        b: 'Pizza' ,
        c: 'Hot-Dog',
        d: 'Churrasco',
        correct: 'b'
    }, {
        question: 'Qual destes não é uma fruta', 
        a: 'Morango',
        b: 'Uva' ,
        c: 'Tomate',
        d: 'Pepino',
        correct: 'd'
    }

];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit')


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    


}

function getSelected(){
 

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
           answer = answerEl.id;
        }
    });

    return answer;
   
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });

}



submitBtn.addEventListener("click", () => {
    const answer = getSelected();

   // console.log(answer);

    if (answer){
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = 
                `<h2>Você respondeu corretamente: ${score} /${quizData.length} questões.</h2> 
                <button onclick="location.reload()">Responder novamente?</button>`;
        }
      
        }
});