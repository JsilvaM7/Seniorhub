document.addEventListener('DOMContentLoaded', () => {
    loadNewsFeed();
    initAdShowcase();

    document.getElementById('clube-trigger').addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal();
    });
});

/* ── Modal ──────────────────────────────────────────────────────────────────── */
function toggleModal() {
    document.getElementById('voting-modal').classList.toggle('active');
}

function submitVote(theme) {
    alert(`Voto registrado para: ${theme}! Obrigado por participar.`);
    toggleModal();
}

/* ── Funnel helpers ─────────────────────────────────────────────────────────── */
function getPositionInBook(id) {
    const book = getBookByRecipeId(id);
    if (!book) return id;
    return id - book.idRange[0] + 1;
}

function isLocked(id) {
    return getPositionInBook(id) > 5;
}

/* ── Navigation ─────────────────────────────────────────────────────────────── */
function loadRecipesFeed() {
    loadBookSummary(1);
}

function handleRecipeClick(id) {
    loadRecipe(id);
}

/* ── Book Summary View ──────────────────────────────────────────────────────── */
function loadBookSummary(bookId) {
    const viewer = document.getElementById('content-viewer');
    const book = BOOKS[bookId];
    const [start, end] = book.idRange;
    const bookRecipes = recipes.filter(r => r.id >= start && r.id <= end)
        .sort((a, b) => a.id - b.id);

    const wrapper = document.createElement('div');
    wrapper.className = 'recipe-card content-unroll';
    wrapper.innerHTML = `
        <h1 class="recipe-title" style="font-size:26px; margin-bottom:6px;">${book.title}</h1>
        <p style="text-align:center; color:var(--text-muted); font-size:14px; margin-bottom:32px;">
            50 receitas — clique em qualquer título para explorar
        </p>

        <div style="border-top:2px solid var(--sage-green); padding-top:24px;">
            <h2 style="font-size:13px; font-weight:700; text-transform:uppercase;
                       letter-spacing:.6px; color:var(--sage-green-dark); margin-bottom:14px;">
                Sumário da Coleção
            </h2>
            <ol class="recipe-summary-grid">
                ${bookRecipes.map(r => {
        const pos = String(getPositionInBook(r.id)).padStart(2, '0');
        return `<li class="summary-item">
                        <a class="summary-link" onclick="handleRecipeClick(${r.id}); return false;" href="#">
                            <span class="summary-num">${pos}.</span>${r.title}
                        </a>
                    </li>`;
    }).join('')}
            </ol>
        </div>
    `;

    swapContent(viewer, wrapper);
}

/* ── Recipe Detail View ─────────────────────────────────────────────────────── */
function loadRecipe(id) {
    const recipe = recipes.find(r => r.id === id);
    const viewer = document.getElementById('content-viewer');
    const wrapper = document.createElement('div');
    wrapper.className = 'recipe-card content-unroll';

    wrapper.innerHTML = isLocked(id)
        ? renderLockedPreviewHTML(recipe)
        : renderRecipeHTML(recipe);

    swapContent(viewer, wrapper);
}

/* ── Locked Recipe: title visible + elegant engagement card ─────────────────── */
function renderLockedPreviewHTML(recipe) {
    const book = getBookByRecipeId(recipe.id);
    const pos = String(getPositionInBook(recipe.id)).padStart(2, '0');

    return `
        <p style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:.6px;
                  color:var(--sage-green); margin-bottom:16px; cursor:pointer;"
           onclick="loadBookSummary(${book.number})">
            ← ${book.title}
        </p>

        <h1 class="recipe-title" style="margin-bottom:20px;">${pos}. ${recipe.title}</h1>

        <div style="display:inline-flex; align-items:center; gap:10px; background:#f1f8f1;
                    border:1px solid var(--sage-green); border-radius:12px;
                    padding:10px 22px; margin-bottom:36px;
                    filter:blur(3.5px); user-select:none; pointer-events:none; opacity:.7;">
            <span style="font-size:18px;">⏱</span>
            <div>
                <div style="font-size:11px; text-transform:uppercase; letter-spacing:.5px;
                            color:var(--sage-green-dark); font-weight:700;">Tempo de Preparo</div>
                <div style="font-size:18px; font-weight:800; color:var(--text-dark);">XX minutos</div>
            </div>
        </div>

        <div class="locked-card">
            <div class="locked-card__icon">🔒</div>
            <h3 class="locked-card__title">
                Esta é uma das 45 relíquias guardadas para nossos membros especiais.
            </h3>
            <p class="locked-card__text">
                Para visualizar o passo a passo completo e ter o livro digital para imprimir,
                adquira a coleção completa.
            </p>
            <a href="#" class="locked-card__btn">
                Liberar Receita e Baixar PDF — R$ 19,90
            </a>
            <p style="font-size:11px; color:var(--text-muted); margin-top:14px;">
                Acesso imediato · PDF de alta qualidade · Todas as 50 receitas
            </p>
        </div>
    `;
}

