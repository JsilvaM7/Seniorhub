const fs = require('fs');
const path = require('path');

const manualRecipes = [
    {
        id: 1,
        title: "Panqueca Dourada de Banana e Aveia",
        time: "15 minutos",
        ingredients: [
            "1 banana bem madura e macia",
            "2 ovos inteiros",
            "3 colheres de sopa de aveia em flocos finos",
            "1 colher de chá de canela em pó",
            "Manteiga ou óleo de coco para untar",
            "Mel ou melado a gosto para finalizar"
        ],
        utensils: [
            "Tigela média (bowl)",
            "Garfo para amassar e bater",
            "Frigideira antiaderente",
            "Espátula de silicone ou madeira"
        ],
        instructions: [
            "Separe a tigela e descasque a banana, garantindo que esteja bem madura para adoçar naturalmente.",
            "Com a ajuda do garfo, amasse bem a banana até que ela forme uma pastinha homogênea e sem grandes pedaços.",
            "Adicione os dois ovos inteiros diretamente na tigela com a banana amassada.",
            "Bata levemente com o garfo até que os ovos se incorporem totalmente à massa da banana.",
            "Acrescente a aveia em flocos finos e a canela, misturando novamente com cuidado.",
            "Aqueça a frigideira em fogo baixo e adicione um fio sutil de óleo de coco ou manteiga.",
            "Despeje cerca de metade da massa no centro da frigideira, espalhando suavemente com a espátula.",
            "Deixe dourar por cerca de 3 a 4 minutos, ou até notar que as bordas estão firmes e soltando.",
            "Com a espátula, vire a panqueca de uma só vez e doure o outro lado por mais 2 minutos.",
            "Transfira a panqueca pronta para um prato raso e decore com frutas adicionais e um fio de mel."
        ]
    },
    {
        id: 2,
        title: "Mingau Conforto de Quinoa com Maçã",
        time: "20 minutos",
        ingredients: [
            "1/2 xícara de quinoa em flocos",
            "1 maçã Fuji descascada e picada em cubinhos",
            "300ml de leite desnatado ou bebida de amêndoas",
            "1 anis-estrelado (opcional)",
            "1 pitada de sal",
            "Nozes picadas e macias (se tolerado)"
        ],
        utensils: [
            "Panela pequena e funda",
            "Tábua de corte",
            "Faca sem ponta afiada",
            "Colher de pau ou silicone"
        ],
        instructions: [
            "Lave bem a maçã, descasque-a com cuidado e retire o miolo e as sementes na tábua de corte.",
            "Pique a maçã em cubos bem pequenos para facilitar a mastigação e acelerar o preparo.",
            "Na panela pequena, coloque o leite e leve ao fogo médio até começar a aquecer levemente.",
            "Adicione os cubos de maçã, a quinoa em flocos, a pitada de sal e o anis-estrelado.",
            "Mexa bem todos os ingredientes usando a colher de pau até que estejam incorporados no líquido.",
            "Reduza o fogo para o mínimo assim que começar a ferver suavemente.",
            "Continue mexendo sem parar por cerca de 8 a 10 minutos, evitando que grude no fundo.",
            "Observe a textura cremosa: o mingau deve estar aveludado e a maçã bem macia.",
            "Desligue o fogo, remova o anis-estrelado e deixe descansar por 2 minutos.",
            "Sirva em uma tigela bonita, polvilhando canela e, caso queira, adicione as nozes picadas."
        ]
    },
    {
        id: 3,
        title: "Omelete Soufflé com Espinafre e Ricota",
        time: "15 minutos",
        ingredients: [
            "3 ovos grandes",
            "1 xícara de folhas de espinafre fresco lavadas",
            "2 colheres de sopa de ricota amassada",
            "1 colher de chá de azeite de oliva",
            "Sal e pimenta-do-reino a gosto",
            "Cebolinha verde picada bem fina"
        ],
        utensils: [
            "Tigela funda",
            "Fouet (batedor de arame) ou garfo grande",
            "Frigideira antiaderente com tampa",
            "Espátula reta"
        ],
        instructions: [
            "Separe e lave as folhas de espinafre, removendo os talos mais duros e secando suavemente com papel toalha.",
            "Quebre os três ovos na tigela funda e tempere com uma pitada de sal e pimenta-do-reino.",
            "Bata vigorosamente os ovos com o fouet até que estejam espumosos, o que dará o efeito soufflé.",
            "Adicione a ricota previamente amassada e a cebolinha picada, misturando delicadamente apenas para envolver.",
            "Leve a frigideira ao fogo médio-baixo e aqueça o azeite de oliva até espalhar bem no fundo.",
            "Coloque as folhas de espinafre na frigideira morna por 1 minuto, apenas para murcharem.",
            "Espalhe bem o espinafre e despeje toda a mistura dos ovos batidos por cima.",
            "Tampe a frigideira rapidamente, mantendo no fogo baixo por 4 a 5 minutos sem abrir.",
            "Retire a tampa com cuidado e confirme se o centro está firme, mas levemente úmido.",
            "Com a espátula, dobre a omelete ao meio e deslize suavemente para o prato quente."
        ]
    },
    {
        id: 4,
        title: "Creme Revigorante de Abóbora com Gengibre",
        time: "35 minutos",
        ingredients: [
            "400g de abóbora cabotiá descascada e em cubos",
            "1 colher de chá de gengibre fresco ralado",
            "1 dente de alho pequeno amassado",
            "1/2 cebola média picada fina",
            "2 colheres de sopa de azeite extra virgem",
            "500ml de caldo de galinha ou legumes natural",
            "Cheiro-verde picado para finalizar"
        ],
        utensils: [
            "Panela média ou grande",
            "Liquidificador de copo grosso",
            "Concha para servir",
            "Ralador pequeno para o gengibre"
        ],
        instructions: [
            "Inicie higienizando, descascando e picando a abóbora em cubos médios uniformes para que cozinhem por igual.",
            "No ralador, evite os aros e rale finamente apenas 1 colher de chá de gengibre fresco.",
            "Leve a panela ao fogo médio, adicione o azeite, a cebola e o alho e refogue até ficarem translúcidos e dourados por 3 minutos.",
            "Acrescente o gengibre ralado ao refogado e mexa rapidamente por 30 segundos para liberar o aroma.",
            "Despeje os cubos de abóbora e misture bem com os temperos do fundo da panela.",
            "Cubra os ingredientes orgânicos com o caldo natural morno e coloque a tampa.",
            "Deixe cozinhar em fogo de média intensidade por 20 minutos, ou até que a abóbora possa ser facilmente esmagada por um garfo.",
            "Desligue a panela e espere o líquido esfriar por uns 5 a 10 minutos para não estourar o liquidificador.",
            "Transfira gentilmente tudo para o liquidificador e bata na potência alta até formar um creme denso e sedoso.",
            "Retorne à panela rapidamente para reaquescer, ajuste o sal e sirva com o cheiro-verde espalhado por cima."
        ]
    },
    {
        id: 5,
        title: "Vitamina Energética de Abacate, Coco e Cacau",
        time: "10 minutos",
        ingredients: [
            "1/2 abacate tipo avocado ou manteiga, bem suculento",
            "200ml de água de coco gelada ou leite desnatado",
            "1 colher de sopa de cacau em pó 70%",
            "1 colher de sobremesa de semente de chia",
            "1 Tamara sem caroço (ou 1 colher de chá de mel puro)"
        ],
        utensils: [
            "Liquidificador ágil",
            "Colher média de sopa",
            "Faca serrilhada redonda",
            "Copo grande transparente"
        ],
        instructions: [
            "Se for usar a chia, deixe-a em um potinho hidratando com 2 dedinhos da água de coco por 5 minutos.",
            "Corte a fruta pela metade, retire o caroço polidamente com a fenda e reserve a casca.",
            "Ao soltar a polpa untuosa do abacate, deite-a acomodada no espaço do liquidificador limpo.",
            "Caso use uma tâmara, pique com a faca em pequenos pedacinhos miúdos para simplificar o bater.",
            "Junte a polpa verde com a fruta doce, o pó aromático de cacau e a água de coco bem gelada.",
            "Feche com precisão a base e inicie na batida mínima, subindo depois para o triturar máximo em 1 minuto.",
            "Com a suspensão da base pronta, deposite lá dentro aquela as sementinhas em repouso da chia.",
            "Pulse duas únicas vezes. Sem mais, apenas para distribuir o gel fibroso uniformemente pela vitamina.",
            "Prove através de um pequeno gole sorvido diretamente da borda para testar doçura final e cremosidade.",
            "Com sutileza, verte a textura aveludada para a sua taça matinal e se deleite ainda fresca."
        ]
    }
];

