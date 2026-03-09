// ── Biblioteca SeniorHub — 5 Livros ─────────────────────────────────────────
// Ponto 3: Impede que window.biblioteca seja apagado acidentalmente
window.biblioteca = window.biblioteca || {};

window.BOOKS = {
    1: { title: "Relíquias da Cozinha: Sabores que Atravessam Gerações", key: 'reliquias' },
    2: { title: "Energia no Prato: Nutrição e Praticidade para o Dia a Dia", key: 'livro2' },
    3: { title: "Prazer Sem Culpa: O Lado Doce da Vida com Saúde", key: 'prazersem' },
    4: { title: "Sabores do Mar: Leveza e Nutrição para a Longevidade", key: 'saboresmar' },
    5: { title: "Horta no Prato: O Melhor dos Vegetais na Cozinha Sênior", key: 'horta' }
};

// Retorna { bookNum, bookKey, title } a partir da chave e do id local
function getBookByKey(bookKey) {
    for (const [num, book] of Object.entries(BOOKS)) {
        if (book.key === bookKey) return { number: parseInt(num), ...book };
    }
    return null;
}


// ── Book 1: Full sample recipes (IDs 1–5) ──────────────────────────────────
const recipes = [
    {
        id: 1, bookId: 1, prepTime: "25 minutos",
        title: "Sopa Nutritiva de Abóbora com Gengibre",
        ingredients: ["500g de abóbora cabotiá", "1 pedaço pequeno de gengibre", "1 cebola média", "2 dentes de alho", "Sal e azeite a gosto"],
        utensils: ["Panela grande", "Liquidificador ou mixer", "Colher de pau", "Faca afiada"],
        steps: [
            "Descasque a abóbora com cuidado e corte em cubos médios de aproximadamente 3 cm.",
            "Pique a cebola e o alho bem miudinhos para que soltem todo o sabor durante o refogado.",
            "Em uma panela grande, aqueça um fio de azeite em fogo médio e refogue a cebola e o alho até ficarem transparentes e levemente dourados.",
            "Adicione os cubos de abóbora e o gengibre ralado na panela, mexendo bem para incorporar os sabores.",
            "Cubra tudo com água quente — apenas o suficiente para cobrir a abóbora — e tempere com sal a gosto.",
            "Deixe cozinhar com a panela semi-tampada em fogo médio por cerca de 20 minutos, até que a abóbora esteja completamente macia.",
            "Com muito cuidado para não se queimar, transfira tudo para o liquidificador e bata até obter um creme liso e aveludado.",
            "Volte o creme para a panela e ajuste o sal. Se necessário, adicione um pouco mais de água quente para a consistência desejada.",
            "Aqueça em fogo baixo por mais 3 minutos, mexendo delicadamente para não grudar.",
            "Prove e ajuste os temperos a gosto, acrescentando mais gengibre se preferir um sabor mais intenso.",
            "Sirva bem quentinho em tigelas fundas, finalizando com um fio de azeite extra virgem.",
            "Aproveite cada colherada dessa sopa que aquece o coração e fortalece o corpo."
        ]
    },
    {
        id: 2, bookId: 1, prepTime: "30 minutos",
        title: "Peixe Assado com Ervas da Horta",
        ingredients: ["2 filés de tilápia ou pescada", "Suco de 1 limão", "Alecrim e tomilho frescos", "Rodelas de tomate", "Azeite extra virgem"],
        utensils: ["Assadeira média", "Papel manteiga", "Pincel de silicone", "Travessa para servir"],
        steps: [
            "Pré-aqueça o forno a 180°C por pelo menos 10 minutos antes de começar.",
            "Lave bem os filés de peixe em água corrente e seque delicadamente com papel toalha.",
            "Tempere os filés com o suco de limão, sal e uma pitada de pimenta branca dos dois lados.",
            "Deixe o peixe descansar no tempero por 10 minutos para absorver bem os sabores.",
            "Forre a assadeira com papel manteiga, evitando que o peixe grude e facilite a limpeza.",
            "Acomode os filés delicadamente na assadeira, deixando um pequeno espaço entre eles.",
            "Distribua as rodelas de tomate por cima de cada filé como uma cobertura protetora.",
            "Espalhe os ramos de alecrim e as folhinhas de tomilho por cima, pressionando levemente.",
            "Regue com um fio generoso de azeite extra virgem para manter a suculência durante o forno.",
            "Leve ao forno por 20 a 25 minutos — o filé estará pronto quando ficar branquinho e soltar lascas facilmente.",
            "Retire com cuidado usando luvas de forno e transfira para uma travessa bonita.",
            "Este prato leve e perfumado é perfeito para um almoço tranquilo em família."
        ]
    },
    {
        id: 3, bookId: 1, prepTime: "40 minutos",
        title: "Arroz Integral com Vegetais Coloridos",
        ingredients: ["1 xícara de arroz integral", "1 cenoura ralada", "1/2 xícara de ervilhas frescas", "Salsinha picada", "1 dente de alho amassado"],
        utensils: ["Panela de arroz ou comum", "Ralador de legumes", "Escorredor", "Colher de servir"],
        steps: [
            "Lave o arroz integral em água corrente, esfregando levemente com as mãos, e escorra bem.",
            "Em uma panela, aqueça um fio de azeite e refogue o alho amassado por 1 minuto, até perfumar.",
            "Adicione o arroz escorrido e mexa por 2 minutos para que cada grão absorva o sabor do azeite.",
            "Acrescente 2,5 xícaras de água quente, uma pitada de sal e misture bem.",
            "Tampe a panela, reduza o fogo ao mínimo e cozinhe por 30 minutos sem abrir.",
            "Enquanto isso, rale a cenoura na parte grossa do ralador e reserve junto com as ervilhas.",
            "Passados os 30 minutos, abra rapidamente a tampa e disponha a cenoura e as ervilhas por cima sem mexer.",
            "Tampe novamente e deixe no fogo baixo por mais 5 minutos para cozinhar os legumes no vapor.",
            "Desligue o fogo e deixe descansar tampado por 5 minutos — isso deixa o arroz bem soltinho.",
            "Solte os grãos com um garfo, fazendo movimentos leves de baixo para cima.",
            "Misture a salsinha picada fresca para dar cor e frescor ao prato.",
            "Uma refeição completa e cheia de fibras que cuida da nossa saúde com muito sabor."
        ]
    },
    {
        id: 4, bookId: 1, prepTime: "15 minutos",
        title: "Salada Tropical com Molho de Iogurte",
        ingredients: ["Folhas de alface variadas", "1 manga madura cortada em cubos", "1 pote de iogurte natural", "Hortelã fresca", "Mel e suco de limão"],
        utensils: ["Saladeira grande", "Tigela pequena para o molho", "Batedor de arame (fouet)", "Pinça de salada"],
        steps: [
            "Lave todas as folhas de alface em água corrente, uma por uma, removendo qualquer sujeira.",
            "Seque as folhas delicadamente usando um pano limpo ou centrifugador de salada para não murcharem.",
            "Rasgue as folhas com as mãos em pedaços médios, mantendo um visual rústico e natural.",
            "Corte a manga madura em cubinhos de aproximadamente 1,5 cm, escolhendo uma bem docinha e firme.",
            "Em uma tigela separada, despeje o iogurte natural e adicione o suco de meio limão.",
            "Acrescente uma colher de sopa de mel ao molho e bata bem com o fouet até ficar homogêneo.",
            "Pique a hortelã fresca bem fininha e misture ao molho, reservando algumas folhinhas para decorar.",
            "Arrume as folhas na saladeira de forma espaçosa, criando uma base bonita e volumosa.",
            "Distribua os cubinhos de manga por cima das folhas, criando um contraste tropical de cores.",
            "Regue a salada com o molho de iogurte apenas na hora de servir para não murchar as folhas.",
            "Use a pinça para misturar levemente, garantindo que tudo fique bem temperado.",
            "Decore com as folhinhas de hortelã reservadas e sirva imediatamente para aproveitar o frescor."
        ]
    },
    {
        id: 5, bookId: 1, prepTime: "10 min + 1h gelando",
        title: "Mousse de Abacate e Cacau",
        ingredients: ["1 abacate maduro médio", "3 colheres de cacau em pó", "2 colheres de mel", "Gotas de extrato de baunilha", "Nozes picadas para finalizar"],
        utensils: ["Processador ou liquidificador", "Espátula de silicone", "Taças individuais", "Geladeira"],
        steps: [
            "Escolha um abacate bem maduro — ele deve ceder levemente à pressão dos dedos, garantindo cremosidade máxima.",
            "Corte o abacate ao meio, retire o caroço e extraia toda a polpa com uma colher grande.",
            "Coloque a polpa no processador junto com o cacau em pó peneirado para evitar grumos.",
            "Adicione o mel e as gotinhas de extrato de baunilha para perfumar e adoçar naturalmente.",
            "Bata em velocidade alta por 2 minutos, raspando as bordas com a espátula a cada 30 segundos.",
            "A textura deve ficar extremamente lisa e aveludada, sem nenhum pedacinho de abacate.",
            "Prove e ajuste a doçura com mais mel se necessário — respeite o seu paladar!",
            "Distribua o mousse em taças individuais com uma colher ou saco de confeiteiro para ficar elegante.",
            "Leve à geladeira por no mínimo 1 hora para firmar e desenvolver os sabores.",
            "Na hora de servir, retire da geladeira e deixe descansar 5 minutos em temperatura ambiente.",
            "Finalize cada taça com nozes picadas por cima — o crocante contrasta lindamente com a cremosidade.",
            "Você concluiu as 5 receitas da nossa amostra! Uma sobremesa saudável e surpreendente."
        ]
    }
];

