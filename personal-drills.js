// personal-drills.js - Personalized Drills Module (Spelling, English Words, Agreement, Vowels)

// ==================== DRILL DATA ====================

const spellingWords = {
    'week1-2': [
        { russian: 'яйца', english: 'eggs' },
        { russian: 'потому что', english: 'because' },
        { russian: 'говорить', english: 'to speak' },
        { russian: 'стоимость', english: 'cost/price' },
        { russian: 'здравствуйте', english: 'hello (formal)' },
        { russian: 'пожалуйста', english: 'please' },
        { russian: 'обязательно', english: 'definitely/must' },
        { russian: 'сейчас', english: 'now' },
        { russian: 'вообще', english: 'in general' },
        { russian: 'конечно', english: 'of course' },
        { russian: 'завтрак', english: 'breakfast' },
        { russian: 'ужин', english: 'dinner' },
        { russian: 'учитель', english: 'teacher' },
        { russian: 'тетрадь', english: 'notebook' },
        { russian: 'расписание', english: 'schedule' },
        { russian: 'понедельник', english: 'Monday' },
        { russian: 'четверг', english: 'Thursday' },
        { russian: 'суббота', english: 'Saturday' },
        { russian: 'воскресенье', english: 'Sunday' },
        { russian: 'каникулы', english: 'vacation/break' }
    ],
    'week3-4': [
        { russian: 'образование', english: 'education' },
        { russian: 'окружающая среда', english: 'environment' },
        { russian: 'путешествие', english: 'journey/travel' },
        { russian: 'искусство', english: 'art' },
        { russian: 'правительство', english: 'government' },
        { russian: 'общество', english: 'society' },
        { russian: 'впечатление', english: 'impression' },
        { russian: 'удовольствие', english: 'pleasure' },
        { russian: 'преимущество', english: 'advantage' },
        { russian: 'достижение', english: 'achievement' },
        { russian: 'здоровье', english: 'health' },
        { russian: 'будущее', english: 'future' },
        { russian: 'прошлое', english: 'past' },
        { russian: 'настоящее', english: 'present' },
        { russian: 'количество', english: 'quantity' },
        { russian: 'качество', english: 'quality' },
        { russian: 'население', english: 'population' },
        { russian: 'исследование', english: 'research' },
        { russian: 'объяснение', english: 'explanation' },
        { russian: 'рассказать', english: 'to tell/narrate' }
    ],
    'week5': [
        { russian: 'во-первых', english: 'firstly' },
        { russian: 'во-вторых', english: 'secondly' },
        { russian: 'в-третьих', english: 'thirdly' },
        { russian: 'в заключение', english: 'in conclusion' },
        { russian: 'например', english: 'for example' },
        { russian: 'однако', english: 'however' },
        { russian: 'поэтому', english: 'therefore' },
        { russian: 'несмотря на', english: 'despite' },
        { russian: 'с одной стороны', english: 'on one hand' },
        { russian: 'с другой стороны', english: 'on the other hand' },
        { russian: 'по моему мнению', english: 'in my opinion' },
        { russian: 'я считаю что', english: 'I believe that' },
        { russian: 'кроме того', english: 'besides/moreover' },
        { russian: 'таким образом', english: 'thus/in this way' },
        { russian: 'следовательно', english: 'consequently' },
        { russian: 'безусловно', english: 'undoubtedly' },
        { russian: 'разумеется', english: 'of course/naturally' },
        { russian: 'к сожалению', english: 'unfortunately' },
        { russian: 'к счастью', english: 'fortunately' },
        { russian: 'тем не менее', english: 'nevertheless' }
    ]
};

const englishWordsData = [
    { sentence: 'Мы ели ланч в школе.', englishWord: 'ланч', correct: 'обед', options: ['обед', 'завтрак', 'ужин', 'полдник'] },
    { sentence: 'Мой папа работает в инжиниринг компании.', englishWord: 'инжиниринг', correct: 'инженерной', options: ['инженерной', 'научной', 'строительной', 'медицинской'] },
    { sentence: 'У нас был тест по сайенс.', englishWord: 'сайенс', correct: 'естествознанию', options: ['естествознанию', 'математике', 'литературе', 'истории'] },
    { sentence: 'Я делаю мой хоумворк каждый день.', englishWord: 'хоумворк', correct: 'домашнее задание', options: ['домашнее задание', 'классную работу', 'контрольную работу', 'самостоятельную работу'] },
    { sentence: 'Мы поехали на филд трип в музей.', englishWord: 'филд трип', correct: 'экскурсию', options: ['экскурсию', 'поездку', 'прогулку', 'путешествие'] },
    { sentence: 'Наш тичер задал много работы.', englishWord: 'тичер', correct: 'учитель', options: ['учитель', 'директор', 'воспитатель', 'преподаватель'] },
    { sentence: 'Мы ходили в шопинг центр.', englishWord: 'шопинг', correct: 'торговый', options: ['торговый', 'спортивный', 'развлекательный', 'выставочный'] },
    { sentence: 'Мама забыла ключи на паркинге.', englishWord: 'паркинге', correct: 'парковке', options: ['парковке', 'стоянке', 'площадке', 'остановке'] },
    { sentence: 'У нас сегодня митинг после школы.', englishWord: 'митинг', correct: 'собрание', options: ['собрание', 'встреча', 'репетиция', 'тренировка'] },
    { sentence: 'Я лайкнул его фото.', englishWord: 'лайкнул', correct: 'отметил как понравившееся', options: ['отметил как понравившееся', 'прокомментировал', 'переслал', 'сохранил'] },
    { sentence: 'Мне нужен брейк, я устал.', englishWord: 'брейк', correct: 'перерыв', options: ['перерыв', 'отдых', 'каникулы', 'выходной'] },
    { sentence: 'Мы играли в баскетбол на рисессе.', englishWord: 'рисессе', correct: 'перемене', options: ['перемене', 'уроке', 'тренировке', 'разминке'] },
    { sentence: 'Она носит очень найс платье.', englishWord: 'найс', correct: 'красивое', options: ['красивое', 'модное', 'дорогое', 'новое'] },
    { sentence: 'Этот фильм очень скэри.', englishWord: 'скэри', correct: 'страшный', options: ['страшный', 'грустный', 'скучный', 'длинный'] },
    { sentence: 'Мне нужно сделать презентейшн для класса.', englishWord: 'презентейшн', correct: 'презентацию', options: ['презентацию', 'доклад', 'сочинение', 'реферат'] },
    { sentence: 'Мой брат играет в футбольной тим.', englishWord: 'тим', correct: 'команде', options: ['команде', 'группе', 'секции', 'школе'] },
    { sentence: 'Мы купили снэки в магазине.', englishWord: 'снэки', correct: 'перекус', options: ['перекус', 'закуски', 'сладости', 'продукты'] },
    { sentence: 'Этот тест был изи.', englishWord: 'изи', correct: 'лёгким', options: ['лёгким', 'простым', 'коротким', 'быстрым'] },
    { sentence: 'Давай почилим после школы.', englishWord: 'почилим', correct: 'отдохнём', options: ['отдохнём', 'погуляем', 'поиграем', 'посидим'] },
    { sentence: 'У нас есть спешл ивент завтра.', englishWord: 'спешл ивент', correct: 'особое мероприятие', options: ['особое мероприятие', 'важная встреча', 'школьный праздник', 'торжественный вечер'] },
    { sentence: 'Мне надо зарядить мой девайс.', englishWord: 'девайс', correct: 'устройство', options: ['устройство', 'телефон', 'планшет', 'компьютер'] },
    { sentence: 'Он суперсмарт, всё знает.', englishWord: 'суперсмарт', correct: 'очень умный', options: ['очень умный', 'очень быстрый', 'очень сильный', 'очень внимательный'] },
    { sentence: 'Мы играем в онлайн гейм.', englishWord: 'гейм', correct: 'онлайн-игру', options: ['онлайн-игру', 'компьютерную игру', 'настольную игру', 'видеоигру'] },
    { sentence: 'Она ольвейс опаздывает.', englishWord: 'ольвейс', correct: 'всегда', options: ['всегда', 'обычно', 'иногда', 'часто'] },
    { sentence: 'Я забыл свой лаптоп дома.', englishWord: 'лаптоп', correct: 'ноутбук', options: ['ноутбук', 'портфель', 'учебник', 'телефон'] }
];

