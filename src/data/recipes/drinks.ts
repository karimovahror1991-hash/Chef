import { Recipe } from '../../types';

export const DRINKS_RECIPES: Recipe[] = [
  {
    id: 'tea-tashkent',
    title: 'Чай по-ташкентски со свежей мятой, лимоном и наватом',
    category: 'drinks',
    description: 'Легендарный восточный чай: микс черного и зеленого сортов крупнолистового чая, сочные ломтики лимона, свежая садовая мята и кристаллы виноградного сахара (нават).',
    prepTime: 5,
    cookTime: 10,
    difficulty: 'Легко',
    servings: 4,
    tags: ['Чай', 'Восточная кухня', 'Мята', 'Напитки', 'Согревающий'],
    ingredients: [
      { name: 'Чай черный крупнолистовой байховый (Ассам или Цейлон)', amount: 10, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1200, category: 'Бакалея' },
      { name: 'Чай зеленый крупнолистовой китайский (Ганпаудер или Сенча)', amount: 10, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1400, category: 'Бакалея' },
      { name: 'Мята свежая перечная (пучок)', amount: 30, unit: 'г', coldWastePercent: 5, heatLossPercent: 0, estimatedCostPerKg: 450, category: 'Зелень' },
      { name: 'Лимон свежий сочный', amount: 1, unit: 'шт', coldWastePercent: 15, heatLossPercent: 0, estimatedCostPerKg: 180, category: 'Фрукты' },
      { name: 'Кристаллический сахар Нават (или натуральный цветочный мед)', amount: 60, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 350, category: 'Бакалея' },
      { name: 'Вода родниковая фильтрованная', amount: 1000, unit: 'мл', coldWastePercent: 0, heatLossPercent: 5, estimatedCostPerKg: 5, category: 'Жидкости' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Керамический или фарфоровый чайник обдайте крутым кипятком для равномерного прогрева стенок.',
        timerSeconds: 60,
        tip: 'Горячий чайник не забирает тепло у заварки, позволяя листу полностью раскрыться.'
      },
      {
        stepNumber: 2,
        instruction: 'В прогретый чайник засыпьте смесь черного и зеленого чая (соотношение 1:1). Залейте водой температуры 90-95°C на 1/3 объема.',
        timerSeconds: 120,
        tip: 'Смесь сортов дает одновременно терпкость, глубокий цвет и цветочную свежесть.'
      },
      {
        stepNumber: 3,
        instruction: 'Лимон нарежьте тонкими кружками, слегка придавите мадлером или ложкой, чтобы выделился сок. Листья мяты слегка хлопните между ладонями.',
        timerSeconds: 60,
        tip: 'Хлопок по мяте мгновенно разрывает капилляры листа и высвобождает ментол.'
      },
      {
        stepNumber: 4,
        instruction: 'Добавьте лимон, мяту и кристаллы навата в чайник. Долейте кипяток до верха.',
        timerSeconds: 60,
        tip: 'Нават медленно тает, придавая чаю мягкую карамельную сладость.'
      },
      {
        stepNumber: 5,
        instruction: 'Укутайте чайник полотенцем или накройте колпаком на 7-8 минут для настаивания.',
        timerSeconds: 450,
        tip: 'Не кипятите чай — медленное настаивание сохраняет тонкие эфирные масла.'
      },
      {
        stepNumber: 6,
        instruction: 'Сделайте обряд кайтар: налейте чай в пиалу и перелейте обратно в чайник трижды («первая пиала — грязь, вторая — масло, третья — чай»). Разлейте по пиалам.',
        timerSeconds: 90,
        tip: 'Кайтар насыщает напиток кислородом и равномерно перемешивает слои заварки.'
      }
    ],
    chefSecrets: [
      'Кайтар — восточный ритуал перемешивания чая без ложки, который делает настой однородным.',
      'Нават в отличие от обычного рафинада не заглушает вкус чая приторной сладостью.'
    ],
    techCard: {
      dishYield: '250 мл на 1 порцию (пиала)',
      kzhbu: {
        calories: 35,
        proteins: 0.2,
        fats: 0.0,
        carbs: 8.5
      },
      semiFinishedProducts: ['Чайный бленд Ташкентский сухой'],
      technologicalProcess: 'Заваривание водой 92-95°C с троекратным кайтаром.',
      servingTemperature: '75-80°C в пиалах.',
      storageConditions: 'Подается свежезаваренным. Не подлежит повторному нагреванию.'
    }
  },
  {
    id: 'ayran-herbs',
    title: 'Домашний сливочный айран с огурцом и мятой',
    category: 'drinks',
    description: 'Освежающий кавказский и среднеазиатский кисломолочный напиток на основе мацони или катыка, взбитый с минеральной водой, тертым хрустящим огурцом, чесноком и укропом.',
    prepTime: 10,
    cookTime: 0,
    difficulty: 'Легко',
    servings: 4,
    tags: ['Айран', 'Напитки', 'Освежающий', 'Кисломолочное', 'Лето'],
    ingredients: [
      { name: 'Мацони, катык или густой натуральный кефир 3.2%', amount: 600, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 160, category: 'Молочные' },
      { name: 'Вода минеральная сильногазированная ледяная (Нарзан или Боржоми)', amount: 400, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 80, category: 'Жидкости' },
      { name: 'Огурец свежий грунтовой хрустящий', amount: 150, unit: 'г', coldWastePercent: 10, heatLossPercent: 0, estimatedCostPerKg: 120, category: 'Овощи' },
      { name: 'Мята свежая и укроп', amount: 25, unit: 'г', coldWastePercent: 8, heatLossPercent: 0, estimatedCostPerKg: 400, category: 'Зелень' },
      { name: 'Чеснок свежий', amount: 1, unit: 'зубчик', coldWastePercent: 10, heatLossPercent: 0, estimatedCostPerKg: 300, category: 'Овощи' },
      { name: 'Соль морская мелкая', amount: 1, unit: 'ч. л.', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 40, category: 'Специи' },
      { name: 'Лед пищевой в кубиках', amount: 100, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 10, category: 'Жидкости' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Огурец натрите на мелкой терке, слегка отожмите от избытка сока. Зелень укропа и мяты порубите максимально мелко.',
        timerSeconds: 180,
        tip: 'Мелкая терка дает огурцу текстуру нежного пюре, которое взвешивается в напитке.'
      },
      {
        stepNumber: 2,
        instruction: 'Чеснок разотрите в пасту с морской солью плоской стороной ножа.',
        timerSeconds: 60,
        tip: 'Растертый чеснок отдает только тонкий аромат без жгучих кусков.'
      },
      {
        stepNumber: 3,
        instruction: 'В глубоком кувшине или чаше блендера взбейте мацони с солью и чесночной пастой венчиком до однородной кремовой консистенции.',
        timerSeconds: 90,
        tip: 'Взбивание насыщает кисломолочную основу микропузырьками воздуха.'
      },
      {
        stepNumber: 4,
        instruction: 'Тонкой струйкой, продолжая взбивать, влейте ледяную газированную минеральную воду до образования пышной пены.',
        timerSeconds: 60,
        tip: 'Газированная вода делает айран искристым, легким и воздушным.'
      },
      {
        stepNumber: 5,
        instruction: 'Добавьте тертый огурец и рубленую зелень, аккуратно перемешайте ложкой.',
        timerSeconds: 60,
        tip: 'Зелень и огурец не должны взбиваться в блендере, чтобы сохранилась приятная текстура.'
      },
      {
        stepNumber: 6,
        instruction: 'Разлейте по высоким бокалам или глиняным кружкам с кубиками льда, украсьте веточкой мяты.',
        timerSeconds: 60,
        tip: 'Айран — лучший природный изотоник и сопровождение к шашлыку и плову.'
      }
    ],
    chefSecrets: [
      'Сильногазированная минералка с высоким содержанием гидрокарбонатов делает айран необычайно освежающим.',
      'Идеальный баланс соли в айране подчеркивает сливочность и утоляет жажду в жару.'
    ],
    techCard: {
      dishYield: '280 мл на порцию',
      kzhbu: {
        calories: 48,
        proteins: 2.4,
        fats: 2.2,
        carbs: 3.8
      },
      semiFinishedProducts: ['Основа кисломолочная заправленная'],
      technologicalProcess: 'Взбивание и купажирование с газированной водой a la minute.',
      servingTemperature: '4-6°C с кубиковым льдом.',
      storageConditions: 'Хранить в холодильнике не более 12 часов. Перед подачей перемешивать.'
    }
  },
  {
    id: 'sea-buckthorn-tea',
    title: 'Облепиховый согревающий чай с имбирем и бадьяном',
    category: 'drinks',
    description: 'Яркий витаминный настой на свежей сибирской облепихе, протертой с цветочным медом, тонкими лепестками корня имбиря, апельсиновым фрешем, палочкой корицы и звездочкой бадьяна.',
    prepTime: 10,
    cookTime: 10,
    difficulty: 'Легко',
    servings: 4,
    tags: ['Облепиха', 'Чай', 'Имбирь', 'Согревающий', 'Витаминный'],
    ingredients: [
      { name: 'Облепиха свежая или свежемороженая', amount: 250, unit: 'г', coldWastePercent: 5, heatLossPercent: 0, estimatedCostPerKg: 350, category: 'Ягоды' },
      { name: 'Корень имбиря свежий', amount: 25, unit: 'г', coldWastePercent: 15, heatLossPercent: 0, estimatedCostPerKg: 350, category: 'Овощи' },
      { name: 'Апельсин сочный (сок и цедра)', amount: 1, unit: 'шт', coldWastePercent: 20, heatLossPercent: 0, estimatedCostPerKg: 150, category: 'Фрукты' },
      { name: 'Мед цветочный натуральный', amount: 80, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 450, category: 'Бакалея' },
      { name: 'Корица в палочках', amount: 2, unit: 'шт', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1200, category: 'Специи' },
      { name: 'Звездчатый анис (бадьян)', amount: 2, unit: 'шт', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1500, category: 'Специи' },
      { name: 'Вода фильтрованная', amount: 800, unit: 'мл', coldWastePercent: 0, heatLossPercent: 5, estimatedCostPerKg: 5, category: 'Жидкости' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Облепиху промойте. 2/3 ягод переложите в сотейник, разомните толкушкой или пробейте погружным блендером до состояния пюре.',
        timerSeconds: 120,
        tip: 'Разминание высвобождает драгоценное облепиховое масло и сок из косточек.'
      },
      {
        stepNumber: 2,
        instruction: 'Протрите пюре через среднее сито, чтобы удалить жесткие косточки. Оставшуюся треть ягод оставьте целыми для текстуры.',
        timerSeconds: 180,
        tip: 'Протирание обеспечивает шелковистую основу чая без раздражающих крупинок.'
      },
      {
        stepNumber: 3,
        instruction: 'Имбирь нарежьте тончайшими полупрозрачными слайсами. С апельсина снимите полоску цедры экономкой и выжмите сок.',
        timerSeconds: 120,
        tip: 'Тонкая нарезка имбиря дает плавную, благородную согревающую остроту.'
      },
      {
        stepNumber: 4,
        instruction: 'В стеклянный жаропрочный чайник выложите облепиховое пюре, целые ягоды, имбирь, сок и цедру апельсина, палочки корицы и бадьян.',
        timerSeconds: 120,
        tip: 'Стеклянный чайник подчеркивает солнечный янтарный цвет напитка.'
      },
      {
        stepNumber: 5,
        instruction: 'Залейте горячей водой с температурой 85-90°C. Добавьте мед и аккуратно размешайте ложкой.',
        timerSeconds: 60,
        tip: 'Температура до 90°C сохраняет ценный витамин С и энзимы натурального меда.'
      },
      {
        stepNumber: 6,
        instruction: 'Дайте чаю настояться 7-10 минут перед подачей в чайных бокалах.',
        timerSeconds: 480,
        tip: 'За время настаивания бадьян и корица отдадут теплые кондитерские ноты.'
      }
    ],
    chefSecrets: [
      'Мед нельзя заливать кипящей водой (100°C) — остудите воду пару минут после закипания.',
      'Облепиховое масло, всплывающее тонким слоем на поверхность, является мощнейшим природным антиоксидантом.'
    ],
    techCard: {
      dishYield: '250 мл на порцию',
      kzhbu: {
        calories: 78,
        proteins: 0.6,
        fats: 1.8,
        carbs: 15.2
      },
      semiFinishedProducts: ['Облепиховое пюре концентрированное'],
      technologicalProcess: 'Мацерация ягод со специями при 85-90°C.',
      servingTemperature: '70-75°C в прозрачных бокалах из термостекла.',
      storageConditions: 'Ягодная основа хранится в холоде до 3 суток.'
    }
  },
  {
    id: 'cranberry-mors',
    title: 'Клюквенно-брусничный морс с апельсиновой цедрой',
    category: 'drinks',
    description: 'Традиционный старорусский морс методом бережного холодного отжима: свежий сок ягод сохраняет все живые витамины, а жмых бережно отваривается со специями и тростниковым сахаром.',
    prepTime: 15,
    cookTime: 10,
    difficulty: 'Легко',
    servings: 6,
    tags: ['Морс', 'Клюква', 'Брусника', 'Напитки', 'Традиции'],
    ingredients: [
      { name: 'Клюква свежая или дикорастущая', amount: 300, unit: 'г', coldWastePercent: 3, heatLossPercent: 0, estimatedCostPerKg: 380, category: 'Ягоды' },
      { name: 'Брусника таежная', amount: 200, unit: 'г', coldWastePercent: 3, heatLossPercent: 0, estimatedCostPerKg: 420, category: 'Ягоды' },
      { name: 'Сахар тростниковый или белый', amount: 120, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 80, category: 'Бакалея' },
      { name: 'Цедра апельсина свежая', amount: 15, unit: 'г', coldWastePercent: 50, heatLossPercent: 0, estimatedCostPerKg: 150, category: 'Фрукты' },
      { name: 'Корица в палочках и гвоздика', amount: 1, unit: 'шт', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1200, category: 'Специи' },
      { name: 'Вода питьевая артезианская', amount: 1800, unit: 'мл', coldWastePercent: 0, heatLossPercent: 5, estimatedCostPerKg: 5, category: 'Жидкости' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Ягоды клюквы и брусники переберите, промойте и откиньте на дуршлаг.',
        timerSeconds: 180,
        tip: 'Удалите веточки и мятые ягоды, чтобы морс не горчил.'
      },
      {
        stepNumber: 2,
        instruction: 'Истолките ягоды деревянным пестиком в эмалированной или стеклянной посуде. Откиньте на марлю и тщательно отожмите сырой концентрированный сок. Уберите сок в холодильник.',
        timerSeconds: 300,
        tip: 'Сырой сок ни в коем случае не должен кипятиться — в нем сохраняется 100% аскорбиновой кислоты.'
      },
      {
        stepNumber: 3,
        instruction: 'Оставшийся ягодный жмых (мезгу) переложите в кастрюлю, залейте 1.8 л воды, добавьте сахар, апельсиновую цедру и бутончик гвоздики.',
        timerSeconds: 180,
        tip: 'Кожица ягод отдает в отвар весь насыщенный рубиновый цвет и бензойную кислоту.'
      },
      {
        stepNumber: 4,
        instruction: 'Доведите до кипения, проварите ровно 5 минут на умеренном огне и снимите с плиты.',
        timerSeconds: 300,
        tip: 'Пяти минут достаточно для полной экстракции вкуса из мезги.'
      },
      {
        stepNumber: 5,
        instruction: 'Процедите горячий отвар через частое сито, охладите до комнатной температуры (около 35°C).',
        timerSeconds: 1200,
        tip: 'Охлаждение предотвратит термическое разрушение витаминов при смешивании.'
      },
      {
        stepNumber: 6,
        instruction: 'Влейте в остывший отвар отжатый холодный ягодный сок, перемешайте и охладите в графине.',
        timerSeconds: 120,
        tip: 'Купажирование сока с отваром — золотой канон приготовления правильного морса.'
      }
    ],
    chefSecrets: [
      'Брусника содержит природный консервант бензойную кислоту, благодаря чему свежий морс хранится в холодильнике до 5 дней без потери свежести.',
      'Никогда не используйте алюминиевую посуду — ягодные кислоты вступают в реакцию с металлом.'
    ],
    techCard: {
      dishYield: '250 мл на порцию',
      kzhbu: {
        calories: 52,
        proteins: 0.3,
        fats: 0.1,
        carbs: 12.8
      },
      semiFinishedProducts: ['Сок ягодный прямого отжима', 'Ягодный экстракт вареный'],
      technologicalProcess: 'Двухфазная экстракция: холодный отжим сока + отваривание выжимок.',
      servingTemperature: '8-12°C или комнатная.',
      storageConditions: 'При температуре +2...+6°C до 5 суток в стеклянной таре.'
    }
  },
  {
    id: 'lemonade-tarragon',
    title: 'Домашний лимонад «Тархун» на свежем эстрагоне и лайме',
    category: 'drinks',
    description: 'Натуральный изумрудный лимонад на свежих листьях эстрагона (тархуна), пробитых с соком лайма, тростниковым сиропом и газированной водой. Без искусственных красителей и эссенций.',
    prepTime: 15,
    cookTime: 5,
    difficulty: 'Легко',
    servings: 4,
    tags: ['Лимонад', 'Тархун', 'Напитки', 'Освежающий', 'Лето'],
    ingredients: [
      { name: 'Эстрагон свежий (тархун) пушистый', amount: 80, unit: 'г', coldWastePercent: 15, heatLossPercent: 0, estimatedCostPerKg: 800, category: 'Зелень' },
      { name: 'Лайм свежий (сок)', amount: 3, unit: 'шт', coldWastePercent: 30, heatLossPercent: 0, estimatedCostPerKg: 350, category: 'Фрукты' },
      { name: 'Сахар тростниковый или светлый', amount: 100, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 120, category: 'Бакалея' },
      { name: 'Вода питьевая (для сиропа)', amount: 100, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 5, category: 'Жидкости' },
      { name: 'Вода минеральная сильногазированная', amount: 800, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 60, category: 'Жидкости' },
      { name: 'Лед кусковой (для подачи)', amount: 200, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 10, category: 'Жидкости' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Приготовьте сироп: соедините 100 г сахара и 100 мл воды, прогрейте до полного растворения кристаллов, остудите.',
        timerSeconds: 300,
        tip: 'Сахарный сироп моментально растворяется в ледяном лимонаде, в отличие от крупинок сахара.'
      },
      {
        stepNumber: 2,
        instruction: 'Оборвите листочки тархуна со стеблей (грубые стебли отбросьте, они дают горечь).',
        timerSeconds: 180,
        tip: 'Используются только нежные листья — в них содержится анисовый аромат.'
      },
      {
        stepNumber: 3,
        instruction: 'В чашу мощного блендера выложите листья тархуна, влейте охлажденный сахарный сироп и свежевыжатый сок лайма. Пробейте на высокой скорости 45-60 секунд до ярко-зеленой эмульсии.',
        timerSeconds: 60,
        tip: 'Лаймовый сок действует как антиоксидант и сохраняет неоново-изумрудный цвет хлорофилла.'
      },
      {
        stepNumber: 4,
        instruction: 'Процедите полученную основу через мелкое шелковое сито или марлю, слегка отжимая лопаткой.',
        timerSeconds: 180,
        tip: 'Фильтрация делает лимонад кристально чистым и приятным для питья через трубочку.'
      },
      {
        stepNumber: 5,
        instruction: 'Кувшин наполните кубиками льда и тонкими кружками лайма. Влейте зеленую основу тархуна.',
        timerSeconds: 60,
        tip: 'Лед моментально охлаждает напиток и держит температуру подачи.'
      },
      {
        stepNumber: 6,
        instruction: 'Долейте ледяной сильногазированной водой, бережно перемешайте барной ложкой и сразу подавайте.',
        timerSeconds: 60,
        tip: 'Вливайте газировку аккуратно по стенке кувшина, чтобы сохранить искристые пузырьки.'
      }
    ],
    chefSecrets: [
      'Настоящий тархун имеет натуральный травянисто-анисовый вкус и нежный оливково-зеленый оттенок, а не ядовито-зеленый цвет советской газировки.',
      'Для максимального аромата зелень пробивают именно с охлажденным сиропом, чтобы блендер не нагрел хлорофилл.'
    ],
    techCard: {
      dishYield: '300 мл на порцию',
      kzhbu: {
        calories: 62,
        proteins: 0.4,
        fats: 0.0,
        carbs: 15.1
      },
      semiFinishedProducts: ['Тархуновый кордиал-сироп натуральный'],
      technologicalProcess: 'Холодная экстракция хлорофилла в блендере с последующей фильтрацией.',
      servingTemperature: '3-5°C с обильным количеством кускового льда.',
      storageConditions: 'Кордиал хранится в темной бутылке в холодильнике до 48 часов.'
    }
  },
  {
    id: 'mulled-wine-virgin',
    title: 'Пряный гранатовый глинтвейн с яблоком и корицей',
    category: 'drinks',
    description: 'Благородный безалкогольный горячий глинтвейн на основе прямого сока граната и вишни с дольками кисло-сладкого яблока, апельсина, мускатным орехом, гвоздикой и бадьяном.',
    prepTime: 10,
    cookTime: 15,
    difficulty: 'Легко',
    servings: 4,
    tags: ['Глинтвейн', 'Напитки', 'Пряности', 'Согревающий', 'Зима'],
    ingredients: [
      { name: 'Сок гранатовый прямого отжима (без сахара)', amount: 500, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 280, category: 'Жидкости' },
      { name: 'Сок вишневый осветленный', amount: 400, unit: 'мл', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 160, category: 'Жидкости' },
      { name: 'Апельсин крупный (кружки с цедрой)', amount: 1, unit: 'шт', coldWastePercent: 10, heatLossPercent: 0, estimatedCostPerKg: 150, category: 'Фрукты' },
      { name: 'Яблоко кисло-сладкое (Гренни Смит или Антоновка)', amount: 1, unit: 'шт', coldWastePercent: 15, heatLossPercent: 0, estimatedCostPerKg: 120, category: 'Фрукты' },
      { name: 'Мед натуральный или тростниковый сахар', amount: 50, unit: 'г', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 450, category: 'Бакалея' },
      { name: 'Корица в цельных палочках', amount: 2, unit: 'шт', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1200, category: 'Специи' },
      { name: 'Гвоздика сушеная целая', amount: 6, unit: 'шт', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1600, category: 'Специи' },
      { name: 'Бадьян звездочки', amount: 2, unit: 'шт', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 1500, category: 'Специи' },
      { name: 'Кардамон целые коробочки', amount: 4, unit: 'шт', coldWastePercent: 0, heatLossPercent: 0, estimatedCostPerKg: 2200, category: 'Специи' },
      { name: 'Свежий имбирь', amount: 15, unit: 'г', coldWastePercent: 10, heatLossPercent: 0, estimatedCostPerKg: 350, category: 'Овощи' }
    ],
    instructions: [
      {
        stepNumber: 1,
        instruction: 'Яблоко нарежьте крупными дольками, апельсин — кружками толщиной 5 мм. В коробочки кардамона слегка вдавите лезвие ножа, чтобы приоткрыть семена.',
        timerSeconds: 180,
        tip: 'Приоткрытый кардамон отдает смолистые цитрусовые ноты намного интенсивнее.'
      },
      {
        stepNumber: 2,
        instruction: 'В сотейник с толстым дном влейте гранатовый и вишневый соки. Добавьте яблоки, апельсины и слайсы имбиря.',
        timerSeconds: 120,
        tip: 'Смесь граната и вишни дает терпкую винную плотность без капли спирта.'
      },
      {
        stepNumber: 3,
        instruction: 'Заложите весь букет специй: палочки корицы, гвоздику, звездочки бадьяна, кардамон и щепотку тертого мускатного ореха.',
        timerSeconds: 60,
        tip: 'Используйте только цельные пряности — молотые сделают глинтвейн мутным.'
      },
      {
        stepNumber: 4,
        instruction: 'Поставьте сотейник на средний огонь и медленно нагрейте до температуры 75-80°C (до появления первого белого пара и легкой пены по краям). Ни в коем случае не доводите до кипения!',
        timerSeconds: 480,
        tip: 'Кипение испаряет тонкие эфирные ароматы пряностей и разрушает терпкость сока.'
      },
      {
        stepNumber: 5,
        instruction: 'Снимите сотейник с плиты, вмешайте мед, плотно накройте крышкой и укутайте полотенцем на 15 минут для настаивания.',
        timerSeconds: 900,
        tip: 'Настаивание под крышкой раскрывает плотный рождественский аромат.'
      },
      {
        stepNumber: 6,
        instruction: 'Разлейте через ситечко в толстостенные бокалы для айриш-кофе. Украсьте долькой апельсина, палочкой корицы и звездочкой бадьяна.',
        timerSeconds: 120,
        tip: 'Подавайте обжигающе горячим с пряным печеньем или орехами.'
      }
    ],
    chefSecrets: [
      'Терпкость натурального граната при нагреве идеально имитирует сухое красное вино сорта Каберне Совиньон.',
      'Гвоздику лучше воткнуть прямо в апельсиновую кожуру, чтобы она не потерялась в бокале.'
    ],
    techCard: {
      dishYield: '250 мл на 1 порцию',
      kzhbu: {
        calories: 84,
        proteins: 0.5,
        fats: 0.2,
        carbs: 20.1
      },
      semiFinishedProducts: ['Пряный сбор для глинтвейна'],
      technologicalProcess: 'Медленный нагрев соков со специями до 78°C и мацерация 15 мин.',
      servingTemperature: '70-75°C в бокалах с ручкой.',
      storageConditions: 'Хранится в термосе до 6 часов.'
    }
  }
,
  {
    "id": "drink-kok-tea-mint-saffron",
    "title": "Зеленый чай Кок-чай с мятой и шафраном",
    "category": "drinks",
    "description": "Традиционный среднеазиатский зеленый чай №95, заваренный с листьями свежей перечной мяты и нитями кашмирского шафрана. Идеально утоляет жажду в жару и способствует комфортному пищеварению после жирной пищи.",
    "prepTime": 5,
    "cookTime": 7,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Напитки",
      "Чай",
      "Восток",
      "Мята",
      "Шафран"
    ],
    "ingredients": [
      {
        "name": "Чай зеленый байховый листовой (№95)",
        "amount": 15,
        "unit": "г",
        "estimatedCostPerKg": 800,
        "category": "Бакалея"
      },
      {
        "name": "Мята свежая перечная (листья)",
        "amount": 20,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 450,
        "category": "Зелень"
      },
      {
        "name": "Шафран натуральный (нити)",
        "amount": 0.2,
        "unit": "г",
        "estimatedCostPerKg": 150000,
        "category": "Специи"
      },
      {
        "name": "Вода родниковая фильтрованная",
        "amount": 1000,
        "unit": "мл",
        "estimatedCostPerKg": 5,
        "category": "Жидкости"
      },
      {
        "name": "Нават (кристаллический виноградный сахар)",
        "amount": 40,
        "unit": "г",
        "estimatedCostPerKg": 350,
        "category": "Бакалея"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Ополосните фарфоровый чайник крутым кипятком для равномерного прогрева стенок.",
        "timerSeconds": 60,
        "tip": "Горячий фарфор не забирает тепло у заварки."
      },
      {
        "stepNumber": 2,
        "instruction": "Засыпьте чайные листья, нити шафрана и опустите свежую мяту.",
        "timerSeconds": 30,
        "tip": "Шафран окрашивает настой в благородный солнечно-янтарный цвет."
      },
      {
        "stepNumber": 3,
        "instruction": "Залейте водой температуры 85-90°C и настаивайте 5 минут под чайной салфеткой.",
        "timerSeconds": 300,
        "tip": "Зеленый чай нельзя заливать бурлящим кипятком — напиток станет горьким."
      },
      {
        "stepNumber": 4,
        "instruction": "Трижды «пожените» чай (кайтар): налейте пиалу чая и вылейте обратно в чайник.",
        "timerSeconds": 90,
        "tip": "Кайтар насыщает чай кислородом и равномерно распределяет эфирные масла."
      }
    ],
    "chefSecrets": [
      "Трикратное переливание в пиалу и обратно — ключ к раскрытию настоящего восточного чайного букета.",
      "Нават подается вприкуску, а не размешивается сразу."
    ],
    "techCard": {
      "dishYield": "1000 мл (4 пиалы по 250 мл)",
      "kzhbu": {
        "calories": 18,
        "proteins": 0.1,
        "fats": 0,
        "carbs": 4.5
      },
      "semiFinishedProducts": [
        "Настой шафрана и мяты"
      ],
      "technologicalProcess": "Настаивание сухого растительного сырья в деминерализованной воде 85°C.",
      "servingTemperature": "70-75°C в национальных пиалах.",
      "storageConditions": "Употреблять свежезаваренным в течение 30 минут."
    }
  },
  {
    "id": "drink-moroccan-mint-tea",
    "title": "Марокканский мятный чай с апельсиновой цедрой",
    "category": "drinks",
    "description": "Магрибский ритуальный чай на основе китайского Ганпаудера с щедрой охапкой кудрявой мяты, широкой полоской апельсиновой цедры и тростниковым сахаром. Подается с высокой пенной корочкой.",
    "prepTime": 5,
    "cookTime": 10,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Напитки",
      "Марокко",
      "Чай",
      "Мята",
      "Цитрус"
    ],
    "ingredients": [
      {
        "name": "Зеленый чай Ганпаудер (порох)",
        "amount": 15,
        "unit": "г",
        "estimatedCostPerKg": 900,
        "category": "Бакалея"
      },
      {
        "name": "Мята колосистая кудрявая (нана)",
        "amount": 40,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 500,
        "category": "Зелень"
      },
      {
        "name": "Сахар тростниковый кусковой",
        "amount": 50,
        "unit": "г",
        "estimatedCostPerKg": 180,
        "category": "Бакалея"
      },
      {
        "name": "Цедра апельсина свежая",
        "amount": 10,
        "unit": "г",
        "coldWastePercent": 20,
        "estimatedCostPerKg": 150,
        "category": "Фрукты"
      },
      {
        "name": "Вода питьевая",
        "amount": 900,
        "unit": "мл",
        "estimatedCostPerKg": 5,
        "category": "Жидкости"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Промойте чайную заварку кипятком: залейте 100 мл кипятка в чайник, слейте через 30 секунд — это смоет пыль и снимет горечь.",
        "timerSeconds": 60,
        "tip": "Первая вода убирает избыточную терпкость листьев."
      },
      {
        "stepNumber": 2,
        "instruction": "В металлический марокканский чайник добавьте пучок свежей мяты, сахар и полоску апельсиновой цедры.",
        "timerSeconds": 60,
        "tip": "Свежая цедра придает цитрусовую карамельность."
      },
      {
        "stepNumber": 3,
        "instruction": "Залейте оставшимся кипятком и поставьте чайник на слабый огонь на 2 минуты для закипания.",
        "timerSeconds": 120,
        "tip": "Легкое кипячение карамелизует сахар вместе с мятой."
      },
      {
        "stepNumber": 4,
        "instruction": "Разливайте чай в тонкие стеклянные стаканчики с высоты полуметра, создавая устойчивую плотную пену «тюрбан».",
        "timerSeconds": 90,
        "tip": "Пена сохраняет температуру и аромат внутри стакана."
      }
    ],
    "chefSecrets": [
      "Разливание с высоты полуметра насыщает чай пузырьками воздуха, смягчая вкус.",
      "Мята не должна сохнуть — используйте только упругие сочные стебли."
    ],
    "techCard": {
      "dishYield": "900 мл",
      "kzhbu": {
        "calories": 24,
        "proteins": 0.1,
        "fats": 0,
        "carbs": 5.9
      },
      "semiFinishedProducts": [
        "Промытый лист ганпаудера"
      ],
      "technologicalProcess": "Кратковременная варка в чайнике на медленном огне.",
      "servingTemperature": "80°C в традиционных армудах или стеклянных стаканах.",
      "storageConditions": "Употреблять сразу после приготовления."
    }
  },
  {
    "id": "drink-ginger-lemon-honey-shot",
    "title": "Имбирный согревающий шот с лимоном и медом",
    "category": "drinks",
    "description": "Концентрированный иммунный эликсир холодного отжима: свежевыжатый сок молодого корня имбиря, сок сицилийского лимона, таежный мед и щепотка кайенского перца.",
    "prepTime": 10,
    "cookTime": 0,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Напитки",
      "Иммунитет",
      "Имбирь",
      "Лимон",
      "Мед"
    ],
    "ingredients": [
      {
        "name": "Корень имбиря свежий сочный",
        "amount": 150,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 350,
        "category": "Овощи"
      },
      {
        "name": "Лимоны свежие",
        "amount": 2,
        "unit": "шт",
        "coldWastePercent": 30,
        "estimatedCostPerKg": 180,
        "category": "Фрукты"
      },
      {
        "name": "Мед натуральный цветочный",
        "amount": 60,
        "unit": "г",
        "estimatedCostPerKg": 450,
        "category": "Бакалея"
      },
      {
        "name": "Кайенский перец молотый",
        "amount": 0.5,
        "unit": "г",
        "estimatedCostPerKg": 900,
        "category": "Специи"
      },
      {
        "name": "Куркума молотая натуральная",
        "amount": 1,
        "unit": "г",
        "estimatedCostPerKg": 600,
        "category": "Специи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Имбирь очистите ребром чайной ложки и отожмите сок через шнековую соковыжималку или натрите и отожмите через марлю.",
        "timerSeconds": 300,
        "tip": "Очистка ложкой снимает только тончайшую шкурку, сохраняя ценную мякоть."
      },
      {
        "stepNumber": 2,
        "instruction": "Отожмите сок из свежих лимонов, процедите от косточек.",
        "timerSeconds": 120,
        "tip": "Цитрусовый сок активизирует биоактивные гингеролы имбиря."
      },
      {
        "stepNumber": 3,
        "instruction": "Смешайте имбирный и лимонный сок с жидким медом, куркумой и кайенским перцем до полного растворения меда.",
        "timerSeconds": 180,
        "tip": "Куркума усиливает противовоспалительный эффект."
      },
      {
        "stepNumber": 4,
        "instruction": "Разлейте по шотам (порциям по 50 мл) и подавайте сразу.",
        "timerSeconds": 60,
        "tip": "Взбалтывайте перед употреблением."
      }
    ],
    "chefSecrets": [
      "Никакой термической обработки: сохраняются 100% энзимов и витамина C.",
      "Кайенский перец ускоряет кровообращение и моментально согревает организм."
    ],
    "techCard": {
      "dishYield": "220 мл (4 порции по 55 мл)",
      "kzhbu": {
        "calories": 88,
        "proteins": 1.1,
        "fats": 0.2,
        "carbs": 21
      },
      "semiFinishedProducts": [
        "Свежевыжатый сок имбиря и лимона"
      ],
      "technologicalProcess": "Холодное прессование и смешивание без термической обработки.",
      "servingTemperature": "14-16°C.",
      "storageConditions": "Хранить в плотно закрытой стеклянной бутылке в холодильнике до 48 часов."
    }
  },
  {
    "id": "drink-masala-chai",
    "title": "Пряный индийский Чай Масала на молоке",
    "category": "drinks",
    "description": "Ароматный индийский напиток: листовой чай ассам, цельное молоко, свежий имбирь, дробленый зеленый кардамон, корица, гвоздика, черный перец и мускатный орех.",
    "prepTime": 5,
    "cookTime": 12,
    "difficulty": "Средне",
    "servings": 4,
    "tags": [
      "Напитки",
      "Масала",
      "Индия",
      "Чай",
      "Пряности"
    ],
    "ingredients": [
      {
        "name": "Чай черный листовой Ассам (крепкий CTC)",
        "amount": 15,
        "unit": "г",
        "estimatedCostPerKg": 750,
        "category": "Бакалея"
      },
      {
        "name": "Молоко коровье 3.2-3.5%",
        "amount": 500,
        "unit": "мл",
        "estimatedCostPerKg": 85,
        "category": "Молочные"
      },
      {
        "name": "Вода питьевая",
        "amount": 500,
        "unit": "мл",
        "estimatedCostPerKg": 5,
        "category": "Жидкости"
      },
      {
        "name": "Имбирь свежий тертый",
        "amount": 20,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 350,
        "category": "Овощи"
      },
      {
        "name": "Кардамон зеленый (коробочки)",
        "amount": 6,
        "unit": "шт",
        "estimatedCostPerKg": 2800,
        "category": "Специи"
      },
      {
        "name": "Корица цейлонская (палочка)",
        "amount": 1,
        "unit": "шт",
        "estimatedCostPerKg": 1200,
        "category": "Специи"
      },
      {
        "name": "Гвоздика сушеная",
        "amount": 4,
        "unit": "шт",
        "estimatedCostPerKg": 1100,
        "category": "Специи"
      },
      {
        "name": "Перец черный горошком",
        "amount": 6,
        "unit": "шт",
        "estimatedCostPerKg": 1100,
        "category": "Специи"
      },
      {
        "name": "Сахар тростниковый или пальмовый",
        "amount": 35,
        "unit": "г",
        "estimatedCostPerKg": 180,
        "category": "Бакалея"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "В ступке слегка раздавите коробочки кардамона, гвоздику, черный перец и палочку корицы.",
        "timerSeconds": 120,
        "tip": "Дробленые специи мгновенно отдают эфирные масла при варке."
      },
      {
        "stepNumber": 2,
        "instruction": "В сотейнике соедините воду, дробленые специи и тертый имбирь. Доведите до кипения и варите на медленном огне 5 минут.",
        "timerSeconds": 300,
        "tip": "Сначала пряности вывариваются в воде, так как в чистом молоке их экстракция идет медленнее."
      },
      {
        "stepNumber": 3,
        "instruction": "Всыпьте чайные листья и сахар, проварите еще 2 минуты.",
        "timerSeconds": 120,
        "tip": "Крепкий индийский ассам дает глубокий янтарный тон."
      },
      {
        "stepNumber": 4,
        "instruction": "Влейте молоко, доведите до поднятия пенной шапки трижды, убавляя огонь при закипании.",
        "timerSeconds": 240,
        "tip": "Троекратное поднятие пены делает напиток плотным и бархатистым."
      },
      {
        "stepNumber": 5,
        "instruction": "Процедите через мелкое ситечко в прогретые керамические кружки.",
        "timerSeconds": 60,
        "tip": "Подавайте горячим."
      }
    ],
    "chefSecrets": [
      "Именно зеленый кардамон и свежий имбирь формируют безошибочный профиль настоящей делийской масалы.",
      "Черный перец в составе раскрывает глубину корицы."
    ],
    "techCard": {
      "dishYield": "900 мл готового напитка",
      "kzhbu": {
        "calories": 48,
        "proteins": 1.8,
        "fats": 1.9,
        "carbs": 6.2
      },
      "semiFinishedProducts": [
        "Пряный отвар масала-смеси"
      ],
      "technologicalProcess": "Двухэтапная варка пряностей в воде с последующим добавлением чая и молока.",
      "servingTemperature": "75-80°C.",
      "storageConditions": "Употреблять сразу после приготовления."
    }
  },
  {
    "id": "drink-russian-sbiten",
    "title": "Ягодный старинный сбитень с медом и травами",
    "category": "drinks",
    "description": "Древнерусский горячий напиток: липовый мед, таежные ягоды клюквы и черники, зверобой, чабрец, мята, бадьян и душистый перец. Глубокий согревающий и восстанавливающий силы напиток.",
    "prepTime": 10,
    "cookTime": 15,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Напитки",
      "Сбитень",
      "Русская кухня",
      "Мед",
      "Ягоды"
    ],
    "ingredients": [
      {
        "name": "Мед липовый или разнотравье",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 450,
        "category": "Бакалея"
      },
      {
        "name": "Клюква свежая или мороженая",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 300,
        "category": "Ягоды"
      },
      {
        "name": "Вода родниковая",
        "amount": 1000,
        "unit": "мл",
        "estimatedCostPerKg": 5,
        "category": "Жидкости"
      },
      {
        "name": "Чабрец (тимьян) сушеный",
        "amount": 5,
        "unit": "г",
        "estimatedCostPerKg": 800,
        "category": "Специи"
      },
      {
        "name": "Мята сушеная",
        "amount": 5,
        "unit": "г",
        "estimatedCostPerKg": 700,
        "category": "Специи"
      },
      {
        "name": "Бадьян (звездчатый анис)",
        "amount": 2,
        "unit": "шт",
        "estimatedCostPerKg": 1400,
        "category": "Специи"
      },
      {
        "name": "Корица палочка",
        "amount": 1,
        "unit": "шт",
        "estimatedCostPerKg": 1200,
        "category": "Специи"
      },
      {
        "name": "Гвоздика сушеная",
        "amount": 3,
        "unit": "шт",
        "estimatedCostPerKg": 1100,
        "category": "Специи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Клюкву разомните деревянной толкушкой и отожмите сок через марлю, уберите свежий сок в холодильник.",
        "timerSeconds": 180,
        "tip": "Свежий ягодный сок сохранит максимум витаминов, если не варить его."
      },
      {
        "stepNumber": 2,
        "instruction": "Ягодный жмых, травы, бадьян, корицу и гвоздику залейте водой в кастрюле, доведите до кипения и томите 10 минут на слабом огне.",
        "timerSeconds": 600,
        "tip": "Медленный нагрев вытягивает аромат пряностей."
      },
      {
        "stepNumber": 3,
        "instruction": "Снимите отвар с огня, процедите через ткань и остудите до 65-70°C.",
        "timerSeconds": 300,
        "tip": "Мед нельзя добавлять в кипяток выше 70°C, чтобы не разрушить ферменты."
      },
      {
        "stepNumber": 4,
        "instruction": "В теплый процеженный отвар добавьте мед и сырой клюквенный сок, тщательно размешайте деревянной ложкой.",
        "timerSeconds": 120,
        "tip": "Смешивание двух частей («сбивание») дало историческое название напитку."
      }
    ],
    "chefSecrets": [
      "Раздельное введение сока и меда после отваривания жмыха сохраняет живой вкус и рубиновую прозрачность.",
      "Подается в глиняных кувшинчиках."
    ],
    "techCard": {
      "dishYield": "1000 мл напитка",
      "kzhbu": {
        "calories": 52,
        "proteins": 0.2,
        "fats": 0.1,
        "carbs": 12.8
      },
      "semiFinishedProducts": [
        "Свежеотжатый клюквенный сок",
        "Пряный травяной взвар"
      ],
      "technologicalProcess": "Отваривание жмыха и пряностей с последующим вводом меда и сырого сока.",
      "servingTemperature": "65-70°C.",
      "storageConditions": "В термосе до 12 часов."
    }
  },
  {
    "id": "drink-uzbek-uzvar-dried-fruits",
    "title": "Освежающий узбекский компот из сухофруктов (Узвар)",
    "category": "drinks",
    "description": "Настоящий восточный узвар без варки на бурном кипятке: отборная урюк-курага, горный темный изюм сояги, сушеный инжир, сушеные яблоки и коробочки кардамона.",
    "prepTime": 10,
    "cookTime": 20,
    "difficulty": "Легко",
    "servings": 6,
    "tags": [
      "Напитки",
      "Компот",
      "Сухофрукты",
      "Восток",
      "Освежающий"
    ],
    "ingredients": [
      {
        "name": "Курага горная сушеная (урюк)",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 450,
        "category": "Бакалея"
      },
      {
        "name": "Изюм темный теневой сушки",
        "amount": 100,
        "unit": "г",
        "estimatedCostPerKg": 350,
        "category": "Бакалея"
      },
      {
        "name": "Чернослив без косточек вяленый",
        "amount": 80,
        "unit": "г",
        "estimatedCostPerKg": 400,
        "category": "Бакалея"
      },
      {
        "name": "Яблоки сушеные дольками",
        "amount": 70,
        "unit": "г",
        "estimatedCostPerKg": 250,
        "category": "Бакалея"
      },
      {
        "name": "Сахар тростниковый (по желанию)",
        "amount": 40,
        "unit": "г",
        "estimatedCostPerKg": 180,
        "category": "Бакалея"
      },
      {
        "name": "Вода питьевая родниковая",
        "amount": 2000,
        "unit": "мл",
        "estimatedCostPerKg": 5,
        "category": "Жидкости"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Сухофрукты промойте в теплой воде 3 раза, чтобы удалить горную пыль, затем откиньте на дуршлаг.",
        "timerSeconds": 180,
        "tip": "Тщательная промывка сохраняет прозрачность узвара."
      },
      {
        "stepNumber": 2,
        "instruction": "В кастрюлю с холодной водой опустите сначала яблоки и урюк, доведите до едва заметного кипения.",
        "timerSeconds": 600,
        "tip": "Плотным сухофруктам нужно больше времени для отдачи вкуса."
      },
      {
        "stepNumber": 3,
        "instruction": "Добавьте изюм и чернослив, варите на минимальном огне всего 5 минут и снимите с плиты.",
        "timerSeconds": 300,
        "tip": "Не кипятите долго — нежные ягоды должны остаться целыми."
      },
      {
        "stepNumber": 4,
        "instruction": "Укутайте кастрюлю плотным полотенцем и оставьте настаиваться на 4-6 часов до полного остывания.",
        "timerSeconds": 14400,
        "tip": "При медленном остывании сушеные фрукты отдают все сахара и янтарный цвет без варки."
      }
    ],
    "chefSecrets": [
      "Секрет ресторанного узвара — не варить, а томить и настаивать под крышкой.",
      "Подается охлажденным в кувшинах с долькой лимона."
    ],
    "techCard": {
      "dishYield": "2000 мл напитка",
      "kzhbu": {
        "calories": 45,
        "proteins": 0.5,
        "fats": 0.1,
        "carbs": 10.9
      },
      "semiFinishedProducts": [
        "Промытые горные сухофрукты"
      ],
      "technologicalProcess": "Кратковременное прогревание с длительным настаиванием в термостатических условиях.",
      "servingTemperature": "10-12°C.",
      "storageConditions": "В стеклянном кувшине в холодильнике до 4 суток."
    }
  },
  {
    "id": "drink-cherry-mint-iced-compote",
    "title": "Вишневый компот с мятой и колотым льдом",
    "category": "drinks",
    "description": "Освежающий кисло-сладкий напиток из спелой вишни, веточек свежей мяты и щепотки ванили. Идеален для летних обедов и пикников.",
    "prepTime": 10,
    "cookTime": 10,
    "difficulty": "Легко",
    "servings": 6,
    "tags": [
      "Напитки",
      "Вишня",
      "Мята",
      "Компот",
      "Лето"
    ],
    "ingredients": [
      {
        "name": "Вишня свежая или с/м без косточек",
        "amount": 400,
        "unit": "г",
        "estimatedCostPerKg": 280,
        "category": "Ягоды"
      },
      {
        "name": "Мята свежая (пучок)",
        "amount": 25,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 450,
        "category": "Зелень"
      },
      {
        "name": "Сахар песок",
        "amount": 100,
        "unit": "г",
        "estimatedCostPerKg": 70,
        "category": "Бакалея"
      },
      {
        "name": "Ванильный сахар натуральный",
        "amount": 5,
        "unit": "г",
        "estimatedCostPerKg": 900,
        "category": "Бакалея"
      },
      {
        "name": "Вода фильтрованная",
        "amount": 1800,
        "unit": "мл",
        "estimatedCostPerKg": 5,
        "category": "Жидкости"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "В кастрюлю налейте воду, всыпьте сахар и доведите до кипения, помешивая до растворения.",
        "timerSeconds": 300,
        "tip": "Сахарный сироп предотвращает разрушение структуры ягод."
      },
      {
        "stepNumber": 2,
        "instruction": "Опустите вишню в кипящий сироп, убавьте огонь и варите 7 минут.",
        "timerSeconds": 420,
        "tip": "Вишня быстро отдает насыщенный рубиновый цвет."
      },
      {
        "stepNumber": 3,
        "instruction": "Снимите с огня, добавьте свежие веточки мяты и ванильный сахар, накройте крышкой.",
        "timerSeconds": 60,
        "tip": "Мяту нельзя кипятить — она вводится в горячий компот в конце."
      },
      {
        "stepNumber": 4,
        "instruction": "Остудите до комнатной температуры, удалите веточки мяты и уберите в холодильник.",
        "timerSeconds": 3600,
        "tip": "Подавайте с кубиками льда и свежим листочком мяты."
      }
    ],
    "chefSecrets": [
      "Удаление мяты через 30 минут настаивания сохраняет свежий мятный дух без появления травянистой горечи."
    ],
    "techCard": {
      "dishYield": "1800 мл",
      "kzhbu": {
        "calories": 36,
        "proteins": 0.3,
        "fats": 0.1,
        "carbs": 8.8
      },
      "semiFinishedProducts": [
        "Вишневый сахарный настой"
      ],
      "technologicalProcess": "Краткая варка ягод в легком сиропе с ароматизацией мятой.",
      "servingTemperature": "6-8°C с пищевым льдом.",
      "storageConditions": "В холодильнике до 72 часов."
    }
  },
  {
    "id": "drink-classic-bread-kvass",
    "title": "Домашний хлебный квас двойного брожения",
    "category": "drinks",
    "description": "Настоящий русский квас на сухарях из бородинского хлеба с изюмом, мятой и ржаным солодом. Натуральная естественная газация, плотная пена и выразительный ржаной хлебный дух.",
    "prepTime": 20,
    "cookTime": 10,
    "difficulty": "Средне",
    "servings": 8,
    "tags": [
      "Напитки",
      "Квас",
      "Русская кухня",
      "Ферментация",
      "Освежающий"
    ],
    "ingredients": [
      {
        "name": "Хлеб бородинский или ржаной подовый",
        "amount": 500,
        "unit": "г",
        "estimatedCostPerKg": 80,
        "category": "Хлеб"
      },
      {
        "name": "Вода кипяченая теплая",
        "amount": 3000,
        "unit": "мл",
        "estimatedCostPerKg": 5,
        "category": "Жидкости"
      },
      {
        "name": "Сахар песок",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 70,
        "category": "Бакалея"
      },
      {
        "name": "Дрожжи прессованные свежие (или сухие 5 г)",
        "amount": 15,
        "unit": "г",
        "estimatedCostPerKg": 200,
        "category": "Бакалея"
      },
      {
        "name": "Изюм темный немытый",
        "amount": 30,
        "unit": "г",
        "estimatedCostPerKg": 350,
        "category": "Бакалея"
      },
      {
        "name": "Мята сушеная",
        "amount": 5,
        "unit": "г",
        "estimatedCostPerKg": 700,
        "category": "Специи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Бородинский хлеб нарежьте кубиками и подсушите в духовке при 180°C до темно-коричневого цвета (не допуская гари).",
        "timerSeconds": 900,
        "tip": "Степень колера сухарей определяет насыщенный темный цвет и карамельный вкус кваса."
      },
      {
        "stepNumber": 2,
        "instruction": "Сложите горячие сухари в 3-литровую банку, залейте кипятком, добавьте половину сахара и мяту. Оставьте остывать до 30°C.",
        "timerSeconds": 7200,
        "tip": "Дрожжи можно вводить строго при температуре ниже 35°C."
      },
      {
        "stepNumber": 3,
        "instruction": "Разведите дрожжи с ложкой сахара в теплой воде, влейте в банку к сухарям. Накройте марлей и оставьте бродить при 22-25°C на 24 часа.",
        "timerSeconds": 86400,
        "tip": "Начнется бурное первичное брожение с образованием пены."
      },
      {
        "stepNumber": 4,
        "instruction": "Процедите квас через 4 слоя марли, добавьте оставшийся сахар и изюм. Разлейте по пластиковым бутылкам, плотно закрутите крышки.",
        "timerSeconds": 600,
        "tip": "Дикие дрожжи на немытом изюме запускают дображивание и карбонизацию."
      },
      {
        "stepNumber": 5,
        "instruction": "Оставьте бутылки в тепле на 4-6 часов до твердости пластика, затем уберите в холод на 24 часа.",
        "timerSeconds": 86400,
        "tip": "Холод останавливает брожение и растворяет углекислый газ."
      }
    ],
    "chefSecrets": [
      "Хорошо поджаренные сухари дают глубокий цвет без искусственных колеров.",
      "Изюм делает квас игристым и газированным."
    ],
    "techCard": {
      "dishYield": "2800 мл готового кваса",
      "kzhbu": {
        "calories": 34,
        "proteins": 0.3,
        "fats": 0,
        "carbs": 8.2
      },
      "semiFinishedProducts": [
        "Ржаные темные сухари",
        "Сусло хлебное"
      ],
      "technologicalProcess": "Спиртовое и молочнокислое сбраживание хлебного сусла с вторичной карбонизацией.",
      "servingTemperature": "4-6°C.",
      "storageConditions": "В плотно укупоренных бутылках в холодильнике до 7 суток."
    }
  },
  {
    "id": "drink-white-malt-okroshka-kvass",
    "title": "Белый солодовый квас для окрошки с хреном",
    "category": "drinks",
    "description": "Традиционный кислый белый квас на ржаной и пшеничной муке со светлым солодом, корнем хрена и укропом. Обладает резкой свежей кислинкой, делающей окрошку идеальной.",
    "prepTime": 20,
    "cookTime": 15,
    "difficulty": "Средне",
    "servings": 8,
    "tags": [
      "Напитки",
      "Квас",
      "Окрошка",
      "Белый квас",
      "Хрен"
    ],
    "ingredients": [
      {
        "name": "Мука ржаная цельнозерновая",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 60,
        "category": "Крупы и мука"
      },
      {
        "name": "Мука пшеничная 1 сорт",
        "amount": 100,
        "unit": "г",
        "estimatedCostPerKg": 50,
        "category": "Крупы и мука"
      },
      {
        "name": "Солод ржаной неферментированный (белый)",
        "amount": 50,
        "unit": "г",
        "estimatedCostPerKg": 180,
        "category": "Бакалея"
      },
      {
        "name": "Корень хрена тертый свежий",
        "amount": 20,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 400,
        "category": "Овощи"
      },
      {
        "name": "Вода родниковая",
        "amount": 2500,
        "unit": "мл",
        "estimatedCostPerKg": 5,
        "category": "Жидкости"
      },
      {
        "name": "Мед или сахар",
        "amount": 30,
        "unit": "г",
        "estimatedCostPerKg": 180,
        "category": "Бакалея"
      },
      {
        "name": "Закваска ржаная (или 3 г сухих дрожжей)",
        "amount": 50,
        "unit": "г",
        "estimatedCostPerKg": 50,
        "category": "Бакалея"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Смешайте ржаную муку, пшеничную муку и солод в сотейнике, залейте 500 мл горячей воды (65°C) и вымесите жидкое тесто.",
        "timerSeconds": 300,
        "tip": "Осахаривание муки солодом при 65°C дает природные сахара."
      },
      {
        "stepNumber": 2,
        "instruction": "Оставьте тесто в теплом месте на 3 часа для осахаривания, затем залейте оставшейся теплой кипяченой водой.",
        "timerSeconds": 10800,
        "tip": "Сусло приобретет молочно-белый оттенок."
      },
      {
        "stepNumber": 3,
        "instruction": "Добавьте закваску, мед и тертый хрен. Оставьте бродить при комнатной температуре на 24 часа.",
        "timerSeconds": 86400,
        "tip": "Хрен придает резкий бодрящий характер."
      },
      {
        "stepNumber": 4,
        "instruction": "Слейте прозрачный квас с осадка через несколько слоев марли, перелейте в кувшин и охладите.",
        "timerSeconds": 600,
        "tip": "Осадок можно использовать как готовую закваску для следующей порции."
      }
    ],
    "chefSecrets": [
      "Белый квас принципиально несладкий: он создается для гастрономических супов.",
      "Тертый хрен при брожении дает легкую резкую ядреность."
    ],
    "techCard": {
      "dishYield": "2300 мл",
      "kzhbu": {
        "calories": 22,
        "proteins": 0.6,
        "fats": 0.1,
        "carbs": 4.8
      },
      "semiFinishedProducts": [
        "Осахаренное мучное сусло"
      ],
      "technologicalProcess": "Молочнокислое брожение солодового затора.",
      "servingTemperature": "4-6°C.",
      "storageConditions": "В холодильнике до 5 суток."
    }
  },
  {
    "id": "drink-strawberry-basil-lemonade",
    "title": "Клубнично-базиликовый крафтовый лимонад",
    "category": "drinks",
    "description": "Освежающий ресторанный лимонад: сочное пюре спелой садовой клубники, свежий фиолетовый и зеленый базилик, сок сицилийского лимона и газированная минеральная вода.",
    "prepTime": 10,
    "cookTime": 5,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Напитки",
      "Лимонад",
      "Клубника",
      "Базилик",
      "Лето"
    ],
    "ingredients": [
      {
        "name": "Клубника свежая спелая",
        "amount": 300,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 350,
        "category": "Ягоды"
      },
      {
        "name": "Базилик свежий зеленый (листья)",
        "amount": 20,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 450,
        "category": "Зелень"
      },
      {
        "name": "Лимоны свежие (сок)",
        "amount": 3,
        "unit": "шт",
        "coldWastePercent": 30,
        "estimatedCostPerKg": 180,
        "category": "Фрукты"
      },
      {
        "name": "Сироп сахарный простой (1:1)",
        "amount": 80,
        "unit": "мл",
        "estimatedCostPerKg": 80,
        "category": "Бакалея"
      },
      {
        "name": "Вода минеральная сильногазированная",
        "amount": 800,
        "unit": "мл",
        "estimatedCostPerKg": 40,
        "category": "Жидкости"
      },
      {
        "name": "Лед кусковой",
        "amount": 200,
        "unit": "г",
        "estimatedCostPerKg": 10,
        "category": "Жидкости"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Клубнику промойте, удалите чашелистики и пробейте блендером в нежное пюре.",
        "timerSeconds": 120,
        "tip": "Свежая клубника дает насыщенный естественный цвет."
      },
      {
        "stepNumber": 2,
        "instruction": "В кувшине разомните мадлером листья базилика вместе с сахарным сиропом и свежевыжатым соком лимона.",
        "timerSeconds": 90,
        "tip": "Легкое растирание высвобождает анисово-перечные эфирные масла базилика."
      },
      {
        "stepNumber": 3,
        "instruction": "Добавьте клубничное пюре и перемешайте барной ложкой.",
        "timerSeconds": 60,
        "tip": "Образуется плотная ароматная основа лимонада (cordial)."
      },
      {
        "stepNumber": 4,
        "instruction": "Заполните кувшин кубиками льда и влейте сильногазированную минеральную воду, аккуратно приподнимая осадок со дна.",
        "timerSeconds": 60,
        "tip": "Медленное перемешивание сохраняет игристость пузырьков."
      }
    ],
    "chefSecrets": [
      "Базилик с клубникой — классическая пара высокой гастрономии: пряность травы подчеркивает ягодную сладость."
    ],
    "techCard": {
      "dishYield": "1200 мл",
      "kzhbu": {
        "calories": 38,
        "proteins": 0.4,
        "fats": 0.1,
        "carbs": 9.1
      },
      "semiFinishedProducts": [
        "Клубнично-базиликовый кордиал"
      ],
      "technologicalProcess": "Мацерация трав в сиропе с последующим разбавлением газированной водой.",
      "servingTemperature": "4-6°C с кусковым льдом.",
      "storageConditions": "Употреблять сразу после смешивания с газированной водой."
    }
  },
  {
    "id": "drink-classic-citrus-lemongrass-lemonade",
    "title": "Цитрусовый лимонад с лемонграссом и мятой",
    "category": "drinks",
    "description": "Бодрящий цитрусовый микс: сок апельсина, грейпфрута и лайма, сваренный сироп из стеблей лемонграсса и листьев кафрского лайма с газированной родниковой водой.",
    "prepTime": 15,
    "cookTime": 10,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Напитки",
      "Лимонад",
      "Цитрус",
      "Лемонграсс",
      "Освежающий"
    ],
    "ingredients": [
      {
        "name": "Апельсины сочные",
        "amount": 2,
        "unit": "шт",
        "coldWastePercent": 30,
        "estimatedCostPerKg": 150,
        "category": "Фрукты"
      },
      {
        "name": "Грейпфрут розовый",
        "amount": 1,
        "unit": "шт",
        "coldWastePercent": 35,
        "estimatedCostPerKg": 170,
        "category": "Фрукты"
      },
      {
        "name": "Лайм свежий",
        "amount": 2,
        "unit": "шт",
        "coldWastePercent": 25,
        "estimatedCostPerKg": 350,
        "category": "Фрукты"
      },
      {
        "name": "Стебли лемонграсса свежие",
        "amount": 3,
        "unit": "шт",
        "coldWastePercent": 20,
        "estimatedCostPerKg": 800,
        "category": "Овощи"
      },
      {
        "name": "Сахар тростниковый",
        "amount": 70,
        "unit": "г",
        "estimatedCostPerKg": 180,
        "category": "Бакалея"
      },
      {
        "name": "Вода питьевая для сиропа",
        "amount": 150,
        "unit": "мл",
        "estimatedCostPerKg": 5,
        "category": "Жидкости"
      },
      {
        "name": "Вода газированная",
        "amount": 800,
        "unit": "мл",
        "estimatedCostPerKg": 40,
        "category": "Жидкости"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Стебли лемонграсса отбейте обратной стороной ножа и нарежьте кусочками по 2 см.",
        "timerSeconds": 120,
        "tip": "Отбивание разрушает клетки стебля, освобождая эфирное масло цитраль."
      },
      {
        "stepNumber": 2,
        "instruction": "В сотейнике сварите сироп: вода, сахар и лемонграсс. Кипятите 5 минут, снимите и остудите до полного остывания.",
        "timerSeconds": 300,
        "tip": "Остывая со стеблями, сироп приобретает тонкий леденцовый аромат."
      },
      {
        "stepNumber": 3,
        "instruction": "Отожмите свежий сок из апельсинов, грейпфрута и лайма, процедите через сито.",
        "timerSeconds": 240,
        "tip": "Свежевыжатый сок дает идеальную живую кислотность."
      },
      {
        "stepNumber": 4,
        "instruction": "В кувшине соедините процеженный цитрусовый сок, сироп лемонграсса, лед и газированную воду.",
        "timerSeconds": 60,
        "tip": "Перемешайте барной ложкой."
      }
    ],
    "chefSecrets": [
      "Розовый грейпфрут придает легкую благородную горчинку, которая делает лимонад взрослым и сложным."
    ],
    "techCard": {
      "dishYield": "1200 мл",
      "kzhbu": {
        "calories": 42,
        "proteins": 0.5,
        "fats": 0.1,
        "carbs": 10.2
      },
      "semiFinishedProducts": [
        "Сироп лемонграсса охлажденный",
        "Цитрусовый фреш"
      ],
      "technologicalProcess": "Варка травяного сиропа и купажирование со свежими соками.",
      "servingTemperature": "4-6°C в высоких бокалах хайбол.",
      "storageConditions": "Основа хранится в холодильнике до 48 часов."
    }
  },
  {
    "id": "drink-cucumber-lime-detox",
    "title": "Огуречно-лаймовый детокс-лимонад с мятой",
    "category": "drinks",
    "description": "Ультра-освежающий напиток с хрустящим огурцом, соком лайма, листьями мяты и родниковой водой. Мгновенно утоляет жажду, выводит токсины и дарит ощущение легкости.",
    "prepTime": 10,
    "cookTime": 0,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Напитки",
      "Детокс",
      "Огурец",
      "Лайм",
      "Фитнес"
    ],
    "ingredients": [
      {
        "name": "Огурцы свежие грунтовые сочные",
        "amount": 300,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 120,
        "category": "Овощи"
      },
      {
        "name": "Лайм свежий",
        "amount": 3,
        "unit": "шт",
        "coldWastePercent": 20,
        "estimatedCostPerKg": 350,
        "category": "Фрукты"
      },
      {
        "name": "Мята свежая перечная",
        "amount": 20,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 450,
        "category": "Зелень"
      },
      {
        "name": "Мед светлый акациевый (или сироп топинамбура)",
        "amount": 40,
        "unit": "г",
        "estimatedCostPerKg": 450,
        "category": "Бакалея"
      },
      {
        "name": "Вода родниковая чистая охлажденная",
        "amount": 900,
        "unit": "мл",
        "estimatedCostPerKg": 5,
        "category": "Жидкости"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Огурцы нарежьте и отожмите сок (или пробейте в блендере с 200 мл воды и процедите через сито).",
        "timerSeconds": 180,
        "tip": "Огуречный сок содержит кремний и калий, моментально восполняя гидратацию."
      },
      {
        "stepNumber": 2,
        "instruction": "Из лаймов выжмите сок, цедру одного лайма натрите мелкой теркой.",
        "timerSeconds": 120,
        "tip": "Эфирные масла цедры лайма создают яркий аромат."
      },
      {
        "stepNumber": 3,
        "instruction": "Листья мяты помните в ступке с медом и лаймовым соком.",
        "timerSeconds": 90,
        "tip": "Мед полностью растворяется в кислом лаймовом соке."
      },
      {
        "stepNumber": 4,
        "instruction": "В кувшине соедините огуречный сок, лаймовую основу, холодную воду и кубики льда.",
        "timerSeconds": 60,
        "tip": "Украсьте тонкими слайсами огурца вдоль стенок кувшина."
      }
    ],
    "chefSecrets": [
      "Тонкие слайсы огурца вдоль стенок бокала создают ресторанную подачу."
    ],
    "techCard": {
      "dishYield": "1100 мл",
      "kzhbu": {
        "calories": 21,
        "proteins": 0.5,
        "fats": 0.1,
        "carbs": 4.8
      },
      "semiFinishedProducts": [
        "Огуречно-лаймовый фреш"
      ],
      "technologicalProcess": "Холодное смешивание овощного и цитрусового соков.",
      "servingTemperature": "5-7°C.",
      "storageConditions": "Употреблять в течение 6 часов."
    }
  },
  {
    "id": "drink-lavender-blueberry-lemonade",
    "title": "Лавандовый лимонад с черникой",
    "category": "drinks",
    "description": "Изысканный лавандовый напиток с тонким цветочным ароматом кулинарной лаванды Прованса, спелой таежной черникой и лимонным соком. Потрясающий фиолетово-рубиновый оттенок.",
    "prepTime": 10,
    "cookTime": 5,
    "difficulty": "Легко",
    "servings": 4,
    "tags": [
      "Напитки",
      "Лаванда",
      "Черника",
      "Лимонад",
      "Изысканно"
    ],
    "ingredients": [
      {
        "name": "Цветки сушеной кулинарной лаванды",
        "amount": 10,
        "unit": "г",
        "estimatedCostPerKg": 2500,
        "category": "Специи"
      },
      {
        "name": "Черника свежая или с/м",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 400,
        "category": "Ягоды"
      },
      {
        "name": "Лимоны свежие (сок)",
        "amount": 2,
        "unit": "шт",
        "coldWastePercent": 30,
        "estimatedCostPerKg": 180,
        "category": "Фрукты"
      },
      {
        "name": "Сахар тростниковый",
        "amount": 60,
        "unit": "г",
        "estimatedCostPerKg": 180,
        "category": "Бакалея"
      },
      {
        "name": "Вода для лавандового сиропа",
        "amount": 150,
        "unit": "мл",
        "estimatedCostPerKg": 5,
        "category": "Жидкости"
      },
      {
        "name": "Вода газированная родниковая",
        "amount": 800,
        "unit": "мл",
        "estimatedCostPerKg": 40,
        "category": "Жидкости"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Сварите лавандовый сироп: залейте цветки лаванды водой с сахаром, доведите до кипения, проварите 2 минуты и настаивайте 15 минут под крышкой, затем процедите.",
        "timerSeconds": 1000,
        "tip": "Не передерживайте лаванду, чтобы сироп не приобрел мыльный привкус."
      },
      {
        "stepNumber": 2,
        "instruction": "Чернику слегка прогрейте с 1 ст. л. сиропа и протрите через мелкое сито для получения яркого гладкого пюре.",
        "timerSeconds": 240,
        "tip": "Протирание удаляет кожицу и семена."
      },
      {
        "stepNumber": 3,
        "instruction": "В кувшине соедините черничное пюре, лавандовый сироп и свежевыжатый сок лимона.",
        "timerSeconds": 60,
        "tip": "Кислота лимона меняет цвет черники на яркий неоново-пурпурный."
      },
      {
        "stepNumber": 4,
        "instruction": "Добавьте колотый лед и залейте газированной водой, перемешав.",
        "timerSeconds": 60,
        "tip": "Украсьте веточкой свежей лаванды или розмарина."
      }
    ],
    "chefSecrets": [
      "Используйте строго кулинарную лаванду (Lavandula angustifolia) — она обладает сладковатым ароматом без горечи."
    ],
    "techCard": {
      "dishYield": "1100 мл",
      "kzhbu": {
        "calories": 35,
        "proteins": 0.2,
        "fats": 0.1,
        "carbs": 8.5
      },
      "semiFinishedProducts": [
        "Лавандовый сироп",
        "Черничное пюре"
      ],
      "technologicalProcess": "Настаивание цветков лаванды с последующим купажированием с ягодным пюре.",
      "servingTemperature": "5-7°C.",
      "storageConditions": "Сироп хранится в холодильнике до 10 суток."
    }
  },
  {
    "id": "drink-mango-passionfruit-smoothie",
    "title": "Тропический смузи манго-маракуйя с кокосовым молоком",
    "category": "drinks",
    "description": "Густой бархатистый тропический смузи: мякоть тайского манго, сок с семенами спелой маракуйи, нежное кокосовое молоко и капля сока лайма.",
    "prepTime": 5,
    "cookTime": 0,
    "difficulty": "Легко",
    "servings": 2,
    "tags": [
      "Напитки",
      "Смузи",
      "Манго",
      "Маракуйя",
      "Тропики"
    ],
    "ingredients": [
      {
        "name": "Манго спелое сочное (мякоть)",
        "amount": 250,
        "unit": "г",
        "coldWastePercent": 30,
        "estimatedCostPerKg": 350,
        "category": "Фрукты"
      },
      {
        "name": "Пюре маракуйи с семечками",
        "amount": 80,
        "unit": "г",
        "estimatedCostPerKg": 600,
        "category": "Фрукты"
      },
      {
        "name": "Молоко кокосовое жирностью 17%",
        "amount": 150,
        "unit": "мл",
        "estimatedCostPerKg": 320,
        "category": "Молочные"
      },
      {
        "name": "Банан спелый замороженный",
        "amount": 100,
        "unit": "г",
        "coldWastePercent": 20,
        "estimatedCostPerKg": 110,
        "category": "Фрукты"
      },
      {
        "name": "Сок лайма",
        "amount": 15,
        "unit": "мл",
        "coldWastePercent": 20,
        "estimatedCostPerKg": 350,
        "category": "Фрукты"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Мякоть спелого манго и замороженный банан нарежьте кусочками.",
        "timerSeconds": 120,
        "tip": "Замороженный банан придает смузи кремовую текстуру тающего мороженого."
      },
      {
        "stepNumber": 2,
        "instruction": "Поместите манго, банан, кокосовое молоко и сок лайма в чашу высокоскоростного блендера.",
        "timerSeconds": 60,
        "tip": "Лайм балансирует сладость манго и кокоса."
      },
      {
        "stepNumber": 3,
        "instruction": "Взбейте на максимальных оборотах 60 секунд до абсолютно шелковистой текстуры.",
        "timerSeconds": 60,
        "tip": "Блендер насыщает смузи микропузырьками."
      },
      {
        "stepNumber": 4,
        "instruction": "Разлейте по высоким стаканам и полейте сверху свежей мякотью маракуйи с хрустящими косточками.",
        "timerSeconds": 30,
        "tip": "Семена маракуйи добавляют приятный текстурный контраст."
      }
    ],
    "chefSecrets": [
      "Никакого льда: используйте предварительно замороженные фрукты, чтобы не разбавлять насыщенный вкус водой."
    ],
    "techCard": {
      "dishYield": "500 мл (2 порции по 250 мл)",
      "kzhbu": {
        "calories": 92,
        "proteins": 1.4,
        "fats": 4.8,
        "carbs": 12
      },
      "semiFinishedProducts": [
        "Замороженная банановая основа"
      ],
      "technologicalProcess": "Турбо-взбивание фруктовой массы с растительным молоком.",
      "servingTemperature": "4-6°C.",
      "storageConditions": "Употреблять немедленно после взбивания."
    }
  },
  {
    "id": "drink-green-detox-smoothie",
    "title": "Зеленый смузи шпинат-яблоко-сельдерей с семенами чиа",
    "category": "drinks",
    "description": "Энергетический зеленый смузи: свежие листья молодого шпината, зеленое хрустящее яблоко Гренни Смит, стебель сельдерея, огурец, сок лайма и набухшие семена чиа.",
    "prepTime": 5,
    "cookTime": 0,
    "difficulty": "Легко",
    "servings": 2,
    "tags": [
      "Напитки",
      "Смузи",
      "Зеленый",
      "Детокс",
      "Фитнес"
    ],
    "ingredients": [
      {
        "name": "Шпинат свежий молодой (бейби)",
        "amount": 60,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 500,
        "category": "Зелень"
      },
      {
        "name": "Яблоко зеленое (Гренни Смит)",
        "amount": 150,
        "unit": "г",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 130,
        "category": "Фрукты"
      },
      {
        "name": "Стебель сельдерея сочный",
        "amount": 80,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 180,
        "category": "Овощи"
      },
      {
        "name": "Огурец свежий",
        "amount": 100,
        "unit": "г",
        "coldWastePercent": 5,
        "estimatedCostPerKg": 120,
        "category": "Овощи"
      },
      {
        "name": "Семена чиа",
        "amount": 10,
        "unit": "г",
        "estimatedCostPerKg": 650,
        "category": "Бакалея"
      },
      {
        "name": "Вода кокосовая или родниковая",
        "amount": 200,
        "unit": "мл",
        "estimatedCostPerKg": 150,
        "category": "Жидкости"
      },
      {
        "name": "Сок лимона или лайма",
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
        "instruction": "Семена чиа замочите в 50 мл воды на 10 минут до образования гелевой оболочки.",
        "timerSeconds": 600,
        "tip": "Чиа отдают омега-3 и делают смузи шелковистым."
      },
      {
        "stepNumber": 2,
        "instruction": "Яблоко, сельдерей и огурец нарежьте кусочками, шпинат промойте.",
        "timerSeconds": 120,
        "tip": "Кожицу яблока не снимайте — в ней сосредоточены антиоксиданты."
      },
      {
        "stepNumber": 3,
        "instruction": "Сложите все ингредиенты в блендер, добавьте кокосовую воду, семена чиа и лимонный сок.",
        "timerSeconds": 60,
        "tip": "Кислота лимона защищает хлорофилл от окисления и потемнения."
      },
      {
        "stepNumber": 4,
        "instruction": "Взбейте на высокой скорости 90 секунд до однородного бархатистого состояния.",
        "timerSeconds": 90,
        "tip": "Подавайте сразу с трубочкой из бамбука."
      }
    ],
    "chefSecrets": [
      "Лимонный сок сохраняет пронзительный изумрудный цвет зелени даже при долгом контакте с воздухом."
    ],
    "techCard": {
      "dishYield": "500 мл",
      "kzhbu": {
        "calories": 42,
        "proteins": 1.5,
        "fats": 1.1,
        "carbs": 6.8
      },
      "semiFinishedProducts": [
        "Гель из семян чиа"
      ],
      "technologicalProcess": "Холодное гомогенизирование растительного сырья.",
      "servingTemperature": "6-8°C.",
      "storageConditions": "Употреблять в течение 2 часов."
    }
  },
  {
    "id": "drink-banana-strawberry-oat-smoothie",
    "title": "Бананово-клубничный смузи с овсяным молоком",
    "category": "drinks",
    "description": "Питательный и нежный завтрак в бокале: спелый банан, садовая клубника, обжаренные овсяные хлопья, нежное овсяное молоко и ложка натурального меда.",
    "prepTime": 5,
    "cookTime": 0,
    "difficulty": "Легко",
    "servings": 2,
    "tags": [
      "Напитки",
      "Смузи",
      "Завтрак",
      "Клубника",
      "Банан"
    ],
    "ingredients": [
      {
        "name": "Банан спелый",
        "amount": 150,
        "unit": "г",
        "coldWastePercent": 25,
        "estimatedCostPerKg": 110,
        "category": "Фрукты"
      },
      {
        "name": "Клубника спелая свежая или с/м",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 350,
        "category": "Ягоды"
      },
      {
        "name": "Молоко овсяное без сахара",
        "amount": 250,
        "unit": "мл",
        "estimatedCostPerKg": 120,
        "category": "Молочные"
      },
      {
        "name": "Хлопья овсяные долгой варки (геркулес)",
        "amount": 25,
        "unit": "г",
        "estimatedCostPerKg": 60,
        "category": "Крупы и мука"
      },
      {
        "name": "Мед цветочный натуральный",
        "amount": 20,
        "unit": "г",
        "estimatedCostPerKg": 450,
        "category": "Бакалея"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Овсяные хлопья прокалите на сухой сковороде 2 минуты до появления орехового аромата.",
        "timerSeconds": 120,
        "tip": "Обжарка устраняет сырой мучной привкус овса."
      },
      {
        "stepNumber": 2,
        "instruction": "Поместите овсянку в блендер и измельчите в муку за 20 секунд.",
        "timerSeconds": 20,
        "tip": "Предварительный помол хлопьев дает идеальную текстуру без комочков."
      },
      {
        "stepNumber": 3,
        "instruction": "Добавьте кусочки банана, клубнику, мед и влейте холодное овсяное молоко.",
        "timerSeconds": 60,
        "tip": "Овсяное молоко усиливает злаковую ноту."
      },
      {
        "stepNumber": 4,
        "instruction": "Взбейте все вместе 60 секунд до густой розовой пены.",
        "timerSeconds": 60,
        "tip": "Подавайте в широких бокалах с ягодой на ободке."
      }
    ],
    "chefSecrets": [
      "Обжарка овсянки перед измельчением — главный секрет бариста при создании злаковых смузи."
    ],
    "techCard": {
      "dishYield": "500 мл",
      "kzhbu": {
        "calories": 72,
        "proteins": 1.8,
        "fats": 1.2,
        "carbs": 13.9
      },
      "semiFinishedProducts": [
        "Обжаренная овсяная крошка"
      ],
      "technologicalProcess": "Сухое измельчение злаков с последующей гомогенизацией с фруктами.",
      "servingTemperature": "6-8°C.",
      "storageConditions": "Употреблять сразу."
    }
  },
  {
    "id": "drink-virgin-mojito",
    "title": "Мохито безалкогольный с мятой и лаймом (Virgin Mojito)",
    "category": "drinks",
    "description": "Всемирно признанный король пляжных коктейлей: сочный лайм, растертые свежие листья перечной мяты, тростниковый сахар мусковадо, колотый лед краш и газировка.",
    "prepTime": 5,
    "cookTime": 0,
    "difficulty": "Легко",
    "servings": 2,
    "tags": [
      "Напитки",
      "Мохито",
      "Безалкогольный",
      "Мята",
      "Лайм"
    ],
    "ingredients": [
      {
        "name": "Лайм сочный свежий",
        "amount": 2,
        "unit": "шт",
        "coldWastePercent": 20,
        "estimatedCostPerKg": 350,
        "category": "Фрукты"
      },
      {
        "name": "Мята свежая перечная",
        "amount": 30,
        "unit": "г",
        "coldWastePercent": 10,
        "estimatedCostPerKg": 450,
        "category": "Зелень"
      },
      {
        "name": "Сахар тростниковый Демерара",
        "amount": 40,
        "unit": "г",
        "estimatedCostPerKg": 180,
        "category": "Бакалея"
      },
      {
        "name": "Вода газированная содовая",
        "amount": 400,
        "unit": "мл",
        "estimatedCostPerKg": 40,
        "category": "Жидкости"
      },
      {
        "name": "Лед дробленый (краш)",
        "amount": 300,
        "unit": "г",
        "estimatedCostPerKg": 10,
        "category": "Жидкости"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Лаймы разрежьте на 8 долек, удалив центральную белую жилку.",
        "timerSeconds": 60,
        "tip": "Белая сердцевина лайма дает излишнюю горечь."
      },
      {
        "stepNumber": 2,
        "instruction": "В высокие бокалы хайбол положите дольки лайма и тростниковый сахар, разомните мадлером до выделения сока.",
        "timerSeconds": 60,
        "tip": "Кристаллы тростникового сахара работают абразивом для цедры."
      },
      {
        "stepNumber": 3,
        "instruction": "Хлопните пучок листьев мяты между ладоней и положите в бокал, слегка прижав мадлером.",
        "timerSeconds": 30,
        "tip": "Хлопок ладонями раскрывает эфирные железы без разрывания листьев в кашу."
      },
      {
        "stepNumber": 4,
        "instruction": "Засыпьте бокал доверху колотым льдом, влейте содовую и аккуратно перемешайте барной ложкой снизу вверх.",
        "timerSeconds": 60,
        "tip": "Украсьте пышной верхушкой мяты и кружком лайма."
      }
    ],
    "chefSecrets": [
      "Никогда не рвите и не перетирайте мяту в труху — мятый в лохмотья лист выделяет хлорофилловую горечь."
    ],
    "techCard": {
      "dishYield": "600 мл (2 бокала по 300 мл с учетом льда)",
      "kzhbu": {
        "calories": 32,
        "proteins": 0.2,
        "fats": 0,
        "carbs": 7.9
      },
      "semiFinishedProducts": [
        "Лаймово-тростниковая база"
      ],
      "technologicalProcess": "Метод билд (сборка в бокале) с мадлингом цитрусов.",
      "servingTemperature": "0-2°C с ледяным крашем.",
      "storageConditions": "Употреблять сразу."
    }
  },
  {
    "id": "drink-virgin-pina-colada",
    "title": "Безалкогольная Пина Колада на кокосовых сливках",
    "category": "drinks",
    "description": "Карибская мечта: густой натуральный ананасовый сок холодного отжима, жирные кокосовые сливки, немного кокосового сиропа и сок лайма, взбитые в блендере со льдом до состояния снежного мусса.",
    "prepTime": 5,
    "cookTime": 0,
    "difficulty": "Легко",
    "servings": 2,
    "tags": [
      "Напитки",
      "Пина Колада",
      "Ананас",
      "Кокос",
      "Коктейль"
    ],
    "ingredients": [
      {
        "name": "Ананасовый сок 100% прямого отжима",
        "amount": 300,
        "unit": "мл",
        "estimatedCostPerKg": 180,
        "category": "Соки"
      },
      {
        "name": "Сливки кокосовые жирностью 22-24%",
        "amount": 150,
        "unit": "мл",
        "estimatedCostPerKg": 380,
        "category": "Молочные"
      },
      {
        "name": "Сироп кокосовый натуральный",
        "amount": 40,
        "unit": "мл",
        "estimatedCostPerKg": 350,
        "category": "Бакалея"
      },
      {
        "name": "Сок лайма свежий",
        "amount": 20,
        "unit": "мл",
        "coldWastePercent": 20,
        "estimatedCostPerKg": 350,
        "category": "Фрукты"
      },
      {
        "name": "Лед кусковой пищевой",
        "amount": 150,
        "unit": "г",
        "estimatedCostPerKg": 10,
        "category": "Жидкости"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "В чашу блендера налейте ананасовый сок, кокосовые сливки, кокосовый сироп и свежевыжатый сок лайма.",
        "timerSeconds": 60,
        "tip": "Капля лайма подчеркивает натуральную сладость ананаса."
      },
      {
        "stepNumber": 2,
        "instruction": "Добавьте кубики льда и взбивайте на турбо-режиме 45-60 секунд до густой кремовой пены.",
        "timerSeconds": 60,
        "tip": "Кокосовые сливки при взбивании образуют плотную белую шапку."
      },
      {
        "stepNumber": 3,
        "instruction": "Перелейте в бокалы ураган (харрикейн), украсьте треугольником ананаса и коктейльной вишней.",
        "timerSeconds": 30,
        "tip": "Подавайте с толстой трубочкой."
      }
    ],
    "chefSecrets": [
      "Именно кокосовые сливки 22% жирности (а не кокосовая вода) дают тот самый легендарный шелковистый крем-профиль."
    ],
    "techCard": {
      "dishYield": "550 мл",
      "kzhbu": {
        "calories": 88,
        "proteins": 1.2,
        "fats": 5.6,
        "carbs": 9.8
      },
      "semiFinishedProducts": [
        "Ананасово-кокосовая эмульсия"
      ],
      "technologicalProcess": "Фраппирование (взбивание со льдом в блендере).",
      "servingTemperature": "0-2°C.",
      "storageConditions": "Употреблять немедленно."
    }
  },
  {
    "id": "drink-lavender-raf-coffee",
    "title": "Лавандовый Раф-кофе на теплых сливках",
    "category": "drinks",
    "description": "Легендарный московский кофейный напиток: двойной эспрессо из 100% арабики, питьевые сливки 10%, цветы французской лаванды и тростниковый ванильный сахар, взбитые паром в единую воздушную глянцевую пену.",
    "prepTime": 5,
    "cookTime": 5,
    "difficulty": "Средне",
    "servings": 2,
    "tags": [
      "Напитки",
      "Кофе",
      "Раф",
      "Лаванда",
      "Сливки"
    ],
    "ingredients": [
      {
        "name": "Эспрессо свежесваренный (двойной шот)",
        "amount": 60,
        "unit": "мл",
        "estimatedCostPerKg": 1200,
        "category": "Бакалея"
      },
      {
        "name": "Сливки питьевые 10% жирности",
        "amount": 300,
        "unit": "мл",
        "estimatedCostPerKg": 180,
        "category": "Молочные"
      },
      {
        "name": "Цветки кулинарной лаванды",
        "amount": 4,
        "unit": "г",
        "estimatedCostPerKg": 2500,
        "category": "Специи"
      },
      {
        "name": "Сахар ванильный с натуральной ванилью",
        "amount": 20,
        "unit": "г",
        "estimatedCostPerKg": 450,
        "category": "Бакалея"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "В кофемолке смелите цветки лаванды вместе с ванильным сахаром в тонкую ароматическую пудру.",
        "timerSeconds": 30,
        "tip": "Совместный помол с сахаром равномерно распределяет лавандовые эфиры."
      },
      {
        "stepNumber": 2,
        "instruction": "Сварите порцию двойного крепкого эспрессо (60 мл).",
        "timerSeconds": 60,
        "tip": "Используйте арабику средней обжарки со сбалансированной кислотностью."
      },
      {
        "stepNumber": 3,
        "instruction": "В питчер налейте теплые сливки 10%, добавьте свежий эспрессо и лавандовый сахар.",
        "timerSeconds": 30,
        "tip": "В Раф-кофе все компоненты взбиваются вместе в одном сосуде."
      },
      {
        "stepNumber": 4,
        "instruction": "Взбейте пароотводной трубкой кофемашины или ручным капучинатором до шелковистой глянцевой микропены 65°C.",
        "timerSeconds": 60,
        "tip": "Температура не должна превышать 70°C, чтобы сливки не потеряли сладость."
      },
      {
        "stepNumber": 5,
        "instruction": "Перелейте в прозрачные бокалы, украсьте парой цветочков лаванды.",
        "timerSeconds": 30,
        "tip": "Подавайте с десертной ложечкой."
      }
    ],
    "chefSecrets": [
      "В классическом Рафе сливки и кофе взбиваются вместе — это создает структуру единого растаявшего сливочного пломбира."
    ],
    "techCard": {
      "dishYield": "360 мл (2 порции по 180 мл)",
      "kzhbu": {
        "calories": 95,
        "proteins": 2.2,
        "fats": 7.2,
        "carbs": 6.1
      },
      "semiFinishedProducts": [
        "Лавандовая сахарная пудра"
      ],
      "technologicalProcess": "Совместное взбивание парогенератором кофе со сливками.",
      "servingTemperature": "60-65°C.",
      "storageConditions": "Употреблять сразу после взбивания."
    }
  },
  {
    "id": "drink-oriental-sand-coffee",
    "title": "Кофе по-восточному в джезве со специями",
    "category": "drinks",
    "description": "Древний ритуальный способ заваривания: медная джезва (турка), кофе ультратонкого пудрового помола, вода, кардамон, корица и щепотка соли. Томление на кварцевом горячем песке с тройным поднятием пышной крема.",
    "prepTime": 5,
    "cookTime": 7,
    "difficulty": "Средне",
    "servings": 2,
    "tags": [
      "Напитки",
      "Кофе",
      "Восток",
      "Джезва",
      "Кардамон"
    ],
    "ingredients": [
      {
        "name": "Кофе в зернах ультратонкого помола в пыль",
        "amount": 20,
        "unit": "г",
        "estimatedCostPerKg": 1400,
        "category": "Бакалея"
      },
      {
        "name": "Вода родниковая ледяная",
        "amount": 150,
        "unit": "мл",
        "estimatedCostPerKg": 5,
        "category": "Жидкости"
      },
      {
        "name": "Кардамон зеленый свежемолотый",
        "amount": 1,
        "unit": "щепотка",
        "estimatedCostPerKg": 2800,
        "category": "Специи"
      },
      {
        "name": "Тростниковый сахар",
        "amount": 10,
        "unit": "г",
        "estimatedCostPerKg": 180,
        "category": "Бакалея"
      },
      {
        "name": "Соль морская",
        "amount": 0.1,
        "unit": "г",
        "estimatedCostPerKg": 30,
        "category": "Специи"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "В медную джезву насыпьте кофе тончайшего «восточного» помола, сахар, свежемолотый кардамон и микрощепотку соли.",
        "timerSeconds": 30,
        "tip": "Кристаллик соли смягчает воду и вытягивает кофейные масла."
      },
      {
        "stepNumber": 2,
        "instruction": "Влейте ледяную родниковую воду, перемешайте серебряной или деревянной ложкой один раз.",
        "timerSeconds": 30,
        "tip": "Использование ледяной воды удлиняет экстракцию, делая напиток плотнее."
      },
      {
        "stepNumber": 3,
        "instruction": "Погрузите джезву в раскаленный песок (или поставьте на минимальный огонь). Наблюдайте за прогревом.",
        "timerSeconds": 180,
        "tip": "Не перемешивайте во время нагрева."
      },
      {
        "stepNumber": 4,
        "instruction": "Как только темная плотная пенка начнет подниматься к узкому горлышку, снимите джезву. Повторите подъем еще дважды, не допуская закипания.",
        "timerSeconds": 120,
        "tip": "Кипение разрушает пену и пережигает кофе."
      },
      {
        "stepNumber": 5,
        "instruction": "Перелейте кофе вместе с гущей в маленькие фарфоровые чашечки демитас. Дайте гуще осесть 1-2 минуты.",
        "timerSeconds": 60,
        "tip": "Подавайте со стаканом ледяной воды."
      }
    ],
    "chefSecrets": [
      "Тонкость помола «в пыль» критична: частицы кофе должны образовывать взвесь, не скрипящую на зубах."
    ],
    "techCard": {
      "dishYield": "140 мл (2 чашки по 70 мл)",
      "kzhbu": {
        "calories": 12,
        "proteins": 0.4,
        "fats": 0.2,
        "carbs": 2.1
      },
      "semiFinishedProducts": [
        "Кофейно-кардамоновый купаж"
      ],
      "technologicalProcess": "Медленная экстракция в толстостенной джезве при 92-94°C без кипения.",
      "servingTemperature": "75-80°C.",
      "storageConditions": "Употреблять сразу."
    }
  },
  {
    "id": "drink-iced-salted-caramel-latte",
    "title": "Айс Латте с домашней соленой карамелью",
    "category": "drinks",
    "description": "Освежающий слоистый кофе: тягучая соленая карамель собственного приготовления, лед, свежее холодное молоко 3.2% и шот свежесваренного эспрессо сверху.",
    "prepTime": 10,
    "cookTime": 5,
    "difficulty": "Легко",
    "servings": 2,
    "tags": [
      "Напитки",
      "Кофе",
      "Латте",
      "Карамель",
      "Холодный"
    ],
    "ingredients": [
      {
        "name": "Эспрессо свежесваренный",
        "amount": 60,
        "unit": "мл",
        "estimatedCostPerKg": 1200,
        "category": "Бакалея"
      },
      {
        "name": "Молоко коровье цельное 3.2%",
        "amount": 300,
        "unit": "мл",
        "estimatedCostPerKg": 85,
        "category": "Молочные"
      },
      {
        "name": "Карамель домашняя с морской солью",
        "amount": 50,
        "unit": "г",
        "estimatedCostPerKg": 350,
        "category": "Бакалея"
      },
      {
        "name": "Лед кусковой",
        "amount": 200,
        "unit": "г",
        "estimatedCostPerKg": 10,
        "category": "Жидкости"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Полейте дно и стенки высоких стеклянных бокалов густой теплой соленой карамелью.",
        "timerSeconds": 60,
        "tip": "Карамельные подтеки на стекле создают красивую подачу."
      },
      {
        "stepNumber": 2,
        "instruction": "Наполните бокалы кубиками льда доверху.",
        "timerSeconds": 30,
        "tip": "Лед охладит молоко и удержит слои."
      },
      {
        "stepNumber": 3,
        "instruction": "Влейте холодное молоко, оставив 3 см до края бокала.",
        "timerSeconds": 30,
        "tip": "Молоко плавно смешивается с придонной карамелью."
      },
      {
        "stepNumber": 4,
        "instruction": "Сверху аккуратно, по кубику льда или барной ложке, влейте горячий эспрессо для создания четкого верхнего кофейного слоя.",
        "timerSeconds": 60,
        "tip": "Разница температур и плотностей держит красивый трехцветный градиент."
      }
    ],
    "chefSecrets": [
      "Хлопья морской соли Maldon в карамели взрываются на языке контрастом со сладким сливочным молоком."
    ],
    "techCard": {
      "dishYield": "450 мл (2 порции)",
      "kzhbu": {
        "calories": 82,
        "proteins": 2.1,
        "fats": 3.4,
        "carbs": 11.2
      },
      "semiFinishedProducts": [
        "Соленая карамель"
      ],
      "technologicalProcess": "Слоистое гравитационное наполнение в бокале.",
      "servingTemperature": "2-4°C.",
      "storageConditions": "Употреблять сразу."
    }
  },
  {
    "id": "drink-matcha-latte-almond",
    "title": "Матча Латте на миндальном молоке",
    "category": "drinks",
    "description": "Японский церемониальный зеленый чай Матча из Удзи, взбитый бамбуковым венчиком часен, с пышной пенкой теплого миндального молока и сиропом агавы.",
    "prepTime": 5,
    "cookTime": 3,
    "difficulty": "Легко",
    "servings": 2,
    "tags": [
      "Напитки",
      "Матча",
      "Япония",
      "Миндаль",
      "Здоровое питание"
    ],
    "ingredients": [
      {
        "name": "Чай матча церемониальный высшего сорта (Удзи)",
        "amount": 4,
        "unit": "г",
        "estimatedCostPerKg": 8000,
        "category": "Бакалея"
      },
      {
        "name": "Молоко миндальное бариста",
        "amount": 350,
        "unit": "мл",
        "estimatedCostPerKg": 220,
        "category": "Молочные"
      },
      {
        "name": "Вода горячая (80°C)",
        "amount": 60,
        "unit": "мл",
        "estimatedCostPerKg": 5,
        "category": "Жидкости"
      },
      {
        "name": "Сироп агавы или светлый мед",
        "amount": 20,
        "unit": "мл",
        "estimatedCostPerKg": 500,
        "category": "Бакалея"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Просейте порошок матча через мелкое ситечко в широкую чашу (тяван), чтобы разбить комочки.",
        "timerSeconds": 60,
        "tip": "Просеивание гарантирует полное отсутствие нерастворенных сгустков."
      },
      {
        "stepNumber": 2,
        "instruction": "Влейте 60 мл воды температурой 80°C и взбивайте бамбуковым венчиком часен W-образными быстрыми движениями 30 секунд до изумрудной стойкой пены.",
        "timerSeconds": 60,
        "tip": "W-образные движения насыщают пудру матча воздухом."
      },
      {
        "stepNumber": 3,
        "instruction": "Миндальное молоко с сиропом агавы прогрейте до 60°C и взбейте капучинатором в плотную микропену.",
        "timerSeconds": 60,
        "tip": "Не перегревайте растительное молоко выше 65°C во избежание расслоения."
      },
      {
        "stepNumber": 4,
        "instruction": "Перелейте взбитую матчу в чашку и влейте нежное миндальное молоко, сформировав латте-арт.",
        "timerSeconds": 30,
        "tip": "Подавайте сразу."
      }
    ],
    "chefSecrets": [
      "Церемониальный матча из префектуры Киото имеет мягкий сливочный вкус умами без горечи."
    ],
    "techCard": {
      "dishYield": "420 мл (2 порции)",
      "kzhbu": {
        "calories": 38,
        "proteins": 1.1,
        "fats": 1.8,
        "carbs": 4.6
      },
      "semiFinishedProducts": [
        "Взбитая суспензия матча"
      ],
      "technologicalProcess": "Механическое диспергирование чая часеном с последующим объединением со вспененным молоком.",
      "servingTemperature": "60-65°C.",
      "storageConditions": "Употреблять сразу."
    }
  },
  {
    "id": "drink-hot-chocolate-marshmallow",
    "title": "Пряное какао с маршмеллоу и корицей",
    "category": "drinks",
    "description": "Уютный согревающий напиток: темный голландский какао-порошок, цельное молоко, кусочки темного 70% шоколада, корица, щепотка мускатного ореха и нежные тающие маршмеллоу.",
    "prepTime": 5,
    "cookTime": 7,
    "difficulty": "Легко",
    "servings": 2,
    "tags": [
      "Напитки",
      "Какао",
      "Шоколад",
      "Зима",
      "Уют"
    ],
    "ingredients": [
      {
        "name": "Какао-порошок алкализованный темный",
        "amount": 25,
        "unit": "г",
        "estimatedCostPerKg": 650,
        "category": "Бакалея"
      },
      {
        "name": "Шоколад темный 70% какао",
        "amount": 40,
        "unit": "г",
        "estimatedCostPerKg": 900,
        "category": "Бакалея"
      },
      {
        "name": "Молоко коровье цельное 3.5%",
        "amount": 400,
        "unit": "мл",
        "estimatedCostPerKg": 85,
        "category": "Молочные"
      },
      {
        "name": "Сахар тростниковый",
        "amount": 25,
        "unit": "г",
        "estimatedCostPerKg": 180,
        "category": "Бакалея"
      },
      {
        "name": "Корица молотая цейлонская",
        "amount": 1,
        "unit": "г",
        "estimatedCostPerKg": 1200,
        "category": "Специи"
      },
      {
        "name": "Маршмеллоу миниатюрные",
        "amount": 30,
        "unit": "г",
        "estimatedCostPerKg": 450,
        "category": "Бакалея"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "В небольшом сотейнике смешайте какао-порошок, сахар, корицу и 50 мл молока, разотрите венчиком в гладкую пасту без комочков.",
        "timerSeconds": 60,
        "tip": "Растирание в малом объеме молока предотвращает образование комков."
      },
      {
        "stepNumber": 2,
        "instruction": "Влейте остальное молоко, поставьте на средний огонь и доведите до легкого кипения, постоянно помешивая венчиком.",
        "timerSeconds": 180,
        "tip": "Помешивание исключает пригорание молока ко дну."
      },
      {
        "stepNumber": 3,
        "instruction": "Снимите с огня, всыпьте рубленый темный шоколад и вымешайте до полного расплавления.",
        "timerSeconds": 60,
        "tip": "Натуральный шоколад дает насыщенный бархатный вкус и глянцевую плотность."
      },
      {
        "stepNumber": 4,
        "instruction": "Разлейте по кружкам, щедро посыпьте мини-маршмеллоу и припорошите щепоткой корицы.",
        "timerSeconds": 30,
        "tip": "Маршмеллоу медленно тают в горячем какао, образуя сладкую сливочную пенку."
      }
    ],
    "chefSecrets": [
      "Алкализованный какао имеет пониженную кислотность и растворяется в разы лучше обычного."
    ],
    "techCard": {
      "dishYield": "450 мл",
      "kzhbu": {
        "calories": 125,
        "proteins": 3.8,
        "fats": 6.2,
        "carbs": 14.1
      },
      "semiFinishedProducts": [
        "Шоколадно-молочная база"
      ],
      "technologicalProcess": "Варка какао с последующим эмульгированием темного шоколада.",
      "servingTemperature": "70-75°C.",
      "storageConditions": "Употреблять сразу."
    }
  },
  {
    "id": "drink-virgin-cherry-sangria",
    "title": "Безалкогольная вишневая сангрия с цитрусами и пряностями",
    "category": "drinks",
    "description": "Праздничный фруктовый кувшинный напиток: терпкий сок спелой вишни и граната, кружочки апельсина, лимона и зеленого яблока, палочка корицы, гвоздика и газированная минеральная вода.",
    "prepTime": 15,
    "cookTime": 0,
    "difficulty": "Легко",
    "servings": 6,
    "tags": [
      "Напитки",
      "Сангрия",
      "Праздник",
      "Вишня",
      "Цитрус"
    ],
    "ingredients": [
      {
        "name": "Сок вишневый осветленный натуральный",
        "amount": 600,
        "unit": "мл",
        "estimatedCostPerKg": 140,
        "category": "Соки"
      },
      {
        "name": "Сок гранатовый прямого отжима",
        "amount": 200,
        "unit": "мл",
        "estimatedCostPerKg": 250,
        "category": "Соки"
      },
      {
        "name": "Апельсин крупный сочный",
        "amount": 1,
        "unit": "шт",
        "coldWastePercent": 20,
        "estimatedCostPerKg": 150,
        "category": "Фрукты"
      },
      {
        "name": "Лимон свежий",
        "amount": 1,
        "unit": "шт",
        "coldWastePercent": 20,
        "estimatedCostPerKg": 180,
        "category": "Фрукты"
      },
      {
        "name": "Яблоко зеленое твердое",
        "amount": 1,
        "unit": "шт",
        "coldWastePercent": 15,
        "estimatedCostPerKg": 130,
        "category": "Фрукты"
      },
      {
        "name": "Корица палочка",
        "amount": 2,
        "unit": "шт",
        "estimatedCostPerKg": 1200,
        "category": "Специи"
      },
      {
        "name": "Бадьян звездочки",
        "amount": 2,
        "unit": "шт",
        "estimatedCostPerKg": 1400,
        "category": "Специи"
      },
      {
        "name": "Вода сильногазированная минеральная",
        "amount": 400,
        "unit": "мл",
        "estimatedCostPerKg": 40,
        "category": "Жидкости"
      },
      {
        "name": "Лед кусковой",
        "amount": 250,
        "unit": "г",
        "estimatedCostPerKg": 10,
        "category": "Жидкости"
      }
    ],
    "instructions": [
      {
        "stepNumber": 1,
        "instruction": "Апельсин, лимон и яблоко тщательно вымойте и нарежьте тонкими кружками и дольками.",
        "timerSeconds": 180,
        "tip": "Тонкие слайсы быстрее отдают сок и эфирные масла."
      },
      {
        "stepNumber": 2,
        "instruction": "В большой стеклянный кувшин выложите нарезанные фрукты, палочки корицы и звездочки бадьяна.",
        "timerSeconds": 60,
        "tip": "Специи настаиваются прямо в фруктовом соке."
      },
      {
        "stepNumber": 3,
        "instruction": "Залейте вишневым и гранатовым соком, перемешайте ложкой и уберите в холодильник минимум на 2 часа для мацерации.",
        "timerSeconds": 7200,
        "tip": "Длительное настаивание соединяет ягодные и фруктовые вкусы."
      },
      {
        "stepNumber": 4,
        "instruction": "Перед подачей добавьте в кувшин кубики льда и влейте сильногазированную воду, слегка перемешав.",
        "timerSeconds": 60,
        "tip": "Газировка делает сангрию игристой и освежающей."
      }
    ],
    "chefSecrets": [
      "Гранатовый сок дает напитку благородную терпкость, идеально имитирующую вино."
    ],
    "techCard": {
      "dishYield": "1600 мл",
      "kzhbu": {
        "calories": 38,
        "proteins": 0.3,
        "fats": 0.1,
        "carbs": 9.4
      },
      "semiFinishedProducts": [
        "Мацерированная фруктово-пряная база"
      ],
      "technologicalProcess": "Холодная длительная экстракция соков с фруктами и пряностями.",
      "servingTemperature": "4-6°C с кусковым льдом.",
      "storageConditions": "Безалкогольная основа хранится в холодильнике до 48 часов."
    }
  }
];