// ── Book 1: Locked recipe stubs (IDs 6–50) ─────────────────────────────────
const book1Locked = [
    "Caldo Verde da Vovó",
    "Frango Caipira com Quiabo",
    "Feijão Tropeiro Mineiro",
    "Bolo de Fubá com Erva-Doce",
    "Canjica com Leite de Coco",           // 10
    "Galinha ao Molho Pardo",
    "Lombinho de Porco com Laranja",
    "Farofa de Ovo da Roça",
    "Paçoca de Pilão Artesanal",
    "Pão de Queijo do Interior",           // 15
    "Sopa de Legumes com Macarrão Caseiro",
    "Couve Refogada com Torresmo",
    "Frango Ensopado com Batata",
    "Creme de Mandioca com Charque",
    "Arroz de Leite da Avó",               // 20
    "Doce de Abóbora com Coco Rapado",
    "Cuscuz Paulista de Forno",
    "Macarrão ao Sugo da Nona",
    "Polenta Cremosa com Molho Caseiro",
    "Tutu de Feijão com Couve",            // 25
    "Sopa de Lentilha com Linguiça",
    "Frango ao Leite com Temperos Frescos",
    "Bolinho de Mandioca Frito",
    "Quibebe de Abóbora ao Forno",
    "Suflê de Milho Verde da Fazenda",     // 30
    "Pirão de Peixe Tradicional",
    "Torta de Frango de Panela",
    "Angu à Baiana com Caruru",
    "Costelinha de Porco com Feijão",
    "Sopa de Ervilha com Bacon Defumado",  // 35
    "Frango com Jiló e Alho",
    "Doce de Leite Caseiro da Roça",
    "Queijadinhas de Leite Condensado",
    "Arroz Doce com Canela",
    "Bolo de Mel de Engenho",              // 40
    "Pudim de Pão Amanhecido",
    "Curau de Milho com Canela",
    "Brigadeiro de Colher da Infância",
    "Bolo de Cenoura com Cobertura de Chocolate",
    "Torta de Limão com Merengue",         // 45
    "Bolo de Rolo Pernambucano",
    "Cocada Cremosa de Festa",
    "Quindim Amanteigado",
    "Manjar de Coco com Calda de Ameixas",
    "Pé de Moleque da Vovó"               // 50
];
book1Locked.forEach((name, i) => {
    recipes.push({ id: i + 6, bookId: 1, title: name, locked: true });
});

// ── Book 2: Recipe stubs (IDs 51–100) ──────────────────────────────────────
const book2Names = [
    "Tigela de Quinoa com Frutas Vermelhas",
    "Smoothie de Espinafre e Banana",
    "Wrap Integral de Frango Grelhado",
    "Bowl de Açaí Energético",
    "Omelete de Claras com Espinafre",     // 55 — free preview ends here
    "Salada de Grão-de-Bico com Tahine",
    "Panqueca de Aveia com Mel",
    "Iogurte Grego com Granola Artesanal",
    "Frango ao Forno com Batata-Doce",
    "Macarrão de Lentilha com Pesto",      // 60
    "Sopa Detox de Alho-Poró",
    "Arroz de Couve-Flor Gratinado",
    "Salada Niçoise Leve",
    "Bowl de Atum com Legumes",
    "Peito de Peru Assado com Ervas",      // 65
    "Filé de Salmão ao Limão-Siciliano",
    "Ceviche de Tilápia Fresco",
    "Stir-Fry de Frango com Brócolis",
    "Sopa de Tomate Assado com Manjericão",
    "Hambúrguer de Grão-de-Bico",          // 70
    "Lasanha de Abobrinha",
    "Risoto de Cogumelos com Ervas",
    "Frango Desfiado com Cenoura Ralada",
    "Torta Salgada Integral de Legumes",
    "Sopa Cremosa de Ervilha e Hortelã",   // 75
    "Salada de Quinoa com Pepino e Feta",
    "Frango Marinado com Especiarias",
    "Bowl Mediterrâneo de Atum",
    "Espaguete de Abobrinha ao Molho de Tomate",
    "Peito de Frango no Vapor com Molho Tailandês", // 80
    "Arroz Negro com Camarão",
    "Tabule de Couscous com Hortelã",
    "Salada Verde com Castanhas e Framboesas",
    "Wrap de Atum com Abacate",
    "Sopa de Lentilha com Açafrão",        // 85
    "Frango ao Curry com Leite de Coco Light",
    "Omelete Recheada com Ricota e Tomate Seco",
    "Salada de Rúcula com Pera e Gorgonzola",
    "Bowl de Proteína com Edamame",
    "Peixe ao Papillote com Aspargos",     // 90
    "Macarrão Integral ao Pesto de Rúcula",
    "Salada de Beterraba com Laranja e Alho",
    "Frango Desfiado na Pressão com Molho de Ervas",
    "Sopa de Abóbora com Leite de Coco",
    "Sanduíche Natural de Peito de Peru",  // 95
    "Tofu Grelhado com Legumes Salteados",
    "Arroz Integral com Frango e Brócolis",
    "Ratatouille de Legumes ao Forno",
    "Salada de Folhas com Quinoa Tostada",
    "Granola Caseira com Frutas Secas"     // 100
];
book2Names.forEach((name, i) => {
    recipes.push({ id: i + 51, bookId: 2, title: name, locked: true });
});

// ── Book 3: Recipe stubs (IDs 101–150) ─────────────────────────────────────
const book3Names = [
    "Brownie de Feijão Preto Sem Farinha",
    "Torta de Limão Low Carb",
    "Cookie de Banana e Aveia",
    "Cheesecake de Frutas Vermelhas",
    "Mousse de Maracujá com Iogurte",      // 105 — free preview ends here
    "Sorvete de Banana Congelada",
    "Bolo de Laranja com Farinha de Amêndoas",
    "Panqueca Proteica de Cacau",
    "Trufas de Tâmara e Amêndoa",
    "Bolinho de Canela com Aveia",         // 110
    "Panna Cotta de Baunilha com Frutas",
    "Crumble de Maçã com Canela",
    "Gelatina de Frutas Naturais sem Açúcar",
    "Torta de Banana com Creme de Coco",
    "Muffin de Mirtilo e Aveia",           // 115
    "Pudim de Chia com Leite de Coco",
    "Bolo de Mel com Especiarias",
    "Tiramisù Levinho com Mascarpone",
    "Fondue de Chocolate Amargo com Frutas",
    "Creme de Papaya com Sorbet",          // 120
    "Tarte de Morango com Creme Pâtissière Light",
    "Mousse de Chocolate 70% Cacau",
    "Bolo de Baunilha com Cream Cheese",
    "Petit Gâteau Saudável de Cacau",
    "Semifreddo de Limão Siciliano",       // 125
    "Paleta Gelada de Manga e Limão",
    "Creme Brûlée com Leite de Amêndoas",
    "Gelado de Coco e Ananás",
    "Tartalete de Frutos Silvestres",
    "Bolo de Canela com Cobertura de Iogurte", // 130
    "Sorbet de Melancia e Hortelã",
    "Waffles Proteicos com Frutas Frescas",
    "Crepe de Frutas com Creme de Ricota",
    "Tortinha de Maracujá sem Açúcar",
    "Alfajor de Aveia com Doce de Leite Light", // 135
    "Bolo de Abóbora com Especiarias",
    "Pavê de Morango com Biscoito Integral",
    "Rabanada de Forno com Mel e Canela",
    "Quindão de Lima com Coco Ralado",
    "Torrone de Amêndoa e Mel",            // 140
    "Bolinho Assado de Laranja e Amêndoa",
    "Castanhas Caramelizadas com Baunilha",
    "Palha Italiana com Chocolate Amargo",
    "Iogurte Grego com Coulis de Frutas Vermelhas",
    "Gelatina de Hortelã com Melão",       // 145
    "Bolo de Mel com Nozes Pecã",
    "Acompanhamento Gelado de Frutas Cítricas",
    "Peras ao Vinho Tinto com Sorvete",
    "Mousse de Abacaxi com Coco",
    "Semifreddo de Café com Amêndoas Torradas" // 150
];
book3Names.forEach((name, i) => {
    recipes.push({ id: i + 101, bookId: 3, title: name, locked: true });
});

