const scoreCounter = document.getElementById('score');
const leaderboardEl = document.getElementById('leaderboard');
const navLinks = document.querySelector('.nav-links');
const menuToggle = document.querySelector('.menu-toggle');
let currentScore = Number(localStorage.getItem('geomedio-score')) || 0;

function showTab(sectionId) {
    const tabs = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.tab-content');

    tabs.forEach((tab) => {
        const active = tab.getAttribute('aria-controls') === sectionId;
        tab.classList.toggle('active', active);
        tab.setAttribute('aria-selected', active);
    });

    panels.forEach((panel) => {
        panel.classList.toggle('active', panel.id === sectionId);
    });
}

function submitFeedback(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !message) {
        alert('Por favor, preencha seu nome e mensagem.');
        return;
    }

    trackEvent('feedback_submitted', 'Contato', 'Formulário de feedback');
    alert('Obrigado pelo feedback, ' + name + '!');
    event.target.reset();
}

function updateScore(points) {
    currentScore += points;
    currentScore = Math.max(currentScore, 0);
    localStorage.setItem('geomedio-score', currentScore);
    scoreCounter.textContent = currentScore;
    renderLeaderboard();
    updateAchievements(currentScore);
}

function renderLeaderboard() {
    const players = [
        { name: 'Ana', score: 240 },
        { name: 'Gabriel', score: 180 },
        { name: 'Maria', score: 150 },
        { name: 'Você', score: currentScore },
    ];

    players.sort((a, b) => b.score - a.score);
    leaderboardEl.innerHTML = players.map((player) => `<li><strong>${player.name}</strong> — ${player.score} pts</li>`).join('');
}

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then(() => console.log('Service Worker registrado.'))
            .catch((error) => console.error('Falha ao registrar Service Worker:', error));
    }
}

function toggleMenu() {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('show');
}

function initMenu() {
    menuToggle.addEventListener('click', toggleMenu);
    document.querySelectorAll('.nav-links a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

function initApp() {
    scoreCounter.textContent = currentScore;
    renderLeaderboard();
    if (typeof loadQuiz === 'function') {
        loadQuiz();
    }
    if (typeof loadNews === 'function') {
        loadNews();
    }
    initMenu();
    registerServiceWorker();
}

window.showTab = showTab;
window.submitFeedback = submitFeedback;
window.updateScore = updateScore;
window.addEventListener('DOMContentLoaded', initApp);