const agreementData = [
    // Short-form adjective agreement
    { sentence: 'Эти качества очень важн___.', blank: 'важн___', correct: 'ы', options: ['ы', 'а', 'о', 'ые'], category: 'adjective' },
    { sentence: 'Погода сегодня прекрасн___.', blank: 'прекрасн___', correct: 'а', options: ['а', 'о', 'ы', 'ое'], category: 'adjective' },
    { sentence: 'Мясо было вкусн___.', blank: 'вкусн___', correct: 'ое', options: ['ое', 'ая', 'ый', 'ые'], category: 'adjective' },
    { sentence: 'Дети были счастлив___.', blank: 'счастлив___', correct: 'ы', options: ['ы', 'а', 'ое', 'ый'], category: 'adjective' },
    { sentence: 'Книга была очень интересн___.', blank: 'интересн___', correct: 'а', options: ['а', 'ый', 'ое', 'ы'], category: 'adjective' },
    { sentence: 'Небо сегодня голуб___.', blank: 'голуб___', correct: 'ое', options: ['ое', 'ая', 'ой', 'ые'], category: 'adjective' },
    { sentence: 'Этот вопрос сложн___.', blank: 'сложн___', correct: 'ый', options: ['ый', 'ая', 'ое', 'ые'], category: 'adjective' },
    { sentence: 'Задания были трудн___.', blank: 'трудн___', correct: 'ые', options: ['ые', 'ый', 'ая', 'ое'], category: 'adjective' },
    { sentence: 'Музыка была громк___.', blank: 'громк___', correct: 'ая', options: ['ая', 'ой', 'ое', 'ые'], category: 'adjective' },
    { sentence: 'Фильм оказался длинн___.', blank: 'длинн___', correct: 'ый', options: ['ый', 'ая', 'ое', 'ые'], category: 'adjective' },
    { sentence: 'Ответы были правильн___.', blank: 'правильн___', correct: 'ые', options: ['ые', 'ый', 'ая', 'ое'], category: 'adjective' },
    { sentence: 'Молоко было свеж___.', blank: 'свеж___', correct: 'ее', options: ['ее', 'ий', 'ая', 'ие'], category: 'adjective' },
    // Verb agreement
    { sentence: 'Друзья всегда помога___.', blank: 'помога___', correct: 'ют', options: ['ют', 'ет', 'ит', 'ем'], category: 'verb' },
    { sentence: 'Мама и папа работа___.', blank: 'работа___', correct: 'ют', options: ['ют', 'ет', 'ит', 'ем'], category: 'verb' },
    { sentence: 'Время быстро лет___.', blank: 'лет___', correct: 'ит', options: ['ит', 'ет', 'ют', 'ат'], category: 'verb' },
    { sentence: 'Дети обычно игра___ в парке.', blank: 'игра___', correct: 'ют', options: ['ют', 'ет', 'ит', 'ем'], category: 'verb' },
    { sentence: 'Учитель объясня___ урок.', blank: 'объясня___', correct: 'ет', options: ['ет', 'ют', 'ит', 'ат'], category: 'verb' },
    { sentence: 'Мы всегда стара___ся.', blank: 'стара___ся', correct: 'ем', options: ['ем', 'ет', 'ют', 'ит'], category: 'verb' },
    { sentence: 'Птицы лета___ на юг.', blank: 'лета___', correct: 'ют', options: ['ют', 'ет', 'ит', 'ем'], category: 'verb' },
    { sentence: 'Солнце свет___ ярко.', blank: 'свет___', correct: 'ит', options: ['ит', 'ет', 'ют', 'ат'], category: 'verb' },
    { sentence: 'Родители люб___ своих детей.', blank: 'люб___', correct: 'ят', options: ['ят', 'ют', 'ит', 'ет'], category: 'verb' },
    { sentence: 'Студенты готов___ся к экзамену.', blank: 'готов___ся', correct: 'ят', options: ['ят', 'ют', 'ит', 'ет'], category: 'verb' },
    { sentence: 'Река теч___ быстро.', blank: 'теч___', correct: 'ёт', options: ['ёт', 'ут', 'ит', 'ат'], category: 'verb' },
    { sentence: 'Листья пада___ с деревьев.', blank: 'пада___', correct: 'ют', options: ['ют', 'ет', 'ит', 'ат'], category: 'verb' },
    // Noun-adjective agreement in cases
    { sentence: 'Я живу в красив___ городе.', blank: 'красив___', correct: 'ом', options: ['ом', 'ой', 'ым', 'ем'], category: 'case' },
    { sentence: 'Мы говорили о нов___ фильме.', blank: 'нов___', correct: 'ом', options: ['ом', 'ый', 'ой', 'ем'], category: 'case' },
    { sentence: 'Она пошла к лучш___ подруге.', blank: 'лучш___', correct: 'ей', options: ['ей', 'ой', 'ий', 'ую'], category: 'case' },
    { sentence: 'Я читаю интересн___ книгу.', blank: 'интересн___', correct: 'ую', options: ['ую', 'ой', 'ая', 'ое'], category: 'case' },
    { sentence: 'Он гордится сво___ достижениями.', blank: 'сво___', correct: 'ими', options: ['ими', 'ыми', 'его', 'ей'], category: 'case' },
    { sentence: 'Мы поехали на больш___ машине.', blank: 'больш___', correct: 'ой', options: ['ой', 'ом', 'ую', 'ые'], category: 'case' },
    { sentence: 'В этом магазине нет свеж___ хлеба.', blank: 'свеж___', correct: 'его', options: ['его', 'ий', 'ого', 'ему'], category: 'case' },
    { sentence: 'Учитель доволен нов___ учеником.', blank: 'нов___', correct: 'ым', options: ['ым', 'ой', 'ом', 'ем'], category: 'case' },
    { sentence: 'Мы пришли к стар___ другу.', blank: 'стар___', correct: 'ому', options: ['ому', 'ым', 'ой', 'ого'], category: 'case' },
    { sentence: 'Дети играли с маленьк___ котёнком.', blank: 'маленьк___', correct: 'им', options: ['им', 'ом', 'ым', 'ой'], category: 'case' },
    // Mixed tricky
    { sentence: 'Сколько времен___ это займёт?', blank: 'времен___', correct: 'и', options: ['и', 'я', 'ю', 'е'], category: 'mixed' },
    { sentence: 'На столе стоял___ чашка.', blank: 'стоял___', correct: 'а', options: ['а', 'о', 'и', 'ы'], category: 'mixed' },
    { sentence: 'В этом году было много интересн___ событий.', blank: 'интересн___', correct: 'ых', options: ['ых', 'ые', 'ой', 'ого'], category: 'mixed' },
    { sentence: 'Мне нужно больше свободн___ времени.', blank: 'свободн___', correct: 'ого', options: ['ого', 'ое', 'ой', 'ых'], category: 'mixed' },
    { sentence: 'Мы должны заботиться об окружающ___ среде.', blank: 'окружающ___', correct: 'ей', options: ['ей', 'ую', 'ая', 'ой'], category: 'mixed' },
    { sentence: 'Спасибо за тво___ помощь.', blank: 'тво___', correct: 'ю', options: ['ю', 'й', 'я', 'е'], category: 'mixed' },
    { sentence: 'Без хорош___ образования трудно.', blank: 'хорош___', correct: 'его', options: ['его', 'ее', 'ий', 'ое'], category: 'mixed' },
    { sentence: 'Благодаря упорн___ труду он добился успеха.', blank: 'упорн___', correct: 'ому', options: ['ому', 'ый', 'ого', 'ым'], category: 'mixed' },
    { sentence: 'У неё много хорош___ друзей.', blank: 'хорош___', correct: 'их', options: ['их', 'ие', 'ий', 'ых'], category: 'mixed' },
    { sentence: 'После долг___ зимы пришла весна.', blank: 'долг___', correct: 'ой', options: ['ой', 'ая', 'ую', 'ое'], category: 'mixed' }
];

