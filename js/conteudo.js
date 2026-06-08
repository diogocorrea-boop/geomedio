/**
 * BANCO DE DADOS DE CONTEÚDO - GeoMaster 2026
 * Contém todas as aulas, textos, quizzes e links de mídia organizados por ano
 */

const CONTEUDO = {
    // ============ 1º ANO - GEOGRAFIA GERAL ============
    ano1: {
        descricao: "Geografia Geral: Cartografia, Relevo e Natureza",
        aulas: [
            {
                id: "aula-1-1",
                titulo: "Coordenadas Geográficas: Latitude e Longitude",
                subtitulo: "Localização precisa no globo terrestre",
                conteudo: `
                    <h4>O que são Coordenadas Geográficas?</h4>
                    <p>As coordenadas geográficas são um sistema de referência que usa latitude e longitude para localizar qualquer ponto na superfície terrestre.</p>
                    
                    <h4>Latitude</h4>
                    <ul>
                        <li>Medida em graus (0° a 90°) Norte e Sul</li>
                        <li>O Equador é a linha de referência (0°)</li>
                        <li>Divide a Terra em Hemisfério Norte e Hemisfério Sul</li>
                    </ul>
                    
                    <h4>Longitude</h4>
                    <ul>
                        <li>Medida em graus (0° a 180°) Leste e Oeste</li>
                        <li>O Meridiano de Greenwich é a linha de referência (0°)</li>
                        <li>Define fusos horários</li>
                    </ul>
                    
                    <h4>Exemplos Práticos</h4>
                    <p><strong>São Paulo:</strong> 23°33' S, 46°38' W</p>
                    <p><strong>Rio de Janeiro:</strong> 22°54' S, 43°11' W</p>
                    <p><strong>Brasília:</strong> 15°47' S, 47°53' W</p>
                `,
                midia: []
            },
            {
                id: "aula-1-2",
                titulo: "Tipos de Relevo Terrestre",
                subtitulo: "Montanhas, planaltos, planícies e depressões",
                conteudo: `
                    <h4>Classificação do Relevo</h4>
                    <h4>Montanhas</h4>
                    <p>Elevações muito acentuadas do terreno, com altitude superior a 1.000 metros. Exemplos: Cordilheira dos Andes, Himalaia, Serra da Mantiqueira.</p>
                    <h4>Planaltos</h4>
                    <p>Extensas superfícies elevadas com topos aplainados. No Brasil: Planalto Atlântico, Planalto Meridional.</p>
                    <h4>Planícies</h4>
                    <p>Áreas baixas e planas com altitudes variáveis. No Brasil: Planície Amazônica, Planície do Pantanal.</p>
                    <h4>Relevância Geográfica</h4>
                    <ul>
                        <li>Influenciam o clima e a vegetação</li>
                        <li>Determinam a drenagem das águas</li>
                        <li>Afetam a ocupação humana</li>
                    </ul>
                `,
                midia: []
            },
            {
                id: "aula-1-3",
                titulo: "Leitura e Interpretação de Mapas",
                subtitulo: "Aprenda a decodificar informações cartográficas",
                conteudo: `
                    <h4>Elementos de um Mapa</h4>
                    <h4>Legenda</h4>
                    <p>Explica os símbolos, cores e convenções utilizadas no mapa. É essencial para interpretar corretamente as informações.</p>
                    <h4>Escala</h4>
                    <p>A proporção entre as distâncias no mapa e as distâncias reais. Pode ser numérica (1:100.000) ou gráfica.</p>
                    <h4>Rosa dos Ventos</h4>
                    <p>Indica os pontos cardeais: Norte (N), Sul (S), Leste (L) e Oeste (O), além dos colaterais (NE, NO, SE, SO).</p>
                    <h4>Símbolos Cartográficos</h4>
                    <ul>
                        <li><strong>Cores:</strong> verde (vegetação), azul (água), marrom (relevo)</li>
                        <li><strong>Linhas:</strong> fronteiras, rios, estradas</li>
                        <li><strong>Ícones:</strong> cidades, capitais, monumentos</li>
                    </ul>
                `,
                midia: []
            }
        ],
        quiz: [
            {
                pergunta: "Qual é a linha imaginária que divide a Terra em Hemisfério Norte e Sul?",
                opcoes: ["Meridiano de Greenwich", "Linha do Equador", "Trópico de Câncer", "Trópico de Capricórnio"],
                correta: 1,
                explicacao: "A Linha do Equador é a linha de latitude 0° que divide a Terra em dois hemisférios."
            },
            {
                pergunta: "Um mapa na escala 1:100.000 significa que:",
                opcoes: ["1 cm no mapa = 100 km na realidade", "1 cm no mapa = 1 km na realidade", "1 cm no mapa = 10 km na realidade", "1 cm no mapa = 1.000 km na realidade"],
                correta: 1,
                explicacao: "Na escala 1:100.000, cada 1 cm no mapa representa 100.000 cm (1 km) na realidade."
            },
            {
                pergunta: "Qual dos seguintes é um exemplo de planície no Brasil?",
                opcoes: ["Planalto Atlântico", "Planície Amazônica", "Serra da Mantiqueira", "Chapada do Araripe"],
                correta: 1,
                explicacao: "A Planície Amazônica é uma vasta área plana no norte do Brasil, caracterizada por baixas altitudes."
            },
            {
                pergunta: "As coordenadas geográficas de São Paulo são aproximadamente:",
                opcoes: ["15°47' S, 47°53' W", "22°54' S, 43°11' W", "23°33' S, 46°38' W", "20°15' S, 40°16' W"],
                correta: 2,
                explicacao: "São Paulo está localizado em 23°33' S (latitude) e 46°38' W (longitude), no sudeste do Brasil."
            },
            {
                pergunta: "Um tipo de relevo que é uma elevação acentuada com altitude superior a 1.000 metros é chamado de:",
                opcoes: ["Planície", "Planalto", "Montanha", "Depressão"],
                correta: 2,
                explicacao: "Montanhas são elevações muito acentuadas do terreno, com altitude superior a 1.000 metros."
            },
            {
                pergunta: "Qual elemento de um mapa indica os pontos cardeais?",
                opcoes: ["Legenda", "Escala", "Rosa dos Ventos", "Símbolo cartográfico"],
                correta: 2,
                explicacao: "A Rosa dos Ventos é um elemento cartográfico que indica os pontos cardeais e colaterais."
            }
        ]
    },

    // ============ 2º ANO - GEOGRAFIA HUMANA ============
    ano2: {
        descricao: "Geografia Humana: População, Urbanização e Economia",
        aulas: [
            {
                id: "aula-2-1",
                titulo: "Dinâmica da População Mundial",
                subtitulo: "Crescimento demográfico, natalidade e mortalidade",
                conteudo: `
                    <h4>Conceitos Fundamentais de Demografia</h4>
                    <h4>Crescimento Populacional</h4>
                    <p>A população mundial cresceu de 1 bilhão em 1800 para mais de 8 bilhões em 2024. Este crescimento não é uniforme.</p>
                    <h4>Taxa de Natalidade</h4>
                    <p>Número de nascimentos por 1.000 habitantes em um ano. Países em desenvolvimento têm taxas mais altas.</p>
                    <ul>
                        <li>Brasil: ~14 nascimentos/1.000 hab</li>
                        <li>Nigéria: ~40 nascimentos/1.000 hab</li>
                        <li>Japão: ~7 nascimentos/1.000 hab</li>
                    </ul>
                    <h4>Pirâmide Etária</h4>
                    <p>Representa a estrutura da população por idade e sexo. Formatos variam conforme o desenvolvimento.</p>
                `,
                midia: []
            },
            {
                id: "aula-2-2",
                titulo: "Migrações e Mobilidade Humana",
                subtitulo: "Movimentos populacionais e suas causas",
                conteudo: `
                    <h4>Tipos de Migrações</h4>
                    <h4>Migrações Internas</h4>
                    <p>Deslocamentos dentro de um mesmo país. No Brasil: êxodo rural, migrações inter-regionais.</p>
                    <h4>Migrações Internacionais</h4>
                    <p>Deslocamentos entre países. Motivadas por oportunidades de trabalho, perseguição política ou guerras.</p>
                    <h4>Causas das Migrações</h4>
                    <ul>
                        <li><strong>Push factors:</strong> fatores de repulsão (pobreza, falta de emprego, guerra)</li>
                        <li><strong>Pull factors:</strong> fatores de atração (emprego, educação, segurança)</li>
                    </ul>
                `,
                midia: []
            },
            {
                id: "aula-2-3",
                titulo: "Urbanização e Cidades Globais",
                subtitulo: "O crescimento das cidades e a vida urbana",
                conteudo: `
                    <h4>O Processo de Urbanização</h4>
                    <p>A urbanização é o processo de crescimento da população urbana em relação à rural. Em 2024, mais de 56% da população mundial vive em cidades.</p>
                    <h4>Urbanização no Brasil</h4>
                    <ul>
                        <li>1970: 55% urbano</li>
                        <li>2020: 87% urbano</li>
                        <li>Tendência: concentração nas metrópoles</li>
                    </ul>
                    <h4>Megacidades</h4>
                    <p>Cidades com população superior a 10 milhões: Tóquio, Delhi, Xangai, São Paulo, México, Istambul.</p>
                `,
                midia: []
            }
        ],
        quiz: [
            {
                pergunta: "A taxa de crescimento natural é calculada por:",
                opcoes: ["Taxa de natalidade + Taxa de mortalidade", "Taxa de natalidade - Taxa de mortalidade", "Taxa de natalidade × Taxa de mortalidade", "Taxa de natalidade ÷ Taxa de mortalidade"],
                correta: 1,
                explicacao: "A taxa de crescimento natural é a diferença entre natalidade e mortalidade."
            },
            {
                pergunta: "Qual destes é um exemplo de migração interna?",
                opcoes: ["Sírios fugindo para Turquia", "Brasileiros saindo para EUA", "Nordestinos migrando para São Paulo", "Refugiados venezuelanos"],
                correta: 2,
                explicacao: "Migrações internas ocorrem dentro de um país. O êxodo Nordeste-Sudeste é um exemplo clássico."
            },
            {
                pergunta: "Qual porcentagem da população mundial vive em zonas urbanas em 2024?",
                opcoes: ["35%", "45%", "56%", "75%"],
                correta: 2,
                explicacao: "Em 2024, mais de 56% da população mundial vive em cidades."
            },
            {
                pergunta: "Uma megacidade é definida com população superior a:",
                opcoes: ["5 milhões", "10 milhões", "20 milhões", "50 milhões"],
                correta: 1,
                explicacao: "Megacidades têm mais de 10 milhões de habitantes."
            },
            {
                pergunta: "Quais são fatores de repulsão em uma migração?",
                opcoes: ["Emprego e educação", "Segurança", "Pobreza, falta de emprego e guerra", "Qualidade de vida"],
                correta: 2,
                explicacao: "Fatores de repulsão são condições negativas que impulsionam a saída."
            },
            {
                pergunta: "O Brasil passou para maioria urbana em que década?",
                opcoes: ["1950", "1970", "1990", "2010"],
                correta: 1,
                explicacao: "Em 1970, o Brasil atingiu 55% urbano."
            }
        ]
    },

    // ============ 3º ANO - GEOPOLÍTICA E SUSTENTABILIDADE ============
    ano3: {
        descricao: "Geopolítica e Sustentabilidade: Política, Economia e Meio Ambiente",
        aulas: [
            {
                id: "aula-3-1",
                titulo: "Geopolítica Mundial Contemporânea",
                subtitulo: "Poder, recursos e conflitos internacionais",
                conteudo: `
                    <h4>Conceitos de Geopolítica</h4>
                    <p>Geopolítica estuda as relações entre geografia, poder político e conflitos internacionais.</p>
                    <h4>Potências Mundiais</h4>
                    <h4>Superpotência: EUA</h4>
                    <ul>
                        <li>Maior PIB mundial</li>
                        <li>Hegemonia militar e tecnológica</li>
                        <li>Influência cultural e política global</li>
                    </ul>
                    <h4>Potências Emergentes</h4>
                    <ul>
                        <li><strong>China:</strong> segunda economia, ambições na Ásia</li>
                        <li><strong>Rússia:</strong> potência regional, energia</li>
                        <li><strong>Brasil:</strong> liderança na América Latina</li>
                        <li><strong>Índia:</strong> tecnologia e população</li>
                    </ul>
                `,
                midia: []
            },
            {
                id: "aula-3-2",
                titulo: "Recursos Naturais e Sustentabilidade",
                subtitulo: "Água, energia e desafios ambientais",
                conteudo: `
                    <h4>Recursos Naturais</h4>
                    <p>Petróleo, minérios, água doce e florestas não são distribuídos uniformemente globalmente.</p>
                    <h4>Água: O Recurso Mais Precioso</h4>
                    <ul>
                        <li>Apenas 2,5% da água terrestre é doce</li>
                        <li>Crises hídricas afetam 2 bilhões de pessoas</li>
                    </ul>
                    <h4>Energia</h4>
                    <ul>
                        <li><strong>Petróleo:</strong> 84% da energia global</li>
                        <li><strong>Renováveis:</strong> Solar, eólica, hidrelétrica</li>
                    </ul>
                `,
                midia: []
            },
            {
                id: "aula-3-3",
                titulo: "Desenvolvimento Sustentável e Agenda 2030",
                subtitulo: "ODS e o futuro do planeta",
                conteudo: `
                    <h4>Objetivos de Desenvolvimento Sustentável</h4>
                    <p>A ONU estabeleceu 17 ODS para promover desenvolvimento sustentável global até 2030.</p>
                    <h4>Desenvolvimento Sustentável</h4>
                    <p>Desenvolvimento que satisfaz necessidades presentes sem comprometer gerações futuras.</p>
                    <h4>Pilares da Sustentabilidade</h4>
                    <ul>
                        <li><strong>Ambiental:</strong> Preservação de recursos naturais</li>
                        <li><strong>Social:</strong> Equidade, justiça, qualidade de vida</li>
                        <li><strong>Econômico:</strong> Crescimento viável e responsável</li>
                    </ul>
                `,
                midia: []
            }
        ],
        quiz: [
            {
                pergunta: "Qual país é superpotência mundial em 2024?",
                opcoes: ["China", "Rússia", "EUA", "Alemanha"],
                correta: 2,
                explicacao: "Os EUA mantêm hegemonia militar, tecnológica e cultural global."
            },
            {
                pergunta: "Qual porcentagem da água terrestre é doce?",
                opcoes: ["5%", "10%", "2,5%", "15%"],
                correta: 2,
                explicacao: "Apenas 2,5% é água doce, recurso extremamente precioso."
            },
            {
                pergunta: "Principal combustível fóssil global em 2024?",
                opcoes: ["Carvão", "Gás natural", "Petróleo", "Xisto"],
                correta: 2,
                explicacao: "Petróleo representa ~84% da energia primária global."
            },
            {
                pergunta: "Quantos ODS foram estabelecidos pela ONU?",
                opcoes: ["10", "15", "17", "20"],
                correta: 2,
                explicacao: "A Agenda 2030 estabeleceu 17 ODS."
            },
            {
                pergunta: "Principal causa do desflorestamento amazônico?",
                opcoes: ["Conservação", "Agropecuária", "Turismo", "Pesquisa"],
                correta: 1,
                explicacao: "Agropecuária é a principal causa do desflorestamento."
            },
            {
                pergunta: "Aumento de temperatura global desde 1850?",
                opcoes: ["0,5°C", "1,1°C", "2,5°C", "3,0°C"],
                correta: 1,
                explicacao: "Temperatura aumentou ~1,1°C desde 1850."
            }
        ]
    }
};

function getConteudoAno(ano) {
    const mapa = { "ano1": CONTEUDO.ano1, "ano2": CONTEUDO.ano2, "ano3": CONTEUDO.ano3 };
    return mapa[ano] || null;
}

function getAula(ano, aulaId) {
    const conteudo = getConteudoAno(ano);
    return conteudo ? conteudo.aulas.find(aula => aula.id === aulaId) : null;
}

function getQuizAno(ano) {
    const conteudo = getConteudoAno(ano);
    return conteudo ? conteudo.quiz : [];
}

function embaralharQuiz(quiz) {
    return [...quiz].sort(() => Math.random() - 0.5);
}