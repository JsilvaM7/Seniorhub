const recipes = [
    {
        id: 1,
        title: "Sopa Nutritiva de Abóbora com Gengibre",
        ingredients: ["500g de abóbora cabotiá", "1 pedaço pequeno de gengibre", "1 cebola média", "2 dentes de alho", "Sal e azeite a gosto"],
        utensils: ["Panela grande", "Liquidificador ou mixer", "Colher de pau", "Faca afiada"],
        steps: [
            "Começamos descascando a abóbora com bastante cuidado e cortando em cubos médios.",
            "Agora, vamos picar a cebola e o alho bem miudinhos para soltar todo o sabor.",
            "Em uma panela, aqueça um fio de azeite e refogue a cebola e o alho até ficarem transparentes.",
            "Adicione os cubos de abóbora e o gengibre ralado na panela.",
            "Cubra tudo com água quente, mas não precisa exagerar, logo acima do nível da abóbora.",
            "Deixe cozinhar com a panela semi-tampada até que a abóbora esteja bem macia.",
            "Com muito carinho e cuidado, vamos bater tudo no liquidificador até virar um creme lisinho.",
            "Volte o creme para a panela para acertar o sal e aquecer mais um pouquinho.",
            "Se achar que está muito grosso, pode colocar um pinguinho mais de água quente.",
            "Sirva quentinho, talvez com um fio de azeite por cima para finalizar.",
            "Sinta o cheirinho maravilhoso que invade a cozinha agora.",
            "Aproveite cada colherada dessa sopa que aquece o coração."
        ]
    },
    {
        id: 2,
        title: "Peixe Assado com Ervas da Horta",
        ingredients: ["2 filés de tilápia ou pescada", "Suco de 1 limão", "Alecrim e tomilho frescos", "Rodelas de tomate", "Azeite extra virgem"],
        utensils: ["Assadeira média", "Papel manteiga", "Pincel de silicone", "Travessa para servir"],
        steps: [
            "Primeiro, vamos lavar bem o peixe e secar com um papel toalha suavemente.",
            "Tempere com o suco de limão e um pouquinho de sal, deixando descansar por 10 minutos.",
            "Forre a nossa assadeira com o papel manteiga para não grudar nada.",
            "Acomode os filés delicadamente na assadeira.",
            "Coloque as rodelas de tomate por cima de cada filé, como se fosse um cobertor.",
            "Espalhe as folhinhas de alecrim e tomilho com as mãos, sentindo o aroma das ervas.",
            "Regue com um fio generoso de azeite para manter a suculência.",
            "Leve ao forno pré-aquecido a 180°C por cerca de 20 a 25 minutos.",
            "Fique de olho: o peixe deve estar branquinho e soltando lascas facilmente.",
            "Retire do forno com cuidado, usando luvas para não se queimar.",
            "Transfira para uma travessa bonita, pois merecemos comer com os olhos também.",
            "Este prato é leve e perfeito para um almoço tranquilo em família."
        ]
    },
    {
        id: 3,
        title: "Arroz Integral com Vegetais Coloridos",
        ingredients: ["1 xícara de arroz integral", "1 cenoura ralada", "1/2 xícara de ervilhas frescas", "Salsinha picada", "1 dente de alho amassado"],
        utensils: ["Panela de arroz ou comum", "Ralador de legumes", "Escorredor", "Colher de servir"],
        steps: [
            "Vamos começar lavando bem o arroz e deixando escorrer um pouquinho.",
            "Refogue o alho no azeite até que ele suba aquele perfume delicioso.",
            "Coloque o arroz e mexa bem para que cada grão seja envolvido pelo azeite.",
            "Adicione 3 xícaras de água quente e uma pitada de sal.",
            "Rale a cenoura com carinho usando a parte mais grossa do ralador.",
            "Quando a água do arroz estiver quase secando, adicione a cenoura e as ervilhas.",
            "Tampe a panela e deixe terminar de secar no fogo bem baixinho.",
            "Desligue o fogo e deixe a panela tampada por mais 5 minutos para o arroz ficar soltinho.",
            "Solte os grãos com um garfo, fazendo movimentos leves.",
            "Misture a salsinha picada para dar aquele toque verde e fresco.",
            "Veja como as cores deixam o prato mais alegre e apetitoso.",
            "Uma refeição completa e cheia de fibras para nossa saúde."
        ]
    },
    {
        id: 4,
        title: "Salada Tropical com Molho de Iogurte",
        ingredients: ["Folhas de alface variadas", "1 manga cortada em cubos", "1 pote de iogurte natural", "Hortelã fresca", "Mel e limão"],
        utensils: ["Saladeira grande", "Tigela pequena para o molho", "Batedor de arame (fouet)", "Pinça de salada"],
        steps: [
            "Lave bem as folhas em água corrente e seque-as com delicadeza.",
            "Rasgue as folhas com as mãos, mantendo um aspecto rústico e natural.",
            "Corte a manga em cubinhos, escolhendo uma fruta bem docinha.",
            "Em uma tigelinha separada, vamos preparar o nosso molho especial.",
            "Misture o iogurte, o suco de meio limão e uma colher de mel.",
            "Pique a hortelã bem fininha e adicione ao molho, mexendo bem.",
            "Arrume as folhas na saladeira de forma bem espaçosa.",
            "Espalhe os cubos de manga por cima, criando um belo contraste de cores.",
            "Regue a salada com o molho de iogurte apenas na hora de servir.",
            "Use a pinça para misturar levemente, garantindo que tudo fique saboroso.",
            "A refrescância da hortelã vai surpreender o seu paladar.",
            "Uma opção maravilhosa para os dias de calor e bem-estar."
        ]
    },
    {
        id: 5,
        title: "Mousse de Abacate e Cacau (Docinho Saudável)",
        ingredients: ["1 abacate maduro médio", "3 colheres de cacau em pó", "2 colheres de mel ou melado", "Gotas de baunilha", "Nozes picadas"],
        utensils: ["Processador ou liquidificador", "Espátula de silicone", "Taças individuais", "Geladeira"],
        steps: [
            "Escolha um abacate bem maduro e macio para garantir a cremosidade.",
            "Retire a polpa com uma colher, aproveitando tudo o que puder.",
            "Coloque o abacate no processador junto com o cacau em pó.",
            "Adicione o mel e as gotinhas de baunilha para perfumar o doce.",
            "Bata tudo muito bem até que não reste nenhum pedacinho de fruta.",
            "Pare um pouco, raspe as laterais com a espátula e bata novamente.",
            "A textura deve ficar parecida com um veludo, bem lisa e brilhante.",
            "Distribua o mousse em taças bonitas, dividindo com carinho.",
            "Leve à geladeira por pelo menos uma hora para ficar bem geladinho.",
            "Na hora de servir, coloque as nozes picadas por cima para dar um crocante.",
            "Você nem vai acreditar que um doce tão gostoso pode ser tão saudável.",
            "Parabéns por concluir nossas 5 receitas! Aproveite cada pedacinho."
        ]
    }
];

// Generate 45 placeholder recipe names for the sidebar
for (let i = 6; i <= 50; i++) {
    recipes.push({
        id: i,
        title: `Receita da Família #${i}`,
        locked: true
    });
}
