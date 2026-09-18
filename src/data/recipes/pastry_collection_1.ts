import { Recipe } from '../../types';

export const PASTRY_COLLECTION_1: Recipe[] = [
  {
    id: "pastry-req-1-zolotistye-kabachkovye-ola",
    title: "Золотистые кабачковые оладьи на сковороде",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: золотистые кабачковые оладьи на сковороде. Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 20,
    cookTime: 20,
    difficulty: "Средне",
    servings: 2,
    tags: ["Выпечка", "Домашняя выпечка", "К чаю"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1200,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "8–10 оладий (около 320 г)",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Золотистые кабачковые оладьи на сковороде", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-2-nezhnye-i-vysokie-pyshnye",
    title: "Нежные и высокие пышные сырники на сковороде",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: нежные и высокие пышные сырники на сковороде. Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 20,
    cookTime: 20,
    difficulty: "Средне",
    servings: 2,
    tags: ["Выпечка", "Домашняя выпечка", "К чаю"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1200,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "4 высоких сырника (около 280 г)",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Нежные и высокие пышные сырники на сковороде", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-3-nezhneyshaya-i-vysokaya-tv",
    title: "Нежнейшая и высокая творожная запеканка",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: нежнейшая и высокая творожная запеканка. Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 20,
    cookTime: 20,
    difficulty: "Средне",
    servings: 4,
    tags: ["Выпечка", "Домашняя выпечка", "К чаю"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1200,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "Форма 18-20 см (около 600 г)",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Нежнейшая и высокая творожная запеканка", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-4-klassicheskie-indiyskie-le",
    title: "Классические индийские лепешки Роти",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: классические индийские лепешки роти. Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 20,
    cookTime: 20,
    difficulty: "Средне",
    servings: 4,
    tags: ["Выпечка", "Домашняя выпечка", "К чаю"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1200,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "4 лепешки диаметром 18 см (около 240 г)",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Классические индийские лепешки Роти", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-5-nezhnoe-rassypchatoe-tvoro",
    title: "Нежное рассыпчатое творожное печенье с сахарной корочкой",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: нежное рассыпчатое творожное печенье с сахарной корочкой. Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 20,
    cookTime: 20,
    difficulty: "Средне",
    servings: 4,
    tags: ["Выпечка", "Домашняя выпечка", "К чаю"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1200,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "16–18 печений (около 450 г)",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Нежное рассыпчатое творожное печенье с сахарной корочкой", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-6-khrustyashchie-zolotistye",
    title: "Хрустящие золотистые картофельные драники на сковороде",
    category: 'pastry',
    description: "Хрустящие белорусские драники с кружевной золотистой корочкой и нежной картофельной мякотью. Репчатый лук натирается вместе с картофелем, предотвращая потемнение крахмала.",
    prepTime: 15,
    cookTime: 12,
    difficulty: "Легко",
    servings: 2,
    tags: ["Выпечка", "Картофель", "Завтрак", "Хрустящее", "Сковорода"],
    ingredients: [
      {
        name: "Картофель с высоким содержанием крахмала",
        amount: 450,
        unit: "г",
        coldWastePercent: 15,
        heatLossPercent: 10,
        estimatedCostPerKg: 45,
        category: "Овощи"
      },
      {
        name: "Лук репчатый сочный",
        amount: 60,
        unit: "г",
        coldWastePercent: 10,
        heatLossPercent: 0,
        estimatedCostPerKg: 40,
        category: "Овощи"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Мука пшеничная в/с",
        amount: 15,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Мука"
      },
      {
        name: "Масло растительное для жарки",
        amount: 40,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 10,
        estimatedCostPerKg: 130,
        category: "Масла"
      },
      {
        name: "Соль мелкая и свежемолотый перец",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Картофель очистите и натрите на мелкой картофельной терке («колючке») поочередно с луком, чтобы масса не темнела.",
        timerSeconds: 300,
        tip: "Фитонциды лука предохраняют картофель от окисления."
      },
      {
        stepNumber: 2,
        instruction: "Отожмите картофельно-луковую кашицу через сито, сок слейте, а осевший на дно чистый крахмал верните обратно в массу.",
        timerSeconds: 180,
        tip: "Собственный крахмал связывает драники без лишней муки."
      },
      {
        stepNumber: 3,
        instruction: "Добавьте яйцо, ложку муки, соль и черный перец. Перемешайте до однородности.",
        timerSeconds: 60,
        tip: "Жарьте сразу после перемешивания."
      },
      {
        stepNumber: 4,
        instruction: "На хорошо разогретую сковороду с растительным маслом выкладывайте столовой ложкой тонкие лепешки.",
        timerSeconds: 60,
        tip: "Тонкие драники получаются максимально хрустящими."
      },
      {
        stepNumber: 5,
        instruction: "Обжаривайте на среднем огне по 3-4 минуты с каждой стороны до интенсивной золотистой корочки.",
        timerSeconds: 240,
        tip: "Выкладывайте на салфетку для снятия лишнего масла."
      },
    ],
    chefSecrets: ["Натирание лука первым защищает картофель от потемнения.", "Собственный отстоявшийся крахмал заменяет излишки муки."],
    techCard: {
      dishYield: "6–8 драников (около 300 г)",
      kzhbu: {"calories": 185, "proteins": 3.8, "fats": 9.5, "carbs": 21.0},
      semiFinishedProducts: ["Полуфабрикат теста для Хрустящие золотистые картофельные драники на сковороде", "Подготовленная начинка / декор"],
      technologicalProcess: "Измельчение картофеля на колючей терке, крахмальная регенерация, контактная жарка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-7-rassypchatye-oreshki-s-var",
    title: "Рассыпчатые орешки с вареной сгущенкой",
    category: 'pastry',
    description: "Легендарное рассыпчатое песочное печенье «Орешки» с богатой начинкой из вареной карамельной сгущенки и жареных грецких орехов.",
    prepTime: 30,
    cookTime: 20,
    difficulty: "Легко",
    servings: 4,
    tags: ["Выпечка", "Печенье", "Десерт", "Сгущенка", "Советская классика"],
    ingredients: [
      {
        name: "Сливочное масло 82.5% размягченное",
        amount: 100,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 920,
        category: "Масла"
      },
      {
        name: "Сахарная пудра",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 75,
        category: "Бакалея"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Мука пшеничная в/с",
        amount: 180,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Мука"
      },
      {
        name: "Крахмал кукурузный",
        amount: 20,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 150,
        category: "Бакалея"
      },
      {
        name: "Разрыхлитель теста",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Вареное сгущенное молоко (ГОСТ)",
        amount: 200,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 290,
        category: "Консервация"
      },
      {
        name: "Грецкие орехи обжаренные",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 950,
        category: "Орехи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Взбейте мягкое масло с сахарной пудрой и яйцом до кремообразного состояния.",
        timerSeconds: 180,
        tip: "Масло должно быть комнатной температуры."
      },
      {
        stepNumber: 2,
        instruction: "Всыпьте муку с крахмалом и разрыхлителем. Замесите мягкое пластичное тесто, уберите в холод на 20 минут.",
        timerSeconds: 1200,
        tip: "Крахмал придает скорлупкам особую нежную рассыпчатость."
      },
      {
        stepNumber: 3,
        instruction: "Скатайте шарики размером с фундук (по 6-7 г).",
        timerSeconds: 240,
        tip: "Одинаковый вес гарантирует идеальные половинки без затеков."
      },
      {
        stepNumber: 4,
        instruction: "Разогрейте форму-орешницу. Выпекайте скорлупки по 2-3 минуты до золотистого цвета.",
        timerSeconds: 180,
        tip: "Срезайте теплые излишки теста по краям ножом."
      },
      {
        stepNumber: 5,
        instruction: "Наполните половинки вареной сгущенкой, вложите в центр четвертинку грецкого ореха и соедините попарно.",
        timerSeconds: 300,
        tip: "Дайте орешкам настояться пару часов для мягкости."
      },
    ],
    chefSecrets: ["Добавление кукурузного крахмала делает песочные скорлупки тающими, а не твердыми.", "Обязательно используйте настоящую вареную сгущенку без растительных жиров."],
    techCard: {
      dishYield: "16–20 орешков (около 400 г)",
      kzhbu: {"calories": 420, "proteins": 6.8, "fats": 22.5, "carbs": 48.0},
      semiFinishedProducts: ["Полуфабрикат теста для Рассыпчатые орешки с вареной сгущенкой", "Подготовленная начинка / декор"],
      technologicalProcess: "Кремирование сливочной базы, формование в чугунной орешнице, сборка с карамельно-ореховой начинкой.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-8-vozdushnye-i-vysokie-panke",
    title: "Воздушные и высокие панкейки на молоке",
    category: 'pastry',
    description: "Высокие, пушистые американские панкейки на молоке с пористым бисквитным мякишем. Выпекаются на строго сухой сковороде для безупречно гладкой матовой поверхности.",
    prepTime: 10,
    cookTime: 12,
    difficulty: "Легко",
    servings: 2,
    tags: ["Выпечка", "Завтрак", "Панкейки", "Американская кухня", "Сковорода"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Мука"
      },
      {
        name: "Молоко 3.2% теплое",
        amount: 180,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Молочные продукты"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Масло сливочное растопленное",
        amount: 25,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 920,
        category: "Масла"
      },
      {
        name: "Сахар песок",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Разрыхлитель теста",
        amount: 1.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Ванильный сахар и щепотка соли",
        amount: 1,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 600,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Взбейте венчиком яйцо с сахаром, солью и ванилью до легкой пены. Влейте теплое молоко и растопленное масло.",
        timerSeconds: 120,
        tip: "Масло не должно быть горячим, чтобы яйцо не свернулось."
      },
      {
        stepNumber: 2,
        instruction: "Просейте муку с разрыхлителем. Быстро объедините венчиком. Не вымешивайте долго — мелкие комочки разойдутся сами.",
        timerSeconds: 90,
        tip: "Перемешанное тесто теряет пышность."
      },
      {
        stepNumber: 3,
        instruction: "Разогрейте сухую антипригарную сковороду на умеренно-слабом огне.",
        timerSeconds: 60,
        tip: "Никакого масла — именно сухая поверхность дает бархатистый ровный загар."
      },
      {
        stepNumber: 4,
        instruction: "Наливайте тесто по 2-3 столовые ложки на панкейк. Жарьте около 2 минут, пока поверхность не покроется лопающимися пузырьками.",
        timerSeconds: 120,
        tip: "Пузырьки — сигнал к переворачиванию."
      },
      {
        stepNumber: 5,
        instruction: "Аккуратно переверните и подрумяньте с обратной стороны еще 1 минуту.",
        timerSeconds: 60,
        tip: "Складывайте стопкой и поливайте медом или кленовым сиропом."
      },
    ],
    chefSecrets: ["Пеките исключительно на сухой сковороде на умеренном нагреве.", "Не вымешивайте тесто до абсолютной гладкости — короткий замес гарантирует воздушность."],
    techCard: {
      dishYield: "6 пышных панкейков (около 260 г)",
      kzhbu: {"calories": 210, "proteins": 6.2, "fats": 7.5, "carbs": 30.0},
      semiFinishedProducts: ["Полуфабрикат теста для Воздушные и высокие панкейки на молоке", "Подготовленная начинка / декор"],
      technologicalProcess: "Эмульгирование жидкой фазы, деликатное соединение с разрыхлителем и бесконтактная сухая выпечка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-9-tsvetaevskiy-yablochnyy-pi",
    title: "Цветаевский яблочный пирог",
    category: 'pastry',
    description: "Знаменитый Цветаевский яблочный пирог на нежном песочно-сметанном тесте с тончайшими слайсами кисло-сладких яблок в шелковистой ванильно-сметанной заливке.",
    prepTime: 25,
    cookTime: 45,
    difficulty: "Средне",
    servings: 6,
    tags: ["Выпечка", "Пироги", "Яблоки", "Сметанный крем", "Десерт"],
    ingredients: [
      {
        name: "Яблоки кислые (Антоновка или Симиренко)",
        amount: 450,
        unit: "г",
        coldWastePercent: 15,
        heatLossPercent: 8,
        estimatedCostPerKg: 130,
        category: "Фрукты"
      },
      {
        name: "Мука пшеничная высший сорт (тесто)",
        amount: 160,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% холодное",
        amount: 100,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 920,
        category: "Масла"
      },
      {
        name: "Сметана 20% в тесто",
        amount: 80,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 220,
        category: "Молочные продукты"
      },
      {
        name: "Сметана 20% в заливку",
        amount: 200,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 220,
        category: "Молочные продукты"
      },
      {
        name: "Яйцо куриное С1 в заливку",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Сахар песок в заливку",
        amount: 110,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Мука пшеничная в заливку",
        amount: 25,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Мука"
      },
      {
        name: "Корица и ванилин",
        amount: 1,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 600,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Холодное масло порубите с мукой в крошку, добавьте сметану и быстро соберите тесто в мягкий ком. Уберите в холод на 25 минут.",
        timerSeconds: 1500,
        tip: "Сметанное песочное тесто остается мягким и рассыпчатым."
      },
      {
        stepNumber: 2,
        instruction: "Яблоки очистите от сердцевины и нарежьте тонкими слайсами с помощью терки-мандолины или ножа.",
        timerSeconds: 300,
        tip: "Тонкие дольки равномерно пропитываются сметанным кремом."
      },
      {
        stepNumber: 3,
        instruction: "Для заливки венчиком взбейте сметану с яйцом, сахаром, ложкой муки и ванилью до растворения сахара.",
        timerSeconds: 180,
        tip: "Мука стабилизирует сметанный крем при запекании."
      },
      {
        stepNumber: 4,
        instruction: "Тесто раскатайте и выложите в форму 20-22 см, сформировав бортики высотой 3-4 см.",
        timerSeconds: 180,
        tip: "Проколите дно вилкой в нескольких местах."
      },
      {
        stepNumber: 5,
        instruction: "Выложите яблоки в корзинку из теста и равномерно залейте сметанным соусом.",
        timerSeconds: 120,
        tip: "Постучите формой о стол, чтобы крем заполнил все пустоты."
      },
      {
        stepNumber: 6,
        instruction: "Выпекайте при 180°C 45 минут. Полностью остудите перед нарезкой для стабилизации крема.",
        timerSeconds: 2700,
        tip: "Теплый крем может быть жидковатым, но после охлаждения режется идеально."
      },
    ],
    chefSecrets: ["Используйте только плотные кислые яблоки — их контраст со сладким кремом создает эталонный вкус.", "Полное остывание обязательно: сметанная заливка стабилизируется именно при 18–20°C."],
    techCard: {
      dishYield: "Форма 20–22 см (около 850 г)",
      kzhbu: {"calories": 265, "proteins": 4.2, "fats": 14.8, "carbs": 28.5},
      semiFinishedProducts: ["Полуфабрикат теста для Цветаевский яблочный пирог", "Подготовленная начинка / декор"],
      technologicalProcess: "Формование открытой песочной тарталетки, веерная укладка яблок, заливка термостабильным сметанным кремом.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-10-nezhnye-i-khrustyashchie-t",
    title: "Нежные и хрустящие творожные венские вафли",
    category: 'pastry',
    description: "Хрустящие снаружи и нежные внутри творожные вафли для электровафельницы. Золотистые рельефные квадратики с аппетитным сливочно-ванильным ароматом.",
    prepTime: 15,
    cookTime: 15,
    difficulty: "Легко",
    servings: 2,
    tags: ["Выпечка", "Вафли", "Завтрак", "Хрустящее", "Десерт"],
    ingredients: [
      {
        name: "Творог 5-9% мягкий",
        amount: 200,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 380,
        category: "Молочные продукты"
      },
      {
        name: "Яйца куриные С1",
        amount: 2,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Масло сливочное 82.5% растопленное",
        amount: 50,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 920,
        category: "Масла"
      },
      {
        name: "Мука пшеничная в/с",
        amount: 100,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Мука"
      },
      {
        name: "Сахар песок",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Разрыхлитель теста",
        amount: 1,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Ванильный сахар и щепотка соли",
        amount: 1,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 600,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Творог разотрите с сахаром, яйцами, растопленным сливочным маслом и ванилью погружным блендером до гладкости.",
        timerSeconds: 180,
        tip: "Однородная текстура без крупинок творога предотвратит пригорание."
      },
      {
        stepNumber: 2,
        instruction: "Добавьте просеянную муку с разрыхлителем. Перемешайте до консистенции густой сметаны.",
        timerSeconds: 90,
        tip: "Дайте тесту постоять 5 минут перед выпеканием."
      },
      {
        stepNumber: 3,
        instruction: "Разогрейте электровафельницу. Смажьте панели каплей масла перед первой партией.",
        timerSeconds: 120,
        tip: "Хороший разогрев вафельницы — залог хрустящей корочки."
      },
      {
        stepNumber: 4,
        instruction: "Выкладывайте по 1.5-2 столовые ложки теста на каждую ячейку. Закройте крышку и выпекайте 4-5 минут до насыщенного румянца.",
        timerSeconds: 270,
        tip: "Не открывайте вафельницу в первые 2 минуты."
      },
      {
        stepNumber: 5,
        instruction: "Остужайте вафли на решетке в один слой, чтобы они не отсырели снизу от пара.",
        timerSeconds: 120,
        tip: "Решетка сохраняет идеальную хрусткость."
      },
    ],
    chefSecrets: ["Остывание на решетке критически важно для сохранения хрустящей корочки.", "Растопленное сливочное масло гарантирует сливочный вкус и легкое отставание от панелей."],
    techCard: {
      dishYield: "4 венские вафли (около 260 г)",
      kzhbu: {"calories": 275, "proteins": 8.2, "fats": 14.5, "carbs": 28.0},
      semiFinishedProducts: ["Полуфабрикат теста для Нежные и хрустящие творожные венские вафли", "Подготовленная начинка / декор"],
      technologicalProcess: "Гомогенизация творожной смеси, замес теста средней текучести, двусторонняя контактная термообработка в рельефных матрицах.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-11-bystryy-belkovyy-tvorozhny",
    title: "Быстрый белковый творожный омлет-скрэмбл за 5 минут",
    category: 'pastry',
    description: "Ультрабыстрый протеиновый скрэмбл с зерненым или мягким творогом, свежей зеленью и сливочным маслом за 5 минут. Пышная шелковистая текстура с повышенным содержанием белка.",
    prepTime: 5,
    cookTime: 5,
    difficulty: "Легко",
    servings: 1,
    tags: ["Выпечка", "Завтрак", "Омлет", "Белок", "Фитнес", "Творог"],
    ingredients: [
      {
        name: "Яйца куриные С1",
        amount: 2,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 5,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Творог 5% мягкий или зерненый",
        amount: 100,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 380,
        category: "Молочные продукты"
      },
      {
        name: "Молоко 3.2%",
        amount: 30,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Молочные продукты"
      },
      {
        name: "Масло сливочное 82.5%",
        amount: 10,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 920,
        category: "Масла"
      },
      {
        name: "Зеленый лук и укроп свежие",
        amount: 10,
        unit: "г",
        coldWastePercent: 10,
        heatLossPercent: 0,
        estimatedCostPerKg: 600,
        category: "Зелень"
      },
      {
        name: "Соль морская и свежемолотый черный перец",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 40,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "В миске взбейте вилкой яйца с молоком, солью и перцем до объединения.",
        timerSeconds: 60,
        tip: "Не взбивайте в пену — нужна бархатная текстура."
      },
      {
        stepNumber: 2,
        instruction: "Добавьте творог и слегка перемешайте лопаткой, сохраняя мелкие творожные островки.",
        timerSeconds: 45,
        tip: "Творог при нагреве расплавится в сливочные кармашки."
      },
      {
        stepNumber: 3,
        instruction: "Растопите сливочное масло на антипригарной сковороде на среднем огне. Влейте смесь.",
        timerSeconds: 45,
        tip: "Не перегревайте сковороду."
      },
      {
        stepNumber: 4,
        instruction: "Силиконовой лопаткой сдвигайте схватывающуюся массу от краев к центру волнообразными движениями в течение 2-3 минут.",
        timerSeconds: 150,
        tip: "Снимайте скрэмбл чуть влажным — он дойдет от собственного тепла."
      },
      {
        stepNumber: 5,
        instruction: "Посыпьте мелко рубленым луком и зеленью, подавайте немедленно с подсушенным тостом.",
        timerSeconds: 30,
        tip: "Идеально горячим на теплой тарелке."
      },
    ],
    chefSecrets: ["Снимайте скрэмбл с огня за 30 секунд до полной готовности — на остаточном тепле он станет кремовым, а не сухим.", "Сливочное масло придает блюду классический французский глянец."],
    techCard: {
      dishYield: "1 порция (около 220 г)",
      kzhbu: {"calories": 165, "proteins": 18.2, "fats": 8.8, "carbs": 3.2},
      semiFinishedProducts: ["Полуфабрикат теста для Быстрый белковый творожный омлет-скрэмбл за 5 минут", "Подготовленная начинка / декор"],
      technologicalProcess: "Коагуляция яично-молочной эмульсии при постоянном бережном помешивании с сохранением влажности.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-12-tonkie-azhurnye-bliny-s-dy",
    title: "Тонкие ажурные блины с дырочками на кипятке",
    category: 'pastry',
    description: "Тонкие, кружевные заварные блины на кефире и кипятке с сотнями мелких дырочек. Мягкие, эластичные, не рвутся при сворачивании и идеально подходят для любых начинок.",
    prepTime: 15,
    cookTime: 20,
    difficulty: "Легко",
    servings: 4,
    tags: ["Выпечка", "Блины", "Завтрак", "Масленица", "Русская кухня", "Сковорода"],
    ingredients: [
      {
        name: "Кефир 2.5–3.2% комнатный",
        amount: 300,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 80,
        category: "Молочные продукты"
      },
      {
        name: "Крутой кипяток (100°C)",
        amount: 200,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 10,
        category: "Жидкости"
      },
      {
        name: "Мука пшеничная высший сорт",
        amount: 180,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Мука"
      },
      {
        name: "Яйца куриные С1",
        amount: 2,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Сахар песок",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Сода пищевая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 80,
        category: "Бакалея"
      },
      {
        name: "Масло растительное в тесто",
        amount: 30,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 130,
        category: "Масла"
      },
      {
        name: "Соль щепотка",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Взбейте яйца с солью и сахаром, влейте кефир комнатной температуры и перемешайте венчиком.",
        timerSeconds: 90,
        tip: "Кефир не должен быть из холодильника."
      },
      {
        stepNumber: 2,
        instruction: "Просейте муку прямо в кефирную смесь и вымесите густое гладкое тесто без комочков.",
        timerSeconds: 120,
        tip: "Замешивание в густом тесте гарантирует отсутствие комочков."
      },
      {
        stepNumber: 3,
        instruction: "В крутой кипяток всыпьте соду, быстро размешайте и тонкой струйкой влейте в тесто при постоянном взбивании венчиком (заваривание теста).",
        timerSeconds: 90,
        tip: "Кипяток заваривает клейковину и гасит соду — появятся пузырьки!"
      },
      {
        stepNumber: 4,
        instruction: "Влейте растительное масло, перемешайте и оставьте тесто отдохнуть на 10 минут.",
        timerSeconds: 600,
        tip: "Отдых расслабляет клейковину, делая блинчики эластичными."
      },
      {
        stepNumber: 5,
        instruction: "Сильно раскалите сковороду. Наливайте половник теста тонким слоем. Жарьте по 40-50 секунд до румяности и переверните на 20 секунд.",
        timerSeconds: 70,
        tip: "Дырочки раскрываются именно на сильно раскаленной сковороде."
      },
      {
        stepNumber: 6,
        instruction: "Горячие блины складывайте стопкой, смазывая растопленным сливочным маслом.",
        timerSeconds: 30,
        tip: "Края станут мягкими под крышкой или тарелкой."
      },
    ],
    chefSecrets: ["Сода в кипятке заваривает крахмал и моментально насыщает тесто миллионом микропузырьков.", "Сковорода должна быть раскалена до легкого дымка перед первым блином."],
    techCard: {
      dishYield: "12–15 блинов (около 450 г)",
      kzhbu: {"calories": 175, "proteins": 5.2, "fats": 6.0, "carbs": 25.0},
      semiFinishedProducts: ["Полуфабрикат теста для Тонкие ажурные блины с дырочками на кипятке", "Подготовленная начинка / декор"],
      technologicalProcess: "Заваривание кефирно-мучной взвеси щелочным кипятком, расслабление белковой матрицы, быстрая конвективно-контактная выпечка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-13-domashnyaya-pitstsa-pepper",
    title: "Домашняя пицца Пепперони с хрустящей корочкой в духовке (на 1 порцию / пицца диаметром 22–24 см)",
    category: 'pastry',
    description: "Классическая порционная пицца Пепперони на хрустящем тонком тесте с сочным томатным соусом, тягучей моцареллой и пикантными ломтиками салями.",
    prepTime: 25,
    cookTime: 12,
    difficulty: "Легко",
    servings: 1,
    tags: ["Выпечка", "Пицца", "Итальянская кухня", "Сыр", "Пепперони", "Духовка"],
    ingredients: [
      {
        name: "Мука пшеничная хлебопекарная (тип 00 или высший сорт)",
        amount: 130,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 80,
        category: "Мука"
      },
      {
        name: "Вода теплая (36-38°C)",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 10,
        category: "Жидкости"
      },
      {
        name: "Дрожжи сухие инстантные",
        amount: 2,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 800,
        category: "Бакалея"
      },
      {
        name: "Масло оливковое Extra Virgin",
        amount: 10,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 950,
        category: "Масла"
      },
      {
        name: "Соус томатный суго для пиццы с базиликом",
        amount: 50,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 320,
        category: "Соусы"
      },
      {
        name: "Сыр Моцарелла для пиццы (полутвердая низковлажная)",
        amount: 90,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 750,
        category: "Сыры"
      },
      {
        name: "Колбаса салями Пепперони или чоризо (слайсы)",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 8,
        estimatedCostPerKg: 890,
        category: "Гастрономия"
      },
      {
        name: "Соль мелкая и сухой орегано",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 60,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "В теплой воде растворите дрожжи и щепотку соли. Добавьте муку и оливковое масло, замесите гладкое эластичное тесто. Оставьте в тепле на 30-40 минут.",
        timerSeconds: 2100,
        tip: "Тесто должно стать шелковистым и увеличиться в объеме."
      },
      {
        stepNumber: 2,
        instruction: "Разогрейте духовку до максимума (240-250°C) вместе с противнем или пекарским камнем.",
        timerSeconds: 1200,
        tip: "Раскаленный противень мгновенно запечет хрустящую нижнюю корочку."
      },
      {
        stepNumber: 3,
        instruction: "Руками растяните шар теста на пергаменте в круг диаметром 22-24 см с небольшими пышными бортиками.",
        timerSeconds: 180,
        tip: "Не используйте скалку, чтобы не выгнать пузыри воздуха из бортиков."
      },
      {
        stepNumber: 4,
        instruction: "Смажьте основу томатным соусом, отступая 1 см от края. Посыпьте тертой моцареллой и орегано, выложите слайсы пепперони.",
        timerSeconds: 120,
        tip: "Не перегружайте пиццу соусом, чтобы центр не размяк."
      },
      {
        stepNumber: 5,
        instruction: "Перенесите пиццу на раскаленный противень и выпекайте 10-12 минут до золотистых бортиков и пузырящегося сыра.",
        timerSeconds: 660,
        tip: "Корочка должна аппетитно подрумяниться."
      },
    ],
    chefSecrets: ["Высокая температура выпечки (240–250°C) — залог ресторанной хрустящей текстуры коржа.", "Растягивание теста руками сохраняет пузырьки углекислого газа в бортиках."],
    techCard: {
      dishYield: "пицца диаметром 22–24 см",
      kzhbu: {"calories": 265, "proteins": 11.5, "fats": 10.8, "carbs": 30.2},
      semiFinishedProducts: ["Полуфабрикат теста для Домашняя пицца Пепперони с хрустящей корочкой в духовке (на 1 порцию / пицца диаметром 22–24 см)", "Подготовленная начинка / декор"],
      technologicalProcess: "Дрожжевая ферментация теста, ручное растяжение основы, нанесение топпингов и высокотемпературный конвективный удар.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-14-sochnye-domashnie-cheburek",
    title: "Сочные домашние чебуреки с мясом на сковороде (на 1 порцию / 2 крупных чебурека)",
    category: 'pastry',
    description: "Сочные домашние чебуреки с тончайшим хрустящим пузырчатым тестом и истекающей ароматным бульоном мясной начинкой. Водка и крутой кипяток в тесте обеспечивают миллионы аппетитных хрустящих пузырьков.",
    prepTime: 30,
    cookTime: 15,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Чебуреки", "Мясо", "Восточная кухня", "Хрустящее", "Фритюр"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт",
        amount: 140,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Мука"
      },
      {
        name: "Крутой кипяток (100°C)",
        amount: 70,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 10,
        category: "Жидкости"
      },
      {
        name: "Водка (для хрустящих пузырьков)",
        amount: 1,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 400,
        category: "Бакалея"
      },
      {
        name: "Масло растительное в тесто",
        amount: 15,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 130,
        category: "Масла"
      },
      {
        name: "Фарш мясной (говядина + свинина или баранина)",
        amount: 120,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 12,
        estimatedCostPerKg: 550,
        category: "Мясо"
      },
      {
        name: "Лук репчатый сочный мелким кубиком",
        amount: 60,
        unit: "г",
        coldWastePercent: 10,
        heatLossPercent: 0,
        estimatedCostPerKg: 40,
        category: "Овощи"
      },
      {
        name: "Вода ледяная или мясной бульон в фарш",
        amount: 30,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 10,
        category: "Жидкости"
      },
      {
        name: "Масло растительное для фритюра",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 15,
        estimatedCostPerKg: 130,
        category: "Масла"
      },
      {
        name: "Соль мелкая и свежемолотый черный перец",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 40,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "В кипятке растворите соль и растительное масло. Влейте в муку и быстро замесите ложкой, добавьте водку и вымесите тугое тесто руками. Оставьте в пленке на 30 минут.",
        timerSeconds: 1800,
        tip: "Заварное тесто с каплей водки дает умопомрачительную пузырчатость."
      },
      {
        stepNumber: 2,
        instruction: "Для начинки лук порубите очень мелко, помните с солью до выделения сока. Соедините с фаршем, перцем и ледяной водой.",
        timerSeconds: 240,
        tip: "Фарш должен быть полужидким — именно вода превращается при жарке в кипящий сок-бульон!"
      },
      {
        stepNumber: 3,
        instruction: "Разделите тесто на 2 шарика. Раскатайте каждый в тончайший круг толщиной 1 мм.",
        timerSeconds: 180,
        tip: "Чем тоньше тесто, тем хрустящее чебурек."
      },
      {
        stepNumber: 4,
        instruction: "Выложите на одну половину по 1.5-2 ст. л. фарша, накройте второй половиной, выпустите воздух и тщательно защипните вилкой или фигурным колесиком.",
        timerSeconds: 120,
        tip: "Выпускайте воздух, чтобы чебурек не лопнул в масле."
      },
      {
        stepNumber: 5,
        instruction: "Разогрейте масло на сковороде слоем 1.5 см. Жарьте чебуреки по 2-3 минуты с каждой стороны, поливая горячим маслом сверху.",
        timerSeconds: 300,
        tip: "Поливание ложкой сверху мгновенно вздувает тесто пузырями."
      },
    ],
    chefSecrets: ["Ледяная вода в фарше дает тот самый фирменный брызжущий горячий бульон внутри.", "Ложка водки в тесте испаряется мгновенно во фритюре, создавая ультрахрустящую пузырчатую корку."],
    techCard: {
      dishYield: "2 крупных чебурека",
      kzhbu: {"calories": 295, "proteins": 12.8, "fats": 16.5, "carbs": 24.5},
      semiFinishedProducts: ["Полуфабрикат теста для Сочные домашние чебуреки с мясом на сковороде (на 1 порцию / 2 крупных чебурека)", "Подготовленная начинка / декор"],
      technologicalProcess: "Заваривание тугой мучной основы, гидратация мясного фарша ледяной водой, формование полумесяцев с герметизацией и фритирование.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-15-rumyanye-pirozhki-s-kapust",
    title: "Румяные пирожки с капустой и мясом из сдобного дрожжевого теста в духовке (на 1 порцию / 3 крупных пирожка)",
    category: 'pastry',
    description: "Аппетитные домашние румяные пирожки из сдобного пухового дрожжевого теста на молоке с сочной сбалансированной начинкой. Глянцевая корочка и тающий мякиш.",
    prepTime: 35,
    cookTime: 22,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Пирожки", "Дрожжевое тесто", "Сытно", "Духовка"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт",
        amount: 140,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 65,
        category: "Мука"
      },
      {
        name: "Молоко 3.2% теплое",
        amount: 65,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Молочные продукты"
      },
      {
        name: "Дрожжи сухие быстродействующие",
        amount: 3,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 800,
        category: "Бакалея"
      },
      {
        name: "Масло сливочное 82.5% мягкое",
        amount: 25,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 920,
        category: "Масла"
      },
      {
        name: "Начинка сочная (мясо с капустой/яблоко/щавель)",
        amount: 150,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 400,
        category: "Гастрономия"
      },
      {
        name: "Сахар песок",
        amount: 15,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Яичный желток с каплей молока для смазывания",
        amount: 1,
        unit: "шт",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Соль мелкая щепотка",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "В теплом молоке разведите дрожжи и сахар. Добавьте муку, соль и мягкое сливочное масло, замесите нежное шелковистое тесто. Оставьте на 40 минут в тепле.",
        timerSeconds: 2400,
        tip: "Сливочное масло придает тесту несравненную пушистость."
      },
      {
        stepNumber: 2,
        instruction: "Обомните подошедшее тесто и разделите на порционные шарики. Накройте пленкой на 10 минут.",
        timerSeconds: 600,
        tip: "Промежуточная расстойка облегчает лепку."
      },
      {
        stepNumber: 3,
        instruction: "Раскатайте шарики в лепешки, выложите щедрую порцию начинки и плотно защипните шов веревочкой.",
        timerSeconds: 240,
        tip: "Шов должен быть герметичным."
      },
      {
        stepNumber: 4,
        instruction: "Выложите пирожки швом вниз на противень с пергаментом. Оставьте на 15 минут для расстойки.",
        timerSeconds: 900,
        tip: "Расстойка обязательна для пышности пирожков."
      },
      {
        stepNumber: 5,
        instruction: "Смажьте желтком с каплей молока. Выпекайте при 180°C 20-22 минуты до уверенного румянца.",
        timerSeconds: 1300,
        tip: "Смазывание дает зеркальный лаковый глянец."
      },
    ],
    chefSecrets: ["Расстойка перед духовкой в течение 15 минут делает тесто невесомым, как пух.", "Смазывание смесью желтка и чайной ложки молока обеспечивает глубокий золотистый колер."],
    techCard: {
      dishYield: "3 крупных пирожка",
      kzhbu: {"calories": 240, "proteins": 9.2, "fats": 8.8, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Румяные пирожки с капустой и мясом из сдобного дрожжевого теста в духовке (на 1 порцию / 3 крупных пирожка)", "Подготовленная начинка / декор"],
      technologicalProcess: "Сдобное дрожжевое брожение, разделка на шаровые заготовки, формование пирожков, расстойка и выпекание.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-16-khrustyashchie-klassichesk",
    title: "Хрустящие классические вафли в электровафельнице (на 1 порцию / около 6–8 тонких хрустящих вафель)",
    category: 'pastry',
    description: "Хрустящие снаружи и нежные внутри творожные вафли для электровафельницы. Золотистые рельефные квадратики с аппетитным сливочно-ванильным ароматом.",
    prepTime: 15,
    cookTime: 15,
    difficulty: "Легко",
    servings: 1,
    tags: ["Выпечка", "Вафли", "Завтрак", "Хрустящее", "Десерт"],
    ingredients: [
      {
        name: "Творог 5-9% мягкий",
        amount: 200,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 380,
        category: "Молочные продукты"
      },
      {
        name: "Яйца куриные С1",
        amount: 2,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Масло сливочное 82.5% растопленное",
        amount: 50,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 920,
        category: "Масла"
      },
      {
        name: "Мука пшеничная в/с",
        amount: 100,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Мука"
      },
      {
        name: "Сахар песок",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Разрыхлитель теста",
        amount: 1,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Ванильный сахар и щепотка соли",
        amount: 1,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 600,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Творог разотрите с сахаром, яйцами, растопленным сливочным маслом и ванилью погружным блендером до гладкости.",
        timerSeconds: 180,
        tip: "Однородная текстура без крупинок творога предотвратит пригорание."
      },
      {
        stepNumber: 2,
        instruction: "Добавьте просеянную муку с разрыхлителем. Перемешайте до консистенции густой сметаны.",
        timerSeconds: 90,
        tip: "Дайте тесту постоять 5 минут перед выпеканием."
      },
      {
        stepNumber: 3,
        instruction: "Разогрейте электровафельницу. Смажьте панели каплей масла перед первой партией.",
        timerSeconds: 120,
        tip: "Хороший разогрев вафельницы — залог хрустящей корочки."
      },
      {
        stepNumber: 4,
        instruction: "Выкладывайте по 1.5-2 столовые ложки теста на каждую ячейку. Закройте крышку и выпекайте 4-5 минут до насыщенного румянца.",
        timerSeconds: 270,
        tip: "Не открывайте вафельницу в первые 2 минуты."
      },
      {
        stepNumber: 5,
        instruction: "Остужайте вафли на решетке в один слой, чтобы они не отсырели снизу от пара.",
        timerSeconds: 120,
        tip: "Решетка сохраняет идеальную хрусткость."
      },
    ],
    chefSecrets: ["Остывание на решетке критически важно для сохранения хрустящей корочки.", "Растопленное сливочное масло гарантирует сливочный вкус и легкое отставание от панелей."],
    techCard: {
      dishYield: "около 6–8 тонких хрустящих вафель",
      kzhbu: {"calories": 275, "proteins": 8.2, "fats": 14.5, "carbs": 28.0},
      semiFinishedProducts: ["Полуфабрикат теста для Хрустящие классические вафли в электровафельнице (на 1 порцию / около 6–8 тонких хрустящих вафель)", "Подготовленная начинка / декор"],
      technologicalProcess: "Гомогенизация творожной смеси, замес теста средней текучести, двусторонняя контактная термообработка в рельефных матрицах.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-17-yablochnyy-shtrudel-iz-khr",
    title: "Яблочный штрудель из хрустящего слоеного теста (на 1 порцию / 1 крупный порционный рулет)",
    category: 'pastry',
    description: "Хрустящий порционный яблочный штрудель из тонкого слоеного теста с карамелизованными яблоками, корицей, изюмом, грецкими орехами и панировочными сухарями, впитавшими ароматный яблочный сок.",
    prepTime: 20,
    cookTime: 25,
    difficulty: "Легко",
    servings: 1,
    tags: ["Выпечка", "Штрудель", "Яблоки", "Корица", "Австрийская кухня", "Слоеное тесто"],
    ingredients: [
      {
        name: "Тесто слоеное бездрожжевое",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 8,
        estimatedCostPerKg: 180,
        category: "Бакалея"
      },
      {
        name: "Яблоки кисло-сладкие сочные",
        amount: 250,
        unit: "г",
        coldWastePercent: 15,
        heatLossPercent: 10,
        estimatedCostPerKg: 130,
        category: "Фрукты"
      },
      {
        name: "Масло сливочное 82.5% растопленное",
        amount: 25,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 920,
        category: "Масла"
      },
      {
        name: "Сухари панировочные светлые",
        amount: 20,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 110,
        category: "Бакалея"
      },
      {
        name: "Сахар тростниковый или белый",
        amount: 35,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Бакалея"
      },
      {
        name: "Грецкие орехи рубленые",
        amount: 25,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 950,
        category: "Орехи"
      },
      {
        name: "Изюм светлый запаренный",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 320,
        category: "Сухофрукты"
      },
      {
        name: "Корица молотая и сахарная пудра",
        amount: 1,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Яблоки очистите и нарежьте тонкими пластинками. Смешайте с сахаром, корицей, изюмом и дроблеными орехами.",
        timerSeconds: 240,
        tip: "Яблоки пустят немного сока."
      },
      {
        stepNumber: 2,
        instruction: "Сухари слегка обжарьте на ложке сливочного масла до золотистого аромата.",
        timerSeconds: 120,
        tip: "Сухари впитают влагу яблок, предотвратив промокание теста."
      },
      {
        stepNumber: 3,
        instruction: "Слоеное тесто тонко раскатайте на пергаменте в прямоугольник толщиной 1.5-2 мм. Смажьте сливочным маслом.",
        timerSeconds: 180,
        tip: "Раскатывайте только в одну сторону."
      },
      {
        stepNumber: 4,
        instruction: "Посыпьте тесто обжаренными сухарями, выложите яблочную начинку, отступая от краев 2 см.",
        timerSeconds: 90,
        tip: "Сухари должны быть под яблоками."
      },
      {
        stepNumber: 5,
        instruction: "Сверните тесто в плотный рулет, защипните края. Смажьте верх растопленным маслом и сделайте косые надрезы.",
        timerSeconds: 120,
        tip: "Надрезы выпускают пар, сохраняя рулет хрустящим."
      },
      {
        stepNumber: 6,
        instruction: "Выпекайте при 190°C 25 минут до золотистой слоистой корочки. Перед подачей посыпьте сахарной пудрой.",
        timerSeconds: 1500,
        tip: "Подавайте теплым с шариком пломбира."
      },
    ],
    chefSecrets: ["Обжаренные в сливочном масле сухари на тесте — главный секрет сухой и хрустящей нижней корочки штруделя.", "Косые надрезы на поверхности выпускают пар и не дают тесту разорваться."],
    techCard: {
      dishYield: "1 крупный порционный рулет",
      kzhbu: {"calories": 235, "proteins": 4.1, "fats": 10.2, "carbs": 33.5},
      semiFinishedProducts: ["Полуфабрикат теста для Яблочный штрудель из хрустящего слоеного теста (на 1 порцию / 1 крупный порционный рулет)", "Подготовленная начинка / декор"],
      technologicalProcess: "Формирование слоеного рулета с сочной яблочно-ореховой начинкой, конвективное запекание.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-18-khrustyashchiy-khvorost-na",
    title: "Хрустящий хворост на водке (на 1 порцию / глубокая тарелка хрустящего лакомства)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: хрустящий хворост на водке (на 1 порцию / глубокая тарелка хрустящего лакомства). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 20,
    cookTime: 20,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Домашняя выпечка", "К чаю"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1200,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "глубокая тарелка хрустящего лакомства",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Хрустящий хворост на водке (на 1 порцию / глубокая тарелка хрустящего лакомства)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-19-klassicheskiy-frantsuzskiy",
    title: "Классический французский киш с курицей и грибами (на 1 порцию / форма диаметром 10–12 см)",
    category: 'pastry',
    description: "Классический открытый французский киш в мини-форме: рассыпчатая рубленая песочная основа сабле, сочное куриное филе с обжаренными грибами и шелковистая сырно-сливочная заливка рояль с мускатным орехом.",
    prepTime: 25,
    cookTime: 30,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Киш", "Французская кухня", "Пироги", "Сыр", "Курица"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт",
        amount: 90,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% ледяное",
        amount: 45,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 920,
        category: "Масла"
      },
      {
        name: "Вода ледяная",
        amount: 25,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 10,
        category: "Жидкости"
      },
      {
        name: "Филе куриное обжаренное со специями",
        amount: 80,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 15,
        estimatedCostPerKg: 390,
        category: "Мясо"
      },
      {
        name: "Шампиньоны свежие обжаренные",
        amount: 60,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 20,
        estimatedCostPerKg: 240,
        category: "Грибы"
      },
      {
        name: "Сливки 20% жирности",
        amount: 70,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 260,
        category: "Молочные продукты"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Сыр Грюйер или Гауда тертый",
        amount: 45,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 820,
        category: "Сыры"
      },
      {
        name: "Мускатный орех, тимьян и соль",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 650,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Холодное масло перетрите с мукой в крошку, влейте ледяную воду и быстро соберите тесто в диск. Охладите 20 минут.",
        timerSeconds: 1200,
        tip: "Не вымешивайте долго, чтобы основа была рассыпчатой."
      },
      {
        stepNumber: 2,
        instruction: "Раскатайте тесто и уложите в форму 10-12 см с бортиками. Наколите вилкой и подпеките «вслепую» с грузом 10 минут при 190°C.",
        timerSeconds: 600,
        tip: "Слепая выпечка гарантирует пропеченное сухое дно."
      },
      {
        stepNumber: 3,
        instruction: "Куриное филе нарежьте кубиком и обжарьте с грибами и тимьяном до испарения влаги.",
        timerSeconds: 300,
        tip: "Начинка не должна содержать сырой влаги."
      },
      {
        stepNumber: 4,
        instruction: "Взбейте яйцо со сливками, солью, перцем, щепоткой мускатного ореха и половиной сыра.",
        timerSeconds: 90,
        tip: "Классический французский заливной соус рояль."
      },
      {
        stepNumber: 5,
        instruction: "В подпеченную корзинку выложите курицу с грибами, залейте сливочной смесью и посыпьте оставшимся сыром.",
        timerSeconds: 90,
        tip: "Сыр сверху даст красивую золотистую гратиновую шапочку."
      },
      {
        stepNumber: 6,
        instruction: "Выпекайте при 180°C 20 минут до застывания заливки и золотистой сырной корочки.",
        timerSeconds: 1200,
        tip: "Дайте постоять 7-10 минут перед нарезкой."
      },
    ],
    chefSecrets: ["Предварительная слепая выпечка основы защищает тесто от промокания под жидким соусом.", "Мускатный орех в яично-сливочной заливке рояль — каноническая вкусовая подпись киша."],
    techCard: {
      dishYield: "форма диаметром 10–12 см",
      kzhbu: {"calories": 275, "proteins": 13.5, "fats": 16.8, "carbs": 18.0},
      semiFinishedProducts: ["Полуфабрикат теста для Классический французский киш с курицей и грибами (на 1 порцию / форма диаметром 10–12 см)", "Подготовленная начинка / декор"],
      technologicalProcess: "Слепая термообработка песочной корзинки, наполнение мясной пассеровкой, заливка альбумин-сливочной эмульсией и запекание.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-20-khrustyashchiy-turetskiy-b",
    title: "Хрустящий турецкий бёрек с сыром и зеленью из теста юфка/фило (на 1 порцию / 2 рулетика)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: хрустящий турецкий бёрек с сыром и зеленью из теста юфка/фило (на 1 порцию / 2 рулетика). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 20,
    cookTime: 20,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Домашняя выпечка", "К чаю"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1200,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "2 рулетика",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Хрустящий турецкий бёрек с сыром и зеленью из теста юфка/фило (на 1 порцию / 2 рулетика)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-21-zakrytaya-italyanskaya-pit",
    title: "Закрытая итальянская пицца кальцоне с ветчиной и моцареллой (на 1 порцию / 1 крупный полумесяц)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: закрытая итальянская пицца кальцоне с ветчиной и моцареллой (на 1 порцию / 1 крупный полумесяц). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 20,
    cookTime: 20,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Домашняя выпечка", "К чаю"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1200,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "1 крупный полумесяц",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Закрытая итальянская пицца кальцоне с ветчиной и моцареллой (на 1 порцию / 1 крупный полумесяц)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-22-traditsionnyy-nemetskiy-sl",
    title: "Традиционный немецкий сливовый пирог (Zwetschgenkuchen) с песочно-дрожжевым тестом (на 1 порцию / форма 10–12 см или мини-противень)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: традиционный немецкий сливовый пирог (zwetschgenkuchen) с песочно-дрожжевым тестом (на 1 порцию / форма 10–12 см или мини-противень). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 20,
    cookTime: 20,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Домашняя выпечка", "К чаю"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1200,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "форма 10–12 см или мини-противень",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Традиционный немецкий сливовый пирог (Zwetschgenkuchen) с песочно-дрожжевым тестом (на 1 порцию / форма 10–12 см или мини-противень)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-23-traditsionnyy-osetinskiy-p",
    title: "Традиционный осетинский пирог с сыром (Уалибах) на тончайшем тесте (на 1 порцию / пирог диаметром 20–22 см)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: традиционный осетинский пирог с сыром (уалибах) на тончайшем тесте (на 1 порцию / пирог диаметром 20–22 см). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 20,
    cookTime: 20,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Домашняя выпечка", "К чаю"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1200,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "пирог диаметром 20–22 см",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Традиционный осетинский пирог с сыром (Уалибах) на тончайшем тесте (на 1 порцию / пирог диаметром 20–22 см)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-24-traditsionnyy-amerikanskiy",
    title: "Традиционный американский тыквенный пирог (Pumpkin Pie) со специями (на 1 порцию / форма диаметром 10–12 см)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: традиционный американский тыквенный пирог (pumpkin pie) со специями (на 1 порцию / форма диаметром 10–12 см). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 20,
    cookTime: 20,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Домашняя выпечка", "К чаю"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1200,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "форма диаметром 10–12 см",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Традиционный американский тыквенный пирог (Pumpkin Pie) со специями (на 1 порцию / форма диаметром 10–12 см)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-25-traditsionnyy-gruzinskiy-k",
    title: "Традиционный грузинский хачапури по-аджарски в форме лодочки (на 1 порцию / 1 крупная лодочка)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: традиционный грузинский хачапури по-аджарски в форме лодочки (на 1 порцию / 1 крупная лодочка). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 30,
    cookTime: 25,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Восточная выпечка", "Сытно", "Традиционная кухня"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1500,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "1 крупная лодочка",
      kzhbu: {"calories": 280, "proteins": 11.2, "fats": 15.0, "carbs": 25.0},
      semiFinishedProducts: ["Полуфабрикат теста для Традиционный грузинский хачапури по-аджарски в форме лодочки (на 1 порцию / 1 крупная лодочка)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-26-klassicheskiy-amerikanskiy",
    title: "Классический американский чизкейк Нью-Йорк с нежнейшей кремовой текстурой (на 1 порцию / мини-форма диаметром 10–12 см)",
    category: 'pastry',
    description: "Нежнейший порционный чизкейк с бархатистой кремовой текстурой крем-чиза на хрустящей песочной подложке. Выпекается при деликатной температуре без водяной бани или на слабом пару для предотвращения трещин.",
    prepTime: 20,
    cookTime: 35,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Чизкейк", "Десерт", "Сырный торт", "Нью-Йорк", "Выпечка"],
    ingredients: [
      {
        name: "Песочное печенье (крошка)",
        amount: 50,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 180,
        category: "Бакалея"
      },
      {
        name: "Масло сливочное 82.5% растопленное",
        amount: 20,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 920,
        category: "Масла"
      },
      {
        name: "Сыр творожный сливочный (крем-чиз)",
        amount: 200,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 620,
        category: "Сыры"
      },
      {
        name: "Сливки 33% жирности",
        amount: 50,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 380,
        category: "Молочные продукты"
      },
      {
        name: "Сахарная пудра",
        amount: 45,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 75,
        category: "Бакалея"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Сок лимона натуральный",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 200,
        category: "Фрукты"
      },
      {
        name: "Натуральный экстракт ванили",
        amount: 1,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 900,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Печенье измельчите в мелкую крошку, смешайте с растопленным маслом и утрамбуйте на дно формы диаметром 10-12 см.",
        timerSeconds: 180,
        tip: "Используйте донышко стакана для плотной трамбовки."
      },
      {
        stepNumber: 2,
        instruction: "Творожный сыр комнатной температуры аккуратно перемешайте лопаткой с сахарной пудрой и ванилью.",
        timerSeconds: 120,
        tip: "Не взбивайте миксером на высокой скорости, чтобы не нагнать пузыри воздуха!"
      },
      {
        stepNumber: 3,
        instruction: "Добавьте яйцо, сливки и лимонный сок. Перемешайте до гладкой шелковистой эмульсии.",
        timerSeconds: 90,
        tip: "Лимонный сок балансирует сливочную жирность."
      },
      {
        stepNumber: 4,
        instruction: "Вылейте сырную массу на песочную основу, слегка постучите формой о стол для удаления пузырьков.",
        timerSeconds: 60,
        tip: "Гладкая поверхность без пузырей не потрескается."
      },
      {
        stepNumber: 5,
        instruction: "Выпекайте при 150°C в течение 30-35 минут. Серединка должна слегка подрагивать при покачивании формы.",
        timerSeconds: 2100,
        tip: "Подрагивающий центр дойдет при постепенном остывании."
      },
      {
        stepNumber: 6,
        instruction: "Остудите в приоткрытой духовке, затем уберите в холодильник минимум на 3-4 часа.",
        timerSeconds: 10800,
        tip: "Охлаждение формирует шелковистый срез."
      },
    ],
    chefSecrets: ["Никогда не взбивайте массу на высокой скорости — лишний воздух вызывает подъем купола и последующие трещины.", "Центр чизкейка при выключении духовки обязан быть слегка желеобразным."],
    techCard: {
      dishYield: "мини-форма диаметром 10–12 см",
      kzhbu: {"calories": 320, "proteins": 7.2, "fats": 21.0, "carbs": 26.5},
      semiFinishedProducts: ["Полуфабрикат теста для Классический американский чизкейк Нью-Йорк с нежнейшей кремовой текстурой (на 1 порцию / мини-форма диаметром 10–12 см)", "Подготовленная начинка / декор"],
      technologicalProcess: "Формование прессованной песчаной подложки, эмульгирование крем-чиза без аэрации, низкотемпературное запекание и холодная стабилизация.",
      servingTemperature: "16–18°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-27-nastoyashchaya-bakinskaya",
    title: "Настоящая бакинская пахлава с грецкими орехами, пряностями и медовой заливкой (на 1 порцию / мини-форма 10×12 см или несколько порционных ромбиков)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: настоящая бакинская пахлава с грецкими орехами, пряностями и медовой заливкой (на 1 порцию / мини-форма 10×12 см или несколько порционных ромбиков). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 20,
    cookTime: 20,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Домашняя выпечка", "К чаю"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1200,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "мини-форма 10×12 см или несколько порционных ромбиков",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Настоящая бакинская пахлава с грецкими орехами, пряностями и медовой заливкой (на 1 порцию / мини-форма 10×12 см или несколько порционных ромбиков)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-28-nezhneyshiy-tort-molochnay",
    title: "Нежнейший торт «Молочная девочка» со сгущенным молоком и воздушным кремом (на 1 порцию / бенто-форма диаметром 10–12 см, около 3–4 мини-коржей)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: нежнейший торт «молочная девочка» со сгущенным молоком и воздушным кремом (на 1 порцию / бенто-форма диаметром 10–12 см, около 3–4 мини-коржей). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 30,
    cookTime: 25,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Десерт", "Сладкое", "К чаю", "Праздничное"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1500,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "бенто-форма диаметром 10–12 см, около 3–4 мини-коржей",
      kzhbu: {"calories": 320, "proteins": 5.8, "fats": 17.5, "carbs": 35.0},
      semiFinishedProducts: ["Полуфабрикат теста для Нежнейший торт «Молочная девочка» со сгущенным молоком и воздушным кремом (на 1 порцию / бенто-форма диаметром 10–12 см, около 3–4 мини-коржей)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-29-prostoy-domashniy-slivovyy",
    title: "Простой домашний сливовый пирог на скорую руку для уютного чаепития (на 1 порцию / форма диаметром 10–12 см)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: простой домашний сливовый пирог на скорую руку для уютного чаепития (на 1 порцию / форма диаметром 10–12 см). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 20,
    cookTime: 20,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Домашняя выпечка", "К чаю"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1200,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "форма диаметром 10–12 см",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Простой домашний сливовый пирог на скорую руку для уютного чаепития (на 1 порцию / форма диаметром 10–12 см)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-30-poleznoe-i-nezhnoe-ovsyano",
    title: "Полезное и нежное овсяно-банановое печенье без муки и лишнего сахара (на 1 порцию / 4–5 аппетитных печений)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: полезное и нежное овсяно-банановое печенье без муки и лишнего сахара (на 1 порцию / 4–5 аппетитных печений). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 20,
    cookTime: 20,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Домашняя выпечка", "К чаю"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1200,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "4–5 аппетитных печений",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Полезное и нежное овсяно-банановое печенье без муки и лишнего сахара (на 1 порцию / 4–5 аппетитных печений)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-31-chizkeyk-snikers-s-karamel",
    title: "Чизкейк «Сникерс» с карамелью, арахисом и шоколадным ганашем (на 1 порцию / мини-форма диаметром 10–12 см)",
    category: 'pastry',
    description: "Нежнейший порционный чизкейк с бархатистой кремовой текстурой крем-чиза на хрустящей песочной подложке. Выпекается при деликатной температуре без водяной бани или на слабом пару для предотвращения трещин.",
    prepTime: 20,
    cookTime: 35,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Чизкейк", "Десерт", "Сырный торт", "Нью-Йорк", "Выпечка"],
    ingredients: [
      {
        name: "Песочное печенье (крошка)",
        amount: 50,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 180,
        category: "Бакалея"
      },
      {
        name: "Масло сливочное 82.5% растопленное",
        amount: 20,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 920,
        category: "Масла"
      },
      {
        name: "Сыр творожный сливочный (крем-чиз)",
        amount: 200,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 620,
        category: "Сыры"
      },
      {
        name: "Сливки 33% жирности",
        amount: 50,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 380,
        category: "Молочные продукты"
      },
      {
        name: "Сахарная пудра",
        amount: 45,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 75,
        category: "Бакалея"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Сок лимона натуральный",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 200,
        category: "Фрукты"
      },
      {
        name: "Натуральный экстракт ванили",
        amount: 1,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 900,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Печенье измельчите в мелкую крошку, смешайте с растопленным маслом и утрамбуйте на дно формы диаметром 10-12 см.",
        timerSeconds: 180,
        tip: "Используйте донышко стакана для плотной трамбовки."
      },
      {
        stepNumber: 2,
        instruction: "Творожный сыр комнатной температуры аккуратно перемешайте лопаткой с сахарной пудрой и ванилью.",
        timerSeconds: 120,
        tip: "Не взбивайте миксером на высокой скорости, чтобы не нагнать пузыри воздуха!"
      },
      {
        stepNumber: 3,
        instruction: "Добавьте яйцо, сливки и лимонный сок. Перемешайте до гладкой шелковистой эмульсии.",
        timerSeconds: 90,
        tip: "Лимонный сок балансирует сливочную жирность."
      },
      {
        stepNumber: 4,
        instruction: "Вылейте сырную массу на песочную основу, слегка постучите формой о стол для удаления пузырьков.",
        timerSeconds: 60,
        tip: "Гладкая поверхность без пузырей не потрескается."
      },
      {
        stepNumber: 5,
        instruction: "Выпекайте при 150°C в течение 30-35 минут. Серединка должна слегка подрагивать при покачивании формы.",
        timerSeconds: 2100,
        tip: "Подрагивающий центр дойдет при постепенном остывании."
      },
      {
        stepNumber: 6,
        instruction: "Остудите в приоткрытой духовке, затем уберите в холодильник минимум на 3-4 часа.",
        timerSeconds: 10800,
        tip: "Охлаждение формирует шелковистый срез."
      },
    ],
    chefSecrets: ["Никогда не взбивайте массу на высокой скорости — лишний воздух вызывает подъем купола и последующие трещины.", "Центр чизкейка при выключении духовки обязан быть слегка желеобразным."],
    techCard: {
      dishYield: "мини-форма диаметром 10–12 см",
      kzhbu: {"calories": 320, "proteins": 7.2, "fats": 21.0, "carbs": 26.5},
      semiFinishedProducts: ["Полуфабрикат теста для Чизкейк «Сникерс» с карамелью, арахисом и шоколадным ганашем (на 1 порцию / мини-форма диаметром 10–12 см)", "Подготовленная начинка / декор"],
      technologicalProcess: "Формование прессованной песчаной подложки, эмульгирование крем-чиза без аэрации, низкотемпературное запекание и холодная стабилизация.",
      servingTemperature: "16–18°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-32-derevenskaya-galeta-s-abri",
    title: "Деревенская галета с абрикосами на нежном творожном тесте (на 1 порцию / галета диаметром 15–18 см)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: деревенская галета с абрикосами на нежном творожном тесте (на 1 порцию / галета диаметром 15–18 см). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 20,
    cookTime: 20,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Домашняя выпечка", "К чаю"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1200,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "галета диаметром 15–18 см",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Деревенская галета с абрикосами на нежном творожном тесте (на 1 порцию / галета диаметром 15–18 см)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-33-nezhnye-rumyanye-pirozhki",
    title: "Нежные румяные пирожки с творожно-яблочной начинкой из сдобного дрожжевого теста (на 1 порцию / 2 крупных аппетитных пирожка)",
    category: 'pastry',
    description: "Аппетитные домашние румяные пирожки из сдобного пухового дрожжевого теста на молоке с сочной сбалансированной начинкой. Глянцевая корочка и тающий мякиш.",
    prepTime: 35,
    cookTime: 22,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Пирожки", "Дрожжевое тесто", "Сытно", "Духовка"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт",
        amount: 140,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 65,
        category: "Мука"
      },
      {
        name: "Молоко 3.2% теплое",
        amount: 65,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Молочные продукты"
      },
      {
        name: "Дрожжи сухие быстродействующие",
        amount: 3,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 800,
        category: "Бакалея"
      },
      {
        name: "Масло сливочное 82.5% мягкое",
        amount: 25,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 920,
        category: "Масла"
      },
      {
        name: "Начинка сочная (мясо с капустой/яблоко/щавель)",
        amount: 150,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 400,
        category: "Гастрономия"
      },
      {
        name: "Сахар песок",
        amount: 15,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Яичный желток с каплей молока для смазывания",
        amount: 1,
        unit: "шт",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Соль мелкая щепотка",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "В теплом молоке разведите дрожжи и сахар. Добавьте муку, соль и мягкое сливочное масло, замесите нежное шелковистое тесто. Оставьте на 40 минут в тепле.",
        timerSeconds: 2400,
        tip: "Сливочное масло придает тесту несравненную пушистость."
      },
      {
        stepNumber: 2,
        instruction: "Обомните подошедшее тесто и разделите на порционные шарики. Накройте пленкой на 10 минут.",
        timerSeconds: 600,
        tip: "Промежуточная расстойка облегчает лепку."
      },
      {
        stepNumber: 3,
        instruction: "Раскатайте шарики в лепешки, выложите щедрую порцию начинки и плотно защипните шов веревочкой.",
        timerSeconds: 240,
        tip: "Шов должен быть герметичным."
      },
      {
        stepNumber: 4,
        instruction: "Выложите пирожки швом вниз на противень с пергаментом. Оставьте на 15 минут для расстойки.",
        timerSeconds: 900,
        tip: "Расстойка обязательна для пышности пирожков."
      },
      {
        stepNumber: 5,
        instruction: "Смажьте желтком с каплей молока. Выпекайте при 180°C 20-22 минуты до уверенного румянца.",
        timerSeconds: 1300,
        tip: "Смазывание дает зеркальный лаковый глянец."
      },
    ],
    chefSecrets: ["Расстойка перед духовкой в течение 15 минут делает тесто невесомым, как пух.", "Смазывание смесью желтка и чайной ложки молока обеспечивает глубокий золотистый колер."],
    techCard: {
      dishYield: "2 крупных аппетитных пирожка",
      kzhbu: {"calories": 240, "proteins": 9.2, "fats": 8.8, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Нежные румяные пирожки с творожно-яблочной начинкой из сдобного дрожжевого теста (на 1 порцию / 2 крупных аппетитных пирожка)", "Подготовленная начинка / декор"],
      technologicalProcess: "Сдобное дрожжевое брожение, разделка на шаровые заготовки, формование пирожков, расстойка и выпекание.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-34-bystraya-lenivaya-achma-s",
    title: "Быстрая ленивая ачма с творогом, сулугуни и зеленью из лаваша (на 1 порцию / мини-форма 10×12 см)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: быстрая ленивая ачма с творогом, сулугуни и зеленью из лаваша (на 1 порцию / мини-форма 10×12 см). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 20,
    cookTime: 20,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Домашняя выпечка", "К чаю"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1200,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "мини-форма 10×12 см",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Быстрая ленивая ачма с творогом, сулугуни и зеленью из лаваша (на 1 порцию / мини-форма 10×12 см)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-35-khrustyashchie-khrumkie-tr",
    title: "Хрустящие хрумкие трубочки с сочным мясным фаршем из нежнейшего теста фило (на 1 порцию / 3–4 аппетитные трубочки)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: хрустящие хрумкие трубочки с сочным мясным фаршем из нежнейшего теста фило (на 1 порцию / 3–4 аппетитные трубочки). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 20,
    cookTime: 20,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Домашняя выпечка", "К чаю"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1200,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "3–4 аппетитные трубочки",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Хрустящие хрумкие трубочки с сочным мясным фаршем из нежнейшего теста фило (на 1 порцию / 3–4 аппетитные трубочки)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-36-bystrye-lenivye-khachapuri",
    title: "Быстрые ленивые хачапури из лаваша с творогом и сулугуни на сковороде (на 1 порцию / 1 крупная аппетитная лепешка-конверт)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: быстрые ленивые хачапури из лаваша с творогом и сулугуни на сковороде (на 1 порцию / 1 крупная аппетитная лепешка-конверт). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 30,
    cookTime: 25,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Восточная выпечка", "Сытно", "Традиционная кухня"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1500,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "1 крупная аппетитная лепешка-конверт",
      kzhbu: {"calories": 280, "proteins": 11.2, "fats": 15.0, "carbs": 25.0},
      semiFinishedProducts: ["Полуфабрикат теста для Быстрые ленивые хачапури из лаваша с творогом и сулугуни на сковороде (на 1 порцию / 1 крупная аппетитная лепешка-конверт)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-37-vlazhnyy-i-ultrashokoladny",
    title: "Влажный и ультрашоколадный брауни с какао-порошком (на 1 порцию / мини-форма 10×10 см или 10×12 см)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: влажный и ультрашоколадный брауни с какао-порошком (на 1 порцию / мини-форма 10×10 см или 10×12 см). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 30,
    cookTime: 25,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Десерт", "Сладкое", "К чаю", "Праздничное"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1500,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "мини-форма 10×10 см или 10×12 см",
      kzhbu: {"calories": 320, "proteins": 5.8, "fats": 17.5, "carbs": 35.0},
      semiFinishedProducts: ["Полуфабрикат теста для Влажный и ультрашоколадный брауни с какао-порошком (на 1 порцию / мини-форма 10×10 см или 10×12 см)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-38-tatarskiy-kystybay-s-nezhn",
    title: "Татарский кыстыбай с нежным картофельным пюре (на 1 порцию / 2 аппетитных треугольника)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: татарский кыстыбай с нежным картофельным пюре (на 1 порцию / 2 аппетитных треугольника). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 20,
    cookTime: 20,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Домашняя выпечка", "К чаю"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1200,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "2 аппетитных треугольника",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Татарский кыстыбай с нежным картофельным пюре (на 1 порцию / 2 аппетитных треугольника)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-39-khrustyashchie-sosiski-v-d",
    title: "Хрустящие сосиски в дрожжевом тесте, приготовленные в аэрогриле (на 1 порцию / 2 аппетитные сосиски)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: хрустящие сосиски в дрожжевом тесте, приготовленные в аэрогриле (на 1 порцию / 2 аппетитные сосиски). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 20,
    cookTime: 20,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Домашняя выпечка", "К чаю"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1200,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "2 аппетитные сосиски",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Хрустящие сосиски в дрожжевом тесте, приготовленные в аэрогриле (на 1 порцию / 2 аппетитные сосиски)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-40-nezhnoe-tvorozhnoe-pechene",
    title: "Нежное творожное печенье «Треугольники» на сковороде без духовки (на 1 порцию / 5–6 мини-печений)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: нежное творожное печенье «треугольники» на сковороде без духовки (на 1 порцию / 5–6 мини-печений). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 20,
    cookTime: 20,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Домашняя выпечка", "К чаю"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1200,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "5–6 мини-печений",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Нежное творожное печенье «Треугольники» на сковороде без духовки (на 1 порцию / 5–6 мини-печений)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-41-vozdushnye-chesnochnye-pam",
    title: "Воздушные чесночные пампушки с ароматной заправкой к борщу (на 1 порцию / 3–4 мини-пампушки)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: воздушные чесночные пампушки с ароматной заправкой к борщу (на 1 порцию / 3–4 мини-пампушки). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 20,
    cookTime: 20,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Домашняя выпечка", "К чаю"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1200,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "3–4 мини-пампушки",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Воздушные чесночные пампушки с ароматной заправкой к борщу (на 1 порцию / 3–4 мини-пампушки)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-42-klassicheskie-sdobnye-bulo",
    title: "Классические сдобные булочки на молоке с нежным мякишем и глянцевой корочкой (на 1 порцию / 2 аппетитные булочки)",
    category: 'pastry',
    description: "Классический открытый французский киш в мини-форме: рассыпчатая рубленая песочная основа сабле, сочное куриное филе с обжаренными грибами и шелковистая сырно-сливочная заливка рояль с мускатным орехом.",
    prepTime: 25,
    cookTime: 30,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Киш", "Французская кухня", "Пироги", "Сыр", "Курица"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт",
        amount: 90,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% ледяное",
        amount: 45,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 920,
        category: "Масла"
      },
      {
        name: "Вода ледяная",
        amount: 25,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 10,
        category: "Жидкости"
      },
      {
        name: "Филе куриное обжаренное со специями",
        amount: 80,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 15,
        estimatedCostPerKg: 390,
        category: "Мясо"
      },
      {
        name: "Шампиньоны свежие обжаренные",
        amount: 60,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 20,
        estimatedCostPerKg: 240,
        category: "Грибы"
      },
      {
        name: "Сливки 20% жирности",
        amount: 70,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 260,
        category: "Молочные продукты"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Сыр Грюйер или Гауда тертый",
        amount: 45,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 820,
        category: "Сыры"
      },
      {
        name: "Мускатный орех, тимьян и соль",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 650,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Холодное масло перетрите с мукой в крошку, влейте ледяную воду и быстро соберите тесто в диск. Охладите 20 минут.",
        timerSeconds: 1200,
        tip: "Не вымешивайте долго, чтобы основа была рассыпчатой."
      },
      {
        stepNumber: 2,
        instruction: "Раскатайте тесто и уложите в форму 10-12 см с бортиками. Наколите вилкой и подпеките «вслепую» с грузом 10 минут при 190°C.",
        timerSeconds: 600,
        tip: "Слепая выпечка гарантирует пропеченное сухое дно."
      },
      {
        stepNumber: 3,
        instruction: "Куриное филе нарежьте кубиком и обжарьте с грибами и тимьяном до испарения влаги.",
        timerSeconds: 300,
        tip: "Начинка не должна содержать сырой влаги."
      },
      {
        stepNumber: 4,
        instruction: "Взбейте яйцо со сливками, солью, перцем, щепоткой мускатного ореха и половиной сыра.",
        timerSeconds: 90,
        tip: "Классический французский заливной соус рояль."
      },
      {
        stepNumber: 5,
        instruction: "В подпеченную корзинку выложите курицу с грибами, залейте сливочной смесью и посыпьте оставшимся сыром.",
        timerSeconds: 90,
        tip: "Сыр сверху даст красивую золотистую гратиновую шапочку."
      },
      {
        stepNumber: 6,
        instruction: "Выпекайте при 180°C 20 минут до застывания заливки и золотистой сырной корочки.",
        timerSeconds: 1200,
        tip: "Дайте постоять 7-10 минут перед нарезкой."
      },
    ],
    chefSecrets: ["Предварительная слепая выпечка основы защищает тесто от промокания под жидким соусом.", "Мускатный орех в яично-сливочной заливке рояль — каноническая вкусовая подпись киша."],
    techCard: {
      dishYield: "2 аппетитные булочки",
      kzhbu: {"calories": 275, "proteins": 13.5, "fats": 16.8, "carbs": 18.0},
      semiFinishedProducts: ["Полуфабрикат теста для Классические сдобные булочки на молоке с нежным мякишем и глянцевой корочкой (на 1 порцию / 2 аппетитные булочки)", "Подготовленная начинка / декор"],
      technologicalProcess: "Слепая термообработка песочной корзинки, наполнение мясной пассеровкой, заливка альбумин-сливочной эмульсией и запекание.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-43-sytnyy-myasnoy-pirog-s-kar",
    title: "Сытный мясной пирог с картофелем и фаршем из нежного сдобного теста (на 1 порцию / мини-форма диаметром 12–14 см)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: сытный мясной пирог с картофелем и фаршем из нежного сдобного теста (на 1 порцию / мини-форма диаметром 12–14 см). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 20,
    cookTime: 20,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Домашняя выпечка", "К чаю"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1200,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "мини-форма диаметром 12–14 см",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Сытный мясной пирог с картофелем и фаршем из нежного сдобного теста (на 1 порцию / мини-форма диаметром 12–14 см)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-44-rumyanye-vesennie-pirozhki",
    title: "Румяные весенние пирожки с сочной начинкой из щавеля и вареного яйца из сдобного дрожжевого теста (на 1 порцию / 2 крупных аппетитных пирожка)",
    category: 'pastry',
    description: "Аппетитные домашние румяные пирожки из сдобного пухового дрожжевого теста на молоке с сочной сбалансированной начинкой. Глянцевая корочка и тающий мякиш.",
    prepTime: 35,
    cookTime: 22,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Пирожки", "Дрожжевое тесто", "Сытно", "Духовка"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт",
        amount: 140,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 65,
        category: "Мука"
      },
      {
        name: "Молоко 3.2% теплое",
        amount: 65,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Молочные продукты"
      },
      {
        name: "Дрожжи сухие быстродействующие",
        amount: 3,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 800,
        category: "Бакалея"
      },
      {
        name: "Масло сливочное 82.5% мягкое",
        amount: 25,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 920,
        category: "Масла"
      },
      {
        name: "Начинка сочная (мясо с капустой/яблоко/щавель)",
        amount: 150,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 400,
        category: "Гастрономия"
      },
      {
        name: "Сахар песок",
        amount: 15,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Яичный желток с каплей молока для смазывания",
        amount: 1,
        unit: "шт",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Соль мелкая щепотка",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "В теплом молоке разведите дрожжи и сахар. Добавьте муку, соль и мягкое сливочное масло, замесите нежное шелковистое тесто. Оставьте на 40 минут в тепле.",
        timerSeconds: 2400,
        tip: "Сливочное масло придает тесту несравненную пушистость."
      },
      {
        stepNumber: 2,
        instruction: "Обомните подошедшее тесто и разделите на порционные шарики. Накройте пленкой на 10 минут.",
        timerSeconds: 600,
        tip: "Промежуточная расстойка облегчает лепку."
      },
      {
        stepNumber: 3,
        instruction: "Раскатайте шарики в лепешки, выложите щедрую порцию начинки и плотно защипните шов веревочкой.",
        timerSeconds: 240,
        tip: "Шов должен быть герметичным."
      },
      {
        stepNumber: 4,
        instruction: "Выложите пирожки швом вниз на противень с пергаментом. Оставьте на 15 минут для расстойки.",
        timerSeconds: 900,
        tip: "Расстойка обязательна для пышности пирожков."
      },
      {
        stepNumber: 5,
        instruction: "Смажьте желтком с каплей молока. Выпекайте при 180°C 20-22 минуты до уверенного румянца.",
        timerSeconds: 1300,
        tip: "Смазывание дает зеркальный лаковый глянец."
      },
    ],
    chefSecrets: ["Расстойка перед духовкой в течение 15 минут делает тесто невесомым, как пух.", "Смазывание смесью желтка и чайной ложки молока обеспечивает глубокий золотистый колер."],
    techCard: {
      dishYield: "2 крупных аппетитных пирожка",
      kzhbu: {"calories": 240, "proteins": 9.2, "fats": 8.8, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Румяные весенние пирожки с сочной начинкой из щавеля и вареного яйца из сдобного дрожжевого теста (на 1 порцию / 2 крупных аппетитных пирожка)", "Подготовленная начинка / декор"],
      technologicalProcess: "Сдобное дрожжевое брожение, разделка на шаровые заготовки, формование пирожков, расстойка и выпекание.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-45-nezhnyy-vanilnyy-keks-na-m",
    title: "Нежный ванильный кекс на молоке с рассыпчатым пористым мякишем (на 1 порцию / мини-форма или порционная формочка диаметром 10–12 см)",
    category: 'pastry',
    description: "Классический открытый французский киш в мини-форме: рассыпчатая рубленая песочная основа сабле, сочное куриное филе с обжаренными грибами и шелковистая сырно-сливочная заливка рояль с мускатным орехом.",
    prepTime: 25,
    cookTime: 30,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Киш", "Французская кухня", "Пироги", "Сыр", "Курица"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт",
        amount: 90,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% ледяное",
        amount: 45,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 920,
        category: "Масла"
      },
      {
        name: "Вода ледяная",
        amount: 25,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 10,
        category: "Жидкости"
      },
      {
        name: "Филе куриное обжаренное со специями",
        amount: 80,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 15,
        estimatedCostPerKg: 390,
        category: "Мясо"
      },
      {
        name: "Шампиньоны свежие обжаренные",
        amount: 60,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 20,
        estimatedCostPerKg: 240,
        category: "Грибы"
      },
      {
        name: "Сливки 20% жирности",
        amount: 70,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 260,
        category: "Молочные продукты"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Сыр Грюйер или Гауда тертый",
        amount: 45,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 820,
        category: "Сыры"
      },
      {
        name: "Мускатный орех, тимьян и соль",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 650,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Холодное масло перетрите с мукой в крошку, влейте ледяную воду и быстро соберите тесто в диск. Охладите 20 минут.",
        timerSeconds: 1200,
        tip: "Не вымешивайте долго, чтобы основа была рассыпчатой."
      },
      {
        stepNumber: 2,
        instruction: "Раскатайте тесто и уложите в форму 10-12 см с бортиками. Наколите вилкой и подпеките «вслепую» с грузом 10 минут при 190°C.",
        timerSeconds: 600,
        tip: "Слепая выпечка гарантирует пропеченное сухое дно."
      },
      {
        stepNumber: 3,
        instruction: "Куриное филе нарежьте кубиком и обжарьте с грибами и тимьяном до испарения влаги.",
        timerSeconds: 300,
        tip: "Начинка не должна содержать сырой влаги."
      },
      {
        stepNumber: 4,
        instruction: "Взбейте яйцо со сливками, солью, перцем, щепоткой мускатного ореха и половиной сыра.",
        timerSeconds: 90,
        tip: "Классический французский заливной соус рояль."
      },
      {
        stepNumber: 5,
        instruction: "В подпеченную корзинку выложите курицу с грибами, залейте сливочной смесью и посыпьте оставшимся сыром.",
        timerSeconds: 90,
        tip: "Сыр сверху даст красивую золотистую гратиновую шапочку."
      },
      {
        stepNumber: 6,
        instruction: "Выпекайте при 180°C 20 минут до застывания заливки и золотистой сырной корочки.",
        timerSeconds: 1200,
        tip: "Дайте постоять 7-10 минут перед нарезкой."
      },
    ],
    chefSecrets: ["Предварительная слепая выпечка основы защищает тесто от промокания под жидким соусом.", "Мускатный орех в яично-сливочной заливке рояль — каноническая вкусовая подпись киша."],
    techCard: {
      dishYield: "мини-форма или порционная формочка диаметром 10–12 см",
      kzhbu: {"calories": 275, "proteins": 13.5, "fats": 16.8, "carbs": 18.0},
      semiFinishedProducts: ["Полуфабрикат теста для Нежный ванильный кекс на молоке с рассыпчатым пористым мякишем (на 1 порцию / мини-форма или порционная формочка диаметром 10–12 см)", "Подготовленная начинка / декор"],
      technologicalProcess: "Слепая термообработка песочной корзинки, наполнение мясной пассеровкой, заливка альбумин-сливочной эмульсией и запекание.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-46-khrustyashchiy-sloenyy-pir",
    title: "Хрустящий слоеный пирог со шпинатом и сыром из готового слоеного теста (на 1 порцию / мини-форма 10×12 см или конверт)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: хрустящий слоеный пирог со шпинатом и сыром из готового слоеного теста (на 1 порцию / мини-форма 10×12 см или конверт). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 20,
    cookTime: 20,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Домашняя выпечка", "К чаю"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1200,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "мини-форма 10×12 см или конверт",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Хрустящий слоеный пирог со шпинатом и сыром из готового слоеного теста (на 1 порцию / мини-форма 10×12 см или конверт)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-47-aromatnyy-domashniy-postny",
    title: "Ароматный домашний постный хлеб с хрустящей корочкой и пушистым мякишем (на 1 порцию / 1 небольшой формовой хлебец)",
    category: 'pastry',
    description: "Классический открытый французский киш в мини-форме: рассыпчатая рубленая песочная основа сабле, сочное куриное филе с обжаренными грибами и шелковистая сырно-сливочная заливка рояль с мускатным орехом.",
    prepTime: 25,
    cookTime: 30,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Киш", "Французская кухня", "Пироги", "Сыр", "Курица"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт",
        amount: 90,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% ледяное",
        amount: 45,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 920,
        category: "Масла"
      },
      {
        name: "Вода ледяная",
        amount: 25,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 10,
        category: "Жидкости"
      },
      {
        name: "Филе куриное обжаренное со специями",
        amount: 80,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 15,
        estimatedCostPerKg: 390,
        category: "Мясо"
      },
      {
        name: "Шампиньоны свежие обжаренные",
        amount: 60,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 20,
        estimatedCostPerKg: 240,
        category: "Грибы"
      },
      {
        name: "Сливки 20% жирности",
        amount: 70,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 260,
        category: "Молочные продукты"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Сыр Грюйер или Гауда тертый",
        amount: 45,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 820,
        category: "Сыры"
      },
      {
        name: "Мускатный орех, тимьян и соль",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 650,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Холодное масло перетрите с мукой в крошку, влейте ледяную воду и быстро соберите тесто в диск. Охладите 20 минут.",
        timerSeconds: 1200,
        tip: "Не вымешивайте долго, чтобы основа была рассыпчатой."
      },
      {
        stepNumber: 2,
        instruction: "Раскатайте тесто и уложите в форму 10-12 см с бортиками. Наколите вилкой и подпеките «вслепую» с грузом 10 минут при 190°C.",
        timerSeconds: 600,
        tip: "Слепая выпечка гарантирует пропеченное сухое дно."
      },
      {
        stepNumber: 3,
        instruction: "Куриное филе нарежьте кубиком и обжарьте с грибами и тимьяном до испарения влаги.",
        timerSeconds: 300,
        tip: "Начинка не должна содержать сырой влаги."
      },
      {
        stepNumber: 4,
        instruction: "Взбейте яйцо со сливками, солью, перцем, щепоткой мускатного ореха и половиной сыра.",
        timerSeconds: 90,
        tip: "Классический французский заливной соус рояль."
      },
      {
        stepNumber: 5,
        instruction: "В подпеченную корзинку выложите курицу с грибами, залейте сливочной смесью и посыпьте оставшимся сыром.",
        timerSeconds: 90,
        tip: "Сыр сверху даст красивую золотистую гратиновую шапочку."
      },
      {
        stepNumber: 6,
        instruction: "Выпекайте при 180°C 20 минут до застывания заливки и золотистой сырной корочки.",
        timerSeconds: 1200,
        tip: "Дайте постоять 7-10 минут перед нарезкой."
      },
    ],
    chefSecrets: ["Предварительная слепая выпечка основы защищает тесто от промокания под жидким соусом.", "Мускатный орех в яично-сливочной заливке рояль — каноническая вкусовая подпись киша."],
    techCard: {
      dishYield: "1 небольшой формовой хлебец",
      kzhbu: {"calories": 275, "proteins": 13.5, "fats": 16.8, "carbs": 18.0},
      semiFinishedProducts: ["Полуфабрикат теста для Ароматный домашний постный хлеб с хрустящей корочкой и пушистым мякишем (на 1 порцию / 1 небольшой формовой хлебец)", "Подготовленная начинка / декор"],
      technologicalProcess: "Слепая термообработка песочной корзинки, наполнение мясной пассеровкой, заливка альбумин-сливочной эмульсией и запекание.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-48-bystraya-i-sochnaya-pitsts",
    title: "Быстрая и сочная пицца на заливном тесте за 30 минут (на 1 порцию / мини-форма диаметром 16–18 см)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: быстрая и сочная пицца на заливном тесте за 30 минут (на 1 порцию / мини-форма диаметром 16–18 см). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 20,
    cookTime: 20,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Домашняя выпечка", "К чаю"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1200,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "мини-форма диаметром 16–18 см",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Быстрая и сочная пицца на заливном тесте за 30 минут (на 1 порцию / мини-форма диаметром 16–18 см)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-49-prazdnichnyy-kulich-s-izyu",
    title: "Праздничный кулич с изюмом и глазурью (на 1 порцию / 1 небольшой высокий кулич диаметром 9–10 см)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: праздничный кулич с изюмом и глазурью (на 1 порцию / 1 небольшой высокий кулич диаметром 9–10 см). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 40,
    cookTime: 25,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Хлеб", "Дрожжевое тесто", "Домашняя выпечка"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1500,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "1 небольшой высокий кулич диаметром 9–10 см",
      kzhbu: {"calories": 230, "proteins": 7.8, "fats": 4.5, "carbs": 42.0},
      semiFinishedProducts: ["Полуфабрикат теста для Праздничный кулич с изюмом и глазурью (на 1 порцию / 1 небольшой высокий кулич диаметром 9–10 см)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-50-khrustyashchie-sloenye-kon",
    title: "Хрустящие слоеные конвертики с тягучим расплавленным сыром (на 1 порцию / 2 аппетитных конвертика)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: хрустящие слоеные конвертики с тягучим расплавленным сыром (на 1 порцию / 2 аппетитных конвертика). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
    prepTime: 20,
    cookTime: 20,
    difficulty: "Средне",
    servings: 1,
    tags: ["Выпечка", "Домашняя выпечка", "К чаю"],
    ingredients: [
      {
        name: "Мука пшеничная высший сорт (или специальная основа)",
        amount: 150,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 5,
        estimatedCostPerKg: 70,
        category: "Мука"
      },
      {
        name: "Масло сливочное 82.5% или топленое / растительное",
        amount: 40,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 890,
        category: "Масла"
      },
      {
        name: "Яйцо куриное С1",
        amount: 1,
        unit: "шт",
        coldWastePercent: 12,
        heatLossPercent: 0,
        estimatedCostPerKg: 140,
        category: "Яйца"
      },
      {
        name: "Молоко / кефир / вода или сливки",
        amount: 80,
        unit: "мл",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 85,
        category: "Жидкости"
      },
      {
        name: "Сахар песок или пудра (по вкусу)",
        amount: 30,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 65,
        category: "Бакалея"
      },
      {
        name: "Начинка или вкусовой наполнитель рецепта",
        amount: 120,
        unit: "г",
        coldWastePercent: 5,
        heatLossPercent: 8,
        estimatedCostPerKg: 380,
        category: "Гастрономия"
      },
      {
        name: "Разрыхлитель / дрожжи / ароматные пряности",
        amount: 5,
        unit: "г",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 500,
        category: "Бакалея"
      },
      {
        name: "Соль поваренная мелкая",
        amount: 0.5,
        unit: "ч. л.",
        coldWastePercent: 0,
        heatLossPercent: 0,
        estimatedCostPerKg: 30,
        category: "Специи"
      },
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: "Подготовьте все сухие и жидкие компоненты комнатной температуры. Муку тщательно просейте через сито.",
        timerSeconds: 180,
        tip: "Просеивание насыщает муку кислородом."
      },
      {
        stepNumber: 2,
        instruction: "Замесите тесто строго по технологии: объедините сухие и влажные ингредиенты до гладкого однородного состояния.",
        timerSeconds: 300,
        tip: "Дайте тесту отдохнуть перед формованием."
      },
      {
        stepNumber: 3,
        instruction: "Подготовьте начинку и сформируйте изделие требуемой формы согласно порционному выходу.",
        timerSeconds: 240,
        tip: "Аккуратная формовка обеспечивает равномерное пропекание."
      },
      {
        stepNumber: 4,
        instruction: "Выпекайте или обжаривайте при оптимальной температуре до уверенной золотистой корочки и готовности сухой шпажки.",
        timerSeconds: 1200,
        tip: "Ориентируйтесь на румяный колер и сухую деревянную шпажку."
      },
      {
        stepNumber: 5,
        instruction: "Дайте изделию немного отдохнуть перед подачей для стабилизации мякиша.",
        timerSeconds: 300,
        tip: "Подавайте блюдо в оптимальной сервировочной температуре."
      },
    ],
    chefSecrets: ["Соблюдение температурного режима выпечки гарантирует сочность и румяную корочку.", "Качественные исходные продукты обеспечивают богатый ресторанный букет вкуса."],
    techCard: {
      dishYield: "2 аппетитных конвертика",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Хрустящие слоеные конвертики с тягучим расплавленным сыром (на 1 порцию / 2 аппетитных конвертика)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
];
