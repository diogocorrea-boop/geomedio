/**
 * RENDERIZADOR DE CONTEÚDO
 * Carrega e exibe dinamicamente o conteúdo das aulas, testes e mídia
 */

let anoAtual = 'ano1';
let aulaAtual = null;
let quizAtual = [];
let indexQuizAtual = 0;

// ============ FUNÇÕES PRINCIPAIS ============

/**
 * Alterna entre abas de anos (1º, 2º, 3º)
 */
function showTab(tab) {
    anoAtual = tab;
    
    // Atualiza visibilidade das abas
    document.querySelectorAll('.tab-content').forEach(el => {
        el.classList.remove('active');
    });
    document.getElementById(tab).classList.add('active');
    
    // Atualiza estados dos botões
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById('tab-' + tab).classList.add('active');
    
    // Renderiza conteúdo da aba
    renderConteudoAno(tab);
}

/**
 * Renderiza o conteúdo completo de um ano
 */
function renderConteudoAno(ano) {
    const conteudo = getConteudoAno(ano);
    if (!conteudo) return;
    
    const container = document.getElementById(ano);
    if (!container) return;
    
    let html = `
        <div class="ano-header">
            <h3>${conteudo.descricao}</h3>
            <p>${conteudo.aulas.length} aulas disponíveis</p>
        </div>
        <div class="aulas-grid">
    `;
    
    conteudo.aulas.forEach(aula => {
        html += `
            <article class="aula-card" onclick="abrirAula('${ano}', '${aula.id}')">
                <div class="aula-header">
                    <h4>${aula.titulo}</h4>
                    <p class="aula-subtitulo">${aula.subtitulo}</p>
                </div>
                <p class="aula-midia-count">
                    📚 ${aula.midia ? aula.midia.length : 0} recursos de mídia
                </p>
                <button class="btn-small">Ver Aula →</button>
            </article>
        `;
    });
    
    html += `</div>`;
    
    container.innerHTML = html;
}

/**
 * Abre uma aula em modal
 */
