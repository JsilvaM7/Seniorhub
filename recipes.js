// â”€â”€ Biblioteca SeniorHub â€” 5 Livros â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Ponto 3: Impede que window.biblioteca seja apagado acidentalmente
window.biblioteca = window.biblioteca || {};

window.BOOKS = {
    1: { title: "RelÃ­quias da Cozinha: Sabores que Atravessam GeraÃ§Ãµes", key: 'reliquias' },
    2: { title: "Energia no Prato: NutriÃ§Ã£o e Praticidade para o Dia a Dia", key: 'livro2' },
    3: { title: "Prazer Sem Culpa: O Lado Doce da Vida com SaÃºde", key: 'prazersem' },
    4: { title: "Sabores do Mar: Leveza e NutriÃ§Ã£o para a Longevidade", key: 'saboresmar' },
    5: { title: "Horta no Prato: O Melhor dos Vegetais na Cozinha SÃªnior", key: 'horta' }
};

// Retorna { bookNum, bookKey, title } a partir da chave e do id local
function getBookByKey(bookKey) {
    for (const [num, book] of Object.entries(BOOKS)) {
        if (book.key === bookKey) return { number: parseInt(num), ...book };
    }
    return null;
}


// â”€â”€ Book 1: Full sample recipes (IDs 1â€“5) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const recipes = [
    {
        id: 1, bookId: 1, prepTime: "25 minutos",
        title: "Sopa Nutritiva de AbÃ³bora com Gengibre",
        ingredients: ["500g de abÃ³bora cabotiÃ¡", "1 pedaÃ§o pequeno de gengibre", "1 cebola mÃ©dia", "2 dentes de alho", "Sal e azeite a gosto"],
        utensils: ["Panela grande", "Liquidificador ou mixer", "Colher de pau", "Faca afiada"],
        steps: [
            "Descasque a abÃ³bora com cuidado e corte em cubos mÃ©dios de aproximadamente 3 cm.",
            "Pique a cebola e o alho bem miudinhos para que soltem todo o sabor durante o refogado.",
            "Em uma panela grande, aqueÃ§a um fio de azeite em fogo mÃ©dio e refogue a cebola e o alho atÃ© ficarem transparentes e levemente dourados.",
            "Adicione os cubos de abÃ³bora e o gengibre ralado na panela, mexendo bem para incorporar os sabores.",
            "Cubra tudo com Ã¡gua quente â€” apenas o suficiente para cobrir a abÃ³bora â€” e tempere com sal a gosto.",
            "Deixe cozinhar com a panela semi-tampada em fogo mÃ©dio por cerca de 20 minutos, atÃ© que a abÃ³bora esteja completamente macia.",
            "Com muito cuidado para nÃ£o se queimar, transfira tudo para o liquidificador e bata atÃ© obter um creme liso e aveludado.",
            "Volte o creme para a panela e ajuste o sal. Se necessÃ¡rio, adicione um pouco mais de Ã¡gua quente para a consistÃªncia desejada.",
            "AqueÃ§a em fogo baixo por mais 3 minutos, mexendo delicadamente para nÃ£o grudar.",
            "Prove e ajuste os temperos a gosto, acrescentando mais gengibre se preferir um sabor mais intenso.",
            "Sirva bem quentinho em tigelas fundas, finalizando com um fio de azeite extra virgem.",
            "Aproveite cada colherada dessa sopa que aquece o coraÃ§Ã£o e fortalece o corpo."
        ]
    },
    {
        id: 2, bookId: 1, prepTime: "30 minutos",
        title: "Peixe Assado com Ervas da Horta",
        ingredients: ["2 filÃ©s de tilÃ¡pia ou pescada", "Suco de 1 limÃ£o", "Alecrim e tomilho frescos", "Rodelas de tomate", "Azeite extra virgem"],
        utensils: ["Assadeira mÃ©dia", "Papel manteiga", "Pincel de silicone", "Travessa para servir"],
        steps: [
            "PrÃ©-aqueÃ§a o forno a 180Â°C por pelo menos 10 minutos antes de comeÃ§ar.",
            "Lave bem os filÃ©s de peixe em Ã¡gua corrente e seque delicadamente com papel toalha.",
            "Tempere os filÃ©s com o suco de limÃ£o, sal e uma pitada de pimenta branca dos dois lados.",
            "Deixe o peixe descansar no tempero por 10 minutos para absorver bem os sabores.",
            "Forre a assadeira com papel manteiga, evitando que o peixe grude e facilite a limpeza.",
            "Acomode os filÃ©s delicadamente na assadeira, deixando um pequeno espaÃ§o entre eles.",
            "Distribua as rodelas de tomate por cima de cada filÃ© como uma cobertura protetora.",
            "Espalhe os ramos de alecrim e as folhinhas de tomilho por cima, pressionando levemente.",
            "Regue com um fio generoso de azeite extra virgem para manter a suculÃªncia durante o forno.",
            "Leve ao forno por 20 a 25 minutos â€” o filÃ© estarÃ¡ pronto quando ficar branquinho e soltar lascas facilmente.",
            "Retire com cuidado usando luvas de forno e transfira para uma travessa bonita.",
            "Este prato leve e perfumado Ã© perfeito para um almoÃ§o tranquilo em famÃ­lia."
        ]
    },
    {
        id: 3, bookId: 1, prepTime: "40 minutos",
        title: "Arroz Integral com Vegetais Coloridos",
        ingredients: ["1 xÃ­cara de arroz integral", "1 cenoura ralada", "1/2 xÃ­cara de ervilhas frescas", "Salsinha picada", "1 dente de alho amassado"],
        utensils: ["Panela de arroz ou comum", "Ralador de legumes", "Escorredor", "Colher de servir"],
        steps: [
            "Lave o arroz integral em Ã¡gua corrente, esfregando levemente com as mÃ£os, e escorra bem.",
            "Em uma panela, aqueÃ§a um fio de azeite e refogue o alho amassado por 1 minuto, atÃ© perfumar.",
            "Adicione o arroz escorrido e mexa por 2 minutos para que cada grÃ£o absorva o sabor do azeite.",
            "Acrescente 2,5 xÃ­caras de Ã¡gua quente, uma pitada de sal e misture bem.",
            "Tampe a panela, reduza o fogo ao mÃ­nimo e cozinhe por 30 minutos sem abrir.",
            "Enquanto isso, rale a cenoura na parte grossa do ralador e reserve junto com as ervilhas.",
            "Passados os 30 minutos, abra rapidamente a tampa e disponha a cenoura e as ervilhas por cima sem mexer.",
            "Tampe novamente e deixe no fogo baixo por mais 5 minutos para cozinhar os legumes no vapor.",
            "Desligue o fogo e deixe descansar tampado por 5 minutos â€” isso deixa o arroz bem soltinho.",
            "Solte os grÃ£os com um garfo, fazendo movimentos leves de baixo para cima.",
            "Misture a salsinha picada fresca para dar cor e frescor ao prato.",
            "Uma refeiÃ§Ã£o completa e cheia de fibras que cuida da nossa saÃºde com muito sabor."
        ]
    },
    {
        id: 4, bookId: 1, prepTime: "15 minutos",
        title: "Salada Tropical com Molho de Iogurte",
        ingredients: ["Folhas de alface variadas", "1 manga madura cortada em cubos", "1 pote de iogurte natural", "HortelÃ£ fresca", "Mel e suco de limÃ£o"],
        utensils: ["Saladeira grande", "Tigela pequena para o molho", "Batedor de arame (fouet)", "PinÃ§a de salada"],
        steps: [
            "Lave todas as folhas de alface em Ã¡gua corrente, uma por uma, removendo qualquer sujeira.",
            "Seque as folhas delicadamente usando um pano limpo ou centrifugador de salada para nÃ£o murcharem.",
            "Rasgue as folhas com as mÃ£os em pedaÃ§os mÃ©dios, mantendo um visual rÃºstico e natural.",
            "Corte a manga madura em cubinhos de aproximadamente 1,5 cm, escolhendo uma bem docinha e firme.",
            "Em uma tigela separada, despeje o iogurte natural e adicione o suco de meio limÃ£o.",
            "Acrescente uma colher de sopa de mel ao molho e bata bem com o fouet atÃ© ficar homogÃªneo.",
            "Pique a hortelÃ£ fresca bem fininha e misture ao molho, reservando algumas folhinhas para decorar.",
            "Arrume as folhas na saladeira de forma espaÃ§osa, criando uma base bonita e volumosa.",
            "Distribua os cubinhos de manga por cima das folhas, criando um contraste tropical de cores.",
            "Regue a salada com o molho de iogurte apenas na hora de servir para nÃ£o murchar as folhas.",
            "Use a pinÃ§a para misturar levemente, garantindo que tudo fique bem temperado.",
            "Decore com as folhinhas de hortelÃ£ reservadas e sirva imediatamente para aproveitar o frescor."
        ]
    },
    {
        id: 5, bookId: 1, prepTime: "10 min + 1h gelando",
        title: "Mousse de Abacate e Cacau",
        ingredients: ["1 abacate maduro mÃ©dio", "3 colheres de cacau em pÃ³", "2 colheres de mel", "Gotas de extrato de baunilha", "Nozes picadas para finalizar"],
        utensils: ["Processador ou liquidificador", "EspÃ¡tula de silicone", "TaÃ§as individuais", "Geladeira"],
        steps: [
            "Escolha um abacate bem maduro â€” ele deve ceder levemente Ã  pressÃ£o dos dedos, garantindo cremosidade mÃ¡xima.",
            "Corte o abacate ao meio, retire o caroÃ§o e extraia toda a polpa com uma colher grande.",
            "Coloque a polpa no processador junto com o cacau em pÃ³ peneirado para evitar grumos.",
            "Adicione o mel e as gotinhas de extrato de baunilha para perfumar e adoÃ§ar naturalmente.",
            "Bata em velocidade alta por 2 minutos, raspando as bordas com a espÃ¡tula a cada 30 segundos.",
            "A textura deve ficar extremamente lisa e aveludada, sem nenhum pedacinho de abacate.",
            "Prove e ajuste a doÃ§ura com mais mel se necessÃ¡rio â€” respeite o seu paladar!",
            "Distribua o mousse em taÃ§as individuais com uma colher ou saco de confeiteiro para ficar elegante.",
            "Leve Ã  geladeira por no mÃ­nimo 1 hora para firmar e desenvolver os sabores.",
            "Na hora de servir, retire da geladeira e deixe descansar 5 minutos em temperatura ambiente.",
            "Finalize cada taÃ§a com nozes picadas por cima â€” o crocante contrasta lindamente com a cremosidade.",
            "VocÃª concluiu as 5 receitas da nossa amostra! Uma sobremesa saudÃ¡vel e surpreendente."
        ]
    }
];