/* ── Swap helper (reusable slide-out + unroll-in) ───────────────────────────── */
function swapContent(viewer, newEl) {
    const current = viewer.querySelector('.recipe-card') || viewer.querySelector('.slide-in-right');
    if (current) {
        current.classList.add('slide-out-left');
        setTimeout(() => { current.remove(); viewer.appendChild(newEl); }, 420);
    } else {
        viewer.appendChild(newEl);
    }
}

/* ── Recipe HTML renderer ───────────────────────────────────────────────────── */
function renderRecipeHTML(recipe) {
    const book = getBookByRecipeId(recipe.id);
    const posInBook = getPositionInBook(recipe.id);
    const isLast = posInBook === 5;

    return `
        <p style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:.6px;
                  color:var(--sage-green); margin-bottom:8px; cursor:pointer;"
           onclick="loadBookSummary(${book.number})">
            ← ${book.title}
        </p>

        <!-- 1. Recipe title -->
        <h1 class="recipe-title" style="margin-bottom:16px;">${recipe.title}</h1>

        <!-- 2. Prep time — immediate highlight -->
        <div style="display:inline-flex; align-items:center; gap:10px; background:#f1f8f1;
                    border:1px solid var(--sage-green); border-radius:12px;
                    padding:10px 22px; margin-bottom:36px;">
            <span style="font-size:18px;">⏱</span>
            <div>
                <div style="font-size:11px; text-transform:uppercase; letter-spacing:.5px;
                            color:var(--sage-green-dark); font-weight:700;">Tempo de Preparo</div>
                <div style="font-size:18px; font-weight:800; color:var(--text-dark);">${recipe.prepTime}</div>
            </div>
        </div>

        <!-- 3. Ingredients + Utensils grid -->
        <div class="nossa-cozinha-box">
            <div>
                <h4 class="section-title">Ingredientes Necessários</h4>
                <ul class="check-list">
                    ${recipe.ingredients.map(i => `<li><span class="check-item-icon">✓</span> ${i}</li>`).join('')}
                </ul>
            </div>
            <div>
                <h4 class="section-title">Utensílios da Família</h4>
                <ul class="check-list">
                    ${recipe.utensils.map(u => `<li><span class="check-item-icon">◍</span> ${u}</li>`).join('')}
                </ul>
            </div>
        </div>

        <!-- 4. Preparation steps -->
        <div class="preparo-section">
            <h3>Modo de Preparo</h3>
            <div class="preparo-steps">
                ${recipe.steps.map((step, i) => `
                    <div class="step-card">
                        <p class="step-text"><strong>Passo ${i + 1}:</strong> ${step}</p>
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- Footer navigation -->
        <div style="display:flex; gap:12px; margin-top:36px; justify-content:center; flex-wrap:wrap;">
            ${recipe.id > book.idRange[0]
            ? `<button onclick="handleRecipeClick(${recipe.id - 1})" class="promo-btn" style="margin:0; padding:12px 24px; font-size:15px;">← Receita anterior</button>`
            : `<button onclick="loadBookSummary(${book.number})" class="promo-btn" style="margin:0; padding:12px 24px; font-size:15px;">← Ver Sumário</button>`
        }
            ${isLast
            ? `<button onclick="handleRecipeClick(${recipe.id + 1})" class="promo-btn"
                          style="margin:0; padding:12px 24px; font-size:15px; background:var(--sage-green-dark);">
                       Ver oferta especial →
                   </button>`
            : `<button onclick="handleRecipeClick(${recipe.id + 1})" class="promo-btn"
                          style="margin:0; padding:12px 24px; font-size:15px;">
                       Próxima receita →
                   </button>`
        }
        </div>
    `;
}

/* ── Paywall banner ─────────────────────────────────────────────────────────── */
function renderPaywallHTML(book) {
    const bookTitle = book ? book.title : 'nosso livro completo';
    return `
        <p style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:.6px;
                  color:var(--sage-green); margin-bottom:24px; cursor:pointer;"
           onclick="loadBookSummary(${book ? book.number : 1})">
            ← ${bookTitle}
        </p>

        <div class="promo-banner" style="margin-top:0; padding:48px 40px;">
            <div style="font-size:44px; margin-bottom:16px;">🔒</div>
            <h2 style="font-size:24px; margin-bottom:20px; line-height:1.35;">
                Gostou dessas amostras?
            </h2>
            <p style="font-size:17px; color:var(--text-muted); max-width:480px; margin:0 auto 28px; line-height:1.7;">
                Adquira o livro completo <strong style="color:var(--sage-green-dark);">"${bookTitle}"</strong>
                com todas as 50 receitas em um PDF especial para você imprimir e colecionar.
            </p>
            <div style="font-size:36px; font-weight:900; color:var(--sage-green); margin-bottom:28px;">
                R$ 19,90
            </div>
            <a href="#" class="promo-btn" style="background-color:var(--sage-green); color:white;
                                                  font-size:17px; padding:16px 48px;">
                Quero meu Livro em PDF →
            </a>
            <p style="font-size:12px; color:var(--text-muted); margin-top:24px;">
                Acesso imediato após o pagamento. PDF de alta qualidade, pronto para impressão.
            </p>
        </div>
    `;
}

/* ── News Feed ──────────────────────────────────────────────────────────────── */
const newsItems = [
    {
        id: 'n1', category: 'Saúde',
        title: '5 Receitas de Sopas que Fortalecem a Imunidade no Inverno',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
        description: 'Descubra como ingredientes simples como gengibre e abóbora podem ser seus melhores aliados.',
        type: 'recipe_teaser'
    },
    {
        id: 'n2', category: 'Exercícios',
        title: 'Mobilidade em Casa: 3 Exercícios Simples para Começar o Dia',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
        description: 'Manter as articulações saudáveis é o segredo para uma vida ativa e sem dores.',
        type: 'article'
    },
    {
        id: 'n3', category: 'Conforto do Lar',
        title: 'A Nova Era das Poltronas Ergonômicas: Design e Saúde',
        image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800',
        description: 'Conheça as tecnologias que estão transformando o descanso na terceira idade.',
        type: 'tech'
    },
    {
        id: 'n4', category: 'Viagens',
        title: 'Destinos de Inverno: Portugal Além de Lisboa e Porto',
        image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&q=80&w=800',
        description: 'Vilarejos históricos e gastronomia acolhedora esperam por você nesta temporada.',
        type: 'article'
    }
];

function loadNewsFeed() {
    const viewer = document.getElementById('content-viewer');
    viewer.innerHTML = '';
    const feed = document.createElement('div');
    feed.className = 'slide-in-right';

    newsItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'news-card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="news-image">
            <div class="news-content">
                <span class="news-category">${item.category}</span>
                <h2 class="news-header-title">${item.title}</h2>
                <p style="color:var(--text-muted); margin-bottom:24px;">${item.description}</p>
                <a href="#" class="clube-btn" onclick="handleNewsClick('${item.id}'); return false;">Continuar Lendo →</a>
            </div>
        `;
        feed.appendChild(card);
    });

    viewer.appendChild(feed);
}

function handleNewsClick(newsId) {
    const item = newsItems.find(n => n.id === newsId);
    if (item.type === 'recipe_teaser') {
        loadRecipesFeed();
    } else {
        alert('Este artigo completo está disponível exclusivamente para membros do Clube SeniorHub!');
    }
}

/* ── Advertising Showcase ───────────────────────────────────────────────────── */
const ads = [
    {
        title: "Trilogia Completa (PDFs)", price: "R$ 47,90",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=400",
        link: "#", btnText: "Comprar Trilogia"
    },
    {
        title: "Poltrona Relax Premium", price: "R$ 890,00",
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=400",
        link: "#", btnText: "Ver Detalhes"
    },
    {
        title: "Massageador de Pés Pro", price: "R$ 249,00",
        image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=400",
        link: "#", btnText: "Quero Conforto"
    },
    {
        title: "Kit Cozinha Prática 60+", price: "R$ 159,90",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=400",
        link: "#", btnText: "Ver Oferta"
    }
];

let currentAdIndex = 0;

function initAdShowcase() {
    renderAd();
    setInterval(() => {
        currentAdIndex = (currentAdIndex + 1) % ads.length;
        renderAd();
    }, 30000);
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
