let dados = [
    {
        titulo: "Corinthians",
        descricao: "Time de futebol brasileiro, sediado em São Paulo.",
        idade: 113, // Fundado em 1910
        link: "https://www.corinthians.com.br/",
        tags: ["Timão", "Coringão", "Corinthians SP"]
    },
    {
        titulo: "São Paulo",
        descricao: "Time de futebol brasileiro, sediado em São Paulo.",
        idade: 88, // Fundado em 1930
        link: "https://www.saopaulofc.net",
        tags: ["Tricolor Paulista", "SPFC", "Soberano"]
    },
    {
        titulo: "Santos",
        descricao: "Time de futebol brasileiro, conhecido por revelar Pelé.",
        idade: 112, // Fundado em 1912
        link: "https://www.santosfc.com.br",
        tags: ["Peixe", "Santástico", "Alvinegro Praiano"]
    },
    {
        titulo: "Palmeiras",
        descricao: "Time de futebol brasileiro, também conhecido como Verdão.",
        idade: 109, // Fundado em 1914
        link: "https://www.palmeiras.com.br",
        tags: ["Verdão", "Porco", "Alviverde"]
    },
    {
        titulo: "Flamengo",
        descricao: "Time de futebol brasileiro, um dos mais populares do Brasil.",
        idade: 128, // Fundado em 1895
        link: "https://www.flamengo.com.br",
        tags: ["Mengão", "Fla", "Rubro-Negro"]
    },
    {
        titulo: "Fluminense",
        descricao: "Tradicional clube de futebol brasileiro, sediado no Rio de Janeiro.",
        idade: 121, // Fundado em 1902
        link: "https://www.fluminense.com.br",
        tags: ["Flu", "Tricolor Carioca", "Nense"]
    },
    {
        titulo: "Botafogo",
        descricao: "Time de futebol brasileiro, famoso pelo seu histórico de craques.",
        idade: 119, // Fundado em 1904
        link: "https://www.botafogo.com.br",
        tags: ["Fogão", "Glorioso", "Botafogo RJ"]
    },
    {
        titulo: "Vasco da Gama",
        descricao: "Time de futebol brasileiro, conhecido por sua história no futebol carioca.",
        idade: 125, // Fundado em 1898
        link: "https://www.vasco.com.br",
        tags: ["Vascão", "Gigante da Colina", "Cruz-Maltino"]
    },
    {
        titulo: "Cruzeiro",
        descricao: "Time de futebol brasileiro, um dos grandes clubes de Minas Gerais.",
        idade: 103, // Fundado em 1921
        link: "https://www.cruzeiro.com.br",
        tags: ["Raposa", "Celeste", "Cruzeirão Cabuloso"]
    },
    {
        titulo: "Atlético Mineiro",
        descricao: "Time de futebol brasileiro, tradicional clube de Minas Gerais.",
        idade: 116, // Fundado em 1908
        link: "https://www.atletico.com.br",
        tags: ["Galo", "Atlético MG", "Alvinegro"]
    },
    {
        titulo: "América Mineiro",
        descricao: "Time de futebol brasileiro, clube de Belo Horizonte.",
        idade: 111, // Fundado em 1912
        link: "https://www.americamineiro.com.br",
        tags: ["Coelho", "América MG", "América Mineiro"]
    },
    {
        titulo: "Internacional",
        descricao: "Time de futebol brasileiro, clube de Porto Alegre.",
        idade: 115, // Fundado em 1909
        link: "https://www.internacional.com.br",
        tags: ["Inter", "Colorado", "Internacional RS"]
    },
    {
        titulo: "Grêmio",
        descricao: "Time de futebol brasileiro, rival do Internacional em Porto Alegre.",
        idade: 121, // Fundado em 1903
        link: "https://www.gremio.net",
        tags: ["Imortal Tricolor", "Grêmio FBPA", "Tricolor Gaúcho"]
    },
    {
        titulo: "Juventude",
        descricao: "Time de futebol brasileiro, tradicional clube de Caxias do Sul.",
        idade: 110, // Fundado em 1913
        link: "https://www.juventude.com.br",
        tags: ["Juve", "Juventude RS", "Papo"]
    },
    {
        titulo: "Atlético Paranaense",
        descricao: "Time de futebol brasileiro, clube de Curitiba.",
        idade: 99, // Fundado em 1924
        link: "https://www.athletico.com.br",
        tags: ["Furacão", "Athletico PR", "Atlético Paranaense"]
    },
    {
        titulo: "Atlético Goianiense",
        descricao: "Time de futebol brasileiro, clube de Goiânia.",
        idade: 87, // Fundado em 1937
        link: "https://www.atleticogoianiense.com.br",
        tags: ["Dragão", "Atlético GO", "Atlético Goianiense"]
    },
    {
        titulo: "Goiás",
        descricao: "Time de futebol brasileiro, clube tradicional de Goiás.",
        idade: 80, // Fundado em 1943
        link: "https://www.goiasec.com.br",
        tags: ["Verdão", "Goiás EC", "Goiás Esporte Clube"]
    },
    {
        titulo: "Anápolis Futebol Clube",
        descricao: "Time de futebol brasileiro, clube do interior de Goiás.",
        idade: 80, // Fundado em 1943
        link: "https://www.anapolisfc.com.br",
        tags: ["Galo da Comarca", "Anápolis FC", "Anápolis Futebol Clube"]
    },
    {
        titulo: "Coritiba",
        descricao: "Time de futebol brasileiro, clube de Curitiba.",
        idade: 114, // Fundado em 1909
        link: "https://www.coritiba.com.br",
        tags: ["Coxa", "Coritiba FC", "Coritiba PR"]
    },
    {
        titulo: "Cuiabá",
        descricao: "Time de futebol brasileiro, clube de Cuiabá.",
        idade: 23, // Fundado em 2001
        link: "https://www.cuiabaesporteclube.com.br",
        tags: ["Dourado", "Cuiabá EC", "Cuiabá Esporte Clube"]
    },
    {
        titulo: "Bragantino",
        descricao: "Time de futebol brasileiro, clube de Bragança Paulista.",
        idade: 95, // Fundado em 1928
        link: "https://www.redbullbragantino.com.br",
        tags: ["Massa Bruta", "RB Bragantino", "Bragantino"]
    },
    {
        titulo: "Fortaleza",
        descricao: "Time de futebol brasileiro, clube do Ceará.",
        idade: 105, // Fundado em 1918
        link: "https://www.fortalezaec.net",
        tags: ["Leão do Pici", "Fortaleza EC", "Fortaleza"]
    },
    {
        titulo: "Ceará",
        descricao: "Time de futebol brasileiro, clube de Fortaleza.",
        idade: 109, // Fundado em 1914
        link: "https://www.cearasc.com",
        tags: ["Vozão", "Ceará SC", "Ceará"]
    },
    {
        titulo: "Bahia",
        descricao: "Time de futebol brasileiro, clube de Salvador.",
        idade: 92, // Fundado em 1931
        link: "https://www.esporteclubebahia.com.br",
        tags: ["Esquadrão de Aço", "Bahia EC", "Bahia"]
    },
    {
        titulo: "Vitória",
        descricao: "Time de futebol brasileiro, rival do Bahia em Salvador.",
        idade: 124, // Fundado em 1899
        link: "https://www.ecvitoria.com.br",
        tags: ["Leão da Barra", "Vitória EC", "Vitória"]
    },
    {
        titulo: "Real Madrid",
        descricao: "Time de futebol espanhol, um dos maiores clubes do mundo.",
        idade: 122, // Fundado em 1902
        link: "https://www.realmadrid.com",
        tags: ["Los Blancos", "Real Madrid CF", "Real Madrid"]
    },
    {
        titulo: "Atlético de Madrid",
        descricao: "Time de futebol espanhol, tradicional clube de Madri.",
        idade: 121, // Fundado em 1903
        link: "https://www.atleticodemadrid.com",
        tags: ["Atlético", "Atleti", "Atlético de Madrid"]
    },
    {
        titulo: "Barcelona",
        descricao: "Time de futebol espanhol, rival histórico do Real Madrid.",
        idade: 125, // Fundado em 1899
        link: "https://www.fcbarcelona.com",
        tags: ["Barça", "FC Barcelona", "Barcelona"]
    },
    {
        titulo: "Manchester City",
        descricao: "Time de futebol inglês, um dos maiores clubes da Inglaterra atualmente.",
        idade: 130, // Fundado em 1894
        link: "https://www.mancity.com",
        tags: ["City", "Manchester City FC", "Man City"]
    },
    {
        titulo: "Milan",
        descricao: "Time de futebol italiano, um dos maiores clubes da Itália.",
        idade: 124, // Fundado em 1899
        link: "https://www.acmilan.com",
        tags: ["Rossoneri", "AC Milan", "Milan"]
    }
  ];
  