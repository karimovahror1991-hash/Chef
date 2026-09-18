import { Recipe } from '../../types';

export const PASTRY_COLLECTION_2: Recipe[] = [
  {
    id: "pastry-req-51-domashniy-belyy-khleb-s-zo",
    title: "Домашний белый хлеб с золотистой корочкой и мягким пористым мякишем (на 1 порцию / 1 небольшой формовой хлебец)",
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
      semiFinishedProducts: ["Полуфабрикат теста для Домашний белый хлеб с золотистой корочкой и мягким пористым мякишем (на 1 порцию / 1 небольшой формовой хлебец)", "Подготовленная начинка / декор"],
      technologicalProcess: "Слепая термообработка песочной корзинки, наполнение мясной пассеровкой, заливка альбумин-сливочной эмульсией и запекание.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-52-nezhnyy-yaponskiy-molochny",
    title: "Нежный японский молочный хлеб «Хоккайдо» по методу заварки тангчжонг (на 1 порцию / 1 небольшой формовой хлебец)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: нежный японский молочный хлеб «хоккайдо» по методу заварки тангчжонг (на 1 порцию / 1 небольшой формовой хлебец). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "1 небольшой формовой хлебец",
      kzhbu: {"calories": 230, "proteins": 7.8, "fats": 4.5, "carbs": 42.0},
      semiFinishedProducts: ["Полуфабрикат теста для Нежный японский молочный хлеб «Хоккайдо» по методу заварки тангчжонг (на 1 порцию / 1 небольшой формовой хлебец)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-53-molochnye-korzhiki-na-kefi",
    title: "Молочные коржики на кефире с рассыпчатым песочным мякишем (на 1 порцию / 3–4 мини-коржика)",
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
      dishYield: "3–4 мини-коржика",
      kzhbu: {"calories": 275, "proteins": 13.5, "fats": 16.8, "carbs": 18.0},
      semiFinishedProducts: ["Полуфабрикат теста для Молочные коржики на кефире с рассыпчатым песочным мякишем (на 1 порцию / 3–4 мини-коржика)", "Подготовленная начинка / декор"],
      technologicalProcess: "Слепая термообработка песочной корзинки, наполнение мясной пассеровкой, заливка альбумин-сливочной эмульсией и запекание.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-54-bystryy-lenivyy-tort-medov",
    title: "Быстрый ленивый торт «Медовик» в стиле знаменитого торта «Панчо» с нежным сметанным кремом и ароматом меда (на 1 порцию / мини-форма или пиала диаметром 12–14 см)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: быстрый ленивый торт «медовик» в стиле знаменитого торта «панчо» с нежным сметанным кремом и ароматом меда (на 1 порцию / мини-форма или пиала диаметром 12–14 см). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "мини-форма или пиала диаметром 12–14 см",
      kzhbu: {"calories": 320, "proteins": 5.8, "fats": 17.5, "carbs": 35.0},
      semiFinishedProducts: ["Полуфабрикат теста для Быстрый ленивый торт «Медовик» в стиле знаменитого торта «Панчо» с нежным сметанным кремом и ароматом меда (на 1 порцию / мини-форма или пиала диаметром 12–14 см)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-55-nezhnye-tonkie-blinchiki-s",
    title: "Нежные тонкие блинчики с изысканной творожно-кокосовой начинкой в стиле конфет «Рафаэлло» (на 1 порцию / 3–4 аппетитных блинчика)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: нежные тонкие блинчики с изысканной творожно-кокосовой начинкой в стиле конфет «рафаэлло» (на 1 порцию / 3–4 аппетитных блинчика). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "3–4 аппетитных блинчика",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Нежные тонкие блинчики с изысканной творожно-кокосовой начинкой в стиле конфет «Рафаэлло» (на 1 порцию / 3–4 аппетитных блинчика)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-56-romantichnye-sdobnye-buloc",
    title: "Романтичные сдобные булочки-сердечки с хрустящей сахарной корочкой (на 1 порцию / 2 красивые булочки)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: романтичные сдобные булочки-сердечки с хрустящей сахарной корочкой (на 1 порцию / 2 красивые булочки). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "2 красивые булочки",
      kzhbu: {"calories": 230, "proteins": 7.8, "fats": 4.5, "carbs": 42.0},
      semiFinishedProducts: ["Полуфабрикат теста для Романтичные сдобные булочки-сердечки с хрустящей сахарной корочкой (на 1 порцию / 2 красивые булочки)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-57-khrustyashchee-pechene-pal",
    title: "Хрустящее печенье-палочки в глазури из темного шоколада (на 1 порцию / 10–12 аккуратных палочек)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: хрустящее печенье-палочки в глазури из темного шоколада (на 1 порцию / 10–12 аккуратных палочек). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "10–12 аккуратных палочек",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Хрустящее печенье-палочки в глазури из темного шоколада (на 1 порцию / 10–12 аккуратных палочек)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-58-khrustyashchie-sloenye-pal",
    title: "Хрустящие слоеные палочки с ароматной ветчиной и тягучим сыром (на 1 порцию / 4–6 аккуратных палочек)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: хрустящие слоеные палочки с ароматной ветчиной и тягучим сыром (на 1 порцию / 4–6 аккуратных палочек). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "4–6 аккуратных палочек",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Хрустящие слоеные палочки с ароматной ветчиной и тягучим сыром (на 1 порцию / 4–6 аккуратных палочек)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-59-aromatnye-sloyki-ulitki-s",
    title: "Ароматные слойки-улитки с маковой начинкой из готового слоеного теста (на 1 порцию / 4 мини-улитки)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: ароматные слойки-улитки с маковой начинкой из готового слоеного теста (на 1 порцию / 4 мини-улитки). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "4 мини-улитки",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Ароматные слойки-улитки с маковой начинкой из готового слоеного теста (на 1 порцию / 4 мини-улитки)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-60-traditsionnye-balkarskie-k",
    title: "Традиционные балкарские хычины с нежной картофельно-сырной начинкой на тончайшем тесте (на 1 порцию / 2 румяные лепешки диаметром 16–18 см)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: традиционные балкарские хычины с нежной картофельно-сырной начинкой на тончайшем тесте (на 1 порцию / 2 румяные лепешки диаметром 16–18 см). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "2 румяные лепешки диаметром 16–18 см",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Традиционные балкарские хычины с нежной картофельно-сырной начинкой на тончайшем тесте (на 1 порцию / 2 румяные лепешки диаметром 16–18 см)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-61-nezhnoe-rassypchatoe-peche",
    title: "Нежное рассыпчатое печенье «Курабье бакинское» с яблочным повидлом в центре (на 1 порцию / 6–8 аккуратных печений)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: нежное рассыпчатое печенье «курабье бакинское» с яблочным повидлом в центре (на 1 порцию / 6–8 аккуратных печений). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "6–8 аккуратных печений",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Нежное рассыпчатое печенье «Курабье бакинское» с яблочным повидлом в центре (на 1 порцию / 6–8 аккуратных печений)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-62-izyskannyy-mini-tort-snike",
    title: "Изысканный мини-торт «Сникерс» с насыщенным шоколадным бисквитом, тягучей соленой карамелью, арахисом и кремом на основе творожного сыра (на 1 порцию / мини-форма или кулинарное кольцо диаметром 12 см)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: изысканный мини-торт «сникерс» с насыщенным шоколадным бисквитом, тягучей соленой карамелью, арахисом и кремом на основе творожного сыра (на 1 порцию / мини-форма или кулинарное кольцо диаметром 12 см). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "мини-форма или кулинарное кольцо диаметром 12 см",
      kzhbu: {"calories": 320, "proteins": 5.8, "fats": 17.5, "carbs": 35.0},
      semiFinishedProducts: ["Полуфабрикат теста для Изысканный мини-торт «Сникерс» с насыщенным шоколадным бисквитом, тягучей соленой карамелью, арахисом и кремом на основе творожного сыра (на 1 порцию / мини-форма или кулинарное кольцо диаметром 12 см)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-63-nezhnye-rassypchatye-pesoc",
    title: "Нежные рассыпчатые песочные рогалики с ароматной ореховой начинкой (на 1 порцию / 6–8 мини-рогаликов)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: нежные рассыпчатые песочные рогалики с ароматной ореховой начинкой (на 1 порцию / 6–8 мини-рогаликов). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "6–8 мини-рогаликов",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Нежные рассыпчатые песочные рогалики с ароматной ореховой начинкой (на 1 порцию / 6–8 мини-рогаликов)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-64-prazdnichnyy-novogodniy-pe",
    title: "Праздничный новогодний перевернутый тарт татен с карамелизированными мандаринами и пряным песочным тестом (на 1 порцию / мини-форма или сковорода со съемной ручкой диаметром 12–14 см)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: праздничный новогодний перевернутый тарт татен с карамелизированными мандаринами и пряным песочным тестом (на 1 порцию / мини-форма или сковорода со съемной ручкой диаметром 12–14 см). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "мини-форма или сковорода со съемной ручкой диаметром 12–14 см",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Праздничный новогодний перевернутый тарт татен с карамелизированными мандаринами и пряным песочным тестом (на 1 порцию / мини-форма или сковорода со съемной ручкой диаметром 12–14 см)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-65-prazdnichnye-shokoladnye-k",
    title: "Праздничные шоколадные капкейки «Елочки» с шапочками из крем-чиза и новогодним декором (на 1 порцию / 2 ароматных капкейка)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: праздничные шоколадные капкейки «елочки» с шапочками из крем-чиза и новогодним декором (на 1 порцию / 2 ароматных капкейка). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "2 ароматных капкейка",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Праздничные шоколадные капкейки «Елочки» с шапочками из крем-чиза и новогодним декором (на 1 порцию / 2 ароматных капкейка)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-66-prazdnichnye-profitroli-s",
    title: "Праздничные профитроли с нежным творожным сыром и слабосоленой красной рыбой (на 1 порцию / 4–5 аккуратных профитролей)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: праздничные профитроли с нежным творожным сыром и слабосоленой красной рыбой (на 1 порцию / 4–5 аккуратных профитролей). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "4–5 аккуратных профитролей",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Праздничные профитроли с нежным творожным сыром и слабосоленой красной рыбой (на 1 порцию / 4–5 аккуратных профитролей)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-67-pesochnoe-pechene-s-yarkim",
    title: "Песочное печенье с яркими дольками апельсина сверху (на 1 порцию / 6–8 аккуратных печений)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: песочное печенье с яркими дольками апельсина сверху (на 1 порцию / 6–8 аккуратных печений). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "6–8 аккуратных печений",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Песочное печенье с яркими дольками апельсина сверху (на 1 порцию / 6–8 аккуратных печений)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-68-klassicheskiy-angliyskiy-v",
    title: "Классический английский ванильный пудинг с шелковистой текстурой (на 1 порцию / 1 креманка)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: классический английский ванильный пудинг с шелковистой текстурой (на 1 порцию / 1 креманка). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "1 креманка",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Классический английский ванильный пудинг с шелковистой текстурой (на 1 порцию / 1 креманка)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-69-syrnaya-lepeshka-na-skovor",
    title: "Сырная лепешка на сковороде с начинкой из нежного творога и расплавленного сыра (на 1 порцию / 1 румяная лепешка диаметром 16–18 см)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: сырная лепешка на сковороде с начинкой из нежного творога и расплавленного сыра (на 1 порцию / 1 румяная лепешка диаметром 16–18 см). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "1 румяная лепешка диаметром 16–18 см",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Сырная лепешка на сковороде с начинкой из нежного творога и расплавленного сыра (на 1 порцию / 1 румяная лепешка диаметром 16–18 см)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-70-tykvennaya-zapekanka-v-duk",
    title: "Тыквенная запеканка в духовке с кремовой текстурой (на 1 порцию / 1 порционная форма или керамический рамекин)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: тыквенная запеканка в духовке с кремовой текстурой (на 1 порцию / 1 порционная форма или керамический рамекин). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "1 порционная форма или керамический рамекин",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Тыквенная запеканка в духовке с кремовой текстурой (на 1 порцию / 1 порционная форма или керамический рамекин)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-71-uzbekskaya-samsa-s-sochnoy",
    title: "Узбекская самса с сочной тыквой, луком и ароматными специями в хрустящем слоеном тесте (на 1 порцию / 3–4 крупные фигурные самсушки)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: узбекская самса с сочной тыквой, луком и ароматными специями в хрустящем слоеном тесте (на 1 порцию / 3–4 крупные фигурные самсушки). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "3–4 крупные фигурные самсушки",
      kzhbu: {"calories": 280, "proteins": 11.2, "fats": 15.0, "carbs": 25.0},
      semiFinishedProducts: ["Полуфабрикат теста для Узбекская самса с сочной тыквой, луком и ароматными специями в хрустящем слоеном тесте (на 1 порцию / 3–4 крупные фигурные самсушки)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-72-domashnie-pshenichnye-tort",
    title: "Домашние пшеничные тортильи на сковороде с мягкой эластичной текстурой (на 1 порцию / 4 румяные лепешки диаметром 16–18 см)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: домашние пшеничные тортильи на сковороде с мягкой эластичной текстурой (на 1 порцию / 4 румяные лепешки диаметром 16–18 см). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "4 румяные лепешки диаметром 16–18 см",
      kzhbu: {"calories": 320, "proteins": 5.8, "fats": 17.5, "carbs": 35.0},
      semiFinishedProducts: ["Полуфабрикат теста для Домашние пшеничные тортильи на сковороде с мягкой эластичной текстурой (на 1 порцию / 4 румяные лепешки диаметром 16–18 см)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-73-klassicheskaya-uzbekskaya",
    title: "Классическая узбекская самса с сочным мясным фаршем, луком и курдючным жиром в хрустящем слоеном тесте (на 1 порцию / 3–4 крупные фигурные самсушки)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: классическая узбекская самса с сочным мясным фаршем, луком и курдючным жиром в хрустящем слоеном тесте (на 1 порцию / 3–4 крупные фигурные самсушки). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "3–4 крупные фигурные самсушки",
      kzhbu: {"calories": 280, "proteins": 11.2, "fats": 15.0, "carbs": 25.0},
      semiFinishedProducts: ["Полуфабрикат теста для Классическая узбекская самса с сочным мясным фаршем, луком и курдючным жиром в хрустящем слоеном тесте (на 1 порцию / 3–4 крупные фигурные самсушки)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-74-chebureki-na-skovorode-s-n",
    title: "Чебуреки на сковороде с начинкой из тягучего сыра и зелени (на 1 порцию / 2 румяных чебурека)",
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
      dishYield: "2 румяных чебурека",
      kzhbu: {"calories": 295, "proteins": 12.8, "fats": 16.5, "carbs": 24.5},
      semiFinishedProducts: ["Полуфабрикат теста для Чебуреки на сковороде с начинкой из тягучего сыра и зелени (на 1 порцию / 2 румяных чебурека)", "Подготовленная начинка / декор"],
      technologicalProcess: "Заваривание тугой мучной основы, гидратация мясного фарша ледяной водой, формование полумесяцев с герметизацией и фритирование.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-75-smetanniki-po-klassichesko",
    title: "Сметанники по классическому бабушкиному рецепту с нежнейшим тестом и пышной сметанной шапочкой (на 1 порцию / 3–4 румяных сметанника)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: сметанники по классическому бабушкиному рецепту с нежнейшим тестом и пышной сметанной шапочкой (на 1 порцию / 3–4 румяных сметанника). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "3–4 румяных сметанника",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Сметанники по классическому бабушкиному рецепту с нежнейшим тестом и пышной сметанной шапочкой (на 1 порцию / 3–4 румяных сметанника)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-76-bystryy-domashniy-medovik",
    title: "Быстрый домашний медовик на сковороде с нежным заварным кремом (на 1 порцию / 1 мини-тортик диаметром 12–14 см из 4–5 коржей)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: быстрый домашний медовик на сковороде с нежным заварным кремом (на 1 порцию / 1 мини-тортик диаметром 12–14 см из 4–5 коржей). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "1 мини-тортик диаметром 12–14 см из 4–5 коржей",
      kzhbu: {"calories": 320, "proteins": 5.8, "fats": 17.5, "carbs": 35.0},
      semiFinishedProducts: ["Полуфабрикат теста для Быстрый домашний медовик на сковороде с нежным заварным кремом (на 1 порцию / 1 мини-тортик диаметром 12–14 см из 4–5 коржей)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-77-klassicheskiy-italyanskiy",
    title: "Классический итальянский десерт «Тирамису» с нежным кремом сабайон и печеньем савоярди (на 1 порцию / 1 широкая креманка или бокал)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: классический итальянский десерт «тирамису» с нежным кремом сабайон и печеньем савоярди (на 1 порцию / 1 широкая креманка или бокал). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "1 широкая креманка или бокал",
      kzhbu: {"calories": 320, "proteins": 5.8, "fats": 17.5, "carbs": 35.0},
      semiFinishedProducts: ["Полуфабрикат теста для Классический итальянский десерт «Тирамису» с нежным кремом сабайон и печеньем савоярди (на 1 порцию / 1 широкая креманка или бокал)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "16–18°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-78-mini-tort-pavlova-s-khrust",
    title: "Мини-торт «Павлова» с хрустящей безешной корочкой, нежным суфле внутри и кремом из маскарпоне (на 1 порцию / 2 пирожных-меренги)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: мини-торт «павлова» с хрустящей безешной корочкой, нежным суфле внутри и кремом из маскарпоне (на 1 порцию / 2 пирожных-меренги). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "2 пирожных-меренги",
      kzhbu: {"calories": 320, "proteins": 5.8, "fats": 17.5, "carbs": 35.0},
      semiFinishedProducts: ["Полуфабрикат теста для Мини-торт «Павлова» с хрустящей безешной корочкой, нежным суфле внутри и кремом из маскарпоне (на 1 порцию / 2 пирожных-меренги)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "16–18°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-79-klassicheskie-eklery-s-khr",
    title: "Классические эклеры с хрустящей корочкой кракелюра, заварным кремом пломбир и глянцевой глазурью (на 1 порцию / 3–4 аккуратных эклера)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: классические эклеры с хрустящей корочкой кракелюра, заварным кремом пломбир и глянцевой глазурью (на 1 порцию / 3–4 аккуратных эклера). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "3–4 аккуратных эклера",
      kzhbu: {"calories": 320, "proteins": 5.8, "fats": 17.5, "carbs": 35.0},
      semiFinishedProducts: ["Полуфабрикат теста для Классические эклеры с хрустящей корочкой кракелюра, заварным кремом пломбир и глянцевой глазурью (на 1 порцию / 3–4 аккуратных эклера)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-80-khrustyashchaya-vostochnay",
    title: "Хрустящая восточная сладость «Тулумба» во фритюре с медовым сиропом (на 1 порцию / 6–8 золотистых трубочек)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: хрустящая восточная сладость «тулумба» во фритюре с медовым сиропом (на 1 порцию / 6–8 золотистых трубочек). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "6–8 золотистых трубочек",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Хрустящая восточная сладость «Тулумба» во фритюре с медовым сиропом (на 1 порцию / 6–8 золотистых трубочек)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-81-aromatnye-tsitrusovye-maff",
    title: "Ароматные цитрусовые маффины с сочной апельсиновой цедрой и нежной влажной текстурой (на 1 порцию / 2 пышных маффина в бумажных капсулах)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: ароматные цитрусовые маффины с сочной апельсиновой цедрой и нежной влажной текстурой (на 1 порцию / 2 пышных маффина в бумажных капсулах). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "2 пышных маффина в бумажных капсулах",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Ароматные цитрусовые маффины с сочной апельсиновой цедрой и нежной влажной текстурой (на 1 порцию / 2 пышных маффина в бумажных капсулах)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-82-vareniki-s-klassicheskoy-k",
    title: "Вареники с классической картофельно-творожной начинкой и золотистым луковым обжаром (на 1 порцию / 12–15 аккуратных вареников)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: вареники с классической картофельно-творожной начинкой и золотистым луковым обжаром (на 1 порцию / 12–15 аккуратных вареников). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "12–15 аккуратных вареников",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Вареники с классической картофельно-творожной начинкой и золотистым луковым обжаром (на 1 порцию / 12–15 аккуратных вареников)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-83-uzbekskaya-samsa-s-sochnoy",
    title: "Узбекская самса с сочной рубленой бараниной и луком в хрустящем слоеном тесте (на 1 порцию / 3–4 крупные фигурные самсушки)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: узбекская самса с сочной рубленой бараниной и луком в хрустящем слоеном тесте (на 1 порцию / 3–4 крупные фигурные самсушки). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "3–4 крупные фигурные самсушки",
      kzhbu: {"calories": 280, "proteins": 11.2, "fats": 15.0, "carbs": 25.0},
      semiFinishedProducts: ["Полуфабрикат теста для Узбекская самса с сочной рубленой бараниной и луком в хрустящем слоеном тесте (на 1 порцию / 3–4 крупные фигурные самсушки)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-84-uzbekskaya-sloenaya-katlam",
    title: "Узбекская слоеная катлама с луком на сковороде (на 1 порцию / 2 румяные хрустящие лепешки)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: узбекская слоеная катлама с луком на сковороде (на 1 порцию / 2 румяные хрустящие лепешки). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "2 румяные хрустящие лепешки",
      kzhbu: {"calories": 280, "proteins": 11.2, "fats": 15.0, "carbs": 25.0},
      semiFinishedProducts: ["Полуфабрикат теста для Узбекская слоеная катлама с луком на сковороде (на 1 порцию / 2 румяные хрустящие лепешки)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-85-vozdushnye-i-myagkie-kazak",
    title: "Воздушные и мягкие казахские баурсаки на кефире с золотистой корочкой и нежным мякишем (на 1 порцию / 10–12 румяных пышек)",
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
      dishYield: "10–12 румяных пышек",
      kzhbu: {"calories": 275, "proteins": 13.5, "fats": 16.8, "carbs": 18.0},
      semiFinishedProducts: ["Полуфабрикат теста для Воздушные и мягкие казахские баурсаки на кефире с золотистой корочкой и нежным мякишем (на 1 порцию / 10–12 румяных пышек)", "Подготовленная начинка / декор"],
      technologicalProcess: "Слепая термообработка песочной корзинки, наполнение мясной пассеровкой, заливка альбумин-сливочной эмульсией и запекание.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-86-belyashi-s-myasnym-farshem",
    title: "Беляши с мясным фаршем и луком, жареные на сковороде до аппетитной золотистой корочки (на 1 порцию / 2 крупных пышных беляша)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: беляши с мясным фаршем и луком, жареные на сковороде до аппетитной золотистой корочки (на 1 порцию / 2 крупных пышных беляша). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "2 крупных пышных беляша",
      kzhbu: {"calories": 280, "proteins": 11.2, "fats": 15.0, "carbs": 25.0},
      semiFinishedProducts: ["Полуфабрикат теста для Беляши с мясным фаршем и луком, жареные на сковороде до аппетитной золотистой корочки (на 1 порцию / 2 крупных пышных беляша)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-87-klassicheskie-frantsuzskie",
    title: "Классические французские круассаны с воздушной слоистой структурой и хрустящей корочкой (на 1 порцию / 2 мини-круассана)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: классические французские круассаны с воздушной слоистой структурой и хрустящей корочкой (на 1 порцию / 2 мини-круассана). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "2 мини-круассана",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Классические французские круассаны с воздушной слоистой структурой и хрустящей корочкой (на 1 порцию / 2 мини-круассана)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-88-myagkie-domashnie-pryaniki",
    title: "Мягкие домашние пряники на сметане с сахарной глазурью (на 1 порцию / 8–10 ароматных пряников)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: мягкие домашние пряники на сметане с сахарной глазурью (на 1 порцию / 8–10 ароматных пряников). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "8–10 ароматных пряников",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Мягкие домашние пряники на сметане с сахарной глазурью (на 1 порцию / 8–10 ароматных пряников)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-89-khrustyashchie-pirozhnye-m",
    title: "Хрустящие пирожные-меренги с вареной сгущенкой и свежими слайсами киви (на 1 порцию / 2–3 изящных пирожных)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: хрустящие пирожные-меренги с вареной сгущенкой и свежими слайсами киви (на 1 порцию / 2–3 изящных пирожных). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "2–3 изящных пирожных",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Хрустящие пирожные-меренги с вареной сгущенкой и свежими слайсами киви (на 1 порцию / 2–3 изящных пирожных)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-90-karamelnyy-pirog-taten-s-a",
    title: "Карамельный пирог «Татен» с ароматными дольками мандаринов и пряной ноткой (на 1 порцию / 1 мини-пирог диаметром 12–14 см)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: карамельный пирог «татен» с ароматными дольками мандаринов и пряной ноткой (на 1 порцию / 1 мини-пирог диаметром 12–14 см). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "1 мини-пирог диаметром 12–14 см",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Карамельный пирог «Татен» с ароматными дольками мандаринов и пряной ноткой (на 1 порцию / 1 мини-пирог диаметром 12–14 см)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-91-italyanskie-mindalnye-pech",
    title: "Итальянские миндальные печенья «Амаретти» с хрустящей потрескавшейся корочкой и нежной влажной текстурой внутри (на 1 порцию / 8–10 изящных печений)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: итальянские миндальные печенья «амаретти» с хрустящей потрескавшейся корочкой и нежной влажной текстурой внутри (на 1 порцию / 8–10 изящных печений). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "8–10 изящных печений",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Итальянские миндальные печенья «Амаретти» с хрустящей потрескавшейся корочкой и нежной влажной текстурой внутри (на 1 порцию / 8–10 изящных печений)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-92-vozdushnye-klassicheskie-p",
    title: "Воздушные классические пирожные «Безе» (французская меренга) с хрустящей корочкой и тающим нежным суфле внутри (на 1 порцию / 6–8 мини-пирожных)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: воздушные классические пирожные «безе» (французская меренга) с хрустящей корочкой и тающим нежным суфле внутри (на 1 порцию / 6–8 мини-пирожных). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "6–8 мини-пирожных",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Воздушные классические пирожные «Безе» (французская меренга) с хрустящей корочкой и тающим нежным суфле внутри (на 1 порцию / 6–8 мини-пирожных)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-93-uralskie-shangi-s-nezhnoy",
    title: "Уральские шаньги с нежной картофельно-сырной начинкой на мягком дрожжевом тесте (на 1 порцию / 2 румяные мини-шаньги)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: уральские шаньги с нежной картофельно-сырной начинкой на мягком дрожжевом тесте (на 1 порцию / 2 румяные мини-шаньги). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "2 румяные мини-шаньги",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Уральские шаньги с нежной картофельно-сырной начинкой на мягком дрожжевом тесте (на 1 порцию / 2 румяные мини-шаньги)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-94-kalachi-s-nezhneyshey-slad",
    title: "Калачи с нежнейшей сладкой творожной начинкой из сдобного дрожжевого теста (на 1 порцию / 2 крупных пышных калача)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: калачи с нежнейшей сладкой творожной начинкой из сдобного дрожжевого теста (на 1 порцию / 2 крупных пышных калача). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "2 крупных пышных калача",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Калачи с нежнейшей сладкой творожной начинкой из сдобного дрожжевого теста (на 1 порцию / 2 крупных пышных калача)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-95-domashnie-energeticheskie",
    title: "Домашние энергетические батончики без выпечки из сухофруктов, орехов и семян с медовой связкой (на 1 порцию / 2 питательных батончика)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: домашние энергетические батончики без выпечки из сухофруктов, орехов и семян с медовой связкой (на 1 порцию / 2 питательных батончика). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "2 питательных батончика",
      kzhbu: {"calories": 230, "proteins": 7.8, "fats": 4.5, "carbs": 42.0},
      semiFinishedProducts: ["Полуфабрикат теста для Домашние энергетические батончики без выпечки из сухофруктов, орехов и семян с медовой связкой (на 1 порцию / 2 питательных батончика)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-96-turetskie-bubliki-simity-s",
    title: "Турецкие бублики «Симиты» с хрустящей корочкой из кунжута и тягучим мякишем (на 1 порцию / 2 румяных хрустящих симита)",
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
      dishYield: "2 румяных хрустящих симита",
      kzhbu: {"calories": 275, "proteins": 13.5, "fats": 16.8, "carbs": 18.0},
      semiFinishedProducts: ["Полуфабрикат теста для Турецкие бублики «Симиты» с хрустящей корочкой из кунжута и тягучим мякишем (на 1 порцию / 2 румяных хрустящих симита)", "Подготовленная начинка / декор"],
      technologicalProcess: "Слепая термообработка песочной корзинки, наполнение мясной пассеровкой, заливка альбумин-сливочной эмульсией и запекание.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-97-shokoladnyy-tort-praga-po",
    title: "Шоколадный торт «Прага» по ГОСТу с нежным бисквитом, масляно-шоколадным кремом и абрикосовой глазурью (на 1 порцию / 1 мини-торт диаметром 12 см и весом около 300–350 г)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: шоколадный торт «прага» по госту с нежным бисквитом, масляно-шоколадным кремом и абрикосовой глазурью (на 1 порцию / 1 мини-торт диаметром 12 см и весом около 300–350 г). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "1 мини-торт диаметром 12 см и весом около 300–350 г",
      kzhbu: {"calories": 320, "proteins": 5.8, "fats": 17.5, "carbs": 35.0},
      semiFinishedProducts: ["Полуфабрикат теста для Шоколадный торт «Прага» по ГОСТу с нежным бисквитом, масляно-шоколадным кремом и абрикосовой глазурью (на 1 порцию / 1 мини-торт диаметром 12 см и весом около 300–350 г)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-98-pesochnye-tartaletki-so-sl",
    title: "Песочные тарталетки со сливочным кремом и свежими ягодами клубники (на 1 порцию / 2 мини-тарталетки)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: песочные тарталетки со сливочным кремом и свежими ягодами клубники (на 1 порцию / 2 мини-тарталетки). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "2 мини-тарталетки",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Песочные тарталетки со сливочным кремом и свежими ягодами клубники (на 1 порцию / 2 мини-тарталетки)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
  {
    id: "pastry-req-99-vozdushnoe-nezhnoe-sufle-s",
    title: "Воздушное нежное суфле с насыщенным карамельным вкусом и тающей текстурой (на 1 порцию / 2 креманки)",
    category: 'pastry',
    description: "Изысканный кулинарный рецепт: воздушное нежное суфле с насыщенным карамельным вкусом и тающей текстурой (на 1 порцию / 2 креманки). Проверенная рецептура с идеальным соотношением сухих и жидких ингредиентов, обеспечивающая непревзойденный вкус, аппетитную структуру и ресторанную подачу.",
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
      dishYield: "2 креманки",
      kzhbu: {"calories": 250, "proteins": 7.5, "fats": 11.0, "carbs": 31.0},
      semiFinishedProducts: ["Полуфабрикат теста для Воздушное нежное суфле с насыщенным карамельным вкусом и тающей текстурой (на 1 порцию / 2 креманки)", "Подготовленная начинка / декор"],
      technologicalProcess: "Замес и пластификация основы, порционное формование и управляемая термообработка.",
      servingTemperature: "65–70°C",
      storageConditions: "При температуре +2...+6°C не более 24-48 часов или подавать свежевыпеченным."
    }
  },
];