const vowelData = [
    { word: 'г___ворить', hint: 'гóвор', correct: 'о', options: ['о', 'а'] },
    { word: 'м___локо', hint: 'словарное слово', correct: 'о', options: ['о', 'а'] },
    { word: 'х___рошо', hint: 'хорóший', correct: 'о', options: ['о', 'а'] },
    { word: 'г___лова', hint: 'гóловы', correct: 'о', options: ['о', 'а'] },
    { word: 'д___рога', hint: 'дорóженька', correct: 'о', options: ['о', 'а'] },
    { word: 'к___рова', hint: 'корóвушка', correct: 'о', options: ['о', 'а'] },
    { word: 'п___года', hint: 'словарное слово', correct: 'о', options: ['о', 'а'] },
    { word: 'м___роз', hint: 'словарное слово', correct: 'о', options: ['о', 'а'] },
    { word: 'р___бота', hint: 'словарное слово', correct: 'а', options: ['о', 'а'] },
    { word: 'к___ртина', hint: 'словарное слово', correct: 'а', options: ['о', 'а'] },
    { word: 'з___вод', hint: 'словарное слово', correct: 'а', options: ['о', 'а'] },
    { word: 'тр___ва', hint: 'трáвы', correct: 'а', options: ['о', 'а'] },
    { word: 'вр___чи', hint: 'врáч', correct: 'а', options: ['о', 'а'] },
    { word: 'стр___на', hint: 'стрáны', correct: 'а', options: ['о', 'а'] },
    { word: 'д___ревья', hint: 'дéрево', correct: 'е', options: ['е', 'и'] },
    { word: 'з___ма', hint: 'зúмний', correct: 'и', options: ['е', 'и'] },
    { word: 'п___сать', hint: 'пúшет', correct: 'и', options: ['е', 'и'] },
    { word: 'св___тить', hint: 'свéт', correct: 'е', options: ['е', 'и'] },
    { word: 'ч___стота', hint: 'чúсто = чистота (cleanliness), чáсто = частота (frequency)', correct: 'и', options: ['и', 'а', 'е'] },
    { word: 'т___жёлый', hint: 'тя́жесть', correct: 'я', options: ['я', 'е', 'и'] },
    { word: 'в___сна', hint: 'вёсны', correct: 'е', options: ['е', 'и', 'я'] },
    { word: 'л___сной', hint: 'лéс', correct: 'е', options: ['е', 'и'] },
    { word: 'ст___на', hint: 'стéны', correct: 'е', options: ['е', 'и'] },
    { word: 'р___ка', hint: 'рéки', correct: 'е', options: ['е', 'и'] },
    { word: 'цв___ток', hint: 'цвéт', correct: 'е', options: ['е', 'и'] },
    { word: 'с___довник', hint: 'сáд', correct: 'а', options: ['о', 'а'] },
    { word: 'н___чной', hint: 'нóчь', correct: 'о', options: ['о', 'а'] },
    { word: 'ст___ловая', hint: 'стóл', correct: 'о', options: ['о', 'а'] },
    { word: 'б___льной', hint: 'бóль', correct: 'о', options: ['о', 'а'] },
    { word: 'м___рской', hint: 'мóре', correct: 'о', options: ['о', 'а'] }
];