// ── Book 4: Full sample recipes (IDs 151–152) ────────────────────────────────
recipes.push({
    id: 151, bookId: 4, prepTime: "35 minutos",
    title: "Filé de Robalo ao Molho de Alcaparras",
    ingredients: ["2 filés de robalo (aprox. 200g cada)", "2 colheres de alcaparras lavadas", "Suco de 1 limão siciliano", "2 colheres de manteiga sem sal", "Ramos de tomilho fresco", "Sal e pimenta branca a gosto"],
    utensils: ["Frigideira antiaderente grande", "Espátula de silicone", "Pincel culinário", "Travessa para servir", "Pequena panela para o molho"],
    steps: [
        "Retire os filés de robalo da geladeira 15 minutos antes de cozinhar para que cheguem à temperatura ambiente.",
        "Seque muito bem cada filé com papel toalha — isso garante uma crosta dourada perfeita na frigideira.",
        "Tempere com sal e pimenta branca de ambos os lados, pressionando levemente os temperos sobre o peixe.",
        "Aqueça a frigideira antiaderente em fogo médio-alto por 2 minutos. Adicione um fio de azeite e espere brilhar.",
        "Coloque os filés com a pele virada para baixo, pressionando levemente com a espátula nos primeiros 30 segundos.",
        "Cozinhe por 4 a 5 minutos sem mexer, até a pele ficar crocante e dourada. Vire delicadamente com a espátula.",
        "Cozinhe o outro lado por mais 2 a 3 minutos. O peixe estará pronto quando soltar lascas brancas ao toque.",
        "Em uma panelinha separada, derreta a manteiga em fogo baixo. Adicione as alcaparras lavadas e o suco de limão.",
        "Deixe o molho borbulhar delicadamente por 2 minutos, mexendo devagar para incorporar os sabores cítricos.",
        "Transfira os filés para a travessa e regue generosamente com o molho dourado de manteiga e alcaparras.",
        "Decore com os raminhos de tomilho fresco por cima de cada filé para perfumar o prato.",
        "Sirva imediatamente acompanhado de legumes no vapor. Um prato digno de restaurante feito na sua cozinha!"
    ]
});
recipes.push({
    id: 152, bookId: 4, prepTime: "45 minutos",
    title: "Moqueca de Camarão Leve com Leite de Coco",
    ingredients: ["500g de camarão médio limpo", "1 lata de leite de coco light", "2 tomates maduros picados", "1 pimentão amarelo em tiras", "1 cebola grande em rodelas", "Coentro fresco a gosto", "Azeite de dendê (1 colher pequena)"],
    utensils: ["Panela de barro ou panela funda", "Colher de pau", "Tábua de corte", "Faca afiada", "Tigela para marinar"],
    steps: [
        "Limpe os camarões retirando a cabeça, a casca e o fio intestinal. Lave bem em água corrente e escorra.",
        "Marine os camarões por 10 minutos em suco de limão, pitada de sal e alho amassado para realçar o sabor.",
        "Forre o fundo da panela de barro com rodelas de cebola, criando uma cama aromática para o ensopado.",
        "Sobre a cebola, disponha as tiras de pimentão e os tomates picados em camadas uniformes.",
        "Adicione os camarões marinados por cima das camadas de legumes sem mexer ainda.",
        "Despeje o leite de coco light por igual sobre todos os ingredientes e adicione a colher de dendê.",
        "Tampe a panela e leve ao fogo médio. Aguarde ferver sem mexer — cerca de 10 a 12 minutos.",
        "Quando ferver, mexa delicadamente uma única vez para distribuir o calor. Reduza para fogo baixo.",
        "Cozinhe por mais 8 minutos com a panela semitampada até os camarões ficarem rosados e curvinhos.",
        "Prove o caldo e ajuste o sal. Se necessário, acrescente um pouquinho mais de leite de coco.",
        "Finalize espalhando coentro fresco picado por cima — ele é a alma da moqueca brasileira.",
        "Sirva direto na panela de barro com arroz branco e pirão. A refeição que abraça a alma!"
    ]
});

// ── Book 4: Locked recipe stubs (IDs 153–200) ────────────────────────────────
const book4Locked = [
    "Salmão Assado com Crosta de Ervas e Limão",
    "Bacalhau ao Forno com Batatas e Azeitonas",
    "Ceviche de Tilápia com Maracujá",
    "Atum Grelhado com Salsa de Abacate",
    "Polvo Cozido com Azeite e Alho",       // 158
    "Camarão no Alho e Óleo Saudável",
    "Lula Grelhada com Molho de Ervas",
    "Sardinha Assada com Legumes",
    "Peixe Assado em Crosta de Sal Grosso",
    "Espaguete de Abobrinha com Atum",       // 163
    "Mexilhões ao Vapor com Vinho e Ervas",
    "Filé de Pargo no Papillote",
    "Sopa de Frutos do Mar Detox",
    "Bacalhau Desfiado com Grão-de-Bico",
    "Salada de Camarão com Manga Verde",     // 168
    "Truta ao Forno com Limão e Alcaparras",
    "Paella de Frutos do Mar Simplificada",
    "Risoto de Camarão com Limão Siciliano",
    "Filé de Linguado com Manteiga de Ervas",
    "Sopa de Peixe Portuguesa",              // 173
    "Camarão Empanado com Farinha de Coco",
    "Peixe ao Curry Thai com Leite de Coco",
    "Salada Niçoise com Atum Fresco",
    "Bacalhau com Natas Levinho",
    "Moqueca de Peixe Baiana",               // 178
    "Espetinho de Camarão Grelhado",
    "Filé de Tilápia com Molho de Maracujá",
    "Arroz Negro com Frutos do Mar",
    "Camarão com Cream Cheese Light",
    "Torta de Atum com Legumes",             // 183
    "Salmão com Crosta de Gergelim",
    "Peixinho da Horta ao Forno",
    "Bowl de Atum com Quinoa e Pepino",
    "Peixe ao Forno com Tomate e Manjericão",
    "Camarão ao Leite de Coco e Açafrão",   // 188
    "Strogonoff de Camarão Light",
    "Filé de Merluza com Molho de Alcaparras",
    "Sushi Bowl Sênior (Sem Glúten)",
    "Bacalhau ao Pil-Pil Simplificado",
    "Carpaccio de Salmão com Alcaparras",   // 193
    "Dourada Assada com Alho e Azeite",
    "Camarão Defumado com Rúcula",
    "Espaguete ao Vôngole",
    "Peixe Cozido com Molho Verde",
    "Tiradito de Peixe Branco",              // 198
    "Anchova Grelhada com Chimichurri",
    "Caldo de Peixe com Legumes"             // 200
];
book4Locked.forEach((name, i) => {
    recipes.push({ id: i + 153, bookId: 4, title: name, locked: true });
});

