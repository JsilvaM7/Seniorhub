import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    setPersistence,
    browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// SUAS CREDENCIAIS DO FIREBASE AQUI
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "seu-projeto.firebaseapp.com",
    projectId: "seu-projeto",
    storageBucket: "seu-projeto.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ForÃ§a persistÃªncia local para que o idoso nunca seja deslogado sem querer
setPersistence(auth, browserLocalPersistence);

/* â”€â”€ State Tracking â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
let livroAtual = null; // Guarda a chave do livro aberto (ex: 'energia')
let isUserLoggedIn = false;

onAuthStateChanged(auth, (user) => {
    isUserLoggedIn = !!user;
    // Se o usuÃ¡rio logou e a tela atual for um login/paywall, pode recarregar a tela atual (SPA)
    // Isso garante que se o login for via background (reabertura), o UI se limpe
});

document.addEventListener('DOMContentLoaded', () => {
    loadNewsFeed();
    initAdShowcase();

    document.getElementById('clube-trigger').addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal();
    });
});

/* â”€â”€ Modal â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function toggleModal() {
    document.getElementById('voting-modal').classList.toggle('active');
}

function submitVote(theme) {
    alert(`Voto registrado para: ${theme}! Obrigado por participar.`);
    toggleModal();
}
/* â”€â”€ Funnel helpers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function isLocked(id) {
    if (isUserLoggedIn) return false;
    // 5 free recipes per book; from recipe 6 onward the paywall kicks in
    return id > 5;
}

/* â”€â”€ Navigation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function loadRecipesFeed() {
    livroAtual = null; // Reseta o estado
    loadBooksShowcase();
}

function handleRecipeClick(id) {
    loadRecipe(id);
}

function handleBookClick(bookKey) {
    console.log('Abrindo livro:', bookKey); // Debug: verificar chave recebida
    const viewer = document.getElementById('content-viewer');
    if (viewer) viewer.innerHTML = '';

    if (bookKey) {
        livroAtual = bookKey;
        loadRecipe(1); // Abre sempre a receita 1 do livro clicado
    }
}

/* â”€â”€ Books Showcase Vitrine â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function loadBooksShowcase() {
    const viewer = document.getElementById('content-viewer');
    const wrapper = document.createElement('div');
    wrapper.className = 'recipe-card';
    wrapper.innerHTML = `
        <div style="text-align:center; margin-bottom:36px;">
            <span style="display:inline-block; background:#f1f8f1; color:var(--sage-green); font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:.6px; padding:4px 14px; border-radius:20px; margin-bottom:14px;">Biblioteca SeniorHub</span>
            <h1 style="font-size:28px; font-weight:800; color:#374151; margin-bottom:8px;">Escolha o seu Livro de Receitas</h1>
            <p style="color:var(--text-muted); font-size:15px;">5 coleÃ§Ãµes exclusivas com receitas detalhadas</p>
        </div>
        <div class="books-showcase">
            ${Object.entries(window.BOOKS).map(([num, book]) => `
                <button class="book-showcase-btn" onclick="window.handleBookClick('${book.key}')">
                    <div class="book-info">
                        <div class="book-num">Livro ${num}</div>
                        <div class="book-title">${book.title}</div>
                    </div>
                    <i class="ph ph-caret-right" style="font-size:22px; color:var(--sage-green); flex-shrink:0;"></i>
                </button>
            `).join('')}
        </div>
    `;
    swapContent(viewer, wrapper);
}

/* â”€â”€ Book Summary View â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function loadBookSummary() {
    if (!livroAtual) return;

    const viewer = document.getElementById('content-viewer');
    const bookMeta = Object.values(window.BOOKS).find(b => b.key === livroAtual);
    const bookArr = window.biblioteca[livroAtual] || [];

    const wrapper = document.createElement('div');
    wrapper.className = 'recipe-card';
    wrapper.innerHTML = `
        <p style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:.6px;
                  color:var(--sage-green); margin-bottom:16px; cursor:pointer;"
           onclick="event.preventDefault(); window.loadBooksShowcase()">â† Vitrine de Livros</p>
        <h1 class="recipe-title" style="font-size:26px; margin-bottom:6px;">${bookMeta ? bookMeta.title : 'SumÃ¡rio'}</h1>
        <p style="text-align:center; color:var(--text-muted); font-size:14px; margin-bottom:32px;">
            50 receitas â€” clique em qualquer tÃ­tulo para explorar
        </p>

        <div style="border-top:2px solid var(--sage-green); padding-top:24px;">
            <h2 style="font-size:13px; font-weight:700; text-transform:uppercase;
                       letter-spacing:.6px; color:var(--sage-green-dark); margin-bottom:14px;">
                SumÃ¡rio da ColeÃ§Ã£o
            </h2>
            <ol class="recipe-summary-grid">
                ${bookArr.map(r => {
        const pos = String(r.id).padStart(2, '0');
        return `<li class="summary-item">
                        <a class="summary-link" onclick="window.handleRecipeClick(${r.id}); event.preventDefault(); return false;" href="#">
                            <span class="summary-num">${pos}.</span>${r.title}
                        </a>
                    </li>`;
    }).join('')}
            </ol>
        </div>
    `;

    swapContent(viewer, wrapper);
}

/* â”€â”€ Recipe Detail View â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function loadRecipe(id) {
    id = parseInt(id, 10);
    if (!livroAtual) return;

    const viewer = document.getElementById('content-viewer');
    const wrapper = document.createElement('div');
    wrapper.className = 'recipe-card';

    const bookMeta = Object.values(window.BOOKS).find(b => b.key === livroAtual);

    if (isLocked(id)) {
        // Receita 6+ do livro em questÃ£o
        wrapper.innerHTML = renderPaywallHTML(bookMeta);
    } else {
        const bookArr = window.biblioteca[livroAtual] || [];
        const recipe = bookArr.find(r => r.id === id);

        if (!recipe) {
            wrapper.innerHTML = `<p style="padding:40px; text-align:center; color:var(--text-muted)">Receita nÃ£o encontrada neste livro.</p>`;
        } else {
            wrapper.innerHTML = renderRecipeHTML(recipe, bookMeta);
        }
    }

    swapContent(viewer, wrapper);
}


/* â”€â”€ Firebase Auth UI Injector â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
window.loadLoginScreen = function () {
    const viewer = document.getElementById('content-viewer');
    const wrapper = document.createElement('div');
    wrapper.className = 'recipe-card';

    wrapper.innerHTML = `
        <div style="max-width:400px; margin: 0 auto; padding: 32px 16px; text-align:center;">
            <p style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:.6px;
                      color:var(--sage-green); margin-bottom:24px; cursor:pointer;"
               onclick="event.preventDefault(); loadBooksShowcase()">
                â† Voltar para a Vitrine
            </p>
            <i class="ph ph-lock-key-open" style="font-size:48px; color:var(--sage-green); margin-bottom:16px;"></i>
            <h2 style="font-size:26px; color:var(--sage-green-dark); margin-bottom:8px;">Acesso de Membro</h2>
            <p style="font-size:16px; color:var(--text-muted); margin-bottom:32px; line-height:1.5;">
                Insira seu e-mail e senha para desbloquear sua biblioteca digital instantaneamente.
            </p>

            <form id="firebase-login-form" style="display:flex; flex-direction:column; gap:16px;">
                <input type="email" id="loginEmail" placeholder="Seu e-mail" required
                       style="min-height: 48px; font-size: 18px; padding: 12px; border-radius: 8px; border: 1px solid #ccc; width: 100%; box-sizing: border-box;">
                
                <input type="password" id="loginPassword" placeholder="Sua senha" required
                       style="min-height: 48px; font-size: 18px; padding: 12px; border-radius: 8px; border: 1px solid #ccc; width: 100%; box-sizing: border-box;">

                <div id="loginErrorMsg" style="color: #dc2626; font-size: 14px; display: none; margin-top: -8px;"></div>

                <button type="submit" class="promo-btn" style="min-height: 48px; font-size: 18px; padding: 12px; background: var(--sage-green); color: white; width: 100%; margin-top:8px;">
                    Entrar e Acessar
                </button>
            </form>
        </div>
    `;

    swapContent(viewer, wrapper);

    // Attach form handler
    document.getElementById('firebase-login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const pass = document.getElementById('loginPassword').value;
        const errMsg = document.getElementById('loginErrorMsg');
        const btn = e.target.querySelector('button');

        btn.innerText = "Verificando...";
        btn.style.opacity = "0.7";
        errMsg.style.display = "none";

        signInWithEmailAndPassword(auth, email, pass)
            .then(() => {
                // Acesso MÃ¡gico (Efeito Derreter/Fade-in Suave)
                viewer.style.transition = "opacity 0.8s ease-in-out";
                viewer.style.opacity = 0;
                setTimeout(() => {
                    // isUserLoggedIn jÃ¡ true, receita Ã© liberada
                    loadRecipe(6);
                    viewer.style.opacity = 1;
                }, 800);
            })
            .catch((err) => {
                btn.innerText = "Entrar e Acessar";
                btn.style.opacity = "1";
                errMsg.innerText = "E-mail ou senha invÃ¡lidos. Tente novamente.";
                errMsg.style.display = "block";
            });
    });
}

/* â”€â”€ Swap helper (reusable slide-out + unroll-in) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function swapContent(viewer, newEl) {
    // Scrola a tela para o topo do conteÃºdo de forma suave, mas rÃ¡pida
    window.scrollTo({
        top: Math.max(0, viewer.offsetTop - 80),
        behavior: 'smooth'
    });

    // Limpa imediatamente o conteÃºdo do viewer e injeta o novo de forma estÃ¡tica
    viewer.innerHTML = '';
    viewer.appendChild(newEl);
}

/* â”€â”€ Recipe HTML renderer â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
// bookMeta passados para montar os botÃµes de navegaÃ§Ã£o corretos.
function renderRecipeHTML(recipe, bookMeta) {
    // Suporte aos dois schemas de campo (Livro 1: prepTime/steps; Livro 2+: time/instructions)
    const tempo = recipe.prepTime || recipe.time || 'â€”';
    const passos = recipe.steps || recipe.instructions || [];
    const nextId = recipe.id + 1;
    const totalNoLivro = (window.biblioteca[livroAtual] || []).length;
    const nextIsLast = nextId > totalNoLivro;

    const nextBtn = nextIsLast
        ? ''  // jÃ¡ Ã© a Ãºltima receita do livro
        : `<button onclick="event.preventDefault(); window.handleRecipeClick(${nextId})" class="promo-btn next-recipe-btn"
                   style="margin:0; padding:12px 24px; font-size:15px;">PrÃ³xima Receita â†’</button>`;

    return `
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:24px; gap:20px;">
            <div>
                <p style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:.6px;
                          color:var(--sage-green); margin-bottom:8px; cursor:pointer;"
                   onclick="event.preventDefault(); window.loadBooksShowcase()">
                    â† Vitrine de Livros
                </p>
                <h1 class="recipe-title" style="margin-bottom:0; text-align:left;">${recipe.title}</h1>
            </div>
            <button onclick="event.preventDefault(); window.loadBookSummary()" title="Ver todas as receitas"
                    style="white-space:nowrap; background:none; border:1.5px solid var(--sage-green);
                           border-radius:10px; cursor:pointer; color:var(--sage-green); display:flex;
                           align-items:center; gap:6px; font-weight:600; font-size:13px;
                           padding:8px 14px; flex-shrink:0; margin-top:4px;">
                <i class="ph ph-list-dashes" style="font-size:18px;"></i> SumÃ¡rio da ColeÃ§Ã£o
            </button>
        </div>

        <div style="display:inline-flex; align-items:center; gap:10px; background:#f1f8f1;
                    border:1px solid var(--sage-green); border-radius:12px;
                    padding:10px 22px; margin-bottom:36px;">
            <i class="ph ph-timer" style="font-size:22px; color:var(--sage-green);"></i>
            <div>
                <div style="font-size:11px; text-transform:uppercase; letter-spacing:.5px;
                            color:var(--sage-green-dark); font-weight:700;">Tempo de Preparo</div>
                <div style="font-size:18px; font-weight:800; color:var(--text-dark);">${tempo}</div>
            </div>
        </div>

        <div class="nossa-cozinha-box">
            <div>
                <h4 class="section-title">Ingredientes NecessÃ¡rios</h4>
                <ul class="check-list">
                    ${recipe.ingredients.map(i => `<li><span class="check-item-icon">âœ“</span> ${i}</li>`).join('')}
                </ul>
            </div>
            <div>
                <h4 class="section-title">UtensÃ­lios da FamÃ­lia</h4>
                <ul class="check-list">
                    ${recipe.utensils.map(u => `<li><span class="check-item-icon">â—</span> ${u}</li>`).join('')}
                </ul>
            </div>
        </div>

        <div class="preparo-section">
            <h3>Modo de Preparo</h3>
            <div class="preparo-steps">
                ${passos.map((step, i) => `
                    <div class="step-card">
                        <p class="step-text"><strong>Passo ${i + 1}:</strong> ${step}</p>
                    </div>
                `).join('')}
            </div>
        </div>

        <div style="display:flex; gap:12px; margin-top:36px; justify-content:center; flex-wrap:wrap;">
            <button onclick="event.preventDefault(); window.loadBooksShowcase()" class="promo-btn"
                    style="margin:0; padding:12px 24px; font-size:15px; background:#e8f0ea; color:var(--sage-green-dark);">â† Vitrine de Livros</button>
            ${nextBtn}
        </div>
    `;
}

/* â”€â”€ Global Paywall (after 5 reads across all books) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function renderGlobalPaywallHTML() {
    return `
        <p style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:.6px;
                  color:var(--sage-green); margin-bottom:24px; cursor:pointer;"
           onclick="event.preventDefault(); window.loadBooksShowcase()">
            â† Vitrine de Livros
        </p>
        <div class="promo-banner" style="margin-top:0; padding:52px 40px;">
            <div style="font-size:48px; margin-bottom:16px;">ðŸ“š</div>
            <span style="display:inline-block; background:#f1f8f1; color:var(--sage-green); font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:.5px; padding:4px 14px; border-radius:20px; margin-bottom:20px;">Acesso Completo</span>
            <h2 style="font-size:26px; margin-bottom:20px; line-height:1.35; color:var(--sage-green-dark);">
                VocÃª explorou suas 5 receitas gratuitas!
            </h2>
            <p style="font-size:17px; color:var(--text-muted); max-width:500px; margin:0 auto 12px; line-height:1.7;">
                Adquira qualquer um dos nossos <strong style="color:var(--sage-green-dark);">5 livros digitais</strong>
                com <strong style="color:var(--sage-green-dark);">50 receitas cada</strong> em PDF especial para imprimir e colecionar.
            </p>
            <div style="font-size:38px; font-weight:900; color:var(--sage-green); margin-bottom:8px;">R$ 19,90</div>
            <div style="font-size:13px; color:var(--text-muted); margin-bottom:32px;">por livro Â· acesso imediato Â· PDF pronto para impressÃ£o</div>
            <a href="#" class="promo-btn" style="background-color:var(--sage-green); color:white; font-size:17px; padding:16px 48px;">
                Quero meu Livro em PDF â†’
            </a>
            <p style="margin-top:20px; font-size:14px; color:var(--text-muted);">JÃ¡ Ã© membro? <a href="#" id="open-login" onclick="event.preventDefault(); window.loadLoginScreen()" style="color:var(--sage-green); font-weight:700; text-decoration:underline;">Acesse sua conta aqui</a></p>
            
            <p style="font-size:12px; color:var(--text-muted); margin-top:24px;">
                âœ“ Acesso imediato &nbsp;Â·&nbsp; âœ“ PDF alta qualidade &nbsp;Â·&nbsp; âœ“ 50 receitas exclusivas
            </p>
        </div>
    `;
}

/* â”€â”€ Per-book Paywall banner (recipe #6+ in each book) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function renderPaywallHTML(book) {
    const bookTitle = book ? book.title : 'nosso livro completo';
    return `
        <p style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:.6px;
                  color:var(--sage-green); margin-bottom:24px; cursor:pointer;"
           onclick="event.preventDefault(); window.loadBooksShowcase()">
            â† Vitrine de Livros
        </p>
        <div class="promo-banner" style="margin-top:0; padding:52px 40px;">
            <div style="font-size:48px; margin-bottom:16px;">ðŸ“–</div>
            <h2 style="font-size:24px; margin-bottom:16px; line-height:1.35; color:var(--sage-green-dark);">
                Gostou do conteÃºdo?
            </h2>
            <p style="font-size:17px; color:var(--text-muted); max-width:500px; margin:0 auto 28px; line-height:1.8;">
                Adquira o Livro Completo <strong style="color:var(--text-dark);">"${bookTitle}"</strong>
                com as <strong style="color:var(--sage-green-dark);">50 receitas em PDF para imprimir</strong>
                por apenas
            </p>
            <div style="font-size:42px; font-weight:900; color:var(--sage-green); margin-bottom:6px; letter-spacing:-1px;">R$ 19,90</div>
            <div style="font-size:13px; color:var(--text-muted); margin-bottom:32px;">acesso imediato Â· PDF de alta qualidade Â· pronto para impressÃ£o</div>
            <a href="#" class="promo-btn next-recipe-btn" style="font-size:17px; padding:16px 48px; display:inline-block; margin-top:0;">
                Quero meu Livro em PDF â†’
            </a>
            <p style="margin-top:20px; font-size:14px; color:var(--text-muted);">JÃ¡ Ã© membro? <a href="#" id="open-login" onclick="event.preventDefault(); window.loadLoginScreen()" style="color:var(--sage-green); font-weight:700; text-decoration:underline;">Acesse sua conta aqui</a></p>
            
            <p style="font-size:12px; color:var(--text-muted); margin-top:24px;">
                âœ“ Pagamento seguro &nbsp;Â·&nbsp; âœ“ PDF enviado por e-mail &nbsp;Â·&nbsp; âœ“ 50 receitas completas
            </p>
        </div>
    `;
}


/* â”€â”€ News Feed â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const newsItems = [
    {
        id: 'n1', category: 'SaÃºde',
        title: '5 Receitas de Sopas que Fortalecem a Imunidade no Inverno',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
        description: 'Descubra como ingredientes simples como gengibre e abÃ³bora podem ser seus melhores aliados.',
        type: 'recipe_teaser'
    },
    {
        id: 'n2', category: 'ExercÃ­cios',
        title: 'Mobilidade em Casa: 3 ExercÃ­cios Simples para ComeÃ§ar o Dia',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
        description: 'Manter as articulaÃ§Ãµes saudÃ¡veis Ã© o segredo para uma vida ativa e sem dores.',
        type: 'article'
    },
    {
        id: 'n3', category: 'Conforto do Lar',
        title: 'A Nova Era das Poltronas ErgonÃ´micas: Design e SaÃºde',
        image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800',
        description: 'ConheÃ§a as tecnologias que estÃ£o transformando o descanso na terceira idade.',
        type: 'tech'
    },
    {
        id: 'n4', category: 'Viagens',
        title: 'Destinos de Inverno: Portugal AlÃ©m de Lisboa e Porto',
        image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&q=80&w=800',
        description: 'Vilarejos histÃ³ricos e gastronomia acolhedora esperam por vocÃª nesta temporada.',
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
                <a href="#" class="clube-btn" onclick="handleNewsClick('${item.id}'); return false;">Continuar Lendo â†’</a>
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
        alert('Este artigo completo estÃ¡ disponÃ­vel exclusivamente para membros do Clube SeniorHub!');
    }
}

/* â”€â”€ Advertising Showcase â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const ads = [
    {
        title: "Biblioteca Completa â€” 5 Livros PDF", price: "R$ 89,90",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=400",
        link: "#", btnText: "Comprar ColeÃ§Ã£o"
    },
    {
        title: "Poltrona Relax Premium", price: "R$ 890,00",
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=400",
        link: "#", btnText: "Ver Detalhes"
    },
    {
        title: "Massageador de PÃ©s Pro", price: "R$ 249,00",
        image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=400",
        link: "#", btnText: "Quero Conforto"
    },
    {
        title: "Kit Cozinha PrÃ¡tica 60+", price: "R$ 159,90",
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

/* â”€â”€ Global Exports para Acesso do index.html (ES Module fix) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
window.loadNewsFeed = loadNewsFeed;
window.submitVote = submitVote;
window.toggleModal = toggleModal;
window.handleBookClick = handleBookClick;
window.loadBookSummary = loadBookSummary;
window.handleRecipeClick = handleRecipeClick;
window.handleNewsClick = handleNewsClick;
window.loadBooksShowcase = loadBooksShowcase;

window.loadRecipesFeed = function () {
    const viewer = document.getElementById('content-viewer');
    if (viewer) viewer.innerHTML = '';
    loadBooksShowcase();
};

// â”€â”€ Debug: Confirmar que os dados chegaram ao browser â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Remova estas linhas quando confirmar que estÃ¡ tudo a funcionar.
document.addEventListener('DOMContentLoaded', () => {
    console.dir(window.biblioteca);
    console.log('[livro2 receitas carregadas]:', window.biblioteca?.livro2?.length ?? 'NÃƒO ENCONTRADO');
});