// Generative part for 6 to 50
const baseTemplates = [
    { prefix: "Sopa Nutritiva de", type: "sopa" },
    { prefix: "Purê Conforto de", type: "pure" },
    { prefix: "Frango Assado com", type: "frango" },
    { prefix: "Peixe Grelhado e", type: "peixe" },
    { prefix: "Salada Morna de", type: "salada" },
    { prefix: "Mingau Reforçado de", type: "mingau" },
    { prefix: "Suco Vitamínico de", type: "suco" },
    { prefix: "Crepioca Especial de", type: "crepioca" }
];

const ingredientsList = [
    "Cenoura e Grão-de-bico", "Batata Doce e Alecrim", "Mandioca e Filé Mignon", "Brócolis e Queijo Branco",
    "Feijão Branco e Alho-poró", "Ervilha e Hortelã", "Limão e Couve Roxa", "Maçã e Beterraba",
    "Banana e Chia", "Lentilha e Cenoura", "Abóbora e Sálvia", "Tilápia e Tomatinhos",
    "Pescada e Ervas Finas", "Cogumelos e Espinafre", "Grão-de-bico e Gergelim", "Aveia e Morangos",
    "Frango Desfiado e Requeijão", "Atum Natural e Ricota", "Ovos Caipira e Tomate"
];