function abrirAula(ano, aulaId) {
    const aula = getAula(ano, aulaId);
    if (!aula) return;
    
    aulaAtual = aula;
    
    const modal = document.createElement('div');
    modal.className = 'modal-aula';
    modal.id = 'modal-aula';
    
    let mediaHtml = '';
    if (aula.midia && aula.midia.length > 0) {
        mediaHtml = '<div class="aula-midia"><h4>📺 Recursos de Mídia</h4>';
        aula.midia.forEach(m => {
            if (m.tipo === 'video') {
                mediaHtml += `
                    <div class="midia-item">
                        <p><strong>${m.titulo}</strong> (${m.fonte})</p>
                        <iframe width="100%" height="315" src="${m.url}" frameborder="0" allowfullscreen></iframe>
                    </div>
                `;
            } else if (m.tipo === 'imagem') {
                mediaHtml += `
                    <div class="midia-item">
                        <p><strong>${m.titulo}</strong></p>
                        <img src="${m.url}" alt="${m.titulo}" style="max-width: 100%; border-radius: 8px;">
                    </div>
                `;
            }
        });
        mediaHtml += '</div>';
    }
    
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="fecharAula()">✕</button>
            <h2>${aula.titulo}</h2>
            <p class="modal-subtitulo">${aula.subtitulo}</p>
            <div class="aula-corpo">
                ${aula.conteudo}
            </div>
            ${mediaHtml}
            <div class="modal-actions">
                <button class="btn" onclick="fecharAula()">Voltar</button>
                <button class="btn btn-secondary" onclick="iniciarQuizAula('${ano}')">Fazer Quiz →</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

/**
 * Fecha o modal de aula
 */
function fecharAula() {
    const modal = document.getElementById('modal-aula');
    if (modal) {
        modal.remove();
    }
}

/**
 * Inicia o quiz de um ano
 */
function iniciarQuizAno(ano) {
    const quiz = getQuizAno(ano);
    if (quiz.length === 0) {
        alert('Não há questões para este ano ainda.');
        return;
    }
    
    quizAtual = embaralharQuiz(quiz);
    indexQuizAtual = 0;
    anoAtual = ano;
    
    // Scroll para a seção de quiz
    document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
    
    // Renderiza primeira questão
    renderQuizQuestao();
}

/**
 * Inicia quiz após abrir uma aula
 */
function iniciarQuizAula(ano) {
    fecharAula();
    iniciarQuizAno(ano);
}

/**
 * Renderiza uma questão do quiz
 */
function renderQuizQuestao() {
    if (indexQuizAtual >= quizAtual.length) {
        finalizarQuiz();
        return;
    }
    
    const questao = quizAtual[indexQuizAtual];
    const container = document.getElementById('quiz-container');
    
    let optionsHtml = '';
    questao.opcoes.forEach((opcao, idx) => {
        optionsHtml += `
            <button class="option-btn" onclick="responderQuiz(${idx})">
                ${String.fromCharCode(65 + idx)}) ${opcao}
            </button>
        `;
    });
    
    const progressPercent = Math.round((indexQuizAtual / quizAtual.length) * 100);
    
    container.innerHTML = `
        <div class="quiz-progress">
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progressPercent}%"></div>
            </div>
            <p class="progress-text">Questão ${indexQuizAtual + 1} de ${quizAtual.length}</p>
        </div>
        <p class="quiz-question">${questao.pergunta}</p>
        <div class="options" id="options">
            ${optionsHtml}
        </div>
        <p id="feedback" class="quiz-feedback"></p>
    `;
}

/**
 * Processa a resposta do quiz
 */
function responderQuiz(indexResposta) {
    const questao = quizAtual[indexQuizAtual];
    const feedback = document.getElementById('feedback');
    const buttons = document.querySelectorAll('.option-btn');
    
    // Desabilita todos os botões
    buttons.forEach(btn => btn.disabled = true);
    
    if (indexResposta === questao.correta) {
        // Resposta correta
        feedback.className = 'quiz-feedback correct';
        feedback.textContent = '✓ Correto! ' + questao.explicacao;
        buttons[indexResposta].classList.add('correct');
        
        // Adiciona pontos
        adicionarPontos(10);
        
        // Próxima questão após 2 segundos
        setTimeout(() => {
            indexQuizAtual++;
            renderQuizQuestao();
        }, 2000);
    } else {
        // Resposta incorreta
        feedback.className = 'quiz-feedback incorrect';
        feedback.textContent = '✗ Incorreto. ' + questao.explicacao;
        buttons[indexResposta].classList.add('incorrect');
        buttons[questao.correta].classList.add('correct');
        
        // Próxima questão após 2.5 segundos
        setTimeout(() => {
            indexQuizAtual++;
            renderQuizQuestao();
        }, 2500);
    }
}

/**
 * Finaliza o quiz
 */
function finalizarQuiz() {
    const container = document.getElementById('quiz-container');
    const pontos = localStorage.getItem('pontos') || '0';
    
    container.innerHTML = `
        <div class="quiz-resultado">
            <h3>🎉 Parabéns!</h3>
            <p>Você completou o quiz com sucesso!</p>
            <p class="resultado-pontos">Pontos ganhos nesta sessão: +${quizAtual.length * 10}</p>
            <p class="pontos-totais">Total de pontos: <strong>${pontos}</strong> 🏆</p>
            <div class="resultado-actions">
                <button class="btn" onclick="location.reload()">Fazer outro quiz</button>
                <button class="btn btn-secondary" onclick="voltarParaHome()">Voltar ao início</button>
            </div>
        </div>
    `;
}

/**
 * Volta para a seção inicial
 */
function voltarParaHome() {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Adiciona pontos ao usuário
 */
function adicionarPontos(pontos) {
    let totalPontos = parseInt(localStorage.getItem('pontos') || '0');
    totalPontos += pontos;
    localStorage.setItem('pontos', totalPontos);
    document.getElementById('score').textContent = totalPontos;
}

// ============ INICIALIZAÇÃO ============

/**
 * Inicializa o carregamento de conteúdo ao carregar a página
 */
document.addEventListener('DOMContentLoaded', () => {
    // Carrega pontos do localStorage
    const pontos = localStorage.getItem('pontos') || '0';
    document.getElementById('score').textContent = pontos;
    
    // Renderiza conteúdo do 1º ano por padrão
    renderConteudoAno('ano1');
});