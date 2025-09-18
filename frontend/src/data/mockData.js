// Mock data for the nutrition website

export const macronutrients = [
  {
    id: 1,
    name: "Carboidratos Complexos",
    description: "Fonte de energia sustentável para o corpo",
    benefits: ["Energia duradoura", "Controle glicêmico", "Saciedade prolongada"],
    foods: ["Aveia", "Batata-doce", "Quinoa", "Arroz integral", "Feijão"],
    dailyAmount: "45-65% das calorias totais",
    icon: "🌾"
  },
  {
    id: 2,
    name: "Proteínas Magras",
    description: "Essenciais para reparação e crescimento muscular",
    benefits: ["Recuperação muscular", "Saciedade", "Manutenção da massa magra"],
    foods: ["Frango", "Ovos", "Peixe", "Leguminosas", "Tofu"],
    dailyAmount: "1.2-2.0g por kg de peso corporal",
    icon: "🥩"
  },
  {
    id: 3,
    name: "Gorduras Saudáveis",
    description: "Importantes para funções hormonais e absorção de vitaminas",
    benefits: ["Produção hormonal", "Absorção de vitaminas", "Saúde cardiovascular"],
    foods: ["Azeite", "Abacate", "Castanhas", "Salmão", "Sementes"],
    dailyAmount: "20-35% das calorias totais",
    icon: "🥑"
  }
];

export const recipes = [
  {
    id: 1,
    name: "Bowl de Aveia com Frutas",
    category: "Carboidratos",
    prepTime: "10 min",
    servings: 1,
    calories: 320,
    macros: { carbs: 58, protein: 12, fat: 8 },
    ingredients: [
      "1/2 xícara de aveia em flocos",
      "1 banana fatiada",
      "1 colher de sopa de mel",
      "1/4 xícara de mirtilos",
      "1 colher de sopa de castanhas picadas"
    ],
    instructions: [
      "Cozinhe a aveia com água ou leite vegetal por 5 minutos",
      "Adicione o mel e misture bem",
      "Sirva com banana, mirtilos e castanhas por cima"
    ],
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400"
  },
  {
    id: 2,
    name: "Batata-doce Assada com Especiarias",
    category: "Carboidratos",
    prepTime: "45 min",
    servings: 2,
    calories: 180,
    macros: { carbs: 41, protein: 4, fat: 0.5 },
    ingredients: [
      "2 batatas-doces médias",
      "1 colher de chá de canela",
      "1/2 colher de chá de páprica",
      "Sal a gosto",
      "Azeite para borrifar"
    ],
    instructions: [
      "Preaqueça o forno a 200°C",
      "Corte as batatas em fatias grossas",
      "Tempere com especiarias e borrife azeite",
      "Asse por 35-40 minutos até dourar"
    ],
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400"
  },
  {
    id: 3,
    name: "Frango Grelhado com Ervas",
    category: "Proteínas",
    prepTime: "25 min",
    servings: 2,
    calories: 165,
    macros: { carbs: 0, protein: 31, fat: 3.6 },
    ingredients: [
      "2 peitos de frango",
      "2 colheres de sopa de azeite",
      "1 colher de chá de orégano",
      "1 colher de chá de alecrim",
      "Sal e pimenta a gosto",
      "Suco de 1 limão"
    ],
    instructions: [
      "Marine o frango com azeite, ervas e limão por 15 minutos",
      "Aqueça uma grelha ou frigideira",
      "Grelhe o frango por 6-8 minutos de cada lado",
      "Deixe descansar por 5 minutos antes de servir"
    ],
    image: "https://images.unsplash.com/photo-1532636220-c6ee93887c13?w=400"
  },
  {
    id: 4,
    name: "Ovos Mexidos com Vegetais",
    category: "Proteínas",
    prepTime: "15 min",
    servings: 1,
    calories: 220,
    macros: { carbs: 6, protein: 18, fat: 14 },
    ingredients: [
      "3 ovos",
      "1/4 xícara de espinafre",
      "1/4 xícara de tomate cereja",
      "1 colher de sopa de azeite",
      "Sal e pimenta a gosto",
      "Cebolinha picada"
    ],
    instructions: [
      "Bata os ovos em uma tigela",
      "Aqueça o azeite na frigideira",
      "Refogue os vegetais por 2 minutos",
      "Adicione os ovos e mexa até cremoso",
      "Finalize com cebolinha"
    ],
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400"
  },
  {
    id: 5,
    name: "Salada de Abacate com Azeite",
    category: "Gorduras",
    prepTime: "10 min",
    servings: 2,
    calories: 280,
    macros: { carbs: 12, protein: 4, fat: 26 },
    ingredients: [
      "2 abacates maduros",
      "3 colheres de sopa de azeite extra virgem",
      "Suco de 1 limão",
      "1/4 xícara de rúcula",
      "Sal e pimenta a gosto",
      "Sementes de girassol"
    ],
    instructions: [
      "Corte os abacates em fatias",
      "Arrume sobre a rúcula",
      "Regue com azeite e limão",
      "Tempere com sal e pimenta",
      "Finalize com sementes"
    ],
    image: "https://images.unsplash.com/photo-1560459351-3e1b5c1be2de?w=400"
  },
  {
    id: 6,
    name: "Mix de Castanhas Temperadas",
    category: "Gorduras",
    prepTime: "20 min",
    servings: 4,
    calories: 190,
    macros: { carbs: 6, protein: 6, fat: 17 },
    ingredients: [
      "1/2 xícara de castanhas mistas",
      "1 colher de chá de azeite",
      "1/2 colher de chá de páprica",
      "1/4 colher de chá de cominho",
      "Sal a gosto"
    ],
    instructions: [
      "Preaqueça o forno a 180°C",
      "Misture as castanhas com azeite e temperos",
      "Espalhe em uma assadeira",
      "Asse por 12-15 minutos, mexendo ocasionalmente",
      "Deixe esfriar antes de servir"
    ],
    image: "https://images.unsplash.com/photo-1599599810694-57a2ca8276a8?w=400"
  }
];

