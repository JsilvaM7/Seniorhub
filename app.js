document.addEventListener('DOMContentLoaded', () => {
    loadNewsFeed(); // Start with the news portal feed
    initAdShowcase(); // Start rotation

    // Attach modal trigger
    document.getElementById('clube-trigger').addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal();
    });
});

/* Modal Logic */
function toggleModal() {
    const modal = document.getElementById('voting-modal');
    modal.classList.toggle('active');
}

function submitVote(theme) {
    alert(`Voto registrado para: ${theme}! Obrigado por participar.`);
    toggleModal();
}

/* Advertising Showcase Logic */
const ads = [
    {
        title: "Coleção 50 Receitas (PDF)",
        price: "R$ 19,99",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=400",
        link: "#",
        btnText: "Comprar Agora"
    },
    {
        title: "Poltrona Relax Premium",
        price: "R$ 890,00",
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=400",
        link: "#",
        btnText: "Ver Detalhes"
    },
    {
        title: "Massageador de Pés Pro",
        price: "R$ 249,00",
        image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=400",
        link: "#",
        btnText: "Quero Conforto"
    },
    {
        title: "Kit Cozinha Prática 60+",
        price: "R$ 159,90",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=400",
        link: "#",
        btnText: "Ver Oferta"
    }
];

let currentAdIndex = 0;

function initAdShowcase() {
    renderAd();
    setInterval(() => {
        currentAdIndex = (currentAdIndex + 1) % ads.length;
        renderAd();
    }, 30000); // 30 seconds
}

function renderAd() {
    const container = document.getElementById('ad-showcase-root');
    const ad = ads[currentAdIndex];

    container.innerHTML = `
        <div class="ad-showcase fade-in">
            <img src="${ad.image}" alt="${ad.title}" class="ad-image">
            <div class="ad-content">
                <h4 class="ad-title">${ad.title}</h4>
                <span class="ad-price">${ad.price}</span>
                <a href="${ad.link}" class="ad-btn">${ad.btnText}</a>
            </div>
        </div>
    `;
}

/* News Feed Logic */
const newsItems = [
    {
        id: 'n1',
        category: 'Saúde',
        title: '5 Receitas de Sopas que Fortalecem a Imunidade no Inverno',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
        description: 'Descubra como ingredientes simples como gengibre e abóbora podem ser seus melhores aliados.',
        type: 'recipe_teaser',
        targetId: 1
    },
    {
        id: 'n2',
        category: 'Exercícios',
        title: 'Mobilidade em Casa: 3 Exercícios Simples para Começar o Dia',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
        description: 'Manter as articulações saudáveis é o segredo para uma vida ativa e sem dores.',
        type: 'article'
    },
    {
        id: 'n3',
        category: 'Conforto do Lar',
        title: 'A Nova Era das Poltronas Ergonômicas: Design e Saúde Bucal?',
        image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800',
        description: 'Conheça as tecnologias que estão transformando o descanso na terceira idade.',
        type: 'tech'
    },
    {
        id: 'n4',
        category: 'Viagens',
        title: 'Destinos de Inverno: Portugal Além de Lisboa e Porto',
        image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&q=80&w=800',
        description: 'Vilarejos históricos e gastronomia acolhedora esperam por você nesta temporada.',
        type: 'article'
    }
];

function loadNewsFeed() {
    const viewer = document.getElementById('content-viewer');
    viewer.innerHTML = '';

    const feedContainer = document.createElement('div');
    feedContainer.className = 'slide-in-right';

    newsItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'news-card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="news-image">
            <div class="news-content">
                <span class="news-category">${item.category}</span>
                <h2 class="news-header-title">${item.title}</h2>
                <p style="color: var(--text-muted); margin-bottom: 24px;">${item.description}</p>
                <a href="#" class="clube-btn" onclick="handleNewsClick('${item.id}')">Continuar Lendo →</a>
            </div>
        `;
        feedContainer.appendChild(card);
    });

    viewer.appendChild(feedContainer);
}

function handleNewsClick(newsId) {
    const item = newsItems.find(n => n.id === newsId);
    if (item.type === 'recipe_teaser') {
        loadRecipesFeed();
    } else {
        alert('Este artigo completo está disponível exclusivamente para membros do Clube SeniorHub!');
    }
}

function loadRecipesFeed() {
    loadRecipe(1);
}

function handleRecipeClick(id) {
    if (id > 5) {
        loadRecipe(5);
    } else {
        loadRecipe(id);
    }
}

function loadRecipe(id) {
    const recipe = recipes.find(r => r.id === id);
    const viewer = document.getElementById('content-viewer');

    const newContent = document.createElement('div');
    newContent.className = 'recipe-card slide-in-right';
    newContent.innerHTML = renderRecipeHTML(recipe);

    const currentContent = viewer.querySelector('.recipe-card') || viewer.querySelector('.slide-in-right');
    if (currentContent) {
        currentContent.classList.add('slide-out-left');
        setTimeout(() => {
            currentContent.remove();
            viewer.appendChild(newContent);
        }, 500);
    } else {
        viewer.appendChild(newContent);
    }
}

function renderRecipeHTML(recipe) {
    let html = `
        <h1 class="recipe-title">${recipe.title}</h1>
        
        <div class="nossa-cozinha-box">
            <div>
                <h4 class="section-title">Ingredientes Necessários</h4>
                <ul class="check-list">
                    ${recipe.ingredients.map(item => `<li><span class="check-item-icon">✓</span> ${item}</li>`).join('')}
                </ul>
            </div>
            <div>
                <h4 class="section-title">Utensílios da Família</h4>
                <ul class="check-list">
                    ${recipe.utensils.map(item => `<li><span class="check-item-icon">◍</span> ${item}</li>`).join('')}
                </ul>
            </div>
        </div>

        <div class="preparo-section">
            <h3>Modo de Preparo</h3>
            <div class="preparo-steps">
                ${recipe.steps.map((step, index) => `
                    <div class="step-card">
                        <p class="step-text"><strong>Passo ${index + 1}:</strong> ${step}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    if (recipe.id === 5) {
        html += `
            <div class="promo-banner">
                <h2>Parabéns por concluir nossa jornada inicial!</h2>
                <p>Você concluiu as 5 receitas da nossa família. Garanta o livro completo com as 50 receitas em PDF por apenas <strong>R$ 19,99</strong> para continuar nossa jornada saudável.</p>
                <a href="#" class="promo-btn" style="background-color: var(--sage-green); color: white;">Quero meu Livro Completo (PDF)</a>
            </div>
        `;
    }

    return html;
}
