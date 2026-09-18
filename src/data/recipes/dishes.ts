import { Recipe } from '../../types';
import { DISHES_COLLECTION_1 } from './dishes_collection_1';
import { DISHES_COLLECTION_2 } from './dishes_collection_2';
import { DISHES_COLLECTION_3 } from './dishes_collection_3';
import { DISHES_COLLECTION_4 } from './dishes_collection_4';

const BASE_DISHES_RECIPES: Recipe[] = [
  // --- ВОСТОЧНЫЕ ШЕДЕВРЫ И ПЛОВ ---
  {
    id: 'plov-fergana',
    title: 'Ферганский плов с бараниной в чугунном казане',
    category: 'dishes',
    description: 'Легендарный узбекский плов на хлопковом и курдючном масле с желтой морковью, зирой, чесноком и острым перцем. Рис рисинка к рисинке.',
    prepTime: 40,
    cookTime: 90,
    difficulty: 'Профи',
    servings: 8,
    tags: ['Плов', 'Баранина', 'Рис', 'Восточная кухня', 'Казан'],
    ingredients: [
      { name: 'Баранина мякоть (лопатка/окорок)', amount: 1000, unit: 'г', coldWastePercent: 12, heatLossPercent: 35, estimatedCostPerKg: 750, category: 'Мясо' },
      { name: 'Курдючный жир', amount: 200, unit: 'г', coldWastePercent: 5, heatLossPercent: 40, estimatedCostPerKg: 450, category: 'Мясо' },
      { name: 'Рис Лазер или Девзира', amount: 1000, unit: 'г', coldWastePercent: 2, heatLossPercent: -120, estimatedCostPerKg: 280, category: 'Крупы' },
      { name: 'Морковь желтая (или смесь с красной)', amount: 1000, unit: 'г', coldWastePercent: 20, heatLossPercent: 25, estimatedCostPerKg: 60, category: 'Овощи' },
      { name: 'Лук репчатый', amount: 350, unit: 'г', coldWastePercent: 12, heatLossPercent: 30, estimatedCostPerKg: 40, category: 'Овощи' },
      { name: 'Чеснок (целые головки)', amount: 3, unit: 'шт', coldWastePercent: 15, heatLossPercent: 10, estimatedCostPerKg: 300, category: 'Овощи' },
      { name: 'Перец чили острый свежий', amount: 2, unit: 'шт', coldWastePercent: 5, heatLossPercent: 0, estimatedCostPerKg: 400, category: 'Овощи' },
      { name: 'Зира (кумин) таджикская черная', amount: 2, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1200, category: 'Специи' },
      { name: 'Барбарис сушеный черный/красный', amount: 1.5, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 900, category: 'Специи' },
      { name: 'Масло хлопковое рафинированное (или растительное)', amount: 150, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 180, category: 'Масла' },
      { name: 'Соль каменная крупная', amount: 2.5, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 20, category: 'Специи' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Рис тщательно промойте в 5-7 сменах воды до кристальной прозрачности, залейте теплой подсоленной водой (около 40°C) и оставьте замачиваться.',
        timerSeconds: 2400,
        tip: 'Замачивание при 40°C насыщает крахмальные зерна влагой, и рис не поломается при варке.'
      },
      {
        stepNumber: 2,
        instruction: 'Морковь нарежьте крупной соломкой брусочками 4х4 мм (не на терке!). Мясо нарежьте кусками по 40-50 г. Курдюк — кубиком 1.5 см.',
        timerSeconds: 900,
        tip: 'Тертая морковь быстро раскиснет в зирваке и превратит плов в кашу.'
      },
      {
        stepNumber: 3,
        instruction: 'В казане вытопите курдюк до золотистых шкварок, извлеките их. Долейте масло и прокалите до сизого дымка. Обжарьте косточку до шоколадного цвета.',
        timerSeconds: 480,
        tip: 'Обжарка косточки в самом начале придает маслу насыщенный глубокий цвет и ореховый привкус.'
      },
      {
        stepNumber: 4,
        instruction: 'Опустите мясо, обжарьте на максимальном огне до плотной корочки. Введите лук, жарьте до золотисто-янтарного цвета.',
        timerSeconds: 600,
        tip: 'Не перемешивайте мясо слишком часто, дайте белку карамелизоваться.'
      },
      {
        stepNumber: 5,
        instruction: 'Засыпьте морковь, через 7 минут перемешайте. Всыпьте половину зиры (растерев в ладонях) и барбарис. Жарьте, пока морковь не станет гибкой.',
        timerSeconds: 720,
        tip: 'Растирание зиры высвобождает эфирные масла из семян.'
      },
      {
        stepNumber: 6,
        instruction: 'Влейте кипяток, чтобы он едва покрывал морковь. Утопите головки чеснока и целые стручки перца (без повреждений!). Варите зирвак на тихом огне.',
        timerSeconds: 2400,
        tip: 'Зирвак должен слегка кипеть, оставаясь прозрачным янтарным бульоном.'
      },
      {
        stepNumber: 7,
        instruction: 'Откиньте рис на сито. Выложите ровным слоем поверх зирвака. Аккуратно влейте кипяток через шумовку на 1.5 см выше уровня риса. Огонь на максимум!',
        timerSeconds: 600,
        tip: 'Бурное кипение со дна поднимает масло сквозь рис, обволакивая каждую рисинку.'
      },
      {
        stepNumber: 8,
        instruction: 'Когда вода уйдет под рис, соберите рис горкой к центру, сделайте проколы черенком ложки. Посыпьте оставшейся зирой, накройте блюдом и крышкой казана. Томите на минимальном тлении.',
        timerSeconds: 1500,
        tip: 'Плов должен дойти собственным паром без прямого кипения.'
      }
    ],
    chefSecrets: [
      'Пропорция классического ферганского плова: 1 кг риса на 1 кг мяса и 1 кг моркови.',
      'Перец чили обязательно должен быть целым, без трещин, иначе плов станет нестерпимо острым.',
      'После открытия казана плов осторожно взрыхляют шумовкой снизу вверх, смешивая рис с ароматным зирваком.'
    ],
    techCard: {
      dishYield: '350 г (выход готовой порции)',
      kzhbu: {
        calories: 320,
        proteins: 11.2,
        fats: 16.5,
        carbs: 31.8
      },
      semiFinishedProducts: ['Рис замоченный калиброванный', 'Зирвак полуфабрикат'],
      technologicalProcess: 'Варка и томление в закрытом чугунном казане при 90-95°C.',
      servingTemperature: '75-80°C на общем керамическом блюде (лягане).',
      storageConditions: 'Готовое блюдо хранится на мармите не более 3 часов при температуре не ниже 65°C.'
    }
  },
  {
    id: 'lagman-uyghur',
    title: 'Уйгурский лагман (Гуйру лагман)',
    category: 'dishes',
    description: 'Длинная ручная тянутая лапша чузма с сочным мясным соусом сай из говядины, сельдерея, пекинской капусты, сладкого перца и жгучей пасты Ладжан.',
    prepTime: 60,
    cookTime: 25,
    difficulty: 'Профи',
    servings: 6,
    tags: ['Лагман', 'Лапша', 'Говядина', 'Восточная кухня', 'Острое'],
    ingredients: [
      { name: 'Мука пшеничная высший сорт с высоким белком', amount: 600, unit: 'г', coldWastePercent: 1, heatLossPercent: -100, estimatedCostPerKg: 70, category: 'Мука' },
      { name: 'Говядина вырезка или мякоть', amount: 600, unit: 'г', coldWastePercent: 8, heatLossPercent: 28, estimatedCostPerKg: 720, category: 'Мясо' },
      { name: 'Стебли сельдерея сочные', amount: 200, unit: 'г', coldWastePercent: 10, heatLossPercent: 15, estimatedCostPerKg: 220, category: 'Овощи' },
      { name: 'Перец болгарский грунтовой разноцветный', amount: 300, unit: 'г', coldWastePercent: 15, heatLossPercent: 15, estimatedCostPerKg: 200, category: 'Овощи' },
      { name: 'Капуста пекинская (нижняя хрустящая часть)', amount: 200, unit: 'г', coldWastePercent: 10, heatLossPercent: 20, estimatedCostPerKg: 120, category: 'Овощи' },
      { name: 'Стрелки чеснока (или джусай)', amount: 100, unit: 'г', coldWastePercent: 5, heatLossPercent: 15, estimatedCostPerKg: 350, category: 'Овощи' },
      { name: 'Помидоры спелые мясистые', amount: 250, unit: 'г', coldWastePercent: 6, heatLossPercent: 25, estimatedCostPerKg: 180, category: 'Овощи' },
      { name: 'Томатная паста густая', amount: 2, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 250, category: 'Бакалея' },
      { name: 'Чеснок свежий', amount: 6, unit: 'зубчик', coldWastePercent: 12, heatLossPercent: 10, estimatedCostPerKg: 300, category: 'Овощи' },
      { name: 'Звездчатый анис (бадьян) и кориандр', amount: 1, unit: 'ч. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1500, category: 'Специи' },
      { name: 'Масло растительное для вока', amount: 120, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 150, category: 'Масла' },
      { name: 'Соевый соус светлый и уксус рисовый', amount: 3, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 320, category: 'Бакалея' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Замесите плотное эластичное тесто из муки, воды и соли. Дайте отлежаться 30 минут под влажным полотенцем, периодически обминая солевой водой.',
        timerSeconds: 1800,
        tip: 'Правильно замешанное тесто для чузмы тянется в нить без разрывов.'
      },
      {
        stepNumber: 2,
        instruction: 'Разделите тесто на жгуты толщиной в палец, смажьте обильно маслом и уложите спиралью на блюдо под пленку на 20 минут.',
        timerSeconds: 1200,
        tip: 'Масло и расстойка расслабляют клейковину перед вытягиванием.'
      },
      {
        stepNumber: 3,
        instruction: 'Вытяните лапшу руками, ударяя жгуты о стол, до толщины спагетти. Отварите в бурлящем подсоленном кипятке ровно 2 минуты. Откиньте и промойте холодной водой с ложкой масла.',
        timerSeconds: 150,
        tip: 'Быстрое омывание ледяной водой фиксирует упругость al dente.'
      },
      {
        stepNumber: 4,
        instruction: 'Мясо и овощи нарежьте тонкими пластинками («ромбиками»).',
        timerSeconds: 600,
        tip: 'Все ингредиенты для сай должны быть одинакового размера для мгновенной обжарки.'
      },
      {
        stepNumber: 5,
        instruction: 'Раскалите вок с маслом. Партиями быстро обжарьте мясо до румянца (2-3 минуты), добавьте томатную пасту, специи, чеснок и джусай.',
        timerSeconds: 240,
        tip: 'Сай готовится на предельном огне (вок-хэй).'
      },
      {
        stepNumber: 6,
        instruction: 'Всыпьте овощи (перец, сельдерей, капусту). Жарьте не более 3-4 минут, сохраняя хруст (аль денте). Влейте немного бульона и соевый соус, доведите до легкого загустения.',
        timerSeconds: 240,
        tip: 'Овощи ни в коем случае не должны тушиться до кашицеобразного состояния.'
      },
      {
        stepNumber: 7,
        instruction: 'Сборка: в глубокую косу (касу) выложите прогретую лапшу, сверху щедро выложите горячий сай с ароматным соком. Подавайте с острой приправой Ладжан.',
        timerSeconds: 60,
        tip: 'Лапшу перед подачей опустите на 15 секунд в горячий бульон для согрева.'
      }
    ],
    chefSecrets: [
      'Гуйру-сай — это хрустящие, сочные овощи с ярким блеском, а не тушеное рагу.',
      'Для идеальной лапши мука должна содержать не менее 12-13% растительного белка.'
    ],
    techCard: {
      dishYield: '450 г (лапша 180 г, сай 270 г)',
      kzhbu: {
        calories: 165,
        proteins: 9.8,
        fats: 6.4,
        carbs: 17.2
      },
      semiFinishedProducts: ['Лапша чузма отварная охлажденная', 'Овощная заготовка сай'],
      technologicalProcess: 'Кратковременная обжарка stir-fry в воке на открытом огне.',
      servingTemperature: '75-80°C',
      storageConditions: 'Лапша и соус хранятся раздельно не более 24 часов при +2...+4°C.'
    }
  },
  {
    id: 'kazan-kebab',
    title: 'Казан-кебаб из молодого барашка с хрустящим картофелем',
    category: 'dishes',
    description: 'Золотистый картофель, обжаренный во фритюре из бараньего жира, и тающее во рту мясо со специями, протомленное в казане до нежности.',
    prepTime: 25,
    cookTime: 50,
    difficulty: 'Средне',
    servings: 4,
    tags: ['Казан-кебаб', 'Баранина', 'Картофель', 'Восточная кухня', 'Второе'],
    ingredients: [
      { name: 'Корейка или мякоть баранины', amount: 1000, unit: 'г', coldWastePercent: 10, heatLossPercent: 32, estimatedCostPerKg: 780, category: 'Мясо' },
      { name: 'Картофель средний ровный (очищенный)', amount: 1000, unit: 'г', coldWastePercent: 18, heatLossPercent: 12, estimatedCostPerKg: 45, category: 'Овощи' },
      { name: 'Курдюк баранний', amount: 150, unit: 'г', coldWastePercent: 4, heatLossPercent: 40, estimatedCostPerKg: 450, category: 'Мясо' },
      { name: 'Масло растительное', amount: 100, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 150, category: 'Масла' },
      { name: 'Зира и кориандр молотый', amount: 1.5, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1200, category: 'Специи' },
      { name: 'Паприка сладкая копченая', amount: 1, unit: 'ч. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 800, category: 'Специи' },
      { name: 'Лук репчатый для подачи', amount: 150, unit: 'г', coldWastePercent: 10, heatLossPercent: 0, estimatedCostPerKg: 40, category: 'Овощи' },
      { name: 'Зелень кинзы и укропа', amount: 30, unit: 'г', coldWastePercent: 8, heatLossPercent: 0, estimatedCostPerKg: 400, category: 'Зелень' },
      { name: 'Соль поваренная', amount: 1.5, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 20, category: 'Специи' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Мясо нарежьте крупными порционными кусками (по 70-80 г). Замаринуйте с солью, зирой и кориандром на 20 минут.',
        timerSeconds: 1200,
        tip: 'Крупный кусок сохраняет максимум мясного сока внутри.'
      },
      {
        stepNumber: 2,
        instruction: 'Очищенный сухой целый картофель наколите зубочисткой в нескольких местах и натрите солью с паприкой.',
        timerSeconds: 300,
        tip: 'Сухая поверхность картофеля обеспечивает хрустящую стеклянную корочку.'
      },
      {
        stepNumber: 3,
        instruction: 'В казане растопите курдюк и растительное масло. Опустите картофель партиями в кипящее масло и обжарьте до яркой золотисто-янтарной корочки (внутри он останется полусырым). Выньте шумовкой.',
        timerSeconds: 600,
        tip: 'Картофель запечатывается снаружи и дойдет позже на мясном пару.'
      },
      {
        stepNumber: 4,
        instruction: 'В то же раскаленное масло опустите куски баранины. Обжарьте на сильном огне со всех сторон до карамельной плотной корочки (5-7 минут).',
        timerSeconds: 420,
        tip: 'Интенсивная реакция Майяра создаст неповторимый аромат жаркого.'
      },
      {
        stepNumber: 5,
        instruction: 'Убавьте огонь. Уложите мясо на дно казана, сверху аккуратно выложите обжаренный картофель. Сбрызните 50 мл воды, плотно закройте крышкой казана. Томите на слабом огне.',
        timerSeconds: 2400,
        tip: 'Пар от мяса пропитает картофель соками баранины и специями.'
      },
      {
        stepNumber: 6,
        instruction: 'Подача: на ляган выложите в центр нежнейшее мясо, по краям разложите картофель. Посыпьте тонко наструганным промытым луком с сумахом и свежей кинзой.',
        timerSeconds: 180,
        tip: 'Лук к казан-кебабу обязательно сбрызгивают гранатовым соком или слабым уксусом.'
      }
    ],
    chefSecrets: [
      'Картофель жарят исключительно в сухом виде в раскаленном жире — только так получается хрустящая оболочка.',
      'Никакого избытка воды — блюдо томится в собственном соку.'
    ],
    techCard: {
      dishYield: '380 г (мясо 160 г, картофель 200 г, лук 20 г)',
      kzhbu: {
        calories: 278,
        proteins: 14.5,
        fats: 17.2,
        carbs: 16.0
      },
      semiFinishedProducts: ['Картофель обжаренный фри полуфабрикат', 'Мясо обжаренное запечатанное'],
      technologicalProcess: 'Фритирование с последующим томлением под крышкой.',
      servingTemperature: '75-80°C',
      storageConditions: 'Не более 2 часов в горячем виде.'
    }
  },
  {
    id: 'manti-classic',
    title: 'Узбекские сочные манты с бараниной и тыквой',
    category: 'dishes',
    description: 'Нежнейшее тонкое тесто с сочной начинкой из рубленой баранины, сладкой тыквы и курдюка с ароматом свежемолотой зиры. Приготовлены на пару в манты-каскане.',
    prepTime: 45,
    cookTime: 45,
    difficulty: 'Средне',
    servings: 6,
    tags: ['Манты', 'Баранина', 'Пар', 'Тесто', 'Восточная кухня'],
    ingredients: [
      { name: 'Мука пшеничная высший сорт', amount: 500, unit: 'г', coldWastePercent: 1, heatLossPercent: 5, estimatedCostPerKg: 70, category: 'Мука' },
      { name: 'Баранина мякоть (рубленая ножом)', amount: 600, unit: 'г', coldWastePercent: 6, heatLossPercent: 15, estimatedCostPerKg: 750, category: 'Мясо' },
      { name: 'Курдючный жир (мелкий кубик)', amount: 150, unit: 'г', coldWastePercent: 4, heatLossPercent: 20, estimatedCostPerKg: 450, category: 'Мясо' },
      { name: 'Тыква мускатная сладкая', amount: 250, unit: 'г', coldWastePercent: 20, heatLossPercent: 10, estimatedCostPerKg: 50, category: 'Овощи' },
      { name: 'Лук репчатый сочный', amount: 500, unit: 'г', coldWastePercent: 12, heatLossPercent: 15, estimatedCostPerKg: 40, category: 'Овощи' },
      { name: 'Зира душистая', amount: 1.5, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1200, category: 'Специи' },
      { name: 'Сливочное масло топленое для смазывания', amount: 60, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 950, category: 'Масла' },
      { name: 'Свежемолотый черный перец и соль', amount: 1.5, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 80, category: 'Специи' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Замесите крутое эластичное тесто (мука, 200 мл теплой воды, яйцо, соль). Вымешивайте не менее 10 минут до гладкости. Оставьте под пленкой на 40 минут.',
        timerSeconds: 2400,
        tip: 'Тесто должно стать гладким, как шелк, чтобы его можно было раскатать до 1 мм без дыр.'
      },
      {
        stepNumber: 2,
        instruction: 'Мясо порубите ножом на мельчайшие кусочки (не перекручивайте на мясорубке!). Лук нарежьте мелким кубиком. Тыкву нарежьте кубиком со стороной 3 мм.',
        timerSeconds: 900,
        tip: 'Рубленое мясо сохраняет мембраны клеток и отдает сок внутрь манта, а не на лезвия мясорубки.'
      },
      {
        stepNumber: 3,
        instruction: 'Соедините мясо, курдюк, тыкву и лук. Добавьте соль, растертую зиру и черный перец. Тщательно перемешайте руками.',
        timerSeconds: 300,
        tip: 'Лука должно быть не меньше половины объема мяса — он главный источник сока.'
      },
      {
        stepNumber: 4,
        instruction: 'Раскатайте тесто тонко (толщиной 1-1.5 мм), нарежьте на квадраты 10х10 см. В центр каждого выложите столовую ложку с горкой начинки.',
        timerSeconds: 600,
        tip: 'Следите, чтобы края квадрата не заветривались.'
      },
      {
        stepNumber: 5,
        instruction: 'Слепите манты конвертиком: соедините противоположные углы попарно, затем защипните боковые стороны.',
        timerSeconds: 600,
        tip: 'Оставляйте небольшое пространство внутри для пара и циркулирующего бульона.'
      },
      {
        stepNumber: 6,
        instruction: 'Ярусы каскана обильно смажьте топленым маслом. Окуните донышко каждого манта в масло и расставьте с интервалом в 2 см. Варите на активном пару 40-45 минут.',
        timerSeconds: 2700,
        tip: 'Вода в нижнем баке должна постоянно и энергично кипеть.'
      },
      {
        stepNumber: 7,
        instruction: 'Аккуратно снимите манты, смажьте растопленным маслом, посыпьте черным перцем и подавайте со сметаной, сузьмой или острым томатным соусом.',
        timerSeconds: 180,
        tip: 'Едят манты руками, осторожно надкусывая сбоку, чтобы не пролить драгоценный бульон.'
      }
    ],
    chefSecrets: [
      'Тыква не только дает сладость и гармонию с бараниной, но и удерживает влагу внутри начинки.',
      'Толщина раскатки теста по краям должна быть тоньше, чем в центре.'
    ],
    techCard: {
      dishYield: '360 г (4 шт по 90 г)',
      kzhbu: {
        calories: 245,
        proteins: 10.4,
        fats: 13.6,
        carbs: 20.3
      },
      semiFinishedProducts: ['Манты сформованные замороженные'],
      technologicalProcess: 'Паровая обработка в пароконвектомате или манты-каскане при 100°C 40-45 мин.',
      servingTemperature: '75-80°C',
      storageConditions: 'Замороженный полуфабрикат при -18°C до 90 дней.'
    }
  },
  {
    id: 'shurpa-uzbek',
    title: 'Шурпа по-бухарски на косточке с нутом',
    category: 'dishes',
    description: 'Прозрачный янтарный наваристый суп из бараньей грудинки и голяшки с крупно нарезанными овощами, мягким нутом и букетом свежей кинзы и базилика.',
    prepTime: 20,
    cookTime: 120,
    difficulty: 'Легко',
    servings: 6,
    tags: ['Шурпа', 'Суп', 'Баранина', 'Нут', 'Восточная кухня'],
    ingredients: [
      { name: 'Баранина на кости (грудинка, ребра, голяшка)', amount: 1000, unit: 'г', coldWastePercent: 20, heatLossPercent: 25, estimatedCostPerKg: 650, category: 'Мясо' },
      { name: 'Нут (горох нут крупный)', amount: 150, unit: 'г', coldWastePercent: 0, heatLossPercent: -120, estimatedCostPerKg: 180, category: 'Бобовые' },
      { name: 'Морковь крупная', amount: 300, unit: 'г', coldWastePercent: 15, heatLossPercent: 10, estimatedCostPerKg: 50, category: 'Овощи' },
      { name: 'Лук репчатый', amount: 400, unit: 'г', coldWastePercent: 10, heatLossPercent: 20, estimatedCostPerKg: 40, category: 'Овощи' },
      { name: 'Картофель средний', amount: 500, unit: 'г', coldWastePercent: 15, heatLossPercent: 8, estimatedCostPerKg: 45, category: 'Овощи' },
      { name: 'Помидоры грунтовые', amount: 300, unit: 'г', coldWastePercent: 5, heatLossPercent: 15, estimatedCostPerKg: 160, category: 'Овощи' },
      { name: 'Сладкий перец мясистый', amount: 200, unit: 'г', coldWastePercent: 15, heatLossPercent: 10, estimatedCostPerKg: 200, category: 'Овощи' },
      { name: 'Зира цельная, кориандр и душистый перец', amount: 1.5, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1100, category: 'Специи' },
      { name: 'Кинза, укроп и райхон (фиолетовый базилик)', amount: 50, unit: 'г', coldWastePercent: 10, heatLossPercent: 0, estimatedCostPerKg: 400, category: 'Зелень' },
      { name: 'Соль поваренная', amount: 1.5, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 20, category: 'Специи' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Нут замочите в прохладной воде с щепоткой соды минимум на 8-10 часов, затем промойте.',
        timerSeconds: 3600,
        tip: 'Замоченный нут разварится до нежности крема одновременно с мясом.'
      },
      {
        stepNumber: 2,
        instruction: 'Мясо на кости залейте 3.5 литрами холодной чистой воды. Доведите до тихого закипания, тщательно и непрерывно снимая всю белковую пену.',
        timerSeconds: 1200,
        tip: 'Никакого бурного кипения — только микропузырьки, иначе бульон навсегда помутнеет.'
      },
      {
        stepNumber: 3,
        instruction: 'Опустите в бульон нут, 2 целые надрезанные луковицы и варите при слабом кипении 1 час.',
        timerSeconds: 3600,
        tip: 'Луковицы отдадут сладость и полностью растворятся в бульоне.'
      },
      {
        stepNumber: 4,
        instruction: 'Морковь нарежьте крупными кругляшами по 2-3 см. Сладкий перец — крупными дольками. Помидоры очистите от кожицы и разрежьте на 4 части. Опустите в казан вместе с зирой и солью.',
        timerSeconds: 1800,
        tip: 'Крупная нарезка сохраняет овощи целыми на протяжении долгой варки.'
      },
      {
        stepNumber: 5,
        instruction: 'За 25 минут до готовности положите очищенный целый картофель.',
        timerSeconds: 1500,
        tip: 'Картофель впитает ароматный бульон и станет рассыпчатым.'
      },
      {
        stepNumber: 6,
        instruction: 'Всыпьте нарубленную свежую кинзу и райхон, снимите с огня, дайте настояться под крышкой 10 минут. Подавайте в глубоких касах с куском мяса, картофелиной и нутом.',
        timerSeconds: 600,
        tip: 'Райхон придает шурпе тонкий смолистый бухарский колорит.'
      }
    ],
    chefSecrets: [
      'Шурпа — это лекарство и эликсир: правильная шурпа прозрачна, как янтарь, а жир плавает блестящими золотыми кругами.',
      'Только холодная вода на старте позволяет извлечь из костей максимум глютаминовой кислоты и коллагена.'
    ],
    techCard: {
      dishYield: '500 г (бульон 300 г, мясо на кости 100 г, овощи и нут 100 г)',
      kzhbu: {
        calories: 185,
        proteins: 13.2,
        fats: 9.8,
        carbs: 11.0
      },
      semiFinishedProducts: ['Бульон шурпа основа', 'Нут замоченный подготовленный'],
      technologicalProcess: 'Томление на медленном огне при 88-92°C в течение 2-2.5 часов.',
      servingTemperature: '80-85°C',
      storageConditions: 'При температуре +2...+4°C не более 36 часов.'
    }
  },

  // --- СУПЫ И БУЛЬОНЫ ---
  {
    id: 'borscht-classic',
    title: 'Классический борщ с говядиной и чесночными пампушками',
    category: 'dishes',
    description: 'Насыщенный рубиновый борщ на сахарной косточке с сочной свекольной заправкой, сладким перцем, капустой и ароматом копченого сала.',
    prepTime: 30,
    cookTime: 120,
    difficulty: 'Средне',
    servings: 8,
    tags: ['Борщ', 'Суп', 'Говядина', 'Свекла', 'Славянская кухня'],
    ingredients: [
      { name: 'Говяжья грудинка на кости', amount: 800, unit: 'г', coldWastePercent: 15, heatLossPercent: 25, estimatedCostPerKg: 650, category: 'Мясо' },
      { name: 'Свекла бордовая', amount: 400, unit: 'г', coldWastePercent: 15, heatLossPercent: 20, estimatedCostPerKg: 40, category: 'Овощи' },
      { name: 'Капуста белокочанная', amount: 350, unit: 'г', coldWastePercent: 10, heatLossPercent: 15, estimatedCostPerKg: 35, category: 'Овощи' },
      { name: 'Картофель', amount: 300, unit: 'г', coldWastePercent: 15, heatLossPercent: 10, estimatedCostPerKg: 45, category: 'Овощи' },
      { name: 'Морковь', amount: 150, unit: 'г', coldWastePercent: 12, heatLossPercent: 15, estimatedCostPerKg: 40, category: 'Овощи' },
      { name: 'Лук репчатый', amount: 150, unit: 'г', coldWastePercent: 10, heatLossPercent: 20, estimatedCostPerKg: 35, category: 'Овощи' },
      { name: 'Томатная паста концентрированная', amount: 2, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 250, category: 'Бакалея' },
      { name: 'Лимонный сок или яблочный уксус', amount: 1.5, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 120, category: 'Бакалея' },
      { name: 'Сало соленое с чесноком (для заправки)', amount: 50, unit: 'г', coldWastePercent: 5, heatLossPercent: 0, estimatedCostPerKg: 500, category: 'Мясо' },
      { name: 'Чеснок', amount: 4, unit: 'зубчик', coldWastePercent: 10, heatLossPercent: 0, estimatedCostPerKg: 300, category: 'Овощи' },
      { name: 'Свежая зелень укропа и петрушки', amount: 30, unit: 'г', coldWastePercent: 10, heatLossPercent: 0, estimatedCostPerKg: 400, category: 'Зелень' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Грудинку промойте, залейте холодной водой (3 литра), доведите до кипения, тщательно снимите пену и варите бульон на слабом огне 1.5 часа с лавровым листом и перцем горошком.',
        timerSeconds: 5400,
        tip: 'Медленная варка на минимальном огне гарантирует кристальную прозрачность бульона.'
      },
      {
        stepNumber: 2,
        instruction: 'Свеклу нарежьте тонкой соломкой, тушите в сотейнике с ложкой масла, томатной пастой, сахаром и лимонным соком до мягкости.',
        timerSeconds: 1500,
        tip: 'Кислота (лимонный сок) фиксирует яркий рубиновый цвет антоцианов свеклы.'
      },
      {
        stepNumber: 3,
        instruction: 'Лук и морковь спассеруйте до золотистого цвета на умеренном огне.',
        timerSeconds: 480,
        tip: 'Каротин моркови растворяется в масле, придавая супу теплый аппетитный оттенок.'
      },
      {
        stepNumber: 4,
        instruction: 'В готовый процеженный бульон заложите нарезанный брусочками картофель, через 7 минут — тонко нашинкованную капусту.',
        timerSeconds: 600,
        tip: 'Капуста должна сохранить легкую упругость (аль денте).'
      },
      {
        stepNumber: 5,
        instruction: 'Введите тушеную свеклу и пассеровку. Варите 5-7 минут на тихом огне.',
        timerSeconds: 420,
        tip: 'После добавления свеклы борщ не должен бурно кипеть, иначе цвет поблекнет.'
      },
      {
        stepNumber: 6,
        instruction: 'Сало разотрите в ступке со свежим чесноком, щепоткой соли и зеленью. Добавьте затирку в борщ, снимите с огня и дайте настояться под крышкой не менее 20 минут.',
        timerSeconds: 1200,
        tip: 'Затирка из сала с чесноком создает неповторимый аутентичный аромат.'
      }
    ],
    chefSecrets: [
      'Настоящий борщ раскрывает свой глубокий вкус на второй день после настаивания в холоде.',
      'Всегда используйте сахар в свекольной заправке для баланса природной кислоты томатов.'
    ],
    techCard: {
      dishYield: '350 г на 1 порцию',
      kzhbu: {
        calories: 142,
        proteins: 7.8,
        fats: 8.2,
        carbs: 9.6
      },
      semiFinishedProducts: ['Бульон говяжий процеженный', 'Свекольная заправка концентрированная'],
      technologicalProcess: 'Варка, пассерование и настаивание при 75°C.',
      servingTemperature: '75°C со сметаной 20% и зеленым луком.',
      storageConditions: 'При температуре +2...+4°C не более 72 часов.'
    }
  },
  {
    id: 'tom-yum-goong',
    title: 'Том Ям Кунг с тигровыми креветками',
    category: 'dishes',
    description: 'Остро-кислый шедевр тайской кухни на креветочном бульоне и кокосовом молоке с лемонграссом, листьями кафрского лайма, грибами цаогу и галангалом.',
    prepTime: 20,
    cookTime: 15,
    difficulty: 'Средне',
    servings: 4,
    tags: ['Том Ям', 'Суп', 'Морепродукты', 'Тайская кухня', 'Острое'],
    ingredients: [
      { name: 'Креветки тигровые с головой', amount: 400, unit: 'г', coldWastePercent: 35, heatLossPercent: 10, estimatedCostPerKg: 1200, category: 'Морепродукты' },
      { name: 'Кокосовое молоко 17-19%', amount: 250, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 350, category: 'Молочные' },
      { name: 'Бульон куриный или рыбный', amount: 700, unit: 'мл', coldWastePercent: 0, heatLossPercent: 5, estimatedCostPerKg: 60, category: 'Жидкости' },
      { name: 'Грибы цаогу или вешенки', amount: 150, unit: 'г', coldWastePercent: 8, heatLossPercent: 15, estimatedCostPerKg: 220, category: 'Овощи' },
      { name: 'Паста Том Ям аутентичная', amount: 2, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 650, category: 'Соусы' },
      { name: 'Стебли лемонграсса', amount: 3, unit: 'шт', coldWastePercent: 20, heatLossPercent: 0, estimatedCostPerKg: 900, category: 'Специи' },
      { name: 'Корень галангала свежий', amount: 30, unit: 'г', coldWastePercent: 15, heatLossPercent: 0, estimatedCostPerKg: 1100, category: 'Специи' },
      { name: 'Листья кафрского лайма', amount: 6, unit: 'шт', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1400, category: 'Специи' },
      { name: 'Рыбный соус Нам Пла', amount: 2, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 400, category: 'Соусы' },
      { name: 'Сок лайма свежевыжатый', amount: 2.5, unit: 'ст. л.', coldWastePercent: 10, heatLossPercent: 0, estimatedCostPerKg: 300, category: 'Соки' },
      { name: 'Помидоры черри', amount: 100, unit: 'г', coldWastePercent: 5, heatLossPercent: 5, estimatedCostPerKg: 250, category: 'Овощи' },
      { name: 'Кинза свежая', amount: 20, unit: 'г', coldWastePercent: 10, heatLossPercent: 0, estimatedCostPerKg: 400, category: 'Зелень' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Креветки очистите, оставив хвостик. Панцири и головы обжарьте на ложке масла до розового цвета, залейте бульоном, варите 10 минут и процедите.',
        timerSeconds: 600,
        tip: 'Креветочный биск из голов и панцирей дает супу глубокий океанический вкус умами.'
      },
      {
        stepNumber: 2,
        instruction: 'Лемонграсс отбейте тыльной стороной ножа и нарежьте наискосок. Галангал нарежьте тонкими кружками. Листья лайма надорвите руками.',
        timerSeconds: 180,
        tip: 'Надрыв листьев лайма мгновенно освобождает цитрусовые эфирные масла.'
      },
      {
        stepNumber: 3,
        instruction: 'В кипящий креветочный бульон добавьте ароматику (лемонграсс, галангал, листья лайма) и пасту Том Ям. Варите 4-5 минут.',
        timerSeconds: 300,
        tip: 'Бульон должен вобрать цитрусовые и пряные ноты.'
      },
      {
        stepNumber: 4,
        instruction: 'Введите грибы, влейте кокосовое молоко и рыбный соус. Варите 3 минуты.',
        timerSeconds: 180,
        tip: 'Рыбный соус обеспечивает правильную соленость и ферментированную глубину.'
      },
      {
        stepNumber: 5,
        instruction: 'Опустите креветки и половинки черри. Варите ровно 2 минуты — креветки должны остаться сочными и упругими.',
        timerSeconds: 120,
        tip: 'Переваренные креветки становятся жесткими и резиновыми.'
      },
      {
        stepNumber: 6,
        instruction: 'Снимите с огня, влейте свежий сок лайма, добавьте листья кинзы и подавайте с порцией отварного риса жасмин.',
        timerSeconds: 60,
        tip: 'Сок лайма добавляется строго в конце без кипячения, чтобы сохранить свежую кислинку.'
      }
    ],
    chefSecrets: [
      'Никогда не солите Том Ям поваренной солью — баланс соли создается исключительно тайским соусом нам-пла.',
      'Баланс вкусов настоящего тайского Том Яма: острота чили, кислота лайма, соленость рыбы и сладость кокоса.'
    ],
    techCard: {
      dishYield: '380 г на порцию',
      kzhbu: {
        calories: 128,
        proteins: 9.4,
        fats: 6.8,
        carbs: 5.2
      },
      semiFinishedProducts: ['Креветочный биск-бульон', 'Паста ароматическая'],
      technologicalProcess: 'Быстрое отваривание на сильном огне (fast-boil).',
      servingTemperature: '80°C в подогретой глубокой тарелке.',
      storageConditions: 'Употреблять сразу после приготовления. Хранению не подлежит.'
    }
  },
  {
    id: 'solyanka-meat',
    title: 'Мясная сборная солянка с каперсами и лимоном',
    category: 'dishes',
    description: 'Густой пикантный суп на крепком мясном бульоне с четырьмя видами мясных деликатесов, бочковыми огурцами, каперсами, маслинами и брессом.',
    prepTime: 25,
    cookTime: 50,
    difficulty: 'Средне',
    servings: 6,
    tags: ['Солянка', 'Суп', 'Мясо', 'Копчености', 'Классика'],
    ingredients: [
      { name: 'Говядина отварная', amount: 250, unit: 'г', coldWastePercent: 5, heatLossPercent: 0, estimatedCostPerKg: 700, category: 'Мясо' },
      { name: 'Ветчина или окорок копченый', amount: 150, unit: 'г', coldWastePercent: 3, heatLossPercent: 5, estimatedCostPerKg: 600, category: 'Мясо' },
      { name: 'Охотничьи колбаски копченые', amount: 150, unit: 'г', coldWastePercent: 2, heatLossPercent: 5, estimatedCostPerKg: 550, category: 'Мясо' },
      { name: 'Язык говяжий отварной', amount: 150, unit: 'г', coldWastePercent: 5, heatLossPercent: 0, estimatedCostPerKg: 850, category: 'Мясо' },
      { name: 'Огурцы соленые бочковые', amount: 200, unit: 'г', coldWastePercent: 10, heatLossPercent: 10, estimatedCostPerKg: 150, category: 'Овощи' },
      { name: 'Лук репчатый', amount: 250, unit: 'г', coldWastePercent: 10, heatLossPercent: 20, estimatedCostPerKg: 35, category: 'Овощи' },
      { name: 'Томатное пюре густое', amount: 3, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 200, category: 'Бакалея' },
      { name: 'Каперсы маринованные', amount: 40, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 900, category: 'Бакалея' },
      { name: 'Маслины Каламата без косточки', amount: 60, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 700, category: 'Бакалея' },
      { name: 'Бульон говяжий концентрированный', amount: 1500, unit: 'мл', coldWastePercent: 0, heatLossPercent: 5, estimatedCostPerKg: 50, category: 'Жидкости' },
      { name: 'Лимон свежий (дольки для подачи)', amount: 1, unit: 'шт', coldWastePercent: 20, heatLossPercent: 0, estimatedCostPerKg: 180, category: 'Фрукты' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Бочковые соленые огурцы очистите от грубой кожицы, нарежьте тонким ромбиком и припустите в ковше с небольшим количеством бульона 15 минут.',
        timerSeconds: 900,
        tip: 'Предварительное припускание огурцов смягчает их кислоту и делает текстуру нежной.'
      },
      {
        stepNumber: 2,
        instruction: 'Бресс: лук нарежьте мелкими кубиками, пассеруйте на сливочном масле до мягкости, добавьте томатное пюре и томите до темно-кирпичного цвета 15 минут.',
        timerSeconds: 900,
        tip: 'Бресс — это душа солянки, правильное томление убирает сырую кислинку томатов.'
      },
      {
        stepNumber: 3,
        instruction: 'Все мясные продукты (говядину, язык, колбаски, ветчину) нарежьте одинаковой тонкой соломкой.',
        timerSeconds: 600,
        tip: 'Равномерная нарезка обеспечивает идеальную гармонию в каждой ложке.'
      },
      {
        stepNumber: 4,
        instruction: 'В кипящий говяжий бульон положите бресс, припущенные огурцы и процеженный огуречный рассол (100 мл). Варите 8 минут.',
        timerSeconds: 480,
        tip: 'Прокипяченный рассол формирует характерный рассольный букет солянки.'
      },
      {
        stepNumber: 5,
        instruction: 'Опустите мясной сбор, каперсы вместе с чайной ложкой маринада и оливки. Томите на минимальном огне 10 минут.',
        timerSeconds: 600,
        tip: 'Мясо должно прогреться и обменяться ароматами с бульоном.'
      },
      {
        stepNumber: 6,
        instruction: 'Подавайте солянку с долькой очищенного от кожуры лимона, ложкой густой сметаны и рубленой петрушкой.',
        timerSeconds: 120,
        tip: 'Кожуру с лимона лучше срезать, чтобы суп не горчил при настаивании.'
      }
    ],
    chefSecrets: [
      'Никакого картофеля в классической ресторанной сборной солянке быть не должно — густота достигается изобилием мяса и лукового бресса.',
      'Чем разнообразнее мясной состав (не менее 4 видов), тем богаче палитра вкуса.'
    ],
    techCard: {
      dishYield: '360 г (бульон с мясом 330 г, лимон, маслины, зелень 30 г)',
      kzhbu: {
        calories: 195,
        proteins: 14.8,
        fats: 13.2,
        carbs: 4.8
      },
      semiFinishedProducts: ['Мясной набор для солянки', 'Томатный бресс'],
      technologicalProcess: 'Припускание, варка и настаивание при 80°C.',
      servingTemperature: '75°C',
      storageConditions: 'При температуре +2...+4°C не более 48 часов.'
    }
  },
  {
    id: 'kharcho-soup',
    title: 'Суп Харчо по-мегрельски с ткемали и грецкими орехами',
    category: 'dishes',
    description: 'Пряный, острый и густой грузинский суп из говяжьей грудинки с кислой пастилой тклапи (или соусом ткемали), толчеными грецкими орехами, уцхо-сунели и свежей кинзой.',
    prepTime: 25,
    cookTime: 100,
    difficulty: 'Средне',
    servings: 6,
    tags: ['Харчо', 'Суп', 'Говядина', 'Грузинская кухня', 'Орехи'],
    ingredients: [
      { name: 'Говяжья грудинка жирная', amount: 800, unit: 'г', coldWastePercent: 12, heatLossPercent: 30, estimatedCostPerKg: 680, category: 'Мясо' },
      { name: 'Рис круглый круглозерный', amount: 100, unit: 'г', coldWastePercent: 0, heatLossPercent: -120, estimatedCostPerKg: 120, category: 'Крупы' },
      { name: 'Грецкие орехи очищенные', amount: 120, unit: 'г', coldWastePercent: 5, heatLossPercent: 0, estimatedCostPerKg: 1100, category: 'Орехи' },
      { name: 'Соус Ткемали классический кислый', amount: 4, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 350, category: 'Соусы' },
      { name: 'Лук репчатый', amount: 300, unit: 'г', coldWastePercent: 10, heatLossPercent: 20, estimatedCostPerKg: 35, category: 'Овощи' },
      { name: 'Чеснок свежий', amount: 5, unit: 'зубчик', coldWastePercent: 10, heatLossPercent: 0, estimatedCostPerKg: 300, category: 'Овощи' },
      { name: 'Хмели-сунели и уцхо-сунели', amount: 1.5, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1200, category: 'Специи' },
      { name: 'Острый красный перец чили сушеный хлопьями', amount: 1, unit: 'ч. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 800, category: 'Специи' },
      { name: 'Кинза свежая (щедрый пучок)', amount: 60, unit: 'г', coldWastePercent: 10, heatLossPercent: 0, estimatedCostPerKg: 400, category: 'Зелень' },
      { name: 'Томаты протертые (пассата)', amount: 150, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 180, category: 'Овощи' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Грудинку нарубите кусочками с косточкой по 40-50 г. Залейте 2.5 л холодной воды, доведите до кипения, снимите пену и варите на медленном огне 1.5 часа.',
        timerSeconds: 5400,
        tip: 'Мясо должно легко отходить от кости.'
      },
      {
        stepNumber: 2,
        instruction: 'Лук мелко нарежьте и потомите на снятом с бульона говяжьем жире до мягкости и карамельного блеска.',
        timerSeconds: 600,
        tip: 'Использование жира из бульона сохраняет чистый вкус без посторонних масел.'
      },
      {
        stepNumber: 3,
        instruction: 'Грецкие орехи измельчите в блендере или разотрите в ступке с чесноком, уцхо-сунели и щепоткой соли до состояния пасты.',
        timerSeconds: 300,
        tip: 'Ореховая паста придает харчо бархатистую густоту и благородную шелковистость.'
      },
      {
        stepNumber: 4,
        instruction: 'В кипящий бульон с мясом добавьте промытый рис и пассерованный лук. Варите 10 минут.',
        timerSeconds: 600,
        tip: 'Рис не должен развариться в кашу.'
      },
      {
        stepNumber: 5,
        instruction: 'Добавьте томаты, ткемали, ореховую заправку и острый перец. Варите на медленном огне еще 7-8 минут.',
        timerSeconds: 480,
        tip: 'Кислинка ткемали уравновешивает плотный жир баранины или говядины.'
      },
      {
        stepNumber: 6,
        instruction: 'Всыпьте нарубленную кинзу, выключите огонь и дайте харчо постоять 15 минут под закрытой крышкой.',
        timerSeconds: 900,
        tip: 'За время отдыха специи гармонично соединяются с ореховой основой.'
      }
    ],
    chefSecrets: [
      'Харчо переводится как «говяжий суп», поэтому свинина или курица здесь считаются отступлением от вековых канонов.',
      'Уцхо-сунели (голубой пажитник) придает характерный орехово-сенной аромат, без которого вкус харчо не будет подлинным.'
    ],
    techCard: {
      dishYield: '380 г на порцию',
      kzhbu: {
        calories: 210,
        proteins: 13.6,
        fats: 14.2,
        carbs: 11.5
      },
      semiFinishedProducts: ['Орехово-чесночная паста', 'Бульон говяжий крепкий'],
      technologicalProcess: 'Варка и томление при 85°C.',
      servingTemperature: '75-80°C',
      storageConditions: 'При температуре +2...+4°C не более 48 часов.'
    }
  },
  {
    id: 'ramen-tonkotsu',
    title: 'Японский насыщенный рамэн Тонкоцу с яйцом аджитама',
    category: 'dishes',
    description: 'Густой молочно-белый коллагеновый бульон из свиных костей 12-часовой варки, пшеничная лапша ручной работы, свинина чашу, маринованное яйцо и водоросли нори.',
    prepTime: 40,
    cookTime: 360,
    difficulty: 'Профи',
    servings: 4,
    tags: ['Рамэн', 'Суп', 'Японская кухня', 'Свинина', 'Лапша'],
    ingredients: [
      { name: 'Кости свиные трубчатые и копытца', amount: 1500, unit: 'г', coldWastePercent: 5, heatLossPercent: 40, estimatedCostPerKg: 180, category: 'Мясо' },
      { name: 'Свиная грудинка цельная (для Чашу)', amount: 600, unit: 'г', coldWastePercent: 5, heatLossPercent: 25, estimatedCostPerKg: 450, category: 'Мясо' },
      { name: 'Лапша для рамэна щелочная (кансуй)', amount: 400, unit: 'г', coldWastePercent: 0, heatLossPercent: -100, estimatedCostPerKg: 280, category: 'Бакалея' },
      { name: 'Яйца куриные свежие', amount: 4, unit: 'шт', coldWastePercent: 12, heatLossPercent: 0, estimatedCostPerKg: 140, category: 'Яйца' },
      { name: 'Соевый соус темный и мирин (для тарэ и маринада)', amount: 150, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 350, category: 'Соусы' },
      { name: 'Чеснок и свежий имбирь', amount: 60, unit: 'г', coldWastePercent: 15, heatLossPercent: 0, estimatedCostPerKg: 320, category: 'Овощи' },
      { name: 'Зеленый лук и ростки сои', amount: 80, unit: 'г', coldWastePercent: 10, heatLossPercent: 0, estimatedCostPerKg: 250, category: 'Овощи' },
      { name: 'Листы водорослей Нори', amount: 4, unit: 'шт', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1200, category: 'Бакалея' },
      { name: 'Кунжутное масло и жареный белый кунжут', amount: 2, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 800, category: 'Масла' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Кости замочите на 3 часа в холодной воде. Доведите до бурного кипения, слейте первую воду и промойте кости щеткой от свернувшейся крови.',
        timerSeconds: 1800,
        tip: 'Идеальная зачистка костей — секрет белого бульона без темного серого оттенка.'
      },
      {
        stepNumber: 2,
        instruction: 'Залейте кости 4 литрами воды, добавьте имбирь, лук, чеснок и варите при интенсивном бурлении не менее 6-8 часов, периодически доливая кипяток.',
        timerSeconds: 21600,
        tip: 'Сильное кипение эмульгирует вываренный костный жир с водой, превращая бульон в кремовое «молоко».'
      },
      {
        stepNumber: 3,
        instruction: 'Чашу: скрутите грудинку рулетом, обвяжите шпагатом, обжарьте со всех сторон и томите в смеси соевого соуса, мирина, сахара и воды 1.5 часа.',
        timerSeconds: 5400,
        tip: 'После остывания мясо легко нарежется тончайшими идеальными слайсами.'
      },
      {
        stepNumber: 4,
        instruction: 'Яйца аджитама: отварите яйца ровно 6 минут, охладите в ледяной воде, очистите и замаринуйте в смеси соевого соуса и мирина на 4 часа.',
        timerSeconds: 360,
        tip: 'При варке 6 минут желток остается кремовым и тягучим.'
      },
      {
        stepNumber: 5,
        instruction: 'Лапшу отварите в кипятке ровно 90 секунд (твердость катаме). Стряхните воду специальным дуршлагом тэбо.',
        timerSeconds: 90,
        tip: 'Лишняя вода ослабляет плотность бульона.'
      },
      {
        stepNumber: 6,
        instruction: 'Сборка: на дно глубокой пиалы (донбури) налейте соус тарэ (30 мл) и ароматное чесночное масло. Влейте 300 мл кипящего тонкоцу-бульона, выложите лапшу, сверху положите слайсы чашу, половинку яйца, нори, лук и семена кунжута.',
        timerSeconds: 120,
        tip: 'Чаша для рамэна должна быть предварительно прогрета кипятком.'
      }
    ],
    chefSecrets: [
      'Щелочная лапша с кансуй не раскисает в горячем жирном бульоне.',
      'Томление бульона при бурном кипении — ключевое отличие тонкоцу от прозрачных французских бульонов.'
    ],
    techCard: {
      dishYield: '550 г (бульон 300 г, лапша 150 г, топпинги 100 г)',
      kzhbu: {
        calories: 185,
        proteins: 11.2,
        fats: 11.8,
        carbs: 15.6
      },
      semiFinishedProducts: ['Бульон Тонкоцу концентрированный', 'Свинина Чашу готовая', 'Яйца Аджитама'],
      technologicalProcess: 'Эмульгирование костного коллагена 6-8 ч, сборка a la minute.',
      servingTemperature: '85°C',
      storageConditions: 'Бульон хранится до 48 ч при +2°C, замороженным до 30 суток.'
    }
  },
  {
    id: 'french-onion-soup',
    title: 'Французский луковый суп с сыром Грюйер',
    category: 'dishes',
    description: 'Шедевр парижских бистро: медленно карамелизованный в сливочном масле сладкий лук, насыщенный говяжий бульон, сухой белый вермут и хрустящий багет под запеченной корочкой швейцарского сыра.',
    prepTime: 20,
    cookTime: 60,
    difficulty: 'Средне',
    servings: 4,
    tags: ['Французская кухня', 'Суп', 'Луковый суп', 'Грюйер', 'Сыр'],
    ingredients: [
      { name: 'Лук репчатый сладкий (сорта Эксибишен или шалот)', amount: 1000, unit: 'г', coldWastePercent: 10, heatLossPercent: 60, estimatedCostPerKg: 60, category: 'Овощи' },
      { name: 'Сливочное масло 82.5%', amount: 60, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 950, category: 'Масла' },
      { name: 'Бульон говяжий коричневый (жю)', amount: 1000, unit: 'мл', coldWastePercent: 0, heatLossPercent: 5, estimatedCostPerKg: 80, category: 'Жидкости' },
      { name: 'Вино белое сухое (или сухой вермут)', amount: 120, unit: 'мл', coldWastePercent: 0, heatLossPercent: 50, estimatedCostPerKg: 600, category: 'Жидкости' },
      { name: 'Сыр Грюйер или выдержанный Эмменталь', amount: 150, unit: 'г', coldWastePercent: 0, heatLossPercent: 5, estimatedCostPerKg: 2100, category: 'Сыры' },
      { name: 'Багет французский хрустящий', amount: 150, unit: 'г', coldWastePercent: 5, heatLossPercent: 10, estimatedCostPerKg: 90, category: 'Хлеб' },
      { name: 'Тимьян свежий и лавровый лист', amount: 10, unit: 'г', coldWastePercent: 10, heatLossPercent: 0, estimatedCostPerKg: 1200, category: 'Зелень' },
      { name: 'Мука пшеничная в/с', amount: 1, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 70, category: 'Мука' },
      { name: 'Чеснок', amount: 2, unit: 'зубчик', coldWastePercent: 10, heatLossPercent: 0, estimatedCostPerKg: 300, category: 'Овощи' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Лук нарежьте тонкими полукольцами. В чугунной кастрюле растопите сливочное масло и выложите весь лук.',
        timerSeconds: 600,
        tip: 'Сначала лук пустит сок и уменьшится в объеме втрое.'
      },
      {
        stepNumber: 2,
        instruction: 'Томите лук на умеренно-слабом огне 40-45 минут, регулярно помешивая со дна, пока сахара не карамелизуются до глубокого янтарно-коричневого цвета.',
        timerSeconds: 2700,
        tip: 'Терпение — главный ингредиент. Не прибавляйте огонь, иначе лук сгорит и будет горчить.'
      },
      {
        stepNumber: 3,
        instruction: 'Всыпьте муку, перемешайте и готовьте 2 минуты. Влейте вино и деглазируйте дно сотейника, соскребая карамелизованные соки.',
        timerSeconds: 180,
        tip: 'Деглазирование вином собирает весь концентрированный вкус со стенок.'
      },
      {
        stepNumber: 4,
        instruction: 'Влейте горячий говяжий бульон, добавьте веточки тимьяна и лавровый лист. Варите на медленном огне 20 минут.',
        timerSeconds: 1200,
        tip: 'Бульон должен быть крепким, сваренным из предварительно запеченных костей.'
      },
      {
        stepNumber: 5,
        instruction: 'Багет нарежьте ломтиками толщиной 2 см, натрите чесноком и подсушите в духовке до хруста.',
        timerSeconds: 420,
        tip: 'Подсушенный багет не раскиснет мгновенно под сырной шапкой.'
      },
      {
        stepNumber: 6,
        instruction: 'Разлейте суп по огнеупорным керамическим горшочкам, положите сверху гренки и щедро засыпьте тертым сыром Грюйер. Запекайте под грилем при 220°C 5-7 минут до образования пузырящейся румяной корочки.',
        timerSeconds: 360,
        tip: 'Сыр должен слегка запечься по краям горшочка, запечатывая аромат супа.'
      }
    ],
    chefSecrets: [
      'Карамелизация лука — чисто химический процесс: сахара распадаются при длительном мягком нагреве без добавления искусственного сахара.',
      'Грюйер обладает идеальной температурой плавления и ореховым послевкусием.'
    ],
    techCard: {
      dishYield: '320 г (суп 260 г, багет и сыр 60 г)',
      kzhbu: {
        calories: 165,
        proteins: 8.9,
        fats: 9.4,
        carbs: 11.2
      },
      semiFinishedProducts: ['Карамелизованный лук конфи', 'Бульон коричневый говяжий'],
      technologicalProcess: 'Медленная карамелизация лука с последующим гратинированием под саламандрой/грилем.',
      servingTemperature: '85°C в огнеупорной керамике.',
      storageConditions: 'Суповая основа хранится до 72 часов при +2...+4°C. Запекается строго перед подачей.'
    }
  },
  {
    id: 'chicken-noodle-soup',
    title: 'Домашний куриный суп с яичной лапшой и перепелиным яйцом',
    category: 'dishes',
    description: 'Золотистый прозрачный бульон из фермерской суповой курицы с корнеплодами, тончайшей домашней лапшой на желтках, перепелиным яйцом и свежим укропом.',
    prepTime: 30,
    cookTime: 90,
    difficulty: 'Легко',
    servings: 6,
    tags: ['Суп', 'Курица', 'Домашняя лапша', 'Классика', 'Уют'],
    ingredients: [
      { name: 'Курица фермерская (суповая)', amount: 1000, unit: 'г', coldWastePercent: 20, heatLossPercent: 25, estimatedCostPerKg: 350, category: 'Птица' },
      { name: 'Мука пшеничная в/с (для лапши)', amount: 150, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 70, category: 'Мука' },
      { name: 'Желтки куриные свежие', amount: 3, unit: 'шт', coldWastePercent: 50, heatLossPercent: 0, estimatedCostPerKg: 160, category: 'Яйца' },
      { name: 'Морковь сладкая', amount: 150, unit: 'г', coldWastePercent: 12, heatLossPercent: 10, estimatedCostPerKg: 40, category: 'Овощи' },
      { name: 'Лук репчатый и корень сельдерея', amount: 150, unit: 'г', coldWastePercent: 15, heatLossPercent: 10, estimatedCostPerKg: 60, category: 'Овощи' },
      { name: 'Яйца перепелиные', amount: 6, unit: 'шт', coldWastePercent: 15, heatLossPercent: 0, estimatedCostPerKg: 120, category: 'Яйца' },
      { name: 'Укроп свежий', amount: 25, unit: 'г', coldWastePercent: 8, heatLossPercent: 0, estimatedCostPerKg: 400, category: 'Зелень' },
      { name: 'Черный перец горошком и лавровый лист', amount: 1, unit: 'ч. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 800, category: 'Специи' },
      { name: 'Соль поваренная', amount: 1, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 20, category: 'Специи' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Курицу залейте 3 л холодной воды. Доведите до кипения на среднем огне, тщательно снимите пену. Добавьте неочищенную луковицу (для золотистого цвета) и коренья. Варите 1.5 часа на минимальном огне.',
        timerSeconds: 5400,
        tip: 'Золотистая шелуха лука окрашивает бульон в благородный янтарный цвет.'
      },
      {
        stepNumber: 2,
        instruction: 'Лапша: из муки, желтков и щепотки соли замесите очень тугое тесто. Заверните в пленку на 30 минут.',
        timerSeconds: 1800,
        tip: 'Замес исключительно на желтках дает лапше плотность и она никогда не разварится.'
      },
      {
        stepNumber: 3,
        instruction: 'Раскатайте тесто в полупрозрачный пласт, подсушите 10 минут на столе, сверните рулетом и нарежьте тончайшей соломкой. Встряхните от лишней муки.',
        timerSeconds: 600,
        tip: 'Обязательно отсейте лишнюю муку через сито, иначе бульон станет мутным.'
      },
      {
        stepNumber: 4,
        instruction: 'Процедите бульон. Мясо отделите от костей. Морковь нарежьте аккуратными фигурными звездочками или тонкой соломкой.',
        timerSeconds: 600,
        tip: 'Процеживание через двойную марлю удаляет мельчайшие частицы белка.'
      },
      {
        stepNumber: 5,
        instruction: 'В кипящий бульон опустите морковь, через 5 минут — лапшу. Варите ровно 3 минуты.',
        timerSeconds: 180,
        tip: 'Свежая домашняя лапша готовится моментально.'
      },
      {
        stepNumber: 6,
        instruction: 'При подаче в тарелку положите кусочки куриного филе, половинку отварного перепелиного яйца, залейте супом с лапшой и посыпьте свежим укропом.',
        timerSeconds: 120,
        tip: 'Перепелиное яйцо отваривается 2.5 минуты для сохранения нежной текстуры.'
      }
    ],
    chefSecrets: [
      'Для идеального супового бульона берите именно суповую (не бройлерную) фермерскую курицу — в ней в разы больше экстрактивных веществ.',
      'Лапшу можно отварить отдельно в подсоленной воде и разложить по тарелкам — так бульон останется кристальным даже на третий день.'
    ],
    techCard: {
      dishYield: '350 г на 1 порцию',
      kzhbu: {
        calories: 120,
        proteins: 9.2,
        fats: 5.4,
        carbs: 8.6
      },
      semiFinishedProducts: ['Бульон куриный осветленный', 'Лапша яичная домашняя'],
      technologicalProcess: 'Варка бульона при 90°C, кратковременная варка лапши 3 мин.',
      servingTemperature: '75°C',
      storageConditions: 'При температуре +2...+4°C до 48 часов.'
    }
  },

  // --- ВТОРЫЕ ГОРЯЧИЕ БЛЮДА ---
  {
    id: 'beef-stroganoff',
    title: 'Классический бефстроганов с картофельным пюре',
    category: 'dishes',
    description: 'Тонкие брусочки нежной говяжьей вырезки, быстро обжаренные на сливочном масле, в бархатном соусе из сметаны, демигласа и дижонской горчицы.',
    prepTime: 20,
    cookTime: 15,
    difficulty: 'Средне',
    servings: 4,
    tags: ['Бефстроганов', 'Говядина', 'Второе блюдо', 'Классика', 'Ресторан'],
    ingredients: [
      { name: 'Говяжья вырезка (тендерлоин)', amount: 600, unit: 'г', coldWastePercent: 5, heatLossPercent: 22, estimatedCostPerKg: 1400, category: 'Мясо' },
      { name: 'Лук репчатый', amount: 200, unit: 'г', coldWastePercent: 10, heatLossPercent: 20, estimatedCostPerKg: 35, category: 'Овощи' },
      { name: 'Шампиньоны свежие плотные', amount: 200, unit: 'г', coldWastePercent: 8, heatLossPercent: 25, estimatedCostPerKg: 220, category: 'Грибы' },
      { name: 'Сметана 25-30% жирности', amount: 200, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 320, category: 'Молочные' },
      { name: 'Бульон говяжий крепкий или демиглас', amount: 150, unit: 'мл', coldWastePercent: 0, heatLossPercent: 10, estimatedCostPerKg: 200, category: 'Соусы' },
      { name: 'Горчица дижонская с зернами', amount: 1.5, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 380, category: 'Соусы' },
      { name: 'Сливочное масло 82.5%', amount: 50, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 950, category: 'Масла' },
      { name: 'Мука пшеничная (для легкой панировки)', amount: 1.5, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 70, category: 'Мука' },
      { name: 'Огурцы соленые хрустящие (для подачи)', amount: 100, unit: 'г', coldWastePercent: 10, heatLossPercent: 0, estimatedCostPerKg: 150, category: 'Овощи' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Мясо нарежьте поперек волокон на пласты толщиной 1 см, слегка отбейте тыльной стороной ножа и нарежьте тонкими брусочками длиной 4-5 см.',
        timerSeconds: 480,
        tip: 'Нарезка строго поперек волокон гарантирует тающую нежность готового мяса.'
      },
      {
        stepNumber: 2,
        instruction: 'Лук нарежьте тонким перьевым полукольцом, грибы — четвертинками. Обжарьте на сливочном масле до золотистого цвета.',
        timerSeconds: 420,
        tip: 'Грибы обжаривайте на сухой горячей сковороде перед добавлением масла, чтобы они не пустили лишнюю воду.'
      },
      {
        stepNumber: 3,
        instruction: 'Мясо присыпьте мукой и стряхните излишки. Раскалите сковороду со смесью растительного и сливочного масла до предела. Обжаривайте мясо небольшими порциями не более 2-3 минут до румяной корочки.',
        timerSeconds: 180,
        tip: 'Не выкладывайте все мясо сразу, иначе сковорода остынет, и мясо начнет тушиться в собственном соку.'
      },
      {
        stepNumber: 4,
        instruction: 'Соедините обжаренное мясо с луком и грибами, влейте бульон и горчицу, прогрейте 1 минуту.',
        timerSeconds: 60,
        tip: 'Дижонская горчица балансирует жирность сметаны благородной пикантностью.'
      },
      {
        stepNumber: 5,
        instruction: 'Добавьте сметану комнатной температуры, перемешайте и томите на тихом огне ровно 3 минуты, не допуская бурного кипения.',
        timerSeconds: 180,
        tip: 'Сметана высокой жирности (30%) не свернется хлопьями при аккуратном нагреве.'
      },
      {
        stepNumber: 6,
        instruction: 'Подавайте с воздушным картофельным пюре со сливками и тонкими ломтиками хрустящего бочкового огурца.',
        timerSeconds: 120,
        tip: 'Соленый огурец создает идеальный текстурный контраст шелковистому пюре и сливочному соусу.'
      }
    ],
    chefSecrets: [
      'Говядину для бефстроганов нельзя долго тушить: вырезка должна жариться мгновенно, оставаясь сочной внутри (medium well).',
      'Панировка в минимальном количестве муки помогает соусу мгновенно загустеть до бархатной консистенции.'
    ],
    techCard: {
      dishYield: '320 г (бефстроганов 170 г, пюре 150 г)',
      kzhbu: {
        calories: 215,
        proteins: 16.4,
        fats: 13.8,
        carbs: 6.2
      },
      semiFinishedProducts: ['Вырезка говяжья зачищенная порционированная'],
      technologicalProcess: 'Быстрое обжаривание sautéing и краткое прогревание в сметанном соусе.',
      servingTemperature: '75°C',
      storageConditions: 'Реализуется сразу. Разогрев ухудшает структуру вырезки.'
    }
  },
  {
    id: 'pozharskie-cutlets',
    title: 'Пожарские котлеты в сухарной панировке',
    category: 'dishes',
    description: 'Исторические русские котлеты из рубленого куриного филе с добавлением замороженного сливочного масла, панированные в воздушных кубиках белого хлеба.',
    prepTime: 30,
    cookTime: 20,
    difficulty: 'Средне',
    servings: 4,
    tags: ['Котлеты', 'Курица', 'Русская кухня', 'Второе блюдо'],
    ingredients: [
      { name: 'Куриное филе (грудка и бедро 1:1)', amount: 600, unit: 'г', coldWastePercent: 5, heatLossPercent: 18, estimatedCostPerKg: 380, category: 'Мясо' },
      { name: 'Сливочное масло 82.5% (замороженное)', amount: 120, unit: 'г', coldWastePercent: 0, heatLossPercent: 10, estimatedCostPerKg: 950, category: 'Масла' },
      { name: 'Сливки 20-22%', amount: 80, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 280, category: 'Молочные' },
      { name: 'Белый тостовый хлеб без корок (для панировки)', amount: 200, unit: 'г', coldWastePercent: 15, heatLossPercent: 5, estimatedCostPerKg: 120, category: 'Хлеб' },
      { name: 'Лук репчатый пассерованный на масле', amount: 100, unit: 'г', coldWastePercent: 10, heatLossPercent: 20, estimatedCostPerKg: 40, category: 'Овощи' },
      { name: 'Яйцо куриное (для льезона)', amount: 2, unit: 'шт', coldWastePercent: 12, heatLossPercent: 0, estimatedCostPerKg: 140, category: 'Яйца' },
      { name: 'Мускатный орех свеженатертый', amount: 0.5, unit: 'ч. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 2000, category: 'Специи' },
      { name: 'Масло топленое (для жарки)', amount: 60, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 950, category: 'Масла' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Хлеб для панировки подморозьте и нарежьте аккуратными микрокубиками со стороной 3-4 мм. Подсушите на противне без изменения цвета.',
        timerSeconds: 600,
        tip: 'Мелкие сухарные кубики создают фирменную ежистую хрустящую корочку.'
      },
      {
        stepNumber: 2,
        instruction: 'Куриное мясо пропустите через крупную решетку мясорубки или порубите тяжелым шеф-ножом. Добавьте охлажденные сливки, пассерованный лук, соль и мускатный орех.',
        timerSeconds: 480,
        tip: 'Фарш должен оставаться холодным на протяжении всей формовки.'
      },
      {
        stepNumber: 3,
        instruction: 'Замороженное сливочное масло натрите на крупной терке прямо в фарш и быстро перемешайте руками.',
        timerSeconds: 180,
        tip: 'Кусочки масла при запекании тают, образуя внутри сочные масляные карманы.'
      },
      {
        stepNumber: 4,
        instruction: 'Сформируйте продолговатые котлеты весом по 120-130 г. Обмакните во взбитое яйцо (льезон) и щедро обваляйте в хлебных кубиках, слегка прижимая их ладонями.',
        timerSeconds: 360,
        tip: 'Панировка должна плотно покрывать котлету, не оставляя просветов.'
      },
      {
        stepNumber: 5,
        instruction: 'Обжарьте котлеты на топленом масле на среднем огне по 2.5-3 минуты с каждой стороны до ровного золотистого цвета.',
        timerSeconds: 360,
        tip: 'Топленое масло не горит и придает панировке сливочный аромат.'
      },
      {
        stepNumber: 6,
        instruction: 'Переложите на противень и доведите в духовке при 180°C 8-10 минут. Подавайте со сливочным соусом и зеленым горошком.',
        timerSeconds: 540,
        tip: 'Котлеты готовы, когда при легком нажатии вытекает прозрачный масляный сок.'
      }
    ],
    chefSecrets: [
      'В фарш для пожарских никогда не добавляют яйца — связующим элементом выступает холодный куриный белок при вымешивании.',
      'Температура фарша перед формовкой не должна превышать 8°C, чтобы масло не растаяло раньше времени.'
    ],
    techCard: {
      dishYield: '140 г (1 готовая котлета)',
      kzhbu: {
        calories: 275,
        proteins: 17.8,
        fats: 18.2,
        carbs: 10.5
      },
      semiFinishedProducts: ['Котлеты пожарские п/ф в сухарях замороженные'],
      technologicalProcess: 'Обжарка на плите с доведением в конвектомате при 180°C.',
      servingTemperature: '75-80°C',
      storageConditions: 'Полуфабрикат шоковой заморозки при -18°C до 45 суток.'
    }
  },
  {
    id: 'lasagna-bolognese',
    title: 'Классическая лазанья Болоньезе с соусом Бешамель',
    category: 'dishes',
    description: 'Праздничное итальянское блюдо из тонких листов пасты, прослоенных 3-часовым мясным рагу Болоньезе, бархатным соусом Бешамель и сыром Пармиджано Реджано.',
    prepTime: 40,
    cookTime: 50,
    difficulty: 'Средне',
    servings: 6,
    tags: ['Лазанья', 'Итальянская кухня', 'Паста', 'Болоньезе', 'Второе блюдо'],
    ingredients: [
      { name: 'Листы для лазаньи из твердых сортов', amount: 250, unit: 'г', coldWastePercent: 0, heatLossPercent: -50, estimatedCostPerKg: 350, category: 'Бакалея' },
      { name: 'Фарш домашний (говядина и свинина 1:1)', amount: 600, unit: 'г', coldWastePercent: 2, heatLossPercent: 25, estimatedCostPerKg: 520, category: 'Мясо' },
      { name: 'Томаты протертые (пассата di pomodoro)', amount: 500, unit: 'г', coldWastePercent: 0, heatLossPercent: 15, estimatedCostPerKg: 200, category: 'Бакалея' },
      { name: 'Сельдерей, морковь и лук (софритто)', amount: 200, unit: 'г', coldWastePercent: 15, heatLossPercent: 20, estimatedCostPerKg: 80, category: 'Овощи' },
      { name: 'Вино сухое белое или красное', amount: 100, unit: 'мл', coldWastePercent: 0, heatLossPercent: 80, estimatedCostPerKg: 500, category: 'Жидкости' },
      { name: 'Молоко 3.2% (для бешамеля)', amount: 700, unit: 'мл', coldWastePercent: 0, heatLossPercent: 5, estimatedCostPerKg: 85, category: 'Молочные' },
      { name: 'Сливочное масло 82.5%', amount: 60, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 950, category: 'Масла' },
      { name: 'Мука пшеничная в/с', amount: 50, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 70, category: 'Мука' },
      { name: 'Сыр Пармезан (Пармиджано Реджано)', amount: 120, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1800, category: 'Сыры' },
      { name: 'Мускатный орех тертый', amount: 0.5, unit: 'ч. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 2000, category: 'Специи' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Рагу Болоньезе: мелко нарежьте софритто (лук, морковь, сельдерей), обжарьте на оливковом масле. Добавьте фарш, разминая лопаткой до испарения влаги.',
        timerSeconds: 720,
        tip: 'Фарш должен слегка подрумяниться, а не вариться.'
      },
      {
        stepNumber: 2,
        instruction: 'Влейте вино, выпарите его 3 минуты. Добавьте томатную пассату, соль, перец и томите на самом слабом огне под крышкой 1.5-2 часа.',
        timerSeconds: 5400,
        tip: 'Длительное томление делает текстуру мяса шелковой и тающей.'
      },
      {
        stepNumber: 3,
        instruction: 'Бешамель: растопите сливочное масло, вмешайте муку и обжарьте 1.5 минуты (ру). Постепенно, помешивая венчиком, влейте теплое молоко. Варите до загустения, приправьте солью и мускатным орехом.',
        timerSeconds: 480,
        tip: 'Теплое молоко и непрерывное взбивание венчиком исключают появление комочков.'
      },
      {
        stepNumber: 4,
        instruction: 'Сборка: на дно формы нанесите тонкий слой бешамеля, выложите листы лазаньи, слой мясного рагу, бешамель и тертый пармезан. Повторите 4-5 слоев.',
        timerSeconds: 600,
        tip: 'Верхний слой — листы теста, щедро покрытые бешамелем и пармезаном.'
      },
      {
        stepNumber: 5,
        instruction: 'Выпекайте при 180°C 35-40 минут до появления аппетитной золотистой сырной корочки.',
        timerSeconds: 2400,
        tip: 'Первые 20 минут форму можно прикрыть фольгой, чтобы сохранить сочность.'
      },
      {
        stepNumber: 6,
        instruction: 'Дайте лазанье отдохнуть 15 минут перед нарезкой на порции.',
        timerSeconds: 900,
        tip: 'Горячая лазанья при нарезке сразу развалится, а 15-минутный отдых стабилизирует слои.'
      }
    ],
    chefSecrets: [
      'В аутентичный болоньезе болонцы в конце добавляют стакан теплого молока — это смягчает кислотность томатов.',
      'Используйте качественный сыр Parmigiano Reggiano: он дает ту самую характерную хрустящую сырную корочку.'
    ],
    techCard: {
      dishYield: '300 г (порционный кусок лазаньи)',
      kzhbu: {
        calories: 220,
        proteins: 13.2,
        fats: 11.5,
        carbs: 16.8
      },
      semiFinishedProducts: ['Рагу Болоньезе томленое', 'Соус Бешамель классический'],
      technologicalProcess: 'Запекание в печи/духовом шкафу при 180°C 35-40 мин.',
      servingTemperature: '70-75°C',
      storageConditions: 'При температуре +2...+4°C до 48 часов.'
    }
  },
  {
    id: 'butter-chicken',
    title: 'Мург Махани (Индийский Баттер Чикен)',
    category: 'dishes',
    description: 'Маринованные в йогурте и специях кусочки курицы, запеченные до дымка и погруженные в бархатный соус из томатов, сливочного масла, орехов кешью и листьев пажитника (касури мети).',
    prepTime: 30,
    cookTime: 30,
    difficulty: 'Средне',
    servings: 4,
    tags: ['Индийская кухня', 'Курица', 'Баттер Чикен', 'Карри', 'Второе блюдо'],
    ingredients: [
      { name: 'Куриное филе бедра без кожи и костей', amount: 700, unit: 'г', coldWastePercent: 5, heatLossPercent: 20, estimatedCostPerKg: 420, category: 'Мясо' },
      { name: 'Йогурт греческий густой 10%', amount: 150, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 240, category: 'Молочные' },
      { name: 'Масло сливочное 82.5%', amount: 80, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 950, category: 'Масла' },
      { name: 'Сливки 33%', amount: 120, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 450, category: 'Молочные' },
      { name: 'Орехи кешью сырые', amount: 50, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1300, category: 'Орехи' },
      { name: 'Томаты протертые (пассата)', amount: 400, unit: 'г', coldWastePercent: 0, heatLossPercent: 10, estimatedCostPerKg: 200, category: 'Бакалея' },
      { name: 'Паста из имбиря и чеснока', amount: 2, unit: 'ст. л.', coldWastePercent: 5, heatLossPercent: 0, estimatedCostPerKg: 350, category: 'Специи' },
      { name: 'Гарам масала и кашмирский чили', amount: 2, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1400, category: 'Специи' },
      { name: 'Листья пажитника сушеные (Касури Мети)', amount: 1.5, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1600, category: 'Специи' },
      { name: 'Сахар тростниковый или мед', amount: 1, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 150, category: 'Бакалея' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Маринад: смешайте йогурт, чесночно-имбирную пасту, кашмирский чили, гарам масалу и соль. Замаринуйте кусочки курицы на 2 часа.',
        timerSeconds: 7200,
        tip: 'Йогурт с кислотой размягчает мышечные волокна куриного бедра.'
      },
      {
        stepNumber: 2,
        instruction: 'Запекайте курицу на шпажках под грилем при 230°C 12-14 минут до появления легких обугленных подпалин тандури.',
        timerSeconds: 780,
        tip: 'Подпалины дают тот самый характерный аромат печи тандур.'
      },
      {
        stepNumber: 3,
        instruction: 'Соус: кешью отварите в 100 мл воды 10 минут и пробейте блендером до состояния гладкого молочка.',
        timerSeconds: 600,
        tip: 'Паста из кешью придает соусу неповторимую сливочную густоту без добавления муки.'
      },
      {
        stepNumber: 4,
        instruction: 'В сотейнике растопите половину сливочного масла, добавьте томаты, имбирь, специи и томите 15 минут. Влейте пасту из кешью.',
        timerSeconds: 900,
        tip: 'Протрите соус через сито для достижения шелковистой ресторанной текстуры makhani.'
      },
      {
        stepNumber: 5,
        instruction: 'Опустите запеченную курицу в соус, влейте сливки, оставшееся сливочное масло, добавьте ложку сахара и растертые в ладонях листья касури мети. Томите 5-7 минут.',
        timerSeconds: 360,
        tip: 'Касури мети — главный секретный ингредиент, дающий тот самый узнаваемый аромат индийского ресторана.'
      },
      {
        stepNumber: 6,
        instruction: 'Подавайте с горячей чесночной лепешкой наан или рисом басмати, полив тонкой струйкой сливок.',
        timerSeconds: 120,
        tip: 'Украсьте каплями сливок и свежей кинзой.'
      }
    ],
    chefSecrets: [
      'Кашмирский чили дает интенсивный огненно-красный цвет соуса, обладая при этом очень мягкой, деликатной остротой.',
      'Листья касури мети (пажитника) обязательно растирают пальцами перед добавлением, пробуждая эфирные масла.'
    ],
    techCard: {
      dishYield: '350 г на 1 порцию',
      kzhbu: {
        calories: 240,
        proteins: 18.2,
        fats: 15.6,
        carbs: 7.4
      },
      semiFinishedProducts: ['Курица тандури запеченная', 'Соус Махани базовый'],
      technologicalProcess: 'Запекание гриль с последующим томлением в соусе.',
      servingTemperature: '75°C',
      storageConditions: 'При температуре +2...+4°C до 48 часов.'
    }
  },
  {
    id: 'salmon-teriyaki',
    title: 'Филе атлантического лосося в авторской глазури терияки',
    category: 'dishes',
    description: 'Сочный стейк лосося с хрустящей корочкой в карамельной глазури из соевого соуса, мирина, саке и имбиря с бланшированной зеленой спаржей.',
    prepTime: 15,
    cookTime: 12,
    difficulty: 'Легко',
    servings: 2,
    tags: ['Лосось', 'Рыба', 'Терияки', 'Японская кухня', 'Стейк'],
    ingredients: [
      { name: 'Филе лосося (семга или форель) на коже', amount: 400, unit: 'г', coldWastePercent: 5, heatLossPercent: 15, estimatedCostPerKg: 1900, category: 'Рыба' },
      { name: 'Спаржа зеленая свежая', amount: 200, unit: 'г', coldWastePercent: 20, heatLossPercent: 5, estimatedCostPerKg: 1200, category: 'Овощи' },
      { name: 'Соевый соус Kikkoman', amount: 60, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 380, category: 'Соусы' },
      { name: 'Мирин (сладкое рисовое вино)', amount: 50, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 450, category: 'Соусы' },
      { name: 'Тростниковый сахар темный', amount: 1.5, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 180, category: 'Бакалея' },
      { name: 'Свежий имбирь и чеснок', amount: 20, unit: 'г', coldWastePercent: 15, heatLossPercent: 0, estimatedCostPerKg: 300, category: 'Овощи' },
      { name: 'Семена белого и черного кунжута', amount: 1, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 600, category: 'Бакалея' },
      { name: 'Кунжутное масло нерафинированное', amount: 1, unit: 'ч. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 850, category: 'Масла' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Глазурь: в ковше соедините соевый соус, мирин, тертый имбирь, чеснок и сахар. Уварите на среднем огне до состояния сиропа (около 5-6 минут).',
        timerSeconds: 360,
        tip: 'Глазурь готова, когда она обволакивает обратную сторону ложки.'
      },
      {
        stepNumber: 2,
        instruction: 'Спаржу очистите от грубой нижней части стебля, бланшируйте в кипятке 2 минуты и сразу опустите в воду со льдом.',
        timerSeconds: 120,
        tip: 'Ледяной шок останавливает варку и закрепляет ярко-изумрудный цвет спаржи.'
      },
      {
        stepNumber: 3,
        instruction: 'Филе лосося обсушите бумажным полотенцем. На коже сделайте 2-3 неглубоких надреза, посолите.',
        timerSeconds: 180,
        tip: 'Сухая кожа гарантирует аппетитный хруст без прилипания к сковороде.'
      },
      {
        stepNumber: 4,
        instruction: 'Разогрейте сковороду с каплей масла. Выложите лосось кожей вниз, прижмите лопаткой на 10 секунд и жарьте 4 минуты на среднем огне до хруста.',
        timerSeconds: 240,
        tip: 'Прижимание предотвращает деформацию и скручивание рыбного филе.'
      },
      {
        stepNumber: 5,
        instruction: 'Переверните рыбу, влейте терияки прямо в сковороду и поливайте ложкой верхнюю часть стейка в течение 2 минут до зеркального блеска.',
        timerSeconds: 120,
        tip: 'Не пересушите — в центре лосось должен оставаться нежно-розовым (medium rare).'
      },
      {
        stepNumber: 6,
        instruction: 'Выложите спаржу, сверху стейк лосося, полейте оставшейся глазурью из сковороды и посыпьте кунжутом.',
        timerSeconds: 60,
        tip: 'Кунжут предварительно прокалите на сухой сковороде для яркого орехового аромата.'
      }
    ],
    chefSecrets: [
      'Терияки переводится как «блестящий жареный» (тери — блеск, яки — жарка). Блеск дает карамелизующийся сахар и мирин.',
      'Внутренняя температура готового сочного лосося должна быть около 52-54°C.'
    ],
    techCard: {
      dishYield: '260 г (лосось 160 г, спаржа 80 г, соус 20 г)',
      kzhbu: {
        calories: 198,
        proteins: 19.5,
        fats: 10.8,
        carbs: 6.4
      },
      semiFinishedProducts: ['Соус Терияки уваренный', 'Спаржа бланшированная'],
      technologicalProcess: 'Обжаривание на сковороде с глазированием nappé.',
      servingTemperature: '70°C',
      storageConditions: 'Приготовление a la minute. Хранение не рекомендуется.'
    }
  },
  {
    id: 'chakhokhbili',
    title: 'Чахохбили из фермерской курицы по-грузински',
    category: 'dishes',
    description: 'Пряное грузинское рагу из курицы, приготовленное без капли воды в собственном соку спелых томатов, с карамелизованным луком, чесноком, хмели-сунели и изобилием свежего кориандра.',
    prepTime: 20,
    cookTime: 40,
    difficulty: 'Легко',
    servings: 4,
    tags: ['Чахохбили', 'Грузинская кухня', 'Курица', 'Томаты', 'Второе блюдо'],
    ingredients: [
      { name: 'Курица целая фермерская (порубленная на куски)', amount: 1000, unit: 'г', coldWastePercent: 12, heatLossPercent: 25, estimatedCostPerKg: 360, category: 'Птица' },
      { name: 'Помидоры спелые мясистые', amount: 800, unit: 'г', coldWastePercent: 10, heatLossPercent: 20, estimatedCostPerKg: 180, category: 'Овощи' },
      { name: 'Лук репчатый', amount: 500, unit: 'г', coldWastePercent: 10, heatLossPercent: 25, estimatedCostPerKg: 35, category: 'Овощи' },
      { name: 'Сливочное масло для лука', amount: 40, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 950, category: 'Масла' },
      { name: 'Чеснок свежий', amount: 6, unit: 'зубчик', coldWastePercent: 10, heatLossPercent: 0, estimatedCostPerKg: 300, category: 'Овощи' },
      { name: 'Кинза, базилик (райхон) и тархун', amount: 60, unit: 'г', coldWastePercent: 10, heatLossPercent: 0, estimatedCostPerKg: 450, category: 'Зелень' },
      { name: 'Хмели-сунели и имеретинский шафран', amount: 1.5, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1200, category: 'Специи' },
      { name: 'Острый стручковый перец свежий', amount: 1, unit: 'шт', coldWastePercent: 10, heatLossPercent: 0, estimatedCostPerKg: 400, category: 'Овощи' },
      { name: 'Соль каменная', amount: 1.5, unit: 'ч. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 20, category: 'Специи' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Курицу порубите на небольшие порционные кусочки по 50-60 г. Обсушите полотенцем.',
        timerSeconds: 300,
        tip: 'Сухое мясо не будет тушиться на первом этапе, а быстро подрумянится.'
      },
      {
        stepNumber: 2,
        instruction: 'В глубоком сотейнике или казане без добавления масла (сухая обжарка) обжарьте куски курицы до плотной румяной корочки со всех сторон 10-12 минут.',
        timerSeconds: 720,
        tip: 'Курица отдает собственный подкожный жир, на котором и запечатывается.'
      },
      {
        stepNumber: 3,
        instruction: 'Отдельно на сковороде пассеруйте мелко нарезанный лук на сливочном масле до сладкого янтарного цвета 10 минут. Переложите к курице.',
        timerSeconds: 600,
        tip: 'Отдельная пассеровка лука гарантирует нежность без запаха вареного лука.'
      },
      {
        stepNumber: 4,
        instruction: 'Помидоры ошпарьте кипятком, снимите кожицу, порубите кубиком и выложите на курицу с луком. Добавьте острый перец и соль. Никакой воды!',
        timerSeconds: 300,
        tip: 'Помидоры моментально дадут обильный сок, в котором и будет тушиться курица.'
      },
      {
        stepNumber: 5,
        instruction: 'Накройте крышкой и томите на тихом огне 20 минут до мягкости мяса.',
        timerSeconds: 1200,
        tip: 'Блюдо должно медленно томиться, напитываясь соками.'
      },
      {
        stepNumber: 6,
        instruction: 'Всыпьте хмели-сунели, имеретинский шафран, измельченный чеснок и рубленую зелень (кинзу, базилик, тархун). Перемешайте, снимите с огня и дайте постоять 10 минут под крышкой.',
        timerSeconds: 600,
        tip: 'Тархун и базилик отдают свежесть и аромат только в самом конце.'
      }
    ],
    chefSecrets: [
      'Главное правило чахохбили — ни миллилитра воды: вся жидкость берется из сока спелых грунтовых помидоров и курицы.',
      'Исторически чахохбили готовили из фазана («хохоби» по-грузински), поэтому сухая начальная прижарка птицы критически важна.'
    ],
    techCard: {
      dishYield: '360 г на порцию',
      kzhbu: {
        calories: 165,
        proteins: 15.4,
        fats: 9.8,
        carbs: 4.8
      },
      semiFinishedProducts: ['Курица порционированная зачищенная', 'Томатная основа чахохбили'],
      technologicalProcess: 'Сухая обжарка с последующим тушением в томатном соку.',
      servingTemperature: '75°C в кеци (глиняной посуде).',
      storageConditions: 'При температуре +2...+4°C до 48 часов.'
    }
  },
  {
    id: 'dolma-classic',
    title: 'Долма в молодых виноградных листьях с чесночным мацони',
    category: 'dishes',
    description: 'Миниатюрные кавказские голубцы из нежных маринованных листьев винограда с сочным фаршем из баранины, риса, мяты и кинзы, подаваемые с соусом из мацони и чеснока.',
    prepTime: 40,
    cookTime: 50,
    difficulty: 'Средне',
    servings: 5,
    tags: ['Долма', 'Кавказская кухня', 'Баранина', 'Виноградные листья', 'Второе блюдо'],
    ingredients: [
      { name: 'Листья виноградные маринованные или свежие молодые', amount: 60, unit: 'шт', coldWastePercent: 10, heatLossPercent: 5, estimatedCostPerKg: 400, category: 'Овощи' },
      { name: 'Фарш из баранины и говядины (1:1)', amount: 600, unit: 'г', coldWastePercent: 5, heatLossPercent: 20, estimatedCostPerKg: 680, category: 'Мясо' },
      { name: 'Рис круглозерный (промытый)', amount: 80, unit: 'г', coldWastePercent: 0, heatLossPercent: -100, estimatedCostPerKg: 110, category: 'Крупы' },
      { name: 'Лук репчатый мелкорубленый', amount: 250, unit: 'г', coldWastePercent: 10, heatLossPercent: 15, estimatedCostPerKg: 35, category: 'Овощи' },
      { name: 'Кинза, укроп и свежая мята', amount: 50, unit: 'г', coldWastePercent: 10, heatLossPercent: 0, estimatedCostPerKg: 400, category: 'Зелень' },
      { name: 'Сливочное масло топленое (в фарш)', amount: 40, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 950, category: 'Масла' },
      { name: 'Зира, кориандр и черный перец', amount: 1, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1200, category: 'Специи' },
      { name: 'Мацони или густой кавказский йогурт (для соуса)', amount: 250, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 180, category: 'Молочные' },
      { name: 'Чеснок для мацони', amount: 3, unit: 'зубчик', coldWastePercent: 10, heatLossPercent: 0, estimatedCostPerKg: 300, category: 'Овощи' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Виноградные листья промойте от рассола, залейте кипятком на 5 минут для мягкости, срежьте жесткие черешки.',
        timerSeconds: 300,
        tip: 'Ошпаривание делает прожилки листьев эластичными и послушными при сворачивании.'
      },
      {
        stepNumber: 2,
        instruction: 'Фарш соедините с промытым сырым рисом, луком, мелко нарезанной зеленью (мята обязательна!), топленым маслом, специями и солью. Влейте 50 мл холодной воды для сочности и вымесите.',
        timerSeconds: 420,
        tip: 'Мята придает баранине освежающее благородное звучание.'
      },
      {
        stepNumber: 3,
        instruction: 'Разложите лист прожилками вверх, гладкой стороной вниз. На основание листа выложите десертную ложку фарша, заверните края и сверните в плотный аккуратный цилиндрик размером с палец.',
        timerSeconds: 900,
        tip: 'Настоящая ресторанная долма должна быть крошечной — на один укус.'
      },
      {
        stepNumber: 4,
        instruction: 'Дно толстостенной кастрюли выстелите бракованными листьями. Плотно, в несколько слоев выложите долму швом вниз.',
        timerSeconds: 360,
        tip: 'Плотная укладка не позволяет рулетикам развернуться при кипении.'
      },
      {
        stepNumber: 5,
        instruction: 'Залейте бульоном или подсоленной водой до верхнего слоя долмы. Сверху прижмите тяжелой плоской тарелкой. Варите на слабом огне 45-50 минут.',
        timerSeconds: 3000,
        tip: 'Гнет в виде тарелки удерживает долму на месте во время кипения.'
      },
      {
        stepNumber: 6,
        instruction: 'Соус: смешайте мацони с пропущенным через пресс чесноком, щепоткой соли и мелкорубленой мятой. Подавайте долму горячей с холодным соусом.',
        timerSeconds: 180,
        tip: 'Контраст горячей сочной долмы и прохладного чесночного мацони — каноническое сочетание.'
      }
    ],
    chefSecrets: [
      'Чем меньше размер долмы, тем выше ценится мастерство повара.',
      'Топленое масло в фарше необходимо, чтобы рис внутри пропитался соком и стал бархатным.'
    ],
    techCard: {
      dishYield: '280 г (долма 220 г, соус мацони 60 г)',
      kzhbu: {
        calories: 175,
        proteins: 12.4,
        fats: 11.2,
        carbs: 7.8
      },
      semiFinishedProducts: ['Долма полуфабрикат завернутый'],
      technologicalProcess: 'Припускание под гнетом при температуре 90-95°C 45-50 минут.',
      servingTemperature: '75°C (долма) и 10°C (соус мацони).',
      storageConditions: 'Полуфабрикат хранится замороженным до 60 суток при -18°C.'
    }
  }
,
  {
    "id": "dish-shurpa-lamb-cauldron",
    "title": "Узбекская наваристая шурпа из баранины в казане (Ковурма Шурпа)",
    "category": "dishes",
    "description": "Ароматнейший праздничный суп восточной кухни: баранья корейка на ребрышках, обжаренная в курдючном жире, прозрачный янтарный бульон, крупные клубни картофеля, сладкая морковь, болгарский перец, зира и свежая кинза.",
    "prepTime": 20,
    "cookTime": 90,
    "difficulty": "Средне",
    "servings": 6,
    "tags": [
      "Блюда",
      "Шурпа",
      "Баранина",
      "Казан",
      "Супы"
    ],
    "ingredients": [
      {
        "name": "Баранина на косточке (корейка или лопатка)",
        "amount": 800,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 750,
        "category": "Мясо"
      },
      {
        "name": "Курдюк бараний свежий",
        "amount": 100,
        "unit": "г",
        "estimatedCostPerKg": 650,
        "category": "Мясо"
      },
      {
        "name": "Картофель отборный крупный",
        "amount": 500,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 40,
        "category": "Овощи"
      },
      {
        "name": "Морковь желтая и красная крупная",
        "amount": 300,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 45,
        "category": "Овощи"
      },
      {
        "name": "Лук репчатый белый",
        "amount": 400,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 30,
        "category": "Овощи"
      },
      {
        "name": "Перец болгарский сладкий разноцветный",
        "amount": 200,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 200,
        "category": "Овощи"
      },
      {
        "name": "Помидоры спелые сочные",
        "amount": 250,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 180,
        "category": "Овощи"
      },
      {
        "name": "Зира (кумин) цельная и кориандр",
        "amount": 10,
        "unit": "г",
        "estimatedCostPerKg": 600,
        "category": "Специи"
      },
      {
        "name": "Кинза и базилик свежие",
        "amount": 40,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 450,
        "category": "Зелень"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Курдюк нарежьте кубиками и вытопите в раскаленном казане до золотистых хрустящих шкварок, шкварки извлеките шумовкой.",
        "timerSeconds": 480,
        "tip": "Вытопленный курдючный жир дает аутентичный аромат казана."
      },
      {
        "stepNumber": 2,
        "instruction": "В кипящий жир опустите куски баранины и быстро обжарьте на максимальном огне 7-8 минут до плотной темно-золотистой корочки.",
        "timerSeconds": 480,
        "tip": "Обжарка запечатывает соки внутри мяса."
      },
      {
        "stepNumber": 3,
        "instruction": "Добавьте нарезанный полукольцами лук и пассеруйте 5 минут до прозрачности, затем добавьте дольки томатов и сладкий перец крупными шашками.",
        "timerSeconds": 300,
        "tip": "Томаты отдадут легкую кислинку."
      },
      {
        "stepNumber": 4,
        "instruction": "Залейте 3 литрами холодной воды, доведите до кипения, тщательно снимите пену, убавьте огонь до едва заметного побулькивания и томите 1 час.",
        "timerSeconds": 3600,
        "tip": "Тихое томление без бурного кипения сохраняет бульон кристально прозрачным."
      },
      {
        "stepNumber": 5,
        "instruction": "Положите целые клубни очищенного картофеля и крупные бруски моркови, всыпьте растертую зиру и кориандр, варите еще 25 минут до готовности картофеля.",
        "timerSeconds": 1500,
        "tip": "В шурпе овощи никогда не режут мелко."
      },
      {
        "stepNumber": 6,
        "instruction": "Подавайте в глубоких касах, посыпав горой свежей рубленой кинзы и фиолетового базилика.",
        "timerSeconds": 60,
        "tip": "Подавайте обжигающе горячей с горячими лепешками."
      }
    ],
    "chefSecrets": [
      "В ковурма-шурпе все овощи закладываются целиком или огромными кусками, чтобы они не разварились в кашу за время долгой варки."
    ],
    "techCard": {
      "dishYield": "6 порций по 500 г (с мясом и бульоном)",
      "kzhbu": {
        "calories": 128,
        "proteins": 9.4,
        "fats": 8.2,
        "carbs": 5.8
      },
      "semiFinishedProducts": [
        "Вытопленный курдюк",
        "Обжаренная корейка"
      ],
      "technologicalProcess": "Высокотемпературное обжаривание мяса в курдючном жире с последующей тихой экстракцией бульона.",
      "servingTemperature": "80-85°C.",
      "storageConditions": "В холодильнике до 48 часов."
    }
  },
  {
    "id": "dish-lagman-uyghur-pulled",
    "title": "Уйгурский лагман с тянутой вручную лапшой и сочным сайем",
    "category": "dishes",
    "description": "Вершина шелкового пути: упругая длинная лапша чузма, вытянутая вручную, подаваемая с густым пряным сайем из говядины, сельдерея, джусая (или чесночных стрелок), сладкого перца, пекинской капусты и острой заправки Лазджан.",
    "prepTime": 40,
    "cookTime": 20,
    "difficulty": "Профи",
    "servings": 4,
    "tags": [
      "Блюда",
      "Лагман",
      "Уйгурская кухня",
      "Лапша",
      "Говядина"
    ],
    "ingredients": [
      {
        "name": "Говяжья мякоть (огузок или вырезка)",
        "amount": 450,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 650,
        "category": "Мясо"
      },
      {
        "name": "Мука пшеничная высший сорт (для лапши)",
        "amount": 400,
        "unit": "г",
        "estimatedCostPerKg": 55,
        "category": "Крупы и мука"
      },
      {
        "name": "Яйцо куриное и вода для теста",
        "amount": 200,
        "unit": "мл",
        "estimatedCostPerKg": 50,
        "category": "Яйца"
      },
      {
        "name": "Капуста пекинская сочная",
        "amount": 150,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 90,
        "category": "Овощи"
      },
      {
        "name": "Перец болгарский сладкий (красный и зеленый)",
        "amount": 150,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 200,
        "category": "Овощи"
      },
      {
        "name": "Стебли черешкового сельдерея",
        "amount": 100,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 180,
        "category": "Овощи"
      },
      {
        "name": "Стрелки чеснока или джусай",
        "amount": 80,
        "unit": "г",
        "estimatedCostPerKg": 350,
        "category": "Овощи"
      },
      {
        "name": "Томатная паста и спелые помидоры",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 160,
        "category": "Овощи"
      },
      {
        "name": "Бадьян молотый и сычуаньский перец",
        "amount": 5,
        "unit": "г",
        "estimatedCostPerKg": 900,
        "category": "Специи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Замесите крутое эластичное тесто для лапши из муки, воды, яйца и соли. Дайте отдохнуть 40 минут под пленкой.",
        "timerSeconds": 2400,
        "tip": "Отдых теста развивает клейковину, делая лапшу тянущейся."
      },
      {
        "stepNumber": 2,
        "instruction": "Раскатайте тесто в жгуты, смажьте растительным маслом, сверните спиралью и вытяните ударами об стол в тонкие длинные нити чузма. Отварите в кипятке 2 минуты и промойте ледяной водой.",
        "timerSeconds": 600,
        "tip": "Ледяная вода делает лапшу упругой и пружинящей (аль денте)."
      },
      {
        "stepNumber": 3,
        "instruction": "В раскаленном воке на растительном масле обжарьте тонкие слайсы говядины на бешеном огне за 3 минуты.",
        "timerSeconds": 180,
        "tip": "Вок-жарка дает неповторимый аромат «вок-хей»."
      },
      {
        "stepNumber": 4,
        "instruction": "Добавьте томатную пасту, помидоры, бадьян и чеснок, затем хрустящие квадраты пекинской капусты, перца, сельдерея и чесночных стрелок.",
        "timerSeconds": 240,
        "tip": "Овощи в сайе должны оставаться сочными и хрустящими."
      },
      {
        "stepNumber": 5,
        "instruction": "Влейте 300 мл мясного бульона, прогрейте 2 минуты, снимите сай с огня.",
        "timerSeconds": 120,
        "tip": "Сай должен быть сочным и густым."
      },
      {
        "stepNumber": 6,
        "instruction": "В глубокую тарелку положите теплую лапшу, залейте горячим сайем и подавайте с острой приправой лазджан.",
        "timerSeconds": 60,
        "tip": "Подавайте сразу."
      }
    ],
    "chefSecrets": [
      "Овощи в сайе обжариваются в воке не более 3 минут: они должны оставаться хрустящими (аль денте), а не вареными."
    ],
    "techCard": {
      "dishYield": "4 порции по 450 г",
      "kzhbu": {
        "calories": 155,
        "proteins": 10.8,
        "fats": 5.4,
        "carbs": 17.2
      },
      "semiFinishedProducts": [
        "Тянутая лапша чузма",
        "Свежий сай"
      ],
      "technologicalProcess": "Ручное вытягивание пшеничного теста с быстрой высокотемпературной вок-обжаркой овощей.",
      "servingTemperature": "75-80°C.",
      "storageConditions": "Лапшу и сай хранить раздельно до 24 часов."
    }
  },
  {
    "id": "dish-manti-lamb-pumpkin",
    "title": "Настоящие сочные узбекские манты с бараниной и сладкой тыквой",
    "category": "dishes",
    "description": "Королевское блюдо на пару: тончайшее прозрачное тесто, наполненное рубленым вручную мясом баранины с курдюком, сладкой мускатной тыквой, репчатым луком и ароматной растертой зирой.",
    "prepTime": 40,
    "cookTime": 45,
    "difficulty": "Средне",
    "servings": 4,
    "tags": [
      "Блюда",
      "Манты",
      "Баранина",
      "Тыква",
      "На пару"
    ],
    "ingredients": [
      {
        "name": "Баранина мякоть сочная",
        "amount": 500,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 750,
        "category": "Мясо"
      },
      {
        "name": "Курдюк бараний (для сочности)",
        "amount": 120,
        "unit": "г",
        "estimatedCostPerKg": 650,
        "category": "Мясо"
      },
      {
        "name": "Тыква сладкая мускатная",
        "amount": 250,
        "unit": "г",
        "coldWastePercent": 20,
        "estimatedCostPerKg": 70,
        "category": "Овощи"
      },
      {
        "name": "Лук репчатый сочный",
        "amount": 450,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 30,
        "category": "Овощи"
      },
      {
        "name": "Мука пшеничная высший сорт (тесто)",
        "amount": 450,
        "unit": "г",
        "estimatedCostPerKg": 55,
        "category": "Крупы и мука"
      },
      {
        "name": "Вода ледяная и яйцо (для теста)",
        "amount": 200,
        "unit": "мл",
        "estimatedCostPerKg": 40,
        "category": "Жидкости"
      },
      {
        "name": "Зира растертая и черный перец",
        "amount": 10,
        "unit": "г",
        "estimatedCostPerKg": 600,
        "category": "Специи"
      },
      {
        "name": "Масло сливочное (для смазывания готовых мантов)",
        "amount": 50,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Мясо, курдюк и тыкву нарежьте исключительно ВРУЧНУЮ острейшим шеф-ножом на кубики 4х4 мм (мясорубка строго запрещена!).",
        "timerSeconds": 600,
        "tip": "Рубленое ножом мясо сохраняет клеточный сок, и манты получаются полными горячего бульона."
      },
      {
        "stepNumber": 2,
        "instruction": "Лук нарежьте мелким кубиком, помните с солью, зирой и черным перцем, соедините с мясом, курдюком и тыквой.",
        "timerSeconds": 180,
        "tip": "Количество лука должно быть равно количеству мяса — это залог сочности."
      },
      {
        "stepNumber": 3,
        "instruction": "Замесите очень крутое пресное тесто, вымешивайте 10 минут, заверните в пленку на 30 минут.",
        "timerSeconds": 1800,
        "tip": "Крутое тесто держит сок и не рвется при варке на пару."
      },
      {
        "stepNumber": 4,
        "instruction": "Раскатайте тесто в тончайший пласт толщиной 1 мм, нарежьте на квадраты 10х10 см, выложите по полной столовой ложке фарша и слепите классические конверты с косичкой.",
        "timerSeconds": 600,
        "tip": "Тонкое тесто просвечивает начинку."
      },
      {
        "stepNumber": 5,
        "instruction": "Ярусы мантоварки (каскана) щедро смажьте маслом, уложите манты с зазором в 2 см и варите на сильном пару ровно 40-45 минут.",
        "timerSeconds": 2700,
        "tip": "Варите под плотно закрытой крышкой."
      },
      {
        "stepNumber": 6,
        "instruction": "Горячие манты переложите на ляган, смажьте сливочным маслом и подавайте с кислым катыком и зеленью.",
        "timerSeconds": 60,
        "tip": "Ешьте руками, откусывая край и выпивая драгоценный бульон."
      }
    ],
    "chefSecrets": [
      "Рубленая тыква внутри мантов полностью растворяется в бараньем жире, превращаясь в бархатистый сладковатый соус."
    ],
    "techCard": {
      "dishYield": "16-18 крупных мантов (4 порции)",
      "kzhbu": {
        "calories": 235,
        "proteins": 11.2,
        "fats": 12.8,
        "carbs": 19.4
      },
      "semiFinishedProducts": [
        "Рубленый баранье-тыквенный фарш",
        "Тонко раскатанное тесто"
      ],
      "technologicalProcess": "Паровая термообработка ручной лепки при 100°C в течение 45 минут.",
      "servingTemperature": "80°C.",
      "storageConditions": "Замороженными до 3 месяцев."
    }
  },
  {
    "id": "dish-satsivi-chicken-walnut",
    "title": "Сациви из курицы в пряном ореховом соусе Баже по-грузински",
    "category": "dishes",
    "description": "Жемчужина грузинского праздничного стола: нежное томленое мясо фермерской курицы, укутанное густым кремовым соусом из отборных грецких орехов, шафрана имеретинского, уцхо-сунели, кинзы, чеснока и белого винного уксуса.",
    "prepTime": 25,
    "cookTime": 45,
    "difficulty": "Средне",
    "servings": 6,
    "tags": [
      "Блюда",
      "Сациви",
      "Грузия",
      "Ореховый соус",
      "Курица"
    ],
    "ingredients": [
      {
        "name": "Курица фермерская целая",
        "amount": 1400,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 320,
        "category": "Птица"
      },
      {
        "name": "Орехи грецкие отборные светлые",
        "amount": 400,
        "unit": "г",
        "estimatedCostPerKg": 850,
        "category": "Орехи"
      },
      {
        "name": "Лук репчатый белый",
        "amount": 300,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 30,
        "category": "Овощи"
      },
      {
        "name": "Чеснок свежий",
        "amount": 25,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 250,
        "category": "Овощи"
      },
      {
        "name": "Уцхо-сунели (голубой пажитник)",
        "amount": 10,
        "unit": "г",
        "estimatedCostPerKg": 650,
        "category": "Специи"
      },
      {
        "name": "Шафран имеретинский (бархатцы) молотый",
        "amount": 5,
        "unit": "г",
        "estimatedCostPerKg": 700,
        "category": "Специи"
      },
      {
        "name": "Кориандр молотый сухой",
        "amount": 8,
        "unit": "г",
        "estimatedCostPerKg": 500,
        "category": "Специи"
      },
      {
        "name": "Уксус винный белый натуральный",
        "amount": 30,
        "unit": "мл",
        "estimatedCostPerKg": 180,
        "category": "Соусы"
      },
      {
        "name": "Бульон куриный процеженный",
        "amount": 800,
        "unit": "мл",
        "estimatedCostPerKg": 30,
        "category": "Жидкости"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Курицу отварите в подсоленной воде с луковицей и лавровым листом до полуготовности (30 минут). Бульон процедите, курицу смажьте маслом и подрумяньте в духовке при 200°C 15 минут, затем разберите на порционные кусочки.",
        "timerSeconds": 2700,
        "tip": "Запекание после варки дает аппетитный цвет и запечатывает сок."
      },
      {
        "stepNumber": 2,
        "instruction": "Лук нарежьте мельчайшим кубиком и томите на вытопленном курином жире на самом тихом огне 15 минут до мягкости без малейшей поджарки.",
        "timerSeconds": 900,
        "tip": "Лук не должен потемнеть, иначе соус потеряет светлый цвет."
      },
      {
        "stepNumber": 3,
        "instruction": "Грецкие орехи дважды пропустите через самую мелкую решетку мясорубки или разотрите в ступке до маслянистой гладкой пасты.",
        "timerSeconds": 300,
        "tip": "Выделение орехового масла — признак идеального помола."
      },
      {
        "stepNumber": 4,
        "instruction": "В ореховую пасту добавьте чеснок, уцхо-сунели, имеретинский шафран, кориандр, соль и винный уксус.",
        "timerSeconds": 120,
        "tip": "Шафран окрашивает соус в нежный теплый кремовый цвет."
      },
      {
        "stepNumber": 5,
        "instruction": "Постепенно вливайте в орехи теплый куриный бульон, непрерывно взбивая венчиком до консистенции жидкой сметаны, затем смешайте с тушеным луком.",
        "timerSeconds": 180,
        "tip": "При остывании орехи сильно загустеют."
      },
      {
        "stepNumber": 6,
        "instruction": "Залейте горячие кусочки курицы теплым ореховым соусом, доведите почти до кипения (НЕ КИПЯТИТЬ, чтобы орехи не свернулись!), снимите и остудите 6 часов в холодильнике.",
        "timerSeconds": 21600,
        "tip": "Сациви традиционно подается холодным."
      }
    ],
    "chefSecrets": [
      "Сациви ни в коем случае нельзя кипятить после соединения курицы с соусом — иначе ореховая эмульсия расслоится на масло и творожистый осадок."
    ],
    "techCard": {
      "dishYield": "6 порций по 350 г",
      "kzhbu": {
        "calories": 285,
        "proteins": 18.5,
        "fats": 21.4,
        "carbs": 4.8
      },
      "semiFinishedProducts": [
        "Запеченная курица",
        "Ореховая эмульсия Баже"
      ],
      "technologicalProcess": "Тепловая экстракция птицы с последующим холодным маринованием в орехово-бульонной эмульсии.",
      "servingTemperature": "12-14°C (холодная подача).",
      "storageConditions": "В холодильнике до 72 часов."
    }
  },
  {
    "id": "dish-chakhokhbili-tomato-herbs",
    "title": "Чахохбили из фермерской курицы с томатами и свежим базиликом",
    "category": "dishes",
    "description": "Легендарное грузинское рагу без капли добавленной воды: кусочки сочной курицы, сухо обжаренные на сковороде, томленые в собственном соку со спелыми сладкими помидорами, обилием лука, чесноком, уцхо-сунели, кинзой и фиолетовым рейханом.",
    "prepTime": 20,
    "cookTime": 40,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Блюда",
      "Чахохбили",
      "Грузия",
      "Курица",
      "Томаты"
    ],
    "ingredients": [
      {
        "name": "Курица фермерская (бедра и голени)",
        "amount": 1000,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 320,
        "category": "Птица"
      },
      {
        "name": "Помидоры грунтовые спелые (без кожицы)",
        "amount": 800,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 180,
        "category": "Овощи"
      },
      {
        "name": "Лук репчатый белый",
        "amount": 500,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 30,
        "category": "Овощи"
      },
      {
        "name": "Чеснок свежий",
        "amount": 25,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 250,
        "category": "Овощи"
      },
      {
        "name": "Масло сливочное 82.5% (для томления лука)",
        "amount": 40,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Кинза и базилик фиолетовый свежие",
        "amount": 60,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 450,
        "category": "Зелень"
      },
      {
        "name": "Уцхо-сунели и хмели-сунели",
        "amount": 10,
        "unit": "г",
        "estimatedCostPerKg": 650,
        "category": "Специи"
      },
      {
        "name": "Перец острый красный свежий",
        "amount": 1,
        "unit": "шт",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 500,
        "category": "Овощи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Курицу нарубите на небольшие порционные кусочки по 50-60 г, обсушите салфетками.",
        "timerSeconds": 180,
        "tip": "Сухое мясо подрумянится мгновенно."
      },
      {
        "stepNumber": 2,
        "instruction": "На сухую раскаленную толстодонную сковороду БЕЗ МАСЛА выложите курицу и обжаривайте на сильном огне 10 минут, периодически переворачивая, до золотистой корочки.",
        "timerSeconds": 600,
        "tip": "Сухая обжарка — главный исторический канон чахохбили."
      },
      {
        "stepNumber": 3,
        "instruction": "В отдельной сковороде на сливочном масле медленно пассеруйте мелко нарезанный лук 10 минут до сладкой золотистости.",
        "timerSeconds": 600,
        "tip": "Сливочное масло придает луку бархатистый вкус."
      },
      {
        "stepNumber": 4,
        "instruction": "Помидоры ошпарьте кипятком, снимите кожицу и крупно нарежьте.",
        "timerSeconds": 180,
        "tip": "Томаты пустят море натурального сладкого сока."
      },
      {
        "stepNumber": 5,
        "instruction": "Соедините обжаренную курицу, пассерованный лук и помидоры в сотейнике. Накройте крышкой и тушите на медленном огне 25 минут.",
        "timerSeconds": 1500,
        "tip": "Никакой воды — соус образуется из сока птицы, лука и томатов!"
      },
      {
        "stepNumber": 6,
        "instruction": "За 5 минут до готовности добавьте уцхо-сунели, мелко рубленый чеснок, острый перец и гигантскую охапку кинзы и базилика.",
        "timerSeconds": 300,
        "tip": "Свежая зелень должна лишь обдаться паром."
      }
    ],
    "chefSecrets": [
      "В чахохбили не добавляется ни капли воды: весь обильный пряный соус образуется исключительно из сока спелых томатов, курицы и лука."
    ],
    "techCard": {
      "dishYield": "4 порции по 400 г",
      "kzhbu": {
        "calories": 148,
        "proteins": 15.2,
        "fats": 7.8,
        "carbs": 4.8
      },
      "semiFinishedProducts": [
        "Сухообжаренная курица",
        "Пассерованный лук"
      ],
      "technologicalProcess": "Сухое поверхностное запечатывание птицы с последующим тушением в нативном овощном соку.",
      "servingTemperature": "75-80°C.",
      "storageConditions": "В холодильнике до 48 часов."
    }
  },
  {
    "id": "dish-odzhakhuri-pork-potatoes",
    "title": "Грузинское оджахури со свиной шейкой и картофелем на кеци",
    "category": "dishes",
    "description": "Домашнее семейное грузинское блюдо: сочные кусочки свиной шейки, обжаренные до корочки, золотистый картофель фри, сладкие томаты, репчатый лук, чеснок, зерна граната и свежая кинза, подаваемые шкворчащими на глиняной кеци.",
    "prepTime": 20,
    "cookTime": 25,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Блюда",
      "Оджахури",
      "Грузия",
      "Свинина",
      "Картофель"
    ],
    "ingredients": [
      {
        "name": "Свиная шейка сочная",
        "amount": 600,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 480,
        "category": "Мясо"
      },
      {
        "name": "Картофель отборный",
        "amount": 700,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 40,
        "category": "Овощи"
      },
      {
        "name": "Помидоры спелые грунтовые",
        "amount": 300,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 180,
        "category": "Овощи"
      },
      {
        "name": "Лук репчатый белый",
        "amount": 250,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 30,
        "category": "Овощи"
      },
      {
        "name": "Чеснок свежий",
        "amount": 20,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 250,
        "category": "Овощи"
      },
      {
        "name": "Кинза свежая свежесрезанная",
        "amount": 40,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 450,
        "category": "Зелень"
      },
      {
        "name": "Хмели-сунели и кориандр",
        "amount": 8,
        "unit": "г",
        "estimatedCostPerKg": 500,
        "category": "Специи"
      },
      {
        "name": "Зерна граната свежие",
        "amount": 30,
        "unit": "г",
        "estimatedCostPerKg": 300,
        "category": "Фрукты"
      },
      {
        "name": "Масло растительное для жарки",
        "amount": 80,
        "unit": "мл",
        "estimatedCostPerKg": 120,
        "category": "Масла"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Свинину нарежьте крупными кубиками со стороной 3-4 см, приправьте хмели-сунели, солью и ложкой масла, оставьте на 15 минут.",
        "timerSeconds": 900,
        "tip": "Крупная нарезка сохраняет сок."
      },
      {
        "stepNumber": 2,
        "instruction": "Картофель нарежьте крупными дольками и обжарьте во фритюре или сковороде до уверенной золотистой корочки и мягкости внутри. Откиньте на салфетку.",
        "timerSeconds": 600,
        "tip": "Картофель должен оставаться хрустящим снаружи."
      },
      {
        "stepNumber": 3,
        "instruction": "В широкой чугунной сковороде или воке на сильном огне обжарьте свинину до темно-румяного цвета (8-10 минут).",
        "timerSeconds": 600,
        "tip": "Обжаривайте на максимальном жаре."
      },
      {
        "stepNumber": 4,
        "instruction": "Добавьте полукольца лука, жарьте еще 3 минуты, затем добавьте дольки спелых томатов и рубленый чеснок.",
        "timerSeconds": 180,
        "tip": "Томаты прогреваются быстро, не превращаясь в кашу."
      },
      {
        "stepNumber": 5,
        "instruction": "Переложите в сковороду жареный картофель, аккуратно перемешайте и прогрейте все вместе 2 минуты, чтобы вкусы объединились.",
        "timerSeconds": 120,
        "tip": "Картофель пропитается мясным соком."
      },
      {
        "stepNumber": 6,
        "instruction": "Переложите на раскаленную глиняную сковороду кеци, посыпьте горой кинзы и рубиновыми зернами граната.",
        "timerSeconds": 60,
        "tip": "Подавайте шкворчащим прямо в кеци."
      }
    ],
    "chefSecrets": [
      "Раздельная обжарка картофеля и мяса с их соединением на финальных двух минутах сохраняет хруст картофельной корочки."
    ],
    "techCard": {
      "dishYield": "4 порции по 380 г",
      "kzhbu": {
        "calories": 215,
        "proteins": 13.8,
        "fats": 12.5,
        "carbs": 12.8
      },
      "semiFinishedProducts": [
        "Обжаренная свиная шейка",
        "Золотистый картофель фри"
      ],
      "technologicalProcess": "Раздельная высокотемпературная термообработка компонентов с композиционным объединением на кеци.",
      "servingTemperature": "85°C (на раскаленной кеци).",
      "storageConditions": "Употреблять сразу."
    }
  },
  {
    "id": "dish-chashushuli-veal-spicy",
    "title": "Чашушули из нежной телятины в остром томатном соусе",
    "category": "dishes",
    "description": "Огненное рагу кавказских долгожителей: ломтики молодой телятины, медленно томленые в собственном соку с луком, сладким болгарским перцем, острым стручковым перцем, томатами, чесноком и уцхо-сунели.",
    "prepTime": 20,
    "cookTime": 60,
    "difficulty": "Средне",
    "servings": 4,
    "tags": [
      "Блюда",
      "Чашушули",
      "Грузия",
      "Телятина",
      "Острое"
    ],
    "ingredients": [
      {
        "name": "Телятина мякоть (лопатка или огузок)",
        "amount": 800,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 780,
        "category": "Мясо"
      },
      {
        "name": "Лук репчатый сочный",
        "amount": 400,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 30,
        "category": "Овощи"
      },
      {
        "name": "Помидоры спелые сочные (бланшированные)",
        "amount": 500,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 180,
        "category": "Овощи"
      },
      {
        "name": "Перец болгарский красный",
        "amount": 200,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 200,
        "category": "Овощи"
      },
      {
        "name": "Перец острый стручковый зеленый",
        "amount": 1,
        "unit": "шт",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 500,
        "category": "Овощи"
      },
      {
        "name": "Чеснок свежий",
        "amount": 25,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 250,
        "category": "Овощи"
      },
      {
        "name": "Кинза и петрушка свежие",
        "amount": 50,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 400,
        "category": "Зелень"
      },
      {
        "name": "Уцхо-сунели и аджика острая грузинская",
        "amount": 25,
        "unit": "г",
        "estimatedCostPerKg": 500,
        "category": "Специи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Телятину нарежьте небольшими кусочками поперек волокон, выложите в казан или толстодонный сотейник, накройте крышкой и тушите в собственном соку на среднем огне 20 минут.",
        "timerSeconds": 1200,
        "tip": "Телятина выделит обильный прозрачный сок."
      },
      {
        "stepNumber": 2,
        "instruction": "Когда сок почти выпарится, добавьте нарезанный полукольцами лук и ложку масла, обжаривайте 7-8 минут до золотистости.",
        "timerSeconds": 480,
        "tip": "Лук карамелизуется вместе с мясом."
      },
      {
        "stepNumber": 3,
        "instruction": "Добавьте нарезанный соломкой болгарский перец, острую грузинскую аджику и уцхо-сунели.",
        "timerSeconds": 120,
        "tip": "Аджика дает характерную жгучую пряность."
      },
      {
        "stepNumber": 4,
        "instruction": "Помидоры очистите от кожицы, мелко нарежьте и добавьте к мясу.",
        "timerSeconds": 120,
        "tip": "Томатная кислота завершит процесс размягчения мяса."
      },
      {
        "stepNumber": 5,
        "instruction": "Накройте крышкой и томите на тишайшем огне еще 30 минут, пока телятина не станет распадаться на нежнейшие волокна.",
        "timerSeconds": 1800,
        "tip": "Соус должен стать густым и обволакивающим."
      },
      {
        "stepNumber": 6,
        "instruction": "Всыпьте рубленый чеснок, колечки острого перца и охапку кинзы, перемешайте, снимите с огня и дайте постоять 10 минут под крышкой.",
        "timerSeconds": 600,
        "tip": "Подавайте с горячим шотис пури."
      }
    ],
    "chefSecrets": [
      "Первый этап томления телятины строго в собственном соку под плотной крышкой делает мясо шелковисто-мягким без волокнистой жесткости."
    ],
    "techCard": {
      "dishYield": "4 порции по 360 г",
      "kzhbu": {
        "calories": 165,
        "proteins": 16.8,
        "fats": 7.2,
        "carbs": 5.4
      },
      "semiFinishedProducts": [
        "Припущенная в собственном соку телятина"
      ],
      "technologicalProcess": "Двухфазное автолитическое тушение мяса с последующим овощным купажированием.",
      "servingTemperature": "75-80°C.",
      "storageConditions": "В холодильнике до 72 часов."
    }
  },
  {
    "id": "dish-dolma-grape-leaves",
    "title": "Традиционная кавказская долма в молодых виноградных листьях",
    "category": "dishes",
    "description": "Ювелирное восточное блюдо: нежные молодые виноградные листья, начиненные сочным фаршем из баранины и говядины с круглым рисом, луком, мятой и кинзой, томленые под прессом в бульоне. Подаются с чесночным мацони.",
    "prepTime": 45,
    "cookTime": 50,
    "difficulty": "Средне",
    "servings": 4,
    "tags": [
      "Блюда",
      "Долма",
      "Виноградные листья",
      "Баранина",
      "Кавказ"
    ],
    "ingredients": [
      {
        "name": "Листья виноградные маринованные или свежие молодые",
        "amount": 50,
        "unit": "шт",
        "estimatedCostPerKg": 400,
        "category": "Овощи"
      },
      {
        "name": "Фарш из баранины и говядины (1:1)",
        "amount": 500,
        "unit": "г",
        "estimatedCostPerKg": 650,
        "category": "Мясо"
      },
      {
        "name": "Рис круглозерный (промытый)",
        "amount": 80,
        "unit": "г",
        "estimatedCostPerKg": 90,
        "category": "Крупы и мука"
      },
      {
        "name": "Лук репчатый мелкорубленый",
        "amount": 200,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 30,
        "category": "Овощи"
      },
      {
        "name": "Мята сушеная или свежая",
        "amount": 10,
        "unit": "г",
        "estimatedCostPerKg": 600,
        "category": "Зелень"
      },
      {
        "name": "Кинза свежая",
        "amount": 30,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 450,
        "category": "Зелень"
      },
      {
        "name": "Зира и черный перец",
        "amount": 5,
        "unit": "г",
        "estimatedCostPerKg": 600,
        "category": "Специи"
      },
      {
        "name": "Мацони густой натуральный (для подачи)",
        "amount": 200,
        "unit": "г",
        "estimatedCostPerKg": 180,
        "category": "Молочные"
      },
      {
        "name": "Чеснок свежий",
        "amount": 15,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 250,
        "category": "Овощи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Виноградные листья промойте в холодной воде от излишков соли, ошпарьте кипятком на 1 минуту и срежьте жесткие черешки.",
        "timerSeconds": 180,
        "tip": "Ошпаривание делает листья эластичными и шелковистыми."
      },
      {
        "stepNumber": 2,
        "instruction": "Для начинки соедините фарш, сырой промытый рис, лук, рубленую кинзу, мяту, зиру, соль и 50 мл холодной воды для сочности.",
        "timerSeconds": 240,
        "tip": "Мята в долме — обязательный секрет бакинских кулинаров."
      },
      {
        "stepNumber": 3,
        "instruction": "На шершавую сторону листа выложите чайную ложку фарша, заверните края и сверните в аккуратные плотные пальчики размером с мизинец.",
        "timerSeconds": 900,
        "tip": "Чем мельче свернута долма, тем выше мастерство хозяйки."
      },
      {
        "stepNumber": 4,
        "instruction": "Дно толстодонной кастрюли выстелите отбракованными листьями. Плотно рядами уложите долму швом вниз в несколько слоев.",
        "timerSeconds": 300,
        "tip": "Плотная укладка не дает долме развернуться при кипении."
      },
      {
        "stepNumber": 5,
        "instruction": "Прижмите сверху плоской тяжелой тарелкой, залейте бульоном или подсоленной водой вровень с тарелкой, доведите до кипения и томите на тихом огне 45-50 минут.",
        "timerSeconds": 3000,
        "tip": "Тарелка удерживает форму долмы."
      },
      {
        "stepNumber": 6,
        "instruction": "Подавайте горячую долму с прохладным соусом из мацони с тертым чесноком.",
        "timerSeconds": 60,
        "tip": "Контраст горячей кисловатой долмы и холодного чесночного мацони совершенен."
      }
    ],
    "chefSecrets": [
      "Тарелка-пресс поверх слоев долмы предотвращает ее раскрытие и бурление при медленном томлении."
    ],
    "techCard": {
      "dishYield": "4 порции (по 10-12 шт на порцию)",
      "kzhbu": {
        "calories": 155,
        "proteins": 10.4,
        "fats": 9.2,
        "carbs": 7.8
      },
      "semiFinishedProducts": [
        "Бланшированные виноградные листья",
        "Пряный мясной фарш с рисом"
      ],
      "technologicalProcess": "Ручная завертка с последующим гидротермальным томлением под гнетом при 95°C.",
      "servingTemperature": "70-75°C.",
      "storageConditions": "В бульоне в холодильнике до 48 часов."
    }
  },
  {
    "id": "dish-pelmeni-siberian-three-meats",
    "title": "Сибирские пельмени ручной лепки из трех видов мяса в прозрачном бульоне",
    "category": "dishes",
    "description": "Сибирский эталон: тонкое эластичное тесто на ледяной воде, начинка из говядины, свинины и баранины с добавлением колотого ледяного бульона для взрывной сочности. Подаются со сливочным маслом и уксусом.",
    "prepTime": 45,
    "cookTime": 10,
    "difficulty": "Средне",
    "servings": 4,
    "tags": [
      "Блюда",
      "Пельмени",
      "Сибирь",
      "Ручная лепка",
      "Классика"
    ],
    "ingredients": [
      {
        "name": "Говядина мякоть сочная",
        "amount": 250,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 650,
        "category": "Мясо"
      },
      {
        "name": "Свинина полужирная",
        "amount": 200,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 380,
        "category": "Мясо"
      },
      {
        "name": "Баранина жирная (или курдюк)",
        "amount": 100,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 750,
        "category": "Мясо"
      },
      {
        "name": "Мука пшеничная экстра-класса",
        "amount": 450,
        "unit": "г",
        "estimatedCostPerKg": 65,
        "category": "Крупы и мука"
      },
      {
        "name": "Яйцо куриное и ледяная вода",
        "amount": 210,
        "unit": "мл",
        "estimatedCostPerKg": 50,
        "category": "Яйца"
      },
      {
        "name": "Лук репчатый сочный",
        "amount": 250,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 30,
        "category": "Овощи"
      },
      {
        "name": "Ледяной колотый бульон (или ледяная вода в фарш)",
        "amount": 80,
        "unit": "мл",
        "estimatedCostPerKg": 10,
        "category": "Жидкости"
      },
      {
        "name": "Масло сливочное вологодское (для подачи)",
        "amount": 50,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Мясо трех видов пропустите через среднюю решетку мясорубки вместе с луком.",
        "timerSeconds": 240,
        "tip": "Три вида мяса дают идеальный баланс нежности, вкуса и сочности."
      },
      {
        "stepNumber": 2,
        "instruction": "В фарш добавьте соль, свежемолотый черный перец и влейте ледяной бульон. Вымешивайте и отбивайте фарш 5 минут, пока вся влага не впитается.",
        "timerSeconds": 300,
        "tip": "Вбитая ледяная жидкость при варке превратится в тот самый обжигающий бульон внутри пельменя."
      },
      {
        "stepNumber": 3,
        "instruction": "Замесите плотное эластичное пельменное тесто, дайте созреть 30 минут под миской.",
        "timerSeconds": 1800,
        "tip": "Тесто станет податливым и шелковым."
      },
      {
        "stepNumber": 4,
        "instruction": "Раскатайте тесто в тонкий пласт, вырежьте кружки рюмкой, выложите шарики фарша и слепите классические сибирские «ушки».",
        "timerSeconds": 900,
        "tip": "Кончики пельменей надежно соедините вместе."
      },
      {
        "stepNumber": 5,
        "instruction": "Опустите пельмени в кипящий подсоленный бульон с лавровым листом и черным перцем горошком. После всплытия варите ровно 5-6 минут.",
        "timerSeconds": 360,
        "tip": "Не переваривайте, чтобы тесто сохранило упругость."
      },
      {
        "stepNumber": 6,
        "instruction": "Выловите шумовкой, щедро сдобрите вологодским сливочным маслом и подавайте со сметаной или ядреным уксусом с перцем.",
        "timerSeconds": 60,
        "tip": "Подавайте немедленно."
      }
    ],
    "chefSecrets": [
      "Введение ледяного бульона в фарш перед лепкой — секрет того, почему настоящий сибирский пельмень брызжет соком при раскусывании."
    ],
    "techCard": {
      "dishYield": "4 порции по 20-22 шт (около 320 г готовых пельменей)",
      "kzhbu": {
        "calories": 245,
        "proteins": 13.5,
        "fats": 11.2,
        "carbs": 22.8
      },
      "semiFinishedProducts": [
        "Трехмясной гидротированный фарш",
        "Пельменное тесто"
      ],
      "technologicalProcess": "Ручная штучная формовка с последующей варкой в ароматизированном кипящем рассоле.",
      "servingTemperature": "80°C.",
      "storageConditions": "В замороженном виде при -18°C до 6 месяцев."
    }
  },
  {
    "id": "dish-pozarskie-cutlets",
    "title": "Знаменитые пожарские котлеты в панировке из хрустящих сухариков",
    "category": "dishes",
    "description": "Исторический шедевр русской трактирной кухни: нежнейший рубленый фарш из куриного филе со сливочным маслом и сливками, обваленный в крупной соломке из свежего багета и обжаренный до хрустящей янтарной корочки.",
    "prepTime": 30,
    "cookTime": 15,
    "difficulty": "Средне",
    "servings": 4,
    "tags": [
      "Блюда",
      "Пожарские котлеты",
      "Курица",
      "Русская кухня",
      "Классика"
    ],
    "ingredients": [
      {
        "name": "Филе куриной грудки и бедра (1:1)",
        "amount": 600,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 340,
        "category": "Птица"
      },
      {
        "name": "Масло сливочное 82.5% замороженное",
        "amount": 120,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Сливки 20-33% жирности",
        "amount": 100,
        "unit": "мл",
        "estimatedCostPerKg": 320,
        "category": "Молочные"
      },
      {
        "name": "Хлеб белый тостовый или багет (для панировки)",
        "amount": 200,
        "unit": "г",
        "estimatedCostPerKg": 120,
        "category": "Хлеб"
      },
      {
        "name": "Хлеб белый без корки (в фарш)",
        "amount": 80,
        "unit": "г",
        "estimatedCostPerKg": 100,
        "category": "Хлеб"
      },
      {
        "name": "Яйцо куриное (для льезона)",
        "amount": 2,
        "unit": "шт",
        "estimatedCostPerKg": 140,
        "category": "Яйца"
      },
      {
        "name": "Мускатный орех свеженатертый",
        "amount": 2,
        "unit": "г",
        "estimatedCostPerKg": 900,
        "category": "Специи"
      },
      {
        "name": "Масло топленое (для жарки)",
        "amount": 60,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Багет слегка подморозьте, срежьте корки и нарежьте мякиш тончайшей изящной соломкой 4х25 мм.",
        "timerSeconds": 300,
        "tip": "Хлебная соломка создает легендарный «ежистый» хрустящий панцирь."
      },
      {
        "stepNumber": 2,
        "instruction": "Куриное мясо нарубите ножом в мелкий фарш или пропустите через крупную решетку мясорубки.",
        "timerSeconds": 180,
        "tip": "Курицу нельзя перемалывать в эмульсию — фактура должна оставаться нежной рубкой."
      },
      {
        "stepNumber": 3,
        "instruction": "Хлеб для фарша замочите в сливках, отожмите и соедините с мясом. Добавьте мускатный орех и соль.",
        "timerSeconds": 120,
        "tip": "Сливки дают сливочный пудинговый вкус."
      },
      {
        "stepNumber": 4,
        "instruction": "Ледяное сливочное масло натрите на крупной терке прямо в холодный фарш и быстро перемешайте руками.",
        "timerSeconds": 120,
        "tip": "Кусочки масла должны остаться нерастаявшими до жарки."
      },
      {
        "stepNumber": 5,
        "instruction": "Сформируйте крупные каплевидные котлеты, обмакните в льезон из взбитых яиц и щедро обваляйте в хлебной соломке, слегка прижимая ладонями.",
        "timerSeconds": 240,
        "tip": "Хлеб должен полностью покрывать котлету."
      },
      {
        "stepNumber": 6,
        "instruction": "Обжарьте на топленом масле на среднем огне по 3-4 минуты с каждой стороны до золотистого цвета, затем доведите в духовке при 180°C 8 минут.",
        "timerSeconds": 720,
        "tip": "При разрезании из котлеты брызжет растопленное сливочное масло."
      }
    ],
    "chefSecrets": [
      "Тертое замороженное масло, введенное в фарш перед формовкой, плавится внутри котлеты в духовке, создавая тающую сочность суфле."
    ],
    "techCard": {
      "dishYield": "4 крупные котлеты по 180 г",
      "kzhbu": {
        "calories": 295,
        "proteins": 17.8,
        "fats": 18.5,
        "carbs": 14.8
      },
      "semiFinishedProducts": [
        "Куриный рубленый фарш с маслом",
        "Багетная соломка"
      ],
      "technologicalProcess": "Формовка рубленой птицы со сливочным жиром в багетной панировке с двухфазной термообработкой.",
      "servingTemperature": "75°C.",
      "storageConditions": "Употреблять сразу после приготовления."
    }
  },
  {
    "id": "dish-duck-confit-puree",
    "title": "Утиное конфи (Confit de Canard) с бархатным картофельным пюре",
    "category": "dishes",
    "description": "Вершина классической французской кухни Гаскони: утиные ножки, маринованные с морской солью и тимьяном, медленно томленые 4 часа в собственном утином жире при 90°C до тающей нежности, а затем подрумяненные до хруста кожицы.",
    "prepTime": 20,
    "cookTime": 240,
    "difficulty": "Средне",
    "servings": 4,
    "tags": [
      "Блюда",
      "Конфи",
      "Утка",
      "Франция",
      "Гастрономия"
    ],
    "ingredients": [
      {
        "name": "Окорочка утиные фермерские",
        "amount": 4,
        "unit": "шт",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 650,
        "category": "Птица"
      },
      {
        "name": "Жир утиный топленый (Graisse de Canard)",
        "amount": 600,
        "unit": "г",
        "estimatedCostPerKg": 500,
        "category": "Масла"
      },
      {
        "name": "Чеснок целая головка",
        "amount": 1,
        "unit": "шт",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 250,
        "category": "Овощи"
      },
      {
        "name": "Тимьян свежий и розмарин",
        "amount": 20,
        "unit": "г",
        "coldWastePercent": 20,
        "estimatedCostPerKg": 800,
        "category": "Зелень"
      },
      {
        "name": "Соль морская крупная",
        "amount": 30,
        "unit": "г",
        "estimatedCostPerKg": 40,
        "category": "Специи"
      },
      {
        "name": "Картофель отборный (для пюре Робюшона)",
        "amount": 800,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 40,
        "category": "Овощи"
      },
      {
        "name": "Масло сливочное 82.5% (для пюре)",
        "amount": 200,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Молоко цельное горячее",
        "amount": 150,
        "unit": "мл",
        "estimatedCostPerKg": 85,
        "category": "Молочные"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Утиные ножки натрите крупной морской солью, листиками тимьяна и дробленым перцем, оставьте мариноваться в холоде на 12 часов.",
        "timerSeconds": 43200,
        "tip": "Предварительный посол вытягивает лишнюю воду и уплотняет мясо."
      },
      {
        "stepNumber": 2,
        "instruction": "Смойте соль с ножек, обсушите полотенцем. Уложите в чугунный сотейник, добавьте головку чеснока, разрезанную пополам, веточки трав и полностью залейте растопленным утиным жиром.",
        "timerSeconds": 300,
        "tip": "Мясо должно быть целиком покрыто жиром."
      },
      {
        "stepNumber": 3,
        "instruction": "Поставьте в духовку при 90-100°C ровно на 3.5-4 часа. Мясо должно стать мягким настолько, что косточка свободно проворачивается.",
        "timerSeconds": 14400,
        "tip": "Низкая температура не дает волокнам сжаться и высохнуть."
      },
      {
        "stepNumber": 4,
        "instruction": "Для пюре отварите картофель в кожуре, очистите горячим, протрите через мелкое сито и взбейте с огромным количеством сливочного масла и горячего молока по методу Жоэля Робюшона.",
        "timerSeconds": 1200,
        "tip": "Пюре должно стекать с ложки шелковой лентой."
      },
      {
        "stepNumber": 5,
        "instruction": "Перед подачей переложите ножки на сухую раскаленную сковороду кожей вниз и обжарьте 4 минуты до суперхрустящей стеклянной корочки.",
        "timerSeconds": 240,
        "tip": "Контраст хрустящей кожи и тающего мяса великолепен."
      },
      {
        "stepNumber": 6,
        "instruction": "Подавайте ножку конфи на пышном шелковистом пюре с соусом из печеного чеснока.",
        "timerSeconds": 60,
        "tip": "Подавайте горячим."
      }
    ],
    "chefSecrets": [
      "Томление ножек в утином жире при щадящих 95°C сохраняет абсолютную сочность утки, делая волокна тающими."
    ],
    "techCard": {
      "dishYield": "4 порции (по 1 ножке с 200 г пюре)",
      "kzhbu": {
        "calories": 345,
        "proteins": 19.5,
        "fats": 25.8,
        "carbs": 10.4
      },
      "semiFinishedProducts": [
        "Засоленные утиные окорочка",
        "Шелковое картофельное пюре"
      ],
      "technologicalProcess": "Длительное низкотемпературное консервирующее томление в липидной среде с финальным колерованием кожи.",
      "servingTemperature": "75°C.",
      "storageConditions": "В слое застывшего утиного жира ножки могут храниться в холоде до 3 месяцев."
    }
  },
  {
    "id": "dish-beef-bourguignon",
    "title": "Говядина по-бургундски (Boeuf Bourguignon) в красном вине",
    "category": "dishes",
    "description": "Великое блюдо французской гастрономии: кусочки мраморной говядины, долго томленые в густом винном соусе на основе бургундского пино нуар с копченым беконом лардон, карамелизованным жемчужным луком шалот и лесными шампиньонами.",
    "prepTime": 30,
    "cookTime": 180,
    "difficulty": "Средне",
    "servings": 6,
    "tags": [
      "Блюда",
      "Бёф Бургиньон",
      "Говядина",
      "Франция",
      "Вино"
    ],
    "ingredients": [
      {
        "name": "Говяжья лопатка или огузок мраморный",
        "amount": 1200,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 750,
        "category": "Мясо"
      },
      {
        "name": "Вино сухое красное насыщенное (Бургундское / Пино Нуар)",
        "amount": 750,
        "unit": "мл",
        "estimatedCostPerKg": 650,
        "category": "Жидкости"
      },
      {
        "name": "Бекон копченый (грудинка)",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 550,
        "category": "Мясо"
      },
      {
        "name": "Шампиньоны свежие упругие",
        "amount": 300,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 200,
        "category": "Грибы"
      },
      {
        "name": "Лук шалот или мелкий жемчужный лук",
        "amount": 200,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 250,
        "category": "Овощи"
      },
      {
        "name": "Морковь крупная сладкая",
        "amount": 200,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 40,
        "category": "Овощи"
      },
      {
        "name": "Бульон говяжий крепкий",
        "amount": 400,
        "unit": "мл",
        "estimatedCostPerKg": 30,
        "category": "Жидкости"
      },
      {
        "name": "Чеснок, тимьян и розмарин (букет гарни)",
        "amount": 25,
        "unit": "г",
        "estimatedCostPerKg": 400,
        "category": "Зелень"
      },
      {
        "name": "Томатная паста и ложка муки",
        "amount": 40,
        "unit": "г",
        "estimatedCostPerKg": 100,
        "category": "Бакалея"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Бекон нарежьте брусочками (лардоны) и вытопите в чугунной жаровне. Извлеките шкварки, сохранив ароматный жир.",
        "timerSeconds": 360,
        "tip": "Бекон дает дымную основу всему соусу."
      },
      {
        "stepNumber": 2,
        "instruction": "Говядину нарежьте крупными кубиками по 5 см, тщательно обсушите салфетками. Обжаривайте партиями в кипящем жире до темно-коричневой корочки со всех сторон.",
        "timerSeconds": 600,
        "tip": "Обжарка небольшими партиями не дает мясу пустить сок и свариться."
      },
      {
        "stepNumber": 3,
        "instruction": "Всыпьте ложку муки, обжарьте 1 минуту, добавьте томатную пасту, деглазируйте бутылкой красного вина и влейте говяжий бульон.",
        "timerSeconds": 300,
        "tip": "Вино растворит все карамельные пригары со дна."
      },
      {
        "stepNumber": 4,
        "instruction": "Положите обжаренный бекон, крупные куски моркови, чеснок и букет гарни. Накройте плотной крышкой и томите в духовке при 150°C 2.5 часа.",
        "timerSeconds": 9000,
        "tip": "Медленное томление превращает жесткое мясо в тающее сливочное лакомство."
      },
      {
        "stepNumber": 5,
        "instruction": "Отдельно на сковороде в сливочном масле карамелизуйте жемчужный лук и четвертинки шампиньонов до темно-золотого цвета.",
        "timerSeconds": 480,
        "tip": "Отдельная обжарка сохраняет упругость грибов."
      },
      {
        "stepNumber": 6,
        "instruction": "Добавьте грибы и лук в жаровню к мясу за 20 минут до окончания тушения. Подавайте с картофельным пюре или хрустящим багетом.",
        "timerSeconds": 1200,
        "tip": "Соус должен быть темно-бордовым, густым и шелковистым."
      }
    ],
    "chefSecrets": [
      "Крупные куски мяса (5х5 см) и длительное 3-часовое томление в кислой среде красного сухого вина полностью растворяют соединительную ткань."
    ],
    "techCard": {
      "dishYield": "6 порций по 380 г",
      "kzhbu": {
        "calories": 185,
        "proteins": 18.2,
        "fats": 9.4,
        "carbs": 6.8
      },
      "semiFinishedProducts": [
        "Обжаренная говядина",
        "Карамелизованный жемчужный лук"
      ],
      "technologicalProcess": "Высокотемпературное поверхностное запечатывание с последующей редукцией в спирто-винной среде в духовом шкафу.",
      "servingTemperature": "75°C.",
      "storageConditions": "В холодильнике до 4 суток (на второй день становится еще вкуснее)."
    }
  },
  {
    "id": "dish-coq-au-vin",
    "title": "Петух в вине (Coq au Vin) по-бургундски со сливочными шампиньонами",
    "category": "dishes",
    "description": "Старинный шедевр сельской Франции: кусочки фермерской птицы, маринованные и тушеные в красном бургундском вине с тимьяном, копченой грудинкой, маленькими луковичками шалот и лесными грибами.",
    "prepTime": 25,
    "cookTime": 60,
    "difficulty": "Средне",
    "servings": 4,
    "tags": [
      "Блюда",
      "Кок о вен",
      "Птица",
      "Франция",
      "Вино"
    ],
    "ingredients": [
      {
        "name": "Курица фермерская или петух (порционные куски)",
        "amount": 1200,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 320,
        "category": "Птица"
      },
      {
        "name": "Вино красное сухое насыщенное",
        "amount": 600,
        "unit": "мл",
        "estimatedCostPerKg": 500,
        "category": "Жидкости"
      },
      {
        "name": "Грудинка свиная копченая",
        "amount": 120,
        "unit": "г",
        "estimatedCostPerKg": 550,
        "category": "Мясо"
      },
      {
        "name": "Шампиньоны свежие белые мелкие",
        "amount": 250,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 200,
        "category": "Грибы"
      },
      {
        "name": "Лук шалот мелкий цельный",
        "amount": 150,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 250,
        "category": "Овощи"
      },
      {
        "name": "Бульон куриный наваристый",
        "amount": 300,
        "unit": "мл",
        "estimatedCostPerKg": 30,
        "category": "Жидкости"
      },
      {
        "name": "Коньяк или бренди (для фламбирования)",
        "amount": 40,
        "unit": "мл",
        "estimatedCostPerKg": 1200,
        "category": "Жидкости"
      },
      {
        "name": "Сливочное масло и мука (для соуса Бер Маньэ)",
        "amount": 40,
        "unit": "г",
        "estimatedCostPerKg": 500,
        "category": "Бакалея"
      },
      {
        "name": "Тимьян, чеснок и лавровый лист",
        "amount": 15,
        "unit": "г",
        "estimatedCostPerKg": 300,
        "category": "Зелень"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Кусочки птицы замаринуйте в красном вине с тимьяном и лавровым листом минимум на 4 часа (вино окрасит мясо в красивый фиолетовый тон).",
        "timerSeconds": 14400,
        "tip": "Маринование в вине наполняет волокна ароматом ягод."
      },
      {
        "stepNumber": 2,
        "instruction": "Обсушите курицу салфетками. В сотейнике вытопите копченую грудинку, на вытопленном жире обжарьте курицу до уверенной бронзовой корочки.",
        "timerSeconds": 480,
        "tip": "Сухое мясо подрумянивается идеально."
      },
      {
        "stepNumber": 3,
        "instruction": "Влейте рюмку коньяка и подожгите (фламбируйте), чтобы алкоголь мгновенно карамелизовался.",
        "timerSeconds": 30,
        "tip": "Фламбирование дает глубокий ресторанный аромат."
      },
      {
        "stepNumber": 4,
        "instruction": "Влейте процеженное вино из маринада и куриный бульон, положите чеснок и томленый бекон. Накройте крышкой и тушите 40 минут на тихом огне.",
        "timerSeconds": 2400,
        "tip": "Мясо птицы станет нежнейшим."
      },
      {
        "stepNumber": 5,
        "instruction": "Шампиньоны и лук шалот обжарьте отдельно на сливочном масле и добавьте в сотейник за 10 минут до конца варки.",
        "timerSeconds": 600,
        "tip": "Грибы сохранят форму."
      },
      {
        "stepNumber": 6,
        "instruction": "Взбейте сливочное масло с мукой (beurre manié) и вмешайте в соус для придания бархатистой густоты и зеркального глянца.",
        "timerSeconds": 120,
        "tip": "Подавайте с широкой яичной лапшой тальятелле."
      }
    ],
    "chefSecrets": [
      "Фламбирование птицы коньяком перед тушением в вине уничтожает сырую спиртовую резкость и дарит благородный карамельный оттенок."
    ],
    "techCard": {
      "dishYield": "4 порции по 380 г",
      "kzhbu": {
        "calories": 178,
        "proteins": 17.4,
        "fats": 8.9,
        "carbs": 5.2
      },
      "semiFinishedProducts": [
        "Маринованная в вине птица",
        "Загуститель Бер Маньэ"
      ],
      "technologicalProcess": "Фламбирование с последующим винным тушением и стабилизацией соуса сливочной пассировкой.",
      "servingTemperature": "75°C.",
      "storageConditions": "В холодильнике до 48 часов."
    }
  },
  {
    "id": "dish-ratatouille-classic",
    "title": "Классический запеченный рататуй Конфи Бьяльди",
    "category": "dishes",
    "description": "Шедевр прованской кухни: тончайшие ровные колечки молодых кабачков цукини, баклажанов и сладких томатов, уложенные гармошкой на подушку из пикантного перечно-томатного соуса пиперад с прованскими травами.",
    "prepTime": 30,
    "cookTime": 50,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Блюда",
      "Рататуй",
      "Прованс",
      "Овощи",
      "Вегетарианское"
    ],
    "ingredients": [
      {
        "name": "Цукини молодые тонкие",
        "amount": 300,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 120,
        "category": "Овощи"
      },
      {
        "name": "Баклажаны тонкие калиброванные",
        "amount": 300,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 160,
        "category": "Овощи"
      },
      {
        "name": "Помидоры сливовидные плотные (одинакового диаметра)",
        "amount": 400,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 180,
        "category": "Овощи"
      },
      {
        "name": "Перец болгарский красный и желтый (для соуса)",
        "amount": 300,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 200,
        "category": "Овощи"
      },
      {
        "name": "Лук репчатый белый",
        "amount": 150,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 30,
        "category": "Овощи"
      },
      {
        "name": "Чеснок свежий",
        "amount": 20,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 250,
        "category": "Овощи"
      },
      {
        "name": "Травы прованские (тимьян, розмарин, орегано)",
        "amount": 10,
        "unit": "г",
        "estimatedCostPerKg": 600,
        "category": "Специи"
      },
      {
        "name": "Масло оливковое Extra Virgin",
        "amount": 60,
        "unit": "мл",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Для соуса пиперад запеките болгарские перцы в духовке до подпалин, снимите кожицу и измельчите блендером с пассерованным луком, чесноком и томатами в густое ароматное пюре.",
        "timerSeconds": 900,
        "tip": "Соус пиперад служит сочной ароматной подушкой."
      },
      {
        "stepNumber": 2,
        "instruction": "Вылейте теплый соус на дно круглой керамической формы для запекания слоем 1.5 см.",
        "timerSeconds": 60,
        "tip": "Разровняйте лопаткой."
      },
      {
        "stepNumber": 3,
        "instruction": "Кабачки, баклажаны и помидоры нарежьте на терке-мандолине тончайшими ровными кружками толщиной строго 1.5-2 мм.",
        "timerSeconds": 300,
        "tip": "Одинаковая калибровка овощей — секрет ресторанной красоты."
      },
      {
        "stepNumber": 4,
        "instruction": "Чередуя кружки (баклажан, цукини, томат), уложите их красивой плотной спиралью-гармошкой от краев формы к центру.",
        "timerSeconds": 600,
        "tip": "Узор должен выглядеть безупречно."
      },
      {
        "stepNumber": 5,
        "instruction": "Сбрызните овощи оливковым маслом, посыпьте морской солью и свежим тимьяном. Накройте пергаментом и запекайте при 160°C 40 минут, затем снимите пергамент и подрумяньте еще 10 минут при 190°C.",
        "timerSeconds": 3000,
        "tip": "Пергамент предотвращает высыхание овощей."
      },
      {
        "stepNumber": 6,
        "instruction": "Подавайте рататуй теплым с каплями зеленого травяного масла и хрустящей чиабаттой.",
        "timerSeconds": 60,
        "tip": "Блюдо великолепно и на второй день в холодном виде."
      }
    ],
    "chefSecrets": [
      "Выпекание под кругом из промасленного пергамента создает паровую баню, благодаря которой овощи становятся шелковистыми, не теряя форму."
    ],
    "techCard": {
      "dishYield": "Форма 24 см (4 порции по 280 г)",
      "kzhbu": {
        "calories": 88,
        "proteins": 2.1,
        "fats": 4.8,
        "carbs": 9.4
      },
      "semiFinishedProducts": [
        "Соус пиперад из печеных перцев",
        "Слайсированные овощи"
      ],
      "technologicalProcess": "Прецизионная нарезка овощного сырья с послойным комбинированным запеканием под пергаментом.",
      "servingTemperature": "60-65°C.",
      "storageConditions": "В холодильнике до 72 часов."
    }
  },
  {
    "id": "dish-french-onion-soup",
    "title": "Классический французский луковый суп с хрустящим багетом и сыром Грюйер",
    "category": "dishes",
    "description": "Аристократический суп Парижа: сладкий репчатый лук, медленно карамелизованный 45 минут в сливочном масле до цвета красного дерева, деглазированный белым вином и крепким говяжьим бульоном. Запекается под шапкой из сыра Грюйер.",
    "prepTime": 20,
    "cookTime": 60,
    "difficulty": "Средне",
    "servings": 4,
    "tags": [
      "Блюда",
      "Луковый суп",
      "Франция",
      "Грюйер",
      "Супы"
    ],
    "ingredients": [
      {
        "name": "Лук репчатый желтый сочный",
        "amount": 1000,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 30,
        "category": "Овощи"
      },
      {
        "name": "Масло сливочное 82.5%",
        "amount": 60,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Вино белое сухое (или сухой херес)",
        "amount": 150,
        "unit": "мл",
        "estimatedCostPerKg": 500,
        "category": "Жидкости"
      },
      {
        "name": "Бульон говяжий крепкий наваристый",
        "amount": 1000,
        "unit": "мл",
        "estimatedCostPerKg": 40,
        "category": "Жидкости"
      },
      {
        "name": "Сыр Грюйер или Эмменталь (тертый)",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 1800,
        "category": "Сыры"
      },
      {
        "name": "Багет французский хрустящий",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 100,
        "category": "Хлеб"
      },
      {
        "name": "Мука пшеничная и свежий тимьян",
        "amount": 20,
        "unit": "г",
        "estimatedCostPerKg": 200,
        "category": "Бакалея"
      },
      {
        "name": "Коньяк французский",
        "amount": 30,
        "unit": "мл",
        "estimatedCostPerKg": 1200,
        "category": "Жидкости"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Лук нарежьте тонкими полукольцами вдоль волокон.",
        "timerSeconds": 300,
        "tip": "Нарезка вдоль волокон позволяет луку сохранить структуру и не превратиться в кашу."
      },
      {
        "stepNumber": 2,
        "instruction": "В толстодонной кастрюле растопите сливочное масло, выложите весь лук и томите на тихом огне ровно 45 минут, периодически помешивая со дна, пока лук не уменьшится в объеме вчетверо и не станет цвета молочного шоколада.",
        "timerSeconds": 2700,
        "tip": "Никакой спешки: естественные сахара лука карамелизуются медленно."
      },
      {
        "stepNumber": 3,
        "instruction": "Всыпьте ложку муки, обжарьте 1 минуту, влейте коньяк и белое вино, соскребая со дна все карамельные пригары.",
        "timerSeconds": 180,
        "tip": "Деглазировка собирает концентрированный вкус."
      },
      {
        "stepNumber": 4,
        "instruction": "Влейте горячий говяжий бульон, добавьте веточки тимьяна и варите при тихом кипении 20 минут. Посолите и поперчите.",
        "timerSeconds": 1200,
        "tip": "Бульон приобретет глубокий янтарный оттенок."
      },
      {
        "stepNumber": 5,
        "instruction": "Багет нарежьте ломтиками и подсушите в тостере или духовке до хруста.",
        "timerSeconds": 180,
        "tip": "Сухой хлеб не размокнет мгновенно."
      },
      {
        "stepNumber": 6,
        "instruction": "Разлейте кипящий суп по огнеупорным глиняным горшочкам, сверху положите ломтики багета и щедро засыпьте тертым сыром Грюйер. Запекайте под верхним грилем при 220°C 5 минут до золотистой пузырящейся сырной корочки.",
        "timerSeconds": 300,
        "tip": "Сыр образует тягучую сырную крышку."
      }
    ],
    "chefSecrets": [
      "Медленная 45-минутная карамелизация лука без добавления сахара высвобождает глубокие природные фруктозные сахара, формируя легендарный вкус."
    ],
    "techCard": {
      "dishYield": "4 горшочка по 350 г",
      "kzhbu": {
        "calories": 185,
        "proteins": 8.9,
        "fats": 9.8,
        "carbs": 14.5
      },
      "semiFinishedProducts": [
        "Карамелизованный лук конкассе",
        "Крепкий говяжий бульон"
      ],
      "technologicalProcess": "Глубокая карамелизация дисахаридов лука с деглазировкой вином и гратинированием под саламандрой.",
      "servingTemperature": "85-90°C (в горшочках).",
      "storageConditions": "Суповую базу хранить до 3 суток."
    }
  },
  {
    "id": "dish-risotto-milanese-saffron",
    "title": "Ризотто по-милански (Risotto alla Milanese) с шафраном и костным мозгом",
    "category": "dishes",
    "description": "Жемчужина Ломбардии: круглый крахмалистый рис карнароли, обжаренный с костным мозгом и луком-шалот, сваренный на крепком телячьем бульоне с нитями драгоценного шафрана, взбитый с ледяным сливочным маслом и пармезаном до волны all'onda.",
    "prepTime": 10,
    "cookTime": 20,
    "difficulty": "Средне",
    "servings": 4,
    "tags": [
      "Блюда",
      "Ризотто",
      "Милан",
      "Шафран",
      "Италия"
    ],
    "ingredients": [
      {
        "name": "Рис специальный Карнароли или Виалоне Нано",
        "amount": 320,
        "unit": "г",
        "estimatedCostPerKg": 350,
        "category": "Крупы и мука"
      },
      {
        "name": "Шафран в нитях натуральный (иранский)",
        "amount": 1,
        "unit": "г",
        "estimatedCostPerKg": 8500,
        "category": "Специи"
      },
      {
        "name": "Костный мозг говяжий (или топленое масло)",
        "amount": 40,
        "unit": "г",
        "estimatedCostPerKg": 400,
        "category": "Мясо"
      },
      {
        "name": "Масло сливочное ледяное кубиками",
        "amount": 80,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Сыр Пармиджано Реджано выдержанный (тертый)",
        "amount": 80,
        "unit": "г",
        "estimatedCostPerKg": 1800,
        "category": "Сыры"
      },
      {
        "name": "Вино белое сухое (Пино Гриджо)",
        "amount": 100,
        "unit": "мл",
        "estimatedCostPerKg": 500,
        "category": "Жидкости"
      },
      {
        "name": "Лук шалот мелкорубленый",
        "amount": 40,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 250,
        "category": "Овощи"
      },
      {
        "name": "Бульон телячий или куриный кипящий",
        "amount": 1100,
        "unit": "мл",
        "estimatedCostPerKg": 30,
        "category": "Жидкости"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Нити шафрана залейте половником горячего бульона за 20 минут до варки риса, чтобы высвободить золотистый цвет и аромат.",
        "timerSeconds": 1200,
        "tip": "Настаивание шафрана гарантирует яркий солнечный оттенок."
      },
      {
        "stepNumber": 2,
        "instruction": "В широком сотейнике растопите костный мозг с ложкой масла, пассеруйте шалот до прозрачности (без колера!).",
        "timerSeconds": 180,
        "tip": "Костный мозг — аутентичный секрет миланских тратторий."
      },
      {
        "stepNumber": 3,
        "instruction": "Всыпьте сухой рис Карнароли и прогревайте (тостатура) 2-3 минуты, непрерывно помешивая, пока рисинки не станут прозрачными по краям и горячими на ощупь.",
        "timerSeconds": 180,
        "tip": "Тостатура запечатывает зерно, сохраняя сердцевину аль денте."
      },
      {
        "stepNumber": 4,
        "instruction": "Влейте белое вино, дайте ему полностью испариться за 1 минуту.",
        "timerSeconds": 60,
        "tip": "Вино придает деликатную благородную кислинку."
      },
      {
        "stepNumber": 5,
        "instruction": "По одному половнику подливайте кипящий бульон при непрерывном энергичном помешивании. В середине варки влейте настой шафрана. Варите ровно 16-17 минут до состояния аль денте.",
        "timerSeconds": 1020,
        "tip": "Постоянное трение зерен выбивает поверхностный крахмал в кремовый соус."
      },
      {
        "stepNumber": 6,
        "instruction": "Мантекатура: снимите с огня, дайте постоять 1 минуту, затем энергично взбейте с ледяным маслом и пармезаном, потряхивая сотейник волной (all'onda). Подавайте на плоских тарелках.",
        "timerSeconds": 120,
        "tip": "Ризотто должно медленно растекаться по тарелке при легком постукивании ладонью снизу."
      }
    ],
    "chefSecrets": [
      "Энергичная мантекатура с ледяным сливочным маслом и пармезаном строго вне огня связывает крахмал риса в волну all'onda."
    ],
    "techCard": {
      "dishYield": "4 порции по 220 г",
      "kzhbu": {
        "calories": 235,
        "proteins": 6.8,
        "fats": 11.4,
        "carbs": 26.2
      },
      "semiFinishedProducts": [
        "Шафрановый настой",
        "Кипящий телячий бульон"
      ],
      "technologicalProcess": "Сухая тостатура крахмалистого зерна с фракционной гидратацией и холодной липидной эмульгацией.",
      "servingTemperature": "70°C.",
      "storageConditions": "Употреблять исключительно немедленно, разогреву не подлежит."
    }
  },
  {
    "id": "dish-risotto-porcini-truffle",
    "title": "Ризотто с белыми лесными грибами и трюфельным маслом",
    "category": "dishes",
    "description": "Итальянская лесная поэзия: рис акверелло или карнароли, обжаренный с луком-шалот, томленый с белыми грибами и грибным консоме, взбитый с пармезаном, сливочным маслом и каплями белого трюфеля.",
    "prepTime": 15,
    "cookTime": 20,
    "difficulty": "Средне",
    "servings": 4,
    "tags": [
      "Блюда",
      "Ризотто",
      "Белые грибы",
      "Трюфель",
      "Италия"
    ],
    "ingredients": [
      {
        "name": "Рис итальянский Карнароли",
        "amount": 320,
        "unit": "г",
        "estimatedCostPerKg": 350,
        "category": "Крупы и мука"
      },
      {
        "name": "Белые грибы (свежие или с/м боровики)",
        "amount": 250,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 950,
        "category": "Грибы"
      },
      {
        "name": "Белые грибы сушеные (для экстракта бульона)",
        "amount": 20,
        "unit": "г",
        "estimatedCostPerKg": 2500,
        "category": "Грибы"
      },
      {
        "name": "Масло сливочное ледяное",
        "amount": 70,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Сыр Пармиджано Реджано тертый",
        "amount": 70,
        "unit": "г",
        "estimatedCostPerKg": 1800,
        "category": "Сыры"
      },
      {
        "name": "Масло белого трюфеля высшего качества",
        "amount": 15,
        "unit": "мл",
        "estimatedCostPerKg": 3500,
        "category": "Масла"
      },
      {
        "name": "Вино белое сухое",
        "amount": 80,
        "unit": "мл",
        "estimatedCostPerKg": 500,
        "category": "Жидкости"
      },
      {
        "name": "Лук шалот и свежая петрушка",
        "amount": 40,
        "unit": "г",
        "estimatedCostPerKg": 300,
        "category": "Зелень"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Сухие белые грибы залейте 1 литром кипятка на 20 минут. Полученный настой процедите через марлю и держите слабо кипящим на соседней конфорке.",
        "timerSeconds": 1200,
        "tip": "Грибной настой обеспечит глубочайший аромат леса."
      },
      {
        "stepNumber": 2,
        "instruction": "Свежие белые грибы нарежьте красивыми ломтиками и быстро обжарьте на сковороде на ложке сливочного масла 4 минуты до золотистости.",
        "timerSeconds": 240,
        "tip": "Обжарка раскрывает ореховый вкус боровиков."
      },
      {
        "stepNumber": 3,
        "instruction": "В сотейнике спассеруйте шалот, добавьте сухой рис и прогрейте 2 минуты до прозрачности краев.",
        "timerSeconds": 120,
        "tip": "Тостатура риса."
      },
      {
        "stepNumber": 4,
        "instruction": "Влейте белое вино, выпарите, затем порциями вводите кипящий грибной настой, непрерывно помешивая лопаткой.",
        "timerSeconds": 600,
        "tip": "Крахмал риса образует бархатистый крем."
      },
      {
        "stepNumber": 5,
        "instruction": "За 5 минут до готовности введите обжаренные белые грибы.",
        "timerSeconds": 300,
        "tip": "Грибы отдадут вкус рису."
      },
      {
        "stepNumber": 6,
        "instruction": "Снимите с огня, энергично вмешайте ледяное масло, пармезан, рубленую петрушку и сбрызните ароматным трюфельным маслом.",
        "timerSeconds": 90,
        "tip": "Подавайте сразу на подогретых тарелках."
      }
    ],
    "chefSecrets": [
      "Настой сухих белых грибов, используемый вместо обычного бульона, усиливает природный грибной аромат ризотто в десятки раз."
    ],
    "techCard": {
      "dishYield": "4 порции по 240 г",
      "kzhbu": {
        "calories": 225,
        "proteins": 7.2,
        "fats": 10.8,
        "carbs": 25.1
      },
      "semiFinishedProducts": [
        "Грибной настой из сухих боровиков",
        "Обжаренные белые грибы"
      ],
      "technologicalProcess": "Тостатура риса в грибном консоме с последующей масляно-сырной мантекатурой и трюфельным ароматизированием.",
      "servingTemperature": "70°C.",
      "storageConditions": "Употреблять немедленно."
    }
  },
  {
    "id": "dish-ossobuco-gremolata",
    "title": "Оссобуко по-милански (Ossobuco alla Milanese) с пряной гремолатой",
    "category": "dishes",
    "description": "Ломбардская кулинарная легенда: поперечный спил телячьей голяшки с мозговой косточкой в центре, обжаренный и томленый 2.5 часа в белом вине с овощами и бульоном. Подается с пикантной свежей гремолатой из лимонной цедры, чеснока и петрушки.",
    "prepTime": 25,
    "cookTime": 150,
    "difficulty": "Средне",
    "servings": 4,
    "tags": [
      "Блюда",
      "Оссобуко",
      "Телятина",
      "Милан",
      "Италия"
    ],
    "ingredients": [
      {
        "name": "Голяшка телячья на мозговой кости (толщина 4 см)",
        "amount": 4,
        "unit": "шт",
        "coldWastePercent": 0,
        "estimatedCostPerKg": 850,
        "category": "Мясо"
      },
      {
        "name": "Вино белое сухое (Соаве или Шардоне)",
        "amount": 250,
        "unit": "мл",
        "estimatedCostPerKg": 500,
        "category": "Жидкости"
      },
      {
        "name": "Бульон телячий или мясной крепкий",
        "amount": 500,
        "unit": "мл",
        "estimatedCostPerKg": 30,
        "category": "Жидкости"
      },
      {
        "name": "Морковь, сельдерей черешковый и лук (софритто)",
        "amount": 300,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 50,
        "category": "Овощи"
      },
      {
        "name": "Томаты протертые конкассе",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 160,
        "category": "Овощи"
      },
      {
        "name": "Масло сливочное и оливковое",
        "amount": 50,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Лимон крупный (цедра для гремолаты)",
        "amount": 1,
        "unit": "шт",
        "coldWastePercent": 20,
        "estimatedCostPerKg": 180,
        "category": "Фрукты"
      },
      {
        "name": "Петрушка свежая и чеснок (для гремолаты)",
        "amount": 30,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 350,
        "category": "Зелень"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Стейки голяшки обвяжите по периметру кулинарной нитью, чтобы при тушении мясо не отделилось от кости.",
        "timerSeconds": 180,
        "tip": "Нить сохраняет круглую форму медальона."
      },
      {
        "stepNumber": 2,
        "instruction": "Мясо посолите, слегка обваляйте в муке и обжарьте на смеси сливочного и оливкового масел по 4 минуты с каждой стороны до темно-золотистой корочки. Переложите на тарелку.",
        "timerSeconds": 480,
        "tip": "Корочка запечатывает костный мозг и мясные соки."
      },
      {
        "stepNumber": 3,
        "instruction": "В той же жаровне спассеруйте мелко нарезанные овощи софритто (лук, морковь, сельдерей) 8 минут.",
        "timerSeconds": 480,
        "tip": "Овощи создадут шелковистую основу соуса."
      },
      {
        "stepNumber": 4,
        "instruction": "Влейте белое вино, уварите вдвое, добавьте томаты и горячий бульон.",
        "timerSeconds": 300,
        "tip": "Вино деглазирует сотейник."
      },
      {
        "stepNumber": 5,
        "instruction": "Верните стейки в жаровню, накройте крышкой и томите в духовке при 160°C 2-2.5 часа до состояния, когда мясо тает при прикосновении вилкой.",
        "timerSeconds": 9000,
        "tip": "Коллаген сухожилий превратится в нежнейшее желе."
      },
      {
        "stepNumber": 6,
        "instruction": "Для гремолаты смешайте мелко натертую цедру лимона, измельченный чеснок и рубленую петрушку. Посыпьте горячее оссобуко перед самой подачей.",
        "timerSeconds": 120,
        "tip": "Свежая гремолата прорезает богатую жирность телятины и костного мозга."
      }
    ],
    "chefSecrets": [
      "Свежая цитрусовая гремолата, добавленная в тарелку в секунду подачи, балансирует глубокую насыщенность растушенного костного мозга."
    ],
    "techCard": {
      "dishYield": "4 порции (по 1 стейку с соусом)",
      "kzhbu": {
        "calories": 240,
        "proteins": 22.4,
        "fats": 14.8,
        "carbs": 4.8
      },
      "semiFinishedProducts": [
        "Обвязанные телячьи голяшки",
        "Свежая лимонная гремолата"
      ],
      "technologicalProcess": "Обжарка мяса на кости с последующим 2.5-часовым томлением в духовом шкафу и свежей цитрусовой посыпкой.",
      "servingTemperature": "75-80°C.",
      "storageConditions": "В холодильнике до 72 часов."
    }
  }
,
  {
    "id": "dish-saltimbocca-romana",
    "title": "Сальтимбокка по-римски (Saltimbocca alla Romana) с шалфеем и прошутто",
    "category": "dishes",
    "description": "«Прыжок в рот» по-римски: тончайшие эскалопы из молочной телятины, скрепленные деревянной шпажкой с листиком свежего ароматного шалфея и слайсом пармской ветчины прошутто крудо, обжаренные в сливочном масле и глазированные белым вином.",
    "prepTime": 15,
    "cookTime": 10,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Блюда",
      "Сальтимбокка",
      "Рим",
      "Телятина",
      "Италия"
    ],
    "ingredients": [
      {
        "name": "Эскалопы из телятины тонкие",
        "amount": 500,
        "unit": "г",
        "coldWastePercent": 0,
        "estimatedCostPerKg": 850,
        "category": "Мясо"
      },
      {
        "name": "Ветчина Прошутто ди Парма (тонкие слайсы)",
        "amount": 100,
        "unit": "г",
        "estimatedCostPerKg": 2200,
        "category": "Мясо"
      },
      {
        "name": "Шалфей свежий (крупные листья)",
        "amount": 15,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 800,
        "category": "Зелень"
      },
      {
        "name": "Масло сливочное несоленое",
        "amount": 60,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Вино белое сухое (Фраскати)",
        "amount": 100,
        "unit": "мл",
        "estimatedCostPerKg": 500,
        "category": "Жидкости"
      },
      {
        "name": "Мука пшеничная (для нижней панировки)",
        "amount": 30,
        "unit": "г",
        "estimatedCostPerKg": 50,
        "category": "Крупы и мука"
      },
      {
        "name": "Перец свежемолотый черный",
        "amount": 3,
        "unit": "г",
        "estimatedCostPerKg": 600,
        "category": "Специи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Эскалопы отбейте между слоями пленки до толщины 3-4 мм.",
        "timerSeconds": 180,
        "tip": "Тонкая телятина прожаривается за секунды."
      },
      {
        "stepNumber": 2,
        "instruction": "На каждый ломтик телятины положите лист свежего шалфея и накройте слайсом прошутто. Приколите деревянной зубочисткой крест-накрест.",
        "timerSeconds": 180,
        "tip": "Зубочистка надежно удерживает ветчину."
      },
      {
        "stepNumber": 3,
        "instruction": "Обмакните нижнюю (мясную) сторону телятины в муку, излишки стряхните.",
        "timerSeconds": 60,
        "tip": "Мука со стороны мяса поможет соусу стать густым и глянцевым."
      },
      {
        "stepNumber": 4,
        "instruction": "В сковороде распустите 40 г сливочного масла. Выложите мясо сначала ветчиной вниз на 1 минуту, затем переверните мучной стороной вниз и жарьте еще 2 минуты.",
        "timerSeconds": 180,
        "tip": "Прошутто станет хрустящим."
      },
      {
        "stepNumber": 5,
        "instruction": "Влейте белое вино, дайте вину бурно закипеть и выпариться на 2/3, растопив остаток холодного сливочного масла для образования соуса.",
        "timerSeconds": 120,
        "tip": "Вино деглазирует сковороду в шелковый соус."
      },
      {
        "stepNumber": 6,
        "instruction": "Удалите шпажки, переложите на теплые тарелки и полейте винно-сливочным соусом.",
        "timerSeconds": 60,
        "tip": "Подавайте немедленно."
      }
    ],
    "chefSecrets": [
      "Панировка в муке строго с одной нижней стороны позволяет образовать нежнейший бархатный винный соус без комков."
    ],
    "techCard": {
      "dishYield": "4 порции по 160 г",
      "kzhbu": {
        "calories": 235,
        "proteins": 24.1,
        "fats": 13.8,
        "carbs": 3.2
      },
      "semiFinishedProducts": [
        "Сформированные эскалопы с прошутто и шалфеем"
      ],
      "technologicalProcess": "Скоростная контактная жарка со шпигованием ветчиной и редукцией винного дегласе.",
      "servingTemperature": "75°C.",
      "storageConditions": "Употреблять сразу."
    }
  },
  {
    "id": "dish-lasagna-bolognese-classic",
    "title": "Классическая лазанья Болоньезе с соусом Бешамель и пармезаном",
    "category": "dishes",
    "description": "Культовая многослойная запеканка Эмилии-Романьи: листы тонкой яичной пасты, прослоенные 4-часовым мясным рагу болоньезе с вином, молоком и томатами, бархатистым соусом бешамель с мускатным орехом и сыром Пармиджано Реджано.",
    "prepTime": 40,
    "cookTime": 45,
    "difficulty": "Средне",
    "servings": 6,
    "tags": [
      "Блюда",
      "Лазанья",
      "Болоньезе",
      "Италия",
      "Паста"
    ],
    "ingredients": [
      {
        "name": "Листы пасты для лазаньи яичные",
        "amount": 300,
        "unit": "г",
        "estimatedCostPerKg": 280,
        "category": "Бакалея"
      },
      {
        "name": "Рагу Болоньезе (говядина, панчетта, вино, томаты)",
        "amount": 800,
        "unit": "г",
        "estimatedCostPerKg": 450,
        "category": "Мясо"
      },
      {
        "name": "Молоко цельное (для соуса Бешамель)",
        "amount": 800,
        "unit": "мл",
        "estimatedCostPerKg": 85,
        "category": "Молочные"
      },
      {
        "name": "Масло сливочное 82.5% (для бешамеля)",
        "amount": 70,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Мука пшеничная в/с (для соуса ру)",
        "amount": 70,
        "unit": "г",
        "estimatedCostPerKg": 50,
        "category": "Крупы и мука"
      },
      {
        "name": "Орех мускатный свеженатертый",
        "amount": 3,
        "unit": "г",
        "estimatedCostPerKg": 900,
        "category": "Специи"
      },
      {
        "name": "Сыр Пармиджано Реджано тертый",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 1800,
        "category": "Сыры"
      },
      {
        "name": "Сыр Моцарелла для запекания",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 650,
        "category": "Сыры"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Приготовьте соус Бешамель: растопите сливочное масло, спассеруйте муку 2 минуты до орехового запаха (ру), тонкой струйкой введите теплое молоко, взбивая венчиком до исчезновения комочков. Проварите до загустения, добавьте соль и тертый мускатный орех.",
        "timerSeconds": 480,
        "tip": "Бешамель должен быть гладким как жидкий крем."
      },
      {
        "stepNumber": 2,
        "instruction": "Форму для запекания смажьте маслом и покройте дно тонким слоем соуса бешамель.",
        "timerSeconds": 60,
        "tip": "Нижний слой не даст листам подгореть."
      },
      {
        "stepNumber": 3,
        "instruction": "Выложите пласты лазаньи в один слой. Сверху распределите щедрый слой мясного рагу болоньезе, полейте бешамелем и посыпьте тертым пармезаном.",
        "timerSeconds": 180,
        "tip": "Повторите слои 4-5 раз."
      },
      {
        "stepNumber": 4,
        "instruction": "Верхний слой закройте листами пасты, обильно залейте остатками бешамеля и засыпьте смесью пармезана и моцареллы.",
        "timerSeconds": 120,
        "tip": "Сырная шапка запечатает влагу внутри."
      },
      {
        "stepNumber": 5,
        "instruction": "Запекайте в разогретой духовке при 180°C в течение 35-40 минут до глубокой золотисто-коричневой хрустящей сырной корочки.",
        "timerSeconds": 2400,
        "tip": "Сыр должен аппетитно пузыриться."
      },
      {
        "stepNumber": 6,
        "instruction": "КРИТИЧЕСКИ ВАЖНО: Дайте лазанье постоять при комнатной температуре 15-20 минут перед нарезкой на порции.",
        "timerSeconds": 900,
        "tip": "Горячая лазанья развалится; постояв 15 минут, она стабилизируется в идеальные слоеные кубики."
      }
    ],
    "chefSecrets": [
      "20 минут отдыха после духовки позволяют крахмалу пасты и белкам бешамеля застыть в безупречные ровные слои."
    ],
    "techCard": {
      "dishYield": "Форма 20х30 см (6 порций по 380 г)",
      "kzhbu": {
        "calories": 245,
        "proteins": 14.8,
        "fats": 12.4,
        "carbs": 18.2
      },
      "semiFinishedProducts": [
        "Рагу болоньезе долгого томления",
        "Соус Бешамель"
      ],
      "technologicalProcess": "Послойная сборка пасты и соусов с гратинированием при 180°C и изотермической выдержкой.",
      "servingTemperature": "65-70°C.",
      "storageConditions": "В холодильнике до 4 суток."
    }
  },
  {
    "id": "dish-pad-thai-shrimp",
    "title": "Тайский Пад Тай (Pad Thai) с тигровыми креветками и соусом тамаринд",
    "category": "dishes",
    "description": "Главная уличная еда Бангкока: рисовая лапша, обжаренная в раскаленном воке с крупными тигровыми креветками, яйцом, хрустящим тофу, ростками сои, зеленым луком, дробленым арахисом, перцем чили и кисло-сладким соусом из натурального тамаринда.",
    "prepTime": 20,
    "cookTime": 10,
    "difficulty": "Средне",
    "servings": 2,
    "tags": [
      "Блюда",
      "Пад Тай",
      "Таиланд",
      "Креветки",
      "Вок"
    ],
    "ingredients": [
      {
        "name": "Лапша рисовая плотная (ширина 5 мм)",
        "amount": 200,
        "unit": "г",
        "estimatedCostPerKg": 250,
        "category": "Крупы и мука"
      },
      {
        "name": "Креветки тигровые очищенные сырые",
        "amount": 200,
        "unit": "г",
        "estimatedCostPerKg": 1100,
        "category": "Морепродукты"
      },
      {
        "name": "Тофу твердый соевый (кубиками)",
        "amount": 80,
        "unit": "г",
        "estimatedCostPerKg": 350,
        "category": "Бакалея"
      },
      {
        "name": "Яйца куриные отборные",
        "amount": 2,
        "unit": "шт",
        "estimatedCostPerKg": 140,
        "category": "Яйца"
      },
      {
        "name": "Паста тамаринда натуральная кислая",
        "amount": 40,
        "unit": "г",
        "estimatedCostPerKg": 450,
        "category": "Бакалея"
      },
      {
        "name": "Сахар пальмовый или тростниковый",
        "amount": 35,
        "unit": "г",
        "estimatedCostPerKg": 350,
        "category": "Бакалея"
      },
      {
        "name": "Соус рыбный тайский (Нам Пла)",
        "amount": 35,
        "unit": "мл",
        "estimatedCostPerKg": 280,
        "category": "Соусы"
      },
      {
        "name": "Ростки фасоли мунг (маш) свежие",
        "amount": 100,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 200,
        "category": "Овощи"
      },
      {
        "name": "Арахис жареный дробленый и лайм",
        "amount": 40,
        "unit": "г",
        "estimatedCostPerKg": 250,
        "category": "Орехи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Рисовую лапшу замочите в теплой (не кипящей!) воде на 30-40 минут до гибкости, но с твердой сердцевиной.",
        "timerSeconds": 2100,
        "tip": "Замоченная, а не вареная лапша не разварится в воке и впитает соус."
      },
      {
        "stepNumber": 2,
        "instruction": "Для соуса пад тай смешайте в мисочке пасту тамаринда, пальмовый сахар и рыбный соус до растворения сахара.",
        "timerSeconds": 120,
        "tip": "Баланс вкусов: кисло-сладко-соленый."
      },
      {
        "stepNumber": 3,
        "instruction": "Раскалите вок с растительным маслом до легкого дымка. Обжарьте тигровые креветки и кубики тофу 90 секунд, сдвиньте на край вока.",
        "timerSeconds": 90,
        "tip": "Высочайший жар — ключ к тайскому вок-хей."
      },
      {
        "stepNumber": 4,
        "instruction": "В свободное место вока разбейте яйца и быстро взбейте лопаткой в скрэмбл.",
        "timerSeconds": 45,
        "tip": "Яйцо обволакивает лапшу."
      },
      {
        "stepNumber": 5,
        "instruction": "Добавьте замоченную лапшу и вылейте соус пад тай. Энергично перемешивайте на бешеном огне 2 минуты, пока лапша не впитает весь соус.",
        "timerSeconds": 120,
        "tip": "Лапша становится янтарной и упругой."
      },
      {
        "stepNumber": 6,
        "instruction": "Всыпьте свежие ростки сои и зеленый лук, перемешайте 20 секунд и снимите с огня. Подавайте с горкой дробленого арахиса, долькой лайма и хлопьями чили.",
        "timerSeconds": 60,
        "tip": "Выжмите сок лайма перед первым укусом."
      }
    ],
    "chefSecrets": [
      "Никогда не варите рисовую лапшу для пад тая в кипятке — только замачивание в теплой воде дает аутентичную пружинящую текстуру аль денте."
    ],
    "techCard": {
      "dishYield": "2 порции по 320 г",
      "kzhbu": {
        "calories": 185,
        "proteins": 11.8,
        "fats": 6.2,
        "carbs": 21.4
      },
      "semiFinishedProducts": [
        "Замоченная рисовая лапша",
        "Тамариндовый соус Пад Тай"
      ],
      "technologicalProcess": "Сверхбыстрая стир-фрай термообработка в чугунном воке при 220°C.",
      "servingTemperature": "80°C.",
      "storageConditions": "Употреблять сразу."
    }
  },
  {
    "id": "dish-tom-kha-gai-chicken",
    "title": "Тайский суп Том Кха Гай (Tom Kha Gai) с курицей на кокосовом молоке",
    "category": "dishes",
    "description": "Шелковистая бархатная классика Таиланда: густое кокосовое молоко, сваренное с ломтиками куриного филе, грибами вешенками, свежим галангалом, лемонграссом, листьями кафрского лайма, чили и кинзой.",
    "prepTime": 15,
    "cookTime": 15,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Блюда",
      "Том Кха",
      "Таиланд",
      "Кокос",
      "Супы"
    ],
    "ingredients": [
      {
        "name": "Молоко кокосовое густое премиум (Aroy-D)",
        "amount": 600,
        "unit": "мл",
        "estimatedCostPerKg": 320,
        "category": "Жидкости"
      },
      {
        "name": "Бульон куриный прозрачный",
        "amount": 400,
        "unit": "мл",
        "estimatedCostPerKg": 30,
        "category": "Жидкости"
      },
      {
        "name": "Филе куриного бедра или грудки",
        "amount": 350,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 340,
        "category": "Птица"
      },
      {
        "name": "Грибы вешенки или цаогу (соломенные)",
        "amount": 150,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 180,
        "category": "Грибы"
      },
      {
        "name": "Корень галангала свежий (слайсы)",
        "amount": 30,
        "unit": "г",
        "estimatedCostPerKg": 850,
        "category": "Овощи"
      },
      {
        "name": "Стебли лемонграсса (раздавленные)",
        "amount": 3,
        "unit": "шт",
        "estimatedCostPerKg": 650,
        "category": "Овощи"
      },
      {
        "name": "Листья кафрского лайма свежие",
        "amount": 6,
        "unit": "шт",
        "estimatedCostPerKg": 950,
        "category": "Зелень"
      },
      {
        "name": "Соус рыбный тайский (Нам Пла)",
        "amount": 40,
        "unit": "мл",
        "estimatedCostPerKg": 280,
        "category": "Соусы"
      },
      {
        "name": "Сок лайма свежевыжатый",
        "amount": 40,
        "unit": "мл",
        "coldWastePercent": 20,
        "estimatedCostPerKg": 350,
        "category": "Фрукты"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Стебли лемонграсса отбейте тупой стороной ножа и нарежьте брусками по 5 см. Галангал нарежьте тонкими кружками. Листья кафра порвите руками.",
        "timerSeconds": 120,
        "tip": "Отбивание высвобождает цитрусовые эфирные масла."
      },
      {
        "stepNumber": 2,
        "instruction": "В кастрюле соедините куриный бульон и половину кокосового молока, доведите до тихого кипения.",
        "timerSeconds": 180,
        "tip": "Бульон балансирует жирность кокоса."
      },
      {
        "stepNumber": 3,
        "instruction": "Добавьте лемонграсс, галангал, чили и листья лайма. Варите на медленном огне 5 минут, чтобы суп наполнился ароматами.",
        "timerSeconds": 300,
        "tip": "Ароматная база готова."
      },
      {
        "stepNumber": 4,
        "instruction": "Добавьте ломтики курицы и грибы вешенки. Варите 5-6 минут до готовности мяса.",
        "timerSeconds": 360,
        "tip": "Курица остается сочной."
      },
      {
        "stepNumber": 5,
        "instruction": "Влейте оставшееся кокосовое молоко, рыбный соус и пальмовый сахар, прогрейте 1 минуту (не кипятить бурно!).",
        "timerSeconds": 60,
        "tip": "Вторая порция молока дает свежую бархатную белизну."
      },
      {
        "stepNumber": 6,
        "instruction": "Снимите с огня, влейте свежий сок лайма, посыпьте кинзой и подавайте с чашей риса жасмин.",
        "timerSeconds": 60,
        "tip": "Сок лайма вливается строго вне огня, чтобы кокосовое молоко не свернулось."
      }
    ],
    "chefSecrets": [
      "Сок лайма добавляется строго после выключения огня — высокая температура приводит к створаживанию кокосового молока."
    ],
    "techCard": {
      "dishYield": "4 порции по 320 г",
      "kzhbu": {
        "calories": 145,
        "proteins": 9.8,
        "fats": 9.4,
        "carbs": 5.1
      },
      "semiFinishedProducts": [
        "Ароматический инфуз галангала и лемонграсса"
      ],
      "technologicalProcess": "Тихая экстракция ароматических кореньев в кокосово-бульонной эмульсии с деликатным томлением птицы.",
      "servingTemperature": "75°C.",
      "storageConditions": "В холодильнике до 48 часов."
    }
  },
  {
    "id": "dish-ramen-tonkotsu-pork",
    "title": "Японский рамен Тонкоцу (Tonkotsu Ramen) с 12-часовым бульоном и свининой Тясю",
    "category": "dishes",
    "description": "Кулинарный шедевр Кюсю: насыщенный молочно-белый бульон тонкоцу из свиных костей и копытцев, упругая щелочная лапша, тающий рулет свинины тясю, маринованное яйцо адитама с жидким желтком, нори, древесные грибы и кунжутное масло майю.",
    "prepTime": 30,
    "cookTime": 720,
    "difficulty": "Профи",
    "servings": 4,
    "tags": [
      "Блюда",
      "Рамен",
      "Тонкоцу",
      "Япония",
      "Тясю"
    ],
    "ingredients": [
      {
        "name": "Кости трубчатые и копытца свиные",
        "amount": 2000,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 150,
        "category": "Мясо"
      },
      {
        "name": "Грудинка свиная в рулете (Тясю)",
        "amount": 600,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 420,
        "category": "Мясо"
      },
      {
        "name": "Лапша пшеничная для рамена (со щелочью кансуй)",
        "amount": 400,
        "unit": "г",
        "estimatedCostPerKg": 250,
        "category": "Крупы и мука"
      },
      {
        "name": "Яйца маринованные Адитама (с жидким желтком)",
        "amount": 4,
        "unit": "шт",
        "estimatedCostPerKg": 140,
        "category": "Яйца"
      },
      {
        "name": "Соус-концентрат Таре (соевый соус, мирин, комбу, бонито)",
        "amount": 120,
        "unit": "мл",
        "estimatedCostPerKg": 500,
        "category": "Соусы"
      },
      {
        "name": "Водоросли Нори и зеленый лук",
        "amount": 30,
        "unit": "г",
        "estimatedCostPerKg": 800,
        "category": "Бакалея"
      },
      {
        "name": "Грибы древесные черные муэр",
        "amount": 40,
        "unit": "г",
        "estimatedCostPerKg": 650,
        "category": "Грибы"
      },
      {
        "name": "Масло чесночное жженое (Майю)",
        "amount": 20,
        "unit": "мл",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Свиные кости вымочите в холодной воде 6 часов, опустите в кипяток на 10 минут, слейте черную воду и промойте кости щеткой.",
        "timerSeconds": 600,
        "tip": "Бланширование удаляет примеси крови, обеспечивая белоснежный бульон."
      },
      {
        "stepNumber": 2,
        "instruction": "Залейте чистые кости свежей водой и варите при БУРНОМ кипении под закрытой крышкой ровно 10-12 часов, доливая воду.",
        "timerSeconds": 43200,
        "tip": "Именно бурное кипение разбивает вытопленный свиной жир и костный коллаген в белоснежную плотную эмульсию."
      },
      {
        "stepNumber": 3,
        "instruction": "Свиную грудинку сверните в рулет, обвяжите шпагатом и томите 2 часа в соусе из сои, саке, мирина и сахара. Остудите и нарежьте тонкими шайбами.",
        "timerSeconds": 7200,
        "tip": "Свинина тясю тает на языке."
      },
      {
        "stepNumber": 4,
        "instruction": "Сварите упругую лапшу в кипящей воде ровно 75 секунд, энергично стряхните воду в дуршлаге.",
        "timerSeconds": 75,
        "tip": "Стряхивание воды не дает бульону разбавиться."
      },
      {
        "stepNumber": 5,
        "instruction": "На дно глубокой подогретой чаши (донбури) налейте 30 мл концентрированного соуса таре, залейте 350 мл кипящего молочного бульона тонкоцу.",
        "timerSeconds": 30,
        "tip": "Бульон с таре образует законченный вкус."
      },
      {
        "stepNumber": 6,
        "instruction": "Выложите лапшу, сверху поместите слайсы тясю, половинку яйца адитама, соломку грибов муэр, лист нори, зеленый лук и ложку жженого масла майю.",
        "timerSeconds": 60,
        "tip": "Съешьте рамен за первые 5 минут, пока лапша не размякла."
      }
    ],
    "chefSecrets": [
      "Бурное кипение в течение 12 часов создает совершенную микроэмульсию костного коллагена и жира, делая бульон тонкоцу похожим на сливки."
    ],
    "techCard": {
      "dishYield": "4 огромные чаши по 550 г",
      "kzhbu": {
        "calories": 195,
        "proteins": 12.8,
        "fats": 11.5,
        "carbs": 14.8
      },
      "semiFinishedProducts": [
        "12-часовой бульон Тонкоцу",
        "Свинина тясю су-вид",
        "Яйца Адитама"
      ],
      "technologicalProcess": "Глубокая гидротермальная экстракция костного коллагена с ультраэмульгацией при 100°C.",
      "servingTemperature": "85-90°C.",
      "storageConditions": "Бульон замораживается порционно до 3 месяцев."
    }
  },
  {
    "id": "dish-peking-duck-pancakes",
    "title": "Утка по-пекински с тонкими блинчиками и сладким бобовым соусом",
    "category": "dishes",
    "description": "Императорский шедевр Китая: утка, надутая воздухом для отделения кожицы, ошпаренная мальтозным сиропом и сушеная 24 часа, запеченная до стеклянного хруста лакированной кожицы. Подается с мандаринскими блинчиками, соломкой огурца и лука порея.",
    "prepTime": 60,
    "cookTime": 70,
    "difficulty": "Профи",
    "servings": 4,
    "tags": [
      "Блюда",
      "Утка по-пекински",
      "Китай",
      "Императорская кухня",
      "Хрустящая кожа"
    ],
    "ingredients": [
      {
        "name": "Утка целая потрошеная (жирная)",
        "amount": 2200,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 450,
        "category": "Птица"
      },
      {
        "name": "Сироп мальтозный (или светлая патока/мед)",
        "amount": 80,
        "unit": "г",
        "estimatedCostPerKg": 350,
        "category": "Бакалея"
      },
      {
        "name": "Уксус рисовый белый натуральный",
        "amount": 50,
        "unit": "мл",
        "estimatedCostPerKg": 180,
        "category": "Соусы"
      },
      {
        "name": "Приправа «Пять специй» (Усянмянь)",
        "amount": 10,
        "unit": "г",
        "estimatedCostPerKg": 650,
        "category": "Специи"
      },
      {
        "name": "Блинчики тонкие мандаринские (на пару)",
        "amount": 16,
        "unit": "шт",
        "estimatedCostPerKg": 350,
        "category": "Хлеб"
      },
      {
        "name": "Соус сладкий бобовый Тяньмяньцзян или Хойсин",
        "amount": 120,
        "unit": "г",
        "estimatedCostPerKg": 420,
        "category": "Соусы"
      },
      {
        "name": "Огурец свежий грунтовой (тонкая соломка)",
        "amount": 150,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 140,
        "category": "Овощи"
      },
      {
        "name": "Лук порей (белая часть соломкой)",
        "amount": 100,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 280,
        "category": "Овощи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "С помощью насоса надуйте утку воздухом через горловину, отделив кожу от мышечного мяса по всей площади тушки.",
        "timerSeconds": 300,
        "tip": "Воздушная прослойка не позволяет мясному соку размочить кожу при запекании."
      },
      {
        "stepNumber": 2,
        "instruction": "Ошпарьте утку кипящей водой трижды, чтобы кожа натянулась как барабан.",
        "timerSeconds": 180,
        "tip": "Ошпаривание раскрывает поры."
      },
      {
        "stepNumber": 3,
        "instruction": "Обмажьте горячую утку смесью мальтозного сиропа, уксуса и воды. Подвесьте в холодном проветриваемом месте на 24 часа для высыхания до состояния пергамента.",
        "timerSeconds": 86400,
        "tip": "Абсолютно сухая кожа — единственный секрет стеклянного хруста."
      },
      {
        "stepNumber": 4,
        "instruction": "Запекайте подвешенную в печи утку при 180°C 70 минут, пока кожа не станет цвета полированного темного янтаря.",
        "timerSeconds": 4200,
        "tip": "Жир полностью вытапливается."
      },
      {
        "stepNumber": 5,
        "instruction": "При подаче шеф срезает тончайшие лепестки кожи и нежного мяса (традиционно ровно 108 ломтиков).",
        "timerSeconds": 300,
        "tip": "Хрустящую кожу едят первой, обмакивая в сахар."
      },
      {
        "stepNumber": 6,
        "instruction": "Сверните блинчик: смажьте соусом хойсин, положите соломку огурца, лука-порея и хрустящую утиную грудку.",
        "timerSeconds": 120,
        "tip": "Идеальный баланс хруста, свежести и сладковатого умами."
      }
    ],
    "chefSecrets": [
      "24-часовая сушка надутой кожи с мальтозной глазурью превращает эпидермис птицы в ультрахрустящую карамельную карамель."
    ],
    "techCard": {
      "dishYield": "4 порции (целая утка с 16 блинчиками)",
      "kzhbu": {
        "calories": 310,
        "proteins": 16.5,
        "fats": 22.8,
        "carbs": 12.1
      },
      "semiFinishedProducts": [
        "Высушенная лакированная утка",
        "Паровые мандаринские блинчики"
      ],
      "technologicalProcess": "Пневмосепарация подкожной клетчатки с мальтозной лакировкой, дегидратацией и конвективным вытапливанием.",
      "servingTemperature": "80°C.",
      "storageConditions": "Употреблять сразу."
    }
  },
  {
    "id": "dish-butter-chicken-murgh",
    "title": "Индийский Баттер Чикен (Мург Махани) в бархатном томатно-сливочном соусе",
    "category": "dishes",
    "description": "Всемирный фаворит индийской кухни: кусочки куриного филе, маринованные в пряном йогурте и запеченные на огне, утопающие в шелковистом соусе из спелых помидоров, сливочного масла, кешью, сливок, меда и листьев пажитника касури мети.",
    "prepTime": 20,
    "cookTime": 30,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Блюда",
      "Баттер Чикен",
      "Индия",
      "Курица",
      "Карри"
    ],
    "ingredients": [
      {
        "name": "Филе бедра куриного сочное",
        "amount": 600,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 340,
        "category": "Птица"
      },
      {
        "name": "Йогурт натуральный и специи тандури (маринад)",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 200,
        "category": "Молочные"
      },
      {
        "name": "Томаты протертые спелые (пассата)",
        "amount": 400,
        "unit": "г",
        "estimatedCostPerKg": 160,
        "category": "Овощи"
      },
      {
        "name": "Масло сливочное 82.5% несоленое",
        "amount": 100,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Сливки 33% жирности",
        "amount": 120,
        "unit": "мл",
        "estimatedCostPerKg": 350,
        "category": "Молочные"
      },
      {
        "name": "Орехи кешью сырые (для бархатной текстуры)",
        "amount": 40,
        "unit": "г",
        "estimatedCostPerKg": 900,
        "category": "Орехи"
      },
      {
        "name": "Паста имбирно-чесночная свежая",
        "amount": 30,
        "unit": "г",
        "estimatedCostPerKg": 300,
        "category": "Овощи"
      },
      {
        "name": "Листья пажитника сушеные (Касури Мети)",
        "amount": 5,
        "unit": "г",
        "estimatedCostPerKg": 900,
        "category": "Специи"
      },
      {
        "name": "Гарам масала и кашмирский чили",
        "amount": 12,
        "unit": "г",
        "estimatedCostPerKg": 750,
        "category": "Специи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Куриные бедра замаринуйте в йогурте с паприкой, гарам масалой и чесночно-имбирной пастой на 1 час.",
        "timerSeconds": 3600,
        "tip": "Курица станет нежной."
      },
      {
        "stepNumber": 2,
        "instruction": "Запеките курицу в духовке при 220°C (или на сковороде-гриль) 12-15 минут до легких обугленных подпалин.",
        "timerSeconds": 900,
        "tip": "Подпалины дают тот самый аромат индийской печи тандури."
      },
      {
        "stepNumber": 3,
        "instruction": "Кешью отварите 10 минут в 100 мл воды и пробейте блендером в абсолютно шелковое ореховое молоко.",
        "timerSeconds": 600,
        "tip": "Кешью дает непревзойденную кремовость без крахмала."
      },
      {
        "stepNumber": 4,
        "instruction": "В сотейнике на ложке масла спассеруйте имбирно-чесночную пасту, добавьте томатное пюре, кашмирский чили и варите 10 минут. Затем вмешайте пасту из кешью.",
        "timerSeconds": 600,
        "tip": "Цвет соуса станет мягким коралловым."
      },
      {
        "stepNumber": 5,
        "instruction": "Протрите соус через частое сито, верните на тихий огонь, добавьте холодное сливочное масло кусочками, сливки и запеченные кусочки курицы.",
        "timerSeconds": 300,
        "tip": "Протирание через сито гарантирует зеркальный ресторанный глянец соуса махани."
      },
      {
        "stepNumber": 6,
        "instruction": "Всыпьте растертые в ладонях листья касури мети и щепотку сахара. Томите 5 минут и подавайте с горячими чесночными лепешками наан.",
        "timerSeconds": 300,
        "tip": "Касури мети — секрет аутентичного аромата баттер чикен."
      }
    ],
    "chefSecrets": [
      "Паста из замоченных орехов кешью и протирание томатной основы через сито создают легендарную текстуру «шелкового бархата»."
    ],
    "techCard": {
      "dishYield": "4 порции по 320 г",
      "kzhbu": {
        "calories": 235,
        "proteins": 15.2,
        "fats": 16.8,
        "carbs": 6.8
      },
      "semiFinishedProducts": [
        "Запеченная курица тикка",
        "Шелковый соус Махани"
      ],
      "technologicalProcess": "Высокотемпературное колерование птицы с последующим тушением в фильтрованной орехово-томатной эмульсии.",
      "servingTemperature": "75°C.",
      "storageConditions": "В холодильнике до 48 часов."
    }
  },
  {
    "id": "dish-paella-valenciana-seafood",
    "title": "Валенсийская паэлья с морепродуктами и шафраном (Paella de Marisco)",
    "category": "dishes",
    "description": "Символ Средиземноморской Испании: круглый рис Бомба, приготовленный в широкой тонкостенной сковороде паэльере на крепком рыбном бульоне с шафраном, тигровыми креветками, мидиями, кальмарами и хрустящей нижней карамельной корочкой сокаррат.",
    "prepTime": 25,
    "cookTime": 30,
    "difficulty": "Средне",
    "servings": 4,
    "tags": [
      "Блюда",
      "Паэлья",
      "Испания",
      "Морепродукты",
      "Шафран"
    ],
    "ingredients": [
      {
        "name": "Рис испанский Bomba или Calasparra",
        "amount": 320,
        "unit": "г",
        "estimatedCostPerKg": 380,
        "category": "Крупы и мука"
      },
      {
        "name": "Креветки тигровые и лангустины",
        "amount": 300,
        "unit": "г",
        "estimatedCostPerKg": 1100,
        "category": "Морепродукты"
      },
      {
        "name": "Мидии свежие в раковинах",
        "amount": 300,
        "unit": "г",
        "coldWastePercent": 40,
        "estimatedCostPerKg": 350,
        "category": "Морепродукты"
      },
      {
        "name": "Кальмары очищенные (кольца)",
        "amount": 200,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 450,
        "category": "Морепродукты"
      },
      {
        "name": "Бульон из голов креветок и рыбы наваристый",
        "amount": 900,
        "unit": "мл",
        "estimatedCostPerKg": 50,
        "category": "Жидкости"
      },
      {
        "name": "Шафран испанский и сладкая паприка",
        "amount": 6,
        "unit": "г",
        "estimatedCostPerKg": 1500,
        "category": "Специи"
      },
      {
        "name": "Помидоры спелые тертые (софрито)",
        "amount": 150,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 180,
        "category": "Овощи"
      },
      {
        "name": "Масло оливковое Extra Virgin и чеснок",
        "amount": 60,
        "unit": "мл",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "В широкой паэльере на оливковом масле быстро обжарьте креветки и кальмары по 1 минуте с каждой стороны, переложите на тарелку.",
        "timerSeconds": 120,
        "tip": "Морепродукты отдадут маслу креветочный аромат."
      },
      {
        "stepNumber": 2,
        "instruction": "В это же масло выложите тертые томаты софрито, чеснок и сладкую паприку. Пассеруйте 5 минут до темно-красного цвета пасты.",
        "timerSeconds": 300,
        "tip": "Софрито — душа испанской паэльи."
      },
      {
        "stepNumber": 3,
        "instruction": "Всыпьте сухой рис Бомба крестом по диаметру сковороды, перемешайте 1 минуту, чтобы каждая рисинка покрылась маслом.",
        "timerSeconds": 60,
        "tip": "Рис впитает вкус софрито."
      },
      {
        "stepNumber": 4,
        "instruction": "Залейте кипящим рыбным бульоном с шафраном. ПОСЛЕ ЭТОГО МОМЕНТА РИС СТРОГО ЗАПРЕЩЕНО МЕШАТЬ ЛОПАТКОЙ!",
        "timerSeconds": 60,
        "tip": "Перемешивание выбьет крахмал и превратит паэлью в кашу."
      },
      {
        "stepNumber": 5,
        "instruction": "Варите 10 минут на сильном огне, затем 8 минут на медленном. Сверху красиво разложите креветки, кольца кальмара и створки мидий.",
        "timerSeconds": 1080,
        "tip": "Мидии раскроются от горячего пара."
      },
      {
        "stepNumber": 6,
        "instruction": "Финал Сокаррат: в последние 2 минуты включите максимальный огонь. Когда услышите характерное потрескивание и почувствуете аромат поджаренного риса, снимите сковороду и накройте полотенцем на 5 минут.",
        "timerSeconds": 300,
        "tip": "Сокаррат — хрустящий золотистый рисовый слой на дне паэльеры."
      }
    ],
    "chefSecrets": [
      "Категорический запрет на перемешивание риса после заливки бульона и финальные 2 минуты сильного огня создают культовую хрустящую корочку socarrat."
    ],
    "techCard": {
      "dishYield": "Паэльера 34 см (4 порции по 320 г)",
      "kzhbu": {
        "calories": 195,
        "proteins": 12.8,
        "fats": 6.8,
        "carbs": 21.5
      },
      "semiFinishedProducts": [
        "Концентрированный креветочный бульон с шафраном",
        "Томатное софрито"
      ],
      "technologicalProcess": "Статическая диффузия бульона в неподвижный слой риса с финальной дегидратационной карамелизацией (socarrat).",
      "servingTemperature": "70-75°C.",
      "storageConditions": "Употреблять сразу."
    }
  },
  {
    "id": "dish-moussaka-greek-eggplant",
    "title": "Греческая мусака с баклажанами, сочным фаршем и нежным бешамелем",
    "category": "dishes",
    "description": "Гордость Эллады: слоеная запеканка из обжаренных слайсов баклажанов и картофеля, томленого бараньего фарша с корицей, орегано и томатами, укрытая толстым слоем воздушного сливочного крема бешамель с мускатным орехом и сыром кефалотири.",
    "prepTime": 40,
    "cookTime": 50,
    "difficulty": "Средне",
    "servings": 6,
    "tags": [
      "Блюда",
      "Мусака",
      "Греция",
      "Баклажаны",
      "Запеканка"
    ],
    "ingredients": [
      {
        "name": "Баклажаны крупные спелые",
        "amount": 700,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 160,
        "category": "Овощи"
      },
      {
        "name": "Картофель крупный (для нижнего слоя)",
        "amount": 400,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 40,
        "category": "Овощи"
      },
      {
        "name": "Фарш из баранины или говядины",
        "amount": 600,
        "unit": "г",
        "estimatedCostPerKg": 650,
        "category": "Мясо"
      },
      {
        "name": "Помидоры протертые и паста томатная",
        "amount": 350,
        "unit": "г",
        "estimatedCostPerKg": 160,
        "category": "Овощи"
      },
      {
        "name": "Вино сухое белое или красное",
        "amount": 100,
        "unit": "мл",
        "estimatedCostPerKg": 500,
        "category": "Жидкости"
      },
      {
        "name": "Корица молотая и орегано дикий",
        "amount": 6,
        "unit": "г",
        "estimatedCostPerKg": 700,
        "category": "Специи"
      },
      {
        "name": "Молоко и сливочное масло (для крема бешамель)",
        "amount": 600,
        "unit": "мл",
        "estimatedCostPerKg": 90,
        "category": "Молочные"
      },
      {
        "name": "Яичные желтки (для воздушного бешамеля)",
        "amount": 2,
        "unit": "шт",
        "estimatedCostPerKg": 140,
        "category": "Яйца"
      },
      {
        "name": "Сыр твердый соленый (Кефалотири или Пекорино)",
        "amount": 100,
        "unit": "г",
        "estimatedCostPerKg": 1500,
        "category": "Сыры"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Баклажаны и картофель нарежьте продольными слайсами толщиной 7 мм. Смажьте оливковым маслом и запеките на противне при 200°C 15 минут до мягкости.",
        "timerSeconds": 900,
        "tip": "Запекание вместо жарки избавляет блюдо от лишней жирности."
      },
      {
        "stepNumber": 2,
        "instruction": "Фарш обжарьте с луком, чесноком, добавьте вино, томаты, орегано и корицу. Тушите 25 минут до полного выпаривания лишней жидкости.",
        "timerSeconds": 1500,
        "tip": "Корица — визитная карточка аутентичной греческой мусаки."
      },
      {
        "stepNumber": 3,
        "instruction": "Сварите густой соус бешамель, снимите с огня и быстро вмешайте яичные желтки и половину тертого сыра.",
        "timerSeconds": 240,
        "tip": "Желтки сделают бешамель пышным как суфле."
      },
      {
        "stepNumber": 4,
        "instruction": "В глубокую форму выложите слоями: печеный картофель, слой баклажанов, весь мясной соус, снова слой баклажанов.",
        "timerSeconds": 300,
        "tip": "Картофель на дне впитывает соки."
      },
      {
        "stepNumber": 5,
        "instruction": "Сверху залейте щедрым слоем бешамеля (толщиной 2 см!) и посыпьте сыром кефалотири.",
        "timerSeconds": 120,
        "tip": "Бешамель образует золотую суфлеобразную корочку."
      },
      {
        "stepNumber": 6,
        "instruction": "Запекайте при 180°C 45 минут. Перед подачей дайте отдохнуть 20 минут.",
        "timerSeconds": 2700,
        "tip": "Остывшая за 20 минут мусака нарезается на идеальные плотные куски."
      }
    ],
    "chefSecrets": [
      "Добавление яичных желтков в бешамель превращает верхний слой мусаки в нежнейшее запеченное суфле с румяной корочкой."
    ],
    "techCard": {
      "dishYield": "Форма 25х35 см (6 порций по 420 г)",
      "kzhbu": {
        "calories": 215,
        "proteins": 12.8,
        "fats": 13.5,
        "carbs": 11.2
      },
      "semiFinishedProducts": [
        "Запеченные баклажаны",
        "Пряный мясной соус с корицей",
        "Обогащенный желтками Бешамель"
      ],
      "technologicalProcess": "Послойная композиция печеных овощей и мясного соуса с суфлеобразным гратинированием.",
      "servingTemperature": "65-70°C.",
      "storageConditions": "В холодильнике до 72 часов."
    }
  },
  {
    "id": "dish-goulash-hungarian-kettle",
    "title": "Венгерский гуляш в котелке (Бограчгуйяш) с копченостями и чипетками",
    "category": "dishes",
    "description": "Аутентичный суп-гуляш венгерских пастухов: говядина и копченая грудинка, обжаренные на свином смальце с горой лука, тремя видами сладкой паприки из Сегеда, тмином, картофелем и домашними рваными клецками чипетками.",
    "prepTime": 25,
    "cookTime": 90,
    "difficulty": "Средне",
    "servings": 6,
    "tags": [
      "Блюда",
      "Гуляш",
      "Бограч",
      "Венгрия",
      "Паприка"
    ],
    "ingredients": [
      {
        "name": "Говяжья голяшка или лопатка сочная",
        "amount": 800,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 750,
        "category": "Мясо"
      },
      {
        "name": "Смалец свиной топленый (или бекон)",
        "amount": 60,
        "unit": "г",
        "estimatedCostPerKg": 200,
        "category": "Масла"
      },
      {
        "name": "Лук репчатый (обильное количество)",
        "amount": 500,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 30,
        "category": "Овощи"
      },
      {
        "name": "Паприка венгерская сладкая высшего сорта (Сегед)",
        "amount": 40,
        "unit": "г",
        "estimatedCostPerKg": 650,
        "category": "Специи"
      },
      {
        "name": "Тмин цельный семена",
        "amount": 8,
        "unit": "г",
        "estimatedCostPerKg": 600,
        "category": "Специи"
      },
      {
        "name": "Картофель отборный",
        "amount": 500,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 40,
        "category": "Овощи"
      },
      {
        "name": "Перец сладкий грунтовой зеленый и красный",
        "amount": 250,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 200,
        "category": "Овощи"
      },
      {
        "name": "Помидоры спелые сочные",
        "amount": 200,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 180,
        "category": "Овощи"
      },
      {
        "name": "Клецки чипетки (мука, яйцо, соль)",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 50,
        "category": "Бакалея"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "В котелке распустите смалец, выложите весь нарезанный лук и пассеруйте на среднем огне 12 минут до золотистой прозрачности.",
        "timerSeconds": 720,
        "tip": "Обилие лука делает бульон густым."
      },
      {
        "stepNumber": 2,
        "instruction": "СНИМИТЕ КОТЕЛОК С ОГНЯ! Всыпьте всю венгерскую паприку и быстро перемешайте с луком в жиру.",
        "timerSeconds": 60,
        "tip": "Секрет венгерских поваров: паприка растворяется в теплом жире, но мгновенно сгорает и горчит на открытом огне."
      },
      {
        "stepNumber": 3,
        "instruction": "Положите кубики говядины, растертый тмин и чеснок, верните на огонь и обжарьте 5 минут.",
        "timerSeconds": 300,
        "tip": "Тмин оттеняет паприку."
      },
      {
        "stepNumber": 4,
        "instruction": "Влейте 1 литр воды или бульона, накройте крышкой и томите 1 час на тихом огне до мягкости говядины.",
        "timerSeconds": 3600,
        "tip": "Мясо станет нежным."
      },
      {
        "stepNumber": 5,
        "instruction": "Добавьте кубики картофеля, сладкий перец и томаты, варите 15 минут.",
        "timerSeconds": 900,
        "tip": "Овощи насытят гуляш."
      },
      {
        "stepNumber": 6,
        "instruction": "Замесите плотное тесто (мука и яйцо), отщипывайте пальцами маленькие кусочки (чипетки) прямо в кипящий гуляш. Варите 3 минуты после всплытия и подавайте.",
        "timerSeconds": 240,
        "tip": "Чипетки придают сытность венгерского бограча."
      }
    ],
    "chefSecrets": [
      "Введение сладкой венгерской паприки строго при снятом с огня котелке защищает ее эфиры и сахара от пережигания и горечи."
    ],
    "techCard": {
      "dishYield": "6 порций по 450 г",
      "kzhbu": {
        "calories": 155,
        "proteins": 13.4,
        "fats": 7.2,
        "carbs": 10.1
      },
      "semiFinishedProducts": [
        "Папрично-луковая основа",
        "Ручные клецки чипетки"
      ],
      "technologicalProcess": "Холодное растворение каротиноидов паприки в липидной фракции с последующим тушением мяса и варкой клецек.",
      "servingTemperature": "80-85°C.",
      "storageConditions": "В холодильнике до 72 часов."
    }
  },
  {
    "id": "dish-wiener-schnitzel-veal",
    "title": "Классический венский шницель из телятины с брусничным конфитюром",
    "category": "dishes",
    "description": "Императорский эталон Вены: огромный тончайший эскалоп из молочной телятины в воздушной волнообразной панировке суфле из свежих белых сухарей, обжаренный в растопленном масле до золотого суфле. Подается с лимоном и брусникой.",
    "prepTime": 20,
    "cookTime": 6,
    "difficulty": "Средне",
    "servings": 2,
    "tags": [
      "Блюда",
      "Венский шницель",
      "Австрия",
      "Телятина",
      "Классика"
    ],
    "ingredients": [
      {
        "name": "Телячья вырезка или кострец молочный",
        "amount": 400,
        "unit": "г",
        "coldWastePercent": 0,
        "estimatedCostPerKg": 850,
        "category": "Мясо"
      },
      {
        "name": "Сухари панировочные из свежего белого хлеба (Semmelbrösel)",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 180,
        "category": "Хлеб"
      },
      {
        "name": "Мука пшеничная в/с",
        "amount": 60,
        "unit": "г",
        "estimatedCostPerKg": 50,
        "category": "Крупы и мука"
      },
      {
        "name": "Яйца куриные отборные (слегка взбитые вилкой)",
        "amount": 2,
        "unit": "шт",
        "estimatedCostPerKg": 140,
        "category": "Яйца"
      },
      {
        "name": "Масло топленое или сливочное (для жарки во фритюре)",
        "amount": 200,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Лимон (половинки для подачи)",
        "amount": 1,
        "unit": "шт",
        "coldWastePercent": 20,
        "estimatedCostPerKg": 180,
        "category": "Фрукты"
      },
      {
        "name": "Конфитюр брусничный дикий",
        "amount": 60,
        "unit": "г",
        "estimatedCostPerKg": 450,
        "category": "Бакалея"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Телятину разрежьте «бабочкой» и отбейте гладким молотком между листами пленки до равномерной толщины строго 3 мм.",
        "timerSeconds": 180,
        "tip": "Шницель должен стать размером с большую тарелку."
      },
      {
        "stepNumber": 2,
        "instruction": "Посолите мясо. Подготовьте 3 емкости: мука, взбитые вилкой яйца (без пены!) и свежие белые сухари.",
        "timerSeconds": 60,
        "tip": "Классическая тройная панировка венских мастеров."
      },
      {
        "stepNumber": 3,
        "instruction": "Обваляйте шницель в муке, стряхните излишки, обмакните в яйцо, затем аккуратно опустите в сухари. НИ В КОЕМ СЛУЧАЕ НЕ ПРИЖИМАЙТЕ СУХАРИ ПАЛЬЦАМИ!",
        "timerSeconds": 60,
        "tip": "Свободно лежащие сухари позволят панировке вздуться волной при жарке."
      },
      {
        "stepNumber": 4,
        "instruction": "В широкой сковороде растопите топленое масло (слой должен быть не менее 2 см, шницель должен плавать). Нагрейте до 175°C.",
        "timerSeconds": 180,
        "tip": "Масло должно свободно омывать края."
      },
      {
        "stepNumber": 5,
        "instruction": "Опустите шницель и непрерывно покачивайте сковороду круговыми движениями, поливая верх шницеля горячим маслом с помощью ложки, по 90-120 секунд с каждой стороны.",
        "timerSeconds": 240,
        "tip": "Пар внутри заставит панировку отойти от мяса и вздуться легендарной золотой волной (суфле)."
      },
      {
        "stepNumber": 6,
        "instruction": "Обсушите на бумажном полотенце 30 секунд и подавайте с долькой лимона, теплым картофельным салатом и дикой брусникой.",
        "timerSeconds": 60,
        "tip": "Шницель хрустит при каждом прикосновении ножа."
      }
    ],
    "chefSecrets": [
      "Не прижимайте панировочные сухари руками и непрерывно поливайте шницель кипящим топленым маслом — пар мгновенно надует панировку суфле."
    ],
    "techCard": {
      "dishYield": "2 огромных шницеля по 220 г",
      "kzhbu": {
        "calories": 280,
        "proteins": 21.4,
        "fats": 16.5,
        "carbs": 13.8
      },
      "semiFinishedProducts": [
        "Отбитая телятина бабочка",
        "Венские сухари Semmelbrösel"
      ],
      "technologicalProcess": "Прецизионное отбивание до 3 мм с бесконтактной панировкой и полупогружной жаркой в колеблющемся жире.",
      "servingTemperature": "80°C.",
      "storageConditions": "Употреблять исключительно немедленно."
    }
  },
  {
    "id": "dish-solyanka-meat-assembled",
    "title": "Солянка мясная сборная классическая с каперсами и оливками",
    "category": "dishes",
    "description": "Царица русских первых блюд: густой, кисло-остро-соленый янтарный суп на крепком бульоне с четырьмя видами мясных деликатесов (говядина, буженина, сервелат, охотничьи колбаски), томлеными солеными бочковыми огурцами, каперсами, маслинами и лимоном.",
    "prepTime": 25,
    "cookTime": 45,
    "difficulty": "Средне",
    "servings": 6,
    "tags": [
      "Блюда",
      "Солянка",
      "Мясная солянка",
      "Супы",
      "Русская кухня"
    ],
    "ingredients": [
      {
        "name": "Говядина отварная на кости (мякоть)",
        "amount": 300,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 650,
        "category": "Мясо"
      },
      {
        "name": "Колбаски охотничьи копченые",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 550,
        "category": "Мясо"
      },
      {
        "name": "Буженина или копченый окорок",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 650,
        "category": "Мясо"
      },
      {
        "name": "Сервелат или сосиски высший сорт",
        "amount": 120,
        "unit": "г",
        "estimatedCostPerKg": 450,
        "category": "Мясо"
      },
      {
        "name": "Огурцы бочковые соленые хрустящие",
        "amount": 250,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 120,
        "category": "Овощи"
      },
      {
        "name": "Рассол огуречный процеженный",
        "amount": 150,
        "unit": "мл",
        "estimatedCostPerKg": 20,
        "category": "Жидкости"
      },
      {
        "name": "Лук репчатый и томатное пюре (бресс)",
        "amount": 300,
        "unit": "г",
        "estimatedCostPerKg": 100,
        "category": "Овощи"
      },
      {
        "name": "Каперсы бутоны маринованные",
        "amount": 30,
        "unit": "г",
        "estimatedCostPerKg": 450,
        "category": "Бакалея"
      },
      {
        "name": "Маслины и оливки без косточек",
        "amount": 60,
        "unit": "г",
        "estimatedCostPerKg": 350,
        "category": "Бакалея"
      },
      {
        "name": "Бульон мясной наваристый",
        "amount": 1500,
        "unit": "мл",
        "estimatedCostPerKg": 30,
        "category": "Жидкости"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Огурцы очистите от грубой кожицы, нарежьте мелким ромбиком и припустите в ковшике с огуречным рассолом 12 минут до мягкости.",
        "timerSeconds": 720,
        "tip": "Припускание огурцов удаляет резкую кислоту и сохраняет их хруст."
      },
      {
        "stepNumber": 2,
        "instruction": "Лук мелко нарежьте и пассеруйте на сливочном масле с томатной пастой 15 минут до темно-красного цвета (бресс).",
        "timerSeconds": 900,
        "tip": "Томатный бресс придает солянке аппетитный янтарный блеск."
      },
      {
        "stepNumber": 3,
        "instruction": "Все мясные деликатесы нарежьте тонкой соломкой или аккуратными брусочками одинакового размера.",
        "timerSeconds": 300,
        "tip": "Одинаковая нарезка обязательна для ресторанной солянки."
      },
      {
        "stepNumber": 4,
        "instruction": "В кипящий говяжий бульон положите пассерованный лук с томатом (бресс) и припущенные огурцы, варите 10 минут.",
        "timerSeconds": 600,
        "tip": "Бульон приобретет кисло-сладкую основу."
      },
      {
        "stepNumber": 5,
        "instruction": "Добавьте всю мясную соломку, каперсы, оливки и маслины. Проварите на тихом огне еще 7-8 минут.",
        "timerSeconds": 480,
        "tip": "Вкусы копченостей и рассола соединятся воедино."
      },
      {
        "stepNumber": 6,
        "instruction": "Разлейте солянку по тарелкам, добавьте кружок свежего лимона, рубленую зелень и ложку густой сметаны.",
        "timerSeconds": 60,
        "tip": "Подавайте обжигающе горячей."
      }
    ],
    "chefSecrets": [
      "Предварительное припускание бочковых огурцов в собственном рассоле делает их шелковисто-хрустящими, предотвращая жесткость."
    ],
    "techCard": {
      "dishYield": "6 порций по 400 г",
      "kzhbu": {
        "calories": 165,
        "proteins": 12.8,
        "fats": 10.4,
        "carbs": 4.8
      },
      "semiFinishedProducts": [
        "Припущенные соленые огурцы",
        "Томатный бресс",
        "Мясное ассорти"
      ],
      "technologicalProcess": "Купажирование ферментированных растительных и мясных компонентов в экстрактивном бульоне.",
      "servingTemperature": "80°C.",
      "storageConditions": "В холодильнике до 72 часов (на второй день солянка еще богаче)."
    }
  },
  {
    "id": "dish-ukrainian-borscht-pampushki",
    "title": "Наваристый украинский борщ на говяжьей грудинке с чесночными пампушками",
    "category": "dishes",
    "description": "Культурное наследие: густой рубиновый борщ на сахарной косточке с говядиной, томленой свеклой с лимонным соком, сладким перцем, капустой, старым салом, растертым с чесноком, и теплыми дрожжевыми пампушками с чесночной подливкой.",
    "prepTime": 30,
    "cookTime": 90,
    "difficulty": "Средне",
    "servings": 6,
    "tags": [
      "Блюда",
      "Борщ",
      "Пампушки",
      "Супы",
      "Традиции"
    ],
    "ingredients": [
      {
        "name": "Говяжья грудинка на мозговой косточке",
        "amount": 800,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 650,
        "category": "Мясо"
      },
      {
        "name": "Свекла бордовая сладкая",
        "amount": 400,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 35,
        "category": "Овощи"
      },
      {
        "name": "Капуста белокочанная сочная",
        "amount": 350,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 30,
        "category": "Овощи"
      },
      {
        "name": "Картофель отборный",
        "amount": 300,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 40,
        "category": "Овощи"
      },
      {
        "name": "Морковь и лук репчатый",
        "amount": 250,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 35,
        "category": "Овощи"
      },
      {
        "name": "Томатная паста и сок лимона (для фиксации рубинового цвета)",
        "amount": 60,
        "unit": "г",
        "estimatedCostPerKg": 150,
        "category": "Бакалея"
      },
      {
        "name": "Сало свиное соленое старое",
        "amount": 40,
        "unit": "г",
        "estimatedCostPerKg": 400,
        "category": "Мясо"
      },
      {
        "name": "Чеснок свежий",
        "amount": 30,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 250,
        "category": "Овощи"
      },
      {
        "name": "Пампушки свежевыпеченные с чесноком",
        "amount": 6,
        "unit": "шт",
        "estimatedCostPerKg": 120,
        "category": "Хлеб"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Сварите прозрачный крепкий бульон из говяжьей грудинки с лавровым листом и перцем горошком (1.5 часа). Мясо нарежьте порционными кусками.",
        "timerSeconds": 5400,
        "tip": "Грудинка на кости дает непревзойденный навар."
      },
      {
        "stepNumber": 2,
        "instruction": "Свеклу нарежьте тонкой соломкой, тушите в отдельном сотейнике с ложкой сливочного масла, томатной пастой и соком лимона 20 минут.",
        "timerSeconds": 1200,
        "tip": "Лимонная кислота консервирует природный антоциан, и борщ никогда не порыжеет."
      },
      {
        "stepNumber": 3,
        "instruction": "Морковь и лук пассеруйте до золотистого цвета на сковороде.",
        "timerSeconds": 480,
        "tip": "Каротин моркови растворится в жире."
      },
      {
        "stepNumber": 4,
        "instruction": "В кипящий бульон опустите брусочки картофеля, через 7 минут добавьте тонко нашинкованную капусту и сладкий перец.",
        "timerSeconds": 480,
        "tip": "Капуста должна сохранить легкую упругость."
      },
      {
        "stepNumber": 5,
        "instruction": "Введите тушеную рубиновую свеклу и пассеровку. Доведите до кипения и убавьте огонь.",
        "timerSeconds": 180,
        "tip": "Цвет бульона вспыхнет глубоким рубином."
      },
      {
        "stepNumber": 6,
        "instruction": "Главный финальный штрих: в ступке разотрите сало с чесноком, солью и укропом в пасту. Вмешайте в борщ, накройте крышкой, выключите огонь и дайте настояться 20 минут. Подавайте с пампушками и сметаной.",
        "timerSeconds": 1200,
        "tip": "Растертое сало с чесноком дарит тот самый легендарный хуторской дух."
      }
    ],
    "chefSecrets": [
      "Лимонный сок, добавленный в свеклу до тушения, фиксирует антоцианы, благодаря чему борщ сохраняет сверкающий рубиновый цвет."
    ],
    "techCard": {
      "dishYield": "6 порций по 450 г (с мясом и пампушкой)",
      "kzhbu": {
        "calories": 148,
        "proteins": 10.4,
        "fats": 8.2,
        "carbs": 8.5
      },
      "semiFinishedProducts": [
        "Кислотно-ферментированная свекольная заправка",
        "Чесночно-сальная затирка"
      ],
      "technologicalProcess": "Кислотно-термическая стабилизация антоцианов с последующей гидротермальной варкой и чесночной ароматизацией.",
      "servingTemperature": "80°C.",
      "storageConditions": "В холодильнике до 4 суток (на второй день борщ идеален)."
    }
  },
  {
    "id": "dish-ukha-tsarskaya-three-fish",
    "title": "Царская тройная уха со стерлядью, судаком и рюмкой водки",
    "category": "dishes",
    "description": "Вершина русской речной кулинарии: наваристый янтарный тройной бульон из мелкой речной рыбы, филе волжского судака и нежнейшей стерляди, осветленный оттяжкой, с добавлением рюмки ледяной водки и затушенного березового уголька для дымного духа.",
    "prepTime": 25,
    "cookTime": 60,
    "difficulty": "Средне",
    "servings": 4,
    "tags": [
      "Блюда",
      "Уха",
      "Царская уха",
      "Стерлядь",
      "Рыба"
    ],
    "ingredients": [
      {
        "name": "Стерлядь свежая целая",
        "amount": 600,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 1200,
        "category": "Рыба"
      },
      {
        "name": "Судак волжский филе на коже",
        "amount": 400,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 650,
        "category": "Рыба"
      },
      {
        "name": "Мелочь речная (ерши, окуньки для первого бульона)",
        "amount": 600,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 150,
        "category": "Рыба"
      },
      {
        "name": "Лук репчатый и корень петрушки",
        "amount": 150,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 50,
        "category": "Овощи"
      },
      {
        "name": "Картофель молодой мелкий цельный",
        "amount": 250,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 45,
        "category": "Овощи"
      },
      {
        "name": "Водка классическая ледяная (в котел)",
        "amount": 50,
        "unit": "мл",
        "estimatedCostPerKg": 600,
        "category": "Жидкости"
      },
      {
        "name": "Шафран имеретинский (для царского янтаря)",
        "amount": 1,
        "unit": "г",
        "estimatedCostPerKg": 850,
        "category": "Специи"
      },
      {
        "name": "Укроп свежий и зеленый лук",
        "amount": 30,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 350,
        "category": "Зелень"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Первая уха: мелкую рыбу (ершей не чистить, только выпотрошить — их слизь дает самый клейкий навар!) заверните в марлю и варите с луком и корнем петрушки 30 минут. Марлю отожмите и удалите.",
        "timerSeconds": 1800,
        "tip": "Ершовая слизь — вековой секрет наваристости царской ухи."
      },
      {
        "stepNumber": 2,
        "instruction": "Вторая уха: в процеженный бульон опустите головы и хребты судака и стерляди, проварите 15 минут и процедите через тройную марлю до абсолютной прозрачности.",
        "timerSeconds": 900,
        "tip": "Бульон станет плотным и клейким."
      },
      {
        "stepNumber": 3,
        "instruction": "Третья уха: положите клубни молодого картофеля, шафран, крупные куски филе судака и стерляди, нарезанной стейками.",
        "timerSeconds": 120,
        "tip": "Благородная рыба варится быстро."
      },
      {
        "stepNumber": 4,
        "instruction": "Варите при едва заметном трепетании поверхности ровно 10 минут, не допуская бурного кипения.",
        "timerSeconds": 600,
        "tip": "Тихий огонь сохраняет целостность нежной стерляди."
      },
      {
        "stepNumber": 5,
        "instruction": "Перед самым снятием влейте рюмку холодной водки (она осаждает взвесь и убирает болотный запах тины) и окуните на 3 секунды тлеющий березовый уголек.",
        "timerSeconds": 60,
        "tip": "Уголек дарит костровой дымок."
      },
      {
        "stepNumber": 6,
        "instruction": "Дайте постоять 10 минут под крышкой и подавайте с расстегаями с рыбой и зеленью.",
        "timerSeconds": 600,
        "tip": "Бульон золотой, прозрачный как слеза."
      }
    ],
    "chefSecrets": [
      "Рюмка водки в финале мгновенно связывает и осаждает белковую муть, делая бульон кристально чистым, а березовый уголек дарит дух костра."
    ],
    "techCard": {
      "dishYield": "4 порции по 380 г (с филе стерляди и судака)",
      "kzhbu": {
        "calories": 115,
        "proteins": 15.8,
        "fats": 4.8,
        "carbs": 3.5
      },
      "semiFinishedProducts": [
        "Тройной ершово-осетровый бульон"
      ],
      "technologicalProcess": "Многоступенчатая клейстеризация рыбного коллагена с последующей спиртовой осветляющей оттяжкой.",
      "servingTemperature": "80°C.",
      "storageConditions": "В холодильнике до 24 часов."
    }
  },
  {
    "id": "dish-kebab-lula-lamb",
    "title": "Люля-кебаб из баранины с курдюком на широких шампурах",
    "category": "dishes",
    "description": "Вершина восточного мангального искусства: рубленый фарш из молодой баранины и курдюка, отбитый до выделения белковых нитей, благодаря чему он крепко держится на шампуре без яиц и хлеба, запеченный над углями до сочности.",
    "prepTime": 30,
    "cookTime": 12,
    "difficulty": "Профи",
    "servings": 4,
    "tags": [
      "Блюда",
      "Люля-кебаб",
      "Баранина",
      "Мангал",
      "Кавказ"
    ],
    "ingredients": [
      {
        "name": "Баранина сочная (окорок или лопатка)",
        "amount": 800,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 750,
        "category": "Мясо"
      },
      {
        "name": "Курдюк бараний свежий",
        "amount": 200,
        "unit": "г",
        "estimatedCostPerKg": 650,
        "category": "Мясо"
      },
      {
        "name": "Лук репчатый сочный",
        "amount": 150,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 30,
        "category": "Овощи"
      },
      {
        "name": "Зира свежерастертая и кориандр",
        "amount": 10,
        "unit": "г",
        "estimatedCostPerKg": 600,
        "category": "Специи"
      },
      {
        "name": "Перец черный крупного помола",
        "amount": 6,
        "unit": "г",
        "estimatedCostPerKg": 600,
        "category": "Специи"
      },
      {
        "name": "Соль поваренная",
        "amount": 15,
        "unit": "г",
        "estimatedCostPerKg": 30,
        "category": "Специи"
      },
      {
        "name": "Лаваш тонкий армянский и маринованный лук (для подачи)",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 100,
        "category": "Хлеб"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Мясо и подмороженный курдюк мелко порубите тяжелыми топориками или пропустите через крупную решетку мясорубки.",
        "timerSeconds": 300,
        "tip": "Курдюк должен быть ледяным при измельчении."
      },
      {
        "stepNumber": 2,
        "instruction": "Лук нарежьте исключительно ВРУЧНУЮ мельчайшим кубиком и отожмите сок через сито (сок лука разжижает фарш!).",
        "timerSeconds": 180,
        "tip": "Отжим сока — ключ к тому, чтобы кебаб не упал с шампура."
      },
      {
        "stepNumber": 3,
        "instruction": "Смешайте мясо, курдюк, лук, соль и специи. Энергично вымешивайте и отбивайте фарш об стол ровно 10-12 минут, пока мясо не станет клейким и не покроется белыми нитями белка миозина.",
        "timerSeconds": 720,
        "tip": "Выбитый белок миозин намертво склеивает люля без грамма муки или яиц."
      },
      {
        "stepNumber": 4,
        "instruction": "Уберите фарш в холодильник минимум на 2 часа для полного застывания бараньего жира.",
        "timerSeconds": 7200,
        "tip": "Ледяной фарш лепится как пластилин."
      },
      {
        "stepNumber": 5,
        "instruction": "Смочите руки в горячей воде, возьмите порцию фарша (150 г) и плотно обожмите вокруг широкого плоского шампура, удаляя пустоты воздуха.",
        "timerSeconds": 240,
        "tip": "Воздушные пузыри приводят к падению мяса."
      },
      {
        "stepNumber": 6,
        "instruction": "Жарьте над раскаленными углями, непрерывно переворачивая шампуры в первые 2 минуты для мгновенного запекания белковой корочки со всех сторон, общее время жарки 10-12 минут. Снимайте тонким лавашом.",
        "timerSeconds": 600,
        "tip": "Лаваш впитывает драгоценный горячий сок."
      }
    ],
    "chefSecrets": [
      "Тщательное 10-минутное отбивание фарша до выделения миозина и обязательное охлаждение жира гарантируют, что кебаб никогда не сорвется в угли."
    ],
    "techCard": {
      "dishYield": "4 шампура по 180 г",
      "kzhbu": {
        "calories": 285,
        "proteins": 16.4,
        "fats": 24.2,
        "carbs": 1.2
      },
      "semiFinishedProducts": [
        "Миозиновый фарш для люля глубокого вымешивания"
      ],
      "technologicalProcess": "Механическая активация мышечных фибриллярных белков с последующей радиационной термообработкой над углями.",
      "servingTemperature": "85°C.",
      "storageConditions": "Охлажденный полуфабрикат хранится до 24 часов."
    }
  },
  {
    "id": "dish-ribeye-steak-compound-butter",
    "title": "Стейк Рибай Прайм зернового откорма с пряным трюфельным маслом",
    "category": "dishes",
    "description": "Мясное совершенство: толстый мраморный стейк Рибай (толщина 3.5 см), обжаренный на чугуне методом аррозе (arrosé) с непрерывным поливанием пенящимся сливочным маслом, чесноком и розмарином до прожарки Medium Rare.",
    "prepTime": 10,
    "cookTime": 10,
    "difficulty": "Средне",
    "servings": 1,
    "tags": [
      "Блюда",
      "Рибай",
      "Стейк",
      "Говядина",
      "Гриль"
    ],
    "ingredients": [
      {
        "name": "Стейк Рибай мраморный 200 дней зернового откорма",
        "amount": 350,
        "unit": "г",
        "coldWastePercent": 0,
        "estimatedCostPerKg": 2400,
        "category": "Мясо"
      },
      {
        "name": "Масло сливочное 82.5% вологодское",
        "amount": 50,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Чеснок свежий неочищенный (раздавленный)",
        "amount": 3,
        "unit": "зуб",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 250,
        "category": "Овощи"
      },
      {
        "name": "Розмарин свежий и тимьян веточки",
        "amount": 15,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 800,
        "category": "Зелень"
      },
      {
        "name": "Масло белого трюфеля (для компаунд-масла)",
        "amount": 5,
        "unit": "мл",
        "estimatedCostPerKg": 3500,
        "category": "Масла"
      },
      {
        "name": "Соль хлопьями Fleur de Sel или Maldon",
        "amount": 5,
        "unit": "г",
        "estimatedCostPerKg": 800,
        "category": "Специи"
      },
      {
        "name": "Перец черный крупнодробленый свежий",
        "amount": 4,
        "unit": "г",
        "estimatedCostPerKg": 600,
        "category": "Специи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Стейк достаньте из холодильника за 45 минут до жарки, чтобы он нагрелся до комнатной температуры (18-20°C). Тщательно промокните салфетками.",
        "timerSeconds": 2700,
        "tip": "Холодный стейк охладит сковороду и сварится вместо образования корочки."
      },
      {
        "stepNumber": 2,
        "instruction": "Чугунную сковороду раскалите до легкого дымка, сбрызните маслом с высокой точкой дымления.",
        "timerSeconds": 180,
        "tip": "Чугун обеспечивает равномерную теплоотдачу."
      },
      {
        "stepNumber": 3,
        "instruction": "Выложите стейк и жарьте по 1 минуте, затем переверните. Переворачивайте каждые 60 секунд для равномерного прогрева без серого ободка.",
        "timerSeconds": 240,
        "tip": "Частое переворачивание дает идеальный розовый градиент."
      },
      {
        "stepNumber": 4,
        "instruction": "Фаза Аррозе (Basting): убавьте огонь, бросьте в сковороду сливочное масло, раздавленный чеснок и веточки розмарина с тимьяном. Наклоните сковороду и непрерывно поливайте стейк ложкой пенящимся ароматным маслом 2 минуты.",
        "timerSeconds": 120,
        "tip": "Горячее масло доводит внутреннюю температуру до 54°C (Medium Rare)."
      },
      {
        "stepNumber": 5,
        "instruction": "Снимите стейк на теплую деревянную доску, положите сверху шарик трюфельного масла и ОСТАВЬТЕ ОТДЫХАТЬ РОВНО НА 5-7 МИНУТ.",
        "timerSeconds": 360,
        "tip": "Отдых позволяет мышечным волокнам расслабиться, распределив мясные соки по всему стейку."
      },
      {
        "stepNumber": 6,
        "instruction": "Нарежьте под углом на слайсы толщиной 1 см, посыпьте хрустящими кристаллами соли Fleur de Sel и свежемолотым перцем.",
        "timerSeconds": 60,
        "tip": "Мясо брызжет соком."
      }
    ],
    "chefSecrets": [
      "Метод «arrosé» (непрерывный полив пенящимся чесночно-розмариновым сливочным маслом) обеспечивает глубокую карамелизацию корочки Майяра."
    ],
    "techCard": {
      "dishYield": "1 порция (320 г готового стейка)",
      "kzhbu": {
        "calories": 295,
        "proteins": 22.4,
        "fats": 22.8,
        "carbs": 0.5
      },
      "semiFinishedProducts": [
        "Выдержанный рибай комнатной температуры",
        "Трюфельное масло"
      ],
      "technologicalProcess": "Контактная высокотемпературная термообработка с масляным поливом (basting) и изотермической релаксацией волокон.",
      "servingTemperature": "55-58°C (Medium Rare).",
      "storageConditions": "Употреблять сразу."
    }
  },
  {
    "id": "dish-salmon-steak-hollandaise",
    "title": "Стейк из атлантического лосося со спаржей и соусом Голландез",
    "category": "dishes",
    "description": "Ресторанная классика высокой кухни: филе атлантического лосося на хрустящей коже сочной прожарки Medium, подаваемое с бланшированной зеленой мини-спаржей и теплым бархатистым соусом Голландез.",
    "prepTime": 15,
    "cookTime": 12,
    "difficulty": "Средне",
    "servings": 2,
    "tags": [
      "Блюда",
      "Лосось",
      "Стейк из рыбы",
      "Голландез",
      "Спаржа"
    ],
    "ingredients": [
      {
        "name": "Стейк лосося атлантического на коже",
        "amount": 400,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 1400,
        "category": "Рыба"
      },
      {
        "name": "Спаржа зеленая свежая мини",
        "amount": 200,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 850,
        "category": "Овощи"
      },
      {
        "name": "Желтки яичные свежие (для Голландеза)",
        "amount": 3,
        "unit": "шт",
        "estimatedCostPerKg": 140,
        "category": "Яйца"
      },
      {
        "name": "Масло сливочное топленое горячее (для соуса)",
        "amount": 120,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Сок лимона свежевыжатый",
        "amount": 15,
        "unit": "мл",
        "coldWastePercent": 20,
        "estimatedCostPerKg": 180,
        "category": "Фрукты"
      },
      {
        "name": "Масло оливковое и сливочное (для жарки)",
        "amount": 30,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Соль морская хлопьями и белый перец",
        "amount": 6,
        "unit": "г",
        "estimatedCostPerKg": 300,
        "category": "Специи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Стейки лосося обсушите салфеткой, кожу слегка надсеките ножом крест-накрест (чтобы стейк не свернулся лодочкой при жарке).",
        "timerSeconds": 120,
        "tip": "Сухая кожа становится хрустящей как чипс."
      },
      {
        "stepNumber": 2,
        "instruction": "Для соуса Голландез желтки с ложкой лимонного сока взбивайте на водяной бане до пышного крема, затем тончайшей струйкой введите теплое топленое масло, взбивая до состояния воздушного шелкового майонеза.",
        "timerSeconds": 300,
        "tip": "Температура водяной бани не должна превышать 65°C."
      },
      {
        "stepNumber": 3,
        "instruction": "Спаржу бланшируйте в кипящей подсоленной воде 2 минуты, затем обдайте ледяной водой и быстро обжарьте на сливочном масле 1 минуту.",
        "timerSeconds": 180,
        "tip": "Шоковое охлаждение сохраняет ярко-зеленый цвет."
      },
      {
        "stepNumber": 4,
        "instruction": "На сковороде с оливковым маслом выложите лосось КОЖЕЙ ВНИЗ и прижмите лопаткой на первые 30 секунд. Жарьте на среднем огне 70% времени на коже (около 5-6 минут).",
        "timerSeconds": 360,
        "tip": "Жарка на коже защищает нежное филе от пересушивания."
      },
      {
        "stepNumber": 5,
        "instruction": "Переверните на вторую сторону буквально на 90 секунд, добавьте кусочек сливочного масла и полейте рыбу.",
        "timerSeconds": 90,
        "tip": "Центр лосося останется полупрозрачным, сочным и нежным."
      },
      {
        "stepNumber": 6,
        "instruction": "Выложите спаржу на тарелку, сверху стейк лосося хрустящей кожей вверх и полейте теплым соусом Голландез.",
        "timerSeconds": 60,
        "tip": "Подавайте сразу."
      }
    ],
    "chefSecrets": [
      "Жарка лосося 80% времени строго на коже с прижимом лопаткой делает кожу абсолютно хрустящей, сохраняя сочность филе Medium."
    ],
    "techCard": {
      "dishYield": "2 порции по 280 г",
      "kzhbu": {
        "calories": 265,
        "proteins": 19.8,
        "fats": 20.4,
        "carbs": 1.8
      },
      "semiFinishedProducts": [
        "Соус Голландез на водяной бане",
        "Бланшированная мини-спаржа"
      ],
      "technologicalProcess": "Односторонняя щадящая контактная термообработка лосося с эмульсионным соусом.",
      "servingTemperature": "65°C.",
      "storageConditions": "Употреблять сразу."
    }
  }
];

export const DISHES_RECIPES: Recipe[] = [
  ...BASE_DISHES_RECIPES,
  ...DISHES_COLLECTION_1,
  ...DISHES_COLLECTION_2,
  ...DISHES_COLLECTION_3,
  ...DISHES_COLLECTION_4
];

