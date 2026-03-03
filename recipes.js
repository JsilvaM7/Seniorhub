// ── Biblioteca SeniorHub — 5 Livros ─────────────────────────────────────────
const BOOKS = {
    1: { title: "Relíquias da Cozinha: Sabores que Atravessam Gerações", idRange: [1, 50] },
    2: { title: "Energia no Prato: Nutrição e Praticidade para o Dia a Dia", idRange: [51, 100] },
    3: { title: "Prazer Sem Culpa: O Lado Doce da Vida com Saúde", idRange: [101, 150] },
    4: { title: "Sabores do Mar: Leveza e Nutrição para a Longevidade", idRange: [151, 200] },
    5: { title: "Horta no Prato: O Melhor dos Vegetais na Cozinha Sênior", idRange: [201, 250] }
};

function getBookByRecipeId(id) {
    for (const [num, book] of Object.entries(BOOKS)) {
        if (id >= book.idRange[0] && id <= book.idRange[1]) {
            return { number: parseInt(num), ...book };
        }
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