// ==================== STATE ====================

let drillCurrentType = null; // 'spelling', 'english', 'agreement', 'vowels'
let drillQuestions = [];
let drillCurrentIndex = 0;
let drillCorrect = 0;
let drillAnswers = []; // {question, userAnswer, correctAnswer, isCorrect}

// ==================== PROGRESS HELPERS ====================

function getDrillProgress(type) {
    return JSON.parse(localStorage.getItem('drill_' + type) || '{"attempts":0,"correct":0,"total":0,"wrongItems":[]}');
}

function saveDrillProgress(type, correct, total, wrongItems) {
    const prev = getDrillProgress(type);
    prev.attempts += total;
    prev.correct += correct;
    prev.total += total;
    // Merge wrong items: track frequency
    wrongItems.forEach(item => {
        const existing = prev.wrongItems.find(w => w.id === item);
        if (existing) {
            existing.count++;
        } else {
            prev.wrongItems.push({ id: item, count: 1 });
        }
    });
    localStorage.setItem('drill_' + type, JSON.stringify(prev));
}

function getAccuracy(type) {
    const p = getDrillProgress(type);
    if (p.total === 0) return '--';
    return Math.round((p.correct / p.total) * 100) + '%';
}

function getWeekNumber() {
    const start = new Date(2026, 1, 13); // Feb 13, 2026
    const now = new Date();
    const diff = Math.floor((now - start) / (7 * 24 * 60 * 60 * 1000));
    return Math.max(1, Math.min(6, diff + 1));
}

function getWeekFocus() {
    const w = getWeekNumber();
    if (w <= 2) return '🎯 Фокус этой недели: Правописание базовых слов + замена английских слов + согласование';
    if (w <= 4) return '🎯 Фокус этой недели: Академические слова + безударные гласные + падежные окончания';
    return '🎯 Фокус этой недели: Повторение всех упражнений. Пройдите то, что вызывает трудности!';
}

// ==================== SHUFFLE ====================

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ==================== TTS (Three-Tier: Inworld → Google Cloud → Browser) ====================

let drillIsPlaying = false;

async function speakRussian(text) {
    if (drillIsPlaying) return;
    drillIsPlaying = true;

    const btn = document.getElementById('drill-play-btn');
    if (btn) {
        btn.textContent = '🔊 Loading...';
        btn.disabled = true;
        btn.style.opacity = '0.7';
    }

    try {
        // Tier 1: Inworld TTS (uses keys from listening.js)
        if (typeof INWORLD_API_KEY !== 'undefined') {
            console.log('🔄 Drills: Trying Tier 1 - Inworld TTS...');
            if (btn) btn.textContent = '🔊 Loading voice...';

            const response = await fetch('https://api.inworld.ai/tts/v1/voice:stream', {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${INWORLD_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text: text,
                    voiceId: INWORLD_VOICE_ID,
                    modelId: INWORLD_MODEL,
                    audio_config: {
                        audio_encoding: "MP3",
                        sample_rate_hertz: 48000
                    }
                })
            });

            if (!response.ok) throw new Error(`Inworld: ${response.status}`);

            const responseText = await response.text();
            const lines = responseText.trim().split('\n').filter(line => line.trim());
            const audioChunks = [];
            for (const line of lines) {
                try {
                    const chunk = JSON.parse(line);
                    if (chunk.result && chunk.result.audioContent) {
                        audioChunks.push(chunk.result.audioContent);
                    }
                } catch (e) {}
            }
            if (audioChunks.length === 0) throw new Error('No audio from Inworld');

            const binaryString = atob(audioChunks.join(''));
            const bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) bytes[i] = binaryString.charCodeAt(i);

            const audioUrl = URL.createObjectURL(new Blob([bytes], { type: 'audio/mp3' }));
            await drillPlayAudioUrl(audioUrl, btn);
            console.log('✅ Drills: Inworld TTS success');
            return;
        }
    } catch (e) {
        console.warn('❌ Drills Tier 1 (Inworld) failed:', e.message);
    }

    try {
        // Tier 2: Google Cloud TTS
        if (typeof GOOGLE_CLOUD_API_KEY !== 'undefined') {
            console.log('🔄 Drills: Trying Tier 2 - Google Cloud TTS...');
            if (btn) btn.textContent = '🔊 Loading voice...';

            const response = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${GOOGLE_CLOUD_API_KEY}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    input: { text: text },
                    voice: { languageCode: 'ru-RU', name: 'ru-RU-Wavenet-B' },
                    audioConfig: { audioEncoding: 'MP3', speakingRate: 0.9 }
                })
            });

            if (!response.ok) throw new Error(`Google Cloud: ${response.status}`);
            const data = await response.json();
            if (!data.audioContent) throw new Error('No audio from Google Cloud');

            const binaryString = atob(data.audioContent);
            const bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) bytes[i] = binaryString.charCodeAt(i);

            const audioUrl = URL.createObjectURL(new Blob([bytes], { type: 'audio/mp3' }));
            await drillPlayAudioUrl(audioUrl, btn);
            console.log('✅ Drills: Google Cloud TTS success');
            return;
        }
    } catch (e) {
        console.warn('❌ Drills Tier 2 (Google Cloud) failed:', e.message);
    }

    // Tier 3: Browser TTS fallback
    console.log('🔄 Drills: Using Tier 3 - Browser TTS');
    if (btn) btn.textContent = '🔊 Playing...';
    await drillBrowserTTS(text);
    drillFinishPlay(btn);
}