// â”€â”€ Book 1: Locked recipe stubs (IDs 6â€“50) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const book1Locked = [
    "Caldo Verde da VovÃ³",
    "Frango Caipira com Quiabo",
    "FeijÃ£o Tropeiro Mineiro",
    "Bolo de FubÃ¡ com Erva-Doce",
    "Canjica com Leite de Coco",           // 10
    "Galinha ao Molho Pardo",
    "Lombinho de Porco com Laranja",
    "Farofa de Ovo da RoÃ§a",
    "PaÃ§oca de PilÃ£o Artesanal",
    "PÃ£o de Queijo do Interior",           // 15
    "Sopa de Legumes com MacarrÃ£o Caseiro",
    "Couve Refogada com Torresmo",
    "Frango Ensopado com Batata",
    "Creme de Mandioca com Charque",
    "Arroz de Leite da AvÃ³",               // 20
    "Doce de AbÃ³bora com Coco Rapado",
    "Cuscuz Paulista de Forno",
    "MacarrÃ£o ao Sugo da Nona",
    "Polenta Cremosa com Molho Caseiro",
    "Tutu de FeijÃ£o com Couve",            // 25
    "Sopa de Lentilha com LinguiÃ§a",
    "Frango ao Leite com Temperos Frescos",
    "Bolinho de Mandioca Frito",
    "Quibebe de AbÃ³bora ao Forno",
    "SuflÃª de Milho Verde da Fazenda",     // 30
    "PirÃ£o de Peixe Tradicional",
    "Torta de Frango de Panela",
    "Angu Ã  Baiana com Caruru",
    "Costelinha de Porco com FeijÃ£o",
    "Sopa de Ervilha com Bacon Defumado",  // 35
    "Frango com JilÃ³ e Alho",
    "Doce de Leite Caseiro da RoÃ§a",
    "Queijadinhas de Leite Condensado",
    "Arroz Doce com Canela",
    "Bolo de Mel de Engenho",              // 40
    "Pudim de PÃ£o Amanhecido",
    "Curau de Milho com Canela",
    "Brigadeiro de Colher da InfÃ¢ncia",
    "Bolo de Cenoura com Cobertura de Chocolate",
    "Torta de LimÃ£o com Merengue",         // 45
    "Bolo de Rolo Pernambucano",
    "Cocada Cremosa de Festa",
    "Quindim Amanteigado",
    "Manjar de Coco com Calda de Ameixas",
    "PÃ© de Moleque da VovÃ³"               // 50
];
book1Locked.forEach((name, i) => {
    recipes.push({ id: i + 6, bookId: 1, title: name, locked: true });
});

// â”€â”€ Book 2: Recipe stubs (IDs 51â€“100) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const book2Names = [
    "Tigela de Quinoa com Frutas Vermelhas",
    "Smoothie de Espinafre e Banana",
    "Wrap Integral de Frango Grelhado",
    "Bowl de AÃ§aÃ­ EnergÃ©tico",
    "Omelete de Claras com Espinafre",     // 55 â€” free preview ends here
    "Salada de GrÃ£o-de-Bico com Tahine",
    "Panqueca de Aveia com Mel",
    "Iogurte Grego com Granola Artesanal",
    "Frango ao Forno com Batata-Doce",
    "MacarrÃ£o de Lentilha com Pesto",      // 60
    "Sopa Detox de Alho-PorÃ³",
    "Arroz de Couve-Flor Gratinado",
    "Salada NiÃ§oise Leve",
    "Bowl de Atum com Legumes",
    "Peito de Peru Assado com Ervas",      // 65
    "FilÃ© de SalmÃ£o ao LimÃ£o-Siciliano",
    "Ceviche de TilÃ¡pia Fresco",
    "Stir-Fry de Frango com BrÃ³colis",
    "Sopa de Tomate Assado com ManjericÃ£o",
    "HambÃºrguer de GrÃ£o-de-Bico",          // 70
    "Lasanha de Abobrinha",
    "Risoto de Cogumelos com Ervas",
    "Frango Desfiado com Cenoura Ralada",
    "Torta Salgada Integral de Legumes",
    "Sopa Cremosa de Ervilha e HortelÃ£",   // 75
    "Salada de Quinoa com Pepino e Feta",
    "Frango Marinado com Especiarias",
    "Bowl MediterrÃ¢neo de Atum",
    "Espaguete de Abobrinha ao Molho de Tomate",
    "Peito de Frango no Vapor com Molho TailandÃªs", // 80
    "Arroz Negro com CamarÃ£o",
    "Tabule de Couscous com HortelÃ£",
    "Salada Verde com Castanhas e Framboesas",
    "Wrap de Atum com Abacate",
    "Sopa de Lentilha com AÃ§afrÃ£o",        // 85
    "Frango ao Curry com Leite de Coco Light",
    "Omelete Recheada com Ricota e Tomate Seco",
    "Salada de RÃºcula com Pera e Gorgonzola",
    "Bowl de ProteÃ­na com Edamame",
    "Peixe ao Papillote com Aspargos",     // 90
    "MacarrÃ£o Integral ao Pesto de RÃºcula",
    "Salada de Beterraba com Laranja e Alho",
    "Frango Desfiado na PressÃ£o com Molho de Ervas",
    "Sopa de AbÃ³bora com Leite de Coco",
    "SanduÃ­che Natural de Peito de Peru",  // 95
    "Tofu Grelhado com Legumes Salteados",
    "Arroz Integral com Frango e BrÃ³colis",
    "Ratatouille de Legumes ao Forno",
    "Salada de Folhas com Quinoa Tostada",
    "Granola Caseira com Frutas Secas"     // 100
];
book2Names.forEach((name, i) => {
    recipes.push({ id: i + 51, bookId: 2, title: name, locked: true });
});

