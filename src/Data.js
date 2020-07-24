const sampleProducts = [
  {
    id: 1,
    name: "Чистый код. Создание, анализ и рефакторинг. Библиотека программиста | Мартин Роберт К",
    category: "Фундаментальные",
    price: 423,
    description:
      'Даже плохой программный код может работать. Однако если код не является "чистым", это всегда будет мешать развитию проекта и компании-разработчика, отнимая значительные ресурсы на его поддержку и "укрощение".',
    popular: true,
    imageUrls: [
      "https://cdn1.ozone.ru/multimedia/wc1200/1023228489.jpg"    ]
  },
  {
    id: 2,
    name: "Мобильная разработка. Галерея шаблонов | Нейл Тереза",
    category: "Мобильная разработка",
    price: 800,
    description:
      "Когда вам потребуется срочно создать хорошо спроектированное, легкое в навигации мобильное приложение, времени, чтобы заново изобретать велосипед, у вас не будет. В данной книге рассмотрены более 70 шаблонов проектирования мобильных приложений и приведено большое количество скриншотов из современных приложений iOS, Android, Blackberry, WebOS, Windows Mobile и Symbian. Автор книги подробно описывает шаблоны проектирования, разделенные на 10 категорий, включая антишаблоны. Независимо от того, будете ли вы проектировать простое iPhone-приложение либо предназначенное для работы в каждой из представленных на рынке популярных мобильных операционных систем, данные шаблоны позволят вам решать распространенные сложные задачи, которые связаны с проектированием приложений.",

    popular: false,
    imageUrls: [
      "https://cdn1.ozone.ru/multimedia/wc1200/1005777746.jpg"
    ]
  },
  {
    id: 3,
    name: "Нативная разработка мобильных приложений. Перекрестный справочник для iOS и Android | Льюис Шон, Данн МайкНативная разработка мобильных приложений. Перекрестный справочник для iOS и Android | Льюис Шон, Данн Майк",
    category: "Мобильная разработка",
    price: 800,
    description: 'В этой книге вы познакомитесь с простыми подходами к разработке мобильных приложений для iOS и Android. Если вашей команде приходится разрабатывать проекты сразу для двух этих систем или вы планируете перейти с одной системы на другую, это практическое руководство покажет вам, как решаются наиболее распространенные задачи на каждой из этих платформ.',
    popular: false,
    imageUrls: [
      "https://cdn1.ozone.ru/s3/multimedia-a/wc1200/6014831866.jpg"
    ]
  },
  {
    id: 4,
    name: "Рефакторинг кода на JavaScript. Улучшение проекта существующего кода | Фаулер Мартин",
    category: "Фронтенд",
    price: 102,
    description:
      'Рефакторинг уже давно и прочно занимает достойное место среди технологий программирования, и не в последнюю очередь благодаря Мартину Фаулеру - автору одной из тех книг, которые написаны "на все времена".Сам принцип рефакторинга прост: это последовательность небольших шагов, таких как перемещение поля из одного класса в другой, вынесение фрагмента кода из метода и его превращение в самостоятельный метод или даже перемещение кода по иерархии классов. Каждый такой шаг выглядит настолько просто и естественно, что кажется удивительным - о чем здесь можно писать? Однако кумулятивный эффект от таких малых изменений состоит в существенном улучшении архитектуры существующего кода.Мартин Фаулер и другие высококлассные специалисты в области объектно-ориентированного программирования, принявшие участие в написании этой книги, изложили принципы и наиболее эффективные методики выполнения различных рефакторингов и показали, когда и как следует изучать код с целью его улучшения. В книге подробно описано более 60 методов рефакторинга, причем с практическими примерами на языке программирования JavaScript. Применение JavaScript и описание "рефакторинга без классов" является одним из отличий нового издания книги от старого.Если первое издание книги можно было сравнить с хорошим вином, которое со временем становится только ценнее, то второе издание можно сравнить с шампанским - идеи в книге опьяняют, а их изложение искрится и играет…Это издание классической книги достойно того, чтобы занять свое место на книжной полке каждого серьезного программиста - вне зависимости от используемого языка программирования.Более двадцати лет опытные программисты во всем мире использовали книгу Мартина Фаулера Рефакторинг, когда им нужно было улучшить проект существующего кода, повысить удобство сопровождения программного обеспечения или облегчить понимание существующего кода.Это - такое долгожданное - новое издание было полностью обновлено, чтобы отразить важные изменения в области программирования. Второе издание книги содержит обновленный каталог рефакторингов и включает примеры кода на JavaScript, а также новые функциональные примеры, демонстрирующие рефакторинг без классов.Как и в первом издании, здесь объясняется, что такое рефакторинг, почему вы должны прибегать к рефакторингу, как распознать код, который нуждается в рефакторинге, и как успешно его провести независимо от того, какой язык программирования вы используете.Основные темы книги" Понимание процесса и общих принципов рефакторинга" Быстрое применение полезных рефакторингов для облегчения понимания и изменения программ" Распознавание запаха в коде, который сигнализирует о возможном применении рефакторинга" Каталог рефакторингов с объяснениями, мотивацией, техникой применения и простыми примерами" Создание надежных тестов для рефакторингов" Компромиссы и препятствия на пути рефакторингаОб автореМартин Фаулер - главный научный сотрудник компании ThoughtWorks. Он называет себя "автором, докладчиком, консультантом и просто человеком, болтающим о разработке программного обеспечения". Фаулер занимается разработкой программного обеспечения для предприятий, изучая, что делает проект хорошим, и какие методы необходимо применять для его создания.',

    popular: true,
    imageUrls: [
      "https://cdn1.ozone.ru/multimedia/wc1200/1037901197.jpg"
    ]
  },
  {
    id: 5,
    name: "Разработка веб-приложений с помощью Node.js, MongoDB и Angular. Исчерпывающее руководство по использованию стека MEAN | Дейли Брэд, Дейли Брендан",
    category: "Бэкенд",
    price: 102,
    description:
      "В этом, уже втором издании книги обновленном по новым версиям Angular, наглядно показывается, как интегрировать все три технологии Node.js, MongoDB и Angular в готовые рабочие решения. Сначала в этом издании кратко и ясно описывается каждая технология в отдельности, а затем делается быстрый переход к построению типичных веб-приложений",

    popular: true,
    imageUrls: [
      "https://cdn1.ozone.ru/s3/multimedia-e/wc1200/6009776426.jpg"
    ]
  },
  {
    id: 7,
    name: "Успешная разработка и запуск мобильных приложений",
    category: "Мобильная разработка",
    price: 200,
    description: "Черно-белая книга в цветной мягкой обложке. В данной книге пересказано о типах приложений, которые вы можете исследовать в рамках своего проекта по разработке мобильных приложений. Дано описание того, что нужно для разработки успешного мобильного приложения на современном рынке. Раскрыты общие причины неудачи мобильных приложений. Описаны шаги, которые надо пройти для обеспечения успешного запуска мобильного приложения",
    popular: false,
    imageUrls: [
      "https://cdn1.ozone.ru/s3/multimedia-b/wc1200/6018451595.jpg"
    ]
  },
  {
    id: 8,
    name: "Рефакторинг. Улучшение проекта существующего кода | Фаулер Мартин, Бек Кент",
    category: "Фундаментальные",
    price: 2765,
    description: "",
    popular: false,
    imageUrls: [
      "https://cdn1.ozone.ru/multimedia/wc1200/1019869511.jpg"
    ]
  },
  {
    id: 9,
    name: "Искусство программирования. Том 2. Получисленные алгоритмы | Кнут Дональд Эрвин",
    category: "Фундаментальные",
    price: 2550,
    description: "Во втором томе представлено полное введение в теорию получисленных алгоритмов, причем случайным числам и арифметике посвящены отдельные главы. В книге даны основы теории получисленных алгоритмов, а также их основные примеры. Тем самым устанавлено прочное связующее звено между компьютерным программированием и численным анализом. Особого упоминания заслуживает предложенная Кнутом в этом третьем издании новая трактовка генераторов случайных чисел, а также рассмотрение способов вычислений с помощью формальных степенных рядов.",
    popular: false,
    imageUrls: [
      "https://cdn1.ozone.ru/multimedia/wc1200/1027993377.jpg"
    ]
  },
  {
    id: 10,
    name: "Архитектура корпоративных мобильных решений | Эспозито Дино",
    category: "Мобильная разработка",
    price: 120,
    description: "В книге рассказывается о различных типах мобильных решений, к которым относятся веб-сайты и мобильные приложения, а также описывается ряд методик и паттернов проектирования мобильных приложений и технологий для разных платформ. Значительное внимание уделено мобильным сайтам и каркасам, а также приемам правильного определения возможностей браузеров мобильных устройств. Вы познакомитесь с принципами мобильной разработки для трех основных платформ - iOS, Android и Windows Phone. Отдельная глава посвящена обсуждению PhoneGap и разработке для мобильных устройств с использованием HTML5.",
    popular: false,
    imageUrls: [
      "https://cdn1.ozone.ru/multimedia/wc1200/1007972983.jpg"
    ]
  },
  {
    id: 11,
    name: "Node.js в действии | Кантелон Майк, Хартер Марк",
    category: "Бэкенд",
    price: 220,
    description:
      "Эволюция JavaScript с каждым годом предоставляет веб-разработчикам все большее количество инноваций. Один из наиболее интересных и популярных инструментов для создания легко масштабируемых сетевых приложений является Node.js, основанный на движке V8 и превращающий JavaScript из узкоспециализированного языка в язык общего назначения. Node.js добавляет возможность JavaScript взаимодействовать с устройствами ввода-вывода через свой API (написанный на C++), подключать другие внешние библиотеки, написанные на разных языках, обеспечивая вызовы к ним из JavaScript-кода.",
    popular: false,
    imageUrls: [
      "https://cdn1.ozone.ru/s3/multimedia-l/wc1200/6012638829.jpg"
    ]
  },
  {
    id: 12,
    name: "ISwift. Основы разработки приложений под iOS, iPadOS и macOS | Усов Василий",
    category: "Мобильная разработка",
    price: 900,
    description:
      "Язык Swift молод, он растет, развивается и изменяется, хотя основные подходы к программированию и разработке уже сформировались. В новом, пятом издании книги была полностью переработана первая часть книги, что делает знакомство с языком Swift более комфортным, а весь текст актуализирован в соответствии с возможностями Swift 5. В ходе долгого и плодотворного общения с читателями появилось множество идей, благодаря которым новое издание стало еще более полезным и насыщенным учебными материалами. Теперь вы не только изучите Swift, но и получите начальные сведения о принципах разработки полноценных приложений.",
    popular: false,
    imageUrls: [
      "https://cdn1.ozone.ru/s3/multimedia-3/wc1200/6007449951.jpg"
    ]
  },
  {
    id: 14,
    name: "Искусство программирования. Том 1. Основные алгоритмы алгоритмы | Кнут Дональд Эрвин",
    category: "Фундаментальные",
    price: 2550,
    description: "",
    popular: false,
    imageUrls: [
      "https://cdn1.ozone.ru/multimedia/wc1200/1027685809.jpg"
    ]
  },
  {
    id: 15,
    name: "Искусство программирования. Том 3. Сортировка и поиск | Кнут Дональд Эрвин",
    category: "Фундаментальные",
    price: 1500,
    description: "Во втором издании третьего тома содержится исчерпывающий обзор классических алгоритмов сортировки и поиска. Представленная в нем информация дополняет приведенное в первом томе обсуждение структур данных. Автор рассматривает принципы построения больших и малых баз данных, а также внутренней и внешней памяти.",
    popular: false,
    imageUrls: [
      "https://cdn1.ozone.ru/s3/multimedia-c/wc1200/6013258776.jpg"
    ]
  },
  {
    id: 16,
    name: "Искусство программирования. Том 4A. Комбинаторные алгоритмы, часть 1 | Кнут Дональд Эрвин",
    category: "Фундаментальные",
    price: 1500,
    description: "В этом томе рассматриваются методы, позволяющие компьютерам эффективно работать с задачами гигантского размера. Рассматриваемый материал начинается с булевых функций и технологий и трюков работы с битами, затем всесторонне рассматривается генерация всех кортежей и перестановок, всех сочетаний и разбиений, и всех деревьев",
    popular: false,
    imageUrls: [
      "https://cdn1.ozone.ru/s3/multimedia-e/wc1200/6013258778.jpg"
    ]
  },
  {
    id: 17,
    name: "Совершенный код. Мастер-класс | Макконнелл Стив",
    category: "Фундаментальные",
    price: 1174,
    description: "Более 10 лет первое издание этой книги считалось одним из лучших практических руководств по программированию. Сейчас эта книга полностью обновлена с учетом современных тенденций и технологий и дополнена сотнями новых примеров, иллюстрирующих искусство и науку программирования. Опираясь на академические исследования, с одной стороны, и практический опыт коммерческих разработок ПО - с другой, автор синтезировал из самых эффективных методик и наиболее эффективных принципов ясное прагматичное руководство. Каков бы ни был ваш профессиональный уровень, с какими бы средствами разработки вы ни работали, какова бы ни была сложность вашего проекта, в этой книге вы найдете нужную информацию, она заставит вас размышлять и поможет создать совершенный код.",
    popular: false,
    imageUrls: [
      "https://cdn1.ozone.ru/multimedia/wc1200/1020973362.jpg"
    ]
  },
  {
    id: 18,
    name: "Чистая архитектура. Искусство разработки программного обеспечения | Мартин Роберт",
    category: "Фундаментальные",
    price: 568,
    description: '"Идеальный программист" и "Чистый код" - легендарные бестселлеры Роберта Мартина - рассказывают, как достичь высот профессионализма. "Чистая архитектура" продолжает эту тему, но не предлагает несколько вариантов в стиле "решай сам", а объясняет, что именно следует делать, по какой причине и почему именно такое решение станет принципиально важным для вашего успеха.',
    popular: false,
    imageUrls: [
      "https://cdn1.ozone.ru/multimedia/wc1200/1026061260.jpg"
    ]
  },
  {
    id: 19,
    name: "Выразительный JavaScript. Современное веб-программирование | Хавербеке Марейн",
    category: "Фронтенд",
    price: 568,
    description: '«Выразительный JavaScript» позволит глубоко погрузиться в тему, научиться писать красивый и эффективный код. Вы познакомитесь с синтаксисом, стрелочными и асинхронными функциями, итератором, шаблонными строками и блочной областью видимости. Марейн Хавербеке – практик. Получайте опыт и изучайте язык на множестве примеров, выполняя упражнения и учебные проекты. Сначала вы познакомитесь со структурой языка JavaScript, управляющими структурами, функциями и структурами данных, затем изучите обработку ошибок и исправление багов, модульность и асинхронное программирование, после чего перейдете к программированию браузеров',
    popular: false,
    imageUrls: [
      "https://cdn1.ozone.ru/s3/multimedia-t/wc1200/6000018281.jpg"
    ]
  },
  {
    id: 20,
    name: "Секреты JavaScript ниндзя | Бибо Беэр, Марас Иосип",
    category: "Фронтенд",
    price: 2765,
    description: 'Язык JavaScript быстро становится универсальным для разработки различных типов приложений, будь то для веб, облака, настольных систем или мобильных устройств. Стать профессиональным разработчиком приложений на JavaScript - означает, приобрести ряд эффективных навыков, которые могут пригодиться во всех этих предметных областях.',
    popular: false,
    imageUrls: [
      "https://cdn1.ozone.ru/multimedia/wc1200/1020193797.jpg"
    ]
  },
  {
    id: 21,
    name: "Изучаем JavaScript. Руководство по созданию современных веб-сайтов",
    category: "Фронтенд",
    price: 1660,
    description: 'Сейчас самое время изучить JavaScript. После выхода последней спецификации JavaScript - ECMAScript 6.0 (ES6) - научиться создавать высококачественные приложения на этом языке стало проще, чем когда-либо ранее. Эта книга знакомит программистов (любителей и профессионалов) со спецификацией ES6 наряду с некоторыми связанными с ней инструментальными средствами и методиками на сугубо практической основе.',
    popular: false,
    imageUrls: [
      "https://cdn1.ozone.ru/multimedia/wc1200/1019046801.jpg"
    ]
  },
  {
    id: 22,
    name: "Функциональное программирование на JavaScript. Как улучшить код JavaScript-программ | Атенсио Луис",
    category: "Фронтенд",
    price: 1660,
    description: 'В сложных веб-приложениях низкоуровневые детали JavaScript-кода могут затруднить анализ программы и повлиять на работоспособность системы в целом. Функциональное программирование (ФП) как стиль написания кода способствует слабо связанным отношениям между отдельными компонентами приложений и позволяет составить общее представление о проекте, упростить его разработку, общение с заказчиками и сопровождение.',
    popular: false,
    imageUrls: [
      "https://cdn1.ozone.ru/multimedia/wc1200/1021037543.jpg"
    ]
  },
  {
    id: 23,
    name: "JavaScript. Шаблоны | Стефанов Стоян",
    category: "Фронтенд",
    price: 1660,
    description: 'Разработчики серверных, клиентских или настольных приложений на JavaScript нередко сталкиваются с проблемами, связанными с объектами, функциями, наследованием и другими особенностями этого языка. Какие же приемы разработки приложений на JavaScript являются наиболее удачными? Данная книга дает ответ на этот вопрос, предлагая большое количество различных шаблонов программирования на JavaScript, таких как «единственный объект» (singleton), «фабрика» (factory), «декоратор» (decorator) и другие. Можно сказать, что они являются не только методами решения наиболее типичных задач разработки ПО, но и заготовками решений для целых категорий таких задач.',
    popular: false,
    imageUrls: [
      "https://cdn1.ozone.ru/s3/multimedia-j/wc1200/6012729691.jpg"
    ]
  },
];


const categories = [
  {
    name: "Все категории",
    icon: "list"
  },
  {
    name: "Фундаментальные",
    icon: "psychology"
  },
  {
    name: "Мобильная разработка",
    icon: "perm_device_information"
  },
  {
    name: "Фронтенд",
    icon: "web"
  },
  {
    name: "Бэкенд",
    icon: "computer"
  }, 
];


const dataForTheMenu = [
  { name: "Главная страница", url: "/", icon: "home", id: 0 },
  {
    name: "Литература",
    id: 1,
    children: categories.map((x, i) => {
      return {
        name: x.name,
        id: i,
        url: "/?category=" + x.name,
        icon: x.icon
      };
    })
  }
];

export { sampleProducts, categories, dataForTheMenu };