function drillPlayAudioUrl(url, btn) {
    return new Promise((resolve, reject) => {
        const audio = new Audio(url);

        audio.oncanplaythrough = () => {
            if (btn) btn.textContent = '🔊 Playing...';
            audio.play().then(() => {}).catch(reject);
        };

        audio.onended = () => {
            drillFinishPlay(btn);
            URL.revokeObjectURL(url);
            resolve();
        };

        audio.onerror = (e) => {
            drillFinishPlay(btn);
            URL.revokeObjectURL(url);
            reject(e);
        };

        audio.load();
    });
}

function drillBrowserTTS(text) {
    return new Promise((resolve) => {
        if (!window.speechSynthesis) { resolve(); return; }
        speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'ru-RU';
        u.rate = 0.9;
        const voices = speechSynthesis.getVoices();
        const ruVoice = voices.find(v => v.lang.includes('ru'));
        if (ruVoice) u.voice = ruVoice;
        u.onend = () => resolve();
        u.onerror = () => resolve();
        speechSynthesis.speak(u);
    });
}

function drillFinishPlay(btn) {
    drillIsPlaying = false;
    if (btn) {
        btn.textContent = '🔊 Play Audio';
        btn.disabled = false;
        btn.style.opacity = '1';
    }
}

// ==================== INIT ====================

function initPersonalDrills() {
    showDrillsHome();
}

function showDrillsHome() {
    const container = document.getElementById('personal-drills-container');
    const focus = getWeekFocus();

    // Problem items count
    const problemCounts = ['spelling', 'english', 'agreement', 'vowels'].map(t => {
        const p = getDrillProgress(t);
        return p.wrongItems.filter(w => w.count >= 2).length;
    });
    const totalProblems = problemCounts.reduce((a, b) => a + b, 0);

    container.innerHTML = `
        <div class="week-title">
            <span>⭐</span>
            <span>My Drills</span>
        </div>

        <div style="background: linear-gradient(135deg, #ff6f00 0%, #ff8f00 100%); color: white; padding: 18px 22px; border-radius: 12px; margin: 20px 0; font-size: 1.1em; font-weight: bold;">
            ${focus}
        </div>

        ${totalProblems > 0 ? `<div style="background: #fff3e0; padding: 12px 18px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #ff9800; font-size: 0.95em;">
            ⚠️ <strong>${totalProblems} problem item${totalProblems > 1 ? 's' : ''}</strong> — items you got wrong 2+ times will appear more often in future sessions.
        </div>` : ''}

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; margin-top: 10px;">
            ${drillCard('spelling', '✏️', 'Правописание', 'Spelling Quiz', 'Type the Russian word from English + audio', getAccuracy('spelling'))}
            ${drillCard('english', '🔄', 'Замена английских слов', 'Replace English Words', 'Pick the correct Russian word for the English one', getAccuracy('english'))}
            ${drillCard('agreement', '📐', 'Согласование', 'Gender/Number Agreement', 'Pick the correct ending for the sentence', getAccuracy('agreement'))}
            ${drillCard('vowels', '🔤', 'Безударные гласные', 'Unstressed Vowels', 'Pick the missing vowel in the word', getAccuracy('vowels'))}
        </div>
    `;
}

function drillCard(type, icon, titleRu, titleEn, desc, accuracy) {
    const accColor = accuracy === '--' ? '#bbb' : (parseInt(accuracy) >= 80 ? '#4caf50' : parseInt(accuracy) >= 50 ? '#ff9800' : '#f44336');
    return `
        <div onclick="startDrill('${type}')" style="background: white; border-radius: 15px; padding: 25px; cursor: pointer; box-shadow: 0 3px 15px rgba(0,0,0,0.1); transition: all 0.3s; border: 2px solid #eee;"
             onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 6px 20px rgba(0,0,0,0.15)'"
             onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 3px 15px rgba(0,0,0,0.1)'">
            <div style="font-size: 2.5em; text-align: center; margin-bottom: 10px;">${icon}</div>
            <div style="font-size: 1.2em; font-weight: bold; text-align: center; color: #333;">${titleRu}</div>
            <div style="font-size: 0.95em; color: #888; text-align: center; margin: 5px 0;">${titleEn}</div>
            <div style="font-size: 0.85em; color: #666; text-align: center; margin: 10px 0;">${desc}</div>
            <div style="text-align: center; margin-top: 15px;">
                <span style="display: inline-block; background: ${accColor}; color: white; padding: 6px 18px; border-radius: 20px; font-weight: bold; font-size: 1.1em;">${accuracy}</span>
            </div>
        </div>
    `;
}

// ==================== START DRILL ====================