// â”€â”€ Book 3: Recipe stubs (IDs 101â€“150) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const book3Names = [
    "Brownie de FeijÃ£o Preto Sem Farinha",
    "Torta de LimÃ£o Low Carb",
    "Cookie de Banana e Aveia",
    "Cheesecake de Frutas Vermelhas",
    "Mousse de MaracujÃ¡ com Iogurte",      // 105 â€” free preview ends here
    "Sorvete de Banana Congelada",
    "Bolo de Laranja com Farinha de AmÃªndoas",
    "Panqueca Proteica de Cacau",
    "Trufas de TÃ¢mara e AmÃªndoa",
    "Bolinho de Canela com Aveia",         // 110
    "Panna Cotta de Baunilha com Frutas",
    "Crumble de MaÃ§Ã£ com Canela",
    "Gelatina de Frutas Naturais sem AÃ§Ãºcar",
    "Torta de Banana com Creme de Coco",
    "Muffin de Mirtilo e Aveia",           // 115
    "Pudim de Chia com Leite de Coco",
    "Bolo de Mel com Especiarias",
    "TiramisÃ¹ Levinho com Mascarpone",
    "Fondue de Chocolate Amargo com Frutas",
    "Creme de Papaya com Sorbet",          // 120
    "Tarte de Morango com Creme PÃ¢tissiÃ¨re Light",
    "Mousse de Chocolate 70% Cacau",
    "Bolo de Baunilha com Cream Cheese",
    "Petit GÃ¢teau SaudÃ¡vel de Cacau",
    "Semifreddo de LimÃ£o Siciliano",       // 125
    "Paleta Gelada de Manga e LimÃ£o",
    "Creme BrÃ»lÃ©e com Leite de AmÃªndoas",
    "Gelado de Coco e AnanÃ¡s",
    "Tartalete de Frutos Silvestres",
    "Bolo de Canela com Cobertura de Iogurte", // 130
    "Sorbet de Melancia e HortelÃ£",
    "Waffles Proteicos com Frutas Frescas",
    "Crepe de Frutas com Creme de Ricota",
    "Tortinha de MaracujÃ¡ sem AÃ§Ãºcar",
    "Alfajor de Aveia com Doce de Leite Light", // 135
    "Bolo de AbÃ³bora com Especiarias",
    "PavÃª de Morango com Biscoito Integral",
    "Rabanada de Forno com Mel e Canela",
    "QuindÃ£o de Lima com Coco Ralado",
    "Torrone de AmÃªndoa e Mel",            // 140
    "Bolinho Assado de Laranja e AmÃªndoa",
    "Castanhas Caramelizadas com Baunilha",
    "Palha Italiana com Chocolate Amargo",
    "Iogurte Grego com Coulis de Frutas Vermelhas",
    "Gelatina de HortelÃ£ com MelÃ£o",       // 145
    "Bolo de Mel com Nozes PecÃ£",
    "Acompanhamento Gelado de Frutas CÃ­tricas",
    "Peras ao Vinho Tinto com Sorvete",
    "Mousse de Abacaxi com Coco",
    "Semifreddo de CafÃ© com AmÃªndoas Torradas" // 150
];
book3Names.forEach((name, i) => {
    recipes.push({ id: i + 101, bookId: 3, title: name, locked: true });
});

// â”€â”€ Book 4: Full sample recipes (IDs 151â€“152) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
recipes.push({
    id: 151, bookId: 4, prepTime: "35 minutos",
    title: "FilÃ© de Robalo ao Molho de Alcaparras",
    ingredients: ["2 filÃ©s de robalo (aprox. 200g cada)", "2 colheres de alcaparras lavadas", "Suco de 1 limÃ£o siciliano", "2 colheres de manteiga sem sal", "Ramos de tomilho fresco", "Sal e pimenta branca a gosto"],
    utensils: ["Frigideira antiaderente grande", "EspÃ¡tula de silicone", "Pincel culinÃ¡rio", "Travessa para servir", "Pequena panela para o molho"],
    steps: [
        "Retire os filÃ©s de robalo da geladeira 15 minutos antes de cozinhar para que cheguem Ã  temperatura ambiente.",
        "Seque muito bem cada filÃ© com papel toalha â€” isso garante uma crosta dourada perfeita na frigideira.",
        "Tempere com sal e pimenta branca de ambos os lados, pressionando levemente os temperos sobre o peixe.",
        "AqueÃ§a a frigideira antiaderente em fogo mÃ©dio-alto por 2 minutos. Adicione um fio de azeite e espere brilhar.",
        "Coloque os filÃ©s com a pele virada para baixo, pressionando levemente com a espÃ¡tula nos primeiros 30 segundos.",
        "Cozinhe por 4 a 5 minutos sem mexer, atÃ© a pele ficar crocante e dourada. Vire delicadamente com a espÃ¡tula.",
        "Cozinhe o outro lado por mais 2 a 3 minutos. O peixe estarÃ¡ pronto quando soltar lascas brancas ao toque.",
        "Em uma panelinha separada, derreta a manteiga em fogo baixo. Adicione as alcaparras lavadas e o suco de limÃ£o.",
        "Deixe o molho borbulhar delicadamente por 2 minutos, mexendo devagar para incorporar os sabores cÃ­tricos.",
        "Transfira os filÃ©s para a travessa e regue generosamente com o molho dourado de manteiga e alcaparras.",
        "Decore com os raminhos de tomilho fresco por cima de cada filÃ© para perfumar o prato.",
        "Sirva imediatamente acompanhado de legumes no vapor. Um prato digno de restaurante feito na sua cozinha!"
    ]
});
recipes.push({
    id: 152, bookId: 4, prepTime: "45 minutos",
    title: "Moqueca de CamarÃ£o Leve com Leite de Coco",
    ingredients: ["500g de camarÃ£o mÃ©dio limpo", "1 lata de leite de coco light", "2 tomates maduros picados", "1 pimentÃ£o amarelo em tiras", "1 cebola grande em rodelas", "Coentro fresco a gosto", "Azeite de dendÃª (1 colher pequena)"],
    utensils: ["Panela de barro ou panela funda", "Colher de pau", "TÃ¡bua de corte", "Faca afiada", "Tigela para marinar"],
    steps: [
        "Limpe os camarÃµes retirando a cabeÃ§a, a casca e o fio intestinal. Lave bem em Ã¡gua corrente e escorra.",
        "Marine os camarÃµes por 10 minutos em suco de limÃ£o, pitada de sal e alho amassado para realÃ§ar o sabor.",
        "Forre o fundo da panela de barro com rodelas de cebola, criando uma cama aromÃ¡tica para o ensopado.",
        "Sobre a cebola, disponha as tiras de pimentÃ£o e os tomates picados em camadas uniformes.",
        "Adicione os camarÃµes marinados por cima das camadas de legumes sem mexer ainda.",
        "Despeje o leite de coco light por igual sobre todos os ingredientes e adicione a colher de dendÃª.",
        "Tampe a panela e leve ao fogo mÃ©dio. Aguarde ferver sem mexer â€” cerca de 10 a 12 minutos.",
        "Quando ferver, mexa delicadamente uma Ãºnica vez para distribuir o calor. Reduza para fogo baixo.",
        "Cozinhe por mais 8 minutos com a panela semitampada atÃ© os camarÃµes ficarem rosados e curvinhos.",
        "Prove o caldo e ajuste o sal. Se necessÃ¡rio, acrescente um pouquinho mais de leite de coco.",
        "Finalize espalhando coentro fresco picado por cima â€” ele Ã© a alma da moqueca brasileira.",
        "Sirva direto na panela de barro com arroz branco e pirÃ£o. A refeiÃ§Ã£o que abraÃ§a a alma!"
    ]
});

// â”€â”€ Book 4: Locked recipe stubs (IDs 153â€“200) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const book4Locked = [
    "SalmÃ£o Assado com Crosta de Ervas e LimÃ£o",
    "Bacalhau ao Forno com Batatas e Azeitonas",
    "Ceviche de TilÃ¡pia com MaracujÃ¡",
    "Atum Grelhado com Salsa de Abacate",
    "Polvo Cozido com Azeite e Alho",       // 158
    "CamarÃ£o no Alho e Ã“leo SaudÃ¡vel",
    "Lula Grelhada com Molho de Ervas",
    "Sardinha Assada com Legumes",
    "Peixe Assado em Crosta de Sal Grosso",
    "Espaguete de Abobrinha com Atum",       // 163
    "MexilhÃµes ao Vapor com Vinho e Ervas",
    "FilÃ© de Pargo no Papillote",
    "Sopa de Frutos do Mar Detox",
    "Bacalhau Desfiado com GrÃ£o-de-Bico",
    "Salada de CamarÃ£o com Manga Verde",     // 168
    "Truta ao Forno com LimÃ£o e Alcaparras",
    "Paella de Frutos do Mar Simplificada",
    "Risoto de CamarÃ£o com LimÃ£o Siciliano",
    "FilÃ© de Linguado com Manteiga de Ervas",
    "Sopa de Peixe Portuguesa",              // 173
    "CamarÃ£o Empanado com Farinha de Coco",
    "Peixe ao Curry Thai com Leite de Coco",
    "Salada NiÃ§oise com Atum Fresco",
    "Bacalhau com Natas Levinho",
    "Moqueca de Peixe Baiana",               // 178
    "Espetinho de CamarÃ£o Grelhado",
    "FilÃ© de TilÃ¡pia com Molho de MaracujÃ¡",
    "Arroz Negro com Frutos do Mar",
    "CamarÃ£o com Cream Cheese Light",
    "Torta de Atum com Legumes",             // 183
    "SalmÃ£o com Crosta de Gergelim",
    "Peixinho da Horta ao Forno",
    "Bowl de Atum com Quinoa e Pepino",
    "Peixe ao Forno com Tomate e ManjericÃ£o",
    "CamarÃ£o ao Leite de Coco e AÃ§afrÃ£o",   // 188
    "Strogonoff de CamarÃ£o Light",
    "FilÃ© de Merluza com Molho de Alcaparras",
    "Sushi Bowl SÃªnior (Sem GlÃºten)",
    "Bacalhau ao Pil-Pil Simplificado",
    "Carpaccio de SalmÃ£o com Alcaparras",   // 193
    "Dourada Assada com Alho e Azeite",
    "CamarÃ£o Defumado com RÃºcula",
    "Espaguete ao VÃ´ngole",
    "Peixe Cozido com Molho Verde",
    "Tiradito de Peixe Branco",              // 198
    "Anchova Grelhada com Chimichurri",
    "Caldo de Peixe com Legumes"             // 200
];
book4Locked.forEach((name, i) => {
    recipes.push({ id: i + 153, bookId: 4, title: name, locked: true });
});

