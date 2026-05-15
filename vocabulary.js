// vocabulary.js - Vocabulary flashcard system with difficulty levels and phrases

// Phrases data
const phrasesData = {
    essential: [
        { ru: 'Здравствуйте', en: 'Hello (formal)' },
        { ru: 'Привет', en: 'Hi (informal)' },
        { ru: 'До свидания', en: 'Goodbye' },
        { ru: 'Пока', en: 'Bye (informal)' },
        { ru: 'Спасибо', en: 'Thank you' },
        { ru: 'Большое спасибо', en: 'Thank you very much' },
        { ru: 'Пожалуйста', en: 'You\'re welcome / Please' },
        { ru: 'Извините', en: 'Excuse me / Sorry' },
        { ru: 'Простите', en: 'I\'m sorry (formal)' },
        { ru: 'Как дела?', en: 'How are you?' },
        { ru: 'Хорошо', en: 'Good/Fine' },
        { ru: 'Плохо', en: 'Bad' },
        { ru: 'Нормально', en: 'OK/Normal' },
        { ru: 'Отлично', en: 'Excellent' },
        { ru: 'Рад(а) вас видеть', en: 'Nice to see you' }
    ],
    formal: [
        { ru: 'Я хотел(а) бы рассказать о...', en: 'I would like to tell about...' },
        { ru: 'Во-первых', en: 'Firstly' },
        { ru: 'Во-вторых', en: 'Secondly' },
        { ru: 'В-третьих', en: 'Thirdly' },
        { ru: 'Однако', en: 'However' },
        { ru: 'Поэтому', en: 'Therefore' },
        { ru: 'Кроме того', en: 'Besides/Moreover' },
        { ru: 'Тем не менее', en: 'Nevertheless' },
        { ru: 'В заключение', en: 'In conclusion' },
        { ru: 'С одной стороны', en: 'On one hand' },
        { ru: 'С другой стороны', en: 'On the other hand' },
        { ru: 'По моему мнению', en: 'In my opinion' },
        { ru: 'Я считаю, что', en: 'I believe that' },
        { ru: 'Мне кажется, что', en: 'It seems to me that' },
        { ru: 'На мой взгляд', en: 'In my view' }
    ],
    questions: [
        { ru: 'Как тебя зовут?', en: 'What is your name?' },
        { ru: 'Как вас зовут?', en: 'What is your name? (formal)' },
        { ru: 'Сколько тебе лет?', en: 'How old are you?' },
        { ru: 'Откуда ты?', en: 'Where are you from?' },
        { ru: 'Где ты живёшь?', en: 'Where do you live?' },
        { ru: 'Что ты делаешь?', en: 'What do you do?' },
        { ru: 'Чем ты занимаешься?', en: 'What are you doing?' },
        { ru: 'Почему?', en: 'Why?' },
        { ru: 'Когда?', en: 'When?' },
        { ru: 'Где?', en: 'Where?' },
        { ru: 'Куда?', en: 'Where to?' },
        { ru: 'Как?', en: 'How?' },
        { ru: 'Сколько?', en: 'How much/many?' },
        { ru: 'Который час?', en: 'What time is it?' },
        { ru: 'Можно?', en: 'May I?' }
    ],
    travel: [
        { ru: 'Где находится...?', en: 'Where is...?' },
        { ru: 'Как пройти к...?', en: 'How do I get to...?' },
        { ru: 'Сколько это стоит?', en: 'How much does it cost?' },
        { ru: 'Где туалет?', en: 'Where is the bathroom?' },
        { ru: 'Я заблудился/заблудилась', en: 'I am lost' },
        { ru: 'Вы говорите по-английски?', en: 'Do you speak English?' },
        { ru: 'Я не понимаю', en: 'I don\'t understand' },
        { ru: 'Повторите, пожалуйста', en: 'Please repeat' },
        { ru: 'Помогите, пожалуйста', en: 'Please help' },
        { ru: 'Где остановка автобуса?', en: 'Where is the bus stop?' },
        { ru: 'Один билет, пожалуйста', en: 'One ticket, please' },
        { ru: 'Где вокзал?', en: 'Where is the train station?' },
        { ru: 'Где аэропорт?', en: 'Where is the airport?' },
        { ru: 'Такси!', en: 'Taxi!' },
        { ru: 'Прямо', en: 'Straight ahead' }
    ],
    food: [
        { ru: 'Я голоден/голодна', en: 'I am hungry' },
        { ru: 'Я хочу есть', en: 'I want to eat' },
        { ru: 'Я хочу пить', en: 'I am thirsty' },
        { ru: 'Меню, пожалуйста', en: 'Menu, please' },
        { ru: 'Что вы рекомендуете?', en: 'What do you recommend?' },
        { ru: 'Я возьму...', en: 'I will have...' },
        { ru: 'Счёт, пожалуйста', en: 'Check/Bill, please' },
        { ru: 'Очень вкусно!', en: 'Very tasty!' },
        { ru: 'Приятного аппетита!', en: 'Bon appetit!' },
        { ru: 'Можно заказать?', en: 'Can I order?' },
        { ru: 'Принесите, пожалуйста...', en: 'Please bring...' },
        { ru: 'Без сахара', en: 'Without sugar' },
        { ru: 'С молоком', en: 'With milk' },
        { ru: 'Ещё один, пожалуйста', en: 'One more, please' },
        { ru: 'Это всё', en: 'That\'s all' }
    ],
    emergency: [
        { ru: 'Помогите!', en: 'Help!' },
        { ru: 'Вызовите врача!', en: 'Call a doctor!' },
        { ru: 'Вызовите полицию!', en: 'Call the police!' },
        { ru: 'Вызовите скорую помощь!', en: 'Call an ambulance!' },
        { ru: 'Пожар!', en: 'Fire!' },
        { ru: 'Осторожно!', en: 'Careful!/Watch out!' },
        { ru: 'Я потерялся/потерялась', en: 'I am lost' },
        { ru: 'Мне плохо', en: 'I feel sick' },
        { ru: 'У меня болит...', en: 'I have pain in...' },
        { ru: 'Где больница?', en: 'Where is the hospital?' },
        { ru: 'Мне нужен врач', en: 'I need a doctor' },
        { ru: 'Это срочно', en: 'It\'s urgent' },
        { ru: 'Я потерял паспорт', en: 'I lost my passport' },
        { ru: 'Где полиция?', en: 'Where is the police?' },
        { ru: 'Стоп!', en: 'Stop!' }
    ]
};

