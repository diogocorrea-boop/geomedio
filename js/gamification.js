const achievements = [
    { id: 'first-quiz', title: 'Primeira resposta correta', threshold: 10 },
    { id: 'score-50', title: '50 pontos alcançados', threshold: 50 },
    { id: 'score-100', title: '100 pontos alcançados', threshold: 100 },
    { id: 'daily-study', title: 'Sessão de estudo concluída', threshold: 1 },
];

function updateAchievements(currentScore) {
    const earned = achievements.filter((achievement) => currentScore >= achievement.threshold);
    localStorage.setItem('geomedio-achievements', JSON.stringify(earned));
    if (earned.length) {
        console.log('Conquistas desbloqueadas:', earned.map((item) => item.title).join(', '));
    }
}

window.updateAchievements = updateAchievements;
