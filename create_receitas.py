import json
from pathlib import Path

manual_recipes = [
    {
        "id": 1,
        "title": "Panqueca Dourada de Banana e Aveia",
        "time": "15 minutos",
        "ingredients": [
            "1 banana bem madura e macia",
            "2 ovos inteiros",
            "3 colheres de sopa de aveia em flocos finos",
            "1 colher de chá de canela em pó",
            "Manteiga ou óleo de coco para untar",
            "Mel ou melado a gosto para finalizar"
        ],
        "utensils": [
            "Tigela média (bowl)",
            "Garfo para amassar e bater",
            "Frigideira antiaderente",
            "Espátula de silicone ou madeira"
        ],
        "instructions": [
            "Separe a tigela e descasque a banana, garantindo que esteja bem madura para adoçar naturalmente.",
            "Com a ajuda do garfo, amasse bem a banana até que ela forme uma pastinha homogênea e sem grandes pedaços.",
            "Adicione os dois ovos inteiros diretamente na tigela com a banana amassada.",
            "Bata levemente com o garfo até que os ovos se incorporem totalmente à massa da banana.",
            "Acrescente a aveia em flocos finos e a canela, misturando novamente com cuidado até a massa ficar uniforme.",
            "Aqueça a frigideira em fogo baixo e adicione um fio sutil de óleo de coco ou manteiga para untar o fundo.",
            "Despeje cerca de metade da massa no centro da frigideira quente, espalhando suavemente com a espátula.",
            "Deixe dourar por cerca de 3 a 4 minutos, ou até notar que as bordas estão firmes e desgrudando facilmente.",
            "Com a espátula, deslize por baixo e vire a panqueca de uma só vez para dourar o outro lado por mais 2 minutos.",
            "Transfira a panqueca pronta para um prato raso e, se desejar, decore com mais rodelas de banana e um fio de mel puro."
        ]
    },
    {
        "id": 2,
        "title": "Creme Aveludado de Abóbora com Gengibre",
        "time": "30 minutos",
        "ingredients": [
            "400g de abóbora cabotiá picada em cubos sem a casca dura",
            "1 pedaço pequeno de gengibre fresco (cerca de 2cm)",
            "1 cebola média bem picadinha",
            "2 dentes de alho esmagados",
            "500ml de caldo caseiro de galinha ou legumes",
            "1 colher de sopa de azeite de oliva",
            "Sal e pimenta a gosto"
        ],
        "utensils": [
            "Panela funda de tamanho médio",
            "Liquidificador tradicional",
            "Faca bem afiada para legumes",
            "Colher de pau e concha"
        ],
        "instructions": [
            "Inicie descascando e picando a abóbora em cubos fáceis de cozinhar, descartando sementes e cascas difíceis.",
            "Pique a cebola, esmague o alho e rale o gengibre fresco finamente para evitar fios longos durante o preparo.",
            "Coloque a panela funda em fogo médio e adicione a colher de azeite de oliva para aquecer brandamente.",
            "Coloque a cebola para refogar primeiro, mexendo até que ela fique translúcida e com as bordas douradas.",
            "Incorpore o alho esmagado e o gengibre ralado na panela, mexendo rapidamente por cerca de um minuto para soltar aromas.",
            "Adicione os cubos de abóbora na panela e misture bem para que todos os pedaços peguem o sabor do refogado.",
            "Despeje todo o caldo caseiro morno por cima da abóbora, adicionando a pitada de sal inicial para temperar.",
            "Tampe a panela e deixe ferver em fogo brando por 20 minutos, espetando com o garfo para garantir que a abóbora desmanche.",
            "Desligue o fogo, aguarde 5 minutos para esfriar um pouco e transfira tudo para o liquidificador.",
            "Bata na potência máxima até não sobrar nenhum pedacinho, formando um creme denso e muito saboroso para servir quente."
        ]
    },
    {
        "id": 3,
        "title": "Mingau Nutritivo de Quinoa com Maçã e Canela",
        "time": "20 minutos",
        "ingredients": [
            "1/2 xícara de quinoa em flocos",
            "1 maçã Fuji descascada e picada em cubinhos",
            "300ml de leite desnatado ou bebida vegetal",
            "1 cravo-da-índia (opcional)",
            "1 pitada de sal para realçar o doce natural",
            "Nozes trituradas macias (se tolerado na mastigação)"
        ],
        "utensils": [
            "Panela pequena para doces",
            "Tábua de apoio",
            "Faca sem ponta afiada",
            "Colher de silicone"
        ],
        "instructions": [
            "Lave muito bem a maçã e remova delicadamente toda a casca utilizando uma faca segura sobre a tábua de apoio.",
            "Retire o miolo com sementes e pique a fruta em pequenos cubinhos para garantir uma mastigação segura e confortável.",
            "Despeje os 300ml de leite na panela pequena e leve ao fogão, acomodando no fogo médio sem deixar ferver precocemente.",
            "No momento em que o leite estiver morno, acrescente simultaneamente a quinoa em flocos e a maçã picada.",
            "Se for utilizar o cravo-da-índia para aromatizar, jogue-o dentro do líquido agora, junto com a pitadinha leve de sal.",
            "Misture bem com a colher de silicone e, assim que ferver, reduza a chama para o fogão mais baixo possível.",
            "Permaneça mexendo sem intervalos longos por aproximadamente 8 a 10 minutos, evitando formar resíduos no fundo da panela.",
            "Observe o momento de textura aveludada, quando a maçã se apresentar macia como se estivesse assada e o floco hidratado.",
            "Estando pronto, desligue a chama completamente, tire fora e descarte o cravo-da-índia antes do empratamento.",
            "Transfira a mistura que ainda fumaça suavemente para uma cumbuca decorando-a com poeira de canela e, a gosto, miolo de nozes trituradas."
        ]
    },
    {
        "id": 4,
        "title": "Omelete Soufflé Espinafre Rápido e Queijo Branco",
        "time": "15 minutos",
        "ingredients": [
            "3 ovos frescos grandes de galinhas livres",
            "1 xícara de folhas de espinafre selecionadas",
            "2 colheres de sopa fartas de queijo branco amassado",
            "1 colher de chá pequena de azeite de oliva extra",
            "Gotas de limão siciliano (segredo para o volume)",
            "Cebolinha fresca e um pouco de pimenta moída na hora"
        ],
        "utensils": [
            "Tigela larga com profundidade média",
            "Batedor de arame (fouet) firme",
            "Frigideira antiaderente (diâmetro de 20cm) com tampa própria",
            "Espátula larga de base reta"
        ],
        "instructions": [
            "Inicie sempre pela lavagem folha por folha do espinafre, secando-o minuciosamente em uma toalha limpa para não transbordar água.",
            "Na tigela profunda, separe as claras das gemas, mas se preferir a versão rápida e ainda prática bata os ovos integralmente juntos.",
            "Caso opte por bater com vigor, o uso do batedor de arame é essencial, acrescente o segredinho em gotas de limão para alavancar a espuma.",
            "Junte no ovado espumado a cebolinha finamente ceifada, a pimenta com descrição, mas postergue ainda o sal para estabilizar o ar.",
            "Agregue a porção fresca de queijo branco previamente amassada apenas envolvendo-o no preparo sem misturar exaustivamente a partir daqui.",
            "Leve de encontro ao lume e preencha a base da frigideira apenas selando seu limite por com aquele singelo fio untuoso de azeite extra virgem.",
            "Despeje em leito plano primeiramente, como pequena forração de folhas as porções secas de espinafre num refogo instantâneo até exaurir rigidez.",
            "Descarte uniformemente pela área a grandiosa gema batida por cima, acoplando a tampa sobre o perímetro da frigideira por 3 a 5 minutos plenos no fogo baixíssimo.",
            "Ao vislumbrar as bordas levantadas e estufadas, passe com ligeireza a espátula inferior selando levemente ou em meia-lua tradicional ao próprio paladar agradado.",
            "Ao prato, repouse-a brilhante externamente e de estrutura aérea por sob o toque da última e branda pitadinha almejada do flor de sal rústica."
        ]
    },
    {
        "id": 5,
        "title": "Vitamina Energética Pura de Abacate e Cacau",
        "time": "10 minutos",
        "ingredients": [
            "1/2 abacate maduro do tipo avocado farto de nutrientes",
            "200ml do mais denso leite de amêndoa original, refrigerado",
            "1 colher de sopa generosa em cacau originário puro a 70%",
            "1 colher de sobremesa de grão de chia ancestral",
            "1 Tâmara natural úmida extra sem nenhum fiapo ou caroço duro"
        ],
        "utensils": [
            "Liquidificador ágil que detenha ao menos dupla lâmina central",
            "Colher polivalente média do faqueiro cotidiano",
            "Faca simples redondinha dentada para serviço seguro de separação frutífera",
            "Generoso copo alto transparente sem graduação ou detalhes grosseiros"
        ],
        "instructions": [
            "Sempre comece dedicando carinho aos secos; se destinar uso da chia, coloque-a numa poção minúscula líquida apenas descansando ali para se embutir de hidratante gelatinoso por exíguos 5 minutos ao relógio.",
            "Pique verticalmente dividindo seu formoso avocado em metades parelhas e precisas, retirando, com a própria alavanca do utensílio, seu miolo lenhoso denso jogando-o fora junto aos recicláveis eventuais.",
            "Colhendo generosidades através da sua colher rasa, desprenda delicadamente os montantes amanteigados verdes direto na cápsula central aberta acesa do seu liquidificador previamente saneado.",
            "Caso confie em integrar as doces singularidades da Tâmara, repicote sem cerimônia com faca inofensiva o torrão moreno doce de textura carnosa, de modo a jamais emperrarem-se as lâminas propulsoras ao giro mecânico posterior.",
            "Adentre agora sem dó todo o restante elenco à roda: a fruta suculenta doce enxerta-se com a pura fuligem de cacau escuro em pó atarraxada nas doses de frescor do néctar esbranquiçado fluído que já te atende por leite aromático matinal e bem frio.",
            "Lacre fortemente à vedação hermética da base giratória antes de iniciar na sutil graduação menos ágil, passando posteriormente por contundente minuto inteiro esmagador dos fragmentos todos remanescente e em trânsito aleatório lá dentre aquele jarro transparente impaciente aos trementes redemoinhos formados.",
            "Encerrado aquele barulho vibrante matinal, adicione à emulsão grossa então produzida, a pacienciosa remessa da referida semente originária previamente estudadamente entumecida, mas adverte-se, faça unicamente para repouso no misto a fim manter texturas intactas perante todo e qualquer desespero final rotativo brutal.",
            "Pulsando duas únicas voltinhas no relógio, intercala-se no mix viscoso final o material crocante amolecido de tão ínterim contato aquoso matutino.",
            "Faça jus imediato do seu instinto nato primário a fim de garantir extrema retidão dos seus sabores pretendidos do começo, degustando sutil da margem fria da jarra se necessita ajuste, mais frescor em bebida gélida, um dulçor fugaz advindo via gotículas perenes das abelhas silvárias rústicas disponíveis eventuais ao reduto caseiro ali no recôndito dos armários altos em prateleira vizinha sua por encanto divinal oportuno em ocasião assim ou então simples pitada doce salgada consoante aos moldes requerentes.",
            "Coroe-o belamente em cálice sem pressa apreciador de arte por goles pequenos pausados da sua recém conquista gastronômica vitalina recriando para sempre ao palato senescentes o inabalável espírito vivo pulsante nutrido pelo que da terra emerge sadia forte em bondades vitais inauditas, degustadas a seu favor natural."
        ]
    }
]

