const quizQuestions = [
    {
        question: 'Qual linha imaginária divide a Terra em Hemisfério Norte e Sul?',
        answers: ['Meridiano de Greenwich', 'Linha do Equador', 'Trópico de Capricórnio'],
        correctIndex: 1,
    },
    {
        question: 'Qual é o maior bioma brasileiro em extensão territorial?',
        answers: ['Cerrado', 'Amazônia', 'Caatinga'],
        correctIndex: 1,
    },
    {
        question: 'Qual fuso horário é adotado em Brasília durante o horário normal?',
        answers: ['UTC-3', 'UTC-4', 'UTC-2'],
        correctIndex: 0,
    },
];

let currentQuestionIndex = 0;
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');

function loadQuiz() {
    if (!questionEl || !optionsEl) {
        return;
    }
    renderQuestion();
}

function renderQuestion() {
    const questionData = quizQuestions[currentQuestionIndex];
    questionEl.textContent = questionData.question;
    feedbackEl.textContent = '';
    optionsEl.innerHTML = questionData.answers.map((answer, index) => {
        return `<button type="button" onclick="checkAnswer(${index})">${answer}</button>`;
    }).join('');
}

function checkAnswer(selectedIndex) {
    const questionData = quizQuestions[currentQuestionIndex];
    const correct = selectedIndex === questionData.correctIndex;
    feedbackEl.textContent = correct ? '✔️ Resposta correta! Parabéns!' : '❌ Resposta incorreta. Tente novamente.';
    feedbackEl.style.color = correct ? 'var(--success)' : 'var(--error)';

    if (correct) {
        updateScore(10);
        trackEvent('quiz_correct', 'Quiz', questionData.question);
    } else {
        trackEvent('quiz_incorrect', 'Quiz', questionData.question);
    }

    currentQuestionIndex = (currentQuestionIndex + 1) % quizQuestions.length;
    setTimeout(renderQuestion, 2500);
}

window.loadQuiz = loadQuiz;
window.checkAnswer = checkAnswer;