// â”€â”€ Book 5: Full sample recipes (IDs 201â€“202) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
recipes.push({
    id: 201, bookId: 5, prepTime: "20 minutos",
    title: "Refogado de Couve com Alho e LimÃ£o",
    ingredients: ["1 maÃ§o de couve manteiga fatiada fininha", "4 dentes de alho fatiados", "Suco de 1/2 limÃ£o", "3 colheres de azeite extra virgem", "Sal e pimenta-do-reino a gosto"],
    utensils: ["Frigideira grande ou wok", "Faca afiada", "TÃ¡bua de corte", "PinÃ§a culinÃ¡ria", "Tigela para servir"],
    steps: [
        "Lave as folhas de couve uma a uma em Ã¡gua corrente, esfregando suavemente para remover qualquer resÃ­duo.",
        "Empilhe as folhas e dobre-as ao meio no sentido do comprimento para facilitar o corte.",
        "Com a faca bem afiada, fatie a couve em tiras bem finhas, como um chiffonade. Quanto mais fina, melhor!",
        "Descasque os dentes de alho e fatie-os em lÃ¢minas bem finas para que dourem uniformemente.",
        "AqueÃ§a a frigideira em fogo mÃ©dio-alto e adicione o azeite. Espere aquec er antes de colocar o alho.",
        "Adicione as lÃ¢minas de alho e refogue por 1 minuto, mexendo sempre, atÃ© ficarem douradas e perfumadas.",
        "AtenÃ§Ã£o: alho queimado amarga! Assim que dourar, adicione a couve fatiada de uma vez.",
        "Misture rapidamente com a pinÃ§a ou colher por 2 a 3 minutos em fogo alto para a couve ficar al dente.",
        "A couve deve ficar verde viva, levemente murchinha mas ainda com textura e crocÃ¢ncia.",
        "Tempere com sal e pimenta. Desligue o fogo e esprema o limÃ£o por cima imediatamente.",
        "O Ã¡cido do limÃ£o realÃ§a o verde e equilibra o amargor natural da couve â€” um truque de cozinha italiana!",
        "Sirva imediatamente como acompanhamento. A couve Ã© uma das maiores aliadas da longevidade saudÃ¡vel!"
    ]
});
recipes.push({
    id: 202, bookId: 5, prepTime: "50 minutos",
    title: "Ratatouille de Forno com Ervas Frescas",
    ingredients: ["1 abobrinha verde", "1 abobrinha italiana", "2 tomates mÃ©dios", "1 berinjela pequena", "Molho de tomate caseiro (1 xÃ­cara)", "Azeite extra virgem", "Tomilho e alecrim frescos"],
    utensils: ["Assadeira redonda ou oval", "Mandoline ou faca afiada", "Pincel culinÃ¡rio", "Papel manteiga", "EspÃ¡tula"],
    steps: [
        "PrÃ©-aqueÃ§a o forno a 190Â°C. Forre a assadeira com papel manteiga levemente untado com azeite.",
        "Com a mandoline ou faca bem afiada, fatie todos os legumes em rodelas de 3mm de espessura uniformes.",
        "Espalhe o molho de tomate caseiro pela assadeira em uma camada fina e uniforme â€” essa Ã© a base de sabor.",
        "Comece a montar o ratatouille sobrepondo as rodelas em sequÃªncia: abobrinha, tomate, berinjela...",
        "Repita o padrÃ£o colorido, criando um visual em espiral ou em linhas sobrepostas que Ã© de encher os olhos.",
        "A beleza do ratatouille estÃ¡ justamente na organizaÃ§Ã£o â€” cada fatia fica levemente por cima da anterior.",
        "Pincele generosamente cada camada de legumes com azeite extra virgem para manter a suculÃªncia.",
        "Espalhe os raminhos de tomilho e alecrim entre as fatias de legumes para perfumar durante o forno.",
        "Tempere com sal, pimenta e um fio extra de azeite por cima de tudo antes de cobrir com papel manteiga.",
        "Cubra com papel manteiga e leve ao forno por 30 minutos. Depois, retire o papel e asse mais 15 minutos.",
        "Os legumes devem estar macios e levemente caramelizados nas bordas â€” esse Ã© o ponto perfeito.",
        "Sirva quente como prato principal ou acompanhamento. Uma obra de arte na cozinha sÃªnior!"
    ]
});

// â”€â”€ Book 5: Locked recipe stubs (IDs 203â€“250) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const book5Locked = [
    "Sopa de Cebola Gratinada ao Forno",
    "BrÃ³colis Assado com Alho e ParmesÃ£o",
    "Curry de GrÃ£o-de-Bico com Espinafre",
    "Nhoque de Batata-Doce ao Molho de SÃ¡lvia",
    "Quiche de Alho-PorÃ³ e Ricota",          // 208
    "Lasanha de Berinjela e Tomate",
    "Creme de Cenoura com Gengibre e Coco",
    "Espaguete de Abobrinha ao Pesto de ManjericÃ£o",
    "Tabule de Couscous com HortelÃ£ e Pepino",
    "Salada de Lentilha com Beterraba Assada",// 213
    "Bolinhos de Espinafre e Ricota no Forno",
    "Torta Salgada de Alho-PorÃ³ e Tomate Seco",
    "Sopa de Ervilha Fresca com HortelÃ£",
    "Shakshuka de Forno com Ervas",
    "Arroz de Couve-Flor com AÃ§afrÃ£o",       // 218
    "Creme de AbÃ³bora com Gengibre e LimÃ£o",
    "Salada Quente de RaÃ­zes Assadas",
    "HambÃºrguer de Beterraba e GrÃ£o-de-Bico",
    "PimentÃµes Recheados com Quinoa e Ervas",
    "MacarrÃ£o Integral ao Pesto de RÃºcula",   // 223
    "SuflÃª de Queijo com BrÃ³colis",
    "Berinjela Recheada com Tofu e Tomate",
    "Torta de Espinafre com Massa Integral",
    "Crocante de Couve-Flor ao Curry",
    "Chili de FeijÃ£o e Legumes",             // 228
    "Wrap de Alface com GrÃ£o-de-Bico Temperado",
    "Bowl de Beterraba com Iogurte e Nozes",
    "Creme de Alho-PorÃ³ com Batata-Baroa",
    "Escarola Refogada com LimÃ£o Siciliano",
    "Tortilha Espanhola de Legumes",          // 233
    "Pepino Recheado com Queijo Cottage",
    "Sopa de FeijÃ£o Verde com HortelÃ£",
    "Rolinhos de Cenoura Assada com Tahine",
    "Abobrinha Recheada com Arroz e Ervas",
    "Caprese de Tomate e ManjericÃ£o",         // 238
    "Salteado de Vagens com AmÃªndoa Laminada",
    "Creme de Beterraba com Iogurte Grego",
    "Risoto de Aspargos com ParmesÃ£o",
    "Polenta Cremosa com Cogumelos Salteados",
    "Tortinha de Espinafre e Queijo Feta",    // 243
    "Sopa de Tomate com ManjericÃ£o Fresco",
    "Cogumelos Recheados com Queijo e Ervas",
    "BrÃ³colis ao Vapor com Molho de Tahine",
    "Salada de Radicchio com Laranja e Nozes",
    "Espargos Grelhados com Ovo PochÃª",       // 248
    "Terrine de Legumes ao Forno",
    "Sopa Kremlin de Vegetais da Horta"       // 250
];
book5Locked.forEach((name, i) => {
    recipes.push({ id: i + 203, bookId: 5, title: name, locked: true });
});