// Numbers data - shared between Novice and Intermediate
const numbersData = {
    novice: [
        { ru: 'ноль', en: '0 (zero)' },
        { ru: 'один', en: '1 (one)' },
        { ru: 'два', en: '2 (two)' },
        { ru: 'три', en: '3 (three)' },
        { ru: 'четыре', en: '4 (four)' },
        { ru: 'пять', en: '5 (five)' },
        { ru: 'шесть', en: '6 (six)' },
        { ru: 'семь', en: '7 (seven)' },
        { ru: 'восемь', en: '8 (eight)' },
        { ru: 'девять', en: '9 (nine)' },
        { ru: 'десять', en: '10 (ten)' },
        { ru: 'одиннадцать', en: '11 (eleven)' },
        { ru: 'двенадцать', en: '12 (twelve)' },
        { ru: 'тринадцать', en: '13 (thirteen)' },
        { ru: 'четырнадцать', en: '14 (fourteen)' },
        { ru: 'пятнадцать', en: '15 (fifteen)' },
        { ru: 'шестнадцать', en: '16 (sixteen)' },
        { ru: 'семнадцать', en: '17 (seventeen)' },
        { ru: 'восемнадцать', en: '18 (eighteen)' },
        { ru: 'девятнадцать', en: '19 (nineteen)' },
        { ru: 'двадцать', en: '20 (twenty)' },
        { ru: 'тридцать', en: '30 (thirty)' },
        { ru: 'сорок', en: '40 (forty)' },
        { ru: 'пятьдесят', en: '50 (fifty)' },
        { ru: 'шестьдесят', en: '60 (sixty)' },
        { ru: 'семьдесят', en: '70 (seventy)' },
        { ru: 'восемьдесят', en: '80 (eighty)' },
        { ru: 'девяносто', en: '90 (ninety)' },
        { ru: 'сто', en: '100 (one hundred)' },
        { ru: 'первый', en: '1st (first)' }
    ],
    intermediate: [
        { ru: 'двести', en: '200 (two hundred)' },
        { ru: 'триста', en: '300 (three hundred)' },
        { ru: 'четыреста', en: '400 (four hundred)' },
        { ru: 'пятьсот', en: '500 (five hundred)' },
        { ru: 'шестьсот', en: '600 (six hundred)' },
        { ru: 'семьсот', en: '700 (seven hundred)' },
        { ru: 'восемьсот', en: '800 (eight hundred)' },
        { ru: 'девятьсот', en: '900 (nine hundred)' },
        { ru: 'тысяча', en: '1,000 (one thousand)' },
        { ru: 'миллион', en: '1,000,000 (million)' },
        { ru: 'миллиард', en: '1,000,000,000 (billion)' },
        { ru: 'второй', en: '2nd (second)' },
        { ru: 'третий', en: '3rd (third)' },
        { ru: 'четвёртый', en: '4th (fourth)' },
        { ru: 'пятый', en: '5th (fifth)' },
        { ru: 'шестой', en: '6th (sixth)' },
        { ru: 'седьмой', en: '7th (seventh)' },
        { ru: 'восьмой', en: '8th (eighth)' },
        { ru: 'девятый', en: '9th (ninth)' },
        { ru: 'десятый', en: '10th (tenth)' },
        { ru: 'двадцатый', en: '20th (twentieth)' },
        { ru: 'сотый', en: '100th (hundredth)' },
        { ru: 'тысячный', en: '1,000th (thousandth)' },
        { ru: 'половина', en: 'half' },
        { ru: 'треть', en: 'third (fraction)' },
        { ru: 'четверть', en: 'quarter' },
        { ru: 'полтора', en: 'one and a half' },
        { ru: 'дюжина', en: 'dozen' },
        { ru: 'пара', en: 'pair/couple' },
        { ru: 'несколько', en: 'several/a few' }
    ]
};