function startDrill(type) {
    drillCurrentType = type;
    drillCurrentIndex = 0;
    drillCorrect = 0;
    drillAnswers = [];

    // Build 10 questions, prioritizing problem items
    const progress = getDrillProgress(type);
    const problemIds = progress.wrongItems.filter(w => w.count >= 2).map(w => w.id);

    if (type === 'spelling') {
        const w = getWeekNumber();
        let pool = [];
        if (w <= 2) pool = [...spellingWords['week1-2']];
        else if (w <= 4) pool = [...spellingWords['week1-2'], ...spellingWords['week3-4']];
        else pool = [...spellingWords['week1-2'], ...spellingWords['week3-4'], ...spellingWords['week5']];

        // Prioritize problem words
        const problems = pool.filter(w => problemIds.includes(w.russian));
        const others = pool.filter(w => !problemIds.includes(w.russian));
        const prioritized = [...shuffleArray(problems), ...shuffleArray(others)];
        drillQuestions = prioritized.slice(0, 10);
    } else if (type === 'english') {
        const problems = englishWordsData.filter(w => problemIds.includes(w.correct));
        const others = englishWordsData.filter(w => !problemIds.includes(w.correct));
        const prioritized = [...shuffleArray(problems), ...shuffleArray(others)];
        drillQuestions = prioritized.slice(0, 10);
    } else if (type === 'agreement') {
        const problems = agreementData.filter(w => problemIds.includes(w.sentence));
        const others = agreementData.filter(w => !problemIds.includes(w.sentence));
        const prioritized = [...shuffleArray(problems), ...shuffleArray(others)];
        drillQuestions = prioritized.slice(0, 10);
    } else if (type === 'vowels') {
        const problems = vowelData.filter(w => problemIds.includes(w.word));
        const others = vowelData.filter(w => !problemIds.includes(w.word));
        const prioritized = [...shuffleArray(problems), ...shuffleArray(others)];
        drillQuestions = prioritized.slice(0, 10);
    }

    showDrillQuestion();
}

// ==================== SHOW QUESTION ====================

function showDrillQuestion() {
    const container = document.getElementById('personal-drills-container');
    const q = drillQuestions[drillCurrentIndex];
    const num = drillCurrentIndex + 1;
    const total = drillQuestions.length;

    let html = `
        <div style="margin-bottom: 15px;">
            <button onclick="showDrillsHome()" class="go-button" style="background: #9e9e9e;">← Back to Drills</button>
        </div>
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 20px; border-radius: 10px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: bold; font-size: 1.1em;">Question ${num} of ${total}</span>
            <span>✅ ${drillCorrect} correct</span>
        </div>
    `;

    if (drillCurrentType === 'spelling') {
        html += renderSpellingQuestion(q);
    } else if (drillCurrentType === 'english') {
        html += renderEnglishQuestion(q);
    } else if (drillCurrentType === 'agreement') {
        html += renderAgreementQuestion(q);
    } else if (drillCurrentType === 'vowels') {
        html += renderVowelQuestion(q);
    }

    container.innerHTML = html;

    // Auto-play audio for spelling
    if (drillCurrentType === 'spelling') {
        setTimeout(() => speakRussian(q.russian), 300);
    }
}

// ==================== SPELLING DRILL ====================

function renderSpellingQuestion(q) {
    return `
        <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 3px 15px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 25px;">
                <div style="font-size: 1.8em; font-weight: bold; color: #333; margin-bottom: 10px;">${q.english}</div>
                <button id="drill-play-btn" onclick="speakRussian('${q.russian.replace(/'/g, "\\'")}')" class="go-button" style="background: #4caf50; font-size: 1em; padding: 10px 25px;">
                    🔊 Play Audio
                </button>
            </div>
            <div style="text-align: center;">
                <input type="text" id="spelling-input" placeholder="Напишите по-русски..."
                    style="font-size: 1.4em; padding: 15px 20px; border: 3px solid #667eea; border-radius: 12px; width: 80%; max-width: 400px; text-align: center;"
                    onkeydown="if(event.key==='Enter')checkSpelling()"
                    autocomplete="off" autocapitalize="off" spellcheck="false">
                <div style="margin-top: 20px;">
                    <button onclick="checkSpelling()" class="go-button" style="font-size: 1.2em; padding: 12px 40px;">Check ✓</button>
                </div>
            </div>
            <div id="spelling-feedback" style="margin-top: 20px;"></div>
        </div>
    `;
}

function checkSpelling() {
    const input = document.getElementById('spelling-input');
    if (!input) return;
    const userAnswer = input.value.trim().toLowerCase();
    const q = drillQuestions[drillCurrentIndex];
    const correct = q.russian.toLowerCase();
    const isCorrect = userAnswer === correct;

    if (isCorrect) drillCorrect++;

    drillAnswers.push({
        question: q.english,
        userAnswer: userAnswer,
        correctAnswer: q.russian,
        isCorrect: isCorrect
    });

    // Show feedback
    const fb = document.getElementById('spelling-feedback');
    if (isCorrect) {
        fb.innerHTML = `
            <div style="background: #e8f5e9; padding: 20px; border-radius: 10px; text-align: center;">
                <div style="font-size: 1.5em; color: #4caf50; font-weight: bold;">✅ Correct!</div>
                <div style="font-size: 1.3em; margin-top: 10px;">${q.russian}</div>
            </div>
        `;
    } else {
        fb.innerHTML = `
            <div style="background: #ffebee; padding: 20px; border-radius: 10px; text-align: center;">
                <div style="font-size: 1.3em; color: #f44336; font-weight: bold; margin-bottom: 15px;">❌ Not quite</div>
                <div style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap;">
                    <div>
                        <div style="font-size: 0.9em; color: #999; margin-bottom: 5px;">Your answer:</div>
                        <div style="font-size: 1.3em;">${renderSpellingDiff(userAnswer, correct, false)}</div>
                    </div>
                    <div>
                        <div style="font-size: 0.9em; color: #999; margin-bottom: 5px;">Correct:</div>
                        <div style="font-size: 1.3em;">${renderSpellingDiff(correct, userAnswer, true)}</div>
                    </div>
                </div>
            </div>
        `;
    }

    // Disable input
    input.disabled = true;

    // Show next button
    fb.innerHTML += `
        <div style="text-align: center; margin-top: 20px;">
            <button onclick="nextDrillQuestion()" class="go-button" style="font-size: 1.1em; padding: 12px 35px;">
                ${drillCurrentIndex < drillQuestions.length - 1 ? 'Next →' : 'See Results 📊'}
            </button>
        </div>
    `;
}