// ── Book 5: Full sample recipes (IDs 201–202) ────────────────────────────────
recipes.push({
    id: 201, bookId: 5, prepTime: "20 minutos",
    title: "Refogado de Couve com Alho e Limão",
    ingredients: ["1 maço de couve manteiga fatiada fininha", "4 dentes de alho fatiados", "Suco de 1/2 limão", "3 colheres de azeite extra virgem", "Sal e pimenta-do-reino a gosto"],
    utensils: ["Frigideira grande ou wok", "Faca afiada", "Tábua de corte", "Pinça culinária", "Tigela para servir"],
    steps: [
        "Lave as folhas de couve uma a uma em água corrente, esfregando suavemente para remover qualquer resíduo.",
        "Empilhe as folhas e dobre-as ao meio no sentido do comprimento para facilitar o corte.",
        "Com a faca bem afiada, fatie a couve em tiras bem finhas, como um chiffonade. Quanto mais fina, melhor!",
        "Descasque os dentes de alho e fatie-os em lâminas bem finas para que dourem uniformemente.",
        "Aqueça a frigideira em fogo médio-alto e adicione o azeite. Espere aquec er antes de colocar o alho.",
        "Adicione as lâminas de alho e refogue por 1 minuto, mexendo sempre, até ficarem douradas e perfumadas.",
        "Atenção: alho queimado amarga! Assim que dourar, adicione a couve fatiada de uma vez.",
        "Misture rapidamente com a pinça ou colher por 2 a 3 minutos em fogo alto para a couve ficar al dente.",
        "A couve deve ficar verde viva, levemente murchinha mas ainda com textura e crocância.",
        "Tempere com sal e pimenta. Desligue o fogo e esprema o limão por cima imediatamente.",
        "O ácido do limão realça o verde e equilibra o amargor natural da couve — um truque de cozinha italiana!",
        "Sirva imediatamente como acompanhamento. A couve é uma das maiores aliadas da longevidade saudável!"
    ]
});
recipes.push({
    id: 202, bookId: 5, prepTime: "50 minutos",
    title: "Ratatouille de Forno com Ervas Frescas",
    ingredients: ["1 abobrinha verde", "1 abobrinha italiana", "2 tomates médios", "1 berinjela pequena", "Molho de tomate caseiro (1 xícara)", "Azeite extra virgem", "Tomilho e alecrim frescos"],
    utensils: ["Assadeira redonda ou oval", "Mandoline ou faca afiada", "Pincel culinário", "Papel manteiga", "Espátula"],
    steps: [
        "Pré-aqueça o forno a 190°C. Forre a assadeira com papel manteiga levemente untado com azeite.",
        "Com a mandoline ou faca bem afiada, fatie todos os legumes em rodelas de 3mm de espessura uniformes.",
        "Espalhe o molho de tomate caseiro pela assadeira em uma camada fina e uniforme — essa é a base de sabor.",
        "Comece a montar o ratatouille sobrepondo as rodelas em sequência: abobrinha, tomate, berinjela...",
        "Repita o padrão colorido, criando um visual em espiral ou em linhas sobrepostas que é de encher os olhos.",
        "A beleza do ratatouille está justamente na organização — cada fatia fica levemente por cima da anterior.",
        "Pincele generosamente cada camada de legumes com azeite extra virgem para manter a suculência.",
        "Espalhe os raminhos de tomilho e alecrim entre as fatias de legumes para perfumar durante o forno.",
        "Tempere com sal, pimenta e um fio extra de azeite por cima de tudo antes de cobrir com papel manteiga.",
        "Cubra com papel manteiga e leve ao forno por 30 minutos. Depois, retire o papel e asse mais 15 minutos.",
        "Os legumes devem estar macios e levemente caramelizados nas bordas — esse é o ponto perfeito.",
        "Sirva quente como prato principal ou acompanhamento. Uma obra de arte na cozinha sênior!"
    ]
});

// ── Book 5: Locked recipe stubs (IDs 203–250) ────────────────────────────────
const book5Locked = [
    "Sopa de Cebola Gratinada ao Forno",
    "Brócolis Assado com Alho e Parmesão",
    "Curry de Grão-de-Bico com Espinafre",
    "Nhoque de Batata-Doce ao Molho de Sálvia",
    "Quiche de Alho-Poró e Ricota",          // 208
    "Lasanha de Berinjela e Tomate",
    "Creme de Cenoura com Gengibre e Coco",
    "Espaguete de Abobrinha ao Pesto de Manjericão",
    "Tabule de Couscous com Hortelã e Pepino",
    "Salada de Lentilha com Beterraba Assada",// 213
    "Bolinhos de Espinafre e Ricota no Forno",
    "Torta Salgada de Alho-Poró e Tomate Seco",
    "Sopa de Ervilha Fresca com Hortelã",
    "Shakshuka de Forno com Ervas",
    "Arroz de Couve-Flor com Açafrão",       // 218
    "Creme de Abóbora com Gengibre e Limão",
    "Salada Quente de Raízes Assadas",
    "Hambúrguer de Beterraba e Grão-de-Bico",
    "Pimentões Recheados com Quinoa e Ervas",
    "Macarrão Integral ao Pesto de Rúcula",   // 223
    "Suflê de Queijo com Brócolis",
    "Berinjela Recheada com Tofu e Tomate",
    "Torta de Espinafre com Massa Integral",
    "Crocante de Couve-Flor ao Curry",
    "Chili de Feijão e Legumes",             // 228
    "Wrap de Alface com Grão-de-Bico Temperado",
    "Bowl de Beterraba com Iogurte e Nozes",
    "Creme de Alho-Poró com Batata-Baroa",
    "Escarola Refogada com Limão Siciliano",
    "Tortilha Espanhola de Legumes",          // 233
    "Pepino Recheado com Queijo Cottage",
    "Sopa de Feijão Verde com Hortelã",
    "Rolinhos de Cenoura Assada com Tahine",
    "Abobrinha Recheada com Arroz e Ervas",
    "Caprese de Tomate e Manjericão",         // 238
    "Salteado de Vagens com Amêndoa Laminada",
    "Creme de Beterraba com Iogurte Grego",
    "Risoto de Aspargos com Parmesão",
    "Polenta Cremosa com Cogumelos Salteados",
    "Tortinha de Espinafre e Queijo Feta",    // 243
    "Sopa de Tomate com Manjericão Fresco",
    "Cogumelos Recheados com Queijo e Ervas",
    "Brócolis ao Vapor com Molho de Tahine",
    "Salada de Radicchio com Laranja e Nozes",
    "Espargos Grelhados com Ovo Pochê",       // 248
    "Terrine de Legumes ao Forno",
    "Sopa Kremlin de Vegetais da Horta"       // 250
];
book5Locked.forEach((name, i) => {
    recipes.push({ id: i + 203, bookId: 5, title: name, locked: true });
});