// Vocabulary data
const vocabularyData = {
    novice: {
        essential: [
            { ru: "важный", en: "important", type: "adj" },
            { ru: "человек", en: "person", type: "noun" },
            { ru: "время", en: "time", type: "noun" },
            { ru: "делать", en: "to do/make", type: "verb" },
            { ru: "хороший", en: "good", type: "adj" },
            { ru: "знать", en: "to know", type: "verb" },
            { ru: "говорить", en: "to speak", type: "verb" },
            { ru: "большой", en: "big", type: "adj" },
            { ru: "новый", en: "new", type: "adj" },
            { ru: "первый", en: "first", type: "adj" },
            { ru: "день", en: "day", type: "noun" },
            { ru: "жизнь", en: "life", type: "noun" },
            { ru: "работа", en: "work", type: "noun" },
            { ru: "другой", en: "other", type: "adj" },
            { ru: "страна", en: "country", type: "noun" },
            { ru: "мир", en: "world/peace", type: "noun" },
            { ru: "случай", en: "case/event", type: "noun" },
            { ru: "голова", en: "head", type: "noun" },
            { ru: "понимать", en: "to understand", type: "verb" },
            { ru: "место", en: "place", type: "noun" }
        ],
        verbs: [
            { ru: "идти", en: "to go (on foot)", type: "verb" },
            { ru: "ехать", en: "to go (by vehicle)", type: "verb" },
            { ru: "читать", en: "to read", type: "verb" },
            { ru: "писать", en: "to write", type: "verb" },
            { ru: "слушать", en: "to listen", type: "verb" },
            { ru: "смотреть", en: "to watch/look", type: "verb" },
            { ru: "учиться", en: "to study", type: "verb" },
            { ru: "работать", en: "to work", type: "verb" },
            { ru: "жить", en: "to live", type: "verb" },
            { ru: "любить", en: "to love", type: "verb" },
            { ru: "хотеть", en: "to want", type: "verb" },
            { ru: "мочь", en: "can/to be able", type: "verb" },
            { ru: "думать", en: "to think", type: "verb" },
            { ru: "видеть", en: "to see", type: "verb" },
            { ru: "помогать", en: "to help", type: "verb" }
        ],
        adjectives: [
            { ru: "красивый", en: "beautiful", type: "adj" },
            { ru: "интересный", en: "interesting", type: "adj" },
            { ru: "трудный", en: "difficult", type: "adj" },
            { ru: "лёгкий", en: "easy", type: "adj" },
            { ru: "весёлый", en: "cheerful", type: "adj" },
            { ru: "грустный", en: "sad", type: "adj" },
            { ru: "молодой", en: "young", type: "adj" },
            { ru: "старый", en: "old", type: "adj" },
            { ru: "быстрый", en: "fast", type: "adj" },
            { ru: "медленный", en: "slow", type: "adj" },
            { ru: "высокий", en: "tall/high", type: "adj" },
            { ru: "низкий", en: "low/short", type: "adj" },
            { ru: "горячий", en: "hot", type: "adj" },
            { ru: "холодный", en: "cold", type: "adj" },
            { ru: "умный", en: "smart", type: "adj" }
        ],
        school: [
            { ru: "школа", en: "school", type: "noun" },
            { ru: "урок", en: "lesson", type: "noun" },
            { ru: "учитель", en: "teacher", type: "noun" },
            { ru: "ученик", en: "student", type: "noun" },
            { ru: "класс", en: "class/classroom", type: "noun" },
            { ru: "предмет", en: "subject", type: "noun" },
            { ru: "задание", en: "assignment", type: "noun" },
            { ru: "экзамен", en: "exam", type: "noun" },
            { ru: "оценка", en: "grade", type: "noun" },
            { ru: "учебник", en: "textbook", type: "noun" },
            { ru: "тетрадь", en: "notebook", type: "noun" },
            { ru: "ручка", en: "pen", type: "noun" },
            { ru: "карандаш", en: "pencil", type: "noun" },
            { ru: "доска", en: "board", type: "noun" },
            { ru: "перемена", en: "break/recess", type: "noun" }
        ],
        time: [
            { ru: "сегодня", en: "today", type: "adv" },
            { ru: "вчера", en: "yesterday", type: "adv" },
            { ru: "завтра", en: "tomorrow", type: "adv" },
            { ru: "сейчас", en: "now", type: "adv" },
            { ru: "потом", en: "later", type: "adv" },
            { ru: "утром", en: "in the morning", type: "adv" },
            { ru: "днём", en: "in the afternoon", type: "adv" },
            { ru: "вечером", en: "in the evening", type: "adv" },
            { ru: "ночью", en: "at night", type: "adv" },
            { ru: "неделя", en: "week", type: "noun" },
            { ru: "месяц", en: "month", type: "noun" },
            { ru: "год", en: "year", type: "noun" },
            { ru: "час", en: "hour", type: "noun" },
            { ru: "минута", en: "minute", type: "noun" },
            { ru: "всегда", en: "always", type: "adv" }
        ],
        connectors: [
            { ru: "и", en: "and", type: "conj" },
            { ru: "но", en: "but", type: "conj" },
            { ru: "или", en: "or", type: "conj" },
            { ru: "потому что", en: "because", type: "conj" },
            { ru: "поэтому", en: "therefore", type: "conj" },
            { ru: "если", en: "if", type: "conj" },
            { ru: "когда", en: "when", type: "conj" },
            { ru: "где", en: "where", type: "conj" },
            { ru: "как", en: "how", type: "conj" },
            { ru: "почему", en: "why", type: "conj" },
            { ru: "чтобы", en: "in order to", type: "conj" },
            { ru: "хотя", en: "although", type: "conj" },
            { ru: "во-первых", en: "firstly", type: "adv" },
            { ru: "во-вторых", en: "secondly", type: "adv" },
            { ru: "в заключение", en: "in conclusion", type: "phrase" }
        ]
    },
    
    intermediate: {
        essential: [
            { ru: "общество", en: "society", type: "noun" },
            { ru: "развитие", en: "development", type: "noun" },
            { ru: "возможность", en: "opportunity/possibility", type: "noun" },
            { ru: "проблема", en: "problem", type: "noun" },
            { ru: "решение", en: "solution/decision", type: "noun" },
            { ru: "исследование", en: "research/study", type: "noun" },
            { ru: "достижение", en: "achievement", type: "noun" },
            { ru: "опыт", en: "experience", type: "noun" },
            { ru: "влияние", en: "influence", type: "noun" },
            { ru: "последствие", en: "consequence", type: "noun" },
            { ru: "значение", en: "meaning/significance", type: "noun" },
            { ru: "отношение", en: "relationship/attitude", type: "noun" },
            { ru: "цель", en: "goal/purpose", type: "noun" },
            { ru: "результат", en: "result", type: "noun" },
            { ru: "процесс", en: "process", type: "noun" },
            { ru: "событие", en: "event", type: "noun" },
            { ru: "явление", en: "phenomenon", type: "noun" },
            { ru: "условие", en: "condition", type: "noun" },
            { ru: "средство", en: "means/resource", type: "noun" },
            { ru: "основа", en: "basis/foundation", type: "noun" }
        ],
        verbs: [
            { ru: "достигать", en: "to achieve/reach", type: "verb" },
            { ru: "обсуждать", en: "to discuss", type: "verb" },
            { ru: "исследовать", en: "to research/explore", type: "verb" },
            { ru: "создавать", en: "to create", type: "verb" },
            { ru: "развивать", en: "to develop", type: "verb" },
            { ru: "изменять", en: "to change", type: "verb" },
            { ru: "улучшать", en: "to improve", type: "verb" },
            { ru: "решать", en: "to solve/decide", type: "verb" },
            { ru: "объяснять", en: "to explain", type: "verb" },
            { ru: "доказывать", en: "to prove", type: "verb" },
            { ru: "анализировать", en: "to analyze", type: "verb" },
            { ru: "сравнивать", en: "to compare", type: "verb" },
            { ru: "предполагать", en: "to suppose/assume", type: "verb" },
            { ru: "утверждать", en: "to assert/claim", type: "verb" },
            { ru: "определять", en: "to define/determine", type: "verb" },
            { ru: "представлять", en: "to present/imagine", type: "verb" },
            { ru: "выражать", en: "to express", type: "verb" },
            { ru: "признавать", en: "to recognize/admit", type: "verb" },
            { ru: "стремиться", en: "to strive", type: "verb" },
            { ru: "участвовать", en: "to participate", type: "verb" }
        ],
        adjectives: [
            { ru: "современный", en: "modern/contemporary", type: "adj" },
            { ru: "значительный", en: "significant", type: "adj" },
            { ru: "основной", en: "basic/main", type: "adj" },
            { ru: "необходимый", en: "necessary", type: "adj" },
            { ru: "возможный", en: "possible", type: "adj" },
            { ru: "различный", en: "various/different", type: "adj" },
            { ru: "сложный", en: "complex", type: "adj" },
            { ru: "эффективный", en: "effective", type: "adj" },
            { ru: "успешный", en: "successful", type: "adj" },
            { ru: "традиционный", en: "traditional", type: "adj" },
            { ru: "общественный", en: "social/public", type: "adj" },
            { ru: "экономический", en: "economic", type: "adj" },
            { ru: "политический", en: "political", type: "adj" },
            { ru: "культурный", en: "cultural", type: "adj" },
            { ru: "научный", en: "scientific", type: "adj" },
            { ru: "естественный", en: "natural", type: "adj" },
            { ru: "практический", en: "practical", type: "adj" },
            { ru: "теоретический", en: "theoretical", type: "adj" },
            { ru: "международный", en: "international", type: "adj" },
            { ru: "национальный", en: "national", type: "adj" }
        ],
        academic: [
            { ru: "университет", en: "university", type: "noun" },
            { ru: "образование", en: "education", type: "noun" },
            { ru: "исследователь", en: "researcher", type: "noun" },
            { ru: "профессор", en: "professor", type: "noun" },
            { ru: "студент", en: "student (university)", type: "noun" },
            { ru: "лекция", en: "lecture", type: "noun" },
            { ru: "семинар", en: "seminar", type: "noun" },
            { ru: "диссертация", en: "dissertation", type: "noun" },
            { ru: "степень", en: "degree", type: "noun" },
            { ru: "специальность", en: "major/specialty", type: "noun" },
            { ru: "факультет", en: "faculty/department", type: "noun" },
            { ru: "библиотека", en: "library", type: "noun" },
            { ru: "статья", en: "article", type: "noun" },
            { ru: "источник", en: "source", type: "noun" },
            { ru: "метод", en: "method", type: "noun" },
            { ru: "теория", en: "theory", type: "noun" },
            { ru: "концепция", en: "concept", type: "noun" },
            { ru: "аргумент", en: "argument", type: "noun" },
            { ru: "доказательство", en: "proof/evidence", type: "noun" },
            { ru: "вывод", en: "conclusion", type: "noun" }
        ],
        society: [
            { ru: "правительство", en: "government", type: "noun" },
            { ru: "экономика", en: "economy", type: "noun" },
            { ru: "политика", en: "politics", type: "noun" },
            { ru: "культура", en: "culture", type: "noun" },
            { ru: "технология", en: "technology", type: "noun" },
            { ru: "окружающая среда", en: "environment", type: "phrase" },
            { ru: "здравоохранение", en: "healthcare", type: "noun" },
            { ru: "население", en: "population", type: "noun" },
            { ru: "гражданин", en: "citizen", type: "noun" },
            { ru: "закон", en: "law", type: "noun" },
            { ru: "право", en: "right/law", type: "noun" },
            { ru: "ответственность", en: "responsibility", type: "noun" },
            { ru: "конфликт", en: "conflict", type: "noun" },
            { ru: "сотрудничество", en: "cooperation", type: "noun" },
            { ru: "организация", en: "organization", type: "noun" },
            { ru: "система", en: "system", type: "noun" },
            { ru: "информация", en: "information", type: "noun" },
            { ru: "связь", en: "connection/communication", type: "noun" },
            { ru: "ресурс", en: "resource", type: "noun" },
            { ru: "кризис", en: "crisis", type: "noun" }
        ],
        connectors: [
            { ru: "несмотря на то что", en: "despite the fact that", type: "phrase" },
            { ru: "в то время как", en: "while/whereas", type: "phrase" },
            { ru: "в результате", en: "as a result", type: "phrase" },
            { ru: "таким образом", en: "thus/in this way", type: "phrase" },
            { ru: "с одной стороны", en: "on one hand", type: "phrase" },
            { ru: "с другой стороны", en: "on the other hand", type: "phrase" },
            { ru: "в отличие от", en: "in contrast to", type: "phrase" },
            { ru: "по сравнению с", en: "compared to", type: "phrase" },
            { ru: "более того", en: "moreover", type: "phrase" },
            { ru: "кроме того", en: "besides/in addition", type: "phrase" },
            { ru: "следовательно", en: "consequently", type: "adv" },
            { ru: "тем не менее", en: "nevertheless", type: "phrase" },
            { ru: "однако", en: "however", type: "conj" },
            { ru: "наоборот", en: "on the contrary", type: "adv" },
            { ru: "в частности", en: "in particular", type: "phrase" },
            { ru: "например", en: "for example", type: "adv" },
            { ru: "то есть", en: "that is", type: "phrase" },
            { ru: "в целом", en: "in general/overall", type: "phrase" },
            { ru: "наконец", en: "finally", type: "adv" },
            { ru: "итак", en: "so/thus", type: "conj" }
        ]
    }
};

