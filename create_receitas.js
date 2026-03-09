const fs = require('fs');

const path = 'c:/Users/Lenovo/OneDrive/Área de Trabalho/SeniorHub/recipes.js';
let code = fs.readFileSync(path, 'utf8');

const baseProteins = ['Frango Desfiado', 'Ovo Caipira', 'Tilápia Fresca', 'Grão-de-Bico', 'Lentilha', 'Quinoa', 'Atum Natural', 'Sardinha', 'Pescada', 'Queijo Minas Leve'];
const baseVeggies = ['Espinafre', 'Cenoura', 'Abóbora', 'Couve-Flor', 'Brócolis', 'Ervilha', 'Tomate', 'Abobrinha', 'Inhame', 'Batata-Doce'];
const baseStyles = ['Ensopado', 'Creme', 'Purê', 'Assado', 'Refogado', 'Salada Morna', 'Sopa', 'Torta de Liquidificador', 'Escondidinho', 'Bowl Nutritivo'];

const recipesInfo = [];
let id = 1;

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 10; j++) {
        const protein = baseProteins[j];
        const veggie = baseVeggies[(i * 2 + j) % 10];
        const style = baseStyles[(i + j) % 10];

        let title = `${style} de ${protein} com ${veggie}`;
        let time = (15 + (id % 4) * 5) + ' minutos';

        let ingredients = [
            `1 porção de ${protein} preparado e macio`,
            `1 xícara de ${veggie} picadinho`,
            `1 fio de azeite de oliva extra virgem`,
            `Temperos naturais a gosto (salsa, açafrão, orégano)`,
            `1 dente de alho pequeno amassado`
        ];
        let utensils = [
            `Panelinha ou assadeira (conforme o preparo)`,
            `Garfo para misturar`,
            `Colher de pau`
        ];
        let steps = [
            `Separe todos os ingredientes na bancada para facilitar.`,
            `Aqueça levemente o azeite e doure o alho sem deixar queimar.`,
            `Acrescente o ${veggie} e refogue até começar a murchar.`,
            `Junte o ${protein} e misture bem para encorpar os sabores.`,
            `Adicione um pouquinho de água ou caldo caseiro se precisar, para não ficar seco.`,
            `Tempere com as ervinhas e sal com moderação. Sirva quentinho e fácil de mastigar.`
        ];

        if (id <= 5) {
            if (id === 1) { title = 'Tigela de Quinoa com Ovos Escalfados e Espinafre'; ingredients[0] = '1/2 xícara de quinoa macia'; ingredients[1] = '2 ovos caipiras'; steps = ['Ferva água num caneco.', 'Esclade os ovos suavemente por 3 min.', 'Ponha espinafre no fundo da tigela.', 'Coloque a quinoa morna por cima.', 'Deite os ovos por cima.', 'Regue com azeite e sirva.']; }
            if (id === 2) { title = 'Escondidinho Leve de Frango com Creme de Inhame'; ingredients[0] = '1 xícara de frango cozido e desfiado macio'; ingredients[1] = '2 inhames grandes cozidos'; steps = ['Amasse o inhame cozido até virar purê.', 'Tempere o frango com ervas.', 'Num refratário pequeno, faça uma cama com metade do purê.', 'Bote o frango no meio.', 'Cubra com o restante do purê de inhame.', 'Leve ao forninho rápido só para aquecer bem.']; }
            if (id === 3) { title = 'Sopa Nutritiva de Lentilha com Cenoura Amassada'; }
            if (id === 4) { title = 'Omelete de Forno com Abobrinha e Queijo Minas'; }
            if (id === 5) { title = 'Creme de Peixe Branco com Brócolis Triturado'; }
        }

        recipesInfo.push({
            id: id,
            title: title,
            time: time,
            ingredients: ingredients,
            utensils: utensils,
            steps: steps
        });

        id++;
    }
}

// Append this directly to window.biblioteca['livro2']
const theArrayCode = "window.biblioteca['livro2'] = " + JSON.stringify(recipesInfo, null, 2) + ";";

code += "\n\n// ── Livro 2: 50 Receitas Geradas ────────────────────────────────────────\n";
code += theArrayCode + "\n";

fs.writeFileSync(path, code);
console.log('50 recipes generated and appended.');