// ── Montagem da Biblioteca (Acesso pelo app.js) ─────────────────────────
window.biblioteca = {
    reliquias: recipes.filter(r => r.bookId === 1),
    livro2: [
        { id: 1, title: 'Tigela de Quinoa com Ovos Escalfados', time: '20 minutos', ingredients: ['1/2 xícara de quinoa macia', '2 ovos caipiras', 'Espinafre fresco', 'Azeite', 'Salsa e orégano'], utensils: ['Panela', 'Tigela funda'], steps: ['Prepare a quinoa deixando-a fofinha.', 'Escalfe os ovos na água quente.', 'Monte a tigela com espinafre no fundo.', 'Coloque a quinoa morna e os ovos por cima.', 'Regue com azeite e decore com ervas.'] },
        { id: 2, title: 'Smoothie Cremoso de Mamão e Linhaça', time: '10 minutos', ingredients: ['1 fatia de mamão papaia', '1 colher de linhaça', 'Iogurte natural desnatado', 'Canela', 'Mel'], utensils: ['Liquidificador', 'Copo alto'], steps: ['Tire as sementes do mamão.', 'Coloque no liquidificador com iogurte e linhaça.', 'Adoce com um fio de mel.', 'Bata bem até ficar uniforme.', 'Polvilhe canela por cima e beba devagar.'] },
        { id: 3, title: 'Batata-Doce ao Forno com Frango', time: '40 minutos', ingredients: ['1 batata-doce', 'Frango desfiado', 'Creme de ricota', 'Salsinha fresca'], utensils: ['Assadeira', 'Tigela', 'Faca'], steps: ['Asse a batata-doce enrolada até ficar macia.', 'Misture o frango com a ricota e a salsinha.', 'Corte a batata ao meio após assada.', 'Recheie generosamente com o frango.', 'Sirva bem quente.'] },
        { id: 4, title: 'Crepioca Leve de Queijo e Tomate', time: '15 minutos', ingredients: ['1 ovo', '2 colheres de massa de tapioca', 'Queijo minas frescal', 'Rodelas de tomate', 'Orégano'], utensils: ['Frigideira antiaderente', 'Tigela pequena', 'Garfo'], steps: ['Bata o ovo com a tapioca numa tigela.', 'Aqueça a frigideira e despeje a massa.', 'Doure de um lado e vire.', 'Adicione o queijo e o tomate.', 'Feche como um pastel e espere derreter.'] },
        { id: 5, title: 'Salada Morna de Grão-de-Bico', time: '20 minutos', ingredients: ['1 xícara de grão-de-bico cozido macio', 'Cenoura ralada', 'Azeite e limão', 'Salsinha'], utensils: ['Tigela saladeira'], steps: ['Coloque o grão-de-bico na tigela.', 'Acrescente a cenoura ralada bem fina.', 'Tempere com uma boa quantidade de azeite.', 'Pingo de limão e salsinha por cima.', 'Misture bem e sirva.'] },
        { id: 6, title: 'Omelete Nutritivo de Abobrinha', time: '15 minutos', ingredients: ['2 ovos caipiras', 'Abobrinha ralada', 'Alho amassado', 'Azeite', 'Sal e matinhos verdes'], utensils: ['Ralador', 'Frigideira antiaderente'], steps: ['Rale a abobrinha fininha.', 'Bata com os ovos e os temperos.', 'Coloque na frigideira levemente untada.', 'Deixe dourar bem o fundo antes de virar.', 'Dobre e sirva bem fofinho.'] },
        { id: 7, title: 'Filé de Tilápia com Crosta', time: '35 minutos', ingredients: ['Filé de peixe fresco sem espinhos', 'Suco de laranja', 'Farofa de pão integral', 'Ervas', 'Azeite'], utensils: ['Forma de forno'], steps: ['Tempere o filé com suco de laranja e ervas.', 'Misture a farofa com um fio de azeite.', 'Cubra o peixe com a farofa úmida.', 'Asse no forno até fazer crosta.', 'O peixe soltará um caldinho saboroso.'] },
        { id: 8, title: 'Caldinho de Inhame e Alho-Poró', time: '40 minutos', ingredients: ['2 inhames grandes', 'Alho-poró clarinho em finas rodelas', 'Água quente', 'Azeite', 'Folha de louro'], utensils: ['Panela funda', 'Liquidificador'], steps: ['Refogue o alho-poró no azeite.', 'Adicione o inhame picado e o louro.', 'Cubra com água quente e cozinhe.', 'Tire o louro e bata o caldo no liquidificador.', 'Ajuste o sal e sirva muito cremoso e quentinho.'] },
        { id: 9, title: 'Torta Rápida de Cenoura', time: '45 minutos', ingredients: ['1 ovo', 'Cenourinhas', 'Leite', 'Aveia', 'Queijo leve ralado'], utensils: ['Liquidificador', 'Forma pequena'], steps: ['Bata o leite, o ovo e as cenouras.', 'Junte a aveia aos poucos.', 'Asse em forma untada até firmar.', 'Salpique queijo por cima.', 'Espere amornar para desenformar e mastigar tranquilo.'] },
        { id: 10, title: 'Enroladinhos de Couve', time: '30 minutos', ingredients: ['Folhas de couve grandes', 'Sobras de arroz ou quinoa firme', 'Carne moída ou peixe desfiado leve', 'Molho de tomate'], utensils: ['Panela fofa', 'Faca fina'], steps: ['Passe as folhas de couve em água fervendo por segundos.', 'Tire o talo grosso central.', 'Recheie as folhas com o arroz e carne.', 'Enrole feito rolinho.', 'Aqueça na panela com um chorinho de molho de tomate.'] },
        { id: 11, title: 'Purê de Abóbora com Lombo', time: '25 minutos', ingredients: ['Abóbora moranga cozida e macia', 'Lombo suíno assado desfiadinho', 'Manteiga ou azeite', 'Tempero verde'], utensils: ['Panela'], steps: ['Amasse a abóbora até virar um purê dourado.', 'Junte o azeite e o tempero verde.', 'Aqueça o lombinho bem desfiado.', 'Monte o prato com o purê e a carne no centro.', 'Uma refeição que quase desmancha na boca.'] },
        { id: 12, title: 'Sanduíche Integral Grelhado', time: '15 minutos', ingredients: ['2 fatias de pão integral super macio', 'Frango desfiado claro', 'Mostarda e mel', 'Tomatinhos picados sem semente'], utensils: ['Torradeira ou frigideira'], steps: ['Misture o frango com uma gotinha de mel e mostarda.', 'Ressalte o sabor com os pequenos tomates.', 'Coloque tudo numa fatia e feche.', 'Leve para dar uma leve tostada rápida e amornar.', 'Cuide para não ressecar a borda.'] },
        { id: 13, title: 'Salada Ensolarada de Lentilhas', time: '20 minutos', ingredients: ['Lentilhas cozidas macias', 'Cenoura ralada no fino', 'Azeite farto', 'Gotas de limão e salsa', 'Pitada pequena de sal'], utensils: ['Tigelinha amável'], steps: ['Deite a lentilha no fundo da tigela.', 'Coloque por cima a cenoura fininha.', 'Agregue o azeite, o suco e os temperos.', 'Misture tudo espalhando as cores bonitas.', 'Deixe pegar o sabor por uns minutinhos antes de comer.'] },
        { id: 14, title: 'Refogado de Repolho Murchinho', time: '15 minutos', ingredients: ['Repolho em pequenas tiras', 'Cebolinha fresca fina', 'Azeite', 'Pouquinha água'], utensils: ['Frigideira funda'], steps: ['Num fio de azeite, refogue levemente a cebolinha.', 'Adicione o repolho e baixe logo o fogo.', 'Coloque uns pingos d\'água.', 'Tampe para murchar no vapor.', 'Sirva bem úmido e levinho de mastigar.'] },
        { id: 15, title: 'Torta de Caneca Mágica', time: '10 minutos', ingredients: ['Farinha de aveia finíssima', '1 ovo caipira pequeno', 'Leite', 'Sobras limpas de queijo miúdo', 'Fermento de bolo em pó'], utensils: ['Caneca larga (própria para micro)', 'Garfinho'], steps: ['Bata o ovo na caneca firme.', 'Coloque o leite e a aveia devagar para não empelotar.', 'Ponha seu cheirinho e o queijo.', 'Coloque a pitada do fermento no finalzinho.', 'Micro-ondas por poucos minutinhos. Cuidado, esfrie na tábua!'] },
        { id: 16, title: 'Pastinha de Berinjela Defumada', time: '30 minutos', ingredients: ['1 berinjela pequena', 'Alho em pó ou bem miudinho ralado', 'Azeite', 'Limão espremido', 'Salsinha de verdade'], utensils: ['Fogão', 'Tigela', 'Garfo forte'], steps: ['Pique muito a berinjela e queime-a direto na boca limpa do fogão por minutos.', 'Quando a couraça estiver toda tostada, tire do fogo.', 'Puxe a pele fina dela até revelar a polpa mole e quentinha do defumado.', 'Amasse bem para a papa doce se formar, pingue os cheiros alheados.', 'Regue mais um ouro de azeite por cima e coma farta de pãozinhos.'] },
        { id: 17, title: 'Risoto Falso de Couve-Flor', time: '20 minutos', ingredients: ['Flor da couve-flor em grãos (ralada)', 'Frango bem desfiado em pedacinhos', 'Queijo cottage ou creme leve', 'Açafrão perfumado'], utensils: ['Panela redonda', 'Colher'], steps: ['Passe a florzinha no ralador como arroz.', 'Refogue com o açafrão em panela suave até amarelar muito e soltar a umidadezinha.', 'Adicione seu franguinho de texturas já pequenas ali para encorpar o fundo.', 'Ligue todo o abraço na quentura da panela com a colherona cheia de queijo leitoso ou requeijão doce espesso.', 'Coloque no pires e suque limõezinhos. Falso no nome! Nutrição na testa.'] },
        { id: 18, title: 'Suflê de Espinafre e Queijinho', time: '35 minutos', ingredients: ['Ponta de espinafre macio', 'Gema e clara separadas (bata a clara em bolhas aradas)', 'Pitada de farinha de roça das boas', 'Gotas minúsculas de queijo'], utensils: ['Ramequim', 'Forno', 'Garfo largo'], steps: ['Abafe o verde em pouco calorzinho só p/ murchar fininho.', 'Misture no farelito e da gema amarela forte ali naquele lodo bom verde.', 'Cresça na batedura da nuvem de sua clara a sós solta e envolva c/ o verde lá, sem desabar.', 'Asse ali sem pressa até bufufar a lufada pra fora.', 'Vá se encher de alegria na comidinha quente das colheres...'] },
        { id: 19, title: 'Bolinhas Energéticas de Amendoim', time: '15 minutos', ingredients: ['Pasta de amendoim limpa', 'A aveia bem amassadinha farinhentinha', 'Mel puríssimo d\'abelha farta', 'Cacau pó da montanha fina'], utensils: ['Tigela espaçosa', 'Mãos'], steps: ['Una as três dosagens todas numa bacia doceita nua.', 'Sove c/ muito braço amaciando até sumir os molhados nela.', 'Tire nozitas das coisas ali c/as luvinhas dos dedos soltas em redondinhos mágicos na palma.', 'Chacoalhe as bolitas c/cacauzinhos escurecidos pra firmar na crostaz.', 'Gelem bem geladinhas q pra gengivass dentes não penem aos docitos calmos.'] },
        { id: 20, title: 'Espaguete de Abobrinha à Carne', time: '25 minutos', ingredients: ['Abobrinha alongadinha de casca', 'Carne tenra de triturar muito', 'Sugo tomatezinho do cheiro bom caseiro', 'Salsa a bel prazeres'], utensils: ['Espiralizador ou faca afiadessa', 'Panelinha'], steps: ['Passe na afiada como cabellos enormes as verduras ali para formar os ninhos todos num susto frescal.', 'Sue com os caldos delas ali por cinco só para molinhar.', 'Em panela ao lado suba o fervore da cor de encarnado carne com as doçuras e salgues finos do molhe.', 'Junta lá num mergulhão todos e sinta conforto sem as massas gordanas.', 'Toda e qquer forquilha trará de uma bocada sáude sem cansaçinhos ali.'] },
        { id: 21, title: 'Papinha Aconchegante de Quinoa e Pera', time: '20 minutos', ingredients: ['Mãozinha de quinoa bem lavada', 'Pera sem casca docinha', 'Leitinho vegetal ou de aveia', 'Canela'], utensils: ['Panelinha'], steps: ['Cozinhe a quinoa na água até abrir.', 'Pique a pera miúda e coloque lá para amolecer.', 'Amasse tudo no fundo da panela.', 'Junte o leitinho e deixe virar um mingauzinho brando.', 'Polvilhe a canela e coma bem quentinho.'] },
        { id: 22, title: 'Bowl Cítrico de Iogurte com Sementes', time: '5 minutos', ingredients: ['Iogurte natural', 'Sementes de chia hidratadas', 'Raspas de laranja', 'Mel', 'Frutinhas picadas'], utensils: ['Tigela de vidro'], steps: ['Coloque o iogurte no fundo do bowl.', 'Espalhe a chia por cima.', 'Coloque as frutas e o mel em fios.', 'Salpique as raspas laranjinhas por último.', 'Coma fresco de manhã para despertar alegre.'] },
        { id: 23, title: 'Wrap Leve de Alface Romana', time: '10 minutos', ingredients: ['Folhas de alface romana graúdas', 'Pasta de grão-de-bico (homus)', 'Peito de frango fatiado', 'Cenoura em palitos muito finos'], utensils: ['Prato liso'], steps: ['Lave e seque bem as folhas para não racharem.', 'Passe a pasta espessa no centro da folha.', 'Acomode os ingredientes sem encher muito.', 'Feche dobrando as laterais gordinhas.', 'Mastigue a crocância fresquinha sem peso do pão.'] },
        { id: 24, title: 'Mingau Protetor de Milho', time: '15 minutos', ingredients: ['Milho verde debulhado do espigo', 'Leite moço de côco leve', 'Amidozinho só para engrossar', 'Salzito'], utensils: ['Liquidificador', 'Panela moça'], steps: ['Bata os grãos no leite.', 'Coe se quiser ele mais sedinha sem a casca.', 'Leve pro fogo brando mexendo firme.', 'No engrossamento, ponha a fina pitada d\'sal.', 'Sirva tremelicante igual curau sem os açúcares.'] },
        { id: 25, title: 'Frango Dourado com Molho de Laranja', time: '35 minutos', ingredients: ['Filé de peito de frango em bifes finos', 'Caldo de laranja pêra pura', 'Rodelas de cebola macias', 'Fio de óleo'], utensils: ['Frigideira grossa'], steps: ['Achate bem os bifinhos para cozinhar total.', 'Doure no fiozinho até fazer aquela borra farta.', 'Tire os bifes um minuto, e asse a cebola na borra.', 'Coloque o suco para limpar o fundo de sabor.', 'Volte o frango, e dexe afogar no suco morno para servir.'] },
        { id: 26, title: 'Atum Natural Enroupadinho no Tomate', time: '15 minutos', ingredients: ['Atum d\'água dessalgado', 'Tomatões gordinhos cavados', 'Requeijinho branco magro', 'Azeito e folhinha'], utensils: ['Faca redonda pra cavar', 'Assadeira pititinga'], steps: ['Corte a tampinha dos tomates vermelhões e cave a barriga.', 'Amace o atum com a ricota ou do requeijinho macio.', 'Recheie a casca vermelha sem forçar pro tomate n quebrar.', 'Coloque as folhinhas cheirosas.', 'Leve para dar leve murchada por minutos. É refeição completa e molhada.'] },
        { id: 27, title: 'Pudimzinho Cativante de Chia ao Côco', time: '3h (espera)', ingredients: ['Sementinhas de chia fina', 'Leitinho de côco cheiroso', 'Pedacinho minguadinhos d\'manga', 'Gotinha purinha mel florado'], utensils: ['Copinhos d\'café longo'], steps: ['Inunde a chia no leite c/mel d\'noite ali no frasco.', 'Gela muito q no gelo ela infla maciosidade.', 'Ao raiar da alvorada verifique a textura gelatínica dela.', 'Salpique a fofura de manga ali no alto só de feição.', 'Colherzinadas d\'nutrição fáceis p/ a gargantinha.'] },
        { id: 28, title: 'Caldinho Amarelinho Farto d\'Aipim', time: '40 minutos', ingredients: ['Mandioquinhas em toco cozidadass', 'Pedacito magroz de carne curadinha fervida', 'Manteiga amarelona (choro só)', 'Salsa escura e salinho'], utensils: ['Panela'], steps: ['Cozinhe o amarelo tubérculo muito em águas farta.', 'Bata as amarelinhas num caldão rústico d\'grossura grossa.', 'Afogue o fiadinho da curada limpa ali no calor.', 'Deito o amarelão do líquido grosso empanado c/ manteiguinha minúscula.', 'Engrosse ou afile c/aguinha d\'fundo. Nutre e abraça no frião!'] },
        { id: 29, title: 'Coxinha Reversível d\'Batata Doce Falsa', time: '30 minutos', ingredients: ['Massa d\'batata doce fofinha só purêzinho', 'Queijo ou franguinho na pitada', 'Farelinho da farofa d\'pão p empanos'], utensils: ['Tigelinha assadorinha'], steps: ['Molhe mão e amasse os punhados da doce batatinha purê.', 'Faça barquinho nela e empurre o recheinho mole.', 'Feche em coxitas pontudas devagarinhoz.', 'Sue ou enrole no farelinho torradinho e unte na fôrma!', 'Tosta no cume d\'fornos só por quenturita pra dorar... sem imersas nos óleos grossos!'] },
        { id: 30, title: 'Espetadinhos de Forno Peixe e Tomates', time: '25 minutos', ingredients: ['Tilápia cubões altinhos e gordinhos', 'Tomatinhos bebê cereja madurosões', 'Cebolinha pérola amacia em água quente', 'Azeite forte e matinho.'], utensils: ['Espetinho de pau sem farpas', 'Assadeirona'], steps: ['Lave bem c/limãozíneo as cumbucadas do peixito cortado.', 'Enterre nos paus, alternados, um alvinho do peixe, vermelho do coco, branco do globo da cebolitaz.', 'Molhe na temperada ali na fôrma com azeitao verde espirrado', 'Fogos do assador branditos até peixe branquiar total as fibras e soltar sumo.', 'Com as garfetinhas é fácil d tirar a carnita ali ao palato do idoso.'] },
        { id: 31, title: 'Saladinha Mar e Terra Colorida', time: '15 minutos', ingredients: ['Sardinhazinha limpíssima das esinhas curadas ou conservadas d\'óleo bom.', 'Pepinos cascuditos cortadinhos bem ralititinhos (s/sementinhões aguados)', 'Vinagrezite da maçã dourada, cheirinho verde', 'Tiquinhos de cenoura amarela nela...'], utensils: ['Taco fundez'], steps: ['Rale e desidrate c gotinhas d\'sal o pepinozinho e cenoura por minutitos pra sumir amargori...', 'Destruque c carinho de mãe as lombadas da prateada sardinha retirandose finissimas e duras farpas q sobejam.', 'Lanzez td junto numa redondela d\'louça, jorrez vinagritos as gotosas', 'Cor e omega pr\'á cérebro fortificado logo no almocinhes fresco.'] },
        { id: 32, title: 'Biscoitões Gigantes Flexíveis d\'Aveia', time: '25 minutos', ingredients: ['Aveiazão floquedos longos', 'Bananas naniquitas preteiadas d\'manchas docíssimas...', 'Amêndoa amassadonas na farofada', 'Canelona p o narizinho amar...'], utensils: ['Tabuleirao de assares.'], steps: ['Sem as massadas esquisitinhas d farinhães brancos: é so machucar aos amassafrões a bananoazinha ates babares d\'doces.', 'Jogai nela do torrãozinho da floquedadiz de aveial ali pro bololôme d\'liga espessa e s farofitas miuditas lá.', 'Bota na forma papelito manteiguezino ou um pouco unvez. C fazas de círculãozitos massudo com as costa das colheres as plumas achata.', 'Forneze 20 minutões p n queimars, elas continuão aveludadas n meiótes pra mascarsem fadigo... e nutres a veia.'] },
        { id: 33, title: 'Sopa Vermelhona Protetora de Beterrabada', time: '35 minutos', ingredients: ['1 beeterrabona gigante das tintadas fortes ccascas lavadas e puras descascadona dpois.', 'Batatinha amarela da barozinha maciada', 'Dentin alheste e alhinho porozinhos fatias', 'Gototas limpitas de creme brancurao e azzitetites...'], utensils: ['Panelinhas da mãe liquidifz'], steps: ['Cortas roletezitos c muito sangra das purpurinas na táboyinha de madeirita e ponde a fervores junto co as barrozinahas tbm...', 'Alhezites chorosinho na uncao dos azeitetites fritos no cantinho delaguinhas de fundo', 'Processinhas td ali os caldozes doces num rosa lindone q encantalaz as idadas da vovozinhna e corarão a rosada face dela num tiquinho d\'semanas', 'O cremozite branco gotejado na redonda poça c as pazinhas p o sorver leveza docita da salgaz da terra'] },
        { id: 34, title: 'Encharcadoz d Tofu Grelhado c Alecrim', time: '20 minutos', ingredients: ['Cubo graudao d queijinho de soja tofu macieito mas n aguadozess...', 'Ervinha pinheirinhos alecrinzitas verditas da vazinha q chera', 'Molhitos asiaticoz nezitos das salgadeiras escurinhass', 'Um tomatitozinho picotitote so pras vermelhurass'], utensils: ['Panelita chapa'], steps: ['Espreme as molhaduras do quadradinho pra el sugaras dpois... fatiota em grossas p n despencas na chapa frita.', 'Num chorin d molhinhos escurinhos o salgito adere as poreitas dele lá... deixaz 5minutiños.', 'Xapa ou torradinha das boaz untadita dos alecrines no calor... dorezitas das facita nalez...', 'Com tomatinho no canto do pratixto frita, p morder maciozes s estress das proteitas q amolecem gostosa e baratin...'] },
        { id: 35, title: 'Arrozito Verde c/ Rúcula Murchinha', time: '15 minutos', ingredients: ['Punhadotoz e sobrolhaz de arroz brancaz já nos potitos d geladeirinhos', 'Montanhas gordinhas da ardentida mas levezetitas folhazas da verde rucula d talitas picadotas', 'Queijinhos de mininhas d ralar furosos graudetes', 'Leitezitos o u aguitaz poucas e ovitos de clara s gmez...'], utensils: ['Frigideirez grandonas'], steps: ['No fervoriscos de calorzes curtes, botemos os arrozinnhos s durities na aguitas morninhas escorridaes pra avivar eles e maciasse denovos', 'Nas folhas lavazotes pique bem pra velhinos q n mastigaros fioses loesgos da folhae que gosmificos....', 'Bota ovito brancures so pras pregas os arrozez nas folhitizes da ardencia c a colheire mexecendo rápido escurre q derretem tudo num ligadito... salpicos do queijinho salgitode.. refeidz nutritivas e verdidesca q entra num suspirto d alivo na digestaozes!'] },
        { id: 36, title: 'Panquequinhas de Espinafre e Frango', time: '20 minutos', ingredients: ['Polpa e caldos verdólatas dos espinafrez espremidozinhos...', 'Farinota c ovoz e leitinias bem mixitas pra masas verdeinhas', 'Os fiaditos franguizetes já das doiradas q sabez sobejadas no fervedinhos', 'Pomes tomatinhos em pureres pr coberturinhes...'], utensils: ['Dofrigideirazinhas p as panquecas e formitass ass...'], steps: ['Façaz um bololô d caldos verdinhos c a masa do panquecas batenzidas fininhas liquidadez n liquid... fica um clorofilaz cheiroses...', 'Esparrameizes chuvitadas dos liquidinhos n untadezes quente p doures das casquinex finitzss e maciates de flexibidez....', 'O rolinhoz recheades dos fiazinnhos das avezitss molhadinhas e fechadez as panquequinhas.... enformiz n pratites!', 'Ums borriftez dos tomatezes s acidez quentzes p cobrirez no fornes pra amacias tudites num deitez confortavelez p barrigotae dos anciosinhos q ames d comer c docurizes...'] },
        { id: 37, title: 'Mingalito d Aveia Mágica c/ Maçãzinha', time: '15 minutos', ingredients: ['Aveitazinha macietas e flocades das mais grossinhatss pra das fribitas c coraçao!', 'Raladizes d maçoes dulcess vermelhetess docitadas e descascadass', 'Os pozeitos mágicos amarelates douradites q dizes q anti inflamam (a curcumnaz!), c do meliznhe e cheiritoos de especiaritizes!'], utensils: ['Panelitaz d leiteira ou tachinete de mingauzez...'], steps: ['Um deditos d colheires d aguazitah ou leitinezites vegetais amorningandose... despejezes e espolvilhese a poeirinzih amarelates doiraadas do anti dorzes pra colorides d sol n mingaize... e jogue a maça doça raladatess!', 'Ferva a atezas ficalos gosminimties molhes da farintaze gorda d mingauzoess, fofices espeseza de papa dos bebenzões n comfortines...', 'Colherentzinase qnd fornas formazinhaz ao frios... o adocizdazs do naturalite amolecitz n as gengivezez e as dorezes vao acalmandzez no barriguinhoz quentis q abraços do amarez doirar!'] },
        { id: 38, title: 'Peixinhos da Horta Falsotitos ao Fornino', time: '25 minutos', ingredients: ['Folhozees das capuchinhezez ou folhas aveludatess das de peixinies graudas verdescinhas cheioses e lipnhinhas!', 'Farininhez da arroizess brancuzinhos s grudez d glutens c aguzitnze faras uma tempuraz fakes e liquidatezs pra empanez...', 'Salginhez e poeirezite d pimentetes docitzes vermelitas... pinguitez d aséites'], utensils: ['Tabules fornedes e fornilezes quentieztes'], steps: ['Banez as aveludades follhez nhs umidies da liquidinhas das gomes brancas temperadezas c os pós vermelitines salnitze ... deixes escurrezites as grossuras pr n pesarzs n folhaza q caira o pêsez...', 'Azeitetiz n forrada d tabules papelitez de assados pra n crudes...', 'Dispõenx as empandadinzez de leve e fornes mediuzinhas, 10 minutitas d kd ladezas ou menoszin...', 'Os crocantes d peixitos s cheiroz da agua marela enganez os olinhez c pexitez de hortazes saudeses estradinhez... n engulhose pesedines nem engordurinhes as maozinhas... só saudezas d roças!'] },
        { id: 39, title: 'Enformadinhos Cremosos d Atunz e Cenourizes', time: '40 minutos', ingredients: ['Raladizes da laranjinazes dezenas de cenorinhas puraz', 'Latazinho s atunez s aguadiez espremidiztes pra n sujaras e umidaditnes s o oleos pesadiz', 'Requejoinhes das lites dietizes levinhos pr aligeiraras e cremosar', 'Ovitos do batebates de gma e claramixes e alhotez', 'Tabulinhes fornitezes das ralaszeses ou picotes do verdinhass d temperos'], utensils: ['Formitess miquitites d pudinzes e fornites'], steps: ['Batez ovinez num bowlzinho ate faros desbolhidades.. juntezs os raladinezes docezos de cenouzes laranjides e o atunez q desfazes os trefinez grossies na forquilhas garfetes...', 'Metezis a brancuras cremodizess delate d o requejoinhas pra q no calores elles grudeines en liges fofites.. e temperetes', 'Nas fominhas pitucasezs untezas c gotines d oleos as paredezetesa pra n esbirrarezes n desformar e cheiez tudos', 'Banhes marietizes s quizeres fofinhes p n secarez o topitnes ao dorareze ao assos... as comidinham pratas c maciozitas divinalez idadinez... de enxe a barrige sem as empanzoonadas... nutritivez d atunez!'] },
        { id: 40, title: 'Tortitazez Frigideires Nutrizes d CouveFlors', time: '15 minutos', ingredients: ['Couvezezflorez raladezas em grozes miuditess no friazinhoses', 'As fatiatas ou defiaditnes miiudinzez de queijeze mineirozes levinho ou blanc', 'Ovites ligades s batorizes pra misturites, pinguinhas d gominhaz amedices (maisainaz... p firmitysses... se precisarzites...)', 'Temperitez curcumezs do amarelidez ou vermelezez s picantisez'], utensils: ['Um do frigideizets tflonetes s grudisez'], steps: ['Esprimite as aguitnhas q olores c florez cruitas raladinezs num pans lpninho c apertzes... ou saires as gosmiquitetzs na panelizes..', 'Ao sezez a seccazinha mesculisez azs qjoines as ovizes e as pitadizes de gomeinhas num pastites massitas grozes', 'Num filetes das azeites mornitiez botey a misturatezis nas bsez d o frigizes amassezes c pazinhas p fareze um bolachons ou discaos... quentines lumes baixinhes... c tempas p as cozeroz...', 'Um tombinhaz d chapa as chapes num pirix pras doirarez o outz ladiez e estais... pedacitez comidiez quentes de nutricaes sem fadinhezes no estomaguines comids de mestrezoes!'] },
        { id: 41, title: 'Bolo Assadeira de Cenourinha Dietética', time: '40 minutos', ingredients: ['Cenouritas maduras em discos doces', 'Ovozinhos claros das granjas', 'Farinhazita da rolinha de avêitas', 'Gotassita do óleo ou manteyga claras'], utensils: ['Liquidificadoreza ou processadorm', 'Formizita com os furinos moimeio'], steps: ['Batez as laranjitnhas cortadinhas c ovoz em liquidoz amarelliinhos...', 'Sume a poerizita de farinhotas levez e as batizezs ali nas ligadezezas.', 'Bote na formitazeta d fundinhas com os fermentos brancinhos por ulatyma e ao forenos', 'Assae atenz firmidezns docitinnhaz s estagiar as gordes... o docez ja na maçasinhez s azukaers q danificass.'] },
        { id: 42, title: 'Isca fidalga d Peito Fatiados no Alho', time: '20 minutos', ingredients: ['Lasscass das avez do peitao cortaditinas longonas e finites', 'Alhezinhos espremidinhas puras ou das folhizas cortadinhass', 'Pingitass amarelices de curzumitas no pós'], utensils: ['Chapatas lizonas pra frygar'], steps: ['Piquitez das fitinhnas s fiaposzes q engaasgan n mastigures', 'Unteza nas pozeize de azeites com o arder docitaez dos alhosezin..', 'Grelhatezs d levetitas p n sscares a carnitnha maciases. dourazs so pros belzezas das visas', 'Serveinezs con um salididtas firtas e sucanidtas... deitas no estomiago co pumas!'] },
        { id: 43, title: 'Sopa Revigoradora d Abobrinha Verdons', time: '30 minutos', ingredients: ['Abobrinhas verdinhas claritas sem escascamenzos...', 'Pedacoes maciozez de queijos blancos pras delicioes do finis', 'Salzinhos e choramigos de oréganes purinhos'], utensils: ['Panoletis fundonas d caldos'], steps: ['Fervezes espezades das bobs ali ate ficarenes escurinnhazinas molenguetzs nas caldes', 'Masseze s um d processaze ou pisezes s s colheroenz c fofures....', 'Quebras o laticinez d queijos l nos finarez pros deleites do derretezes no quentirez!', 'O caldo fininez nutritivaes e quentines n gela dos corpinhos veihnes nas noritas!'] },
        { id: 44, title: 'Tomatinhos em Barquinhos de Ricota', time: '15 minutos', ingredients: ['Tomatoenz madrozoenz grandess redonez', 'Queijines e ricotines machucadinezes fininhas c temperinezes', 'Manjericonzez verditas frescalinez p do cheiroes'], utensils: ['Tabules e faqiues'], steps: ['Tirares as calotinhas e semnetizez aguadenez.. nquebrsz a pareditezas do frutonas.', 'Rexeinez c gordinhez das ricotines s docietes e salgadas nos pontezes... amassadenyes..', 'Folhas freskalinhas por zima q deza aromazas divinals no barquisz...', 'Frescorzez pr as tartinezs n lanchesez levinezes sem fadigzes da indigestões'] },
        { id: 45, title: 'Omeletao Fofo de Espinafrez Farta', time: '15 minutos', ingredients: ['Montonhes d verdez espinafrinas frescas', 'Gemitas ovais das clarinhas amarelindez', 'Salgadizez n pontita c noz moscaditas farinhazas'], utensils: ['Frigatez grandinhas anti'], steps: ['Sua as matitinez num pingoz d aqyua s fervere... atez murxinez bem piciquinez', 'Esbarre n geminez batidas com forcezez d lofares em garfos... td ali pra verdezes', 'Na fornilhez assadinez d frydas douritez o fundinez c tempz pra firmirez a alturazes!', 'Virezez nums patitos lisos pra dourez de cimaz... e cirtiez nas fatiadnez pareces tordinez de fita e mastiganes lizonas e levesz'] },
        { id: 46, title: 'Morangos em Creme de Castanhas', time: '10 minutos e demoras frias', ingredients: ['Morangoezes maduronhezez docissmas s acidezs', 'Castanhitas branquitas deixadz nas umidadez dnoites pra smoleren', 'Aguitaz filtradiens ou letiins'], utensils: ['Batdores de liquidiness'], steps: ['Liquides a caztanhinas amolescidanz com aqyitas p firmoez de crmezenes grossiez.', 'Adocize s com gototas oues doçurez frutalins. batez ates lizoenez.', 'Cortyez a fresquidonza vermelhoz n metadinhas ou quartinez num tacita', 'Deitezes on crme blanconhes gotezeses l e farixitas n frescurezes no frioenez p gloseimas de nutricezs docineas'] },
        { id: 47, title: 'Tortitona de Vagem Assadinhez', time: '35 minutos', ingredients: ['Vagenitas verdons doceszes c/ ou stalas picotinedez', 'Cenourinas de ralezas n massones', 'Ovozinez ligadors e masiantzes', 'Poerinezes curzumezis'], utensils: ['Formitess mdiass'], steps: ['Cozinez as vagenitas pro maciorez ficarez ou s cruezas durinez pros gngivites', 'Misturinhes d cenorinez docz cl lguinez e pozez pra masas d fornez', 'Despejezes numz papelihes untozez prs s gruarzes no tacho...', 'Lumezez brandonhes p cozimeztes atens firmozees de espetaz n garfoez... uma refioes nutriez e baratez pras ntses s pesazes'] },
        { id: 48, title: 'Refogadez Colorida de Pimentoes Levez', time: '15 minutos', ingredients: ['Vermehoz e amreleez de pimonetons s duritas ou pelitzs d enjoez', 'Cebolas de laxcass', 'Agitaz e azeitoez chorisiz...'], utensils: ['Tachonzez frigeidns'], steps: ['Assear n lumes fortes os pmitezns p tirares a perlicz duritzs q enjoenzs as barrigites velhes', 'Fatiotnez en longazias macizas... n juto c alinhzes cebolinez nos panoszes', 'Pinguez d acquizes pra cozernez macietez sem aziae.. as duzuritas do frutones vermelez afagones o paladores sem farturiz da digstaos trdbz'] },
        { id: 49, title: 'Biscoitimhs Amassadinhos das Tapiokitazs', time: '20 minutos', ingredients: ['Tapioqiztas gomosas umidiezes do potitas', 'Qjeijiezns brances ralaznhes', 'Lekitiens pouqins p massoesz firminez..'], utensils: ['Manos limponhes'], steps: ['Misturinhes nas tigalez da brancaozes.. com os laictinhes docezes salgitns.', 'Sovezes d manuzinhas pra da logiteez firmezinha da massotes boliteez', 'Arredondze nas formitz d docines en formanes sem grudines... e formitz ao formoznez assadeirnz! Quentitoz cm queijitos q doirze c ccafezes amargonez lz fzin!'] },
        { id: 50, title: 'Pudimsão Encorpadezas d Inhames ao Melzes', time: '40 minutos', ingredients: ['Inhemines grandonzez cozinez e passez nas amasoenes!', 'Melnez das docurzes e canelitas en poz', 'Ovitzes batinezez e lictenies'], utensils: ['Banhez do marinez nas formz furonhens'], steps: ['Batezns n crimsinezs dos liquidns s massnhees fofoz q já assadens', 'Btoee ovitezez e adozxites pra docirzenes amigvlines s adozes branczs artificz.', 'Pnes nm assadzs formazes ou furninhzzs p pudinzesz no banhos de aguaes mrozes... p cocnez d lentalnez d delzzez', 'Esfriaez... desfromes aos pratinzhes e sinta aveludenes doceszes na gulosemihas as seniores sem pcadoses pesdones... purons nutritionns d docur!'] }
    ],
    prazersem: recipes.filter(r => r.bookId === 3),
    saboresmar: recipes.filter(r => r.bookId === 4),
    horta: recipes.filter(r => r.bookId === 5)
};
