import { Recipe } from '../../types';
import { PASTRY_COLLECTION_1 } from './pastry_collection_1';
import { PASTRY_COLLECTION_2 } from './pastry_collection_2';

const BASE_PASTRY_RECIPES: Recipe[] = [
  {
    id: 'adjaruli-khachapuri',
    title: 'Хачапури по-аджарски',
    category: 'pastry',
    description: 'Воздушная дрожжевая лодочка с сырными бортиками, тягучей начинкой из сулугуни, сливочным маслом и шелковистым яичным желтком.',
    prepTime: 30,
    cookTime: 15,
    difficulty: 'Средне',
    servings: 2,
    tags: ['Выпечка', 'Сыр', 'Грузинская кухня', 'Хачапури'],
    ingredients: [
      { name: 'Мука пшеничная высший сорт', amount: 350, unit: 'г', coldWastePercent: 1, heatLossPercent: 10, estimatedCostPerKg: 70, category: 'Мука' },
      { name: 'Молоко или вода теплая', amount: 200, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 85, category: 'Жидкости' },
      { name: 'Дрожжи сухие быстродействующие', amount: 5, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 800, category: 'Бакалея' },
      { name: 'Сыр Сулугуни', amount: 250, unit: 'г', coldWastePercent: 2, heatLossPercent: 8, estimatedCostPerKg: 750, category: 'Сыры' },
      { name: 'Сыр Имеретинский (или адыгейский / моцарелла)', amount: 200, unit: 'г', coldWastePercent: 2, heatLossPercent: 8, estimatedCostPerKg: 650, category: 'Сыры' },
      { name: 'Яйца куриные (2 в начинку, 1 для смазывания)', amount: 3, unit: 'шт', coldWastePercent: 12, heatLossPercent: 5, estimatedCostPerKg: 160, category: 'Яйца' },
      { name: 'Сливочное масло 82.5%', amount: 50, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 950, category: 'Масла' },
      { name: 'Сахар и соль', amount: 1, unit: 'ч. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 50, category: 'Бакалея' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'В теплой воде или молоке растворите дрожжи и сахар. Просейте муку с солью, добавьте столовую ложку растительного масла и замесите мягкое, шелковистое тесто. Оставьте в теплом месте на 45 минут.',
        timerSeconds: 2700,
        tip: 'Не забивайте тесто мукой — оно должно быть живым и слегка липнуть к рукам.'
      },
      {
        stepNumber: 2,
        instruction: 'Натрите оба сыра на крупной терке, смешайте с 2-3 столовыми ложками холодной воды или молока, чтобы начинка при выпечке оставалась кремовой и тянущейся.',
        timerSeconds: 180,
        tip: 'Добавление капли воды в сыр предотвратит его пересыхание и образование резиновой корки.'
      },
      {
        stepNumber: 3,
        instruction: 'Разделите тесто на 2 шара, раскатайте в овальные пласты толщиной 5 мм. По краям выложите дорожки из тертого сыра, заверните бортики к центру и защипните концы, сформировав лодочки с сырными бортиками.',
        timerSeconds: 360,
        tip: 'Сыр внутри бортиков — признак настоящего ресторанного аджарского хачапури.'
      },
      {
        stepNumber: 4,
        instruction: 'Щедро наполните центр лодочки оставшейся сырной смесью. Смажьте бортики взбитым яйцом. Выпекайте в духовке, предварительно разогретой до 240°C, в течение 12-14 минут до золотистой корочки.',
        timerSeconds: 780,
        tip: 'Максимально высокая температура духовки гарантирует пышность теста и сочность сыра.'
      },
      {
        stepNumber: 5,
        instruction: 'Достаньте хачапури, сделайте ложкой углубление в центре сыра, выложите яичный желток и 2 кусочка сливочного масла. Верните в духовку ровно на 1 минуту.',
        timerSeconds: 60,
        tip: 'Желток должен прогреться, но остаться абсолютно жидким!'
      },
      {
        stepNumber: 6,
        instruction: 'Едят хачапури руками: отламывают хрустящий уголок бортика, перемешивают им сыр с горячим маслом и желтком в единый соус, и макают.',
        tip: 'Подавать немедленно горячим!'
      }
    ],
    chefSecrets: [
      'Идеальная пропорция сыра: 60% сулугуни (тягучесть и соленость) и 40% имеретинского (сливочность).',
      'Выпечка на пекарском камне или перевернутом горячем противне обеспечивает ровный подъем.',
      'Сыр в бортиках предотвращает высыхание теста по краям.'
    ],
    techCard: {
      dishYield: '380 г на 1 лодочку',
      kzhbu: {
        calories: 315,
        proteins: 16.2,
        fats: 17.5,
        carbs: 23.4
      },
      semiFinishedProducts: ['Тесто дрожжевое расстоенное', 'Сырная смесь сулугуни-имеретинский'],
      technologicalProcess: 'Выпечка при температуре 230-250°C. Подача незамедлительная.',
      servingTemperature: '65-70°C',
      storageConditions: 'Полуфабрикат в заморозке до 30 дней. Готовое блюдо хранению не подлежит.'
    }
  },
  {
    id: 'italian-pizza-neapolitan',
    title: 'Неаполитанская пицца Маргарита (Pizza Napoletana)',
    category: 'pastry',
    description: 'Икона мировой кухни: пышные пятнистые леопардовые бортики (cornicione), сладкие томаты сорта Сан-Марцано, сливочная моцарелла fior di latte, свежий зеленый базилик и оливковое масло extra virgin.',
    prepTime: 30,
    cookTime: 10,
    difficulty: 'Профи',
    servings: 2,
    tags: ['Пицца', 'Италия', 'Выпечка', 'Моцарелла', 'Базилик'],
    ingredients: [
      { name: 'Мука мягких сортов пшеницы типа 00 (Caputo)', amount: 320, unit: 'г', coldWastePercent: 1, heatLossPercent: 12, estimatedCostPerKg: 180, category: 'Мука' },
      { name: 'Вода питьевая ледяная', amount: 210, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 5, category: 'Жидкости' },
      { name: 'Дрожжи свежие прессованные', amount: 2, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 200, category: 'Бакалея' },
      { name: 'Томаты Сан-Марцано в собственном соку (D.O.P.)', amount: 200, unit: 'г', coldWastePercent: 0, heatLossPercent: 8, estimatedCostPerKg: 380, category: 'Овощи' },
      { name: 'Сыр Моцарелла Фьор ди Латте', amount: 180, unit: 'г', coldWastePercent: 0, heatLossPercent: 10, estimatedCostPerKg: 850, category: 'Сыры' },
      { name: 'Свежий зеленый базилик', amount: 15, unit: 'г', coldWastePercent: 5, heatLossPercent: 0, estimatedCostPerKg: 1200, category: 'Зелень' },
      { name: 'Масло оливковое первого холодного отжима (EVOO)', amount: 20, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 950, category: 'Масла' },
      { name: 'Морская соль мелкая', amount: 8, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 40, category: 'Специи' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Растворите микродозу дрожжей (2 г) в воде. Постепенно подсыпайте муку и соль. Замесите тесто с влажностью (гидратацией) 65%. Оставьте на 24 часа для холодной ферментации в холодильнике.',
        timerSeconds: 900,
        tip: 'Длительная холодная ферментация разрушает сложные сахара, делая тесто невероятно легким для пищеварения.'
      },
      {
        stepNumber: 2,
        instruction: 'Разделите тесто на шарики (панетти) по 260 г, уложите в лоток и дайте согреться и расстояться при комнатной температуре 3 часа перед выпечкой.',
        timerSeconds: 180,
        tip: 'Тесто перед растяжкой должно быть комнатной температуры, иначе оно будет стягиваться обратно.'
      },
      {
        stepNumber: 3,
        instruction: 'Растягивайте основу руками на посыпанном семолиной столе: пальцами выдавливайте пузырьки воздуха от центра к бортикам, формируя тонкий центр (2 мм) и пышный бортик (cornicione). Скалку не использовать ни в коем случае!',
        timerSeconds: 120,
        tip: 'Воздух, бережно выдавленный в бортик, превратится в духовой печи в роскошные пузыри.'
      },
      {
        stepNumber: 4,
        instruction: 'Томаты Сан-Марцано разомните руками с щепоткой соли (не блендером!). Выложите спиральными круговыми движениями 2-3 ложки соуса на основу.',
        timerSeconds: 60,
        tip: 'Блендер измельчает семена, придавая томатному соусу горечь, поэтому итальянцы мнут их только руками.'
      },
      {
        stepNumber: 5,
        instruction: 'Разложите порванную руками и отжатую от рассола моцареллу, сбрызните оливковым маслом. Выпекайте на предварительно раскаленном пекарском камне или перевернутом противне при максимальной температуре духовки (250-300°C) 6-8 минут.',
        timerSeconds: 420,
        tip: 'Чем горячее духовка, тем пышнее леопардовый бортик.'
      },
      {
        stepNumber: 6,
        instruction: 'Сразу после духовки украсьте свежими листьями базилика и сбрызните несколькими каплями оливкового масла extra virgin. Нарезайте колесом для пиццы.',
        tip: 'Базилик кладется на горячую пиццу, раскрывая волшебный эфирный аромат.'
      }
    ],
    chefSecrets: [
      'Мука тонкого помола типа "00" содержит отборную эластичную клейковину, выдерживающую растяжку до прозрачности.',
      'Только ручная формовка: скалка убивает драгоценный углекислый газ в тесте.',
      'Отжим моцареллы на дуршлаге за 2 часа до пиццы предотвращает образование водяной лужи в центре пиццы.'
    ],
    techCard: {
      dishYield: '380 г (пицца диаметром 30 см)',
      kzhbu: {
        calories: 235,
        proteins: 9.8,
        fats: 8.5,
        carbs: 29.8
      },
      semiFinishedProducts: ['Шарики теста пицца холодной ферментации', 'Томатный соус сан-марцано'],
      technologicalProcess: 'Выпечка в высокотемпературной печи (от 280°C и выше).',
      servingTemperature: '70-75°C',
      storageConditions: 'Тесто хранится при +2...+4°C до 72 часов. Готовая пицца отпускается сразу.'
    }
  },
  {
    id: 'ossetian-pie-meat',
    title: 'Осетинский пирог с рубленым мясом (Фыдджин)',
    category: 'pastry',
    description: 'Гордость кавказской кухни: закрытый круглый пирог из тончайшего теста с сочнейшим говяжьим фаршем, луком, чесноком, острым перцем и кипящим мясным бульоном внутри.',
    prepTime: 30,
    cookTime: 25,
    difficulty: 'Средне',
    servings: 4,
    tags: ['Осетинские пироги', 'Выпечка', 'Мясо', 'Кавказ', 'Говядина'],
    ingredients: [
      { name: 'Мука пшеничная в/с', amount: 400, unit: 'г', coldWastePercent: 1, heatLossPercent: 10, estimatedCostPerKg: 70, category: 'Мука' },
      { name: 'Кефир или теплое молоко с водой', amount: 240, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 75, category: 'Молочные' },
      { name: 'Дрожжи сухие', amount: 4, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 800, category: 'Бакалея' },
      { name: 'Говяжья мякоть (или говядина со свининой)', amount: 500, unit: 'г', coldWastePercent: 5, heatLossPercent: 20, estimatedCostPerKg: 720, category: 'Мясо' },
      { name: 'Лук репчатый сочный', amount: 250, unit: 'г', coldWastePercent: 12, heatLossPercent: 15, estimatedCostPerKg: 40, category: 'Овощи' },
      { name: 'Чеснок свежий', amount: 4, unit: 'зубчик', coldWastePercent: 15, heatLossPercent: 0, estimatedCostPerKg: 300, category: 'Овощи' },
      { name: 'Бульон говяжий крепкий горячий', amount: 100, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 40, category: 'Жидкости' },
      { name: 'Сливочное масло для обильной смазки', amount: 50, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 950, category: 'Масла' },
      { name: 'Острый красный перец и тимьян', amount: 1, unit: 'ч. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 900, category: 'Специи' },
      { name: 'Соль поваренная', amount: 1.5, unit: 'ч. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 25, category: 'Специи' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Замесите мягкое податливое тесто на кефире с дрожжами и щепоткой сахара и соли. Оставьте в тепле на 40 минут для подъема.',
        timerSeconds: 2400,
        tip: 'Кефир делает осетинское тесто шелковистым и нежным.'
      },
      {
        stepNumber: 2,
        instruction: 'Мясо порубите ножом или пропустите через крупную сетку. Смешайте с мелко нарубленным луком, давленым чесноком, перцем, солью и половиной бульона. Тщательно вымешайте сочный фарш.',
        timerSeconds: 480,
        tip: 'Фарш для фыдджина должен быть влажным и почти жидким от лука и бульона.'
      },
      {
        stepNumber: 3,
        instruction: 'Разделите тесто на 2 части (нижняя чуть больше). Раскатайте нижний пласт, выложите в круглую форму диаметром 28-30 см с бортиками. Равномерно распределите фарш.',
        timerSeconds: 240,
        tip: 'Толщина теста должна быть минимальной (около 2-3 мм).'
      },
      {
        stepNumber: 4,
        instruction: 'Верхний пласт раскатайте еще тоньше, сделайте в центре фигурные надрезы для выхода пара. Накройте начинку и тщательно защипните по кругу, срезая излишки теста скалкой.',
        timerSeconds: 240,
        tip: 'Надрезы в верхнем корже обязательны, иначе кипящий бульон разорвет пирог.'
      },
      {
        stepNumber: 5,
        instruction: 'Выпекайте при 220°C 15 минут. Затем через отверстия в центре влейте 3-4 столовые ложки горячего бульона и допекайте еще 10 минут до глубокого золотистого цвета.',
        timerSeconds: 1500,
        tip: 'Доливание бульона прямо в процессе выпечки — фирменный осетинский секрет невероятной сочности фыдджина.'
      },
      {
        stepNumber: 6,
        instruction: 'Горячий пирог немедленно и щедро смажьте кусочком сливочного масла. Нарезайте клиньями, не переворачивая пирог, чтобы не вытек бульон.',
        tip: 'Осетинские пироги традиционно подают стопкой по 3 штуки.'
      }
    ],
    chefSecrets: [
      'Тесто в осетинском пироге должно быть тончайшим, а начинки — в 2 раза больше веса теста.',
      'Доливание горячего бульона в отверстие во время выпечки создает внутри настоящий кулинарный вулкан вкуса.',
      'Обильная смазка сливочным маслом делает хрустящую корочку мягкой и благоухающей.'
    ],
    techCard: {
      dishYield: '750 г (целый пирог на 4 порции, по 185г)',
      kzhbu: {
        calories: 250,
        proteins: 13.8,
        fats: 13.2,
        carbs: 19.5
      },
      semiFinishedProducts: ['Тесто на кефире расстоенное', 'Фарш говяжий сочный'],
      technologicalProcess: 'Выпечка в печи при 220-230°C в течение 25 минут.',
      servingTemperature: '70°C',
      storageConditions: 'Реализация в течение 3 часов после выпечки.'
    }
  },
  {
    id: 'pelmeni-siberian',
    title: 'Сибирские пельмени ручной лепки (три мяса)',
    category: 'pastry',
    description: 'Аутентичные пельмени по сибирскому рецепту: тонкое эластичное тесто на ледяной воде и начинка из говядины, свинины и баранины с добавлением колотого льда для непревзойденной сочности.',
    prepTime: 45,
    cookTime: 10,
    difficulty: 'Средне',
    servings: 4,
    tags: ['Пельмени', 'Сибирь', 'Русская кухня', 'Мясо', 'Классика'],
    ingredients: [
      { name: 'Мука пшеничная высший сорт', amount: 450, unit: 'г', coldWastePercent: 1, heatLossPercent: 0, estimatedCostPerKg: 70, category: 'Мука' },
      { name: 'Вода ледяная', amount: 180, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 5, category: 'Жидкости' },
      { name: 'Яйцо куриное', amount: 1, unit: 'шт', coldWastePercent: 12, heatLossPercent: 0, estimatedCostPerKg: 160, category: 'Яйца' },
      { name: 'Говядина мякоть', amount: 250, unit: 'г', coldWastePercent: 5, heatLossPercent: 18, estimatedCostPerKg: 750, category: 'Мясо' },
      { name: 'Свинина полужирная', amount: 200, unit: 'г', coldWastePercent: 5, heatLossPercent: 20, estimatedCostPerKg: 480, category: 'Мясо' },
      { name: 'Баранина или жирная грудинка', amount: 150, unit: 'г', coldWastePercent: 5, heatLossPercent: 20, estimatedCostPerKg: 700, category: 'Мясо' },
      { name: 'Лук репчатый сочный', amount: 200, unit: 'г', coldWastePercent: 12, heatLossPercent: 15, estimatedCostPerKg: 40, category: 'Овощи' },
      { name: 'Колотый лед или ледяная вода в фарш', amount: 70, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 5, category: 'Жидкости' },
      { name: 'Черный свежемолотый перец', amount: 1, unit: 'ч. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1000, category: 'Специи' },
      { name: 'Сливочное масло и уксус для подачи', amount: 40, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 950, category: 'Масла' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Просейте горкой муку, сделайте кратер, влейте ледяную воду, яйцо и 1 ч. л. соли. Вымешивайте упругое плотное тесто не менее 12 минут. Заверните в пленку на 30 минут.',
        timerSeconds: 1800,
        tip: 'Ледяная вода делает глютеновую сетку эластичной — тесто раскатывается тонко и не рвется при варке.'
      },
      {
        stepNumber: 2,
        instruction: 'Пропустите три вида мяса и лук через мелкую решетку мясорубки. Добавьте черный перец, соль и ледяную крошку (или ледяную воду). Тщательно выбейте фарш руками.',
        timerSeconds: 300,
        tip: 'Колотый лед при варке тает внутри пельменя, образуя ложечку наваристого мясного бульона.'
      },
      {
        stepNumber: 3,
        instruction: 'Раскатайте тесто в пласт толщиной 1.5 мм. Тонким стаканом нарежьте кружки диаметром 6-7 см. В центр выложите по шарику фарша (10-12 г).',
        timerSeconds: 600,
        tip: 'Накрывайте заготовки влажной салфеткой, чтобы края теста не заветривались.'
      },
      {
        stepNumber: 4,
        instruction: 'Сложите кружок пополам, защипните полумесяцем, затем соедините противоположные кончики в круглую форму "ушка".',
        timerSeconds: 720,
        tip: 'Традиционная сибирская форма ушка гарантирует идеальное удержание бульона.'
      },
      {
        stepNumber: 5,
        instruction: 'Опустите пельмени в кипящую подсоленную воду с лавровым листом и черным перцем горошком. После всплытия убавьте огонь и варите ровно 5-6 минут.',
        timerSeconds: 360,
        tip: 'Бурное кипение может порвать тонкое тесто, поэтому варите при умеренном кипении.'
      },
      {
        stepNumber: 6,
        instruction: 'Выловите шумовкой, выложите в глубокую миску с кусочком сливочного масла, посыпьте свежемолотым перцем. Подавайте с ядреной горчицей, сметаной или натуральным яблочным уксусом.',
        tip: 'Попробуйте сибирский способ: окунуть пельмень в смесь уксуса, черного перца и капли бульона.'
      }
    ],
    chefSecrets: [
      'Три мяса (говядина для насыщенности, свинина для нежности, баранина для яркого аромата) — классический сибирский сбор.',
      'Колотый лед в фарш — вековой сибирский прием для создания взрывного бульона внутри.',
      'Заморозка на морозе перед варкой делает тесто еще плотнее и предотвращает вытекание сока.'
    ],
    techCard: {
      dishYield: '300 г (18-20 шт на порцию)',
      kzhbu: {
        calories: 220,
        proteins: 12.5,
        fats: 11.8,
        carbs: 16.4
      },
      semiFinishedProducts: ['Пельмени сибирские шоковой заморозки'],
      technologicalProcess: 'Варка в кипящей подсоленной воде 5-6 минут после всплытия. Заправка сливочным маслом.',
      servingTemperature: '75°C',
      storageConditions: 'В замороженном виде при -18°C до 90 суток.'
    }
  },
  {
    id: 'cheburek-crispy',
    title: 'Хрустящие крымские чебуреки с сочным бульоном',
    category: 'pastry',
    description: 'Тончайшее золотистое тесто с тысячей хрустящих пузырьков и сочная мясная начинка с луковым соком, истекающая обжигающим бульоном при первом надкусе.',
    prepTime: 30,
    cookTime: 15,
    difficulty: 'Средне',
    servings: 4,
    tags: ['Чебуреки', 'Крым', 'Выпечка', 'Мясо', 'Хрустящее'],
    ingredients: [
      { name: 'Мука пшеничная высший сорт', amount: 400, unit: 'г', coldWastePercent: 1, heatLossPercent: 5, estimatedCostPerKg: 70, category: 'Мука' },
      { name: 'Кипяток крутой (заварной метод)', amount: 200, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 5, category: 'Жидкости' },
      { name: 'Водка или крепкий алкоголь (секрет пузырьков)', amount: 20, unit: 'мл', coldWastePercent: 0, heatLossPercent: 100, estimatedCostPerKg: 400, category: 'Жидкости' },
      { name: 'Масло растительное для теста', amount: 30, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 130, category: 'Масла' },
      { name: 'Фарш говядина с бараниной', amount: 400, unit: 'г', coldWastePercent: 5, heatLossPercent: 20, estimatedCostPerKg: 700, category: 'Мясо' },
      { name: 'Лук репчатый', amount: 300, unit: 'г', coldWastePercent: 12, heatLossPercent: 15, estimatedCostPerKg: 40, category: 'Овощи' },
      { name: 'Ледяной бульон или кефир в фарш', amount: 100, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 30, category: 'Жидкости' },
      { name: 'Масло растительное для фритюра', amount: 400, unit: 'мл', coldWastePercent: 0, heatLossPercent: 10, estimatedCostPerKg: 130, category: 'Масла' },
      { name: 'Зира, кориандр и черный перец', amount: 1, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1100, category: 'Специи' },
      { name: 'Соль мелкая', amount: 1.5, unit: 'ч. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 20, category: 'Специи' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Заварное тесто: в миску с мукой влейте растительное масло и соль, залейте крутым кипятком и быстро перемешайте ложкой. Когда немного остынет, влейте столовую ложку водки и вымесите эластичное гладкое тесто. Дайте постоять 30 минут.',
        timerSeconds: 1800,
        tip: 'Водка мгновенно испаряется в раскаленном масле, создавая миллион воздушных хрустящих пузырьков.'
      },
      {
        stepNumber: 2,
        instruction: 'Фарш: мясо порубите или прокрутите на мясорубке. Лук очень мелко нарежьте и отожмите с солью. Соедините с мясом, специями и обязательно влейте ледяной бульон (или кефир). Фарш должен быть полужидким, как сметана.',
        timerSeconds: 360,
        tip: 'Жидкий фарш гарантирует, что внутри образуется целый стакан ароматного бульона.'
      },
      {
        stepNumber: 3,
        instruction: 'Разделите тесто на шарики по 55-60 г. Раскатайте каждый шарик в тончайший круг толщиной 1 мм.',
        timerSeconds: 300,
        tip: 'Следите, чтобы тесто не порвалось, иначе сок вытечет в масло и начнет стрелять.'
      },
      {
        stepNumber: 4,
        instruction: 'На одну половину лепешки выложите 1.5 ст. л. фарша, оставляя края свободными на 1.5 см. Накройте второй половиной, ладонью выгоните лишний воздух и плотно защипните вилкой или фигурным ножом-колесиком.',
        timerSeconds: 240,
        tip: 'Выдавливание воздуха предотвращает вздутие чебурека шаром и разрыв швов.'
      },
      {
        stepNumber: 5,
        instruction: 'В глубокой сковороде или воке раскалите масло до 180-190°C. Опустите чебурек и обжаривайте по 2-2.5 минуты с каждой стороны, поливая сверху горячим маслом с ложки.',
        timerSeconds: 270,
        tip: 'Поливание горячим маслом сверху заставляет тесто моментально покрываться аппетитными пузырями.'
      },
      {
        stepNumber: 6,
        instruction: 'Выложите на бумажное полотенце на 1 минуту для стекания лишнего масла. Подавайте обжигающе горячими!',
        tip: 'Едят чебурек, держа вертикально, аккуратно надкусывая край и выпивая горячий бульон.'
      }
    ],
    chefSecrets: [
      'Ложка водки в заварное тесто — главный секрет легендарной хрустящей пузырчатости крымских чебуреков.',
      'Фарш обязан быть жидковатым от ледяного бульона, чтобы превратиться внутри в сочный супчик.',
      'Температура фритюра не ниже 180°C: в недостаточно горячем масле чебурек пропитается жиром и не будет хрустеть.'
    ],
    techCard: {
      dishYield: '150 г на 1 чебурек (по 2 шт на порцию)',
      kzhbu: {
        calories: 275,
        proteins: 11.2,
        fats: 16.4,
        carbs: 21.0
      },
      semiFinishedProducts: ['Тесто заварное порционированное', 'Фарш сочный чебуречный'],
      technologicalProcess: 'Жарка во фритюре основным способом при 180°C. Подача незамедлительная.',
      servingTemperature: '75°C',
      storageConditions: 'Приготовление только а-ля минут под заказ.'
    }
  },
  {
    id: 'samsa-tandyr',
    title: 'Узбекская слоеная самса с рубленым мясом',
    category: 'pastry',
    description: 'Хрустящая слоеная самса с тающей сочной начинкой из рубленой говядины и баранины, сладкого лука, курдючного жира и пряной зиры, посыпанная семенами чернушки (седоны).',
    prepTime: 40,
    cookTime: 30,
    difficulty: 'Средне',
    servings: 6,
    tags: ['Самса', 'Восточная кухня', 'Выпечка', 'Баранина', 'Слоеное тесто'],
    ingredients: [
      { name: 'Мука пшеничная высший сорт', amount: 500, unit: 'г', coldWastePercent: 1, heatLossPercent: 8, estimatedCostPerKg: 70, category: 'Мука' },
      { name: 'Вода теплая', amount: 250, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 5, category: 'Жидкости' },
      { name: 'Сливочное масло топленое (для прослойки)', amount: 120, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 950, category: 'Масла' },
      { name: 'Говядина и баранина мякоть (рубленая ножом)', amount: 500, unit: 'г', coldWastePercent: 5, heatLossPercent: 20, estimatedCostPerKg: 720, category: 'Мясо' },
      { name: 'Лук репчатый сочный (в пропорции 1:1 к мясу)', amount: 500, unit: 'г', coldWastePercent: 12, heatLossPercent: 15, estimatedCostPerKg: 40, category: 'Овощи' },
      { name: 'Курдюк баранний соленый (кубиками)', amount: 100, unit: 'г', coldWastePercent: 5, heatLossPercent: 15, estimatedCostPerKg: 450, category: 'Мясо' },
      { name: 'Зира душистая и черный перец', amount: 1.5, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1200, category: 'Специи' },
      { name: 'Желток куриный (для глянцевой смазки)', amount: 1, unit: 'шт', coldWastePercent: 50, heatLossPercent: 0, estimatedCostPerKg: 160, category: 'Яйца' },
      { name: 'Семена чернушки (седона / нигелла) и белый кунжут', amount: 15, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 800, category: 'Специи' },
      { name: 'Соль поваренная', amount: 1.5, unit: 'ч. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 20, category: 'Специи' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Из муки, воды и 1 ч. л. соли замесите крутое эластичное пресное тесто. Вымешивайте 10 минут, затем дайте отдохнуть 30 минут под пленкой.',
        timerSeconds: 1800,
        tip: 'Крутой замес дает тесту необходимую прочность при многократном раскатывании.'
      },
      {
        stepNumber: 2,
        instruction: 'Раскатайте тесто в тончайший прозрачный пласт (толщиной до 1 мм). Обильно смажьте растопленным топленым сливочным маслом по всей поверхности.',
        timerSeconds: 420,
        tip: 'Топленое масло создает между слоями хрупкую воздушную текстуру millefeuille.'
      },
      {
        stepNumber: 3,
        instruction: 'Туго скрутите пласт в длинный плотный жгут. Заверните спиралью, уложите на тарелку и уберите в морозилку на 25 минут для застывания масла.',
        timerSeconds: 1500,
        tip: 'Охлажденное масло не выдавится при нарезке и позволит нарезать четкие слоистые "шайбы".'
      },
      {
        stepNumber: 4,
        instruction: 'Начинка: мясо порубите мелким кубиком (не мясорубка!), лук нарежьте тонкими четвертькольцами и отожмите руками с солью и зирой. Добавьте мелкие кубики курдюка.',
        timerSeconds: 480,
        tip: 'Обилие лука (1:1 к мясу) гарантирует, что самса не будет сухой.'
      },
      {
        stepNumber: 5,
        instruction: 'Жгут теста нарежьте на кусочки весом по 50 г. Поставьте шайбу срезом вверх, прижмите ладонью и раскатайте от центра к краям, сохраняя слоистый рисунок в центре. Выложите ложку начинки и защипните треугольником швом вниз.',
        timerSeconds: 600,
        tip: 'Раскатывайте так, чтобы центр лепешки был чуть толще краев.'
      },
      {
        stepNumber: 6,
        instruction: 'Выложите самсу на противень, застеленный пергаментом. Смажьте желтком, посыпьте седоной (чернушкой) и кунжутом. Выпекайте при 200°C 25-30 минут до хрустящей янтарной корочки.',
        timerSeconds: 1680,
        tip: 'Седона при нагреве отдает неповторимый землянисто-перечный восточный аромат.'
      }
    ],
    chefSecrets: [
      'Мясо рубят исключительно ножом — так волокна сохраняют текстуру и драгоценный сок.',
      'Равное весовое количество лука и мяса — золотое правило узбекской самсы.',
      'Седона (нигелла/чернушка) — аутентичная посыпка, отличающая настоящую самсу от пирожков.'
    ],
    techCard: {
      dishYield: '110 г на 1 самсу (по 2 шт на порцию)',
      kzhbu: {
        calories: 295,
        proteins: 12.8,
        fats: 16.9,
        carbs: 23.4
      },
      semiFinishedProducts: ['Слоеное тесто для самсы охлажденное', 'Фарш рубленый узбекский'],
      technologicalProcess: 'Выпечка в духовом шкафу/печи при 200°C 25-30 минут.',
      servingTemperature: '70-75°C',
      storageConditions: 'Полуфабрикат замороженный до 60 суток. Выпеченная самса реализуется в течение 4 часов.'
    }
  },
  {
    id: 'classic-tiramisu',
    title: 'Классический итальянский Тирамису',
    category: 'pastry',
    description: 'Нежнейший венецианский десерт: хрустящее печенье Савоярди, пропитанное эспрессо и марсалой, бархатистый крем на основе сыра Маскарпоне и горький какао.',
    prepTime: 30,
    cookTime: 0,
    difficulty: 'Легко',
    servings: 6,
    tags: ['Десерт', 'Выпечка', 'Италия', 'Кофе', 'Маскарпоне'],
    ingredients: [
      { name: 'Сыр Маскарпоне 80%', amount: 500, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 950, category: 'Сыры' },
      { name: 'Печенье Савоярди (Дамские пальчики)', amount: 250, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 450, category: 'Бакалея' },
      { name: 'Яйца куриные С0 (отборные свежие)', amount: 4, unit: 'шт', coldWastePercent: 12, heatLossPercent: 0, estimatedCostPerKg: 160, category: 'Яйца' },
      { name: 'Сахарная пудра или мелкий сахар', amount: 100, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 110, category: 'Бакалея' },
      { name: 'Свежесваренный крепкий эспрессо', amount: 250, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 50, category: 'Жидкости' },
      { name: 'Вино Марсала (или амаретто / темный ром)', amount: 30, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1400, category: 'Жидкости' },
      { name: 'Какао-порошок алкализованный без сахара', amount: 25, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 800, category: 'Бакалея' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Сварите крепкий эспрессо, перелейте в широкую плоскую миску, добавьте вино Марсала или Амаретто и полностью остудите до комнатной температуры.',
        timerSeconds: 900,
        tip: 'Кофе должен быть холодным! В горячем кофе савоярди мгновенно превратятся в кашу.'
      },
      {
        stepNumber: 2,
        instruction: 'Аккуратно разделите яйца на белки и желтки в абсолютно сухую посуду. Желтки взбейте с половиной сахара до пышной светлой шелковистой массы (5-7 минут).',
        timerSeconds: 420,
        tip: 'Длительное взбивание желтков растворяет сахар и насыщает крем микропузырьками.'
      },
      {
        stepNumber: 3,
        instruction: 'Добавьте в желтки холодный сыр маскарпоне и аккуратно перемешайте лопаткой или миксером на САМОЙ НИЗКОЙ скорости до однородности.',
        timerSeconds: 120,
        tip: 'Маскарпоне нельзя взбивать на высоких оборотах, иначе он расслоится на масло и сыворотку.'
      },
      {
        stepNumber: 4,
        instruction: 'Белки с щепоткой соли и оставшимся сахаром взбейте до крепких глянцевых пиков. В три приема введите взбитые белки в крем с маскарпоне, бережно перемешивая движениями снизу вверх.',
        timerSeconds: 300,
        tip: 'Бережное складывание белков сохраняет воздушную облачную текстуру крема.'
      },
      {
        stepNumber: 5,
        instruction: 'Савоярди погружайте в кофе буквально на 1 секунду с каждой стороны (раз-два) и сразу выкладывайте плотным слоем на дно прямоугольной формы. Покройте половиной крема.',
        timerSeconds: 300,
        tip: 'Секундное погружение: печенье должно впитать кофе лишь снаружи, сердцевина дойдет позже.'
      },
      {
        stepNumber: 6,
        instruction: 'Повторите второй слой пропитанного печенья и оставшегося крема. Уберите в холодильник минимум на 4-6 часов (лучше на ночь). Перед подачей щедро присыпьте какао через тонкое сито.',
        tip: 'Какао наносят строго перед подачей, чтобы оно не намокло и не потемнело.'
      }
    ],
    chefSecrets: [
      'Погружение савоярди ровно на 1 секунду: они впитывают влагу из крема во время созревания в холодильнике.',
      'Алкализованный темный какао с содержанием какао-масла от 22% дает контрастный бархатистый вкус.',
      'Выдержка не менее 6 часов превращает разрозненные слои в монолитный муссовый десерт.'
    ],
    techCard: {
      dishYield: '180 г на порцию',
      kzhbu: {
        calories: 285,
        proteins: 5.6,
        fats: 19.4,
        carbs: 22.1
      },
      semiFinishedProducts: ['Крем заварной с маскарпоне', 'Пропитка кофейная с марсалой'],
      technologicalProcess: 'Холодная формовка слоями с созреванием при +2...+4°C не менее 6 часов.',
      servingTemperature: '4-6°C',
      storageConditions: 'В закрытом виде при температуре +2...+4°C не более 48 часов.'
    }
  },
  {
    id: 'cheesecake-san-sebastian',
    title: 'Баскский обожженный чизкейк Сан-Себастьян',
    category: 'pastry',
    description: 'Знаменитый баскский «сожженный» чизкейк с карамелизированной темно-коричневой корочкой и невероятно текучей, нежной шелковистой сердцевиной.',
    prepTime: 20,
    cookTime: 35,
    difficulty: 'Легко',
    servings: 8,
    tags: ['Чизкейк', 'Выпечка', 'Испания', 'Десерт', 'Сыр'],
    ingredients: [
      { name: 'Сливочный творожный сыр (Cremette или Philadelphia)', amount: 700, unit: 'г', coldWastePercent: 0, heatLossPercent: 8, estimatedCostPerKg: 780, category: 'Сыры' },
      { name: 'Сливки 33-35% жирности', amount: 350, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 450, category: 'Молочные' },
      { name: 'Яйца куриные свежие С0', amount: 5, unit: 'шт', coldWastePercent: 12, heatLossPercent: 0, estimatedCostPerKg: 160, category: 'Яйца' },
      { name: 'Сахарный песок', amount: 180, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 70, category: 'Бакалея' },
      { name: 'Мука пшеничная в/с (или кукурузный крахмал)', amount: 25, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 70, category: 'Мука' },
      { name: 'Экстракт натуральной ванили', amount: 1, unit: 'ч. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 2500, category: 'Бакалея' },
      { name: 'Соль морская мелкая', amount: 0.5, unit: 'ч. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 40, category: 'Специи' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Все ингредиенты обязательно доведите до КОМНАТНОЙ температуры (достаньте из холодильника за 2-3 часа). Разогрейте духовку до 230-240°C.',
        timerSeconds: 600,
        tip: 'Ингредиенты комнатной температуры смешиваются без комочков и лишнего взбивания.'
      },
      {
        stepNumber: 2,
        instruction: 'Форму диаметром 20-22 см выстелите двумя листами мятого влажного пергамента так, чтобы бумага выступала над бортиками на 4-5 см.',
        timerSeconds: 180,
        tip: 'Мятый пергамент создает аутентичные фактурные складки по бокам баскского чизкейка.'
      },
      {
        stepNumber: 3,
        instruction: 'В чаше лопаткой или насадкой «весло» разотрите сыр с сахаром до гладкой кремовой массы (не взбивайте венчиком, чтобы не нагнетать пузырьки воздуха!).',
        timerSeconds: 240,
        tip: 'Воздушные пузыри заставят чизкейк треснуть и подняться суфле, а нам нужна плотная сливочность.'
      },
      {
        stepNumber: 4,
        instruction: 'По одному введите яйца, аккуратно вымешивая после каждого. Добавьте ваниль и соль. Просейте муку, влейте сливки и перемешайте до однородности.',
        timerSeconds: 300,
        tip: 'Ввод яиц по одному сохраняет эмульсию гладкой.'
      },
      {
        stepNumber: 5,
        instruction: 'Перелейте сырную массу в форму. Выпекайте при 230°C ровно 30-35 минут. Верх должен стать темно-коричневым (почти подгоревшим), а центр при покачивании формы должен жидко дрожать.',
        timerSeconds: 1980,
        tip: 'Не бойтесь темной корочки — это карамелизированные сахара, дающие вкус крем-брюле!'
      },
      {
        stepNumber: 6,
        instruction: 'Остудите при комнатной температуре 4-5 часов. Ни в коем случае не режьте горячим!',
        tip: 'Остывая, текстура стабилизируется, а сердцевина остается полужидкой и тающей.'
      }
    ],
    chefSecrets: [
      'Жидкий дрожащий центр при извлечении из духовки — главное отличие Сан-Себастьяна от американского чизкейка Нью-Йорк.',
      'Только высокая температура (230-240°C) создает контраст обожженной корочки и жидкой середины.'
    ],
    techCard: {
      dishYield: '160 г на порцию (1/8 торта)',
      kzhbu: {
        calories: 335,
        proteins: 6.8,
        fats: 23.5,
        carbs: 24.2
      },
      semiFinishedProducts: ['Сырная масса для баскского чизкейка'],
      technologicalProcess: 'Шоковая выпечка при 230°C с карамелизацией верха и стабилизацией при 20°C.',
      servingTemperature: '18-20°C (комнатная температура, не из холодильника!).',
      storageConditions: 'При температуре +2...+4°C до 72 часов.'
    }
  },
  {
    id: 'chocolate-fondant',
    title: 'Шоколадный фондан с жидким центром (Lava Cake)',
    category: 'pastry',
    description: 'Легендарный французский теплый кекс из премиального темного шоколада 70% с тонкой хрустящей корочкой и струящимся горячим шоколадным ганашем внутри.',
    prepTime: 15,
    cookTime: 10,
    difficulty: 'Средне',
    servings: 4,
    tags: ['Шоколад', 'Выпечка', 'Десерт', 'Франция', 'Фондан'],
    ingredients: [
      { name: 'Шоколад темный 70% какао', amount: 160, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1200, category: 'Кондитерка' },
      { name: 'Сливочное масло 82.5%', amount: 100, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 950, category: 'Масла' },
      { name: 'Яйца куриные С0', amount: 3, unit: 'шт', coldWastePercent: 12, heatLossPercent: 0, estimatedCostPerKg: 160, category: 'Яйца' },
      { name: 'Сахарная пудра', amount: 70, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 110, category: 'Бакалея' },
      { name: 'Мука пшеничная в/с', amount: 45, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 70, category: 'Мука' },
      { name: 'Какао-порошок (для формочек)', amount: 15, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 800, category: 'Бакалея' },
      { name: 'Соль морская мелкая', amount: 1, unit: 'щепотка', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 40, category: 'Специи' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Керамические формочки рамекины смажьте мягким сливочным маслом движениями снизу вверх и присыпьте какао-порошком, стряхнув излишки («французская рубашка»).',
        timerSeconds: 180,
        tip: 'Движения снизу вверх помогают кексу равномерно подниматься по стенкам.'
      },
      {
        stepNumber: 2,
        instruction: 'Шоколад поломайте, масло нарежьте кубиками. Растопите на водяной бане или импульсами в микроволновке по 15 секунд, перемешивая до зеркальной гладкости.',
        timerSeconds: 300,
        tip: 'Следите, чтобы вода в бане не касалась дна миски с шоколадом.'
      },
      {
        stepNumber: 3,
        instruction: 'Яйца взбейте с сахарной пудрой венчиком до легкой пены (сильно взбивать не нужно).',
        timerSeconds: 120,
        tip: 'Избыток взбитых яиц превратит фондан в сухой бисквит.'
      },
      {
        stepNumber: 4,
        instruction: 'Тонкой струйкой влейте теплый растопленный шоколад в яичную смесь, непрерывно помешивая. Всыпьте просеянную муку и щепотку соли, перемешайте лопаткой.',
        timerSeconds: 120,
        tip: 'Щепотка соли подчеркивает глубину темного шоколада.'
      },
      {
        stepNumber: 5,
        instruction: 'Разлейте тесто по формочкам на 3/4 высоты. Разогрейте духовку до 200°C. Выпекайте ровно 8-10 минут (в зависимости от мощности духовки).',
        timerSeconds: 540,
        tip: 'Края должны схватиться и подняться, а серединка остаться мягкой и слегка просевшей.'
      },
      {
        stepNumber: 6,
        instruction: 'Достаньте, дайте постоять 1 минуту, аккуратно проведите тонким ножом по краю и переверните на тарелку. Подавайте с шариком ванильного пломбира и ягодами.',
        tip: 'Подавать немедленно: при разрезании шоколадная «лава» должна эффектно вытекать на тарелку.'
      }
    ],
    chefSecrets: [
      'Точность таймера решает все: лишняя минута в духовке — и жидкий центр исчезнет, превратившись в обычный маффин.',
      'Качественный бельгийский или французский шоколад 70% — залог шелковистого струящегося ганаша.'
    ],
    techCard: {
      dishYield: '120 г на порцию (1 рамекин)',
      kzhbu: {
        calories: 395,
        proteins: 7.2,
        fats: 25.1,
        carbs: 34.8
      },
      semiFinishedProducts: ['Шоколадная масса для фондана'],
      technologicalProcess: 'Выпечка в рамекинах при 200°C строго 8-10 минут. Подача незамедлительная.',
      servingTemperature: '65-70°C в горячем виде с холодным мороженым.',
      storageConditions: 'Тесто в формочках хранится в холодильнике до 24 часов и выпекается под заказ.'
    }
  }
,
  {
    "id": "pastry-qutab-greens",
    "title": "Азербайджанские кутабы со свежей зеленью и сулугуни",
    "category": "pastry",
    "description": "Тончайшие лепешки из пресного теста в форме полумесяца, начиненные горой свежей сочной зелени (кинза, шпинат, зеленый лук, укроп) и тертым сыром сулугуни, обжаренные на сухом садже и обильно смазанные топленым сливочным маслом.",
    "prepTime": 20,
    "cookTime": 15,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Выпечка",
      "Кутабы",
      "Зелень",
      "Кавказ",
      "Сыр"
    ],
    "ingredients": [
      {
        "name": "Мука пшеничная высшего сорта",
        "amount": 350,
        "unit": "г",
        "estimatedCostPerKg": 60,
        "category": "Крупы и мука"
      },
      {
        "name": "Вода теплая питьевая",
        "amount": 180,
        "unit": "мл",
        "estimatedCostPerKg": 5,
        "category": "Жидкости"
      },
      {
        "name": "Зелень микс (шпинат, кинза, лук зеленый, щавель)",
        "amount": 250,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 400,
        "category": "Зелень"
      },
      {
        "name": "Сыр Сулугуни тертый",
        "amount": 120,
        "unit": "г",
        "estimatedCostPerKg": 750,
        "category": "Сыры"
      },
      {
        "name": "Масло топленое сливочное (для смазывания)",
        "amount": 80,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Сумах молотый для посыпки",
        "amount": 10,
        "unit": "г",
        "estimatedCostPerKg": 800,
        "category": "Специи"
      },
      {
        "name": "Соль морская",
        "amount": 1,
        "unit": "ч. л.",
        "estimatedCostPerKg": 30,
        "category": "Специи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Замесите эластичное пресное тесто из муки, теплой воды и соли. Заверните в пленку и дайте отдохнуть 30 минут.",
        "timerSeconds": 1800,
        "tip": "Отдых теста расслабляет клейковину, позволяя раскатать его до толщины папиросной бумаги."
      },
      {
        "stepNumber": 2,
        "instruction": "Зелень тщательно промойте, высушите и мелко порубите, смешайте с тертым сулугуни.",
        "timerSeconds": 300,
        "tip": "Не солите начинку заранее, чтобы зелень не пустила сок до раскатки."
      },
      {
        "stepNumber": 3,
        "instruction": "Тесто разделите на шарики по 50 г. Раскатайте каждый шарик в тончайший полупрозрачный круг толщиной 1 мм.",
        "timerSeconds": 300,
        "tip": "Подпыляйте доску мукой минимально."
      },
      {
        "stepNumber": 4,
        "instruction": "На одну половину выложите горсть начинки, накройте второй половиной и тщательно защипните край колесиком для теста.",
        "timerSeconds": 180,
        "tip": "Выпустите лишний воздух перед защипыванием."
      },
      {
        "stepNumber": 5,
        "instruction": "Обжаривайте на сухой раскаленной сковороде (или садже) по 1.5 минуты с каждой стороны до коричневых подпалин.",
        "timerSeconds": 180,
        "tip": "Никакого масла на сковороде: жарка происходит всухую."
      },
      {
        "stepNumber": 6,
        "instruction": "Сняв со сковороды, немедленно смажьте горячий кутаб щедрой порцией растопленного сливочного масла и посыпьте кислым сумахом.",
        "timerSeconds": 60,
        "tip": "Складывайте стопкой — они станут мягчайшими."
      }
    ],
    "chefSecrets": [
      "Сухая обжарка на раскаленном чугуне создает характерные аппетитные леопардовые пятна без жирности."
    ],
    "techCard": {
      "dishYield": "8 штук (по 100 г)",
      "kzhbu": {
        "calories": 235,
        "proteins": 7.8,
        "fats": 9.4,
        "carbs": 29.8
      },
      "semiFinishedProducts": [
        "Пресное тесто отдохнувшее",
        "Зеленая начинка с сыром"
      ],
      "technologicalProcess": "Сухая контактная жарка на металлической поверхности с последующей масляной пропиткой.",
      "servingTemperature": "65-70°C с мацони или катыком.",
      "storageConditions": "Употреблять сразу горячими."
    }
  },
  {
    "id": "pastry-khachapuri-imeruli",
    "title": "Хачапури по-имеретински (круглый закрытый)",
    "category": "pastry",
    "description": "Золотистый грузинский пирог из нежнейшего дрожжевого теста на мацони с щедрой начинкой из молодого рассольного сыра имеретинского и сулугуни. Сыр тянется горячими нитями при нарезке.",
    "prepTime": 25,
    "cookTime": 15,
    "difficulty": "Средне",
    "servings": 6,
    "tags": [
      "Выпечка",
      "Хачапури",
      "Грузия",
      "Сыр",
      "Пирог"
    ],
    "ingredients": [
      {
        "name": "Мука пшеничная высшего сорта",
        "amount": 450,
        "unit": "г",
        "estimatedCostPerKg": 60,
        "category": "Крупы и мука"
      },
      {
        "name": "Мацони или кефир 3.2%",
        "amount": 250,
        "unit": "мл",
        "estimatedCostPerKg": 95,
        "category": "Молочные"
      },
      {
        "name": "Масло сливочное 82.5%",
        "amount": 50,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Дрожжи сухие быстродействующие",
        "amount": 6,
        "unit": "г",
        "estimatedCostPerKg": 500,
        "category": "Бакалея"
      },
      {
        "name": "Сыр имеретинский свежий",
        "amount": 350,
        "unit": "г",
        "estimatedCostPerKg": 700,
        "category": "Сыры"
      },
      {
        "name": "Сыр сулугуни",
        "amount": 200,
        "unit": "г",
        "estimatedCostPerKg": 750,
        "category": "Сыры"
      },
      {
        "name": "Яйцо куриное С1",
        "amount": 1,
        "unit": "шт",
        "estimatedCostPerKg": 140,
        "category": "Яйца"
      },
      {
        "name": "Соль и сахар",
        "amount": 1,
        "unit": "ч. л.",
        "estimatedCostPerKg": 30,
        "category": "Специи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "В теплом мацони растворите дрожжи и сахар, влейте растопленное масло и постепенно вмешайте муку с солью. Замесите мягкое, живое тесто и оставьте на 1 час в тепле.",
        "timerSeconds": 3600,
        "tip": "Тесто на мацони получается нежнее обычного дрожжевого."
      },
      {
        "stepNumber": 2,
        "instruction": "Сыры натрите на крупной терке, смешайте с яйцом и сформируйте плотный шар размером чуть больше кулака.",
        "timerSeconds": 240,
        "tip": "Золотое правило имеретинского хачапури: сыра по весу должно быть столько же, сколько теста."
      },
      {
        "stepNumber": 3,
        "instruction": "Подошедшее тесто разомните руками в круг, в центр уложите сырный шар.",
        "timerSeconds": 120,
        "tip": "Не используйте скалку — работайте исключительно теплыми пальцами."
      },
      {
        "stepNumber": 4,
        "instruction": "Соберите края теста кверху в узелок (мешочек) и плотно защипните. Переверните швом вниз и аккуратно разомните от центра к краям в ровную лепешку толщиной 1.5 см.",
        "timerSeconds": 180,
        "tip": "В центре сделайте маленькую дырочку для выхода пара."
      },
      {
        "stepNumber": 5,
        "instruction": "Выпекайте при 230°C на раскаленном противне или камне 12-15 минут до золотистой корочки.",
        "timerSeconds": 900,
        "tip": "Высокая температура обеспечивает мгновенный подъем теста."
      },
      {
        "stepNumber": 6,
        "instruction": "Горячий хачапури обильно смажьте куском сливочного масла.",
        "timerSeconds": 60,
        "tip": "Масло пропитает корочку, сделав ее шелковой."
      }
    ],
    "chefSecrets": [
      "Соотношение сыра и теста 1:1 — стандарт лучших тбилисских духанов."
    ],
    "techCard": {
      "dishYield": "1 большой пирог (диаметр 28 см, 950 г)",
      "kzhbu": {
        "calories": 298,
        "proteins": 12.5,
        "fats": 14.8,
        "carbs": 28.5
      },
      "semiFinishedProducts": [
        "Тесто на мацони дрожжевое",
        "Сырный фарш формованный"
      ],
      "technologicalProcess": "Выпечка в печи при 230-240°C с верхним конвективным обдувом.",
      "servingTemperature": "70-75°C.",
      "storageConditions": "Употреблять свежеиспеченным."
    }
  },
  {
    "id": "pastry-khachapuri-megruli",
    "title": "Хачапури по-мегрельски (с двойным слоем сыра)",
    "category": "pastry",
    "description": "Праздничный вариант хачапури: рассольный сыр находится не только внутри мягкого теста, но и образует хрустящую румяную сырную корочку сверху, смешиваясь с яичным желтком.",
    "prepTime": 25,
    "cookTime": 15,
    "difficulty": "Средне",
    "servings": 6,
    "tags": [
      "Выпечка",
      "Хачапури",
      "Грузия",
      "Сырная корочка"
    ],
    "ingredients": [
      {
        "name": "Мука пшеничная высшего сорта",
        "amount": 450,
        "unit": "г",
        "estimatedCostPerKg": 60,
        "category": "Крупы и мука"
      },
      {
        "name": "Молоко теплое 3.2%",
        "amount": 250,
        "unit": "мл",
        "estimatedCostPerKg": 85,
        "category": "Молочные"
      },
      {
        "name": "Дрожжи сухие",
        "amount": 6,
        "unit": "г",
        "estimatedCostPerKg": 500,
        "category": "Бакалея"
      },
      {
        "name": "Сыр Сулугуни малосоленый",
        "amount": 450,
        "unit": "г",
        "estimatedCostPerKg": 750,
        "category": "Сыры"
      },
      {
        "name": "Сыр Имеретинский",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 700,
        "category": "Сыры"
      },
      {
        "name": "Сливочное масло 82.5%",
        "amount": 60,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Желток куриного яйца",
        "amount": 1,
        "unit": "шт",
        "estimatedCostPerKg": 160,
        "category": "Яйца"
      },
      {
        "name": "Соль и сахар",
        "amount": 1,
        "unit": "ч. л.",
        "estimatedCostPerKg": 30,
        "category": "Специи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Замесите мягкое дрожжевое тесто на теплом молоке со сливочным маслом, дайте подняться в тепле 50 минут.",
        "timerSeconds": 3000,
        "tip": "Тесто должно быть нежным и воздушным."
      },
      {
        "stepNumber": 2,
        "instruction": "Натрите весь сыр. Отложите треть для верхнего слоя, а две трети смешайте со столовой ложкой сливочного масла для начинки.",
        "timerSeconds": 180,
        "tip": "Сливочное масло внутри делает сырную начинку кремовой."
      },
      {
        "stepNumber": 3,
        "instruction": "Раскатайте тесто в круг, положите в центр начинку, соберите края в узелок и раскатайте лепешку толщиной 1.5 см.",
        "timerSeconds": 240,
        "tip": "Сделайте наколы вилкой по всей поверхности."
      },
      {
        "stepNumber": 4,
        "instruction": "Смажьте поверхность взбитым с ложкой молока желтком и густо засыпьте оставшимся сулугуни.",
        "timerSeconds": 120,
        "tip": "Верхний сыр расплавится и зарумянится аппетитной корочкой."
      },
      {
        "stepNumber": 5,
        "instruction": "Выпекайте при 230°C 12-14 минут до появления пузырящейся золотисто-коричневой сырной корки.",
        "timerSeconds": 840,
        "tip": "Следите за колером корочки."
      }
    ],
    "chefSecrets": [
      "Двойной слой сыра — фирменный почерк Самегрело, где сыр считают главным богатством стола."
    ],
    "techCard": {
      "dishYield": "1000 г (пирог 30 см)",
      "kzhbu": {
        "calories": 315,
        "proteins": 14.1,
        "fats": 16.5,
        "carbs": 27.2
      },
      "semiFinishedProducts": [
        "Тесто дрожжевое сдобное",
        "Сырный микс"
      ],
      "technologicalProcess": "Выпекание с поверхностным гратинированием сыра сулугуни.",
      "servingTemperature": "70°C.",
      "storageConditions": "Употреблять сразу."
    }
  },
  {
    "id": "pastry-patyr-uzbek",
    "title": "Узбекская праздничная слоеная лепешка Патыр",
    "category": "pastry",
    "description": "Богатая сдобная лепешка из тандыра с тонкими слоями теста, промазанными топленым курдючным жиром или сливочным маслом. Плотная, сытная, с рельефным узором чекича по центру и семенами кунжута.",
    "prepTime": 30,
    "cookTime": 20,
    "difficulty": "Профи",
    "servings": 8,
    "tags": [
      "Выпечка",
      "Лепешка",
      "Патыр",
      "Восток",
      "Тандыр"
    ],
    "ingredients": [
      {
        "name": "Мука пшеничная высшего сорта",
        "amount": 500,
        "unit": "г",
        "estimatedCostPerKg": 60,
        "category": "Крупы и мука"
      },
      {
        "name": "Молоко теплое 3.2%",
        "amount": 200,
        "unit": "мл",
        "estimatedCostPerKg": 85,
        "category": "Молочные"
      },
      {
        "name": "Масло топленое или растопленный курдюк",
        "amount": 100,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Дрожжи сухие",
        "amount": 5,
        "unit": "г",
        "estimatedCostPerKg": 500,
        "category": "Бакалея"
      },
      {
        "name": "Кунжут белый и черный (седана)",
        "amount": 15,
        "unit": "г",
        "estimatedCostPerKg": 400,
        "category": "Специи"
      },
      {
        "name": "Соль поваренная",
        "amount": 1,
        "unit": "ч. л.",
        "estimatedCostPerKg": 20,
        "category": "Специи"
      },
      {
        "name": "Желток для смазывания",
        "amount": 1,
        "unit": "шт",
        "estimatedCostPerKg": 160,
        "category": "Яйца"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Замесите плотное крутое тесто на молоке с солью и дрожжами. Дайте отдохнуть 40 минут.",
        "timerSeconds": 2400,
        "tip": "Тесто для патыра должно быть плотнее обычного хлебного."
      },
      {
        "stepNumber": 2,
        "instruction": "Раскатайте тесто в широкий тонкий пласт, обильно смажьте теплым топленым маслом и сверните в тугой рулет.",
        "timerSeconds": 300,
        "tip": "Сворачивание создает внутреннюю слоистость."
      },
      {
        "stepNumber": 3,
        "instruction": "Рулет нарежьте на части, поставьте столбиком и сплющите ладонью в шайбу. Оставьте на 15 минут.",
        "timerSeconds": 900,
        "tip": "Шайба сохраняет концентрические слои масла."
      },
      {
        "stepNumber": 4,
        "instruction": "Сформируйте лепешку: тонкую серединку продавите кулаком, а пышный бортик защипните узором. Середину густо наколите чекичем.",
        "timerSeconds": 180,
        "tip": "Чекич предотвращает вздутие серединки при выпечке."
      },
      {
        "stepNumber": 5,
        "instruction": "Смажьте желтком, посыпьте седаной и белым кунжутом. Выпекайте на камне при 220°C 18-20 минут до румянца.",
        "timerSeconds": 1200,
        "tip": "Седана (чернушка) придает неповторимый восточный аромат."
      }
    ],
    "chefSecrets": [
      "Топленое масло между слоями делает мякиш рассыпчатым и слоеным, а корочку — хрустящей."
    ],
    "techCard": {
      "dishYield": "2 лепешки по 400 г",
      "kzhbu": {
        "calories": 330,
        "proteins": 7.2,
        "fats": 14.1,
        "carbs": 43.5
      },
      "semiFinishedProducts": [
        "Слоеная масляная заготовка"
      ],
      "technologicalProcess": "Слоение теста топленым жиром с выпеканием на огнеупорном поду при 220°C.",
      "servingTemperature": "Теплая или комнатная.",
      "storageConditions": "Сохраняет свежесть до 5 суток благодаря сдобе."
    }
  },
  {
    "id": "pastry-obi-non-uzbek",
    "title": "Узбекская лепешка Оби-нон с седаной из тандыра",
    "category": "pastry",
    "description": "Классический повседневный узбекский хлеб: хрустящий пышный борт с легким ароматом дымка, тонкая хрустящая серединка с узором чекича и черным тмином (чернушкой).",
    "prepTime": 20,
    "cookTime": 15,
    "difficulty": "Легко",
    "servings": 6,
    "tags": [
      "Выпечка",
      "Хлеб",
      "Оби-нон",
      "Тандыр",
      "Восток"
    ],
    "ingredients": [
      {
        "name": "Мука пшеничная хлебопекарная 1 сорт",
        "amount": 500,
        "unit": "г",
        "estimatedCostPerKg": 50,
        "category": "Крупы и мука"
      },
      {
        "name": "Вода теплая питьевая",
        "amount": 300,
        "unit": "мл",
        "estimatedCostPerKg": 5,
        "category": "Жидкости"
      },
      {
        "name": "Дрожжи сухие",
        "amount": 5,
        "unit": "г",
        "estimatedCostPerKg": 500,
        "category": "Бакалея"
      },
      {
        "name": "Соль поваренная",
        "amount": 10,
        "unit": "г",
        "estimatedCostPerKg": 20,
        "category": "Специи"
      },
      {
        "name": "Седана (черный тмин / нигелла)",
        "amount": 10,
        "unit": "г",
        "estimatedCostPerKg": 600,
        "category": "Специи"
      },
      {
        "name": "Молоко или вода для сбрызгивания",
        "amount": 30,
        "unit": "мл",
        "estimatedCostPerKg": 10,
        "category": "Жидкости"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Замесите простое дрожжевое тесто из муки, воды, соли и дрожжей. Вымешивайте руками 10 минут до шелковистости. Оставьте бродить на 1 час.",
        "timerSeconds": 3600,
        "tip": "Хорошо вымешанное тесто держит пышную форму без оседания."
      },
      {
        "stepNumber": 2,
        "instruction": "Разделите тесто на 2 части по 400 г, подкатайте в круглые гладкие шары и накройте полотенцем на 15 минут.",
        "timerSeconds": 900,
        "tip": "Предварительная расстойка облегчает формовку."
      },
      {
        "stepNumber": 3,
        "instruction": "Сформируйте оби-нон: пальцами и ладонью расплющите центр в тонкий блинчик, оставив высокий валик по краю.",
        "timerSeconds": 180,
        "tip": "Центр должен быть толщиной не более 3 мм."
      },
      {
        "stepNumber": 4,
        "instruction": "Густо наколите центр чекичем, сбрызните водой и посыпьте седаной.",
        "timerSeconds": 60,
        "tip": "Вода помогает семенам намертво прилипнуть к сырому тесту."
      },
      {
        "stepNumber": 5,
        "instruction": "Выпекайте при 250°C на раскаленном противне или шамотном камне 12-14 минут до темно-золотистого колера.",
        "timerSeconds": 780,
        "tip": "Максимальный жар духовки имитирует стены тандыра."
      }
    ],
    "chefSecrets": [
      "Никогда не режьте горячий оби-нон ножом — по традиции его ломают руками."
    ],
    "techCard": {
      "dishYield": "2 лепешки по 380 г",
      "kzhbu": {
        "calories": 232,
        "proteins": 7.8,
        "fats": 1.1,
        "carbs": 47.5
      },
      "semiFinishedProducts": [
        "Подошедшие тестовые заготовки оби-нон"
      ],
      "technologicalProcess": "Высокотемпературная посадка на под 250°C с пароувлажнением.",
      "servingTemperature": "60-70°C.",
      "storageConditions": "В тканевом мешке до 3 суток."
    }
  },
  {
    "id": "pastry-syrniki-vanilla",
    "title": "Нежные сырники из фермерского творога с ванилью",
    "category": "pastry",
    "description": "Идеальные ресторанные сырники: сухой фермерский творог 9%, минимум муки, яичный желток, натуральная бурбонская ваниль. Хрустящая тонкая золотистая корочка и кремовая текстура суфле внутри.",
    "prepTime": 15,
    "cookTime": 10,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Выпечка",
      "Сырники",
      "Завтрак",
      "Творог",
      "Ваниль"
    ],
    "ingredients": [
      {
        "name": "Творог фермерский 9% (сухой, отжатый)",
        "amount": 400,
        "unit": "г",
        "coldWastePercent": 0,
        "estimatedCostPerKg": 380,
        "category": "Молочные"
      },
      {
        "name": "Желток куриного яйца",
        "amount": 1,
        "unit": "шт",
        "estimatedCostPerKg": 160,
        "category": "Яйца"
      },
      {
        "name": "Сахарная пудра",
        "amount": 35,
        "unit": "г",
        "estimatedCostPerKg": 90,
        "category": "Бакалея"
      },
      {
        "name": "Мука пшеничная (в тесто)",
        "amount": 25,
        "unit": "г",
        "estimatedCostPerKg": 60,
        "category": "Крупы и мука"
      },
      {
        "name": "Мука для панировки",
        "amount": 30,
        "unit": "г",
        "estimatedCostPerKg": 60,
        "category": "Крупы и мука"
      },
      {
        "name": "Экстракт натуральной ванили",
        "amount": 1,
        "unit": "ч. л.",
        "estimatedCostPerKg": 3500,
        "category": "Бакалея"
      },
      {
        "name": "Масло топленое для жарки",
        "amount": 30,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Творог отожмите через вафельное полотенце от малейшей сыворотки и протрите через мелкое сито.",
        "timerSeconds": 300,
        "tip": "Протирание устраняет крупинки, превращая творог в шелковистую массу."
      },
      {
        "stepNumber": 2,
        "instruction": "Добавьте желток, сахарную пудру, ваниль и муку. Быстро перемешайте вилкой (не взбивайте долго!).",
        "timerSeconds": 120,
        "tip": "Длительный замес разжижает творог из-за растворения сахара."
      },
      {
        "stepNumber": 3,
        "instruction": "Скатайте из массы колбаску, нарежьте на шайбы по 60 г. Сформируйте идеальные цилиндры с помощью широкого стакана или ножа на доске.",
        "timerSeconds": 240,
        "tip": "Вращение стакана вокруг сырника делает бортик ровным и высоким."
      },
      {
        "stepNumber": 4,
        "instruction": "Обваляйте сырники в тонком слое муки, стряхните излишки.",
        "timerSeconds": 60,
        "tip": "Тонкая панировка дает хрустящую корочку."
      },
      {
        "stepNumber": 5,
        "instruction": "Обжаривайте на топленом масле на среднем огне по 2.5 минуты с каждой стороны, затем доведите под крышкой на слабом огне 3 минуты.",
        "timerSeconds": 360,
        "tip": "Топленое масло не горит и придает орехово-сливочный аромат."
      }
    ],
    "chefSecrets": [
      "Только сухой протертый творог и один желток (без белка!) гарантируют, что сырники не поплывут на сковороде."
    ],
    "techCard": {
      "dishYield": "6 сырников (420 г)",
      "kzhbu": {
        "calories": 215,
        "proteins": 16.2,
        "fats": 10.4,
        "carbs": 14.1
      },
      "semiFinishedProducts": [
        "Протертая формованная творожная масса"
      ],
      "technologicalProcess": "Контактное обжаривание на сливочном жире с последующим томлением под крышкой.",
      "servingTemperature": "65°C со сметаной и свежими ягодами.",
      "storageConditions": "Хранить полуфабрикаты в заморозке до 30 суток."
    }
  },
  {
    "id": "pastry-french-croissant",
    "title": "Классические французские слоеные круассаны",
    "category": "pastry",
    "description": "Вершина кондитерского искусства: 27 тончайших слоев сливочного масла 84% жирности и дрожжевого теста, хрупкая карамельная хрустящая корочка и кружевная текстура мякиша в форме пчелиных сот.",
    "prepTime": 60,
    "cookTime": 18,
    "difficulty": "Профи",
    "servings": 8,
    "tags": [
      "Выпечка",
      "Круассаны",
      "Франция",
      "Слоеное тесто",
      "Завтрак"
    ],
    "ingredients": [
      {
        "name": "Мука пшеничная сильная (тип Т55 или манитоба)",
        "amount": 500,
        "unit": "г",
        "estimatedCostPerKg": 120,
        "category": "Крупы и мука"
      },
      {
        "name": "Масло сливочное 84% сухое профессиональное",
        "amount": 280,
        "unit": "г",
        "estimatedCostPerKg": 1200,
        "category": "Масла"
      },
      {
        "name": "Молоко цельное холодное",
        "amount": 140,
        "unit": "мл",
        "estimatedCostPerKg": 85,
        "category": "Молочные"
      },
      {
        "name": "Вода ледяная",
        "amount": 140,
        "unit": "мл",
        "estimatedCostPerKg": 5,
        "category": "Жидкости"
      },
      {
        "name": "Сахар мелкий",
        "amount": 60,
        "unit": "г",
        "estimatedCostPerKg": 70,
        "category": "Бакалея"
      },
      {
        "name": "Дрожжи свежие прессованные",
        "amount": 20,
        "unit": "г",
        "estimatedCostPerKg": 200,
        "category": "Бакалея"
      },
      {
        "name": "Соль морская",
        "amount": 10,
        "unit": "г",
        "estimatedCostPerKg": 30,
        "category": "Специи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Замесите тесто детрамп (мука, вода, молоко, дрожжи, сахар, соль). Сформируйте прямоугольник и уберите в холод на 8 часов.",
        "timerSeconds": 28800,
        "tip": "Холодное брожение развивает эластичность без перегрева масла."
      },
      {
        "stepNumber": 2,
        "instruction": "Масло 84% раскатайте между листами пергамента в ровный квадрат 18х18 см толщиной 8 мм.",
        "timerSeconds": 600,
        "tip": "Температура масла и теста при раскатке должна быть одинаковой (около 14°C)."
      },
      {
        "stepNumber": 3,
        "instruction": "Запечатайте масляный блок в тесто конвертом и выполните одну простую и одну двойную туру (складывание), убирая в холод между раскатками на 40 минут.",
        "timerSeconds": 4800,
        "tip": "Не давите скалкой — раскатывайте мягкими плавными движениями от центра."
      },
      {
        "stepNumber": 4,
        "instruction": "Раскатайте тесто в пласт толщиной 3.5 мм, нарежьте вытянутые треугольники с основанием 9 см и высотой 25 см. Сверните круассаны.",
        "timerSeconds": 900,
        "tip": "Сворачивайте свободно, не натягивая тесто силой."
      },
      {
        "stepNumber": 5,
        "instruction": "Расстаивайте 2 часа при температуре 26°C (не выше, чтобы масло не потекло!). Смажьте яйцом.",
        "timerSeconds": 7200,
        "tip": "Правильно подошедший круассан дрожит как желе."
      },
      {
        "stepNumber": 6,
        "instruction": "Выпекайте при 195°C 16-18 минут до глубокого золотистого колера.",
        "timerSeconds": 1080,
        "tip": "Остужайте на решетке, чтобы пар вышел."
      }
    ],
    "chefSecrets": [
      "Масло обязательно должно быть 84% сухости: обычное 72% или 82% масло содержит слишком много воды, которая рвет слои при выпечке."
    ],
    "techCard": {
      "dishYield": "8 круассанов по 75 г",
      "kzhbu": {
        "calories": 410,
        "proteins": 7.1,
        "fats": 24.5,
        "carbs": 40.2
      },
      "semiFinishedProducts": [
        "Слоеные заготовки круассанов"
      ],
      "technologicalProcess": "Классическая французская ламинация теста с маслом 84% жирности.",
      "servingTemperature": "Теплые через 20 минут после выпечки.",
      "storageConditions": "Употреблять в день выпечки."
    }
  },
  {
    "id": "pastry-crepes-lace",
    "title": "Ажурные тонкие кружевные блины на молоке со сливочным маслом",
    "category": "pastry",
    "description": "Традиционные русские тонкие блинчики с миллионом дырочек: заварное тесто на свежем молоке и крутом кипятке, сливочное масло и ваниль. Мягкие, эластичные, тающие во рту.",
    "prepTime": 10,
    "cookTime": 20,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Выпечка",
      "Блины",
      "Масленица",
      "Завтрак",
      "Кружево"
    ],
    "ingredients": [
      {
        "name": "Молоко коровье 3.2%",
        "amount": 400,
        "unit": "мл",
        "estimatedCostPerKg": 85,
        "category": "Молочные"
      },
      {
        "name": "Кипяток крутой",
        "amount": 200,
        "unit": "мл",
        "estimatedCostPerKg": 5,
        "category": "Жидкости"
      },
      {
        "name": "Мука пшеничная высшего сорта",
        "amount": 200,
        "unit": "г",
        "estimatedCostPerKg": 60,
        "category": "Крупы и мука"
      },
      {
        "name": "Яйца куриные свежие С0",
        "amount": 3,
        "unit": "шт",
        "estimatedCostPerKg": 160,
        "category": "Яйца"
      },
      {
        "name": "Масло сливочное растопленное",
        "amount": 50,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Сахар песок",
        "amount": 30,
        "unit": "г",
        "estimatedCostPerKg": 70,
        "category": "Бакалея"
      },
      {
        "name": "Соль мелкая",
        "amount": 0.5,
        "unit": "ч. л.",
        "estimatedCostPerKg": 30,
        "category": "Специи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Взбейте яйца с сахаром и солью в пышную пену, влейте теплое молоко.",
        "timerSeconds": 120,
        "tip": "Яйца комнатной температуры взбиваются в разы пышнее."
      },
      {
        "stepNumber": 2,
        "instruction": "Всыпьте просеянную муку и вымешайте венчиком до гладкого густого теста без комочков.",
        "timerSeconds": 120,
        "tip": "Замес в небольшом объеме жидкости исключает комки."
      },
      {
        "stepNumber": 3,
        "instruction": "Не переставая взбивать, тонкой струйкой влейте стакан крутого кипятка — заварите тесто.",
        "timerSeconds": 60,
        "tip": "Кипяток заваривает крахмал муки, образуя сотни мелких пузырьков-дырочек."
      },
      {
        "stepNumber": 4,
        "instruction": "Вмешайте растопленное сливочное масло, оставьте тесто на 15 минут отдохнуть.",
        "timerSeconds": 900,
        "tip": "Масло внутри теста позволяет не смазывать сковороду перед каждым блином."
      },
      {
        "stepNumber": 5,
        "instruction": "Выпекайте на раскаленной чугунной сковороде по 45 секунд с первой стороны и 20 секунд со второй.",
        "timerSeconds": 1200,
        "tip": "Складывайте стопкой, смазывая краешки сливочным маслом."
      }
    ],
    "chefSecrets": [
      "Крутой кипяток, влитый в яично-мучную смесь — секрет тех самых прозрачных ажурных кружевных дырочек."
    ],
    "techCard": {
      "dishYield": "15-18 блинов диаметром 22 см",
      "kzhbu": {
        "calories": 178,
        "proteins": 5.6,
        "fats": 7.8,
        "carbs": 21.2
      },
      "semiFinishedProducts": [
        "Заварное блинное жидкое тесто"
      ],
      "technologicalProcess": "Заваривание клейковины кипятком с контактной двухсторонней выпечкой.",
      "servingTemperature": "60-65°C.",
      "storageConditions": "Хранить под крышкой в холодильнике до 48 часов."
    }
  },
  {
    "id": "pastry-fluffy-oladji",
    "title": "Пышные царские оладьи на кефире без дрожжей",
    "category": "pastry",
    "description": "Толстые, пышные, невесомые оладьи как пуховые подушечки: теплый кефир высокой жирности, сода, мука и сахар. Не опадают после остывания и сохраняют пористую структуру.",
    "prepTime": 10,
    "cookTime": 15,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Выпечка",
      "Оладьи",
      "Кефир",
      "Завтрак",
      "Пышные"
    ],
    "ingredients": [
      {
        "name": "Кефир 3.2% жирности (теплый)",
        "amount": 400,
        "unit": "мл",
        "estimatedCostPerKg": 95,
        "category": "Молочные"
      },
      {
        "name": "Мука пшеничная высшего сорта",
        "amount": 280,
        "unit": "г",
        "estimatedCostPerKg": 60,
        "category": "Крупы и мука"
      },
      {
        "name": "Яйцо куриное С1",
        "amount": 1,
        "unit": "шт",
        "estimatedCostPerKg": 140,
        "category": "Яйца"
      },
      {
        "name": "Сахар песок",
        "amount": 35,
        "unit": "г",
        "estimatedCostPerKg": 70,
        "category": "Бакалея"
      },
      {
        "name": "Сода пищевая",
        "amount": 0.5,
        "unit": "ч. л.",
        "estimatedCostPerKg": 50,
        "category": "Бакалея"
      },
      {
        "name": "Масло растительное для жарки",
        "amount": 50,
        "unit": "мл",
        "estimatedCostPerKg": 120,
        "category": "Масла"
      },
      {
        "name": "Соль поваренная",
        "amount": 0.5,
        "unit": "ч. л.",
        "estimatedCostPerKg": 20,
        "category": "Специи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Кефир обязательно подогрейте в сотейнике до 38-40°C (он должен быть ощутимо теплым, почти горячим, но не створожиться).",
        "timerSeconds": 180,
        "tip": "В теплом кефире сода мгновенно вступает в бурную реакцию."
      },
      {
        "stepNumber": 2,
        "instruction": "Яйцо взбейте венчиком с сахаром и солью, влейте теплый кефир.",
        "timerSeconds": 60,
        "tip": "Не кладите слишком много сахара — из-за него оладьи горят снаружи, оставаясь сырыми внутри."
      },
      {
        "stepNumber": 3,
        "instruction": "Порциями введите просеянную муку, быстро перемешайте ложкой. В самом конце рассыпьте соду по поверхности и вмешайте.",
        "timerSeconds": 120,
        "tip": "Тесто должно быть густым и лениво сползать с ложки тяжелым куском."
      },
      {
        "stepNumber": 4,
        "instruction": "ВАЖНО: Оставьте тесто на 15 минут и больше НИ РАЗУ НЕ ПЕРЕМЕШИВАЙТЕ!",
        "timerSeconds": 900,
        "tip": "Перемешивание разрушит пузырьки углекислого газа, и оладьи опадут."
      },
      {
        "stepNumber": 5,
        "instruction": "Зачерпывайте тесто ложкой с самого края миски и выкладывайте на разогретую с маслом сковороду. Жарьте под крышкой на умеренном огне по 2-3 минуты с каждой стороны.",
        "timerSeconds": 300,
        "tip": "Крышка обеспечивает подъем оладьев в 2-3 раза."
      }
    ],
    "chefSecrets": [
      "Теплый кефир и абсолютный запрет на перемешивание теста после расстойки — 100% гарантия неубиваемой пышности."
    ],
    "techCard": {
      "dishYield": "12-14 пышных оладий (550 г)",
      "kzhbu": {
        "calories": 228,
        "proteins": 6.2,
        "fats": 8.5,
        "carbs": 31.4
      },
      "semiFinishedProducts": [
        "Густое кефирное тесто с активной карбонизацией"
      ],
      "technologicalProcess": "Жарка под крышкой при 160°C с сохранением пористой структуры.",
      "servingTemperature": "60-65°C с медом или вареньем.",
      "storageConditions": "Употреблять теплыми."
    }
  },
  {
    "id": "pastry-quiche-lorraine",
    "title": "Французский открытый пирог Киш Лорен (Quiche Lorraine)",
    "category": "pastry",
    "description": "Классика региона Лотарингия: рубленое рассыпчатое песочное тесто pate brisee, копченая свиная грудинка, обжаренный лук-порей, сыр Грюйер и нежнейшая сливочно-яичная заливка руаяль с мускатным орехом.",
    "prepTime": 25,
    "cookTime": 35,
    "difficulty": "Средне",
    "servings": 6,
    "tags": [
      "Выпечка",
      "Киш",
      "Франция",
      "Грудинка",
      "Сыр"
    ],
    "ingredients": [
      {
        "name": "Мука пшеничная высшего сорта",
        "amount": 220,
        "unit": "г",
        "estimatedCostPerKg": 60,
        "category": "Крупы и мука"
      },
      {
        "name": "Масло сливочное 82.5% ледяное",
        "amount": 110,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Грудинка свиная копченая (или бекон)",
        "amount": 200,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 650,
        "category": "Мясо"
      },
      {
        "name": "Сыр Грюйер или Эмменталь тертый",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 1400,
        "category": "Сыры"
      },
      {
        "name": "Сливки 33% жирности",
        "amount": 250,
        "unit": "мл",
        "estimatedCostPerKg": 320,
        "category": "Молочные"
      },
      {
        "name": "Яйца куриные С0",
        "amount": 3,
        "unit": "шт",
        "estimatedCostPerKg": 160,
        "category": "Яйца"
      },
      {
        "name": "Мускатный орех свеженатертый",
        "amount": 0.5,
        "unit": "г",
        "estimatedCostPerKg": 2000,
        "category": "Специи"
      },
      {
        "name": "Вода ледяная",
        "amount": 40,
        "unit": "мл",
        "estimatedCostPerKg": 5,
        "category": "Жидкости"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Ледяное масло порубите с мукой и щепоткой соли в мелкую крошку, добавьте ледяную воду, быстро соберите тесто в шар и охладите 40 минут.",
        "timerSeconds": 2400,
        "tip": "Быстрый замес не дает маслу растаять от тепла рук."
      },
      {
        "stepNumber": 2,
        "instruction": "Раскатайте тесто, выложите в форму с бортиками 24 см, наколите вилкой и выпекайте «вслепую» с грузом из фасоли при 190°C 15 минут.",
        "timerSeconds": 900,
        "tip": "Слепая выпечка гарантирует хрустящее, непромокшее дно пирога."
      },
      {
        "stepNumber": 3,
        "instruction": "Грудинку нарежьте брусочками и обжарьте на сухой сковороде до легкого румянца, слейте лишний жир.",
        "timerSeconds": 300,
        "tip": "Слитый жир предотвращает избыточную маслянистость пирога."
      },
      {
        "stepNumber": 4,
        "instruction": "Для заливки венчиком взбейте сливки 33%, яйца, мускатный орех, щепотку соли и свежемолотый белый перец.",
        "timerSeconds": 120,
        "tip": "Мускатный орех — душа лотарингского киша."
      },
      {
        "stepNumber": 5,
        "instruction": "На подпеченную основу выложите грудинку, засыпьте тертым сыром Грюйер и залейте сливочной смесью.",
        "timerSeconds": 120,
        "tip": "Заливка должна равномерно распределиться между сыром."
      },
      {
        "stepNumber": 6,
        "instruction": "Выпекайте при 180°C 30-35 минут до схватывания центра и золотистой сырной корочки.",
        "timerSeconds": 2100,
        "tip": "Дайте постоять 15 минут перед нарезкой."
      }
    ],
    "chefSecrets": [
      "Слепая выпечка песочной основы с бобовым грузом — единственный способ избежать сырого подмокшего теста."
    ],
    "techCard": {
      "dishYield": "Пирог 24 см (900 г)",
      "kzhbu": {
        "calories": 345,
        "proteins": 12.8,
        "fats": 26.4,
        "carbs": 14.2
      },
      "semiFinishedProducts": [
        "Подпеченная тарталетка pate brisee",
        "Заливка руаяль"
      ],
      "technologicalProcess": "Двухстадийное выпекание: слепая база + термообработка суфле при 180°C.",
      "servingTemperature": "50-55°C с зеленым хрустящим салатом.",
      "storageConditions": "В холодильнике до 72 часов."
    }
  },
  {
    "id": "pastry-apple-strudel",
    "title": "Венский яблочный штрудель с корицей и орехами",
    "category": "pastry",
    "description": "Шедевр австрийских кофеен: вытяжное эластичное тесто, прозрачное как шелк, сочная начинка из кислых яблок, замоченного в роме изюма, обжаренных сухарей с корицей и дробленого грецкого ореха.",
    "prepTime": 40,
    "cookTime": 35,
    "difficulty": "Профи",
    "servings": 6,
    "tags": [
      "Выпечка",
      "Штрудель",
      "Австрия",
      "Яблоки",
      "Корица"
    ],
    "ingredients": [
      {
        "name": "Мука пшеничная высшего сорта",
        "amount": 200,
        "unit": "г",
        "estimatedCostPerKg": 60,
        "category": "Крупы и мука"
      },
      {
        "name": "Яблоки кислые (Гренни Смит или антоновка)",
        "amount": 700,
        "unit": "г",
        "coldWastePercent": 20,
        "estimatedCostPerKg": 130,
        "category": "Фрукты"
      },
      {
        "name": "Сухари панировочные светлые",
        "amount": 60,
        "unit": "г",
        "estimatedCostPerKg": 90,
        "category": "Бакалея"
      },
      {
        "name": "Масло сливочное 82.5%",
        "amount": 100,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Изюм светлый без косточек",
        "amount": 80,
        "unit": "г",
        "estimatedCostPerKg": 350,
        "category": "Бакалея"
      },
      {
        "name": "Орехи грецкие дробленые",
        "amount": 60,
        "unit": "г",
        "estimatedCostPerKg": 850,
        "category": "Орехи"
      },
      {
        "name": "Сахар песок и корица молотая",
        "amount": 80,
        "unit": "г",
        "estimatedCostPerKg": 100,
        "category": "Бакалея"
      },
      {
        "name": "Ром темный (для замачивания изюма)",
        "amount": 30,
        "unit": "мл",
        "estimatedCostPerKg": 1200,
        "category": "Жидкости"
      },
      {
        "name": "Теплая вода и растительное масло",
        "amount": 100,
        "unit": "мл",
        "estimatedCostPerKg": 20,
        "category": "Жидкости"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Замесите вытяжное тесто из муки, теплой воды, ложки масла и соли. Отбейте об стол 50 раз, смажьте маслом и оставьте под горячей миской на 30 минут.",
        "timerSeconds": 1800,
        "tip": "Тепло и выбивание клейковины делают тесто эластичным как резина."
      },
      {
        "stepNumber": 2,
        "instruction": "Панировочные сухари обжарьте на 40 г сливочного масла до золотистого цвета.",
        "timerSeconds": 180,
        "tip": "Сухари впитывают яблочный сок, сохраняя хруст теста."
      },
      {
        "stepNumber": 3,
        "instruction": "Яблоки нарежьте тонкими пластинками, смешайте с сахаром, корицей, дроблеными орехами и вымоченным в роме изюмом.",
        "timerSeconds": 300,
        "tip": "Ром подчеркивает яблочную свежесть."
      },
      {
        "stepNumber": 4,
        "instruction": "Расстелите льняную скатерть, посыпьте мукой. Раскатайте тесто, а затем тыльной стороной ладоней вытяните его во все стороны до прозрачности (сквозь него должна читаться газета!).",
        "timerSeconds": 600,
        "tip": "Снимите кольца и часы, чтобы не порвать полотно."
      },
      {
        "stepNumber": 5,
        "instruction": "Смажьте тесто растопленным маслом, посыпьте сухарями, выложите яблоки и с помощью скатерти сверните в плотный рулет.",
        "timerSeconds": 240,
        "tip": "Скатерть помогает свернуть тончайшее тесто без разрывов."
      },
      {
        "stepNumber": 6,
        "instruction": "Выпекайте штрудель при 190°C 35 минут, смазывая маслом каждые 10 минут. Подавайте теплым с шариком ванильного пломбира.",
        "timerSeconds": 2100,
        "tip": "Периодическое смазывание создает тонкую золотистую корочку."
      }
    ],
    "chefSecrets": [
      "Правильное вытяжное тесто растягивается на руках без скалки до прозрачности — именно так достигается хрупкая многослойность."
    ],
    "techCard": {
      "dishYield": "1 большой рулет (850 г, 6 порций)",
      "kzhbu": {
        "calories": 245,
        "proteins": 3.8,
        "fats": 10.2,
        "carbs": 35.6
      },
      "semiFinishedProducts": [
        "Вытяжное тесто отдохнувшее",
        "Яблочно-ореховый фарш с ромом"
      ],
      "technologicalProcess": "Вытягивание теста на льняной ткани с последующим запеканием при 190°C.",
      "servingTemperature": "55-60°C с ванильным мороженым.",
      "storageConditions": "Употреблять в течение 24 часов."
    }
  },
  {
    "id": "pastry-eclair-vanilla",
    "title": "Французские эклеры с заварным кремом Патисьер",
    "category": "pastry",
    "description": "Парижская классика: идеально гладкие трубочки из заварного теста pate a choux без трещин, наполненные шелковистым ванильным кремом патисьер на желтках и покрытые глянцевой помадкой.",
    "prepTime": 30,
    "cookTime": 35,
    "difficulty": "Профи",
    "servings": 6,
    "tags": [
      "Выпечка",
      "Эклеры",
      "Франция",
      "Заварной крем",
      "Десерт"
    ],
    "ingredients": [
      {
        "name": "Вода и молоко (1:1)",
        "amount": 200,
        "unit": "мл",
        "estimatedCostPerKg": 45,
        "category": "Жидкости"
      },
      {
        "name": "Масло сливочное 82.5%",
        "amount": 90,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Мука пшеничная высшего сорта",
        "amount": 120,
        "unit": "г",
        "estimatedCostPerKg": 60,
        "category": "Крупы и мука"
      },
      {
        "name": "Яйца куриные свежие С1",
        "amount": 4,
        "unit": "шт",
        "estimatedCostPerKg": 140,
        "category": "Яйца"
      },
      {
        "name": "Желтки куриные (для крема)",
        "amount": 4,
        "unit": "шт",
        "estimatedCostPerKg": 160,
        "category": "Яйца"
      },
      {
        "name": "Молоко 3.2% (для крема)",
        "amount": 350,
        "unit": "мл",
        "estimatedCostPerKg": 85,
        "category": "Молочные"
      },
      {
        "name": "Сахар и кукурузный крахмал",
        "amount": 100,
        "unit": "г",
        "estimatedCostPerKg": 90,
        "category": "Бакалея"
      },
      {
        "name": "Стручок бурбонской ванили",
        "amount": 1,
        "unit": "шт",
        "estimatedCostPerKg": 4000,
        "category": "Специи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "В сотейнике доведите до кипения молоко, воду, масло и щепотку соли. Всыпьте всю муку разом и энергично заваривайте лопаткой 2 минуты до образования гладкого кома и налета на дне.",
        "timerSeconds": 180,
        "tip": "Подсушивание теста на среднем огне — залог подъема эклеров."
      },
      {
        "stepNumber": 2,
        "instruction": "Остудите тесто до 55°C и по одному введите яйца, вымешивая до состояния «птичьего клюва» (тесто стекает с лопатки треугольником).",
        "timerSeconds": 300,
        "tip": "Не вводите яйца в горячее тесто, иначе они свернутся."
      },
      {
        "stepNumber": 3,
        "instruction": "Отсадите эклеры на перфорированный коврик длиной 12 см с помощью насадки «французская звезда» (зубчики предотвращают растрескивание).",
        "timerSeconds": 240,
        "tip": "Насадка с зубчиками распределяет натяжение поверхности."
      },
      {
        "stepNumber": 4,
        "instruction": "Выпекайте при 180°C 35 минут без конвекции, ни в коем случае не открывая духовку первые 25 минут.",
        "timerSeconds": 2100,
        "tip": "Открытие дверцы приведет к моментальному опаданию эклеров."
      },
      {
        "stepNumber": 5,
        "instruction": "Для крема сварите молоко с ванилью, желтками, сахаром и крахмалом до загустения, остудите и взбейте с 40 г сливочного масла.",
        "timerSeconds": 480,
        "tip": "Крахмал дает более стабильный и гладкий крем, чем мука."
      },
      {
        "stepNumber": 6,
        "instruction": "Начините остывшие эклеры кремом через проколы в донышке и покройте глазурью.",
        "timerSeconds": 300,
        "tip": "Подавайте охлажденными."
      }
    ],
    "chefSecrets": [
      "Насадка «французская звезда» создает мелкие бороздки, которые равномерно растягиваются при подъеме, сохраняя идеальную форму без разрывов."
    ],
    "techCard": {
      "dishYield": "10-12 эклеров по 80 г",
      "kzhbu": {
        "calories": 285,
        "proteins": 6.2,
        "fats": 15.4,
        "carbs": 30.5
      },
      "semiFinishedProducts": [
        "Заварные заготовки",
        "Крем Патисьер ванильный"
      ],
      "technologicalProcess": "Заваривание теста, отсадка через насадку и выпекание при 180°C.",
      "servingTemperature": "6-8°C.",
      "storageConditions": "В холодильнике до 48 часов."
    }
  },
  {
    "id": "pastry-cinnamon-rolls",
    "title": "Булочки Синнабон с корицей и крем-чиз глазурью",
    "category": "pastry",
    "description": "Всемирно известные ультрамягкие дрожжевые улитки: воздушное сдобное тесто, карамельная начинка из индонезийской корицы кассия и тростникового сахара, пропитанная тающей глазурью из сливочного сыра маскарпоне.",
    "prepTime": 30,
    "cookTime": 25,
    "difficulty": "Средне",
    "servings": 8,
    "tags": [
      "Выпечка",
      "Синнабон",
      "Корица",
      "Крем-чиз",
      "Сдоба"
    ],
    "ingredients": [
      {
        "name": "Мука пшеничная высшего сорта",
        "amount": 500,
        "unit": "г",
        "estimatedCostPerKg": 60,
        "category": "Крупы и мука"
      },
      {
        "name": "Молоко теплое 3.2%",
        "amount": 200,
        "unit": "мл",
        "estimatedCostPerKg": 85,
        "category": "Молочные"
      },
      {
        "name": "Масло сливочное 82.5% мягкое",
        "amount": 130,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Сахар тростниковый коричневый",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 180,
        "category": "Бакалея"
      },
      {
        "name": "Корица молотая натуральная",
        "amount": 25,
        "unit": "г",
        "estimatedCostPerKg": 1200,
        "category": "Специи"
      },
      {
        "name": "Сыр творожный сливочный (или маскарпоне)",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 650,
        "category": "Сыры"
      },
      {
        "name": "Сахарная пудра",
        "amount": 80,
        "unit": "г",
        "estimatedCostPerKg": 90,
        "category": "Бакалея"
      },
      {
        "name": "Дрожжи сухие быстродействующие",
        "amount": 7,
        "unit": "г",
        "estimatedCostPerKg": 500,
        "category": "Бакалея"
      },
      {
        "name": "Яйца куриные С1",
        "amount": 2,
        "unit": "шт",
        "estimatedCostPerKg": 140,
        "category": "Яйца"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Замесите мягкое, эластичное сдобное тесто из муки, теплого молока, яиц, 60 г сливочного масла, сахара и дрожжей. Оставьте на 1 час в тепле.",
        "timerSeconds": 3600,
        "tip": "Тесто должно быть нежным и слегка липнущим."
      },
      {
        "stepNumber": 2,
        "instruction": "Раскатайте тесто в прямоугольный пласт толщиной 5 мм (примерно 35х45 см).",
        "timerSeconds": 240,
        "tip": "Ровный прямоугольник обеспечивает одинаковые по размеру улитки."
      },
      {
        "stepNumber": 3,
        "instruction": "Смажьте пласт 50 г мягкого сливочного масла, густо и равномерно засыпьте смесью тростникового сахара и корицы, слегка вдавите ладонью.",
        "timerSeconds": 180,
        "tip": "Вдавливание сахара не дает начинке высыпаться при нарезке."
      },
      {
        "stepNumber": 4,
        "instruction": "Сверните в тугой рулет и нарежьте зубной нитью на 12 равных шайб толщиной 3.5 см.",
        "timerSeconds": 180,
        "tip": "Нарезка нитью сохраняет идеальную круглую форму без сминания слоев."
      },
      {
        "stepNumber": 5,
        "instruction": "Выложите булочки в форму на расстоянии 1.5 см друг от друга, дайте расстойку 30 минут. Выпекайте при 180°C 22-25 минут.",
        "timerSeconds": 1500,
        "tip": "При выпечке булочки соединятся бочками, оставаясь сочными внутри."
      },
      {
        "stepNumber": 6,
        "instruction": "Для глазури взбейте сливочный сыр с сахарной пудрой и 20 г мягкого масла. Нанесите на еще горячие булочки прямо из духовки.",
        "timerSeconds": 180,
        "tip": "Глазурь подтает и пропитает булочки до самой сердцевины."
      }
    ],
    "chefSecrets": [
      "Нарезка рулета тонкой шелковой или зубной нитью гарантирует безупречно ровные спирали."
    ],
    "techCard": {
      "dishYield": "12 булочек (1200 г)",
      "kzhbu": {
        "calories": 348,
        "proteins": 5.9,
        "fats": 14.8,
        "carbs": 48.2
      },
      "semiFinishedProducts": [
        "Сдобный рулет с корицей",
        "Сливочно-сырная помадка"
      ],
      "technologicalProcess": "Дрожжевое брожение, формовка нарезкой нитью и горячее глазирование.",
      "servingTemperature": "45-50°C.",
      "storageConditions": "Хранить в закрытом контейнере до 48 часов."
    }
  },
  {
    "id": "pastry-blueberry-muffins",
    "title": "Американские маффины с голубикой и хрустящим штрейзелем",
    "category": "pastry",
    "description": "Знаменитые маффины из бостонских пекарен: пышная крупнопористая текстура на пахте, лопающиеся во рту ягоды свежей голубики и золотистая хрустящая сахарная крошка сверху.",
    "prepTime": 15,
    "cookTime": 22,
    "difficulty": "Легко",
    "servings": 6,
    "tags": [
      "Выпечка",
      "Маффины",
      "Голубика",
      "Завтрак",
      "Америка"
    ],
    "ingredients": [
      {
        "name": "Мука пшеничная высшего сорта",
        "amount": 280,
        "unit": "г",
        "estimatedCostPerKg": 60,
        "category": "Крупы и мука"
      },
      {
        "name": "Голубика свежая спелая",
        "amount": 200,
        "unit": "г",
        "estimatedCostPerKg": 750,
        "category": "Ягоды"
      },
      {
        "name": "Кефир или простокваша 3.2%",
        "amount": 200,
        "unit": "мл",
        "estimatedCostPerKg": 95,
        "category": "Молочные"
      },
      {
        "name": "Масло сливочное 82.5% растопленное",
        "amount": 100,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Сахар песок",
        "amount": 130,
        "unit": "г",
        "estimatedCostPerKg": 70,
        "category": "Бакалея"
      },
      {
        "name": "Яйца куриные С1",
        "amount": 2,
        "unit": "шт",
        "estimatedCostPerKg": 140,
        "category": "Яйца"
      },
      {
        "name": "Разрыхлитель теста",
        "amount": 10,
        "unit": "г",
        "estimatedCostPerKg": 300,
        "category": "Бакалея"
      },
      {
        "name": "Ванильный экстракт и цедра лимона",
        "amount": 5,
        "unit": "г",
        "estimatedCostPerKg": 1500,
        "category": "Бакалея"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "В одной миске смешайте сухие ингредиенты: просеянную муку, сахар, разрыхлитель и соль.",
        "timerSeconds": 60,
        "tip": "Равномерное распределение разрыхлителя обеспечивает ровный купол."
      },
      {
        "stepNumber": 2,
        "instruction": "В другой миске соедините жидкие: кефир, яйца, растопленное масло, ваниль и тертую цедру лимона.",
        "timerSeconds": 60,
        "tip": "Лимонная цедра раскрывает ягодный букет голубики."
      },
      {
        "stepNumber": 3,
        "instruction": "Голубику обваляйте в 1 ст. л. муки.",
        "timerSeconds": 30,
        "tip": "Обваливание в муке не дает ягодам опуститься на самое дно формочки."
      },
      {
        "stepNumber": 4,
        "instruction": "Соедините сухие и жидкие ингредиенты, аккуратно перемешайте лопаткой всего 10-12 движений! Добавьте ягоды.",
        "timerSeconds": 45,
        "tip": "Золотое правило маффинов: не вымешивайте долго! Тесто должно оставаться комковатым."
      },
      {
        "stepNumber": 5,
        "instruction": "Разложите по бумажным капсулам в металлическую форму и выпекайте при 200°C 20-22 минуты до уверенного румянца.",
        "timerSeconds": 1300,
        "tip": "Высокая температура создает высокий сахарный купол."
      }
    ],
    "chefSecrets": [
      "Грубый и быстрый замес (не более 15 секунд) сохраняет крупнопористую воздушную текстуру кекса без резиновости."
    ],
    "techCard": {
      "dishYield": "12 маффинов по 75 г",
      "kzhbu": {
        "calories": 268,
        "proteins": 4.5,
        "fats": 11.2,
        "carbs": 37.8
      },
      "semiFinishedProducts": [
        "Быстрое маффинное тесто с голубикой"
      ],
      "technologicalProcess": "Muffin method (раздельное смешивание сухих и влажных фаз без аэрации).",
      "servingTemperature": "Теплые или комнатная.",
      "storageConditions": "В закрытой таре до 4 суток."
    }
  },
  {
    "id": "pastry-fudge-brownie",
    "title": "Шоколадный фадж-брауни с грецким орехом и морской солью",
    "category": "pastry",
    "description": "Настоящий американский фадж-брауни: обилие горького 70% шоколада, сливочное масло, минимум муки, жареные грецкие орехи и влажная, тягучая сердцевина с тонкой глянцевой сахарной корочкой.",
    "prepTime": 15,
    "cookTime": 25,
    "difficulty": "Легко",
    "servings": 8,
    "tags": [
      "Выпечка",
      "Брауни",
      "Шоколад",
      "Орехи",
      "Десерт"
    ],
    "ingredients": [
      {
        "name": "Шоколад темный 70% какао",
        "amount": 200,
        "unit": "г",
        "estimatedCostPerKg": 900,
        "category": "Бакалея"
      },
      {
        "name": "Масло сливочное 82.5%",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Яйца куриные свежие С0",
        "amount": 3,
        "unit": "шт",
        "estimatedCostPerKg": 160,
        "category": "Яйца"
      },
      {
        "name": "Сахар тростниковый",
        "amount": 160,
        "unit": "г",
        "estimatedCostPerKg": 180,
        "category": "Бакалея"
      },
      {
        "name": "Мука пшеничная",
        "amount": 70,
        "unit": "г",
        "estimatedCostPerKg": 60,
        "category": "Крупы и мука"
      },
      {
        "name": "Какао-порошок алкализованный",
        "amount": 25,
        "unit": "г",
        "estimatedCostPerKg": 650,
        "category": "Бакалея"
      },
      {
        "name": "Орехи грецкие обжаренные",
        "amount": 80,
        "unit": "г",
        "estimatedCostPerKg": 850,
        "category": "Орехи"
      },
      {
        "name": "Соль морская хлопьями (Maldon)",
        "amount": 1,
        "unit": "ч. л.",
        "estimatedCostPerKg": 250,
        "category": "Специи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Шоколад и сливочное масло растопите вместе на водяной бане или в микроволновке короткими импульсами, перемешайте до гладкости.",
        "timerSeconds": 180,
        "tip": "Не перегревайте шоколад выше 50°C, чтобы он не свернулся."
      },
      {
        "stepNumber": 2,
        "instruction": "Яйца с сахаром взбивайте миксером полные 5-7 минут до образования пышной, светлой, густой пены.",
        "timerSeconds": 420,
        "tip": "Тщательное взбивание яиц с сахаром образует ту самую хрустящую глянцевую пленочку сверху."
      },
      {
        "stepNumber": 3,
        "instruction": "Влейте остывшую шоколадную смесь в яйца, перемешайте лопаткой снизу вверх.",
        "timerSeconds": 60,
        "tip": "Аккуратное вымешивание сохраняет воздушную структуру."
      },
      {
        "stepNumber": 4,
        "instruction": "Просейте муку с какао, добавьте крупно порубленные орехи и аккуратно соедините.",
        "timerSeconds": 60,
        "tip": "Минимум муки — закон тягучего «fudgy» центра."
      },
      {
        "stepNumber": 5,
        "instruction": "Переложите в форму 20х20 см с пергаментом. Выпекайте при 170°C строго 22-25 минут (шпажка должна выходить с влажными крошками!).",
        "timerSeconds": 1400,
        "tip": "Если шпажка сухая — брауни пересушен и стал обычным сухим кексом."
      },
      {
        "stepNumber": 6,
        "instruction": "Посыпьте крупной хлопьевой солью, полностью остудите в форме и уберите в холод на 2 часа перед нарезкой.",
        "timerSeconds": 7200,
        "tip": "Охлаждение стабилизирует текстуру и делает ее плотной и тающей."
      }
    ],
    "chefSecrets": [
      "Взбивание сахара с яйцами до белой пены дает ту самую знаменитую бумажно-глянцевую корочку."
    ],
    "techCard": {
      "dishYield": "Форма 20х20 см (850 г, 9 порций)",
      "kzhbu": {
        "calories": 430,
        "proteins": 6.8,
        "fats": 28.5,
        "carbs": 36.4
      },
      "semiFinishedProducts": [
        "Шоколадно-масляный ганаш"
      ],
      "technologicalProcess": "Щадящее запекание шоколадного теста при 170°C с сохранением влажного центра.",
      "servingTemperature": "Комнатная или охлажденный.",
      "storageConditions": "В закрытом боксе до 7 суток."
    }
  },
  {
    "id": "pastry-medovik-honey-cake",
    "title": "Торт Медовик заварной классический со сметанным кремом",
    "category": "pastry",
    "description": "Главный символ домашнего уюта: тончайшие заварные медовые коржи карамельного оттенка, пропитанные натуральным кремом из отвешенной фермерской сметаны с ванилью.",
    "prepTime": 45,
    "cookTime": 30,
    "difficulty": "Профи",
    "servings": 8,
    "tags": [
      "Выпечка",
      "Медовик",
      "Торт",
      "Сметана",
      "Мед"
    ],
    "ingredients": [
      {
        "name": "Мед гречишный или липовый натуральный",
        "amount": 100,
        "unit": "г",
        "estimatedCostPerKg": 450,
        "category": "Бакалея"
      },
      {
        "name": "Сахар песок",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 70,
        "category": "Бакалея"
      },
      {
        "name": "Масло сливочное 82.5%",
        "amount": 100,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Яйца куриные С1",
        "amount": 3,
        "unit": "шт",
        "estimatedCostPerKg": 140,
        "category": "Яйца"
      },
      {
        "name": "Сода пищевая",
        "amount": 1,
        "unit": "ч. л.",
        "estimatedCostPerKg": 50,
        "category": "Бакалея"
      },
      {
        "name": "Мука пшеничная высшего сорта",
        "amount": 400,
        "unit": "г",
        "estimatedCostPerKg": 60,
        "category": "Крупы и мука"
      },
      {
        "name": "Сметана фермерская 25-30% (отвешенная)",
        "amount": 600,
        "unit": "г",
        "estimatedCostPerKg": 280,
        "category": "Молочные"
      },
      {
        "name": "Сахарная пудра (для крема)",
        "amount": 120,
        "unit": "г",
        "estimatedCostPerKg": 90,
        "category": "Бакалея"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "В сотейнике соедините мед, сахар и сливочное масло, прогрейте до растворения сахара. Всыпьте соду и варите, помешивая, 2-3 минуты до образования пышной пены и карамельного цвета.",
        "timerSeconds": 240,
        "tip": "Реакция меда с содой дает медовику его фирменный цвет и вкус ириски."
      },
      {
        "stepNumber": 2,
        "instruction": "Снимите с огня, остудите 5 минут, по одному вмешайте яйца. Постепенно добавьте муку и замесите мягкое теплое тесто.",
        "timerSeconds": 180,
        "tip": "Теплое тесто легко раскатывается."
      },
      {
        "stepNumber": 3,
        "instruction": "Разделите тесто на 8-10 равных колобков. Раскатайте каждый прямо на пергаменте в тонкий круг диаметром 22 см, наколите вилкой.",
        "timerSeconds": 600,
        "tip": "Раскатывайте максимально тонко — коржи поднимутся в духовке."
      },
      {
        "stepNumber": 4,
        "instruction": "Выпекайте каждый корж при 180°C всего по 4-5 минут до золотисто-янтарного цвета. Обрезки сохраните для посыпки.",
        "timerSeconds": 1200,
        "tip": "Выпекаются коржи мгновенно."
      },
      {
        "stepNumber": 5,
        "instruction": "Сметану взбейте с сахарной пудрой и ванилью в плотный крем. Щедро промажьте все коржи, собирая торт.",
        "timerSeconds": 300,
        "tip": "Не жалейте крема: коржи должны полностью пропитаться."
      },
      {
        "stepNumber": 6,
        "instruction": "Обсыпьте торт измельченной крошкой от обрезков и оставьте в холодильнике минимум на 8 часов.",
        "timerSeconds": 28800,
        "tip": "После пропитки торт режется как нежнейшее суфле."
      }
    ],
    "chefSecrets": [
      "Отвешивание сметаны в марле удаляет лишнюю сыворотку, делая крем устойчивым и густым без загустителей."
    ],
    "techCard": {
      "dishYield": "Торт диаметром 22 см (1400 г, 8-10 порций)",
      "kzhbu": {
        "calories": 310,
        "proteins": 5.4,
        "fats": 14.8,
        "carbs": 41.2
      },
      "semiFinishedProducts": [
        "Заварные медовые коржи",
        "Сметанный ванильный крем"
      ],
      "technologicalProcess": "Карамелизация меда с содой, выпекание тонких коржей и ферментативная пропитка.",
      "servingTemperature": "6-8°C.",
      "storageConditions": "В закрытом тортовнике в холодильнике до 5 суток."
    }
  },
  {
    "id": "pastry-napoleon-classic",
    "title": "Торт Наполеон классический с кремом Дипломат",
    "category": "pastry",
    "description": "Королевский десерт: тончайшие хрупкие коржи домашнего быстрого слоеного теста на ледяном масле, прослоенные нежнейшим кремом Дипломат (заварной крем патисьер, облегченный взбитыми сливками).",
    "prepTime": 50,
    "cookTime": 40,
    "difficulty": "Профи",
    "servings": 8,
    "tags": [
      "Выпечка",
      "Наполеон",
      "Торт",
      "Слоеное тесто",
      "Крем Дипломат"
    ],
    "ingredients": [
      {
        "name": "Мука пшеничная высшего сорта",
        "amount": 450,
        "unit": "г",
        "estimatedCostPerKg": 60,
        "category": "Крупы и мука"
      },
      {
        "name": "Масло сливочное 82.5% замороженное",
        "amount": 300,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Вода ледяная с ложкой уксуса",
        "amount": 150,
        "unit": "мл",
        "estimatedCostPerKg": 5,
        "category": "Жидкости"
      },
      {
        "name": "Яйцо куриное С1",
        "amount": 1,
        "unit": "шт",
        "estimatedCostPerKg": 140,
        "category": "Яйца"
      },
      {
        "name": "Молоко 3.2% (для крема)",
        "amount": 500,
        "unit": "мл",
        "estimatedCostPerKg": 85,
        "category": "Молочные"
      },
      {
        "name": "Сливки 33% жирности (для крема)",
        "amount": 200,
        "unit": "мл",
        "estimatedCostPerKg": 320,
        "category": "Молочные"
      },
      {
        "name": "Желтки куриные С0",
        "amount": 4,
        "unit": "шт",
        "estimatedCostPerKg": 160,
        "category": "Яйца"
      },
      {
        "name": "Сахар песок",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 70,
        "category": "Бакалея"
      },
      {
        "name": "Кукурузный крахмал",
        "amount": 40,
        "unit": "г",
        "estimatedCostPerKg": 110,
        "category": "Бакалея"
      },
      {
        "name": "Ваниль бурбонская",
        "amount": 1,
        "unit": "шт",
        "estimatedCostPerKg": 4000,
        "category": "Специи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Замороженное масло натрите на крупной терке прямо в муку, постоянно обмакивая брусок в муку. Быстро перемешайте руками в сухую крошку.",
        "timerSeconds": 240,
        "tip": "Масло не должно таять — работайте максимально быстро."
      },
      {
        "stepNumber": 2,
        "instruction": "Влейте взбитое с ледяной водой и уксусом яйцо, соберите тесто в ком без вымешивания! Разделите на 10 шариков и уберите в морозилку на 1 час.",
        "timerSeconds": 3600,
        "tip": "Уксус делает слои хрупкими и ломкими."
      },
      {
        "stepNumber": 3,
        "instruction": "Раскатывайте каждый шарик на бумаге до полупрозрачности (диаметр 22 см), часто наколите вилкой и выпекайте при 210°C 5-7 минут до вздутия и золотистого цвета.",
        "timerSeconds": 1500,
        "tip": "Высокая температура дает мгновенное расслоение."
      },
      {
        "stepNumber": 4,
        "instruction": "Сварите классический заварной крем на молоке, желтках, сахаре и крахмале, остудите. Отдельно взбейте холодные сливки 33% и аккуратно введите в крем (крем Дипломат).",
        "timerSeconds": 480,
        "tip": "Сливки придают крему воздушную пломбирную легкость."
      },
      {
        "stepNumber": 5,
        "instruction": "Соберите торт, промазывая каждый корж кремом, слегка прижимая ладонями. Один корж измельчите в крошку для посыпки.",
        "timerSeconds": 300,
        "tip": "Посыпьте бока и верх торта."
      },
      {
        "stepNumber": 6,
        "instruction": "Оставьте на 2 часа при комнатной температуре, затем уберите в холодильник на 8 часов для идеальной слоистой мягкости.",
        "timerSeconds": 28800,
        "tip": "Выдержка в холоде делает коржи единым целым."
      }
    ],
    "chefSecrets": [
      "Крем Дипломат со взбитыми сливками делает «Наполеон» тающим во рту, избавляя от тяжести чисто масляных кремов."
    ],
    "techCard": {
      "dishYield": "Торт 22 см (1500 г, 10 порций)",
      "kzhbu": {
        "calories": 365,
        "proteins": 5.8,
        "fats": 23.4,
        "carbs": 32.8
      },
      "semiFinishedProducts": [
        "Хрупкие рубленые коржи",
        "Крем Дипломат ванильный"
      ],
      "technologicalProcess": "Быстрое слоение сливочным жиром с высокотемпературным выпеканием.",
      "servingTemperature": "8-10°C.",
      "storageConditions": "В холодильнике до 4 суток."
    }
  },
  {
    "id": "pastry-carrot-cake",
    "title": "Пряный морковный торт с крем-чизом и карамелизованными орехами",
    "category": "pastry",
    "description": "Влажный, ароматный бисквит с сочной сладкой морковью, корицей, мускатным орехом, имбирем и грецким орехом, покрытый шелковистым кремом из сыра филадельфия.",
    "prepTime": 25,
    "cookTime": 40,
    "difficulty": "Легко",
    "servings": 8,
    "tags": [
      "Выпечка",
      "Морковный торт",
      "Крем-чиз",
      "Орехи",
      "Пряности"
    ],
    "ingredients": [
      {
        "name": "Морковь свежая сочная (мелкотертая)",
        "amount": 300,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 40,
        "category": "Овощи"
      },
      {
        "name": "Мука пшеничная высшего сорта",
        "amount": 250,
        "unit": "г",
        "estimatedCostPerKg": 60,
        "category": "Крупы и мука"
      },
      {
        "name": "Масло растительное рафинированное",
        "amount": 150,
        "unit": "мл",
        "estimatedCostPerKg": 120,
        "category": "Масла"
      },
      {
        "name": "Сахар тростниковый",
        "amount": 180,
        "unit": "г",
        "estimatedCostPerKg": 180,
        "category": "Бакалея"
      },
      {
        "name": "Яйца куриные свежие С1",
        "amount": 3,
        "unit": "шт",
        "estimatedCostPerKg": 140,
        "category": "Яйца"
      },
      {
        "name": "Орехи грецкие рубленые",
        "amount": 100,
        "unit": "г",
        "estimatedCostPerKg": 850,
        "category": "Орехи"
      },
      {
        "name": "Корица, мускатный орех, имбирь",
        "amount": 10,
        "unit": "г",
        "estimatedCostPerKg": 1200,
        "category": "Специи"
      },
      {
        "name": "Сыр сливочный творожный",
        "amount": 350,
        "unit": "г",
        "estimatedCostPerKg": 650,
        "category": "Сыры"
      },
      {
        "name": "Сливки 33% или сливочное масло",
        "amount": 100,
        "unit": "г",
        "estimatedCostPerKg": 320,
        "category": "Молочные"
      },
      {
        "name": "Сахарная пудра",
        "amount": 80,
        "unit": "г",
        "estimatedCostPerKg": 90,
        "category": "Бакалея"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Морковь натрите на самой мелкой терке, орехи крупно порубите и прокалите на сухой сковороде 3 минуты.",
        "timerSeconds": 300,
        "tip": "Мелкая терка дает идеальную сочность без ощущения сырой моркови в бисквите."
      },
      {
        "stepNumber": 2,
        "instruction": "Яйца взбейте с сахаром 4 минуты до пышной пены, влейте растительное масло тонкой струйкой.",
        "timerSeconds": 240,
        "tip": "Растительное масло гарантирует влажный мякиш, который никогда не сохнет."
      },
      {
        "stepNumber": 3,
        "instruction": "Всыпьте просеянную муку со специями, разрыхлителем и содой. Вмешайте морковь и орехи лопаткой.",
        "timerSeconds": 120,
        "tip": "Пряный букет корицы и мускатного ореха раскрывается при выпекании."
      },
      {
        "stepNumber": 4,
        "instruction": "Выпекайте в форме 20 см при 170°C 40-45 минут до сухой шпажки. Остудите и разрежьте на 3 коржа.",
        "timerSeconds": 2700,
        "tip": "Бисквиту дайте выстояться в пленке в холодильнике перед нарезкой."
      },
      {
        "stepNumber": 5,
        "instruction": "Для крема взбейте холодный сливочный сыр с сахарной пудрой и сливками в устойчивую пышную массу.",
        "timerSeconds": 180,
        "tip": "Крем-чиз держит четкую форму и оттеняет сладость коржей."
      },
      {
        "stepNumber": 6,
        "instruction": "Прослоите коржи кремом, оформите торт и украсьте орехами в карамели.",
        "timerSeconds": 300,
        "tip": "Подавайте охлажденным."
      }
    ],
    "chefSecrets": [
      "Растительное масло вместо сливочного делает морковный бисквит феноменально влажным, сохраняя свежесть до недели."
    ],
    "techCard": {
      "dishYield": "Торт 20 см (1350 г, 8 порций)",
      "kzhbu": {
        "calories": 355,
        "proteins": 5.4,
        "fats": 21.8,
        "carbs": 34.5
      },
      "semiFinishedProducts": [
        "Пряный морковный бисквит",
        "Крем-чиз на сливках"
      ],
      "technologicalProcess": "Аэрация яичной массы, выпекание при 170°C и сборка с сырным кремом.",
      "servingTemperature": "10-12°C.",
      "storageConditions": "В холодильнике до 5 суток."
    }
  },
  {
    "id": "pastry-profiteroles-salted-caramel",
    "title": "Французские профитроли с кремом и соленой карамелью",
    "category": "pastry",
    "description": "Воздушные шарики из заварного теста pate a choux, начиненные сливочно-сырным кремом Шантийи и щедро политые теплой тягучей соленой карамелью.",
    "prepTime": 25,
    "cookTime": 25,
    "difficulty": "Средне",
    "servings": 6,
    "tags": [
      "Выпечка",
      "Профитроли",
      "Франция",
      "Карамель",
      "Десерт"
    ],
    "ingredients": [
      {
        "name": "Вода питьевая",
        "amount": 150,
        "unit": "мл",
        "estimatedCostPerKg": 5,
        "category": "Жидкости"
      },
      {
        "name": "Масло сливочное 82.5%",
        "amount": 75,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Мука пшеничная высшего сорта",
        "amount": 100,
        "unit": "г",
        "estimatedCostPerKg": 60,
        "category": "Крупы и мука"
      },
      {
        "name": "Яйца куриные С1",
        "amount": 3,
        "unit": "шт",
        "estimatedCostPerKg": 140,
        "category": "Яйца"
      },
      {
        "name": "Сливки 33% жирности (для крема)",
        "amount": 300,
        "unit": "мл",
        "estimatedCostPerKg": 320,
        "category": "Молочные"
      },
      {
        "name": "Сахарная пудра",
        "amount": 50,
        "unit": "г",
        "estimatedCostPerKg": 90,
        "category": "Бакалея"
      },
      {
        "name": "Карамель соленая готовая домашняя",
        "amount": 100,
        "unit": "г",
        "estimatedCostPerKg": 350,
        "category": "Бакалея"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Сварите заварное тесто: закипятите воду с маслом, всыпьте муку, подсушите ком теста 2 минуты, остудите и вмешайте яйца по одному.",
        "timerSeconds": 240,
        "tip": "Тесто должно медленно сползать лентой."
      },
      {
        "stepNumber": 2,
        "instruction": "Отсадите круглые шарики диаметром 3 см на пергамент с расстоянием 4 см друг от друга.",
        "timerSeconds": 180,
        "tip": "Смоченным пальцем пригладьте хвостики сверху."
      },
      {
        "stepNumber": 3,
        "instruction": "Выпекайте при 190°C 20 минут, затем убавьте до 160°C и подсушите еще 8 минут.",
        "timerSeconds": 1680,
        "tip": "Подсушивание гарантирует полую хрустящую сферу внутри."
      },
      {
        "stepNumber": 4,
        "instruction": "Сливки взбейте с сахарной пудрой в крепкую пену Шантийи.",
        "timerSeconds": 180,
        "tip": "Сливки должны быть ледяными."
      },
      {
        "stepNumber": 5,
        "instruction": "Через прокол снизу наполните профитроли кремом с помощью кондитерского мешка.",
        "timerSeconds": 180,
        "tip": "Наполняйте до ощущения тяжести шарика."
      },
      {
        "stepNumber": 6,
        "instruction": "Сложите горкой в форме пирамиды и полейте теплой соленой карамелью.",
        "timerSeconds": 60,
        "tip": "Подавайте сразу."
      }
    ],
    "chefSecrets": [
      "Двойной температурный режим (190°C подъем + 160°C сушка) предотвращает опадание заварных шариков."
    ],
    "techCard": {
      "dishYield": "20-24 профитроли (700 г)",
      "kzhbu": {
        "calories": 295,
        "proteins": 5.2,
        "fats": 19.8,
        "carbs": 24.1
      },
      "semiFinishedProducts": [
        "Заварные пустые сферы",
        "Крем Шантийи взбитый"
      ],
      "technologicalProcess": "Выпекание заварных полых полуфабрикатов и наполнение эмульсией.",
      "servingTemperature": "12-14°C.",
      "storageConditions": "Наполненные хранить не более 24 часов."
    }
  },
  {
    "id": "pastry-fluffy-pancakes",
    "title": "Американские пышные панкейки с кленовым сиропом",
    "category": "pastry",
    "description": "Идеальный американский завтрак: высокие, мягкие, пористые блинчики-панкейки с нежным сливочным вкусом, кубиком сливочного масла и натуральным кленовым сиропом.",
    "prepTime": 10,
    "cookTime": 12,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Выпечка",
      "Панкейки",
      "Америка",
      "Завтрак",
      "Кленовый сироп"
    ],
    "ingredients": [
      {
        "name": "Мука пшеничная высшего сорта",
        "amount": 200,
        "unit": "г",
        "estimatedCostPerKg": 60,
        "category": "Крупы и мука"
      },
      {
        "name": "Молоко коровье 3.2%",
        "amount": 220,
        "unit": "мл",
        "estimatedCostPerKg": 85,
        "category": "Молочные"
      },
      {
        "name": "Масло сливочное растопленное",
        "amount": 40,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Яйцо куриное свежее С0",
        "amount": 1,
        "unit": "шт",
        "estimatedCostPerKg": 160,
        "category": "Яйца"
      },
      {
        "name": "Сахар песок",
        "amount": 30,
        "unit": "г",
        "estimatedCostPerKg": 70,
        "category": "Бакалея"
      },
      {
        "name": "Разрыхлитель теста",
        "amount": 8,
        "unit": "г",
        "estimatedCostPerKg": 300,
        "category": "Бакалея"
      },
      {
        "name": "Сироп кленовый натуральный",
        "amount": 60,
        "unit": "мл",
        "estimatedCostPerKg": 1800,
        "category": "Бакалея"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Яйцо разделите на белок и желток. Белок взбейте со щепоткой соли в устойчивую пену.",
        "timerSeconds": 120,
        "tip": "Взбитый отдельно белок — секрет воздушности суфле в панкейках."
      },
      {
        "stepNumber": 2,
        "instruction": "Желток смешайте с сахаром, молоком и растопленным маслом, всыпьте муку с разрыхлителем и перемешайте.",
        "timerSeconds": 60,
        "tip": "Не вымешивайте долго."
      },
      {
        "stepNumber": 3,
        "instruction": "Лопаткой введите взбитый белок в тесто круговыми движениями снизу вверх.",
        "timerSeconds": 45,
        "tip": "Воздушные пузырьки белка распределяются по всему объему теста."
      },
      {
        "stepNumber": 4,
        "instruction": "Выпекайте на СУХОЙ антипригарной сковороде на среднем огне. Налейте половник теста, дождитесь появления лопающихся пузырьков на поверхности (около 2 минут).",
        "timerSeconds": 120,
        "tip": "Сухая сковорода дает ровный бархатистый матовый загар."
      },
      {
        "stepNumber": 5,
        "instruction": "Переверните широкой лопаткой и выпекайте еще 1 минуту с обратной стороны.",
        "timerSeconds": 60,
        "tip": "Складывайте стопкой по 4-5 штук."
      },
      {
        "stepNumber": 6,
        "instruction": "Увенчайте стопку кубиком холодного сливочного масла и щедро полейте настоящим кленовым сиропом.",
        "timerSeconds": 30,
        "tip": "Подавайте теплыми."
      }
    ],
    "chefSecrets": [
      "Сухая сковорода без капли жира дает идеальную ровную золотистую матовую поверхность без темных подпалин."
    ],
    "techCard": {
      "dishYield": "8 панкейков диаметром 12 см",
      "kzhbu": {
        "calories": 212,
        "proteins": 5.8,
        "fats": 7.4,
        "carbs": 30.5
      },
      "semiFinishedProducts": [
        "Панкейковое тесто на взбитом белке"
      ],
      "technologicalProcess": "Сухая контактная жарка без масла при умеренном нагреве.",
      "servingTemperature": "65°C.",
      "storageConditions": "Употреблять сразу."
    }
  },
  {
    "id": "pastry-cherry-shortbread-pie",
    "title": "Открытый пирог с вишней на хрустящем песочном тесте",
    "category": "pastry",
    "description": "Идеальный баланс хрупкого рассыпчатого сливочного теста sablé и густой сочной начинки из спелой вишни с нотками корицы и миндаля.",
    "prepTime": 20,
    "cookTime": 35,
    "difficulty": "Легко",
    "servings": 6,
    "tags": [
      "Выпечка",
      "Пирог",
      "Вишня",
      "Песочное тесто",
      "Ягоды"
    ],
    "ingredients": [
      {
        "name": "Мука пшеничная высшего сорта",
        "amount": 250,
        "unit": "г",
        "estimatedCostPerKg": 60,
        "category": "Крупы и мука"
      },
      {
        "name": "Масло сливочное 82.5% холодное",
        "amount": 130,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Вишня без косточек (свежая или с/м)",
        "amount": 450,
        "unit": "г",
        "estimatedCostPerKg": 280,
        "category": "Ягоды"
      },
      {
        "name": "Сахар песок",
        "amount": 120,
        "unit": "г",
        "estimatedCostPerKg": 70,
        "category": "Бакалея"
      },
      {
        "name": "Кукурузный крахмал",
        "amount": 25,
        "unit": "г",
        "estimatedCostPerKg": 110,
        "category": "Бакалея"
      },
      {
        "name": "Желток куриный",
        "amount": 1,
        "unit": "шт",
        "estimatedCostPerKg": 160,
        "category": "Яйца"
      },
      {
        "name": "Лепестки миндаля для посыпки",
        "amount": 25,
        "unit": "г",
        "estimatedCostPerKg": 1100,
        "category": "Орехи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Холодное масло разотрите с мукой и 40 г сахара в мелкую крошку, добавьте желток и 20 мл ледяной воды, быстро соберите тесто в шар. Охладите 30 минут.",
        "timerSeconds": 1800,
        "tip": "Песочное тесто нельзя месить долго, чтобы оно не стало плотным."
      },
      {
        "stepNumber": 2,
        "instruction": "Вишню прогрейте в сотейнике с оставшимся сахаром. Разведите крахмал в 30 мл холодной воды и влейте в кипящую вишню, проварите 1 минуту до загустения.",
        "timerSeconds": 180,
        "tip": "Заваривание начинки крахмалом гарантирует, что пирог не потечет при нарезке."
      },
      {
        "stepNumber": 3,
        "instruction": "Раскатайте тесто, выложите в форму 22 см с бортиками 3 см.",
        "timerSeconds": 120,
        "tip": "Наколите дно вилкой."
      },
      {
        "stepNumber": 4,
        "instruction": "Выложите теплую вишневую начинку, посыпьте лепестками миндаля.",
        "timerSeconds": 60,
        "tip": "Миндаль аппетитно подрумянится в печи."
      },
      {
        "stepNumber": 5,
        "instruction": "Выпекайте при 180°C 30-35 минут до золотистых краев песочного теста.",
        "timerSeconds": 2100,
        "tip": "Остудите до комнатной температуры перед нарезкой."
      }
    ],
    "chefSecrets": [
      "Предварительное заваривание вишни крахмалом исключает отмокание песочной корзинки."
    ],
    "techCard": {
      "dishYield": "Пирог 22 см (800 г)",
      "kzhbu": {
        "calories": 275,
        "proteins": 3.9,
        "fats": 13.2,
        "carbs": 36.1
      },
      "semiFinishedProducts": [
        "Песочная корзина sablé",
        "Вишневый конфитюр на крахмале"
      ],
      "technologicalProcess": "Заваривание ягодной массы с последующей выпечкой в песочной основе при 180°C.",
      "servingTemperature": "Комнатная или слегка теплый с шариком мороженого.",
      "storageConditions": "В закрытом виде до 72 часов."
    }
  },
  {
    "id": "pastry-focaccia-genovese",
    "title": "Генуэзская фокачча с розмарином и крупной морской солью",
    "category": "pastry",
    "description": "Традиционный лигурийский хлеб: хрустящая золотистая корочка, нежнейший пористый мякиш с характерными ямочками от пальцев, пропитанными эмульсией из оливкового масла Extra Virgin и морской воды, со свежим розмарином.",
    "prepTime": 25,
    "cookTime": 20,
    "difficulty": "Средне",
    "servings": 6,
    "tags": [
      "Выпечка",
      "Фокачча",
      "Италия",
      "Розмарин",
      "Хлеб"
    ],
    "ingredients": [
      {
        "name": "Мука пшеничная хлебопекарная высокой силы",
        "amount": 450,
        "unit": "г",
        "estimatedCostPerKg": 80,
        "category": "Крупы и мука"
      },
      {
        "name": "Вода питьевая теплая (гидратация 70%)",
        "amount": 315,
        "unit": "мл",
        "estimatedCostPerKg": 5,
        "category": "Жидкости"
      },
      {
        "name": "Масло оливковое Extra Virgin высокого качества",
        "amount": 60,
        "unit": "мл",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Дрожжи сухие",
        "amount": 5,
        "unit": "г",
        "estimatedCostPerKg": 500,
        "category": "Бакалея"
      },
      {
        "name": "Розмарин свежий (иголочки)",
        "amount": 15,
        "unit": "г",
        "coldWastePercent": 30,
        "estimatedCostPerKg": 950,
        "category": "Зелень"
      },
      {
        "name": "Соль морская крупная хлопьевая",
        "amount": 10,
        "unit": "г",
        "estimatedCostPerKg": 100,
        "category": "Специи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Замесите влажное тесто (мука, вода, дрожжи, 20 мл оливкового масла, 8 г мелкой соли). Выполните 3 складывания (stretch and fold) каждые 20 минут, затем оставьте на 2 часа.",
        "timerSeconds": 7200,
        "tip": "Складывания развивают мощный глютеновый каркас при высокой влажности теста."
      },
      {
        "stepNumber": 2,
        "instruction": "Щедро смажьте противень оливковым маслом, аккуратно переложите тесто и распределите пальцами, не сминая пузыри. Дайте расстойку 45 минут.",
        "timerSeconds": 2700,
        "tip": "Тесто покроется крупными воздушными пузырями."
      },
      {
        "stepNumber": 3,
        "instruction": "Сделайте саламойю (salamoia): взбейте в банке 30 мл оливкового масла и 30 мл теплой воды со щепоткой соли до состояния мутной эмульсии.",
        "timerSeconds": 60,
        "tip": "Эмульсия увлажняет поверхность, предотвращая образование сухой корки."
      },
      {
        "stepNumber": 4,
        "instruction": "Пальцами обеих рук глубоко продавите тесто до дна противня, создавая легендарные ямочки фокаччи. Залейте эмульсией, посыпьте иглами розмарина и хлопьями соли.",
        "timerSeconds": 120,
        "tip": "Ямочки наполняются ароматным маслом."
      },
      {
        "stepNumber": 5,
        "instruction": "Выпекайте при 230°C 18-20 минут до глубокой золотистой корочки.",
        "timerSeconds": 1200,
        "tip": "Оливковое масло запекается в ямочках, создавая неповторимый вкус."
      }
    ],
    "chefSecrets": [
      "Эмульсия salamoia (вода + масло) — секрет подлинных пекарен Генуи: благодаря ей фокачча внутри остается влажной, а снаружи хрустит."
    ],
    "techCard": {
      "dishYield": "Противень фокаччи (750 г)",
      "kzhbu": {
        "calories": 285,
        "proteins": 6.8,
        "fats": 10.4,
        "carbs": 40.8
      },
      "semiFinishedProducts": [
        "Высокогидратированное тесто с расстойкой"
      ],
      "technologicalProcess": "Длительная холодная ферментация со складываниями и выпечка с эмульсией при 230°C.",
      "servingTemperature": "Теплая или комнатная.",
      "storageConditions": "В бумажном пакете до 48 часов."
    }
  },
  {
    "id": "pastry-sicilian-cannoli",
    "title": "Сицилийские хрустящие канноли с кремом из овечьей рикотты",
    "category": "pastry",
    "description": "Легендарное угощение Сицилии: хрустящие трубочки из теста с добавлением марсалы и какао, обжаренные во фритюре до пузырьков, наполненные нежнейшим кремом из рикотты с шоколадными каплями и цукатами.",
    "prepTime": 35,
    "cookTime": 15,
    "difficulty": "Профи",
    "servings": 6,
    "tags": [
      "Выпечка",
      "Канноли",
      "Сицилия",
      "Рикотта",
      "Десерт"
    ],
    "ingredients": [
      {
        "name": "Мука пшеничная высшего сорта",
        "amount": 200,
        "unit": "г",
        "estimatedCostPerKg": 60,
        "category": "Крупы и мука"
      },
      {
        "name": "Вино сицилийское Марсала (или белое сухое)",
        "amount": 40,
        "unit": "мл",
        "estimatedCostPerKg": 1100,
        "category": "Жидкости"
      },
      {
        "name": "Смалец (свиной жир) или сливочное масло",
        "amount": 25,
        "unit": "г",
        "estimatedCostPerKg": 300,
        "category": "Масла"
      },
      {
        "name": "Какао-порошок темный",
        "amount": 5,
        "unit": "г",
        "estimatedCostPerKg": 650,
        "category": "Бакалея"
      },
      {
        "name": "Сыр Рикотта овечья или свежая коровья (отжатая)",
        "amount": 400,
        "unit": "г",
        "estimatedCostPerKg": 550,
        "category": "Сыры"
      },
      {
        "name": "Сахарная пудра мелкая",
        "amount": 100,
        "unit": "г",
        "estimatedCostPerKg": 90,
        "category": "Бакалея"
      },
      {
        "name": "Шоколадные темные капли (дропсы)",
        "amount": 40,
        "unit": "г",
        "estimatedCostPerKg": 700,
        "category": "Бакалея"
      },
      {
        "name": "Цукаты апельсиновые кубиками",
        "amount": 30,
        "unit": "г",
        "estimatedCostPerKg": 600,
        "category": "Бакалея"
      },
      {
        "name": "Масло растительное для фритюра",
        "amount": 500,
        "unit": "мл",
        "estimatedCostPerKg": 120,
        "category": "Масла"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Замесите крутое эластичное тесто из муки, смальца, марсалы, ложки сахара и какао. Заверните в пленку на 1 час.",
        "timerSeconds": 3600,
        "tip": "Вино марсала придает тесту винный аромат и помогает образованию пузырей во фритюре."
      },
      {
        "stepNumber": 2,
        "instruction": "Тонко раскатайте тесто (толщиной 1.5 мм), вырежьте овалы 10х12 см, оберните вокруг металлических трубочек-форм, зафиксировав край белком.",
        "timerSeconds": 300,
        "tip": "Смазывайте край белком, чтобы трубочка не раскрылась в кипящем масле."
      },
      {
        "stepNumber": 3,
        "instruction": "Жарьте во фритюре при 175°C по 1.5-2 минуты до темно-золотого цвета и образования пузырьков на поверхности.",
        "timerSeconds": 240,
        "tip": "Снимите с форм горячими и остудите на салфетке."
      },
      {
        "stepNumber": 4,
        "instruction": "Рикотту отожмите, взбейте с сахарной пудрой и апельсиновой цедрой в воздушный крем, вмешайте шоколадные капли.",
        "timerSeconds": 180,
        "tip": "Овечья рикотта дает неповторимый аутентичный сицилийский вкус."
      },
      {
        "stepNumber": 5,
        "instruction": "Наполняйте трубочки кремом с двух сторон СТРОГО перед подачей на стол!",
        "timerSeconds": 120,
        "tip": "Раннее наполнение размягчит хрустящую вафлю."
      },
      {
        "stepNumber": 6,
        "instruction": "Украсьте края апельсиновыми цукатами и посыпьте сахарной пудрой.",
        "timerSeconds": 30,
        "tip": "Подавайте сразу."
      }
    ],
    "chefSecrets": [
      "Наполняйте канноли кремом исключительно за 5 минут до подачи: хруст тончайшей оболочки — главная магия десерта."
    ],
    "techCard": {
      "dishYield": "10-12 канноли (600 г)",
      "kzhbu": {
        "calories": 310,
        "proteins": 7.4,
        "fats": 14.2,
        "carbs": 37.8
      },
      "semiFinishedProducts": [
        "Хрустящие жареные трубочки",
        "Крем из овечьей рикотты с шоколадом"
      ],
      "technologicalProcess": "Фритирование теста на формах при 175°C с холодным наполнением.",
      "servingTemperature": "Комнатная с охлажденным кремом.",
      "storageConditions": "Трубочки хранятся в банке до 14 суток, наполнять перед подачей."
    }
  }
];

export const PASTRY_RECIPES: Recipe[] = [
  ...BASE_PASTRY_RECIPES,
  ...PASTRY_COLLECTION_1,
  ...PASTRY_COLLECTION_2
];