let generatedRecipes = [];

for (let i = 6; i <= 50; i++) {
    const tpl = baseTemplates[i % baseTemplates.length];
    const item = ingredientsList[i % ingredientsList.length];
    const title = tpl.prefix + " " + item;

    generatedRecipes.push({
        id: i,
        title: title,
        time: (15 + (i % 3) * 10) + " minutos",
        ingredients: [
            "Ingrediente principal macio e bem lavado",
            "Temperos naturais a gosto (orégano, sal com moderação, etc.)",
            "1 fio de azeite extra virgem nutritivo",
            "Água ou leite para dar ponto se necessário",
            "Folhas verdes ou legumes complementares picados"
        ],
        utensils: [
            "Panela média antiaderente",
            "Faca sem ponta para corte seguro",
            "Tábua de apoio lavável",
            "Colher de pau ou de silicone firme"
        ],
        instructions: [
            "Inicie o preparo higienizando profundamente todos os alimentos que farão parte do prato para evitar contaminações indesejadas na pia.",
            "Após rigorosa limpeza, com a ajuda de uma faca segura, corte os alimentos sólidos em pedaços bastante tenros e fáceis de mastigar.",
            "Aqueça brandamente o azeite na panela utilizando sempre o fogo em intensidade média-baixa para preservar os óleos saudáveis.",
            "Incorpore os refogados básicos e especiarias suaves até subirem um aroma marcante em toda a extensão da cozinha.",
            "Adicione os componentes principais e intercale mexidas delicadas permitindo que não colem nas paredes macias da panela.",
            "Assim que os ingredientes ganharem textura de primeira cocção, regue suavemente com todo o líquido estipulado na receita.",
            "Deixe a temperatura fazer seu lento papel mantendo a panela levemente tampada para assim prender toda a evaporação umectante.",
            "Decorrido metade do tempo planejado, destampe curiosamente, promova nova mexedura e certifique a densidade nutritiva.",
            "Quando notar total derretimento ou amolecimento substancial exigido ao trato sênior, encerre a fonte principal de chamas.",
            "Deite a porção do dia de forma muito cuidadosa na sopeira, guarneça os adornos verdes, sirva ainda em temperatura acalentadora."
        ]
    });
}

const allRecipes = [...manualRecipes, ...generatedRecipes];

const fileContent = \`const livroEnergia = \${JSON.stringify(allRecipes, null, 2)};\`;

fs.writeFileSync(path.join(__dirname, 'livroEnergia.js'), fileContent, 'utf-8');
console.log('File livroEnergia.js successfully written.');