export const workouts = [
  {
    id: 1,
    name: "Treino de Força - Parte Superior",
    duration: "45 min",
    level: "Intermediário",
    equipment: "Halteres",
    calories: 300,
    exercises: [
      { name: "Flexão de braço", sets: 3, reps: "12-15", rest: "60s" },
      { name: "Remada com halteres", sets: 3, reps: "10-12", rest: "60s" },
      { name: "Desenvolvimento", sets: 3, reps: "10-12", rest: "60s" },
      { name: "Rosca bíceps", sets: 3, reps: "12-15", rest: "45s" },
      { name: "Tríceps testa", sets: 3, reps: "12-15", rest: "45s" }
    ]
  },
  {
    id: 2,
    name: "Treino de Força - Parte Inferior",
    duration: "40 min",
    level: "Intermediário",
    equipment: "Peso corporal",
    calories: 280,
    exercises: [
      { name: "Agachamento", sets: 3, reps: "15-20", rest: "60s" },
      { name: "Afundo", sets: 3, reps: "12 cada perna", rest: "60s" },
      { name: "Ponte glútea", sets: 3, reps: "15-20", rest: "45s" },
      { name: "Panturrilha em pé", sets: 3, reps: "20-25", rest: "30s" },
      { name: "Prancha lateral", sets: 2, reps: "30s cada lado", rest: "45s" }
    ]
  },
  {
    id: 3,
    name: "HIIT Cardio",
    duration: "20 min",
    level: "Todos os níveis",
    equipment: "Nenhum",
    calories: 200,
    exercises: [
      { name: "Burpees", sets: 4, reps: "30s", rest: "30s" },
      { name: "Mountain climbers", sets: 4, reps: "30s", rest: "30s" },
      { name: "Jumping jacks", sets: 4, reps: "30s", rest: "30s" },
      { name: "High knees", sets: 4, reps: "30s", rest: "30s" },
      { name: "Descanso ativo", sets: 1, reps: "2 min", rest: "-" }
    ]
  }
];

export const hydrationTips = [
  {
    id: 1,
    title: "Quantidade Diária Recomendada",
    description: "Beba pelo menos 35ml de água por kg de peso corporal",
    icon: "💧"
  },
  {
    id: 2,
    title: "Hidratação Pré-Treino",
    description: "Consuma 500ml de água 2 horas antes do exercício",
    icon: "🏃‍♂️"
  },
  {
    id: 3,
    title: "Durante o Exercício",
    description: "Beba 150-250ml a cada 15-20 minutos de atividade",
    icon: "⏱️"
  },
  {
    id: 4,
    title: "Pós-Treino",
    description: "Reponha 150% do peso perdido em suor",
    icon: "🔄"
  },
  {
    id: 5,
    title: "Sinais de Desidratação",
    description: "Urina escura, fadiga, dor de cabeça e tontura",
    icon: "⚠️"
  },
  {
    id: 6,
    title: "Alternativas Saudáveis",
    description: "Água com limão, chás naturais e água de coco",
    icon: "🥥"
  }
];