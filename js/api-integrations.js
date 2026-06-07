const NEWS_API_KEY = 'SUA_CHAVE_AQUI';
const NEWS_ENDPOINT = 'https://newsapi.org/v2/top-headlines?language=pt&category=general&q=geopolítica';

async function loadNews() {
    const newsContainer = document.getElementById('news-container');
    if (!newsContainer) {
        return;
    }

    try {
        const response = await fetch(`${NEWS_ENDPOINT}&apiKey=${NEWS_API_KEY}`);
        const data = await response.json();

        if (!data.articles || data.articles.length === 0) {
            newsContainer.innerHTML = '<p>Nenhuma notícia disponível no momento.</p>';
            return;
        }

        newsContainer.innerHTML = data.articles.slice(0, 4).map((article) => {
            return `
                <article class="card">
                    <h3>${article.title}</h3>
                    <p>${article.description || 'Resumo não disponível.'}</p>
                    <a href="${article.url}" target="_blank" rel="noopener noreferrer">Ler mais</a>
                </article>
            `;
        }).join('');
    } catch (error) {
        console.error('Erro ao carregar notícias:', error);
        newsContainer.innerHTML = '<p>Erro ao carregar notícias. Verifique sua conexão ou a chave da API.</p>';
    }
}

async function fetchGoogleSheet(sheetId, range = 'A1:D20') {
    const sheetUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&range=${range}`;
    const response = await fetch(sheetUrl);
    const text = await response.text();
    const json = JSON.parse(text.substr(text.indexOf('{'), text.lastIndexOf('}') - text.indexOf('{') + 1));
    return json.table.rows;
}

window.loadNews = loadNews;
window.fetchGoogleSheet = fetchGoogleSheet;