let currentVocabLevel = 'novice';

// Initialize vocabulary system
function initVocabulary() {
    loadVocabularyProgress();
    displayVocabularyCategory('essential', 'novice');
}

// Change vocabulary level
function changeVocabLevel(level) {
    currentVocabLevel = level;

    // Update button styles
    document.querySelectorAll('.vocab-level-btn').forEach(btn => {
        btn.style.background = '#9e9e9e';
        btn.style.color = 'white';
    });

    // Highlight selected level button
    const buttons = document.querySelectorAll('.vocab-level-btn');
    buttons.forEach(btn => {
        if ((level === 'novice' && btn.textContent.includes('Novice')) ||
            (level === 'intermediate' && btn.textContent.includes('Intermediate')) ||
            (level === 'phrases' && btn.textContent.includes('Phrases'))) {
            btn.style.background = '#667eea';
            btn.style.color = 'white';
        }
    });

    // Update category buttons based on level
    const categoryButtons = document.getElementById('category-buttons');
    if (level === 'phrases') {
        // Show phrase categories
        categoryButtons.innerHTML = `
            <button onclick="displayVocabularyCategory('essential')" class="go-button vocab-cat-btn">Essential</button>
            <button onclick="displayVocabularyCategory('formal')" class="go-button vocab-cat-btn">Formal</button>
            <button onclick="displayVocabularyCategory('questions')" class="go-button vocab-cat-btn">Questions</button>
            <button onclick="displayVocabularyCategory('travel')" class="go-button vocab-cat-btn">Travel</button>
            <button onclick="displayVocabularyCategory('food')" class="go-button vocab-cat-btn">Food & Dining</button>
            <button onclick="displayVocabularyCategory('emergency')" class="go-button vocab-cat-btn">Emergency</button>
        `;
        displayVocabularyCategory('essential', 'phrases');
    } else {
        // Show vocabulary categories
        categoryButtons.innerHTML = `
            <button onclick="displayVocabularyCategory('essential')" class="go-button vocab-cat-btn">Essential</button>
            <button onclick="displayVocabularyCategory('verbs')" class="go-button vocab-cat-btn">Verbs</button>
            <button onclick="displayVocabularyCategory('adjectives')" class="go-button vocab-cat-btn">Adjectives</button>
            <button onclick="displayVocabularyCategory('school')" class="go-button vocab-cat-btn">School/Academic</button>
            <button onclick="displayVocabularyCategory('time')" class="go-button vocab-cat-btn">Time/Society</button>
            <button onclick="displayVocabularyCategory('connectors')" class="go-button vocab-cat-btn">Connectors</button>
            <button onclick="displayVocabularyCategory('numbers')" class="go-button vocab-cat-btn">Numbers</button>
        `;
        displayVocabularyCategory('essential', level);
    }
}

