// ── Biblioteca SeniorHub — 5 Livros ──────────────────────────────────────────

window.BOOKS = {
    1: { title: "Relíquias da Cozinha: Sabores que Atravessam Gerações", key: 'reliquias' },
    2: { title: "Energia no Prato: Nutrição e Praticidade para o Dia a Dia", key: 'livro2' },
    3: { title: "Prazer Sem Culpa: O Lado Doce da Vida com Saúde", key: 'prazersem' },
    4: { title: "Sabores do Mar: Leveza e Nutrição para a Longevidade", key: 'saboresmar' },
    5: { title: "Horta no Prato: O Melhor dos Vegetais na Cozinha Sênior", key: 'horta' }
};

// Retorna dados do livro pela chave
function getBookByKey(bookKey) {
    for (const [num, book] of Object.entries(window.BOOKS)) {
        if (book.key === bookKey) return { number: parseInt(num), ...book };
    }
    return null;
}

// ── Montagem da Biblioteca ────────────────────────────────────────────────────
// Todos os 5 livros usam APENAS os arquivos JS externos, sem stubs bloqueados.
// Os arquivos de recipes (livroX_a.js, etc.) são carregados ANTES deste arquivo
// no index.html e definem as variáveis globais window.LIVROX_Y.
window.biblioteca = {
    // Livro 1: 50 receitas — Livro 1/livro1_a/b/c.js
    reliquias: [
        ...(window.LIVRO1_A || []),
        ...(window.LIVRO1_B || []),
        ...(window.LIVRO1_C || [])
    ],
    // Livro 2: 50 receitas — Livro 2/livro2_a/b/c/d.js
    livro2: [
        ...(window.LIVRO2_A || []),
        ...(window.LIVRO2_B || []),
        ...(window.LIVRO2_C || []),
        ...(window.LIVRO2_D || [])
    ],
    // Livro 3: 50 receitas — Livro 3/livro3_a/b/c/d.js
    prazersem: [
        ...(window.LIVRO3_A || []),
        ...(window.LIVRO3_B || []),
        ...(window.LIVRO3_C || []),
        ...(window.LIVRO3_D || [])
    ],
    // Livro 4: 50 receitas — Livro 4/livro4_a/b/c/d.js
    saboresmar: [
        ...(window.LIVRO4_A || []),
        ...(window.LIVRO4_B || []),
        ...(window.LIVRO4_C || []),
        ...(window.LIVRO4_D || [])
    ],
    // Livro 5: 50 receitas — Livro 5/livro5_a/b/c/d.js
    horta: [
        ...(window.LIVRO5_A || []),
        ...(window.LIVRO5_B || []),
        ...(window.LIVRO5_C || []),
        ...(window.LIVRO5_D || [])
    ]
};
