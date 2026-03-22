/* ══════════════════════════════════════════════════════════════════════════════
   SeniorHub — Auth + Sidebar  |  v7.0
   ══════════════════════════════════════════════════════════════════════════════ */

window.CLUBE_CHECKOUT_URL = window.CLUBE_CHECKOUT_URL || 'https://pay.hotmart.com/Y104973165O';

var _currentUser = null;
var fbAuth       = null;
var fbProvider   = null;

/* ══════════════════════════════════════════════════════════════════════════════
   SIDEBAR — definida PRIMEIRO, disponível antes de tudo
   ══════════════════════════════════════════════════════════════════════════════ */
function _criarSideBar() {
    if (document.getElementById('login-sidebar')) return;
    var ov = document.createElement('div');
    ov.id = 'login-overlay';
    ov.onclick = function() { window.fecharSideBar(); };
    document.body.appendChild(ov);
    var sb = document.createElement('div');
    sb.id = 'login-sidebar';
    sb.innerHTML =
        '<div class="lsb-header">' +
            '<span class="lsb-titulo">Minha Conta</span>' +
            '<button class="lsb-close" onclick="window.fecharSideBar()">&times;</button>' +
        '</div>' +
        '<div id="lsb-body"></div>';
    document.body.appendChild(sb);
}

window.abrirSideBar = function() {
    if (!document.body) { setTimeout(window.abrirSideBar, 50); return; }
    _criarSideBar();
    _renderSideBarBody();
    document.getElementById('login-sidebar').classList.add('lsb--open');
    document.getElementById('login-overlay').classList.add('lsb-overlay--open');
};

window.fecharSideBar = function() {
    var sb = document.getElementById('login-sidebar');
    var ov = document.getElementById('login-overlay');
    if (sb) sb.classList.remove('lsb--open');
    if (ov) ov.classList.remove('lsb-overlay--open');
};

/* ══════════════════════════════════════════════════════════════════════════════
   RENDER HEADER — substitui o conteúdo de #auth-slot
   ══════════════════════════════════════════════════════════════════════════════ */
function _renderHeaderBtn() {
    var slot = document.getElementById('auth-slot');
    if (!slot) return;

    if (!_currentUser) {
        slot.innerHTML =
            '<button class="login-btn" onclick="window.abrirSideBar()">' +
                '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">' +
                    '<circle cx="12" cy="8" r="4"/>' +
                    '<path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>' +
                '</svg>' +
                'Login' +
            '</button>';
    } else {
        var nome   = (_currentUser.displayName || 'Usuário').split(' ')[0];
        var avatar = _currentUser.photoURL ||
            'https://ui-avatars.com/api/?name=' + encodeURIComponent(nome) + '&background=C5A059&color=fff&size=64';
        slot.innerHTML =
            '<button class="login-btn login-btn--logged" onclick="window.abrirSideBar()">' +
                '<img src="' + avatar + '" alt="' + nome + '" class="login-btn-avatar" ' +
                    'onerror="this.src=\'https://ui-avatars.com/api/?name=' + encodeURIComponent(nome) + '&background=C5A059&color=fff&size=64\'">' +
                'Olá, ' + nome +
            '</button>';
    }
}

/* ══════════════════════════════════════════════════════════════════════════════
   RENDER SIDEBAR BODY
   ══════════════════════════════════════════════════════════════════════════════ */