function renderSpellingDiff(text, reference, isCorrect) {
    let result = '';
    const maxLen = Math.max(text.length, reference.length);
    for (let i = 0; i < text.length; i++) {
        const charMatch = i < reference.length && text[i] === reference[i];
        if (charMatch) {
            result += `<span>${text[i]}</span>`;
        } else {
            result += `<span style="background: ${isCorrect ? '#c8e6c9' : '#ffcdd2'}; padding: 0 2px; border-radius: 3px; font-weight: bold;">${text[i]}</span>`;
        }
    }
    return result;
}

// ==================== ENGLISH WORDS DRILL ====================

function renderEnglishQuestion(q) {
    const highlighted = q.sentence.replace(q.englishWord, `<strong style="color: #e91e63; background: #fce4ec; padding: 2px 6px; border-radius: 4px;">${q.englishWord}</strong>`);
    const shuffled = shuffleArray(q.options);

    return `
        <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 3px 15px rgba(0,0,0,0.1);">
            <div style="font-size: 1.4em; text-align: center; margin-bottom: 25px; line-height: 1.6;">${highlighted}</div>
            <div style="font-size: 1em; text-align: center; color: #888; margin-bottom: 20px;">Выберите правильное русское слово:</div>
            <div style="display: grid; gap: 12px; max-width: 500px; margin: 0 auto;">
                ${shuffled.map(opt => `
                    <button onclick="checkEnglishAnswer(this, '${opt.replace(/'/g, "\\'")}')"
                        class="go-button drill-option-btn"
                        style="width: 100%; padding: 14px 20px; font-size: 1.1em; text-align: center; background: white; border: 2px solid #667eea; color: #333; border-radius: 10px;">
                        ${opt}
                    </button>
                `).join('')}
            </div>
            <div id="english-feedback" style="margin-top: 20px;"></div>
        </div>
    `;
}

function checkEnglishAnswer(btn, answer) {
    const q = drillQuestions[drillCurrentIndex];
    const isCorrect = answer === q.correct;
    if (isCorrect) drillCorrect++;

    drillAnswers.push({
        question: q.sentence,
        userAnswer: answer,
        correctAnswer: q.correct,
        isCorrect: isCorrect
    });

    // Disable all buttons
    document.querySelectorAll('.drill-option-btn').forEach(b => {
        b.disabled = true;
        b.style.cursor = 'default';
        if (b.textContent.trim() === q.correct) {
            b.style.background = '#e8f5e9';
            b.style.borderColor = '#4caf50';
            b.style.fontWeight = 'bold';
        }
    });

    if (!isCorrect) {
        btn.style.background = '#ffebee';
        btn.style.borderColor = '#f44336';
    }

    const fb = document.getElementById('english-feedback');
    fb.innerHTML = `
        <div style="text-align: center; margin-top: 20px;">
            <div style="font-size: 1.2em; color: ${isCorrect ? '#4caf50' : '#f44336'}; font-weight: bold; margin-bottom: 15px;">
                ${isCorrect ? '✅ Correct!' : '❌ Incorrect — правильный ответ: ' + q.correct}
            </div>
            <button onclick="nextDrillQuestion()" class="go-button" style="font-size: 1.1em; padding: 12px 35px;">
                ${drillCurrentIndex < drillQuestions.length - 1 ? 'Next →' : 'See Results 📊'}
            </button>
        </div>
    `;
}

// ==================== AGREEMENT DRILL ====================

function renderAgreementQuestion(q) {
    const highlighted = q.sentence.replace(q.blank, `<strong style="color: #667eea; background: #e8eaf6; padding: 2px 6px; border-radius: 4px; font-size: 1.1em;">${q.blank}</strong>`);
    const shuffled = shuffleArray(q.options);

    return `
        <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 3px 15px rgba(0,0,0,0.1);">
            <div style="font-size: 1.4em; text-align: center; margin-bottom: 25px; line-height: 1.6;">${highlighted}</div>
            <div style="font-size: 1em; text-align: center; color: #888; margin-bottom: 20px;">Выберите правильное окончание:</div>
            <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                ${shuffled.map(opt => `
                    <button onclick="checkAgreementAnswer(this, '${opt.replace(/'/g, "\\'")}')"
                        class="go-button drill-option-btn"
                        style="padding: 14px 28px; font-size: 1.3em; background: white; border: 2px solid #667eea; color: #333; border-radius: 10px; min-width: 70px;">
                        ${opt}
                    </button>
                `).join('')}
            </div>
            <div id="agreement-feedback" style="margin-top: 20px;"></div>
        </div>
    `;
}

function checkAgreementAnswer(btn, answer) {
    const q = drillQuestions[drillCurrentIndex];
    const isCorrect = answer === q.correct;
    if (isCorrect) drillCorrect++;

    drillAnswers.push({
        question: q.sentence,
        userAnswer: answer,
        correctAnswer: q.correct,
        isCorrect: isCorrect
    });

    document.querySelectorAll('.drill-option-btn').forEach(b => {
        b.disabled = true;
        b.style.cursor = 'default';
        if (b.textContent.trim() === q.correct) {
            b.style.background = '#e8f5e9';
            b.style.borderColor = '#4caf50';
            b.style.fontWeight = 'bold';
        }
    });

    if (!isCorrect) {
        btn.style.background = '#ffebee';
        btn.style.borderColor = '#f44336';
    }

    // Show full word with correct ending
    const fullWord = q.blank.replace('___', q.correct);

    const fb = document.getElementById('agreement-feedback');
    fb.innerHTML = `
        <div style="text-align: center; margin-top: 20px;">
            <div style="font-size: 1.2em; color: ${isCorrect ? '#4caf50' : '#f44336'}; font-weight: bold; margin-bottom: 10px;">
                ${isCorrect ? '✅ Correct!' : '❌ Incorrect'}
            </div>
            <div style="font-size: 1.1em; color: #333; margin-bottom: 15px;">
                ${q.sentence.replace(q.blank, '<strong style="color: #4caf50;">' + fullWord + '</strong>')}
            </div>
            <button onclick="nextDrillQuestion()" class="go-button" style="font-size: 1.1em; padding: 12px 35px;">
                ${drillCurrentIndex < drillQuestions.length - 1 ? 'Next →' : 'See Results 📊'}
            </button>
        </div>
    `;
}

