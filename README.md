# GeoMaster 2026

Plataforma educacional de Geografia com interface responsiva, quiz interativo, ranking, notícias em tempo real, geração de certificados e suporte PWA.

## Arquitetura do Projeto

- `index.html` - Layout semântico e acessível
- `css/style.css` - Paleta azul, design responsivo e foco acessível
- `js/main.js` - Controle de navegação, score e inicialização
- `js/quiz.js` - Quiz interativo com perguntas dinâmicas
- `js/gamification.js` - Sistema de conquistas e pontos em tempo real
- `js/api-integrations.js` - Integração com NewsAPI e Google Sheets
- `js/certificate.js` - Geração de certificados em PDF com jsPDF
- `js/analytics.js` - Rastreamento de eventos para análise
- `manifest.json` - Configuração PWA
- `service-worker.js` - Cache para modo offline básico

## Funcionalidades Implementadas

1. Interface responsiva e acessível
2. Quiz interativo com feedback imediato
3. Ranking dinâmico no frontend
4. Certificado digital gerado em PDF
5. PWA básico com offline cache
6. Notícias integradas via NewsAPI
7. Estrutura para integração com Google Sheets
8. Monitoramento de eventos com analytics

## Como usar

1. Abra o projeto no VS Code.
2. Instale uma extensão como Live Server ou rode `npx http-server` na raiz do projeto.
3. Coloque sua chave do NewsAPI em `js/api-integrations.js`:

```js
const NEWS_API_KEY = 'SUA_CHAVE_AQUI';
```

4. Se quiser usar Google Sheets, publique a planilha e chame `fetchGoogleSheet(sheetId)`.
5. Abra o site em `localhost` ou publique no GitHub Pages/Vercel.

## Observações

- Alguns recursos (API de notícias, service worker) funcionam melhor em HTTPS ou `localhost`.
- Expanda o array `achievements` em `js/gamification.js` para criar mais conquistas.
- Personalize os textos e perguntas com o conteúdo pedagógico da sua instituição.
