import { Recipe } from '../../types';
import { SALAD_COLLECTION_1 } from './salads_collection_1';
import { SALAD_COLLECTION_2 } from './salads_collection_2';
import { SALAD_COLLECTION_3 } from './salads_collection_3';

const BASE_SALAD_RECIPES: Recipe[] = [
  {
    id: 'caesar-salad',
    title: 'Салат Цезарь с курицей су-вид и крутонами',
    category: 'salads',
    description: 'Хрустящий салат Романо, нежнейшее куриное филе медленного приготовления, золотистые чесночные гренки, хлопья сыра Пармезан и оригинальный соус на базе анчоусов и каперсов.',
    prepTime: 20,
    cookTime: 10,
    difficulty: 'Легко',
    servings: 2,
    tags: ['Салат', 'Курица', 'Пармезан', 'Классика', 'Романо'],
    ingredients: [
      { name: 'Листья салата Романо (Римский)', amount: 200, unit: 'г', coldWastePercent: 15, heatLossPercent: 0, estimatedCostPerKg: 400, category: 'Зелень' },
      { name: 'Куриное филе грудки', amount: 300, unit: 'г', coldWastePercent: 4, heatLossPercent: 20, estimatedCostPerKg: 380, category: 'Мясо' },
      { name: 'Багет французский (для крутонов)', amount: 100, unit: 'г', coldWastePercent: 5, heatLossPercent: 15, estimatedCostPerKg: 80, category: 'Хлеб' },
      { name: 'Сыр Пармиджано Реджано', amount: 50, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1800, category: 'Сыры' },
      { name: 'Помидоры черри', amount: 80, unit: 'г', coldWastePercent: 5, heatLossPercent: 0, estimatedCostPerKg: 280, category: 'Овощи' },
      { name: 'Филе анчоусов в масле', amount: 20, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1600, category: 'Рыба' },
      { name: 'Желток куриного яйца', amount: 2, unit: 'шт', coldWastePercent: 50, heatLossPercent: 0, estimatedCostPerKg: 160, category: 'Яйца' },
      { name: 'Горчица дижонская', amount: 1, unit: 'ч. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 400, category: 'Соусы' },
      { name: 'Масло оливковое Extra Virgin', amount: 70, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 950, category: 'Масла' },
      { name: 'Вустерширский соус и лимонный сок', amount: 1, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 600, category: 'Соусы' },
      { name: 'Чеснок', amount: 2, unit: 'зубчик', coldWastePercent: 10, heatLossPercent: 0, estimatedCostPerKg: 300, category: 'Овощи' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Листья Романо замочите в ледяной воде на 10 минут, затем тщательно обсушите в сушилке-карусели. Порвите руками на крупные фрагменты.',
        timerSeconds: 600,
        tip: 'Ледяная вода возвращает листьям салата упругий ресторанный хруст.'
      },
      {
        stepNumber: 2,
        instruction: 'Крутоны: багет нарвите руками на кусочки (или нарежьте кубиком), сбрызните оливковым маслом, чесночным маслом и щепоткой морской соли. Запекайте при 170°C 8-10 минут до золотистой корочки с мягкой серединкой.',
        timerSeconds: 540,
        tip: 'Рваные руками кусочки багета имеют шероховатую текстуру, которая лучше удерживает соус.'
      },
      {
        stepNumber: 3,
        instruction: 'Приготовьте соус Цезарь: в высокой чаше блендера взбейте желтки, филе анчоусов, зубчик чеснока, дижонскую горчицу, вустерский соус и лимонный сок. Тонкой струйкой, не выключая блендер, влейте оливковое масло до получения густой эмульсии майонезной консистенции.',
        timerSeconds: 180,
        tip: 'Анчоусы и вустерский соус придают тот самый фирменный пикантный умами-вкус соусу Цезарь.'
      },
      {
        stepNumber: 4,
        instruction: 'Куриное филе натрите солью, перцем и каплей оливкового масла. Обжарьте на сковороде-гриль по 3.5 минуты с каждой стороны или приготовьте методом су-вид при 64°C 45 минут. Дайте мясу отдохнуть 3 минуты и нарежьте ломтиками.',
        timerSeconds: 420,
        tip: 'Не пересушивайте куриную грудку: внутри она должна быть сочной и мягкой.'
      },
      {
        stepNumber: 5,
        instruction: 'В большой миске соедините листья романо с 2/3 соуса и аккуратно перемешайте руками снизу вверх, чтобы каждый лист был покрыт тончайшей вуалью заправки.',
        timerSeconds: 60,
        tip: 'Перемешивание руками предотвращает замятие нежных листьев салата.'
      },
      {
        stepNumber: 6,
        instruction: 'Выложите заправленные листья на широкое блюдо. Сверху разложите теплую курицу, крутоны, половинки черри и с помощью овощечистки снимите тонкие лепестки сыра Пармезан.',
        tip: 'Подавать немедленно, пока крутоны хрустят, а курица теплая.'
      }
    ],
    chefSecrets: [
      'Никакого майонеза из пачки: только домашняя эмульсия на желтках с анчоусами дает подлинный вкус Цезаря.',
      'Только салат Романо: айсберг водянист, а пекинская капуста не держит плотную текстуру.',
      'Тонкие слайсы пармезана, срезанные экономкой, тают на языке приятнее, чем мелкая терка.'
    ],
    techCard: {
      dishYield: '260 г на порцию',
      kzhbu: {
        calories: 185,
        proteins: 16.4,
        fats: 11.2,
        carbs: 4.8
      },
      semiFinishedProducts: ['Листья романо подготовленные', 'Крутоны чесночные', 'Соус Цезарь оригинальный'],
      technologicalProcess: 'Холодный цех. Сборка перед подачей гостю без предварительного заветривания.',
      servingTemperature: '12-14°C',
      storageConditions: 'Соус хранится при +2...+4°C до 24 часов. Салат собирается только а-ля минут.'
    }
  },
  {
    id: 'olivier-tsarsky',
    title: 'Царский Оливье с перепелами, раковыми шейками и икрой',
    category: 'salads',
    description: 'Возрождение исторического рецепта Люсьена Оливье: запеченное мясо перепелов, отварной говяжий язык, шейки раков, соленые корнишоны, свежий огурец, каперсы, икра и авторский провансаль.',
    prepTime: 35,
    cookTime: 30,
    difficulty: 'Профи',
    servings: 4,
    tags: ['Оливье', 'Русская кухня', 'Деликатес', 'Икра', 'Праздничное'],
    ingredients: [
      { name: 'Перепела фермерские (или утиная грудка)', amount: 2, unit: 'шт', coldWastePercent: 20, heatLossPercent: 25, estimatedCostPerKg: 750, category: 'Мясо' },
      { name: 'Язык говяжий нежный отварной', amount: 150, unit: 'г', coldWastePercent: 15, heatLossPercent: 10, estimatedCostPerKg: 1100, category: 'Мясо' },
      { name: 'Шейки раков (или камчатский краб)', amount: 100, unit: 'г', coldWastePercent: 5, heatLossPercent: 0, estimatedCostPerKg: 1800, category: 'Морепродукты' },
      { name: 'Икра красная лососевая (для венца)', amount: 40, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 3500, category: 'Рыба' },
      { name: 'Картофель запеченный в мундире', amount: 200, unit: 'г', coldWastePercent: 15, heatLossPercent: 5, estimatedCostPerKg: 40, category: 'Овощи' },
      { name: 'Морковь отварная', amount: 100, unit: 'г', coldWastePercent: 15, heatLossPercent: 5, estimatedCostPerKg: 50, category: 'Овощи' },
      { name: 'Яйца перепелиные отварные', amount: 8, unit: 'шт', coldWastePercent: 15, heatLossPercent: 0, estimatedCostPerKg: 180, category: 'Яйца' },
      { name: 'Огурцы свежие грунтовые и корнишоны соленые (50/50)', amount: 160, unit: 'г', coldWastePercent: 8, heatLossPercent: 0, estimatedCostPerKg: 140, category: 'Овощи' },
      { name: 'Каперсы маринованные', amount: 25, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 950, category: 'Бакалея' },
      { name: 'Домашний майонез Провансаль на перепелиных желтках', amount: 120, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 350, category: 'Соусы' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Перепелов натрите сливочным маслом и запеките в духовке при 190°C 20 минут до сочности. Отделите мясо от костей и нарежьте аккуратным кубиком.',
        timerSeconds: 1200,
        tip: 'Запекание птицы вместо варки сохраняет максимум концентрированного вкуса дичи.'
      },
      {
        stepNumber: 2,
        instruction: 'Картофель запеките в фольге с солью (не варите в воде!). Остудите и нарежьте идеальным мелким кубиком 5х5 мм.',
        timerSeconds: 600,
        tip: 'Запеченный картофель содержит меньше влаги и крахмала, кубики не слипаются в кашу.'
      },
      {
        stepNumber: 3,
        instruction: 'Язык отварной, морковь, свежий огурец и корнишоны нарежьте таким же мелким геометрическим кубиком. Добавьте каперсы.',
        timerSeconds: 480,
        tip: 'Сочетание свежего и соленого огурца придает салату баланс весенней свежести и благородной кислинки.'
      },
      {
        stepNumber: 4,
        instruction: 'Приготовьте домашний провансаль: взбейте перепелиные желтки с дижонской горчицей, каплей белого винного уксуса и оливковым маслом.',
        timerSeconds: 300,
        tip: 'Перепелиные яйца придают майонезу шелковистую тающую текстуру.'
      },
      {
        stepNumber: 5,
        instruction: 'Соедините нарезанные ингредиенты в миске, заправьте домашним соусом и бережно перемешайте. Выложите через сервировочное кольцо на ресторанную тарелку.',
        timerSeconds: 180,
        tip: 'Сервировочное кольцо формирует идеальную ресторанную подачу.'
      },
      {
        stepNumber: 6,
        instruction: 'Сверху украсьте раковыми шейками, половинками перепелиных яиц, каплями красной икры и листочками свежего кервеля или микрозелени.',
        tip: 'Шедевр готов к подаче гостям.'
      }
    ],
    chefSecrets: [
      'Запекание корнеплодов в духовке вместо варки — профессиональный секрет сухого упругого кубика.',
      'Раковые шейки и красная икра — исторический маркер дореволюционного дворянского салата.',
      'Идеальная калибровка кубика 5х5 мм создает гармоничную текстуру без доминирования одного продукта.'
    ],
    techCard: {
      dishYield: '280 г на порцию',
      kzhbu: {
        calories: 210,
        proteins: 13.8,
        fats: 14.5,
        carbs: 6.2
      },
      semiFinishedProducts: ['Запеченная птица зачищенная', 'Язык отварной кубик', 'Майонез провансаль домашний'],
      technologicalProcess: 'Холодная кулинария. Сборка через кулинарную форму с икорным декором.',
      servingTemperature: '10-12°C',
      storageConditions: 'В заправленном виде — не более 6 часов при +2...+4°C.'
    }
  },
  {
    id: 'greek-horiatiki',
    title: 'Греческий деревенский салат (Хорьятики)',
    category: 'salads',
    description: 'Настоящая эгейская классика: крупно нарезанные сладкие помидоры, хрустящие огурцы, сладкий крымский лук, оливки Каламата, каперсы и целый пласт греческой Феты, посыпанный диким орегано.',
    prepTime: 15,
    cookTime: 0,
    difficulty: 'Легко',
    servings: 2,
    tags: ['Греция', 'Салат', 'Сыр Фета', 'Овощи', 'Средиземноморье'],
    ingredients: [
      { name: 'Помидоры спелые мясистые (бычье сердце)', amount: 350, unit: 'г', coldWastePercent: 5, heatLossPercent: 0, estimatedCostPerKg: 180, category: 'Овощи' },
      { name: 'Огурцы хрустящие пупырчатые', amount: 200, unit: 'г', coldWastePercent: 8, heatLossPercent: 0, estimatedCostPerKg: 120, category: 'Овощи' },
      { name: 'Перец сладкий болгарский зеленый', amount: 150, unit: 'г', coldWastePercent: 18, heatLossPercent: 0, estimatedCostPerKg: 220, category: 'Овощи' },
      { name: 'Лук сладкий красный ялтинский', amount: 80, unit: 'г', coldWastePercent: 12, heatLossPercent: 0, estimatedCostPerKg: 90, category: 'Овощи' },
      { name: 'Сыр Фета из овечьего и козьего молока (D.O.P.)', amount: 150, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1200, category: 'Сыры' },
      { name: 'Оливки Каламата вяленые с косточкой', amount: 60, unit: 'г', coldWastePercent: 20, heatLossPercent: 0, estimatedCostPerKg: 850, category: 'Бакалея' },
      { name: 'Масло оливковое греческое Extra Virgin раннего сбора', amount: 50, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1100, category: 'Масла' },
      { name: 'Винный уксус красный выдержанный', amount: 1, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 300, category: 'Бакалея' },
      { name: 'Орегано греческий дикорастущий сушеный', amount: 1, unit: 'ч. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1500, category: 'Специи' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Помидоры нарежьте крупными неровными дольками. Огурцы очистите от кожуры полосками "зеброй" и нарежьте толстыми полукружиями толщиной 1 см.',
        timerSeconds: 180,
        tip: 'Крупная нарезка — аутентичный стиль греческой деревни (Хорьятики), позволяющий сохранить сок внутри овощей.'
      },
      {
        stepNumber: 2,
        instruction: 'Болгарский перец нарежьте широкими кольцами, красный лук — тонкими перьями. Замочите лук на 3 минуты в холодной воде с каплей винного уксуса.',
        timerSeconds: 180,
        tip: 'Вымачивание убирает резкую горечь лука, оставляя сладкий хруст.'
      },
      {
        stepNumber: 3,
        instruction: 'Оливки Каламата традиционно берут именно с косточкой — у них не повреждена мякоть и несравненно более богатый винный вкус.',
        tip: 'Оливки без косточек в рассоле теряют упругость и плотность мякоти.'
      },
      {
        stepNumber: 4,
        instruction: 'Выложите овощи в широкую глиняную миску, сбрызните красным винным уксусом, посолите крупной морской солью и перемешайте.',
        timerSeconds: 60,
        tip: 'Винный уксус запускает выделение ароматного овощного сока.'
      },
      {
        stepNumber: 5,
        instruction: 'СВЕРХУ на овощи уложите цельный толстый брусок сыра Фета (не крошите сыр кубиками!). Посыпьте сушеным орегано и щедро полейте все блюдо оливковым маслом первого холодного отжима.',
        timerSeconds: 60,
        tip: 'Подача с цельным пластом феты — признак подлинного греческого ресторана.'
      },
      {
        stepNumber: 6,
        instruction: 'Подавайте с теплым поджаренным деревенским хлебом на закваске, чтобы макать его в образующийся на дне божественный соус из томатного сока, феты и оливкового масла (ладанора).',
        tip: 'Этот сок на дне тарелки греки называют "папара".'
      }
    ],
    chefSecrets: [
      'Фету никогда не режут кубиками в классическом Хорьятики — только цельный пласт сверху.',
      'Только спелые грунтовые томаты: салат живет за счет качества базовых сезонных овощей.',
      'Оливки Каламата с косточкой не сравнятся по вкусу с консервированными маслинами из жестянки.'
    ],
    techCard: {
      dishYield: '360 г на порцию',
      kzhbu: {
        calories: 145,
        proteins: 5.2,
        fats: 12.8,
        carbs: 4.4
      },
      semiFinishedProducts: ['Овощной микс крупной нарезки', 'Пласт феты с орегано'],
      technologicalProcess: 'Холодная сборка непосредственно перед отпуском.',
      servingTemperature: '14-16°C',
      storageConditions: 'Приготовление исключительно a la minute.'
    }
  },
  {
    id: 'georgian-walnut-salad',
    title: 'Тбилисский салат из сладких томатов с ореховой заправкой',
    category: 'salads',
    description: 'Солнечный грузинский салат: сладкие грунтовые помидоры, хрустящие огурцы, красный лук и густая бархатистая заправка из грецких орехов, чеснока, кинзы и белого винного уксуса.',
    prepTime: 15,
    cookTime: 0,
    difficulty: 'Легко',
    servings: 2,
    tags: ['Грузия', 'Салат', 'Орехи', 'Томаты', 'Кинза'],
    ingredients: [
      { name: 'Помидоры розовые бакинские или дагестанские', amount: 350, unit: 'г', coldWastePercent: 5, heatLossPercent: 0, estimatedCostPerKg: 220, category: 'Овощи' },
      { name: 'Огурцы короткоплодные хрустящие', amount: 200, unit: 'г', coldWastePercent: 8, heatLossPercent: 0, estimatedCostPerKg: 120, category: 'Овощи' },
      { name: 'Грецкие орехи свежие очищенные', amount: 80, unit: 'г', coldWastePercent: 5, heatLossPercent: 0, estimatedCostPerKg: 1100, category: 'Орехи' },
      { name: 'Свежая кинза (щедрый пучок)', amount: 40, unit: 'г', coldWastePercent: 10, heatLossPercent: 0, estimatedCostPerKg: 400, category: 'Зелень' },
      { name: 'Чеснок свежий', amount: 2, unit: 'зубчик', coldWastePercent: 15, heatLossPercent: 0, estimatedCostPerKg: 300, category: 'Овощи' },
      { name: 'Уксус белый винный кахетинский', amount: 1.5, unit: 'ст. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 250, category: 'Бакалея' },
      { name: 'Острый стручковый зеленый перец', amount: 0.5, unit: 'шт', coldWastePercent: 10, heatLossPercent: 0, estimatedCostPerKg: 400, category: 'Овощи' },
      { name: 'Лук красный ялтинский', amount: 60, unit: 'г', coldWastePercent: 12, heatLossPercent: 0, estimatedCostPerKg: 90, category: 'Овощи' },
      { name: 'Уцхо-сунели и молотый кориандр', amount: 1, unit: 'ч. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1200, category: 'Специи' },
      { name: 'Вода ледяная для соуса', amount: 30, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 5, category: 'Жидкости' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Ореховая заправка (баже): грецкие орехи, чеснок, кинзу, кусочек острого перца, специи, соль и винный уксус разотрите в каменной ступке или пробейте в чаше блендера.',
        timerSeconds: 300,
        tip: 'Добавьте 2-3 ложки ледяной воды для получения кремовой консистенции густой сметаны.'
      },
      {
        stepNumber: 2,
        instruction: 'Помидоры нарежьте крупными дольками, огурцы — полукружиями наискосок толщиной 7-8 мм.',
        timerSeconds: 180,
        tip: 'Кожицу с грунтовых огурцов можно не снимать, если она тонкая и свежая.'
      },
      {
        stepNumber: 3,
        instruction: 'Красный лук нарежьте полукольцами, помните пальцами для мягкости.',
        timerSeconds: 60,
        tip: 'Разминание высвобождает сок и смягчает текстуру луковых колец.'
      },
      {
        stepNumber: 4,
        instruction: 'Выложите овощи в салатник, щедро полейте ореховой заправкой и аккуратно перемешайте лопатками.',
        timerSeconds: 60,
        tip: 'Ореховая заправка обволакивает томаты, смешиваясь с их соком в единую эмульсию.'
      },
      {
        stepNumber: 5,
        instruction: 'Посыпьте свежими листиками кинзы и тонкими колечками острого перца.',
        tip: 'Подавать с горячим кукурузным хлебом мчади или сыром сулугуни.'
      }
    ],
    chefSecrets: [
      'Орехи должны быть светлыми, без горечи — они отдают шелковистый ореховый крем.',
      'Винный кахетинский уксус подчеркивает сладость южных спелых помидоров.',
      'Растирание орехов с солью в ступке выдавливает натуральное ореховое масло.'
    ],
    techCard: {
      dishYield: '300 г на порцию',
      kzhbu: {
        calories: 168,
        proteins: 4.8,
        fats: 13.5,
        carbs: 7.2
      },
      semiFinishedProducts: ['Ореховый соус баже для салата'],
      technologicalProcess: 'Холодный цех. Приготовление под заказ.',
      servingTemperature: '14-16°C',
      storageConditions: 'Ореховый соус хранится при +2...+4°C до 48 часов.'
    }
  },
  {
    id: 'achichuk-salad',
    title: 'Ачичук (Шакароб) — традиционный салат к плову',
    category: 'salads',
    description: 'Обязательное дополнение к горячему ферганскому или чайханскому плову. Тончайшие, прозрачные лепестки сладких грунтовых томатов, сочный белый лук, острый перец и свежий базилик (райхон). Без капли масла — салат плавает в собственном концентрированном томатном нектаре.',
    prepTime: 10,
    cookTime: 0,
    difficulty: 'Легко',
    servings: 4,
    tags: ['Салат', 'Восточная кухня', 'Томаты', 'Без масла', 'К плову'],
    ingredients: [
      { name: 'Помидоры спелые мясистые грунтовые (Юсуповские или Бакинские)', amount: 500, unit: 'г', coldWastePercent: 5, heatLossPercent: 0, estimatedCostPerKg: 220, category: 'Овощи' },
      { name: 'Лук репчатый белый салатный', amount: 150, unit: 'г', coldWastePercent: 12, heatLossPercent: 0, estimatedCostPerKg: 50, category: 'Овощи' },
      { name: 'Острый стручковый перец чили', amount: 0.5, unit: 'шт', coldWastePercent: 10, heatLossPercent: 0, estimatedCostPerKg: 350, category: 'Овощи' },
      { name: 'Базилик фиолетовый свежий (райхон)', amount: 20, unit: 'г', coldWastePercent: 10, heatLossPercent: 0, estimatedCostPerKg: 450, category: 'Зелень' },
      { name: 'Соль морская мелкая', amount: 1, unit: 'ч. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 20, category: 'Специи' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Лук очистите и нарежьте на весу острейшим ножом тончайшими, полупрозрачными полукольцами толщиной менее миллиметра.',
        timerSeconds: 180,
        tip: 'Нарезка на весу — традиционный узбекский навык, предотвращающий замятие слоев лука.'
      },
      {
        stepNumber: 2,
        instruction: 'Промойте нарезанный лук в ледяной воде и слегка отожмите руками в полотенце.',
        timerSeconds: 120,
        tip: 'Ледяное промывание убирает едкую серную горечь, оставляя хруст и сладость.'
      },
      {
        stepNumber: 3,
        instruction: 'Помидоры держите на ладони и на весу срезайте тончайшие пластинки прямо в миску к луку. Сердцевину с семенами и соком также отправляйте в миску.',
        timerSeconds: 240,
        tip: 'Нож должен быть бритвенно острым, чтобы томат не сминался, а резался тончайшей лентой.'
      },
      {
        stepNumber: 4,
        instruction: 'Острый перец нарежьте тончайшими микрокольцами, фиолетовый райхон порвите руками.',
        timerSeconds: 60,
        tip: 'Райхон (фиолетовый базилик) дает сахаристо-анисовый аромат, отличающий шакароб.'
      },
      {
        stepNumber: 5,
        instruction: 'Посолите щепоткой морской соли ровно за 2 минуты до подачи и аккуратно перемешайте пальцами снизу вверх. Никакого растительного масла не добавляют!',
        timerSeconds: 60,
        tip: 'Соль моментально вытягивает сок из помидоров, создавая натуральную кислую заправку, расщепляющую жир плова.'
      }
    ],
    chefSecrets: [
      'В настоящий Ачичук никогда не льют растительное масло! Его функция — освежать рецепторы от жирного мяса и риса.',
      'Тонкость нарезки решает: чем тоньше помидор, тем быстрее он пустит прозрачный сок.',
      'Подавать строго свежим: через 15 минут тонкие томаты раскиснут.'
    ],
    techCard: {
      dishYield: '170 г на порцию',
      kzhbu: {
        calories: 32,
        proteins: 1.1,
        fats: 0.2,
        carbs: 6.5
      },
      semiFinishedProducts: ['Томаты и лук на весу тонкой нарезки'],
      technologicalProcess: 'Нарезка на весу бритвенным шеф-ножом. Засолка строго перед отдачей.',
      servingTemperature: '12-14°C',
      storageConditions: 'Приготовление только под заказ. Хранению не подлежит.'
    }
  },
  {
    id: 'caprese-classic',
    title: 'Капрезе с моцареллой ди буффала и соусом песто',
    category: 'salads',
    description: 'Итальянский триколор: сочные сладкие томаты сорта Бычье сердце, сливочные шарики Моцареллы из молока черных буйволиц, свежий базилик и свежеприготовленный генуэзский песто.',
    prepTime: 10,
    cookTime: 0,
    difficulty: 'Легко',
    servings: 2,
    tags: ['Италия', 'Капрезе', 'Моцарелла', 'Томаты', 'Песто'],
    ingredients: [
      { name: 'Помидоры грунтовые спелые крупные', amount: 350, unit: 'г', coldWastePercent: 5, heatLossPercent: 0, estimatedCostPerKg: 200, category: 'Овощи' },
      { name: 'Моцарелла ди Буффала (или свежая чильеджини)', amount: 200, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1100, category: 'Сыры' },
      { name: 'Базилик зеленый генуэзский свежий', amount: 30, unit: 'г', coldWastePercent: 10, heatLossPercent: 0, estimatedCostPerKg: 500, category: 'Зелень' },
      { name: 'Орехи кедровые сибирские', amount: 25, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 2200, category: 'Орехи' },
      { name: 'Сыр Пармезан выдержанный тертый', amount: 30, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1800, category: 'Сыры' },
      { name: 'Оливковое масло первого холодного отжима (Tuscan IGP)', amount: 50, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1200, category: 'Масла' },
      { name: 'Крем бальзамический густой выдержанный из Модены', amount: 15, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 900, category: 'Соусы' },
      { name: 'Морская соль в хлопьях (Fleur de Sel)', amount: 1, unit: 'щепотка', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 150, category: 'Специи' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Приготовьте свежий соус Песто: в ступке или блендере разотрите листья базилика с кедровыми орехами, зубчиком чеснока, пармезаном и оливковым маслом.',
        timerSeconds: 180,
        tip: 'Не перегревайте блендером — соус должен остаться ярко-зеленым и ароматным.'
      },
      {
        stepNumber: 2,
        instruction: 'Томаты нарежьте кружками толщиной 7-8 мм. Шарики моцареллы нарежьте кружками аналогичной толщины.',
        timerSeconds: 120,
        tip: 'Моцарелла должна быть комнатной температуры (достаньте из рассола за 30 минут), чтобы раскрылся сливочный букет.'
      },
      {
        stepNumber: 3,
        instruction: 'На плоское сервировочное блюдо выложите веером, чередуя: ломтик томата, листик базилика, ломтик моцареллы.',
        timerSeconds: 120,
        tip: 'Чередование создает знаменитые цвета итальянского флага: зеленый, белый, красный.'
      },
      {
        stepNumber: 4,
        instruction: 'Посыпьте хлопьями морской соли Fleur de Sel и свежемолотым черным перцем.',
        timerSeconds: 60,
        tip: 'Хлопьевая соль дает приятный хруст при надкусывании томата.'
      },
      {
        stepNumber: 5,
        instruction: 'Сбрызните оливковым маслом, точечно нанесите зеленый соус песто и тонкие нити выдержанного бальзамического крема из Модены.',
        timerSeconds: 60,
        tip: 'Бальзамический крем добавляет деликатную кисло-сладкую ноту виноградного сусла.'
      }
    ],
    chefSecrets: [
      'Моцарелла из буйволиного молока в разы сочнее и нежнее коровьей, с отчетливым молочным соком.',
      'Томаты для Капрезе никогда не охлаждают в холодильнике перед подачей — холод убивает их вкус.'
    ],
    techCard: {
      dishYield: '280 г на порцию',
      kzhbu: {
        calories: 225,
        proteins: 11.4,
        fats: 18.2,
        carbs: 4.1
      },
      semiFinishedProducts: ['Песто генуэзский свежий', 'Кружки моцареллы и томатов'],
      technologicalProcess: 'Холодный цех. Выкладка чередованием непосредственно перед сервировкой.',
      servingTemperature: '16-18°C',
      storageConditions: 'Приготовление исключительно a la minute.'
    }
  }
,
  {
    "id": "salad-nicoise-tuna",
    "title": "Салат Нисуаз со стейком из тунца и анчоусами",
    "category": "salads",
    "description": "Легендарный салат Лазурного берега: слегка обжаренный розовый тунец блюфин, хрустящая молодая стручковая фасоль, беби-картофель, перепелиные яйца, маслины каламата и медово-горчичная заправка с анчоусами.",
    "prepTime": 20,
    "cookTime": 10,
    "difficulty": "Средне",
    "servings": 2,
    "tags": [
      "Салаты",
      "Нисуаз",
      "Тунец",
      "Франция",
      "Морепродукты"
    ],
    "ingredients": [
      {
        "name": "Филе свежего тунца (стейк)",
        "amount": 250,
        "unit": "г",
        "estimatedCostPerKg": 1600,
        "category": "Рыба"
      },
      {
        "name": "Фасоль стручковая кенийская",
        "amount": 120,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 450,
        "category": "Овощи"
      },
      {
        "name": "Картофель молодой беби",
        "amount": 150,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 80,
        "category": "Овощи"
      },
      {
        "name": "Яйца перепелиные",
        "amount": 6,
        "unit": "шт",
        "estimatedCostPerKg": 350,
        "category": "Яйца"
      },
      {
        "name": "Маслины Каламата с косточкой",
        "amount": 50,
        "unit": "г",
        "estimatedCostPerKg": 750,
        "category": "Бакалея"
      },
      {
        "name": "Томаты черри спелые",
        "amount": 100,
        "unit": "г",
        "estimatedCostPerKg": 250,
        "category": "Овощи"
      },
      {
        "name": "Филе анчоусов в масле",
        "amount": 20,
        "unit": "г",
        "estimatedCostPerKg": 1800,
        "category": "Рыба"
      },
      {
        "name": "Микс листьев салата (романо, фризе)",
        "amount": 80,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 500,
        "category": "Зелень"
      },
      {
        "name": "Масло оливковое Extra Virgin и дижонская горчица",
        "amount": 40,
        "unit": "мл",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Беби-картофель отварите в мундире до мягкости (12 мин), разрежьте пополам и подрумяньте на сковороде с каплей оливкового масла.",
        "timerSeconds": 720,
        "tip": "Обжаренный картофель приобретает аппетитную корочку."
      },
      {
        "stepNumber": 2,
        "instruction": "Стручковую фасоль бланшируйте в кипящей подсоленной воде строго 2 минуты, затем сразу окуните в ледяную воду.",
        "timerSeconds": 120,
        "tip": "Шоковое охлаждение льдом фиксирует ярко-зеленый цвет и хрусткость."
      },
      {
        "stepNumber": 3,
        "instruction": "Перепелиные яйца сварите 2.5 минуты (всмятку) и остудите.",
        "timerSeconds": 150,
        "tip": "Кремовый желток перепелиного яйца служит дополнительным соусом."
      },
      {
        "stepNumber": 4,
        "instruction": "Стейк тунца посолите, смажьте маслом и обжарьте на раскаленной сковороде гриль по 45 секунд с каждой стороны — внутри тунец должен оставаться ярко-розовым (прожарка Rare). Нарежьте слайсами.",
        "timerSeconds": 90,
        "tip": "Пересушенный тунец теряет сочность и становится похож на сухую консерву."
      },
      {
        "stepNumber": 5,
        "instruction": "Для заправки взбейте масло Extra Virgin, ложку дижонской горчицы, сок лимона и пару растертых анчоусов.",
        "timerSeconds": 60,
        "tip": "Анчоусы придают знаменитый соленый морской оттенок."
      },
      {
        "stepNumber": 6,
        "instruction": "Выложите на широкое блюдо микс салата, овощи, половинки яиц, оливки и теплые слайсы тунца, сбрызните заправкой.",
        "timerSeconds": 60,
        "tip": "Подавайте немедленно."
      }
    ],
    "chefSecrets": [
      "Обжаривайте тунца не дольше 45 секунд на сторону на раскаленном чугуне — середина обязана быть сашими."
    ],
    "techCard": {
      "dishYield": "2 порции по 350 г",
      "kzhbu": {
        "calories": 165,
        "proteins": 15.2,
        "fats": 8.9,
        "carbs": 6.1
      },
      "semiFinishedProducts": [
        "Бланшированная фасоль",
        "Анчоусная заправка Нисуаз"
      ],
      "technologicalProcess": "Кратковременная высокотемпературная обжарка рыбы с композиционной сборкой свежих и термически обработанных компонентов.",
      "servingTemperature": "18-20°C (теплый тунец и картофель).",
      "storageConditions": "Употреблять сразу."
    }
  },
  {
    "id": "salad-warm-beef-eggplant",
    "title": "Теплый салат с говяжьей вырезкой и баклажанами гриль",
    "category": "salads",
    "description": "Ресторанный теплый салат: нежнейшие ломтики говяжьего филе миньон, карамелизованные кружки баклажанов, болгарский перец гриль, кедровые орешки и пикантная азиатская заправка на основе кунжутного масла и устричного соуса.",
    "prepTime": 15,
    "cookTime": 12,
    "difficulty": "Средне",
    "servings": 2,
    "tags": [
      "Салаты",
      "Теплый салат",
      "Говядина",
      "Баклажаны",
      "Гриль"
    ],
    "ingredients": [
      {
        "name": "Говяжья вырезка (филе)",
        "amount": 250,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 1400,
        "category": "Мясо"
      },
      {
        "name": "Баклажаны свежие грунтовые",
        "amount": 200,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 160,
        "category": "Овощи"
      },
      {
        "name": "Перец болгарский красный",
        "amount": 120,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 200,
        "category": "Овощи"
      },
      {
        "name": "Салатный микс (рукола, корн)",
        "amount": 60,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 550,
        "category": "Зелень"
      },
      {
        "name": "Орехи кедровые обжаренные",
        "amount": 20,
        "unit": "г",
        "estimatedCostPerKg": 2400,
        "category": "Орехи"
      },
      {
        "name": "Соус устричный премиум",
        "amount": 30,
        "unit": "мл",
        "estimatedCostPerKg": 650,
        "category": "Соусы"
      },
      {
        "name": "Масло кунжутное нерафинированное",
        "amount": 15,
        "unit": "мл",
        "estimatedCostPerKg": 850,
        "category": "Масла"
      },
      {
        "name": "Чеснок и свежий перец чили",
        "amount": 10,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 250,
        "category": "Овощи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Баклажаны нарежьте крупными кружками толщиной 1.5 см, надсеките сеточкой, смажьте маслом и обжарьте на гриле по 3 минуты до мягкости и карамельных полос.",
        "timerSeconds": 360,
        "tip": "Сеточка позволяет жару быстрее проникнуть в сердцевину баклажана."
      },
      {
        "stepNumber": 2,
        "instruction": "Говяжью вырезку нарежьте тонкими слайсами поперек волокон.",
        "timerSeconds": 120,
        "tip": "Поперечная нарезка делает мясо тающим."
      },
      {
        "stepNumber": 3,
        "instruction": "В раскаленном воке на капле растительного масла обжарьте мясо с рубленым чесноком на максимальном огне всего 90 секунд.",
        "timerSeconds": 90,
        "tip": "Быстрая обжарка запечатывает все мясные соки."
      },
      {
        "stepNumber": 4,
        "instruction": "Добавьте соломку болгарского перца, устричный соус и кунжутное масло, прогрейте еще 30 секунд.",
        "timerSeconds": 30,
        "tip": "Устричный соус карамелизует говядину аппетитной глазурью."
      },
      {
        "stepNumber": 5,
        "instruction": "На подушку из руколы выложите горячие баклажаны гриль и сочную говядину с соусом из вока, посыпьте кедровыми орехами.",
        "timerSeconds": 60,
        "tip": "Подавайте сразу горячим."
      }
    ],
    "chefSecrets": [
      "Устричный соус в сочетании с каплей кунжутного масла создает взрывной вкус умами, который идеально обволакивает нежную говядину."
    ],
    "techCard": {
      "dishYield": "2 порции по 320 г",
      "kzhbu": {
        "calories": 158,
        "proteins": 14.5,
        "fats": 8.4,
        "carbs": 5.8
      },
      "semiFinishedProducts": [
        "Загриленные баклажаны",
        "Слайсированная говяжья вырезка"
      ],
      "technologicalProcess": "Стир-фрай обжарка мяса в воке с компоновкой на свежей зелени.",
      "servingTemperature": "55-60°C.",
      "storageConditions": "Употреблять сразу после приготовления."
    }
  },
  {
    "id": "salad-crispy-eggplant-sweet-chili",
    "title": "Теплый салат с хрустящими баклажанами и сладким чили",
    "category": "salads",
    "description": "Главный хит современных ресторанов: баклажаны в ультрахрустящей панировке из кукурузного крахмала, спелые бакинские томаты, сливочный крем-чиз, свежая кинза, кунжут и кисло-сладкий соус Свит Чили.",
    "prepTime": 15,
    "cookTime": 10,
    "difficulty": "Легко",
    "servings": 2,
    "tags": [
      "Салаты",
      "Хит",
      "Баклажаны",
      "Сладкий чили",
      "Томаты"
    ],
    "ingredients": [
      {
        "name": "Баклажаны свежие плотные",
        "amount": 300,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 160,
        "category": "Овощи"
      },
      {
        "name": "Помидоры бакинские розовые",
        "amount": 250,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 240,
        "category": "Овощи"
      },
      {
        "name": "Крахмал кукурузный (для панировки)",
        "amount": 60,
        "unit": "г",
        "estimatedCostPerKg": 110,
        "category": "Бакалея"
      },
      {
        "name": "Соус Свит Чили сладкий",
        "amount": 60,
        "unit": "мл",
        "estimatedCostPerKg": 320,
        "category": "Соусы"
      },
      {
        "name": "Сыр сливочный творожный (крем-чиз)",
        "amount": 80,
        "unit": "г",
        "estimatedCostPerKg": 650,
        "category": "Сыры"
      },
      {
        "name": "Кинза свежая (листья)",
        "amount": 20,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 450,
        "category": "Зелень"
      },
      {
        "name": "Семена кунжута белого обжаренные",
        "amount": 10,
        "unit": "г",
        "estimatedCostPerKg": 350,
        "category": "Специи"
      },
      {
        "name": "Масло растительное для фритюра",
        "amount": 400,
        "unit": "мл",
        "estimatedCostPerKg": 120,
        "category": "Масла"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Баклажаны очистите от кожуры «зеброй» или полностью и нарежьте крупными кубиками со стороной 3 см.",
        "timerSeconds": 180,
        "tip": "Крупный кубик остается внутри кремовым и сочным, не пересыхая."
      },
      {
        "stepNumber": 2,
        "instruction": "Сбрызните баклажаны водой из пульверизатора и щедро обваляйте в кукурузном крахмале, чтобы получилась толстая сухая шубка.",
        "timerSeconds": 120,
        "tip": "Влага помогает крахмалу намертво прилипнуть и создать стеклянную корочку."
      },
      {
        "stepNumber": 3,
        "instruction": "Жарьте во фритюре при 180°C 4-5 минут до твердой хрустящей оболочки. Откиньте на салфетку.",
        "timerSeconds": 300,
        "tip": "Баклажаны должны звонко стучать по тарелке."
      },
      {
        "stepNumber": 4,
        "instruction": "Помидоры нарежьте крупными дольками.",
        "timerSeconds": 60,
        "tip": "Используйте сладкие мясистые томаты комнатной температуры."
      },
      {
        "stepNumber": 5,
        "instruction": "В миске смешайте горячие хрустящие баклажаны, помидоры и соус Свит Чили. Быстро перемешайте.",
        "timerSeconds": 30,
        "tip": "Смешивайте строго перед подачей, чтобы корочка не размокла."
      },
      {
        "stepNumber": 6,
        "instruction": "Выложите на блюдо, украсьте кнелями из сливочного сыра, листьями кинзы и посыпьте кунжутом.",
        "timerSeconds": 60,
        "tip": "Подавайте немедленно."
      }
    ],
    "chefSecrets": [
      "Кукурузный крахмал (в отличие от картофельного или муки) создает тонкую звонкую «стеклянную» корочку, которая не раскисает от соуса 10 минут."
    ],
    "techCard": {
      "dishYield": "2 порции по 320 г",
      "kzhbu": {
        "calories": 195,
        "proteins": 3.8,
        "fats": 11.2,
        "carbs": 19.8
      },
      "semiFinishedProducts": [
        "Баклажаны в крахмальной панировке"
      ],
      "technologicalProcess": "Фритирование овощей в крахмале при 180°C с быстрой глейзировкой.",
      "servingTemperature": "Теплый (баклажаны 60°C, томаты 20°C).",
      "storageConditions": "Употреблять сразу."
    }
  },
  {
    "id": "salad-duck-mango-hoisin",
    "title": "Салат с хрустящей уткой, спелым манго и соусом Хойсин",
    "category": "salads",
    "description": "Изысканный паназиатский салат: ломтики утиной грудки пяти специй (усянмянь) с хрустящей кожей, сладкое тайское манго, огуречная соломка, зерна граната, кешью и глазурь хойсин-слива.",
    "prepTime": 20,
    "cookTime": 15,
    "difficulty": "Средне",
    "servings": 2,
    "tags": [
      "Салаты",
      "Утка",
      "Манго",
      "Азия",
      "Изысканно"
    ],
    "ingredients": [
      {
        "name": "Грудка утиная филе с кожей",
        "amount": 250,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 950,
        "category": "Птица"
      },
      {
        "name": "Манго спелое сладкое",
        "amount": 150,
        "unit": "г",
        "coldWastePercent": 25,
        "estimatedCostPerKg": 350,
        "category": "Фрукты"
      },
      {
        "name": "Огурцы свежие (соломка без семян)",
        "amount": 120,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 120,
        "category": "Овощи"
      },
      {
        "name": "Микс зелени (мицуна, кинза, мята)",
        "amount": 60,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 500,
        "category": "Зелень"
      },
      {
        "name": "Соус Хойсин китайский",
        "amount": 35,
        "unit": "мл",
        "estimatedCostPerKg": 450,
        "category": "Соусы"
      },
      {
        "name": "Соус сливовый сладкий",
        "amount": 20,
        "unit": "мл",
        "estimatedCostPerKg": 380,
        "category": "Соусы"
      },
      {
        "name": "Орехи кешью жареные",
        "amount": 25,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Орехи"
      },
      {
        "name": "Зерна спелого граната",
        "amount": 20,
        "unit": "г",
        "estimatedCostPerKg": 300,
        "category": "Фрукты"
      },
      {
        "name": "Смесь 5 специй Усянмянь",
        "amount": 2,
        "unit": "г",
        "estimatedCostPerKg": 900,
        "category": "Специи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Кожу утиной грудки надсеките мелким ромбом, не прорезая мясо. Натрите смесью пяти специй и солью.",
        "timerSeconds": 180,
        "tip": "Насечки помогают жиру полностью вытопиться, делая кожу суперхрустящей."
      },
      {
        "stepNumber": 2,
        "instruction": "Положите грудку на ХОЛОДНУЮ сухую сковороду кожей вниз, включите средний огонь и вытапливайте жир 8-10 минут. Переверните на 3 минуты, затем доведите в духовке при 180°C 5 минут (прожарка Medium).",
        "timerSeconds": 900,
        "tip": "Старт с холодной сковороды — секрет идеальной хрустящей утиной кожи."
      },
      {
        "stepNumber": 3,
        "instruction": "Дайте утке отдохнуть 5 минут на доске, затем нарежьте тонкими диагональными слайсами.",
        "timerSeconds": 300,
        "tip": "Отдых сохраняет розовый цвет и сок внутри волокон."
      },
      {
        "stepNumber": 4,
        "instruction": "Манго и огурец нарежьте тонкой изящной соломкой.",
        "timerSeconds": 180,
        "tip": "Контраст сладкого манго и свежего огурца балансирует утиный жир."
      },
      {
        "stepNumber": 5,
        "instruction": "Для заправки смешайте соус хойсин со сливовым соусом и каплей рисового уксуса.",
        "timerSeconds": 60,
        "tip": "Глазурь должна быть глянцевой и тягучей."
      },
      {
        "stepNumber": 6,
        "instruction": "Соберите салат: зелень, соломка огурца и манго, теплые слайсы утки, полейте соусом хойсин, посыпьте жареным кешью и рубиновыми зернами граната.",
        "timerSeconds": 60,
        "tip": "Подавайте сразу."
      }
    ],
    "chefSecrets": [
      "Начало жарки утиной грудки со строго холодной сковороды позволяет вытопить подкожный жир без подгорания мяса."
    ],
    "techCard": {
      "dishYield": "2 порции по 300 г",
      "kzhbu": {
        "calories": 215,
        "proteins": 13.8,
        "fats": 12.4,
        "carbs": 12.1
      },
      "semiFinishedProducts": [
        "Запеченная утиная грудка",
        "Хойсин-сливовый дрессинг"
      ],
      "technologicalProcess": "Медленное вытапливание жира с последующим запеканием и компоновкой с фруктами.",
      "servingTemperature": "25-30°C (теплая утка).",
      "storageConditions": "Употреблять сразу."
    }
  },
  {
    "id": "salad-roastbeef-sundried-tomatoes",
    "title": "Салат с розовым ростбифом, вялеными томатами и пармезаном",
    "category": "salads",
    "description": "Благородный мясной салат: домашний ростбиф из говяжьего огузка медиум-прожарки, пряная рукола, вяленые томаты в масле, стружка выдержанного сыра Грана Падано и крем-бальзамик.",
    "prepTime": 20,
    "cookTime": 20,
    "difficulty": "Средне",
    "servings": 4,
    "tags": [
      "Салаты",
      "Ростбиф",
      "Рукола",
      "Пармезан",
      "Вяленые томаты"
    ],
    "ingredients": [
      {
        "name": "Говядина вырезка или огузок (для ростбифа)",
        "amount": 400,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 1200,
        "category": "Мясо"
      },
      {
        "name": "Рукола свежая пряная",
        "amount": 150,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 650,
        "category": "Зелень"
      },
      {
        "name": "Вяленые томаты в оливковом масле",
        "amount": 80,
        "unit": "г",
        "estimatedCostPerKg": 850,
        "category": "Овощи"
      },
      {
        "name": "Сыр Пармезан или Грана Падано",
        "amount": 50,
        "unit": "г",
        "estimatedCostPerKg": 1600,
        "category": "Сыры"
      },
      {
        "name": "Каперсы маринованные",
        "amount": 20,
        "unit": "г",
        "estimatedCostPerKg": 750,
        "category": "Бакалея"
      },
      {
        "name": "Соус крем-бальзамик темный",
        "amount": 30,
        "unit": "мл",
        "estimatedCostPerKg": 500,
        "category": "Соусы"
      },
      {
        "name": "Масло оливковое Extra Virgin",
        "amount": 40,
        "unit": "мл",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Дижонская горчица и розмарин",
        "amount": 15,
        "unit": "г",
        "estimatedCostPerKg": 450,
        "category": "Специи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Говядину обвяжите кулинарной нитью, обмажьте дижонской горчицей, солью, перцем и рубленым розмарином.",
        "timerSeconds": 180,
        "tip": "Обвязывание обеспечивает равномерную цилиндрическую форму."
      },
      {
        "stepNumber": 2,
        "instruction": "Обжарьте кусок со всех сторон на раскаленной сковороде по 1 минуте до румяной корочки, затем запекайте в духовке при 130°C до внутренней температуры 54°C (около 25 минут).",
        "timerSeconds": 1500,
        "tip": "Низкотемпературное запекание гарантирует сочный розовый срез от края до края."
      },
      {
        "stepNumber": 3,
        "instruction": "Остудите ростбиф и уберите в холод на 2 часа. Нарежьте тончайшими полупрозрачными слайсами.",
        "timerSeconds": 7200,
        "tip": "Холодное мясо режется легко как бумага."
      },
      {
        "stepNumber": 4,
        "instruction": "Руколу заправьте оливковым маслом и соком лимона, выложите на широкие тарелки.",
        "timerSeconds": 60,
        "tip": "Ореховая горчинка руколы идеальна к говядине."
      },
      {
        "stepNumber": 5,
        "instruction": "Разложите ломтики ростбифа, лепестки вяленых томатов, каперсы и тонкие лепестки пармезана, срезанные овощечисткой.",
        "timerSeconds": 120,
        "tip": "Стружка пармезана тает на теплом языке."
      },
      {
        "stepNumber": 6,
        "instruction": "Украсьте узором из густого крем-бальзамика.",
        "timerSeconds": 30,
        "tip": "Подавайте с хрустящими гриссини."
      }
    ],
    "chefSecrets": [
      "Запекание ростбифа при щадящих 130°C с контролем щупом (54°C в сердцевине) дает абсолютный идеальный Medium Rare без серых переваренных краев."
    ],
    "techCard": {
      "dishYield": "4 порции по 220 г",
      "kzhbu": {
        "calories": 178,
        "proteins": 16.5,
        "fats": 10.8,
        "carbs": 3.8
      },
      "semiFinishedProducts": [
        "Ростбиф запеченный охлажденный"
      ],
      "technologicalProcess": "Низкотемпературное запекание мяса с тонкой слайсерной нарезкой.",
      "servingTemperature": "16-18°C.",
      "storageConditions": "Ростбиф хранится в вакууме до 5 суток."
    }
  },
  {
    "id": "salad-shuba-festive",
    "title": "Салат Сельдь под шубой ресторанный со слабосоленой сельдью",
    "category": "salads",
    "description": "Главный праздничный фаворит в ресторанном исполнении: слабосоленая тихоокеанская сельдь пряного посола, запеченные овощи (свекла, морковь, картофель), кислое яблоко Антоновка и домашний майонез на перепелиных желтках.",
    "prepTime": 30,
    "cookTime": 40,
    "difficulty": "Средне",
    "servings": 6,
    "tags": [
      "Салаты",
      "Сельдь под шубой",
      "Праздник",
      "Классика",
      "Рыба"
    ],
    "ingredients": [
      {
        "name": "Филе сельди слабосоленой (матиас)",
        "amount": 300,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 380,
        "category": "Рыба"
      },
      {
        "name": "Свекла столовая (запеченная в фольге)",
        "amount": 300,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 35,
        "category": "Овощи"
      },
      {
        "name": "Картофель (запеченный в мундире)",
        "amount": 250,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 40,
        "category": "Овощи"
      },
      {
        "name": "Морковь (запеченная)",
        "amount": 200,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 40,
        "category": "Овощи"
      },
      {
        "name": "Яблоко зеленое кислое (Антоновка)",
        "amount": 150,
        "unit": "г",
        "coldWastePercent": 20,
        "estimatedCostPerKg": 130,
        "category": "Фрукты"
      },
      {
        "name": "Яйца куриные свежие",
        "amount": 4,
        "unit": "шт",
        "estimatedCostPerKg": 140,
        "category": "Яйца"
      },
      {
        "name": "Лук репчатый белый (маринованный)",
        "amount": 80,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 30,
        "category": "Овощи"
      },
      {
        "name": "Майонез домашний на желтках",
        "amount": 180,
        "unit": "г",
        "estimatedCostPerKg": 220,
        "category": "Соусы"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Свеклу, морковь и картофель вымойте, заверните в фольгу и запеките в духовке при 180°C до мягкости (около 45 минут). Остудите и очистите.",
        "timerSeconds": 2700,
        "tip": "Запекание вместо варки в воде сохраняет сладость, цвет и сухость овощей — салат не потечет."
      },
      {
        "stepNumber": 2,
        "instruction": "Лук нарежьте мелким кубиком и замаринуйте в яблочном уксусе с сахаром на 10 минут, затем отожмите.",
        "timerSeconds": 600,
        "tip": "Маринование убирает едкую луковую горечь."
      },
      {
        "stepNumber": 3,
        "instruction": "Сельдь нарежьте аккуратным мелким кубиком. Овощи, яйца и кислое яблоко натрите на средней терке.",
        "timerSeconds": 300,
        "tip": "Кислое яблоко дает потрясающую свежесть между слоями."
      },
      {
        "stepNumber": 4,
        "instruction": "Соберите салат в кулинарном кольце слоями: тертый картофель, легкая сетка майонеза, сельдь с маринованным луком, кислое яблоко, морковь, тертый белок яиц, и финальный пышный слой свеклы.",
        "timerSeconds": 420,
        "tip": "Не приминайте слои ложкой — салат должен оставаться пуховым."
      },
      {
        "stepNumber": 5,
        "instruction": "Верх покройте тонким слоем майонеза и посыпьте тертыми ярко-желтыми желтками. Оставьте в холодильнике на 4 часа.",
        "timerSeconds": 14400,
        "tip": "Пропитка объединяет вкусы."
      }
    ],
    "chefSecrets": [
      "Запекание корнеплодов в фольге (вместо варки) оставляет все сахара внутри и предотвращает водянистость слоев."
    ],
    "techCard": {
      "dishYield": "Форма 20 см (1400 г, 6 порций)",
      "kzhbu": {
        "calories": 188,
        "proteins": 6.8,
        "fats": 12.5,
        "carbs": 11.8
      },
      "semiFinishedProducts": [
        "Запеченные корнеплоды",
        "Маринованный лук"
      ],
      "technologicalProcess": "Послойная формовка тертых термически обработанных ингредиентов с соусом.",
      "servingTemperature": "6-8°C.",
      "storageConditions": "В холодильнике до 48 часов."
    }
  },
  {
    "id": "salad-mimosa-salmon",
    "title": "Салат Мимоза нежная с лососем и сливочным маслом",
    "category": "salads",
    "description": "Воздушный праздничный слоеный салат: отварной или слабосоленый дикий лосось, запеченная морковь, беби-картофель, воздушные натертые белки, тертое замороженное сливочное масло и шапка из пушистых желтков.",
    "prepTime": 25,
    "cookTime": 25,
    "difficulty": "Легко",
    "servings": 6,
    "tags": [
      "Салаты",
      "Мимоза",
      "Лосось",
      "Праздник",
      "Слоеная классика"
    ],
    "ingredients": [
      {
        "name": "Лосось свежий запеченный или с/с филе",
        "amount": 300,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 1400,
        "category": "Рыба"
      },
      {
        "name": "Картофель отварной",
        "amount": 200,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 40,
        "category": "Овощи"
      },
      {
        "name": "Морковь отварная сладкая",
        "amount": 150,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 40,
        "category": "Овощи"
      },
      {
        "name": "Яйца куриные категории С0",
        "amount": 5,
        "unit": "шт",
        "estimatedCostPerKg": 160,
        "category": "Яйца"
      },
      {
        "name": "Сливочное масло 82.5% замороженное",
        "amount": 40,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Лук зеленый свежий",
        "amount": 30,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 350,
        "category": "Зелень"
      },
      {
        "name": "Майонез домашний провансаль",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 220,
        "category": "Соусы"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Лосось разберите вилкой на мелкие нежные волокна, удалив малейшие косточки.",
        "timerSeconds": 180,
        "tip": "Качественный лосось делает салат ресторанным."
      },
      {
        "stepNumber": 2,
        "instruction": "Яйца сварите вкрутую (9 минут), охладите в ледяной воде. Отделите белки от желтков. Белки натрите на крупной терке, желтки — на самой мелкой в пух.",
        "timerSeconds": 240,
        "tip": "Раздельное натирание создает контраст текстур."
      },
      {
        "stepNumber": 3,
        "instruction": "В кулинарное кольцо выложите слой картофеля, смажьте легкой сеткой майонеза. Затем выложите лосось и мелкорубленый зеленый лук.",
        "timerSeconds": 180,
        "tip": "Зеленый лук освежает рыбу."
      },
      {
        "stepNumber": 4,
        "instruction": "На рыбу прямо из морозилки натрите замороженное сливочное масло на мелкой терке.",
        "timerSeconds": 60,
        "tip": "Тончайшая стружка масла растает и придаст салату легендарный бархатный сливочный вкус."
      },
      {
        "stepNumber": 5,
        "instruction": "Выложите слой натертых белков, затем слой моркови с майонезом, а верхушку щедро засыпьте пушистым ярко-желтым желтком.",
        "timerSeconds": 180,
        "tip": "Верхний слой желтков ни в коем случае не смазывайте соусом — он должен напоминать цветущую мимозу."
      }
    ],
    "chefSecrets": [
      "Слой замороженного сливочного масла поверх рыбы — аутентичный секрет советских кремлевских шеф-поваров."
    ],
    "techCard": {
      "dishYield": "Форма 18 см (1100 г, 6 порций)",
      "kzhbu": {
        "calories": 238,
        "proteins": 9.8,
        "fats": 18.2,
        "carbs": 8.5
      },
      "semiFinishedProducts": [
        "Разобранный лосось",
        "Охлажденные тертые компоненты"
      ],
      "technologicalProcess": "Послойная воздушная укладка без уплотнения.",
      "servingTemperature": "6-8°C.",
      "storageConditions": "В холодильнике до 36 часов."
    }
  },
  {
    "id": "salad-tabbouleh-bulgur",
    "title": "Ливанский салат Табуле с булгуром, петрушкой и мятой",
    "category": "salads",
    "description": "Ближневосточный освежающий салат: гигантская охапка кудрявой петрушки и мяты, мелкий запаренный булгур, спелые томаты конкассе, лимонный сок прямого отжима и оливковое масло Extra Virgin.",
    "prepTime": 15,
    "cookTime": 10,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Салаты",
      "Табуле",
      "Ливан",
      "Петрушка",
      "Булгур"
    ],
    "ingredients": [
      {
        "name": "Петрушка свежая кудрявая или листовая (только листья)",
        "amount": 200,
        "unit": "г",
        "coldWastePercent": 30,
        "estimatedCostPerKg": 350,
        "category": "Зелень"
      },
      {
        "name": "Мята свежая перечная",
        "amount": 40,
        "unit": "г",
        "coldWastePercent": 20,
        "estimatedCostPerKg": 450,
        "category": "Зелень"
      },
      {
        "name": "Булгур мелкого помола (кёфтелик)",
        "amount": 60,
        "unit": "г",
        "estimatedCostPerKg": 120,
        "category": "Крупы и мука"
      },
      {
        "name": "Помидоры плотные спелые",
        "amount": 200,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 180,
        "category": "Овощи"
      },
      {
        "name": "Лук зеленый молодой",
        "amount": 40,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 350,
        "category": "Зелень"
      },
      {
        "name": "Масло оливковое Extra Virgin холодного отжима",
        "amount": 50,
        "unit": "мл",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Сок лимона свежевыжатый",
        "amount": 35,
        "unit": "мл",
        "coldWastePercent": 20,
        "estimatedCostPerKg": 180,
        "category": "Фрукты"
      },
      {
        "name": "Соль морская и свежемолотый душистый перец",
        "amount": 1,
        "unit": "ч. л.",
        "estimatedCostPerKg": 50,
        "category": "Специи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Булгур мелкого помола залейте 100 мл кипятка, накройте блюдцем и оставьте на 15 минут для набухания, затем взрыхлите вилкой.",
        "timerSeconds": 900,
        "tip": "Мелкий булгур не требует варки."
      },
      {
        "stepNumber": 2,
        "instruction": "Петрушку и мяту промойте, тщательно обсушите полотенцем (ни капли воды!) и нарубите острейшим шеф-ножом.",
        "timerSeconds": 300,
        "tip": "Тупой нож давит зелень, превращая ее в кашицу — нож обязан брить."
      },
      {
        "stepNumber": 3,
        "instruction": "Помидоры освободите от жидких семян и нарежьте мякоть микрокубиком 3х3 мм.",
        "timerSeconds": 180,
        "tip": "Удаление семян предотвращает водянистость салата."
      },
      {
        "stepNumber": 4,
        "instruction": "В широкой миске соедините охапку рубленой зелени, остывший булгур, томаты и мелко нарезанный зеленый лук.",
        "timerSeconds": 60,
        "tip": "В правильном табуле зелень доминирует, а булгура совсем немного."
      },
      {
        "stepNumber": 5,
        "instruction": "Заправьте щедрой порцией оливкового масла и свежевыжатым соком лимона, посолите и перемешайте руками.",
        "timerSeconds": 60,
        "tip": "Подавайте на листьях салата Романо."
      }
    ],
    "chefSecrets": [
      "В подлинном ливанском Табуле 80% объема составляет свежая петрушка, а булгур выступает лишь легким текстурным акцентом."
    ],
    "techCard": {
      "dishYield": "4 порции по 160 г",
      "kzhbu": {
        "calories": 125,
        "proteins": 2.8,
        "fats": 8.5,
        "carbs": 9.8
      },
      "semiFinishedProducts": [
        "Запаренный мелкий булгур",
        "Рубленая зелень"
      ],
      "technologicalProcess": "Холодное смешивание рубленой зелени с распаренной крупой и цитрусовой эмульсией.",
      "servingTemperature": "14-16°C.",
      "storageConditions": "Употреблять в течение 6 часов."
    }
  },
  {
    "id": "salad-fattoush-pita",
    "title": "Левантийский салат Фатуш с хрустящей питой и сумахом",
    "category": "salads",
    "description": "Красочный ближневосточный салат: хрустящие поджаренные кусочки арабской питы, сладкие томаты, огурцы, розовый редис, свежая мята, портулак и терпкая заправка из гранатового соуса наршараб и ягодного сумаха.",
    "prepTime": 15,
    "cookTime": 5,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Салаты",
      "Фатуш",
      "Восток",
      "Хрустящая пита",
      "Сумах"
    ],
    "ingredients": [
      {
        "name": "Пита арабская или тонкий лаваш",
        "amount": 100,
        "unit": "г",
        "estimatedCostPerKg": 150,
        "category": "Хлеб"
      },
      {
        "name": "Помидоры спелые грунтовые",
        "amount": 250,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 180,
        "category": "Овощи"
      },
      {
        "name": "Огурцы короткоплодные хрустящие",
        "amount": 200,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 120,
        "category": "Овощи"
      },
      {
        "name": "Редис свежий розовый",
        "amount": 100,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 150,
        "category": "Овощи"
      },
      {
        "name": "Салат Романо",
        "amount": 100,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 400,
        "category": "Зелень"
      },
      {
        "name": "Мята и петрушка свежие",
        "amount": 30,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 450,
        "category": "Зелень"
      },
      {
        "name": "Соус гранатовый Наршараб",
        "amount": 30,
        "unit": "мл",
        "estimatedCostPerKg": 350,
        "category": "Соусы"
      },
      {
        "name": "Сумах молотый ягодный",
        "amount": 10,
        "unit": "г",
        "estimatedCostPerKg": 800,
        "category": "Специи"
      },
      {
        "name": "Масло оливковое Extra Virgin",
        "amount": 40,
        "unit": "мл",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Питу нарвите руками на небольшие кусочки, сбрызните оливковым маслом с сумахом и запеките в духовке при 200°C 5 минут до золотистого звонкого хруста.",
        "timerSeconds": 300,
        "tip": "Подсушенная пита работает как домашние сухарики."
      },
      {
        "stepNumber": 2,
        "instruction": "Огурцы и томаты нарежьте крупными деревенскими кусками, редис — тонкими хрустящими кружочками.",
        "timerSeconds": 180,
        "tip": "Крупная нарезка сохраняет сочность."
      },
      {
        "stepNumber": 3,
        "instruction": "Листья Романо нарвите руками, смешайте с листьями мяты и петрушки.",
        "timerSeconds": 60,
        "tip": "Мята придает неповторимую прохладу."
      },
      {
        "stepNumber": 4,
        "instruction": "Взбейте оливковое масло, гранатовый наршараб, сок лимона, давленый зубчик чеснока и сумах.",
        "timerSeconds": 60,
        "tip": "Сумах придает благородную рубиновую кислинку."
      },
      {
        "stepNumber": 5,
        "instruction": "В салатнике смешайте овощи и зелень с заправкой, сверху выложите хрустящие чипсы из питы и еще раз посыпьте сумахом.",
        "timerSeconds": 60,
        "tip": "Пита выкладывается перед подачей, чтобы сохранить хруст."
      }
    ],
    "chefSecrets": [
      "Сумах и наршараб создают уникальную сложную фруктовую кислотность, которая делает Фатуш несравнимым ни с одним европейским салатом."
    ],
    "techCard": {
      "dishYield": "4 порции по 220 г",
      "kzhbu": {
        "calories": 135,
        "proteins": 3.1,
        "fats": 7.2,
        "carbs": 14.8
      },
      "semiFinishedProducts": [
        "Хрустящие сухарики из питы с сумахом"
      ],
      "technologicalProcess": "Крупная нарезка свежих овощей со специями и запеченным хлебом.",
      "servingTemperature": "16-18°C.",
      "storageConditions": "Употреблять сразу."
    }
  },
  {
    "id": "salad-waldorf-classic",
    "title": "Салат Вальдорф классический с яблоком, сельдереем и грецким орехом",
    "category": "salads",
    "description": "Легендарный нью-йоркский салат из отеля «Уолдорф-Астория»: хрустящие сочные стебли черешкового сельдерея, кисло-сладкие яблоки, обжаренный грецкий орех, белый виноград без косточек и нежная сливочно-йогуртовая заправка.",
    "prepTime": 15,
    "cookTime": 0,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Салаты",
      "Вальдорф",
      "Сельдерей",
      "Яблоки",
      "Орехи"
    ],
    "ingredients": [
      {
        "name": "Сельдерей черешковый хрустящий",
        "amount": 200,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 180,
        "category": "Овощи"
      },
      {
        "name": "Яблоки кисло-сладкие сочные",
        "amount": 250,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 130,
        "category": "Фрукты"
      },
      {
        "name": "Виноград белый без косточек (кишмиш)",
        "amount": 150,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 250,
        "category": "Фрукты"
      },
      {
        "name": "Орехи грецкие половинки обжаренные",
        "amount": 80,
        "unit": "г",
        "estimatedCostPerKg": 850,
        "category": "Орехи"
      },
      {
        "name": "Йогурт греческий натуральный 5%",
        "amount": 100,
        "unit": "г",
        "estimatedCostPerKg": 180,
        "category": "Молочные"
      },
      {
        "name": "Майонез домашний легкий",
        "amount": 50,
        "unit": "г",
        "estimatedCostPerKg": 220,
        "category": "Соусы"
      },
      {
        "name": "Сок лимона свежий",
        "amount": 15,
        "unit": "мл",
        "coldWastePercent": 20,
        "estimatedCostPerKg": 180,
        "category": "Фрукты"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Грецкие орехи подсушите на сухой сковороде 3-4 минуты до орехового духа, остудите и крупно поломайте.",
        "timerSeconds": 240,
        "tip": "Обжарка активизирует эфирные масла орехов."
      },
      {
        "stepNumber": 2,
        "instruction": "Стебли сельдерея очистите от грубых волокон и нарежьте тонкими полумесяцами.",
        "timerSeconds": 180,
        "tip": "Снятие волокон делает сельдерей нежным и сочным."
      },
      {
        "stepNumber": 3,
        "instruction": "Яблоки нарежьте аккуратным кубиком или брусочками и немедленно сбрызните лимонным соком.",
        "timerSeconds": 120,
        "tip": "Лимонный сок предотвращает потемнение яблочной мякоти."
      },
      {
        "stepNumber": 4,
        "instruction": "Ягоды винограда разрежьте пополам.",
        "timerSeconds": 60,
        "tip": "Виноград добавляет сочный всплеск сладости."
      },
      {
        "stepNumber": 5,
        "instruction": "Для заправки смешайте греческий йогурт с домашним майонезом, солью и щепоткой белого перца.",
        "timerSeconds": 60,
        "tip": "Смесь йогурта и майонеза облегчает калорийность классического рецепта."
      },
      {
        "stepNumber": 6,
        "instruction": "Соедините все компоненты в салатнике, перемешайте и охладите 15 минут перед подачей.",
        "timerSeconds": 900,
        "tip": "Подавайте на листьях салата айсберг."
      }
    ],
    "chefSecrets": [
      "Сочетание 50/50 греческого йогурта и майонеза сохраняет классический шелковистый вкус, но делает текстуру свежей и воздушной."
    ],
    "techCard": {
      "dishYield": "4 порции по 200 г",
      "kzhbu": {
        "calories": 165,
        "proteins": 3.4,
        "fats": 11.8,
        "carbs": 12.2
      },
      "semiFinishedProducts": [
        "Очищенный сельдерей",
        "Обжаренные орехи"
      ],
      "technologicalProcess": "Холодная нарезка фруктово-овощного сырья с йогуртовой заправкой.",
      "servingTemperature": "8-10°C.",
      "storageConditions": "В холодильнике до 24 часов."
    }
  },
  {
    "id": "salad-crab-classic",
    "title": "Крабовый салат ресторанный с кукурузой и огурцом",
    "category": "salads",
    "description": "Всенародный любимец в безупречной ресторанной подаче: сочное мясо камчатского краба (или качественное сурими), сладкая сахарная кукуруза, хрустящий огурец, яйца всмятку и деликатный домашний соус с капелькой лайма.",
    "prepTime": 15,
    "cookTime": 10,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Салаты",
      "Крабовый",
      "Кукуруза",
      "Огурец",
      "Праздник"
    ],
    "ingredients": [
      {
        "name": "Мясо краба натуральное (или качественное крабовое мясо)",
        "amount": 250,
        "unit": "г",
        "coldWastePercent": 0,
        "estimatedCostPerKg": 1200,
        "category": "Рыба"
      },
      {
        "name": "Кукуруза сахарная сладкая (зерна)",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 180,
        "category": "Бакалея"
      },
      {
        "name": "Огурцы свежие грунтовые",
        "amount": 150,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 120,
        "category": "Овощи"
      },
      {
        "name": "Яйца куриные С1",
        "amount": 3,
        "unit": "шт",
        "estimatedCostPerKg": 140,
        "category": "Яйца"
      },
      {
        "name": "Рис круглозерный отварной (аль денте)",
        "amount": 100,
        "unit": "г",
        "estimatedCostPerKg": 90,
        "category": "Крупы и мука"
      },
      {
        "name": "Лук зеленый молодой",
        "amount": 25,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 350,
        "category": "Зелень"
      },
      {
        "name": "Майонез домашний на перепелиных яйцах",
        "amount": 100,
        "unit": "г",
        "estimatedCostPerKg": 250,
        "category": "Соусы"
      },
      {
        "name": "Сок лайма свежий",
        "amount": 10,
        "unit": "мл",
        "coldWastePercent": 20,
        "estimatedCostPerKg": 350,
        "category": "Фрукты"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Крабовое мясо нарежьте аккуратными ровными ломтиками поперек волокон.",
        "timerSeconds": 120,
        "tip": "Не измельчайте в труху — текстура краба должна ощущаться."
      },
      {
        "stepNumber": 2,
        "instruction": "Огурцы очистите от семян ложкой и нарежьте мелким кубиком.",
        "timerSeconds": 120,
        "tip": "Без водянистых семян салат не поплывет на следующий день."
      },
      {
        "stepNumber": 3,
        "instruction": "Яйца сварите (7 минут), остудите и нарежьте кубиком одинакового размера с огурцом.",
        "timerSeconds": 180,
        "tip": "Одинаковая калибровка нарезки — признак высокого ресторанного класса."
      },
      {
        "stepNumber": 4,
        "instruction": "С кукурузы слейте жидкость на дуршлаге.",
        "timerSeconds": 60,
        "tip": "Зерна должны быть абсолютно сухими."
      },
      {
        "stepNumber": 5,
        "instruction": "Соедините крабовое мясо, огурец, яйца, кукурузу, теплый промытый рис и зеленый лук.",
        "timerSeconds": 60,
        "tip": "Капля лаймового сока в майонезе придает изысканный морской баланс."
      },
      {
        "stepNumber": 6,
        "instruction": "Заправьте майонезом с соком лайма, перемешайте и выложите в кулинарное кольцо, украсив цельной фалангой краба сверху.",
        "timerSeconds": 60,
        "tip": "Подавайте охлажденным."
      }
    ],
    "chefSecrets": [
      "Удаление семян из огурца — секрет того, почему ресторанный крабовый салат остается хрустящим и не выделяет воду."
    ],
    "techCard": {
      "dishYield": "4 порции по 190 г",
      "kzhbu": {
        "calories": 155,
        "proteins": 8.5,
        "fats": 8.9,
        "carbs": 10.4
      },
      "semiFinishedProducts": [
        "Отварной рис аль денте",
        "Очищенный огурец без семян"
      ],
      "technologicalProcess": "Прецизионная калиброванная нарезка кубиком 5х5 мм со сборкой.",
      "servingTemperature": "6-8°C.",
      "storageConditions": "В холодильнике до 24 часов."
    }
  },
  {
    "id": "salad-beetroot-goat-cheese",
    "title": "Салат из печеной свеклы с мягким козьим сыром и руколой",
    "category": "salads",
    "description": "Гастрономическое сочетание сладости и сливочной терпкости: запеченная с тимьяном молодая свекла, нежный шевр (козий сыр), обжаренные кедровые орехи, пряная рукола и малиновый винегрет.",
    "prepTime": 15,
    "cookTime": 40,
    "difficulty": "Легко",
    "servings": 2,
    "tags": [
      "Салаты",
      "Свекла",
      "Козий сыр",
      "Кедровые орехи",
      "Изысканно"
    ],
    "ingredients": [
      {
        "name": "Свекла молодая некрупная",
        "amount": 300,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 35,
        "category": "Овощи"
      },
      {
        "name": "Сыр козий мягкий Шевр или Фета",
        "amount": 100,
        "unit": "г",
        "estimatedCostPerKg": 1200,
        "category": "Сыры"
      },
      {
        "name": "Рукола свежая",
        "amount": 60,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 650,
        "category": "Зелень"
      },
      {
        "name": "Орехи кедровые обжаренные",
        "amount": 20,
        "unit": "г",
        "estimatedCostPerKg": 2400,
        "category": "Орехи"
      },
      {
        "name": "Масло оливковое Extra Virgin",
        "amount": 30,
        "unit": "мл",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Уксус малиновый или бальзамический",
        "amount": 15,
        "unit": "мл",
        "estimatedCostPerKg": 600,
        "category": "Соусы"
      },
      {
        "name": "Мед акациевый",
        "amount": 10,
        "unit": "г",
        "estimatedCostPerKg": 450,
        "category": "Бакалея"
      },
      {
        "name": "Тимьян свежий веточки",
        "amount": 3,
        "unit": "шт",
        "estimatedCostPerKg": 800,
        "category": "Зелень"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Свеклу вымойте, сбрызните маслом, заверните в фольгу с веточками тимьяна и запеките при 190°C 40-45 минут. Остудите и очистите.",
        "timerSeconds": 2700,
        "tip": "Тимьян пропитывает свеклу пряным леportным ароматом."
      },
      {
        "stepNumber": 2,
        "instruction": "Нарежьте свеклу красивыми крупными дольками или сегментами.",
        "timerSeconds": 120,
        "tip": "Не мельчите — дольки эффектно смотрятся в тарелке."
      },
      {
        "stepNumber": 3,
        "instruction": "Взбейте оливковое масло с малиновым уксусом, ложкой меда и солью в эмульсию.",
        "timerSeconds": 60,
        "tip": "Малиновый уксус подчеркивает сладость свеклы."
      },
      {
        "stepNumber": 4,
        "instruction": "Замаринуйте теплую свеклу в половине заправки на 10 минут.",
        "timerSeconds": 600,
        "tip": "Теплые овощи моментально впитывают маринад."
      },
      {
        "stepNumber": 5,
        "instruction": "На подушку из руколы выложите ломтики свеклы, раскрошите кусочки козьего сыра, посыпьте кедровыми орехами и сбрызните оставшейся заправкой.",
        "timerSeconds": 60,
        "tip": "Подавайте сразу."
      }
    ],
    "chefSecrets": [
      "Маринование свеклы в медово-малиновой эмульсии пока она еще теплая — ключевой прием ресторанных шефов."
    ],
    "techCard": {
      "dishYield": "2 порции по 230 г",
      "kzhbu": {
        "calories": 175,
        "proteins": 6.2,
        "fats": 12.4,
        "carbs": 10.1
      },
      "semiFinishedProducts": [
        "Печеная свекла с тимьяном",
        "Малиновый винегрет"
      ],
      "technologicalProcess": "Запекание корнеплода в фольге с маринованием и подачей с сыром шевр.",
      "servingTemperature": "18-20°C.",
      "storageConditions": "Употреблять сразу."
    }
  },
  {
    "id": "salad-smashed-cucumbers",
    "title": "Азиатские битые огурцы с кинзой, чесноком и чили",
    "category": "salads",
    "description": "Взрывная китайская закуска: сочные грунтовые огурцы, отбитые плоской стороной тесака, впитавшие маринад из черного рисового уксуса Чинкианг, кунжутного масла, соевого соуса, чеснока и чили.",
    "prepTime": 10,
    "cookTime": 0,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Салаты",
      "Битые огурцы",
      "Китай",
      "Острый",
      "Чеснок"
    ],
    "ingredients": [
      {
        "name": "Огурцы свежие грунтовые пупырчатые",
        "amount": 500,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 120,
        "category": "Овощи"
      },
      {
        "name": "Чеснок свежий ядреный",
        "amount": 20,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 250,
        "category": "Овощи"
      },
      {
        "name": "Кинза свежая свежесорванная",
        "amount": 30,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 450,
        "category": "Зелень"
      },
      {
        "name": "Соус соевый темный премиум",
        "amount": 35,
        "unit": "мл",
        "estimatedCostPerKg": 280,
        "category": "Соусы"
      },
      {
        "name": "Уксус рисовый черный (Чинкианг) или яблочный",
        "amount": 25,
        "unit": "мл",
        "estimatedCostPerKg": 350,
        "category": "Соусы"
      },
      {
        "name": "Масло кунжутное нерафинированное",
        "amount": 20,
        "unit": "мл",
        "estimatedCostPerKg": 850,
        "category": "Масла"
      },
      {
        "name": "Масло острое чили (Lao Gan Ma)",
        "amount": 15,
        "unit": "мл",
        "estimatedCostPerKg": 550,
        "category": "Соусы"
      },
      {
        "name": "Сахар и обжаренный кунжут",
        "amount": 15,
        "unit": "г",
        "estimatedCostPerKg": 100,
        "category": "Специи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Огурцы вымойте, срежьте кончики. Положите на доску и со всей силы ударьте плоской стороной тяжелого поварского ножа или скалкой, чтобы огурцы с треском растрескались вдоль.",
        "timerSeconds": 60,
        "tip": "Именно рваные трещины мгновенно впитывают соус, чего никогда не даст гладкий срез ножа."
      },
      {
        "stepNumber": 2,
        "instruction": "Разломайте или нарежьте треснувшие огурцы наискосок на кусочки по 3-4 см.",
        "timerSeconds": 60,
        "tip": "Слегка посолите и оставьте на 5 минут, слейте выделившуюся лишнюю воду."
      },
      {
        "stepNumber": 3,
        "instruction": "Чеснок раздавите ножом и мелко порубите, кинзу крупно нарежьте.",
        "timerSeconds": 60,
        "tip": "Давленый чеснок отдает максимум сока."
      },
      {
        "stepNumber": 4,
        "instruction": "В пиале смешайте соевый соус, темный уксус, кунжутное масло, чили-масло и сахар до растворения.",
        "timerSeconds": 60,
        "tip": "Сахар балансирует соленую и кислую ноту."
      },
      {
        "stepNumber": 5,
        "instruction": "Залейте огурцы соусом, добавьте чеснок, кинзу, кунжут и энергично перемешайте.",
        "timerSeconds": 60,
        "tip": "Готово к подаче уже через 5 минут маринования!"
      }
    ],
    "chefSecrets": [
      "Отбивание разрушает волокна огурца и создает микротрещины — салат маринуется за 3 минуты вместо часов."
    ],
    "techCard": {
      "dishYield": "4 порции по 140 г",
      "kzhbu": {
        "calories": 68,
        "proteins": 1.8,
        "fats": 4.8,
        "carbs": 4.5
      },
      "semiFinishedProducts": [
        "Отбитые огурцы",
        "Заправка Чинкианг"
      ],
      "technologicalProcess": "Механическое разрушение клеточной структуры с быстрой мацерацией в соусе.",
      "servingTemperature": "12-14°C.",
      "storageConditions": "Употреблять в течение 12 часов (теряют хруст)."
    }
  },
  {
    "id": "salad-korean-carrot",
    "title": "Морковь по-корейски пряная домашняя с раскаленным маслом",
    "category": "salads",
    "description": "Настоящая советско-корейская корё-сарам закуска: тонкая упругая соломка сочной моркови, свежемолотый жареный кориандр, чеснок, красный жгучий перец и заваривание кипящим растительным маслом с луком.",
    "prepTime": 20,
    "cookTime": 5,
    "difficulty": "Легко",
    "servings": 6,
    "tags": [
      "Салаты",
      "Корейская морковь",
      "Острая закуска",
      "Чеснок",
      "Кориандр"
    ],
    "ingredients": [
      {
        "name": "Морковь свежая сочная сладкая",
        "amount": 600,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 40,
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
        "name": "Семяна кориандра (цельные)",
        "amount": 10,
        "unit": "г",
        "estimatedCostPerKg": 500,
        "category": "Специи"
      },
      {
        "name": "Масло растительное рафинированное",
        "amount": 70,
        "unit": "мл",
        "estimatedCostPerKg": 120,
        "category": "Масла"
      },
      {
        "name": "Лук репчатый (для ароматизации масла)",
        "amount": 80,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 30,
        "category": "Овощи"
      },
      {
        "name": "Уксус 9% столовый или яблочный",
        "amount": 25,
        "unit": "мл",
        "estimatedCostPerKg": 50,
        "category": "Соусы"
      },
      {
        "name": "Сахар песок и морская соль",
        "amount": 20,
        "unit": "г",
        "estimatedCostPerKg": 50,
        "category": "Бакалея"
      },
      {
        "name": "Перец красный острый молотый",
        "amount": 5,
        "unit": "г",
        "estimatedCostPerKg": 700,
        "category": "Специи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Морковь натрите на специальной корейской терке длинной тонкой соломкой.",
        "timerSeconds": 300,
        "tip": "Длинные нити обеспечивают правильный упругий хруст."
      },
      {
        "stepNumber": 2,
        "instruction": "Посыпьте морковь солью и сахаром, сбрызните уксусом, аккуратно помните пальцами 1 минуту и оставьте на 15 минут.",
        "timerSeconds": 900,
        "tip": "Морковь станет гибкой и пустит немного сока (сок не сливать!)."
      },
      {
        "stepNumber": 3,
        "instruction": "Семяна кориандра прокалите на сухой сковороде 1 минуту и разотрите в ступке в ароматный порошок.",
        "timerSeconds": 120,
        "tip": "Свежемолотый жареный кориандр — главная душа этой закуски."
      },
      {
        "stepNumber": 4,
        "instruction": "Соберите морковь горкой. В центр горки насыпьте кориандр, красный острый перец и мелко натертый чеснок.",
        "timerSeconds": 60,
        "tip": "Специи должны лежать кучкой на вершине."
      },
      {
        "stepNumber": 5,
        "instruction": "В сковороде раскалите масло до дымка, обжарьте крупно нарезанный лук до темно-золотого цвета и выбросьте его. Кипящее масло вылейте прямо на специи и чеснок на морковной горке!",
        "timerSeconds": 180,
        "tip": "Кипящее масло заваривает чеснок и кориандр, мгновенно раскрывая сумасшедший аромат без сырой едкости."
      },
      {
        "stepNumber": 6,
        "instruction": "Тщательно перемешайте двумя вилками, переложите в банку и уберите в холод минимум на 3 часа.",
        "timerSeconds": 10800,
        "tip": "Настоявшись, морковь становится втрое вкуснее."
      }
    ],
    "chefSecrets": [
      "Ошпаривание чеснока и свежемолотого кориандра кипящим луковым маслом убирает резкую сырость и раскрывает ресторанный букет."
    ],
    "techCard": {
      "dishYield": "600 г готовой закуски",
      "kzhbu": {
        "calories": 145,
        "proteins": 1.4,
        "fats": 10.8,
        "carbs": 10.2
      },
      "semiFinishedProducts": [
        "Корейская соломка",
        "Ароматизированное луковое масло"
      ],
      "technologicalProcess": "Ферментация уксусом с термической экстракцией эфирных масел кипящим жиром.",
      "servingTemperature": "10-12°C.",
      "storageConditions": "В стеклянной банке в холодильнике до 14 суток."
    }
  },
  {
    "id": "salad-chuka-gamadari",
    "title": "Японский салат Чука с водорослями и ореховым соусом Гамадари",
    "category": "salads",
    "description": "Изумрудные маринованные морские водоросли вакаме с древесными грибами кикурагэ, обжаренным кунжутом, тонким перцем чили и традиционным японским кремовым соусом Гамадари на арахисе и кунжуте.",
    "prepTime": 5,
    "cookTime": 0,
    "difficulty": "Легко",
    "servings": 2,
    "tags": [
      "Салаты",
      "Чука",
      "Япония",
      "Водоросли",
      "Гамадари"
    ],
    "ingredients": [
      {
        "name": "Водоросли Чука (Хияши Вакаме) готовые",
        "amount": 250,
        "unit": "г",
        "coldWastePercent": 0,
        "estimatedCostPerKg": 450,
        "category": "Рыба"
      },
      {
        "name": "Соус ореховый Гамадари японский",
        "amount": 60,
        "unit": "мл",
        "estimatedCostPerKg": 650,
        "category": "Соусы"
      },
      {
        "name": "Семена кунжута белого обжаренные",
        "amount": 10,
        "unit": "г",
        "estimatedCostPerKg": 350,
        "category": "Специи"
      },
      {
        "name": "Лимон свежий (долька)",
        "amount": 1,
        "unit": "шт",
        "coldWastePercent": 20,
        "estimatedCostPerKg": 180,
        "category": "Фрукты"
      },
      {
        "name": "Перец чили свежий (тончайшие нити)",
        "amount": 2,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 600,
        "category": "Овощи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Водоросли чука разморозьте в холодильнике, откиньте на сито на 2 минуты, чтобы стекла лишняя глазурь.",
        "timerSeconds": 120,
        "tip": "Слив лишней жидкости позволяет соусу идеально закрепиться на водорослях."
      },
      {
        "stepNumber": 2,
        "instruction": "Кунжут обжарьте на сухой сковороде до легкого румянца.",
        "timerSeconds": 120,
        "tip": "Теплый кунжут отдает ореховый аромат."
      },
      {
        "stepNumber": 3,
        "instruction": "Выложите водоросли в глубокую азиатскую чашу элегантным гнездом.",
        "timerSeconds": 60,
        "tip": "Изумрудный глянец чуки выглядит эффектно."
      },
      {
        "stepNumber": 4,
        "instruction": "Щедро полейте густым ореховым соусом Гамадари, посыпьте кунжутом и нитями перца чили.",
        "timerSeconds": 30,
        "tip": "Соус Гамадари на арахисовой пасте с мирином и соевым соусом — идеальный контраст соленым водорослям."
      },
      {
        "stepNumber": 5,
        "instruction": "Подавайте с долькой свежего лимона.",
        "timerSeconds": 30,
        "tip": "Капля сока лимона освежает вкус."
      }
    ],
    "chefSecrets": [
      "Соус Гамадари подается обильно: именно баланс сладковатого орехового крема и морской йодистой свежести водорослей дает тот самый культовый вкус."
    ],
    "techCard": {
      "dishYield": "2 порции по 160 г",
      "kzhbu": {
        "calories": 115,
        "proteins": 2.4,
        "fats": 6.8,
        "carbs": 11.2
      },
      "semiFinishedProducts": [
        "Осушенные водоросли Хияши Вакаме"
      ],
      "technologicalProcess": "Холодная сервировка с орехово-кунжутным эмульсионным дрессингом.",
      "servingTemperature": "8-10°C.",
      "storageConditions": "Употреблять сразу."
    }
  },
  {
    "id": "salad-poke-salmon",
    "title": "Гавайский поке-боул с лососем, авокадо и эдамаме",
    "category": "salads",
    "description": "Свежайший гавайский боул: кубики атлантического лосося в понзу-маринаде, теплый рис суши, спелое маслянистое авокадо, бобы эдамаме, чука, огуречные слайсы, нори и соус спайси-майо.",
    "prepTime": 20,
    "cookTime": 15,
    "difficulty": "Легко",
    "servings": 2,
    "tags": [
      "Салаты",
      "Поке",
      "Лосось",
      "Авокадо",
      "Гавайи"
    ],
    "ingredients": [
      {
        "name": "Лосось филе охлажденное суши-грейд",
        "amount": 200,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 1600,
        "category": "Рыба"
      },
      {
        "name": "Рис для суши отварной заправленный",
        "amount": 250,
        "unit": "г",
        "estimatedCostPerKg": 120,
        "category": "Крупы и мука"
      },
      {
        "name": "Авокадо спелое Хаасс",
        "amount": 1,
        "unit": "шт",
        "coldWastePercent": 30,
        "estimatedCostPerKg": 650,
        "category": "Овощи"
      },
      {
        "name": "Бобы эдамаме очищенные бланшированные",
        "amount": 80,
        "unit": "г",
        "estimatedCostPerKg": 400,
        "category": "Овощи"
      },
      {
        "name": "Огурцы свежие (слайсы)",
        "amount": 80,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 120,
        "category": "Овощи"
      },
      {
        "name": "Соус Пондзу цитрусовый",
        "amount": 30,
        "unit": "мл",
        "estimatedCostPerKg": 450,
        "category": "Соусы"
      },
      {
        "name": "Соус Спайси (майонез + шрирача)",
        "amount": 30,
        "unit": "мл",
        "estimatedCostPerKg": 350,
        "category": "Соусы"
      },
      {
        "name": "Водоросли Нори соломка и кунжут",
        "amount": 10,
        "unit": "г",
        "estimatedCostPerKg": 1200,
        "category": "Бакалея"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Лосось нарежьте аккуратным кубиком со стороной 1.5 см, залейте соусом пондзу и кунжутным маслом на 5 минут.",
        "timerSeconds": 300,
        "tip": "Пондзу слегка «приваривает» белок лосося своей цитрусовой кислотой."
      },
      {
        "stepNumber": 2,
        "instruction": "Авокадо очистите и нарежьте тонкими лепестками в форме веера.",
        "timerSeconds": 120,
        "tip": "Сорт Хаасс обладает максимальной сливочностью."
      },
      {
        "stepNumber": 3,
        "instruction": "В глубокие боулы выложите теплый заправленный рис для суши.",
        "timerSeconds": 60,
        "tip": "Контраст теплого риса и прохладной свежей рыбы — канон поке."
      },
      {
        "stepNumber": 4,
        "instruction": "Секторами по кругу поверх риса разложите маринованный лосось, веер авокадо, зеленые бобы эдамаме, слайсы огурца.",
        "timerSeconds": 120,
        "tip": "Цветовой контраст создает яркую ресторанную подачу."
      },
      {
        "stepNumber": 5,
        "instruction": "Украсьте соломкой нори, соусом спайси-майо и обжаренным кунжутом.",
        "timerSeconds": 60,
        "tip": "Подавайте немедленно с палочками."
      }
    ],
    "chefSecrets": [
      "Именно теплый заправленный рис (а не холодный) раскрывает жирные кислоты лосося и сливочность авокадо."
    ],
    "techCard": {
      "dishYield": "2 боула по 360 г",
      "kzhbu": {
        "calories": 175,
        "proteins": 12.4,
        "fats": 8.5,
        "carbs": 12.8
      },
      "semiFinishedProducts": [
        "Рис суши заправленный",
        "Маринованный лосось в пондзу"
      ],
      "technologicalProcess": "Секторальная холодная компоновка на теплом рисовом основании.",
      "servingTemperature": "Основа 30°C, топпинги 12-14°C.",
      "storageConditions": "Употреблять сразу."
    }
  },
  {
    "id": "salad-shrimp-avocado-grapefruit",
    "title": "Салат с тигровыми креветками, авокадо и грейпфрутом",
    "category": "salads",
    "description": "Легкий и элегантный салат: сочные тигровые креветки, обжаренные с чесноком и тимьяном, филе розового грейпфрута без пленок, кремовое авокадо, хрустящий салат фризе и цитрусовая заправка.",
    "prepTime": 15,
    "cookTime": 5,
    "difficulty": "Легко",
    "servings": 2,
    "tags": [
      "Салаты",
      "Креветки",
      "Грейпфрут",
      "Авокадо",
      "Фитнес"
    ],
    "ingredients": [
      {
        "name": "Креветки тигровые очищенные 16/20",
        "amount": 250,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 1100,
        "category": "Рыба"
      },
      {
        "name": "Грейпфрут розовый спелый",
        "amount": 1,
        "unit": "шт",
        "coldWastePercent": 45,
        "estimatedCostPerKg": 170,
        "category": "Фрукты"
      },
      {
        "name": "Авокадо Хаасс",
        "amount": 1,
        "unit": "шт",
        "coldWastePercent": 30,
        "estimatedCostPerKg": 650,
        "category": "Овощи"
      },
      {
        "name": "Микс салатов (фризе, рукола, мангольд)",
        "amount": 80,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 500,
        "category": "Зелень"
      },
      {
        "name": "Масло оливковое Extra Virgin",
        "amount": 40,
        "unit": "мл",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Чеснок и свежий тимьян",
        "amount": 10,
        "unit": "г",
        "estimatedCostPerKg": 350,
        "category": "Зелень"
      },
      {
        "name": "Мед цветочный натуральный",
        "amount": 10,
        "unit": "г",
        "estimatedCostPerKg": 450,
        "category": "Бакалея"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Грейпфрут очистите ножом до мякоти и аккуратно вырежьте сегменты филе между пленками над миской.",
        "timerSeconds": 240,
        "tip": "Удаление горьких белых пленок делает грейпфрут сладким и освежающим."
      },
      {
        "stepNumber": 2,
        "instruction": "Стекший сок грейпфрута взбейте с оливковым маслом, медом и щепоткой соли в нежную эмульсию.",
        "timerSeconds": 60,
        "tip": "Натуральный грейпфрутовый сок дает идеальную заправку."
      },
      {
        "stepNumber": 3,
        "instruction": "Креветки надсеките по спинке, удалите кишечную вену. Обжарьте на оливковом масле с раздавленным чесноком и тимьяном по 1.5 минуты с каждой стороны.",
        "timerSeconds": 180,
        "tip": "Не пережаривайте креветки, чтобы они сохранили сочность."
      },
      {
        "stepNumber": 4,
        "instruction": "Авокадо нарежьте тонкими ломтиками.",
        "timerSeconds": 60,
        "tip": "Сбрызните соком грейпфрута."
      },
      {
        "stepNumber": 5,
        "instruction": "В тарелки выложите зелень, сегменты грейпфрута, авокадо и теплые золотистые креветки, полейте цитрусовой заправкой.",
        "timerSeconds": 60,
        "tip": "Подавайте сразу."
      }
    ],
    "chefSecrets": [
      "Филирование грейпфрута («супрем») убирает всю горечь мембран, оставляя взрывные цитрусовые капсулы сока."
    ],
    "techCard": {
      "dishYield": "2 порции по 280 г",
      "kzhbu": {
        "calories": 145,
        "proteins": 11.2,
        "fats": 8.9,
        "carbs": 5.4
      },
      "semiFinishedProducts": [
        "Филе грейпфрута супрем",
        "Обжаренные чесночные креветки"
      ],
      "technologicalProcess": "Быстрое обжаривание ракообразных с цитрусовой мацерацией.",
      "servingTemperature": "18-20°C (теплые креветки).",
      "storageConditions": "Употреблять сразу."
    }
  },
  {
    "id": "salad-vinaigrette-sauerkraut",
    "title": "Русский винегрет с бочковой квашеной капустой и ароматным маслом",
    "category": "salads",
    "description": "Исконный русский винегрет: печеные корнеплоды, хрустящая бочковая квашеная капуста, соленые бочковые огурчики, нежный зеленый горошек и нерафинированное подсолнечное масло холодного отжима с ароматом жареных семечек.",
    "prepTime": 20,
    "cookTime": 35,
    "difficulty": "Легко",
    "servings": 6,
    "tags": [
      "Салаты",
      "Винегрет",
      "Русская кухня",
      "Квашеная капуста",
      "Пост"
    ],
    "ingredients": [
      {
        "name": "Свекла столовая печеная",
        "amount": 300,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 35,
        "category": "Овощи"
      },
      {
        "name": "Картофель печеный в мундире",
        "amount": 250,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 40,
        "category": "Овощи"
      },
      {
        "name": "Морковь печеная",
        "amount": 150,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 40,
        "category": "Овощи"
      },
      {
        "name": "Огурцы бочковые соленые хрустящие",
        "amount": 150,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 160,
        "category": "Овощи"
      },
      {
        "name": "Капуста квашеная хрустящая бочковая",
        "amount": 150,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 140,
        "category": "Овощи"
      },
      {
        "name": "Горошек зеленый мозговой консервированный",
        "amount": 120,
        "unit": "г",
        "estimatedCostPerKg": 110,
        "category": "Бакалея"
      },
      {
        "name": "Лук красный салатный",
        "amount": 60,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 50,
        "category": "Овощи"
      },
      {
        "name": "Масло подсолнечное нерафинированное жареное",
        "amount": 50,
        "unit": "мл",
        "estimatedCostPerKg": 150,
        "category": "Масла"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Свеклу нарежьте кубиком 7х7 мм и СРАЗУ В ОТДЕЛЬНОЙ МИСКЕ перемешайте с 2 ложками подсолнечного масла.",
        "timerSeconds": 180,
        "tip": "Масляная пленка запечатывает свекольный пигмент, и салат не превратится в однородную темную кашу — каждый овощ сохранит свой цвет!"
      },
      {
        "stepNumber": 2,
        "instruction": "Картофель и морковь нарежьте точно таким же ровным кубиком.",
        "timerSeconds": 240,
        "tip": "Одинаковый калибр нарезки создает идеальную текстуру."
      },
      {
        "stepNumber": 3,
        "instruction": "Соленые огурцы нарежьте кубиком, слегка отожмите от лишнего рассола. Квашеную капусту порубите поперек.",
        "timerSeconds": 180,
        "tip": "Нарезка капусты делает салат удобным в поедании."
      },
      {
        "stepNumber": 4,
        "instruction": "В большой миске соедините картофель, морковь, огурцы, капусту, зеленый горошек и тонко нарезанный красный лук.",
        "timerSeconds": 60,
        "tip": "Красный лук слаще и мягче обычного."
      },
      {
        "stepNumber": 5,
        "instruction": "Добавьте подготовленную в масле свеклу, заправьте ароматным маслом с запахом семечек, посолите и перемешайте.",
        "timerSeconds": 60,
        "tip": "Ароматное масло связывает все вкусы в неповторимый родной букет."
      }
    ],
    "chefSecrets": [
      "Предварительное обмазывание нарезанной свеклы растительным маслом не дает ей окрасить остальные овощи — винегрет играет всеми красками."
    ],
    "techCard": {
      "dishYield": "6 порций по 200 г",
      "kzhbu": {
        "calories": 110,
        "proteins": 2.2,
        "fats": 5.4,
        "carbs": 13.5
      },
      "semiFinishedProducts": [
        "Печеные овощи кубиком",
        "Свекла в масляной оболочке"
      ],
      "technologicalProcess": "Раздельная подготовка пигментной фракции с последующим холодным смешиванием.",
      "servingTemperature": "12-14°C.",
      "storageConditions": "В холодильнике до 48 часов."
    }
  },
  {
    "id": "salad-bahor-uzbek",
    "title": "Узбекский весенний салат Бахор со свежими овощами и мясом",
    "category": "salads",
    "description": "Традиционный ташкентский салат: соломка отварной нежирной говядины, хрустящие огурцы, сладкие томаты, редис, рубленые яйца, гора свежей зелени кинзы и укропа с заправкой из катыка (густого мацони) или домашней сметаны.",
    "prepTime": 15,
    "cookTime": 0,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Салаты",
      "Бахор",
      "Узбекистан",
      "Говядина",
      "Овощи"
    ],
    "ingredients": [
      {
        "name": "Говядина отварная нежирная (соломка)",
        "amount": 250,
        "unit": "г",
        "coldWastePercent": 0,
        "estimatedCostPerKg": 950,
        "category": "Мясо"
      },
      {
        "name": "Огурцы свежие грунтовые",
        "amount": 200,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 120,
        "category": "Овощи"
      },
      {
        "name": "Помидоры плотные спелые",
        "amount": 200,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 180,
        "category": "Овощи"
      },
      {
        "name": "Редис свежий сочный",
        "amount": 100,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 150,
        "category": "Овощи"
      },
      {
        "name": "Яйца куриные сваренные вкрутую",
        "amount": 3,
        "unit": "шт",
        "estimatedCostPerKg": 140,
        "category": "Яйца"
      },
      {
        "name": "Зелень свежая (укроп, петрушка, кинза, зеленый лук)",
        "amount": 60,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 400,
        "category": "Зелень"
      },
      {
        "name": "Катык узбекский (или сметана 15%)",
        "amount": 120,
        "unit": "г",
        "estimatedCostPerKg": 160,
        "category": "Молочные"
      },
      {
        "name": "Чеснок тертый",
        "amount": 5,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 250,
        "category": "Овощи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Отварную говядину нарежьте аккуратной тонкой соломкой длиной 4-5 см.",
        "timerSeconds": 180,
        "tip": "Мясо должно быть сварено с лавровым листом и остужено в бульоне."
      },
      {
        "stepNumber": 2,
        "instruction": "Огурцы и редис нарежьте тонкой соломкой, помидоры — изящными дольками.",
        "timerSeconds": 180,
        "tip": "Форма нарезки овощей должна перекликаться с соломкой мяса."
      },
      {
        "stepNumber": 3,
        "instruction": "Яйца нарежьте дольками на 6 частей.",
        "timerSeconds": 60,
        "tip": "Часть яиц можно оставить для украшения верха."
      },
      {
        "stepNumber": 4,
        "instruction": "Зелень мелко порубите, чеснок смешайте с катыком и щепоткой соли.",
        "timerSeconds": 90,
        "tip": "Катык придает нежную кисломолочную свежесть."
      },
      {
        "stepNumber": 5,
        "instruction": "Соедините мясо, овощи и зелень, заправьте катыком с чесноком, выложите горкой и украсьте дольками яиц.",
        "timerSeconds": 60,
        "tip": "Подавайте сразу."
      }
    ],
    "chefSecrets": [
      "Охлаждение отварного мяса прямо в бульоне оставляет его сочным и мягким, предотвращая сухость волокон."
    ],
    "techCard": {
      "dishYield": "4 порции по 250 г",
      "kzhbu": {
        "calories": 135,
        "proteins": 12.1,
        "fats": 6.4,
        "carbs": 5.8
      },
      "semiFinishedProducts": [
        "Отварная говяжья соломка",
        "Чесночный катык"
      ],
      "technologicalProcess": "Соломкообразная нарезка мясного и овощного сырья со сметанно-кисломолочной заправкой.",
      "servingTemperature": "10-12°C.",
      "storageConditions": "Употреблять в течение 6 часов."
    }
  },
  {
    "id": "salad-say-radish-beef",
    "title": "Салат Сай с говядиной и зеленой маргиланской редькой к плову",
    "category": "salads",
    "description": "Знаменитый узбекский салат-компаньон к плову и шашлыку: сочная зеленая маргиланская редька, отварная говядина, карамелизованный жареный лук и гранатовые зерна.",
    "prepTime": 20,
    "cookTime": 10,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Салаты",
      "Сай",
      "Редька",
      "Говядина",
      "Плов"
    ],
    "ingredients": [
      {
        "name": "Редька маргиланская зеленая сочная",
        "amount": 350,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 70,
        "category": "Овощи"
      },
      {
        "name": "Говядина отварная постная",
        "amount": 200,
        "unit": "г",
        "coldWastePercent": 0,
        "estimatedCostPerKg": 950,
        "category": "Мясо"
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
        "name": "Масло хлопковое или подсолнечное (для жарки лука)",
        "amount": 40,
        "unit": "мл",
        "estimatedCostPerKg": 150,
        "category": "Масла"
      },
      {
        "name": "Зерна граната спелого кисло-сладкого",
        "amount": 40,
        "unit": "г",
        "estimatedCostPerKg": 300,
        "category": "Фрукты"
      },
      {
        "name": "Соль морская и свежемолотый черный перец",
        "amount": 1,
        "unit": "ч. л.",
        "estimatedCostPerKg": 40,
        "category": "Специи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Маргиланскую редьку очистите и нарежьте тончайшей соломкой (или натрите на терке для корейской моркови).",
        "timerSeconds": 240,
        "tip": "Маргиланская редька сладкая и сочная, лишена горечи черной редьки."
      },
      {
        "stepNumber": 2,
        "instruction": "Замочите соломку редьки в ледяной воде на 15 минут, затем откиньте на дуршлаг и тщательно отожмите.",
        "timerSeconds": 900,
        "tip": "Ледяная вода делает редьку хрустящей как стекло."
      },
      {
        "stepNumber": 3,
        "instruction": "Лук нарежьте полукольцами и обжарьте на раскаленном масле до насыщенного темно-золотистого колера.",
        "timerSeconds": 360,
        "tip": "Жареный лук вместе с горячим маслом служит ароматной заправкой."
      },
      {
        "stepNumber": 4,
        "instruction": "Отварную говядину разберите руками на тонкие волокна.",
        "timerSeconds": 180,
        "tip": "Волокнистое мясо лучше соединяется с редькой."
      },
      {
        "stepNumber": 5,
        "instruction": "Соедините редьку, говядину и горячий жареный лук с маслом прямо из сковороды, посолите, поперчите и перемешайте. Посыпьте зернами граната.",
        "timerSeconds": 120,
        "tip": "Подавайте к горячему плову."
      }
    ],
    "chefSecrets": [
      "Введение горячего жареного лука вместе с маслом смягчает текстуру редьки и придает глубокий сладковатый аромат."
    ],
    "techCard": {
      "dishYield": "4 порции по 180 г",
      "kzhbu": {
        "calories": 142,
        "proteins": 10.5,
        "fats": 7.8,
        "carbs": 6.9
      },
      "semiFinishedProducts": [
        "Вымоченная маргиланская редька",
        "Карамелизованный лук"
      ],
      "technologicalProcess": "Холодное вымачивание корнеплода с термообработкой луковой заправки.",
      "servingTemperature": "16-18°C.",
      "storageConditions": "Употреблять в течение 12 часов."
    }
  },
  {
    "id": "salad-coleslaw-mustard",
    "title": "Американский салат Коул Слоу с домашней горчичной заправкой",
    "category": "salads",
    "description": "Культовый спутник барбекю и бургеров: тонко нашинкованная молодая белокочанная и краснокочанная капуста, морковь, стебель сельдерея и кремовая заправка с зернистой горчицей, яблочным уксусом и каплей меда.",
    "prepTime": 15,
    "cookTime": 0,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Салаты",
      "Коул Слоу",
      "Барбекю",
      "Капуста",
      "Америка"
    ],
    "ingredients": [
      {
        "name": "Капуста белокочанная молодая сочная",
        "amount": 300,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 35,
        "category": "Овощи"
      },
      {
        "name": "Капуста краснокочанная",
        "amount": 150,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 50,
        "category": "Овощи"
      },
      {
        "name": "Морковь сладкая хрустящая",
        "amount": 100,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 40,
        "category": "Овощи"
      },
      {
        "name": "Майонез домашний",
        "amount": 80,
        "unit": "г",
        "estimatedCostPerKg": 220,
        "category": "Соусы"
      },
      {
        "name": "Сметана 20% или греческий йогурт",
        "amount": 40,
        "unit": "г",
        "estimatedCostPerKg": 200,
        "category": "Молочные"
      },
      {
        "name": "Горчица зернистая дижонская",
        "amount": 20,
        "unit": "г",
        "estimatedCostPerKg": 350,
        "category": "Соусы"
      },
      {
        "name": "Уксус яблочный 6%",
        "amount": 15,
        "unit": "мл",
        "estimatedCostPerKg": 90,
        "category": "Соусы"
      },
      {
        "name": "Мед натуральный",
        "amount": 15,
        "unit": "г",
        "estimatedCostPerKg": 450,
        "category": "Бакалея"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Оба вида капусты нашинкуйте максимально тонкой нитевидной соломкой.",
        "timerSeconds": 240,
        "tip": "Тонкая шинковка гарантирует идеальное пропитывание соусом."
      },
      {
        "stepNumber": 2,
        "instruction": "Посыпьте капусту щепоткой соли и слегка обомните руками 30 секунд до мягкости.",
        "timerSeconds": 30,
        "tip": "Не переусердствуйте — капуста должна остаться хрустящей, а не превратиться в тряпочку."
      },
      {
        "stepNumber": 3,
        "instruction": "Морковь натрите тонкой соломкой и добавьте к капусте.",
        "timerSeconds": 60,
        "tip": "Морковь дает яркий оранжевый цвет."
      },
      {
        "stepNumber": 4,
        "instruction": "Взбейте майонез, сметану, зернистую горчицу, яблочный уксус, мед и свежемолотый черный перец.",
        "timerSeconds": 60,
        "tip": "Зернистая горчица аппетитно лопается на зубах."
      },
      {
        "stepNumber": 5,
        "instruction": "Заправьте овощи соусом, перемешайте и дайте постоять в холодильнике 30 минут перед подачей к мясу BBQ.",
        "timerSeconds": 1800,
        "tip": "Настаивание гармонизирует соус и овощи."
      }
    ],
    "chefSecrets": [
      "Сочетание белой и красной капусты создает праздничный колорит, а яблочный уксус балансирует жирность майонеза."
    ],
    "techCard": {
      "dishYield": "4 порции по 180 г",
      "kzhbu": {
        "calories": 135,
        "proteins": 1.8,
        "fats": 10.4,
        "carbs": 7.9
      },
      "semiFinishedProducts": [
        "Тонко нашинкованная капуста",
        "Кремовый горчичный соус"
      ],
      "technologicalProcess": "Механическая тонкая шинковка овощей с последующей мацерацией в эмульсии.",
      "servingTemperature": "8-10°C.",
      "storageConditions": "В контейнере в холодильнике до 48 часов."
    }
  },
  {
    "id": "salad-panzanella-tuscany",
    "title": "Тосканский хлебный салат Панцанелла со спелыми томатами",
    "category": "salads",
    "description": "Аутентичный летний салат итальянской деревни: подсушенная чиабатта, пропитанная соком сладких томатов бычье сердце, базилик, красный ялтинский лук, каперсы, оливковое масло Extra Virgin и выдержанный красный винный уксус.",
    "prepTime": 15,
    "cookTime": 10,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Салаты",
      "Панцанелла",
      "Италия",
      "Томаты",
      "Чиабатта"
    ],
    "ingredients": [
      {
        "name": "Чиабатта вчерашняя хрустящая",
        "amount": 200,
        "unit": "г",
        "estimatedCostPerKg": 180,
        "category": "Хлеб"
      },
      {
        "name": "Помидоры спелые разные сортов (бычье сердце, черри)",
        "amount": 500,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 220,
        "category": "Овощи"
      },
      {
        "name": "Лук красный сладкий ялтинский",
        "amount": 80,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 90,
        "category": "Овощи"
      },
      {
        "name": "Базилик свежий зеленый (листья)",
        "amount": 30,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 450,
        "category": "Зелень"
      },
      {
        "name": "Каперсы соленые (промытые)",
        "amount": 20,
        "unit": "г",
        "estimatedCostPerKg": 750,
        "category": "Бакалея"
      },
      {
        "name": "Масло оливковое первого холодного отжима",
        "amount": 60,
        "unit": "мл",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Уксус винный красный выдержанный",
        "amount": 25,
        "unit": "мл",
        "estimatedCostPerKg": 300,
        "category": "Соусы"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Чиабатту порвите руками на неровные кусочки размером 3 см, сбрызните маслом и подсушите в духовке при 180°C 8-10 минут до золотистой корочки снаружи, но мягкости внутри.",
        "timerSeconds": 600,
        "tip": "Хлеб не должен превратиться в сухарь-камень: внутри мякиш обязан остаться пористым."
      },
      {
        "stepNumber": 2,
        "instruction": "Томаты нарежьте крупными дольками над широкой миской, посолите и оставьте на 10 минут, чтобы они выделили много ароматного сока.",
        "timerSeconds": 600,
        "tip": "Томатный сок — основа заправки Панцанеллы."
      },
      {
        "stepNumber": 3,
        "instruction": "В миску к томатам и соку добавьте оливковое масло, винный уксус, тонкие полукольца лука и каперсы.",
        "timerSeconds": 60,
        "tip": "Кислота уксуса смягчает лук."
      },
      {
        "stepNumber": 4,
        "instruction": "Добавьте кусочки теплой чиабатты и порванные руками листья базилика. Энергично перемешайте.",
        "timerSeconds": 60,
        "tip": "Хлеб жадно впитает томатный сок с оливковым маслом."
      },
      {
        "stepNumber": 5,
        "instruction": "Дайте салату настояться 15 минут при комнатной температуре перед подачей.",
        "timerSeconds": 900,
        "tip": "Хлеб становится сочным, сохраняя хрустящие краешки."
      }
    ],
    "chefSecrets": [
      "Чиабатта рвется исключительно руками — неровные рваные поры впитывают сок помидоров в разы лучше ровного ножевого среза."
    ],
    "techCard": {
      "dishYield": "4 порции по 220 г",
      "kzhbu": {
        "calories": 175,
        "proteins": 3.8,
        "fats": 9.8,
        "carbs": 18.2
      },
      "semiFinishedProducts": [
        "Подсушенные рваные куски чиабатты",
        "Томатный мацерат"
      ],
      "technologicalProcess": "Пропитка черствого пористого хлеба соком томатов и винным уксусом.",
      "servingTemperature": "18-20°C (не охлаждать в холодильнике!).",
      "storageConditions": "Употреблять в течение 2-3 часов."
    }
  },
  {
    "id": "salad-quinoa-baked-pumpkin",
    "title": "Теплый салат с киноа, печеной мускатной тыквой и шпинатом",
    "category": "salads",
    "description": "Суперфуд салат высокой питательности: рассыпчатая киноа, карамелизованные кубики мускатной тыквы с розмарином, свежий беби-шпинат, сушеная клюква, тыквенные семечки и тахинная заправка.",
    "prepTime": 15,
    "cookTime": 20,
    "difficulty": "Легко",
    "servings": 2,
    "tags": [
      "Салаты",
      "Киноа",
      "Тыква",
      "Шпинат",
      "Вегетарианское"
    ],
    "ingredients": [
      {
        "name": "Киноа трехцветная или белая (сухая)",
        "amount": 100,
        "unit": "г",
        "estimatedCostPerKg": 450,
        "category": "Крупы и мука"
      },
      {
        "name": "Тыква мускатная (очищенная мякоть)",
        "amount": 300,
        "unit": "г",
        "coldWastePercent": 20,
        "estimatedCostPerKg": 70,
        "category": "Овощи"
      },
      {
        "name": "Шпинат молодой беби",
        "amount": 80,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 500,
        "category": "Зелень"
      },
      {
        "name": "Клюква сушеная вяленая",
        "amount": 30,
        "unit": "г",
        "estimatedCostPerKg": 550,
        "category": "Бакалея"
      },
      {
        "name": "Семена тыквы очищенные обжаренные",
        "amount": 25,
        "unit": "г",
        "estimatedCostPerKg": 650,
        "category": "Орехи"
      },
      {
        "name": "Паста кунжутная Тахини",
        "amount": 30,
        "unit": "г",
        "estimatedCostPerKg": 500,
        "category": "Бакалея"
      },
      {
        "name": "Масло оливковое Extra Virgin",
        "amount": 30,
        "unit": "мл",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Сок лимона и сироп кленовый",
        "amount": 20,
        "unit": "мл",
        "estimatedCostPerKg": 500,
        "category": "Бакалея"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Киноа промойте в сите теплой водой и отварите в 200 мл подсоленной воды 15 минут до раскрытия спиралек, остудите.",
        "timerSeconds": 900,
        "tip": "Промывание смывает сапонины, исключая горечь."
      },
      {
        "stepNumber": 2,
        "instruction": "Тыкву нарежьте кубиками 2х2 см, сбрызните маслом, посыпьте солью и сухим розмарином. Запекайте при 200°C 20 минут до мягкости и карамельных подпалин.",
        "timerSeconds": 1200,
        "tip": "Карамелизация подчеркивает мускатную сладость."
      },
      {
        "stepNumber": 3,
        "instruction": "Для заправки взбейте тахини с соком лимона, кленовым сиропом, ложкой теплой воды и оливковым маслом в шелковистый крем.",
        "timerSeconds": 90,
        "tip": "Тахинная заправка связывает злаки и овощи."
      },
      {
        "stepNumber": 4,
        "instruction": "Соедините киноа, листья шпината, теплую запеченную тыкву и клюкву.",
        "timerSeconds": 60,
        "tip": "Шпинат слегка припустится от тепла тыквы."
      },
      {
        "stepNumber": 5,
        "instruction": "Заправьте тахинным соусом и щедро посыпьте хрустящими тыквенными семечками.",
        "timerSeconds": 60,
        "tip": "Подавайте теплым."
      }
    ],
    "chefSecrets": [
      "Тахинная заправка с лимоном и кленовым сиропом превращает простые печеные корнеплоды и злаки в блюдо уровня мишленовского бистро."
    ],
    "techCard": {
      "dishYield": "2 порции по 320 г",
      "kzhbu": {
        "calories": 185,
        "proteins": 5.8,
        "fats": 9.4,
        "carbs": 19.8
      },
      "semiFinishedProducts": [
        "Отварная киноа",
        "Карамелизованная мускатная тыква"
      ],
      "technologicalProcess": "Запекание тыквы с гидротермической варкой киноа и смешиванием с кунжутной эмульсией.",
      "servingTemperature": "35-40°C.",
      "storageConditions": "В закрытом контейнере до 48 часов."
    }
  },
  {
    "id": "salad-rabbit-liver-pear",
    "title": "Теплый салат с нежной печенью кролика и карамелизованной грушей",
    "category": "salads",
    "description": "Изысканный ресторанный шедевр: нежнейшая печень кролика (или птицы), быстро обжаренная со сливочным маслом и коньяком, ломтики груши Конференция в карамели, сыр Дор Блю, кедровые орешки и ягодный соус.",
    "prepTime": 15,
    "cookTime": 10,
    "difficulty": "Средне",
    "servings": 2,
    "tags": [
      "Салаты",
      "Печень кролика",
      "Груша",
      "Дор Блю",
      "Изысканно"
    ],
    "ingredients": [
      {
        "name": "Печень кролика или цыпленка свежая",
        "amount": 250,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 650,
        "category": "Мясо"
      },
      {
        "name": "Груша спелая сладкая (Конференция)",
        "amount": 1,
        "unit": "шт",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 180,
        "category": "Фрукты"
      },
      {
        "name": "Сыр с голубой плесенью Дор Блю",
        "amount": 60,
        "unit": "г",
        "estimatedCostPerKg": 1400,
        "category": "Сыры"
      },
      {
        "name": "Салатный микс (рукола, корн, радиккио)",
        "amount": 80,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 500,
        "category": "Зелень"
      },
      {
        "name": "Масло сливочное 82.5%",
        "amount": 40,
        "unit": "г",
        "estimatedCostPerKg": 950,
        "category": "Масла"
      },
      {
        "name": "Коньяк или бренди (для фламбирования)",
        "amount": 25,
        "unit": "мл",
        "estimatedCostPerKg": 1200,
        "category": "Жидкости"
      },
      {
        "name": "Сахар тростниковый (для груши)",
        "amount": 15,
        "unit": "г",
        "estimatedCostPerKg": 180,
        "category": "Бакалея"
      },
      {
        "name": "Орехи кедровые обжаренные",
        "amount": 15,
        "unit": "г",
        "estimatedCostPerKg": 2400,
        "category": "Орехи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Грушу очистите от сердцевины, нарежьте дольками. В сковороде растопите 20 г масла с сахаром, обжарьте грушу по 2 минуты с каждой стороны до золотистой карамели.",
        "timerSeconds": 240,
        "tip": "Карамелизованная груша должна сохранить форму."
      },
      {
        "stepNumber": 2,
        "instruction": "Печень промойте, обсушите, удалите пленочки. В раскаленной сковороде на оставшемся сливочном масле обжаривайте печень на сильном огне ровно 3 минуты.",
        "timerSeconds": 180,
        "tip": "Печень внутри должна остаться розовой и кремовой."
      },
      {
        "stepNumber": 3,
        "instruction": "Влейте коньяк и аккуратно подожгите (фламбируйте) на 10 секунд для карамелизации алкоголя.",
        "timerSeconds": 30,
        "tip": "Фламбирование придает глубокий ресторанный аромат."
      },
      {
        "stepNumber": 4,
        "instruction": "На тарелки выложите подушку из салатного микса, теплые дольки груши и нежнейшую горячую печень.",
        "timerSeconds": 60,
        "tip": "Сверху полейте выделившимся коньячно-сливочным соком со сковороды."
      },
      {
        "stepNumber": 5,
        "instruction": "Раскрошите сыр Дор Блю и посыпьте кедровыми орешками.",
        "timerSeconds": 30,
        "tip": "Подавайте сразу горячим."
      }
    ],
    "chefSecrets": [
      "Фламбирование печени благородным бренди испаряет алкоголь, оставляя карамельную коньячную глазурь."
    ],
    "techCard": {
      "dishYield": "2 порции по 260 г",
      "kzhbu": {
        "calories": 198,
        "proteins": 14.8,
        "fats": 12.2,
        "carbs": 7.5
      },
      "semiFinishedProducts": [
        "Карамелизованная груша",
        "Фламбированная печень"
      ],
      "technologicalProcess": "Кратковременное фламбирование субпродуктов со сборкой на свежей зелени.",
      "servingTemperature": "50-55°C (теплая печень).",
      "storageConditions": "Употреблять сразу."
    }
  }
];

export const SALAD_RECIPES: Recipe[] = [
  ...BASE_SALAD_RECIPES,
  ...SALAD_COLLECTION_1,
  ...SALAD_COLLECTION_2,
  ...SALAD_COLLECTION_3
];