// ==================== VOWEL DRILL ====================

function renderVowelQuestion(q) {
    const display = q.word.replace('___', '<span style="display: inline-block; width: 40px; border-bottom: 3px solid #667eea; margin: 0 3px;"></span>');

    return `
        <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 3px 15px rgba(0,0,0,0.1);">
            <div style="font-size: 2.5em; text-align: center; margin-bottom: 20px; letter-spacing: 3px; font-family: Georgia, serif;">${display}</div>
            <div style="text-align: center; color: #888; margin-bottom: 25px; font-size: 1em;">
                💡 Подсказка: <em>${q.hint}</em>
            </div>
            <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                ${q.options.map(opt => `
                    <button onclick="checkVowelAnswer(this, '${opt}')"
                        class="go-button drill-option-btn"
                        style="padding: 16px 35px; font-size: 1.6em; background: white; border: 3px solid #667eea; color: #333; border-radius: 12px; min-width: 80px; font-weight: bold;">
                        ${opt}
                    </button>
                `).join('')}
            </div>
            <div id="vowel-feedback" style="margin-top: 20px;"></div>
        </div>
    `;
}

function checkVowelAnswer(btn, answer) {
    const q = drillQuestions[drillCurrentIndex];
    const isCorrect = answer === q.correct;
    if (isCorrect) drillCorrect++;

    drillAnswers.push({
        question: q.word,
        userAnswer: answer,
        correctAnswer: q.correct,
        isCorrect: isCorrect
    });

    document.querySelectorAll('.drill-option-btn').forEach(b => {
        b.disabled = true;
        b.style.cursor = 'default';
        if (b.textContent.trim() === q.correct) {
            b.style.background = '#e8f5e9';
            b.style.borderColor = '#4caf50';
        }
    });

    if (!isCorrect) {
        btn.style.background = '#ffebee';
        btn.style.borderColor = '#f44336';
    }

    const fullWord = q.word.replace('___', `<strong style="color: #4caf50;">${q.correct}</strong>`);

    const fb = document.getElementById('vowel-feedback');
    fb.innerHTML = `
        <div style="text-align: center; margin-top: 20px;">
            <div style="font-size: 1.2em; color: ${isCorrect ? '#4caf50' : '#f44336'}; font-weight: bold; margin-bottom: 10px;">
                ${isCorrect ? '✅ Correct!' : '❌ Incorrect'}
            </div>
            <div style="font-size: 1.8em; margin-bottom: 15px;">${fullWord}</div>
            <button onclick="nextDrillQuestion()" class="go-button" style="font-size: 1.1em; padding: 12px 35px;">
                ${drillCurrentIndex < drillQuestions.length - 1 ? 'Next →' : 'See Results 📊'}
            </button>
        </div>
    `;
}

// ==================== NAVIGATION ====================

function nextDrillQuestion() {
    drillCurrentIndex++;
    if (drillCurrentIndex >= drillQuestions.length) {
        showDrillResults();
    } else {
        showDrillQuestion();
    }
}

// ==================== RESULTS ====================

function showDrillResults() {
    const total = drillQuestions.length;
    const pct = Math.round((drillCorrect / total) * 100);

    // Collect wrong item IDs
    const wrongItems = drillAnswers.filter(a => !a.isCorrect).map(a => {
        if (drillCurrentType === 'spelling') return a.correctAnswer;
        if (drillCurrentType === 'english') return a.correctAnswer;
        if (drillCurrentType === 'agreement') return a.question;
        if (drillCurrentType === 'vowels') return a.question;
        return a.question;
    });

    // Save progress
    saveDrillProgress(drillCurrentType, drillCorrect, total, wrongItems);

    const emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
    const message = pct >= 90 ? 'Excellent!' : pct >= 70 ? 'Good job!' : pct >= 50 ? 'Keep practicing!' : 'Review these items!';

    const container = document.getElementById('personal-drills-container');

    let errorsHtml = '';
    const errors = drillAnswers.filter(a => !a.isCorrect);
    if (errors.length > 0) {
        errorsHtml = `
            <div style="background: #fff3e0; padding: 20px; border-radius: 12px; margin-top: 25px;">
                <h3 style="color: #e65100; margin-bottom: 15px;">📝 Review Your Mistakes:</h3>
                ${errors.map(e => `
                    <div style="background: white; padding: 12px 16px; border-radius: 8px; margin: 8px 0; border-left: 4px solid #f44336;">
                        <div style="color: #333; margin-bottom: 5px;">${e.question}</div>
                        <div style="font-size: 0.9em;">
                            <span style="color: #f44336;">Your answer: <strong>${e.userAnswer || '(empty)'}</strong></span>
                            &nbsp;→&nbsp;
                            <span style="color: #4caf50;">Correct: <strong>${e.correctAnswer}</strong></span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    container.innerHTML = `
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 35px; border-radius: 15px; text-align: center; margin-bottom: 25px;">
            <div style="font-size: 3em; margin-bottom: 10px;">${emoji}</div>
            <div style="font-size: 2em; font-weight: bold; margin-bottom: 10px;">${drillCorrect}/${total}</div>
            <div style="font-size: 1.5em; margin-bottom: 5px;">${pct}%</div>
            <div style="font-size: 1.2em; opacity: 0.9;">${message}</div>
        </div>

        ${errorsHtml}

        <div style="display: flex; gap: 15px; justify-content: center; margin-top: 25px; flex-wrap: wrap;">
            <button onclick="startDrill('${drillCurrentType}')" class="go-button" style="font-size: 1.1em; padding: 14px 30px; background: #667eea;">
                🔄 Practice Again
            </button>
            <button onclick="showDrillsHome()" class="go-button" style="font-size: 1.1em; padding: 14px 30px; background: #9e9e9e;">
                ← Back to Drills
            </button>
        </div>
    `;
}