function _renderSideBarBody() {
    var body = document.getElementById('lsb-body');
    if (!body) return;

    var googleSVG =
        '<svg width="20" height="20" viewBox="0 0 48 48" style="flex-shrink:0">' +
        '<path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.2l6.7-6.7C35.7 2.5 30.2 0 24 0 14.6 0 6.6 5.4 2.6 13.3l7.8 6C12.4 13 17.8 9.5 24 9.5z"/>' +
        '<path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4 7.1-10 7.1-17z"/>' +
        '<path fill="#FBBC05" d="M10.4 28.7A14.6 14.6 0 0 1 9.5 24c0-1.6.3-3.2.8-4.7l-7.8-6A23.9 23.9 0 0 0 0 24c0 3.9.9 7.5 2.6 10.7l7.8-6z"/>' +
        '<path fill="#34A853" d="M24 48c6.2 0 11.4-2 15.2-5.5l-7.5-5.8c-2 1.4-4.6 2.2-7.7 2.2-6.2 0-11.5-4.2-13.4-9.8l-7.8 6C6.6 42.6 14.6 48 24 48z"/>' +
        '</svg>';

    if (!_currentUser) {
        body.innerHTML =
            '<div class="lsb-section">' +
                '<div class="lsb-icon-wrap">' +
                    '<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#C5A059" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">' +
                        '<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>' +
                    '</svg>' +
                '</div>' +
                '<p class="lsb-bemvindo">Olá! Entre na sua conta<br>para acessar o clube.</p>' +
                '<button class="lsb-google-btn" onclick="window.SeniorAuth.loginComGoogle()">' +
                    googleSVG + ' Entrar com Google' +
                '</button>' +
            '</div>' +
            '<div class="lsb-divider"><span>ou</span></div>' +
            '<div class="lsb-section">' +
                '<p class="lsb-label">⭐ Assinar o Clube SeniorHub</p>' +
                '<p class="lsb-desc">Acesse todos os 5 livros, vote nas receitas e ganhe descontos exclusivos.</p>' +
                '<a href="' + window.CLUBE_CHECKOUT_URL + '" target="_blank" rel="noopener noreferrer" class="lsb-clube-btn" onclick="window.fecharSideBar()">Assinar Clube — R$ 20/mês</a>' +
                '<p class="lsb-fine">✓ Acesso imediato &nbsp;·&nbsp; ✓ Cancele quando quiser</p>' +
            '</div>';
    } else {
        var nome   = _currentUser.displayName || 'Usuário';
        var email  = _currentUser.email || '';
        var avatar = _currentUser.photoURL ||
            'https://ui-avatars.com/api/?name=' + encodeURIComponent(nome) + '&background=C5A059&color=fff&size=128';
        body.innerHTML =
            '<div class="lsb-section lsb-section--user">' +
                '<img src="' + avatar + '" alt="' + nome + '" class="lsb-avatar">' +
                '<div>' +
                    '<p class="lsb-nome">' + nome + '</p>' +
                    '<p class="lsb-email">' + email + '</p>' +
                    '<span class="lsb-badge">✅ Assinante</span>' +
                '</div>' +
            '</div>' +
            '<div style="height:1px;background:#f0e8d4;margin:0 20px;"></div>' +
            '<div class="lsb-section">' +
                '<p class="lsb-label">🏆 Seus Benefícios</p>' +
                '<div class="lsb-beneficios">' +
                    '<div class="lsb-beneficio">📖 Acesso a todos os 5 livros</div>' +
                    '<div class="lsb-beneficio">🗳️ Votação exclusiva de receitas</div>' +
                    '<div class="lsb-beneficio">🏷️ Descontos em lojas parceiras</div>' +
                '</div>' +
            '</div>' +
            '<div style="height:1px;background:#f0e8d4;margin:0 20px;"></div>' +
            '<div class="lsb-section">' +
                '<button class="lsb-logout-btn" onclick="window.SeniorAuth.logout(); window.fecharSideBar();">' +
                    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
                        '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>' +
                        '<polyline points="16 17 21 12 16 7"/>' +
                        '<line x1="21" y1="12" x2="9" y2="12"/>' +
                    '</svg> Sair da conta' +
                '</button>' +
            '</div>';
    }
}

/* ══════════════════════════════════════════════════════════════════════════════
   ATUALIZA TUDO — header + sidebar + carrossel + botões de livro
   ══════════════════════════════════════════════════════════════════════════════ */
function _atualizarUI(user) {
    _currentUser = user;
    _renderHeaderBtn();
    _renderSideBarBody();
    if (window.renderModalConteudo) window.renderModalConteudo();
    if (window.renderAd) window.renderAd();

    /* Muda botões "Adquirir Livro" → "Acessar Conteúdo" para assinantes */
    if (user) {
        /* Carrossel lateral */
        document.querySelectorAll('.ad-btn').forEach(function(btn) {
            if (btn.tagName === 'A' && btn.href && btn.href.includes('hotmart')) {
                btn.textContent = '📖 Acessar Conteúdo →';
                btn.removeAttribute('href');
                btn.style.cursor = 'pointer';
                btn.onclick = function() {
                    if (window.loadRecipesFeed) window.loadRecipesFeed();
                };
            }
        });
        /* Vitrine de livros — re-renderiza se estiver aberta */
        if (window._vitrineAberta && window.loadBooksShowcase) {
            window.loadBooksShowcase();
        }
    }
}

/* ══════════════════════════════════════════════════════════════════════════════
   FIREBASE INIT
   ══════════════════════════════════════════════════════════════════════════════ */