// â”€â”€ Montagem da Biblioteca (Acesso pelo app.js) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
window.biblioteca = {
    reliquias: recipes.filter(r => r.bookId === 1),
    livro2: [
        {
            id: 1, title: 'Tigela de Quinoa com Ovos Escalfados', time: '20 minutos',
            ingredients: ['1/2 xícara de quinoa já cozida e soltinha', '2 ovos caipiras fresquinhos', '1 punhado de folhinhas de espinafre bem lavadas', '1 fio generoso de azeite extra virgem', 'Sal e salsinha a gosto'],
            utensils: ['Panelinha', 'Escumadeira', 'Tigela funda para servir'],
            steps: ['Ferva água numa panelinha. Quando borbulhar, reduza o fogo e mantenha quietinha.', 'Quebre um ovo num copinho e deslize suavemente na água. Cozinhe 3 minutos para a gema ficar molinha.', 'Monte a quinoa morna no fundo da tigela com espinafre fresco por cima.', 'Retire o ovo com a escumadeira e deite sobre o espinafre.', 'Regue com azeite, salpique sal e salsinha. Refeição completa e cheia de proteína!']
        },
        {
            id: 2, title: 'Smoothie Cremoso de Mamão com Linhaça', time: '10 minutos',
            ingredients: ['1 fatia média de mamão papaia bem maduro', '1 colher de sopa de semente de linhaça dourada', '1/2 copo de iogurte natural desnatado', '1 fio de mel puro', '1 pitadinha de canela em pó'],
            utensils: ['Liquidificador', 'Copo alto de vidro'],
            steps: ['Retire as sementes do mamão e corte a polpa em pedacinhos.', 'Coloque o mamão, a linhaça, o iogurte e o mel no liquidificador.', 'Bata por 1 minuto até obter um creme liso e homogêneo.', 'Despeje no copo, salpique canela e beba devagarzinho de manhã.']
        },
        {
            id: 3, title: 'Batata-Doce Assada Recheada com Frango', time: '40 minutos',
            ingredients: ['1 batata-doce média bem lavada', '1 xícara de peito de frango cozido e desfiado', '1 colher de sopa de requeijão light', '1 colher de sopa de salsinha fresca picadinha', 'Sal e páprica a gosto'],
            utensils: ['Assadeira pequena', 'Papel alumínio', 'Tigelinha', 'Garfo'],
            steps: ['Pré-aqueça o forno a 200°C. Enrole a batata em papel alumínio e asse 30 minutos.', 'Misture o frango com o requeijão, a salsinha e o sal numa tigelinha.', 'Corte a batata ao meio e abra cuidadosamente.', 'Recheie cada metade com o frango cremoso e salpique páprica por cima.']
        },
        {
            id: 4, title: 'Crepioca Leve de Queijo Minas e Tomate', time: '15 minutos',
            ingredients: ['1 ovo inteiro', '2 colheres de sopa de goma de tapioca', '1 fatia de queijo minas frescal', '3 rodelinhas de tomate maduro', 'Orégano e sal a gosto'],
            utensils: ['Tigelinha', 'Garfo', 'Frigideira antiaderente'],
            steps: ['Misture o ovo com a goma de tapioca e sal até virar massa lisa.', 'Aqueça a frigideira antiaderente em fogo baixo sem óleo.', 'Despeje e espalhe em disco. Doure um lado e vire.', 'Coloque o queijo e o tomate em metade. Dobre como pastel e deixe derreter.']
        },
        {
            id: 5, title: 'Salada Colorida de Feijão Fradinho com Atum', time: '20 minutos',
            ingredients: ['1 xícara de feijão fradinho cozido e escorrido', '1/2 lata de atum ao natural', '1/4 de cebola roxa picada miudinha', '1/2 cenoura ralada fina', '1 fio de azeite, gotas de limão e cheiro verde à vontade'],
            utensils: ['Tigelinha de servir', 'Colher', 'Ralador pequeno'],
            steps: ['Lave o feijão com água fria e escorra bem.', 'Coloque na tigela com a cebola, cenoura e cheiro verde.', 'Escorra o atum e solte os pedaços com garfo por cima.', 'Regue com azeite e limão. Misture com delicadeza e sirva gelado com torradinha.']
        },
        {
            id: 6, title: 'Omelete Fofo de Espinafre no Forno', time: '25 minutos',
            ingredients: ['3 ovos caipiras', '1 punhado de espinafre refogado e escorrido', '2 colheres de queijo cottage', '1 dente de alho amassado', 'Azeite, sal e noz-moscada a gosto'],
            utensils: ['Frigideira que possa ir ao forno', 'Tigela', 'Espátula'],
            steps: ['Pré-aqueça o forno a 180°C. Refogue o alho no azeite, adicione o espinafre até murchar.', 'Bata os ovos com cottage, sal e noz-moscada.', 'Despeje na frigideira untada, espalhe espinafre e asse 12 minutos.', 'Corte em fatias e sirva com salada fresquinha.']
        },
        {
            id: 7, title: 'Filé de Tilápia com Crosta de Ervas', time: '35 minutos',
            ingredients: ['2 filés de tilápia frescos sem espinhos', 'Suco de 1 laranja pera', '3 colheres de farinha de rosca integral', '1 colher de azeite', 'Salsinha, orégano e sal a gosto'],
            utensils: ['Assadeira', 'Papel manteiga', 'Pincel culinário'],
            steps: ['Tempere os filés com suco de laranja e sal. Deixe descansar 10 minutos.', 'Misture farinha de rosca com azeite e ervas até farinha úmida.', 'Cubra cada filé com a crosta e asse a 200°C por 20 minutos.', 'Sirva com arroz integral e legumes no vapor.']
        },
        {
            id: 8, title: 'Caldo Cremoso de Inhame com Alho-Poró', time: '40 minutos',
            ingredients: ['3 inhames médios descascados e picados', '1 talo de alho-poró em rodelas', '1 colher de sopa de azeite', '1 folha de louro', 'Sal e salsinha a gosto'],
            utensils: ['Panela funda', 'Liquidificador ou mixer'],
            steps: ['Refogue o alho-poró no azeite até amolecer. Adicione o inhame e o louro.', 'Cubra com água quente e cozinhe por 25 minutos.', 'Retire o louro. Bata tudo no liquidificador até creme liso.', 'Volte ao fogo, ajuste o sal e sirva quentinho com salsinha.']
        },
        {
            id: 9, title: 'Mingau de Aveia com Maçã e Canela', time: '15 minutos',
            ingredients: ['4 colheres de sopa de aveia em flocos finos', '1 xícara de leite desnatado ou vegetal', '1 maçã descascada e ralada', '1 fio de mel', '1 colher de chá de canela em pó'],
            utensils: ['Panelinha', 'Colher de pau'],
            steps: ['Aqueça o leite em fogo baixo sem ferver.', 'Acrescente a aveia e mexa por 3 minutos até engrossar.', 'Adicione a maçã ralada e misture por mais 1 minuto.', 'Regue com mel e canela. Perfeito para começar o dia com energia!']
        },
        {
            id: 10, title: 'Enroladinhos de Couve Recheados', time: '30 minutos',
            ingredients: ['4 folhas grandes de couve-manteiga', '1 xícara de arroz integral já cozido', '100g de carne moída magra temperada', '1/2 xícara de molho de tomate caseiro', 'Sal e tempero verde a gosto'],
            utensils: ['Panelinha', 'Tábua de corte', 'Faca fina'],
            steps: ['Mergulhe as folhas de couve em água fervente por 5 segundos e coloque em água fria.', 'Retire o talo central com a faca.', 'Coloque arroz com carne no centro de cada folha e enrole firme.', 'Aqueça na panela com molho de tomate por 10 minutos e sirva.']
        },
        {
            id: 11, title: 'Purê Dourado de Abóbora com Cúrcuma', time: '25 minutos',
            ingredients: ['500g de abóbora moranga descascada e picada', '1 colher de chá de cúrcuma', '1 colher de sopa de azeite', 'Sal e pimenta branca a gosto', 'Cheiro verde para finalizar'],
            utensils: ['Panela', 'Garfo para amassar'],
            steps: ['Cozinhe a abóbora em água com sal por 20 minutos até ficar macia.', 'Escorra e amasse até virar purê liso.', 'Adicione azeite e cúrcuma, misture bem — cor dourada linda!', 'Ajuste o sal e sirva com cheiro verde ao lado de uma proteína magra.']
        },
        {
            id: 12, title: 'Sanduíche Natural de Frango com Mostarda e Mel', time: '15 minutos',
            ingredients: ['2 fatias de pão integral macio', '1/2 xícara de frango desfiado cozido', '1 colher de chá de mostarda', '1 fio de mel', '2 folhas de alface e 2 rodelinhas de tomate'],
            utensils: ['Frigideira ou torradeira', 'Tigelinha'],
            steps: ['Misture o frango com mostarda e mel numa tigelinha.', 'Monte o sanduíche com frango, alface e tomate.', 'Grelhe por 2 minutos de cada lado para amornar e tostar.', 'Corte ao meio e sirva imediatamente.']
        },
        {
            id: 13, title: 'Salada Quente de Lentilha com Cenoura', time: '20 minutos',
            ingredients: ['1 xícara de lentilha vermelha', '1 cenoura pequena em cubinhos', '1 dente de alho', '1 fio de azeite', 'Suco de 1/2 limão e salsinha'],
            utensils: ['Panela pequena', 'Tigelinha de servir'],
            steps: ['Cozinhe a lentilha com alho e cenoura em água por 15 minutos.', 'Escorra mas não lave — o amido ajuda a temperar.', 'Enquanto quente, tempere com azeite, limão e sal.', 'Salpique salsinha. Refeição completa com proteína, fibra e vitaminas!']
        },
        {
            id: 14, title: 'Refogado de Repolho com Cebolinha e Cominho', time: '15 minutos',
            ingredients: ['1/4 de repolho em tiras finas', '3 talos de cebolinha fresca em rodelas', '1 pitada de cominho em pó', '1 fio de azeite', 'Sal e um toque de vinagre de maçã'],
            utensils: ['Frigideira funda'],
            steps: ['Aqueça o azeite e refogue a cebolinha por 1 minuto.', 'Adicione o repolho e 2 colheres de água para criar vapor.', 'Tampe e deixe murchar por 4 minutos. Fica macio e fácil de mastigar.', 'Tempere com sal, cominho e vinagre. Leve e não causa gases!']
        },
        {
            id: 15, title: 'Torta de Liquidificador de Frango e Queijo', time: '40 minutos',
            ingredients: ['2 ovos', '1 xícara de farinha de aveia fina', '1/2 xícara de leite', '1 xícara de frango desfiado temperado', '1/2 xícara de queijo minas ralado e 1 colher de fermento'],
            utensils: ['Liquidificador', 'Forma redonda pequena', 'Forno'],
            steps: ['Pré-aqueça o forno a 180°C. Bata ovos, leite e farinha no liquidificador.', 'Misture o frango, metade do queijo e o fermento com colher.', 'Despeje na forma untada e espalhe o queijo restante por cima.', 'Asse 25 minutos até o palito sair limpo.']
        },
        {
            id: 16, title: 'Pasta de Berinjela Defumada com Azeite', time: '30 minutos',
            ingredients: ['1 berinjela média', '1 dente de alho pequeno amassado', '2 colheres de azeite extra virgem', 'Suco de 1/2 limão', 'Salsinha fresca e sal'],
            utensils: ['Fogão', 'Garfo de metal', 'Tigelinha para amassar'],
            steps: ['Com cuidado, chamusque a berinjela diretamente sobre a chama do fogão, girando sempre.', 'Quando murcha e chamuscada, deixe esfriar 10 minutos.', 'Retire a casca queimada — surgirá polpa mole e defumada.', 'Amasse, junte alho, limão, azeite e sal. Sirva com torradinhas.']
        },
        {
            id: 17, title: 'Risoto Saudável de Couve-Flor com Açafrão', time: '25 minutos',
            ingredients: ['1/2 couve-flor média ralada grossa', '100g de frango desfiado cozido', '1 colher de azeite', '1 pitada de cúrcuma', '2 colheres de creme de ricota'],
            utensils: ['Panela antiaderente', 'Ralador grosso'],
            steps: ['Rale a couve-flor no ralador grosso — vira grãozinhos como arroz.', 'Refogue no azeite com cúrcuma por 4 minutos mexendo sempre.', 'Adicione o frango e misture por mais 2 minutos.', 'Finalize com ricota. Sirva com cheiro verde. O sabor surpreende!']
        },
        {
            id: 18, title: 'Suflê Leve de Espinafre e Queijo', time: '35 minutos',
            ingredients: ['2 ovos (gemas e claras separadas)', '1 xícara de espinafre refogado bem espremido', '3 colheres de queijo cottage', '1 colher de farinha de aveia fina', 'Sal e noz-moscada'],
            utensils: ['Ramequins individuais', 'Batedeira ou garfo para claras', 'Forno a 180°C'],
            steps: ['Bata claras em neve firme. Misture gemas com espinafre, queijo, farinha e temperos.', 'Incorpore as claras com movimentos suaves de baixo para cima.', 'Distribua nos ramequins untados e asse 18 minutos sem abrir a porta!', 'Sirva imediatamente ao sair do forno — cresce lindo e fofinho!']
        },
        {
            id: 19, title: 'Bolinhas Energéticas de Amendoim e Aveia', time: '15 minutos',
            ingredients: ['2 colheres de pasta de amendoim integral', '1 xícara de aveia em flocos grossos', '2 colheres de mel puro', '1 colher de cacau em pó amargo', '1 colher de coco ralado sem açúcar'],
            utensils: ['Tigela grande', 'Mãos limpas'],
            steps: ['Misture a pasta de amendoim com o mel até dissolver.', 'Junte a aveia e o cacau, misture até virar massa que desgruda.', 'Modele bolinhas do tamanho de uma uva — dá umas 15.', 'Role no coco ralado e leve à geladeira por 30 minutos. Duram 5 dias!']
        },
        {
            id: 20, title: 'Espaguete de Abobrinha com Molho Bolonhesa Leve', time: '30 minutos',
            ingredients: ['2 abobrinhas médias', '150g de carne moída magra', '1 tomate maduro picado sem sementes', '1 dente de alho', 'Azeite, manjericão e sal a gosto'],
            utensils: ['Espiralizador ou faca afiada', 'Frigideira'],
            steps: ['Corte as abobrinhas em tiras longas com espiralizador ou faca.', 'Refogue o alho e doure a carne. Junte o tomate e cozinhe 8 minutos.', 'Salteie o espaguete de abobrinha por 2 minutos apenas.', 'Sirva com molho de carne e folhas de manjericão fresco.']
        },
        {
            id: 21, title: 'Papinha Doce de Quinoa com Pera', time: '20 minutos',
            ingredients: ['1/3 de xícara de quinoa lavada', '1 pera madura descascada e picada', '1/2 xícara de leite de aveia', '1 fio de mel', 'Canela e baunilha a gosto'],
            utensils: ['Panelinha', 'Garfo para amassar'],
            steps: ['Cozinhe a quinoa no leite em fogo baixo por 10 minutos mexendo sempre.', 'Adicione a pera e cozinhe mais 5 minutos até amolecer.', 'Amasse levemente a pera para criar textura cremosa.', 'Adoce com mel, aromatize com canela e baunilha. Serve também como sobremesa!']
        },
        {
            id: 22, title: 'Bowl de Iogurte com Chia e Frutas', time: '35 minutos',
            ingredients: ['1 pote de iogurte grego natural', '1 colher de chia', '1/2 banana madura fatiada', 'Raspas de laranja', '1 fio de mel e granola sem açúcar'],
            utensils: ['Bowl bonito', 'Colher'],
            steps: ['Misture o iogurte com a chia e geladeira por 30 minutos.', 'Arrume as fatias de banana por cima do iogurte gelado.', 'Decore com raspas de laranja, mel e granola para crocância.', 'Café da manhã que parece sobremesa mas nutre de verdade!']
        },
        {
            id: 23, title: 'Wraps de Alface com Homus e Frango', time: '10 minutos',
            ingredients: ['4 folhas grandes de alface americana', '1/2 xícara de homus de grão-de-bico', '100g de peito de frango fatiado fino', '1/4 pepino em palitinhos', 'Páprica defumada e limão'],
            utensils: ['Prato liso', 'Faca'],
            steps: ['Lave e seque as folhas de alface — são o wrap no lugar do pão.', 'Espalhe homus no centro de cada folha.', 'Distribua frango e palitinhos de pepino por cima.', 'Esprema limão, polvilhe páprica e sirva — levíssimo e sem glúten!']
        },
        {
            id: 24, title: 'Mingau de Milho Verde com Leite de Coco', time: '20 minutos',
            ingredients: ['1 xícara de milho verde cozido', '1/2 xícara de leite de coco light', '1/2 xícara de leite desnatado', '1 colher de amido de milho', 'Sal e canela a gosto'],
            utensils: ['Liquidificador', 'Panela antiaderente'],
            steps: ['Bata o milho com os dois leites no liquidificador até cremoso.', 'Leve ao fogo baixo com o amido mexendo sempre até engrossar — 5 minutos.', 'Ajuste a doçura com mel se preferir mais doce.', 'Sirva quentinho ou frio como sobremesa leve.']
        },
        {
            id: 25, title: 'Frango ao Limão-Siciliano com Ervas', time: '35 minutos',
            ingredients: ['2 filezinhos de peito de frango achatados', 'Suco e raspas de 1 limão-siciliano', '1 dente de alho picado fino', '1 ramo de tomilho fresco', '1 fio de azeite e sal'],
            utensils: ['Frigideira grossa antiaderente', 'Rolo de macarrão'],
            steps: ['Tempere o frango com limão, raspas, alho, tomilho e sal por 10 minutos.', 'Aqueça a frigideira bem quente com um fio de azeite.', 'Grelhe 3 minutos de cada lado até dourar bem.', 'Descanse 2 minutos antes de fatiar. Sirva com purê de batata-doce!']
        },
        {
            id: 26, title: 'Tomates Recheados com Atum e Ricota', time: '20 minutos',
            ingredients: ['4 tomates médios firmes', '1 lata de atum ao natural bem escorrida', '3 colheres de ricota fresca', 'Salsinha e azeite', 'Sal e pimenta branca'],
            utensils: ['Faca de ponta', 'Assadeira pequena', 'Tigelinha'],
            steps: ['Corte a tampinha dos tomates e escave o miolo com colher pequena.', 'Misture atum com ricota, miolo picado, salsinha e sal.', 'Recheie cada tomate generosamente e borrife azeite.', 'Sirva frios ou asse 10 minutos a 180°C para gratinar.']
        },
        {
            id: 27, title: 'Pudim de Chia com Leite de Coco e Manga', time: '5 minutos + 4h geladeira',
            ingredients: ['3 colheres de chia', '1 xícara de leite de coco light', '1 fio de mel', '1/2 manga madura picada', 'Raspas de limão para decorar'],
            utensils: ['Potinho com tampa', 'Colher'],
            steps: ['Misture a chia com leite de coco e mel. Mexa bem sem grumos.', 'Tampe e geladeira por no mínimo 4 horas — a chia vira gel cremoso.', 'Cubra com cubinhos de manga e raspas de limão.', 'Rico em fibras e ômega — parece sobremesa!']
        },
        {
            id: 28, title: 'Caldo de Mandioca com Frango e Coentro', time: '45 minutos',
            ingredients: ['300g de mandioca descascada em cubos', '1 xícara de frango desfiado', '1 dente de alho', '1 colher de azeite', 'Coentro fresco, sal e pimenta branca'],
            utensils: ['Panela de pressão ou comum', 'Liquidificador'],
            steps: ['Cozinhe a mandioca com alho e sal por 20 minutos na pressão.', 'Bata metade da mandioca com 1 xícara do caldo até virar creme.', 'Volte o creme com a mandioca inteira e o frango desfiado.', 'Cozinhe 5 minutos, finalize com coentro fresco.']
        },
        {
            id: 29, title: 'Coxinhas de Forno de Batata-Doce com Queijo', time: '35 minutos',
            ingredients: ['2 batatas-doces cozidas e amassadas', '1/2 xícara de queijo minas ralado', '1 colher de farinha de arroz', 'Sal e salsinha', 'Farinha de rosca integral para empanar'],
            utensils: ['Tigela grande', 'Assadeira com papel manteiga', 'Mãos limpas'],
            steps: ['Amasse as batatas e misture queijo, farinha, sal e salsinha.', 'Molhe as mãos e molde a massa em coxinhas.', 'Role na farinha de rosca pressionando levemente.', 'Borrife azeite e asse a 200°C por 20 minutos até dourar. Sem fritura!']
        },
        {
            id: 30, title: 'Espetinhos de Peixe ao Forno com Tomate', time: '30 minutos',
            ingredients: ['300g de tilápia em cubos', '1 caixinha de tomate-cereja', '1 cebola pequena em quartos', 'Suco de 1 limão', 'Azeite, sal e ervas de Provence'],
            utensils: ['Espetinhos de bambu molhados', 'Assadeira', 'Pincel culinário'],
            steps: ['Tempere o peixe com limão, sal e ervas por 10 minutos.', 'Monte espetinhos alternando: peixe, tomate-cereja, cebola.', 'Pincele azeite por toda a superfície.', 'Asse a 200°C por 15 minutos virando na metade.']
        },
        {
            id: 31, title: 'Salada de Sardinha com Pepino e Vinagrete', time: '15 minutos',
            ingredients: ['1 lata de sardinha em azeite (escorra metade do óleo)', '1 pepino japonês em rodelas finas', '1/2 tomate picado sem sementes', '1/4 cebola roxa picadinha', 'Vinagre de maçã, azeite e salsinha'],
            utensils: ['Tigela de servir', 'Garfo'],
            steps: ['Solte as sardinhas em lascas com garfo, retirando espinhos.', 'Acrescente pepino, tomate e cebola roxa.', 'Regue com azeite e vinagre de maçã. Nada mais necessário!', 'Misture suavemente. Rica em ômega-3 para o coração!']
        },
        {
            id: 32, title: 'Biscoitos Macios de Aveia e Banana', time: '25 minutos',
            ingredients: ['2 bananas bem maduras amassadas', '1 xícara e meia de aveia em flocos grossos', '1 colher de mel', '1/2 colher de canela', '1 colher de coco ralado sem açúcar'],
            utensils: ['Tigela grande', 'Assadeira com papel manteiga', 'Colher de sopa'],
            steps: ['Pré-aqueça a 180°C. Amasse bananas com mel até virar pasta.', 'Junte aveia, canela e coco até massa moldável.', 'Deposite colheradas na assadeira e achate com colher molhada.', 'Asse 18 minutos. Macios e perfeitos para guloseimas sem culpa!']
        },
        {
            id: 33, title: 'Sopa Vermelha de Beterraba com Batata-Baroa', time: '40 minutos',
            ingredients: ['1 beterraba grande descascada e picada', '1 batata-baroa descascada e picada', '1 dente de alho', '1 fio de azeite', 'Sal, pimenta branca e 2 colheres de creme de leite light'],
            utensils: ['Panela funda', 'Liquidificador'],
            steps: ['Refogue o alho no azeite. Adicione beterraba e batata-baroa.', 'Cubra com 1 litro de água quente e cozinhe 25 minutos.', 'Bata tudo no liquidificador até creme liso e vibrante.', 'Adicione creme de leite, ajuste sal e sirva com fio de azeite.']
        },
        {
            id: 34, title: 'Tofu Grelhado com Shoyu Light e Alecrim', time: '20 minutos',
            ingredients: ['1 bloco de tofu firme', '2 colheres de shoyu light', '1 ramo de alecrim fresco', '1 dente de alho fatiado', '1 fio de azeite e tomatinhos para acompanhar'],
            utensils: ['Frigideira antiaderente', 'Prato para marinar'],
            steps: ['Corte o tofu em fatias de 1,5 cm e seque em papel toalha 10 minutos.', 'Marine no shoyu com alho fatiado por 5 minutos.', 'Grelhe com azeite e alecrim por 3 minutos de cada lado.', 'Sirva com tomatinhos frescos. Proteína vegetal leve e saborosa!']
        },
        {
            id: 35, title: 'Arroz Verde com Rúcula e Queijo Parmesão', time: '15 minutos',
            ingredients: ['1 xícara de arroz branco já cozido', '1/2 xícara de rúcula picada', '2 colheres de parmesão ralado', '1 clara de ovo', '1 fio de azeite e alho'],
            utensils: ['Frigideira grande antiaderente'],
            steps: ['Aqueça azeite e doure o alho. Adicione o arroz por 2 minutos.', 'Adicione a rúcula e mexa — murcha e deixa o arroz verde.', 'Junte a clara mexendo rápido — liga o arroz sem ficar seca.', 'Finalize com parmesão. Reinvenção deliciosa para sobras!']
        },
        {
            id: 36, title: 'Panquecas de Espinafre com Frango Recheado', time: '30 minutos',
            ingredients: ['1 ovo', '1 xícara de espinafre refogado e triturado', '1/2 xícara de farinha de arroz', '1/2 xícara de leite', '100g de frango desfiado e molho de tomate para rechear'],
            utensils: ['Frigideira antiaderente', 'Liquidificador'],
            steps: ['Bata ovo, espinafre, farinha e leite até massa verde e lisa.', 'Faça panquecas finas na frigideira untada, dourando dos dois lados.', 'Recheie com frango desfiado e enrole.', 'Cubra com molho de tomate e asse 10 minutos a 180°C.']
        },
        {
            id: 37, title: 'Mingau de Aveia com Cúrcuma e Maçã', time: '15 minutos',
            ingredients: ['4 colheres de aveia fina', '1 xícara de leite de aveia', '1/2 maçã ralada', '1/2 colher de cúrcuma em pó', '1 fio de mel e amêndoa laminada'],
            utensils: ['Panelinha', 'Bowl para servir'],
            steps: ['Aqueça o leite. Junte aveia e cúrcuma mexendo por 3 minutos.', 'Quando engrossar, adicione a maçã ralada por mais 1 minuto.', 'Transfira para o bowl, regue com mel e distribua as amêndoas.', 'A cúrcuma é anti-inflamatória — um mingau que cuida por dentro!']
        },
        {
            id: 38, title: 'Peixe Assado com Legumes na Bandeja', time: '40 minutos',
            ingredients: ['2 postas ou filés de peixe branco', '1 cenoura em palitos', '1 abobrinha em rodelas', '1/2 cebola em quartos', 'Azeite, tomilho, sal e alho'],
            utensils: ['Bandeja refratária grande', 'Papel alumínio'],
            steps: ['Pré-aqueça a 200°C. Tempere os legumes na bandeja com azeite e ervas.', 'Coloque o peixe por cima e regue mais azeite.', 'Cubra com alumínio e asse 20 minutos. Retire e mais 10 minutos.', 'Tudo cozinhou junto e só uma travessa para lavar!']
        },
        {
            id: 39, title: 'Bolinho de Atum e Cenoura ao Forno', time: '30 minutos',
            ingredients: ['1 lata de atum ao natural bem escorrida', '1 cenoura ralada', '2 ovos', '1 colher de farinha de aveia', 'Salsinha, sal e pimenta branca'],
            utensils: ['Tigelinha', 'Forminha de mini cupcake', 'Forno a 180°C'],
            steps: ['Misture atum, cenoura, ovos, farinha e temperos.', 'Ajuste com mais farinha se necessário — deve ser moldável.', 'Distribua em forminhas de mini cupcake untadas.', 'Asse 20 minutos até firmar e dourar. Bolinhos proteicos sem fritura!']
        },
        {
            id: 40, title: 'Fritada de Couve-Flor com Ovos', time: '20 minutos',
            ingredients: ['2 xícaras de couve-flor cozida em bukê', '3 ovos', '1/4 cebola picadinha', '1 colher de parmesão', 'Azeite, sal e cúrcuma'],
            utensils: ['Frigideira que vá ao forno', 'Forno ou broiler'],
            steps: ['Refogue a cebola no azeite. Adicione a couve-flor e tempere com cúrcuma.', 'Bata os ovos com parmesão e despeje por cima sem mexer.', 'Firme as bordas 3 minutos no fogo, depois gratine no forno 5 minutos.', 'Deslize para o prato e corte em fatias. Dourada e nutritiva!']
        },
        {
            id: 41, title: 'Bolo de Cenoura Proteico sem Açúcar Refinado', time: '50 minutos',
            ingredients: ['2 cenouras médias picadas', '3 ovos', '1/2 xícara de óleo de coco derretido', '1 xícara de aveia fina', '1/4 xícara de mel e 1 colher de fermento'],
            utensils: ['Liquidificador', 'Forma de bolo pequena untada', 'Forno'],
            steps: ['Bata cenouras, ovos, óleo e mel no liquidificador até mistura lisa.', 'Transfira para tigela, adicione aveia e misture com colher.', 'Por último o fermento. Asse a 180°C por 35 minutos.', 'Sirva puro ou com pasta de amendoim — combinação perfeita!']
        },
        {
            id: 42, title: 'Isca de Frango ao Alho com Cúrcuma', time: '20 minutos',
            ingredients: ['2 filés de frango em tiras finas', '3 dentes de alho amassados', '1/2 colher de cúrcuma', '1 fio de azeite', 'Sal, limão e salsinha'],
            utensils: ['Frigideira antiaderente', 'Tigela para marinar'],
            steps: ['Marine as tiras no alho, cúrcuma, limão e sal por 10 minutos.', 'Grelhe na frigideira quente sem mexer por 2 minutos — deixe dourar.', 'Vire e grelhe mais 2 minutos. Dourado por fora, macio por dentro.', 'Sirva com arroz integral. A cúrcuma dá cor linda e faz bem!']
        },
        {
            id: 43, title: 'Sopa Revigorante de Abobrinha com Ricota', time: '30 minutos',
            ingredients: ['2 abobrinhas médias picadas', '1/2 cebola', '1 xícara de caldo de legumes', '1/2 xícara de ricota fresca', 'Orégano, sal e azeite'],
            utensils: ['Panela', 'Liquidificador'],
            steps: ['Refogue a cebola no azeite. Junte as abobrinhas e o caldo, cozinhe 15 minutos.', 'Bata tudo no liquidificador até creme bem liso.', 'Dissolva a ricota mexendo bem — textura aveludada irresistível.', 'Ajuste o sal, finalize com orégano e sirva com torradinha integral.']
        },
        {
            id: 44, title: 'Tomates-Cereja Recheados com Ricota e Manjericão', time: '20 minutos',
            ingredients: ['20 tomates-cereja grandes', '1/2 xícara de ricota fresca amassada', '1 colher de goma de tapioca', 'Manjericão fresco e azeite', 'Sal e pimenta branca'],
            utensils: ['Faca de ponta pequena', 'Manga de confeitar'],
            steps: ['Corte a tampa dos tomatinhos e esvazie o miolo.', 'Misture ricota com tapioca, manjericão picado, sal e pimenta.', 'Recheie cada tomatinho com a manga de confeitar.', 'Sirva frios como entrada. Elegantes, frescos e sem culpa!']
        },
        {
            id: 45, title: 'Omelete Gigante de Espinafre para 2 Pessoas', time: '15 minutos',
            ingredients: ['4 ovos caipiras', '1 xícara de espinafre refogado', '2 colheres de queijo minas esfarelado', 'Sal, noz-moscada e cebolinha', '1 fio de azeite'],
            utensils: ['Frigideira grande antiaderente', 'Espátula'],
            steps: ['Bata os ovos com sal e noz-moscada. Adicione espinafre e queijo.', 'Aqueça a frigideira com azeite em fogo médio baixo.', 'Despeje a mistura e tampe. Cozinhe 4 minutos sem mexer.', 'Dobre ao meio quando as bordas firmarem. Simples e proteico!']
        },
        {
            id: 46, title: 'Creme de Castanha com Morangos', time: '15 minutos + 2h hidratação',
            ingredients: ['1/2 xícara de castanhas-de-caju cruas hidratadas por 2h', '1/2 xícara de água filtrada', '1 colher de mel', '1/2 xícara de morangos fatiados', 'Raspas de limão'],
            utensils: ['Liquidificador', 'Copinhos de sobremesa'],
            steps: ['Escorra e enxague as castanhas hidratadas.', 'Liquidifique com água e mel até creme bem liso.', 'Distribua nos copinhos e cubra com os morangos.', 'Finalize com raspas de limão e leve à geladeira 30 minutos.']
        },
        {
            id: 47, title: 'Torta de Vagem com Cúrcuma e Ovo', time: '40 minutos',
            ingredients: ['2 xícaras de vagem cozida e picada em 2cm', '3 ovos', '1/2 cenoura ralada', '1/2 colher de cúrcuma', '1 colher de queijo cottage e sal'],
            utensils: ['Forma de quiche ou assadeira', 'Tigela', 'Forno a 180°C'],
            steps: ['Escorra a vagem cozida. Bata ovos com cottage, cúrcuma e sal.', 'Misture a vagem e cenoura na massa.', 'Despeje em forma untada e asse 25 minutos até firmar.', 'Corte em fatias morna ou fria. Ideal para marmita!']
        },
        {
            id: 48, title: 'Refogado de Pimentões Coloridos com Atum', time: '20 minutos',
            ingredients: ['1 pimentão vermelho e 1 amarelo em tiras', '1 lata de atum ao natural escorrida', '1/2 cebola em meia-lua', '1 dente de alho', 'Azeite, sal e orégano'],
            utensils: ['Frigideira grande'],
            steps: ['Grelhe pimentões e cebola no azeite por 5 minutos.', 'Adicione o alho e refogue mais 1 minuto.', 'Coloque o atum e misture delicadamente.', 'Salpique orégano e sirva sobre arroz integral. Colorido e nutritivo!']
        },
        {
            id: 49, title: 'Biscoitos de Tapioca com Queijo e Orégano', time: '25 minutos',
            ingredients: ['1 xícara de goma de tapioca hidratada', '1/2 xícara de queijo minas ralado', '1 ovo', '1 colher de orégano seco', 'Sal a gosto'],
            utensils: ['Tigela', 'Assadeira com papel manteiga', 'Mãos limpas'],
            steps: ['Esprema bem a goma de tapioca — esse passo é fundamental.', 'Misture com queijo, ovo, orégano e sal até massa moldável.', 'Faça discos redondos com as mãos e disponha na assadeira.', 'Asse a 200°C por 20 minutos até dourar. Biscoitão sem glúten!']
        },
        {
            id: 50, title: 'Pudim de Inhame com Mel e Canela', time: '50 minutos',
            ingredients: ['2 inhames grandes cozidos e amassados', '3 ovos', '1/2 xícara de leite de coco light', '3 colheres de mel', '1 colher de canela e 1 de baunilha'],
            utensils: ['Liquidificador', 'Forma para pudim untada', 'Forno e banho-maria'],
            steps: ['Bata inhame amassado com ovos, leite, mel, canela e baunilha.', 'Despeje na forma untada e leve a 160°C em banho-maria 35 minutos.', 'O palito sai limpo quando pronto. Esfrie completamente antes de desenformar.', 'Sirva com mel. Pudim delicado sem açúcar refinado!']
        }
    ],
    prazersem: recipes.filter(r => r.bookId === 3),
    saboresmar: recipes.filter(r => r.bookId === 4),
    horta: recipes.filter(r => r.bookId === 5)
};