// Load saved vocabulary progress
function loadVocabularyProgress() {
    const learned = JSON.parse(localStorage.getItem('vocabularyLearned') || '[]');
    document.getElementById('vocab-learned').textContent = learned.length;
}

// Display vocabulary by category
function displayVocabularyCategory(category, level = currentVocabLevel) {
    currentVocabLevel = level;

    // Update category button styles
    document.querySelectorAll('.vocab-cat-btn').forEach(btn => {
        btn.style.background = '#9e9e9e';
        btn.style.color = 'white';
    });

    // Highlight clicked category button
    const categoryBtns = document.querySelectorAll('.vocab-cat-btn');
    categoryBtns.forEach(btn => {
        const btnText = btn.textContent.toLowerCase();
        if ((category === 'essential' && btnText.includes('essential')) ||
            (category === 'verbs' && btnText.includes('verbs')) ||
            (category === 'adjectives' && btnText.includes('adjectives')) ||
            (category === 'school' && (btnText.includes('school') || btnText.includes('academic'))) ||
            (category === 'time' && (btnText.includes('time') || btnText.includes('society'))) ||
            (category === 'connectors' && btnText.includes('connectors')) ||
            (category === 'numbers' && btnText.includes('numbers')) ||
            (category === 'formal' && btnText.includes('formal')) ||
            (category === 'questions' && btnText.includes('questions')) ||
            (category === 'travel' && btnText.includes('travel')) ||
            (category === 'food' && btnText.includes('food')) ||
            (category === 'emergency' && btnText.includes('emergency'))) {
            btn.style.background = '#667eea';
            btn.style.color = 'white';
        }
    });

    const container = document.getElementById('vocab-cards');
    const learned = JSON.parse(localStorage.getItem('vocabularyLearned') || '[]');
    let words = [];

    // Get words based on level and category
    if (level === 'phrases') {
        words = phrasesData[category] || [];
    } else if (category === 'numbers') {
        // Numbers have their own data structure
        words = numbersData[level] || [];
    } else {
        // Map category names for different levels
        let actualCategory = category;
        if (level === 'intermediate') {
            if (category === 'school') actualCategory = 'academic';
            if (category === 'time') actualCategory = 'society';
        }
        words = vocabularyData[level][actualCategory] || [];
    }

    console.log('Loading:', level, category, '- Words:', words.length);

    container.innerHTML = '';
    words.forEach((word, index) => {
        const wordId = `${level}-${category}-${index}`;
        const isLearned = learned.includes(wordId);

        const card = document.createElement('div');
        card.className = 'vocab-card';
        card.style.cssText = `background: ${isLearned ? '#e8f5e9' : '#f8f9ff'}; padding: 20px; border-radius: 10px; cursor: pointer; transition: all 0.3s; min-height: 160px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; position: relative; border: ${isLearned ? '2px solid #4caf50' : '2px solid transparent'};`;

        const front = document.createElement('div');
        front.className = 'vocab-front';
        front.style.cssText = 'font-size: 1.5em; font-weight: bold; color: #667eea;';
        front.textContent = word.ru;

        const back = document.createElement('div');
        back.className = 'vocab-back';
        back.style.cssText = 'display: none; font-size: 1.2em;';
        back.innerHTML = word.type ? `<strong>${word.en}</strong><br><em style="color: #999;">${word.type}</em>` : `<strong>${word.en}</strong>`;

        const flipBtn = document.createElement('button');
        flipBtn.textContent = 'Flip';
        flipBtn.style.cssText = 'position: absolute; top: 10px; right: 10px; background: #667eea; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; font-size: 0.8em;';
        flipBtn.onclick = (e) => {
            e.stopPropagation();
            flipCard(card);
        };

        const learnBtn = document.createElement('button');
        learnBtn.textContent = isLearned ? '✓ Learned' : 'Mark Learned';
        learnBtn.style.cssText = `position: absolute; bottom: 10px; right: 10px; background: ${isLearned ? '#4caf50' : '#ff9800'}; color: white; border: none; padding: 5px 12px; border-radius: 5px; cursor: pointer; font-size: 0.8em;`;
        learnBtn.onclick = (e) => {
            e.stopPropagation();
            markWordLearned(level, category, index, card, learnBtn);
        };

        card.appendChild(front);
        card.appendChild(back);
        card.appendChild(flipBtn);
        card.appendChild(learnBtn);
        container.appendChild(card);
    });
}

// Flip vocabulary card
function flipCard(card) {
    const front = card.querySelector('.vocab-front');
    const back = card.querySelector('.vocab-back');
    
    if (front.style.display !== 'none') {
        front.style.display = 'none';
        back.style.display = 'block';
        card.style.background = '#e8f5e9';
    } else {
        front.style.display = 'block';
        back.style.display = 'none';
        card.style.background = '#f8f9ff';
    }
}

// Mark word as learned
function markWordLearned(level, category, index, card, button) {
    const learned = JSON.parse(localStorage.getItem('vocabularyLearned') || '[]');
    const wordId = `${level}-${category}-${index}`;

    if (!learned.includes(wordId)) {
        learned.push(wordId);
        localStorage.setItem('vocabularyLearned', JSON.stringify(learned));

        // Update UI
        card.style.background = '#e8f5e9';
        card.style.border = '2px solid #4caf50';
        button.textContent = '✓ Learned';
        button.style.background = '#4caf50';

        loadVocabularyProgress();
    }
}