try {
    if (typeof firebase !== 'undefined') {
        var cfg = {
            apiKey:            "AIzaSyBeSp64NCAhKXdXrPGSqrETYormepqWpiU",
            authDomain:        "seniorhub-7c725.firebaseapp.com",
            projectId:         "seniorhub-7c725",
            storageBucket:     "seniorhub-7c725.firebasestorage.app",
            messagingSenderId: "194444472555",
            appId:             "1:194444472555:web:b43cb7d673153deaeeceae",
            measurementId:     "G-6T1NEWXBD8"
        };
        if (!firebase.apps.length) firebase.initializeApp(cfg);
        fbAuth     = firebase.auth();
        fbProvider = new firebase.auth.GoogleAuthProvider();
        fbProvider.setCustomParameters({ prompt: 'select_account' });

        /* ── Passo 1: captura resultado do redirect (volta do Google) ───── */
        fbAuth.getRedirectResult().then(function(result) {
            if (result && result.user) {
                /* Login via redirect acabou de completar */
                _atualizarUI(result.user);
            }
        }).catch(function(e) {
            console.warn('[Auth redirect]', e.code, e.message);
        });

        /* ── Passo 2: observador persistente — dispara em toda página ───── */
        fbAuth.onAuthStateChanged(function(user) {
            _atualizarUI(user);
        });
    }
} catch(e) {
    console.warn('[SeniorHub Auth]', e.message);
}

/* ── API pública ────────────────────────────────────────────────────────────── */
window.SeniorAuth = {
    getUser()      { return _currentUser; },
    isSubscriber() { return !!_currentUser; },
    isMember()     { return !!_currentUser; },

    loginComGoogle: function() {
        if (!fbAuth) { alert('Firebase indisponível.'); return; }
        /* Salva URL atual para voltar depois do redirect */
        sessionStorage.setItem('sh_redirect_back', window.location.href);
        fbAuth.signInWithRedirect(fbProvider).catch(function(e) {
            alert('Erro ao iniciar login: ' + e.message);
        });
    },

    logout: function() {
        if (fbAuth) {
            fbAuth.signOut().then(function() {
                _atualizarUI(null);
            });
        } else {
            _atualizarUI(null);
        }
    }
};

/* ── Modal de votação ───────────────────────────────────────────────────────── */
window.renderModalConteudo = function() {
    var body = document.getElementById('modal-body');
    if (!body) return;
    if (!_currentUser) {
        body.innerHTML =
            '<div style="text-align:center;padding:8px 0 16px;">' +
                '<div style="font-size:44px;margin-bottom:12px;">🔐</div>' +
                '<h3 style="font-size:18px;font-weight:800;color:var(--text-dark);margin-bottom:10px;">Entre para participar</h3>' +
                '<p style="font-size:14px;color:var(--text-muted);margin-bottom:20px;line-height:1.6;">Faça login com o Google para votar e acessar os benefícios.</p>' +
                '<button class="lsb-google-btn" style="width:100%;justify-content:center;box-sizing:border-box;" ' +
                    'onclick="if(window.toggleModal)toggleModal(); setTimeout(window.abrirSideBar,300);">' +
                    'Entrar com Google' +
                '</button>' +
                '<div style="margin-top:16px;padding-top:16px;border-top:1px solid #f0e8d4;">' +
                    '<a href="' + window.CLUBE_CHECKOUT_URL + '" target="_blank" rel="noopener noreferrer" class="lsb-clube-btn">⭐ Assinar Clube — R$ 20/mês</a>' +
                '</div>' +
            '</div>';
        return;
    }
    var nome = (_currentUser.displayName || 'você').split(' ')[0];
    body.innerHTML =
        '<div style="background:#f0fdf4;border:1px solid #86efac;border-radius:10px;padding:12px 16px;text-align:center;margin-bottom:20px;color:#166534;font-weight:700;font-size:14px;">✅ Olá, ' + nome + '! Você é assinante ativo.</div>' +
        '<div style="height:1px;background:#efefef;margin-bottom:16px;"></div>' +
        '<p style="font-size:14px;font-weight:700;color:var(--sage-green-dark);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px;">🗳️ Votação do Dia</p>' +
        '<p style="font-size:14px;color:var(--text-muted);margin-bottom:14px;">O que você quer ver mais na próxima semana?</p>' +
        '<button class="vote-btn" onclick="submitVote(\'Rec\')">Novas Receitas Detox</button>' +
        '<button class="vote-btn" onclick="submitVote(\'Alo\')">Exercícios</button>' +
        '<button class="vote-btn" onclick="submitVote(\'Tec\')">Tecnologia para Casa</button>' +
        '<button class="vote-btn" onclick="submitVote(\'Via\')">Viagens</button>' +
        '<p style="font-size:11px;color:var(--text-muted);margin-top:14px;">Seu voto ajuda a construir o portal dos seus sonhos.</p>';
};

/* ══════════════════════════════════════════════════════════════════════════════
   INIT — renderiza estado inicial (antes do Firebase responder)
   ══════════════════════════════════════════════════════════════════════════════ */
function _init() {
    _criarSideBar();
    _renderHeaderBtn();   /* mostra "Login" imediatamente */
    if (window.renderModalConteudo) window.renderModalConteudo();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _init);
} else {
    _init();
}