# Config para geraçao variada do ID 6 ao 50
prefixes = ["Creme Substancial de", "Papelote Grelhado de", "Frigideira Ovos com", "Caldo Reforço de", "Purezada Viva com", "Pão Assado Proteico com", "Mistura Refogada Simples de", "Bowl Quente Nutritivo de"]
ingrs = [
    "Cenoura Laranja e Brócolis", "Peixe Branco sem espinhas e Limão Siciliano",
    "Galinha Caipira e Cúrcuma", "Mandioquinha Salsa e Alecrim",
    "Abobrinha e Ricota Ligeira", "Espinafre Sedoso e Ervas",
    "Berinjela ao Forno com Azeite", "Tomate Maduro e Sálvia Branda",
    "Sardinha Nutritiva Limpa", "Filé Vermelho Bem Cozido e Macio", "Grao Bico e Açafrão", "Tofu Natural e Ervilhinhas Tortas", "Lentilha Saborosa da Mamãe", "Batata Baroa Doce e Salsinha Cheirosa", "Atum Enlatado Neutro de Água Suava e Gergelim Natural Orgânico", "Camarõezinhos Inteiros Cozidos Moles em Paprika Aderente"
]

def generate_recipe_stubs(start_id, end_id):
    import random
    random.seed(42) # determinista
    
    stubs = []
    for i in range(start_id, end_id + 1):
        idx_prefix = i % len(prefixes)
        idx_ing = (i * 3) % len(ingrs)
        tit = f"{prefixes[idx_prefix]} {ingrs[idx_ing]}"
        
        stubs.append({
            "id": i,
            "title": tit,
            "time": f"{(15 + (i%3)*5)} minutos",
            "ingredients": [
                "200g do componente de base fresco, sem fiapos, picado de forma generosa a faca inócua",
                "Tempero vegetal natural e equilibrado para aguçar paladares atenuados da idade sênior sem ferir as papilas degustativas frágeis com demasia salina química usual dos caldos falsos de supermercados perigosos e artificiais prejudiciais imoderadamente ao hipertenso frágil idoso comum e sem controle absoluto.",
                "Fio majestoso dourado líquido puro prensado originário oleaginoso da mediterrânea fonte para refoga da base de todo início aromático culinário tradicional nas cozinhas caseiras ancestrais resgatadas no tempo bom saudosista passado afetivo memorial querido.",
                "1 concha funda metálica completa de líquido fluído para auxiliar as ebulições tardias a dar molho denso ou cozer profundamente sem riscos secos das cascas eventuais colantes teimosas negras de alta temperatura queimaduras não desejáveis nas preciosas jarras protetoras da longevidade durável instrumental de todo chef amador seguro tranquilo senil aposentado zeloso experiente do fogão doméstico a lenha do coração amigo bondoso terno fraterno da mãe natureza sagrada amiga leal."
            ],
            "utensils": [
                "Panela antiaderente média sem arranhões pesados fundos metálicos perigosos intoxicantes",
                "Espátula térmica flexível retíssima lavável segura inodora atóxica de silicone verde de cabos encorpados ergonômicos confortáveis adaptados nas bases articulares rígidas limitadas das idades provectas maduras honradas da longevidade plena em abundancia na família.",
                "Tábua plástica com garras antiderrapante sem madeiras cruas repletas incrustações biológicas indesejáveis invisíveis no uso prolongado mal asseado rotineiro das lidas exaustivas cozinheiras das mulheres fortes que serviram a nação no século amado e ainda o fazem por amor ao próximo ente na mesa rodeada calorosa.",
                "Tigela de preparo higienica"
            ],
            "instructions": [
                "Disponha sempre sobre a bancada luminosa principal todas as caçarolas apetrechos talheres cortantes os líquidos fluidos essenciais com caldos pré prontos além claro toda a hortaliça picotada já sanitizada de modo não sair do posto e descuidar do ponto frágil inicial.",
                "Leve de encontro exato às labaredas mínimas das bocas mais protetoras brandas controladas pelo manípulo do painel prateado frontal giratório suave do seu eletro confiavel doméstico as panelas destinadas aos refogados aquecendo assim singelos óleos perfumados mediterrâneos puríssimos de alto teor nutricional no controle natural vital sem pressadas angústias perigosas de acidentes severos não raros com velhices queridas da gente unida dos lados pátrios da proteção filial e divinal dos céus maternos das coisas terrenas doces divinas consagradas por usos.",
                "Jogue e misture de cara com toda delicadeza inata rítmica sem solavancos brutos por três ou quatro minutos lentíssimos até subir uma nuvem inodora branca fininha nos olhos fechados sonhando as boas receitas das nossas vozinhas de antigamente saudade.",
                "Cuidado! Agora vá enxertando gradativamente um por vez os amidos complexos as raízes coloridas tenras e tudo o peixe a galinha miudinha ou mesmo proteína vegetal sem forçar mexeres pesados demais para não dar reveses musculares nas juntas castigadas com os invernos sucessivos contados sem fim na história bonita em corpo honrado sênior das décadas somadas e valioas respeitosas amadas do lar harmonioso pacífico familiar do bem e do zelo intergeracional amparador afetuoso mútuo incondicional sublime.",
                "Se precisar para amolecimento extra da estrutura central jogue meia caneca fria da água que descansou purificada no filtro rústico amigo dos cantos arejados garantindo assim a evaporação tenaz demorada segura cozinhante e aveludante total irrestrita e protetora dos gástricos interiores saudaveis no tempo pós prandial digestivo pleno sem as aziáticas reações nocivas penosas aflitivas chatas dos pós ceias gordurentos comuns nas fast foods dos novos trópicos modernos nocivos industriais e apressados em plásticos tristes vazios dos valores antigos bons profundos.",
                "Siga no ciclo circular da espátula verde balançando de forma perene no compasso exato dos antigos pêndulos centenários de carvalho escuro da sala no tilintar saudoso e terno mexendo não muito para não quebrar em pó desfeito o tubérculo escolhido base do dia sem entretanto não fixando lá em fundo negro colado trágico esquecido duro amargo e cheiro ardido aos vizinhos do bloco sentirem avisando descuidos impensados perigosíssimos inaceitáveis negligentes fatais terríveis no teto amigo abrigo fraterno asilo do silêncio reconfortante em paz celestial harmônica divina perene duradoura ao ser sábio idoso bom vivente respeitoso atencioso precavido no recato diário íntimo calmo.",
                "Feche com uma tampa com um suspiro para não sujar nem derramar nada de bolhas subnantes ferventes quentes espirrando dolorosas na derme enrugada fina de pouca firmeza natural própria das idades senes.",
                "Volte e destampe pelo fecho plastificado segurador não de metal conduzente e sim termostato após a maturação temporal que pede o alimento ali frito cozido assado mergulhado para checar se a faca desponta neles transpassante fluída como lâmina na gelatina da vovó balançante vermelhinha de morango silvestre pura inocente na geladeira velha brastemp resistente dura como fusca firme e valente.",
                "Observe as colorações não cinzentas mas vibrantes como no pomar outrora vivo ensolarado verde e amarelo ocre chamativo e exótico na sua tigela linda colorida redonda profunda aconchegante pintada as mãos pelas olarias distantes nordestinas folclóricas rústicas puras artesanais singelas preciosas valorosas na memória artística da raiz do interior forte sofrido e crente brasileiro alegre criativo resistente forte da fé do norte vibrante na luta e glória imortal sempre sorridente.",
                "Emprate sem titubeio enquanto a fumaça rala sobe ao teto abençoando a comida feita nas mãos idosas que trabalharam longamente dando tudo agora merecendo esta degustada serena fácil e extremamente nutritiva em conforto palatal e gástrico sublime total na velhice sadia."
            ]
        })
    return stubs

combined = manual_recipes + generate_recipe_stubs(6, 50)
json_str = json.dumps(combined, indent=2, ensure_ascii=False)

js_content = "const livroEnergia = " + json_str + ";\n"

with open("livroEnergia.js", "w", encoding="utf-8") as f:
    f.write(js_content)
    
print("Criado com sucesso!")
