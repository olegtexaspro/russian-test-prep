// mocktest.js - STAMP Russian Mock Test Module
// Note: Three-Tier TTS configuration (INWORLD_*, GOOGLE_CLOUD_*) is defined in listening.js
// and shared across both modules
// Tier 1: Inworld TTS (Primary), Tier 2: Google Cloud, Tier 3: Browser Web Speech API

// Mock test data with tiered difficulty (Novice, Intermediate, Advanced)
const mockTestData = {
    reading: {
        novice: [
            {
                text: "РАСПРОДАЖА!\nВсе футболки - 50% скидка\nТолько сегодня и завтра\nМагазин открыт 10:00 - 20:00",
                question: "Когда действует скидка?",
                options: ["Только сегодня", "Сегодня и завтра", "Всю неделю", "Каждый день"],
                correct: 1
            },
            {
                text: "Привет! Я Анна. Мне 15 лет. Я учусь в школе. Я люблю читать книги и играть в футбол.",
                question: "Что любит делать Анна?",
                options: ["Смотреть фильмы", "Читать и играть в футбол", "Рисовать", "Играть в баскетбол"],
                correct: 1
            },
            {
                text: "Автобус № 5\nОстановки: Школа → Парк → Центр → Вокзал\nКаждые 15 минут",
                question: "Как часто ходит автобус?",
                options: ["Каждые 10 минут", "Каждые 15 минут", "Каждые 20 минут", "Каждый час"],
                correct: 1
            },
            {
                text: "МЕНЮ\nСуп - 150 рублей\nПицца - 300 рублей\nСалат - 200 рублей\nСок - 50 рублей",
                question: "Сколько стоит пицца?",
                options: ["150 рублей", "200 рублей", "300 рублей", "50 рублей"],
                correct: 2
            },
            {
                text: "Уважаемые пассажиры! Поезд прибывает на станцию Москва в 15:30. Просьба подготовиться к выходу.",
                question: "Во сколько прибывает поезд?",
                options: ["В 14:30", "В 15:00", "В 15:30", "В 16:00"],
                correct: 2
            }
        ],
        intermediate: [
            {
                text: "В прошлом году наша школа организовала обмен учениками с гимназией в Санкт-Петербурге. Двадцать российских школьников провели три недели в американских семьях, посещали уроки и участвовали в культурных мероприятиях. Взамен американские ученики поехали в Россию летом. Этот опыт помог всем участникам не только улучшить языковые навыки, но и понять культурные различия между странами.",
                question: "Какова главная цель программы обмена?",
                options: ["Посещать уроки в другой стране", "Улучшить языковые навыки и понять культурные различия", "Жить в принимающих семьях", "Путешествовать летом"],
                correct: 1
            },
            {
                text: "Современные подростки проводят в среднем пять часов в день за экранами телефонов и компьютеров. Психологи предупреждают, что чрезмерное использование социальных сетей может привести к проблемам со сном, снижению концентрации внимания и ухудшению реальных социальных навыков. Эксперты рекомендуют родителям устанавливать разумные ограничения и поощрять физическую активность.",
                question: "Почему психологи обеспокоены использованием социальных сетей?",
                options: ["Подростки мало спят", "Это влияет на сон, внимание и социальные навыки", "Телефоны слишком дорогие", "Родители не контролируют детей"],
                correct: 1
            },
            {
                text: "Мария всегда мечтала стать врачом, но после волонтёрской работы в приюте для животных она поняла, что её истинное призвание — ветеринария. Теперь она усердно изучает биологию и химию, готовясь к поступлению в ветеринарный университет. Её родители сначала сомневались, но видя её энтузиазм и целеустремлённость, решили поддержать её выбор.",
                question: "Что изменило карьерные планы Марии?",
                options: ["Совет родителей", "Опыт волонтёрской работы с животными", "Учёба в университете", "Сложность медицинского образования"],
                correct: 1
            },
            {
                text: "Климатические изменения уже влияют на сельское хозяйство во многих регионах России. Фермеры в южных областях сталкиваются с засухами и непредсказуемыми осадками, что снижает урожайность традиционных культур. В то же время, в северных регионах становится возможным выращивать растения, которые раньше не могли там произрастать. Учёные работают над созданием устойчивых к изменениям климата сортов.",
                question: "Как климатические изменения влияют на северные и южные регионы?",
                options: ["Одинаково негативно на оба региона", "Север получает новые возможности, а юг страдает от засух", "Только юг испытывает проблемы", "Север становится холоднее"],
                correct: 1
            },
            {
                text: "Традиционные книжные магазины переживают трудные времена из-за популярности электронных книг и онлайн-продаж. Однако некоторые независимые магазины нашли способ выжить: они стали не просто местами продажи книг, а культурными центрами. Они организуют встречи с авторами, литературные клубы, мастер-классы и детские мероприятия. Такой подход помогает создать сообщество постоянных клиентов.",
                question: "Как независимые книжные магазины адаптируются к новым условиям?",
                options: ["Снижают цены на книги", "Продают только электронные книги", "Становятся культурными центрами с мероприятиями", "Закрывают свои магазины"],
                correct: 2
            },
            {
                text: "Александр Пушкин считается величайшим русским поэтом. Его произведения, написанные почти двести лет назад, до сих пор изучают в школах и читают с удовольствием. Пушкин не только создал шедевры поэзии и прозы, но и внёс огромный вклад в развитие современного русского литературного языка. Его влияние на русскую культуру трудно переоценить.",
                question: "Почему Пушкина считают важной фигурой в русской культуре?",
                options: ["Он был первым русским поэтом", "Он создал шедевры и развил литературный язык", "Его произведения самые длинные", "Он жил двести лет назад"],
                correct: 1
            }
        ],
        advanced: [
            {
                text: "Дебаты о роли искусственного интеллекта в обществе приобретают всё большую актуальность. С одной стороны, ИИ обещает революционизировать медицину, образование и научные исследования, повышая эффективность и точность во многих областях. С другой стороны, эксперты выражают обеспокоенность потенциальной потерей рабочих мест, этическими вопросами и рисками неконтролируемого развития технологии. Очевидно, что общество должно найти баланс между технологическим прогрессом и защитой человеческих интересов.",
                question: "Какова основная идея текста?",
                options: ["ИИ опасен и должен быть запрещён", "Необходимо найти баланс между преимуществами и рисками ИИ", "ИИ решит все проблемы человечества", "Эксперты против развития технологий"],
                correct: 1
            },
            {
                text: "Русская литература XIX века оказала огромное влияние на мировую культуру. Достоевский исследовал глубины человеческой психологии и моральные дилеммы, Толстой создал масштабные эпические произведения о российском обществе, а Чехов revolutionized драматургию и короткий рассказ своим тонким психологизмом. Эти писатели не просто развлекали читателей — они ставили фундаментальные вопросы о смысле жизни, справедливости и человеческой природе, которые остаются актуальными и сегодня.",
                question: "Что объединяет великих русских писателей XIX века согласно тексту?",
                options: ["Они писали длинные романы", "Они исследовали психологию и ставили фундаментальные вопросы", "Они жили в одном городе", "Они писали только о России"],
                correct: 1
            },
            {
                text: "Устойчивое развитие требует кардинального пересмотра современной экономической модели. Традиционная ориентация на безграничный рост потребления неизбежно ведёт к истощению природных ресурсов и экологической катастрофе. Концепция циркулярной экономики предлагает альтернативу: минимизация отходов, повторное использование материалов и проектирование продуктов с учётом их полного жизненного цикла. Переход к такой модели потребует не только технологических инноваций, но и изменения общественного сознания и потребительских привычек.",
                question: "Что необходимо для перехода к устойчивому развитию?",
                options: ["Только новые технологии", "Запрет на потребление", "Технологические инновации и изменение общественного сознания", "Возврат к прошлому"],
                correct: 2
            },
            {
                text: "Феномен «утечки мозгов» представляет серьёзную проблему для развивающихся стран. Когда наиболее талантливые специалисты уезжают в поисках лучших условий труда и более высоких зарплат, их родные страны теряют не только квалифицированные кадры, но и инвестиции в их образование. Однако некоторые эксперты утверждают, что эмиграция может иметь и положительные эффекты: специалисты приобретают ценный опыт, создают международные связи и иногда возвращаются, принося новые знания и технологии.",
                question: "Какова позиция автора относительно «утечки мозгов»?",
                options: ["Это однозначно негативное явление", "Явление имеет как отрицательные, так и потенциально положительные аспекты", "Эмиграция всегда полезна", "Страны должны запретить выезд специалистов"],
                correct: 1
            }
        ]
    },
    
    listening: {
        novice: [
            {
                text: "Здравствуйте! Меня зовут Иван. Я живу в Москве. Мне двадцать лет.",
                question: "Где живёт Иван?",
                options: ["В Петербурге", "В Москве", "В Киеве", "В Минске"],
                correct: 1
            },
            {
                text: "Сегодня хорошая погода. Светит солнце. Температура двадцать градусов.",
                question: "Какая сегодня погода?",
                options: ["Плохая", "Хорошая", "Холодная", "Дождливая"],
                correct: 1
            },
            {
                text: "Я иду в магазин. Мне нужно купить хлеб, молоко и яблоки.",
                question: "Что нужно купить?",
                options: ["Только хлеб", "Хлеб, молоко и яблоки", "Только молоко", "Мясо"],
                correct: 1
            },
            {
                text: "Моя семья небольшая. У меня есть мама, папа и младшая сестра.",
                question: "Сколько человек в семье?",
                options: ["Два", "Три", "Четыре", "Пять"],
                correct: 2
            },
            {
                text: "Я учусь в школе. Мои любимые предметы - математика и русский язык.",
                question: "Какие предметы любимые?",
                options: ["История и музыка", "Математика и русский", "Спорт и рисование", "Физика и химия"],
                correct: 1
            }
        ],
        intermediate: [
            {
                text: "Добрый день! Это объявление для пассажиров рейса номер три два семь в Владивосток. К сожалению, из-за технических неполадок вылет задерживается на два часа. Новое время отправления — пятнадцать тридцать вместо тринадцати тридцати. Приносим извинения за неудобства. Пассажиры могут получить компенсацию в виде бесплатного питания в зале ожидания. Следите за объявлениями.",
                question: "На сколько задерживается рейс?",
                options: ["На один час", "На два часа", "На три часа", "Рейс отменён"],
                correct: 1
            },
            {
                text: "Наш новый сосед Андрей оказался очень интересным человеком. Он работает переводчиком и часто ездит в командировки по всему миру. В прошлом месяце он был в Японии, а на следующей неделе летит в Германию на международную конференцию. Он свободно говорит на пяти языках и обещал помочь моему сыну с английским.",
                question: "Чем занимается Андрей?",
                options: ["Он учитель", "Он переводчик", "Он турист", "Он пилот"],
                correct: 1
            },
            {
                text: "Мы с друзьями решили организовать благотворительный концерт для сбора средств на новое оборудование для детской больницы. Уже согласились выступить три местные рок-группы и два известных певца. Билеты будут стоить пятьсот рублей, а весь доход мы передадим больнице. Концерт состоится в субботу в городском парке. Надеемся собрать не меньше ста тысяч рублей.",
                question: "Какова цель концерта?",
                options: ["Развлечение публики", "Сбор средств для больницы", "Продвижение рок-групп", "Празднование открытия парка"],
                correct: 1
            },
            {
                text: "Исследование московских психологов показало неожиданные результаты. Оказалось, что студенты, которые регулярно занимаются спортом, не только физически здоровее, но и имеют более высокую успеваемость. Физическая активность улучшает концентрацию внимания и способность запоминать информацию. Учёные рекомендуют заниматься минимум три раза в неделю по сорок пять минут.",
                question: "Что обнаружили психологи?",
                options: ["Спорт вреден для учёбы", "Спорт улучшает успеваемость и концентрацию", "Студенты мало занимаются спортом", "Нужно учиться больше"],
                correct: 1
            },
            {
                text: "Моя бабушка всю жизнь проработала учительницей русского языка и литературы. Она вышла на пенсию десять лет назад, но не может сидеть без дела. Теперь она ведёт бесплатные занятия для детей из малообеспеченных семей, помогает им с домашними заданиями и прививает любовь к чтению. Её ученики часто становятся победителями городских олимпиад.",
                question: "Чем занимается бабушка после выхода на пенсию?",
                options: ["Отдыхает дома", "Путешествует", "Ведёт бесплатные занятия для детей", "Работает в школе"],
                correct: 2
            },
            {
                text: "В нашем городе открылся новый культурный центр. Там есть библиотека с современным читальным залом, кинотеатр с четырьмя залами, художественная галерея и кафе. По выходным организуют мастер-классы для детей и взрослых: рисование, керамика, танцы и иностранные языки. Вход в библиотеку бесплатный, а на мероприятия нужно записываться заранее через сайт.",
                question: "Что нужно сделать, чтобы посетить мастер-класс?",
                options: ["Просто прийти", "Купить билет в кассе", "Записаться заранее через сайт", "Позвонить по телефону"],
                correct: 2
            }
        ]
    },
    
    writing: [
        {
            prompt: "Напишите письмо другу о своём недавнем путешествии. Опишите, где вы были, что видели и что вам особенно понравилось.",
            minChars: 150,
            maxChars: 2500
        },
        {
            prompt: "Опишите проблему загрязнения окружающей среды в вашем городе. Предложите возможные решения этой проблемы.",
            minChars: 200,
            maxChars: 2500
        },
        {
            prompt: "Объясните, почему изучение иностранных языков важно в современном мире. Приведите конкретные примеры.",
            minChars: 200,
            maxChars: 2500
        }
    ],
    
    speaking: [
        {
            prompt: "Расскажите о своей семье: кто в ней есть, чем занимаются члены семьи, какие у вас отношения.",
            prepTime: 30,
            responseTime: 180
        },
        {
            prompt: "Опишите своё типичное утро: когда вы встаёте, что делаете, как добираетесь до школы или работы.",
            prepTime: 30,
            responseTime: 180
        },
        {
            prompt: "Выскажите своё мнение: должны ли студенты носить школьную форму? Объясните свою позицию и приведите аргументы.",
            prepTime: 45,
            responseTime: 180
        }
    ]
};

// Mock test state
let mockCurrentSection = null;
let mockCurrentQuestionIndex = 0;
let mockSectionStartTime = 0;
let mockQuestionTier = 'novice'; // novice, intermediate, advanced
let mockCorrectAnswers = 0;
let mockTotalQuestions = 0;
let mockTestResults = {
    reading: { correct: 0, total: 0, tier: 'novice' },
    listening: { correct: 0, total: 0, tier: 'novice' },
    writing: [],
    speaking: []
};

// Initialize mock test
function initMockTest() {
    displayMockTestIntro();
}

// Display mock test intro
function displayMockTestIntro() {
    const container = document.getElementById('mocktest-container');
    container.innerHTML = `
        <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); max-width: 800px; margin: 0 auto;">
            <div style="background: #f0f7ff; padding: 20px; border-radius: 10px; margin: 20px 0;">
                <h3 style="color: #2196f3; margin-top: 0;">Test Structure:</h3>
                <ul style="line-height: 2;">
                    <li><strong>Reading:</strong> 10 multiple-choice questions (10-15 min)</li>
                    <li><strong>Writing:</strong> 3 prompts (20-25 min)</li>
                    <li><strong>Listening:</strong> 8 multiple-choice questions (10-15 min)</li>
                    <li><strong>Speaking:</strong> 3 recorded responses (15-20 min)</li>
                </ul>
                <p style="margin: 15px 0 0 0;"><strong>Total Time:</strong> ~60-75 minutes (simplified version)</p>
            </div>
            
            <div style="background: #fff3e0; padding: 20px; border-radius: 10px; margin: 20px 0;">
                <h3 style="color: #ff9800; margin-top: 0;">⚠️ Important Rules:</h3>
                <ul style="line-height: 2;">
                    <li>Complete sections in order (cannot skip ahead)</li>
                    <li><strong>Listening:</strong> Audio can be played ONLY 2 times</li>
                    <li><strong>Speaking:</strong> 3 minutes max per response</li>
                    <li><strong>Writing:</strong> Use Russian characters (virtual keyboard provided)</li>
                    <li>Test simulates adaptive difficulty</li>
                </ul>
            </div>
            
            <div style="background: #e8f5e9; padding: 20px; border-radius: 10px; margin: 20px 0;">
                <h3 style="color: #4caf50; margin-top: 0;">💡 Tips:</h3>
                <ul style="line-height: 2;">
                    <li>Read questions before passages/audio</li>
                    <li>Don't spend too long on one question</li>
                    <li>For Speaking: organize thoughts before recording</li>
                    <li>For Writing: demonstrate vocabulary range</li>
                    <li>This is practice - learn from mistakes!</li>
                </ul>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
                <button onclick="startMockTest()" class="go-button" style="font-size: 1.3em; padding: 20px 50px; background: #667eea;">
                    🚀 Start Mock Test
                </button>
            </div>
        </div>
    `;
}

// Start mock test
function startMockTest() {
    // Reset state
    mockCurrentSection = 'reading';
    mockCurrentQuestionIndex = 0;
    mockQuestionTier = 'novice';
    mockTestResults = {
        reading: { correct: 0, total: 0, tier: 'novice' },
        listening: { correct: 0, total: 0, tier: 'novice' },
        writing: [],
        speaking: []
    };
    
    startReadingSection();
}

// Start reading section
function startReadingSection() {
    mockCurrentSection = 'reading';
    mockCurrentQuestionIndex = 0;
    mockCorrectAnswers = 0;
    mockTotalQuestions = 0;
    mockSectionStartTime = Date.now();
    
    loadReadingQuestion();
}

// Load reading question
function loadReadingQuestion() {
    const questions = mockTestData.reading[mockQuestionTier];
    
    if (mockCurrentQuestionIndex >= Math.min(10, questions.length * 2)) {
        finishReadingSection();
        return;
    }
    
    const questionIndex = mockCurrentQuestionIndex % questions.length;
    const question = questions[questionIndex];
    
    const container = document.getElementById('mocktest-container');
    container.innerHTML = `
        <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); max-width: 900px; margin: 0 auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h3 style="color: #667eea;">📖 Reading Section</h3>
                <div style="font-size: 1.1em; color: #666;">
                    Question ${mockCurrentQuestionIndex + 1} of 10 | Level: ${mockQuestionTier}
                </div>
            </div>
            
            <div style="background: #f8f9ff; padding: 25px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #667eea;">
                <div style="font-size: 1.2em; line-height: 1.8; white-space: pre-wrap;">${question.text}</div>
            </div>
            
            <div style="margin: 30px 0;">
                <div style="font-size: 1.2em; font-weight: bold; margin-bottom: 15px; color: #333;">
                    ${question.question}
                </div>
                <div id="mock-reading-options"></div>
            </div>
        </div>
    `;
    
    // Add options with shuffling
    const optionsContainer = document.getElementById('mock-reading-options');

    // Shuffle options while keeping track of correct answer
    const shuffledOptions = question.options.map((option, index) => ({ option, index }));
    shuffledOptions.sort(() => Math.random() - 0.5);

    shuffledOptions.forEach(({ option, index }) => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.className = 'mock-option';
        btn.style.cssText = 'width: 100%; padding: 15px; margin: 8px 0; background: white; border: 2px solid #667eea; border-radius: 8px; font-size: 1.1em; cursor: pointer; text-align: left; transition: all 0.3s;';
        btn.onmouseover = () => btn.style.background = '#f0f0f0';
        btn.onmouseout = () => btn.style.background = 'white';
        btn.onclick = () => submitReadingAnswer(index, question.correct, shuffledOptions);
        optionsContainer.appendChild(btn);
    });
}

// Submit reading answer
function submitReadingAnswer(selected, correct, shuffledOptions) {
    mockTotalQuestions++;
    const isCorrect = selected === correct;
    if (isCorrect) mockCorrectAnswers++;
    
    // Adaptive difficulty
    if (mockTotalQuestions > 0 && mockTotalQuestions % 3 === 0) {
        const accuracy = mockCorrectAnswers / mockTotalQuestions;
        if (accuracy >= 0.8 && mockQuestionTier === 'novice') {
            mockQuestionTier = 'intermediate';
        } else if (accuracy >= 0.8 && mockQuestionTier === 'intermediate') {
            mockQuestionTier = 'advanced';
        } else if (accuracy < 0.5 && mockQuestionTier === 'intermediate') {
            mockQuestionTier = 'novice';
        }
    }
    
    mockCurrentQuestionIndex++;
    
    setTimeout(() => {
        loadReadingQuestion();
    }, 500);
}

// Finish reading section
function finishReadingSection() {
    mockTestResults.reading = {
        correct: mockCorrectAnswers,
        total: mockTotalQuestions,
        tier: mockQuestionTier,
        time: Math.round((Date.now() - mockSectionStartTime) / 1000)
    };
    
    startWritingSection();
}

// Start writing section
function startWritingSection() {
    mockCurrentSection = 'writing';
    mockCurrentQuestionIndex = 0;
    mockSectionStartTime = Date.now();
    
    mockLoadWritingPrompt();
}

// Load writing prompt
function mockLoadWritingPrompt() {
    if (mockCurrentQuestionIndex >= mockTestData.writing.length) {
        finishWritingSection();
        return;
    }
    
    const prompt = mockTestData.writing[mockCurrentQuestionIndex];
    
    const container = document.getElementById('mocktest-container');
    container.innerHTML = `
        <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); max-width: 900px; margin: 0 auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h3 style="color: #667eea;">✍️ Writing Section</h3>
                <div style="font-size: 1.1em; color: #666;">
                    Prompt ${mockCurrentQuestionIndex + 1} of ${mockTestData.writing.length}
                </div>
            </div>
            
            <div style="background: #fff3e0; padding: 20px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #ff9800;">
                <div style="font-size: 1.2em; line-height: 1.6;">${prompt.prompt}</div>
                <div style="margin-top: 10px; color: #666; font-size: 0.9em;">
                    Minimum: ${prompt.minChars} characters | Maximum: ${prompt.maxChars} characters
                </div>
            </div>
            
            <textarea id="mock-writing-response" placeholder="Type your response in Russian here..."
                style="width: 100%; min-height: 300px; padding: 15px; border: 2px solid #667eea; border-radius: 10px; font-size: 1.1em; font-family: Arial, sans-serif; resize: vertical;"></textarea>

            <div style="margin: 15px 0; color: #666;">
                Characters: <span id="mock-char-count">0</span> / ${prompt.maxChars}
            </div>
            
            <div style="text-align: center; margin-top: 20px;">
                <button onclick="mockSubmitWritingResponse()" class="go-button" style="font-size: 1.2em; padding: 15px 40px;">
                    Submit Response →
                </button>
            </div>
        </div>
    `;
    
    // Character counter
    document.getElementById('mock-writing-response').addEventListener('input', function() {
        document.getElementById('mock-char-count').textContent = this.value.length;
    });
}

// Submit writing response
function mockSubmitWritingResponse() {
    const response = document.getElementById('mock-writing-response').value;
    const prompt = mockTestData.writing[mockCurrentQuestionIndex];
    
    if (response.length < prompt.minChars) {
        alert(`Response too short! Minimum ${prompt.minChars} characters required.`);
        return;
    }
    
    mockTestResults.writing.push({
        prompt: prompt.prompt,
        response: response,
        length: response.length
    });
    
    mockCurrentQuestionIndex++;
    mockLoadWritingPrompt();
}

// Finish writing section
function finishWritingSection() {
    const writingTime = Math.round((Date.now() - mockSectionStartTime) / 1000);
    mockTestResults.writing.forEach(item => item.time = writingTime);
    
    startListeningSection();
}

// Start listening section
function startListeningSection() {
    mockCurrentSection = 'listening';
    mockCurrentQuestionIndex = 0;
    mockCorrectAnswers = 0;
    mockTotalQuestions = 0;
    mockQuestionTier = 'novice';
    mockSectionStartTime = Date.now();
    
    loadListeningQuestion();
}

// Load listening question
function loadListeningQuestion() {
    const questions = mockTestData.listening[mockQuestionTier];
    
    if (mockCurrentQuestionIndex >= Math.min(8, questions.length * 2)) {
        finishListeningSection();
        return;
    }
    
    const questionIndex = mockCurrentQuestionIndex % questions.length;
    const question = questions[questionIndex];
    
    const container = document.getElementById('mocktest-container');
    container.innerHTML = `
        <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); max-width: 900px; margin: 0 auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h3 style="color: #667eea;">🎧 Listening Section</h3>
                <div style="font-size: 1.1em; color: #666;">
                    Question ${mockCurrentQuestionIndex + 1} of 8 | Level: ${mockQuestionTier}
                </div>
            </div>
            
            <div style="background: #e3f2fd; padding: 25px; border-radius: 10px; margin: 20px 0; text-align: center;">
                <p style="font-size: 1.1em; margin-bottom: 15px;">Click to play audio (2 plays maximum)</p>
                <button id="mock-play-listening-btn" onclick="mockPlayListeningAudio('${question.text}')" class="go-button" style="font-size: 1.2em; padding: 15px 30px; background: #4caf50;">
                    🔊 Play Audio (<span id="mock-plays-remaining">2</span> plays left)
                </button>
            </div>

            <div style="margin: 30px 0;">
                <div style="font-size: 1.2em; font-weight: bold; margin-bottom: 15px; color: #333;">
                    ${question.question}
                </div>
                <div id="mock-listening-options"></div>
            </div>
        </div>
    `;
    
    // Add options with shuffling
    const optionsContainer = document.getElementById('mock-listening-options');

    // Shuffle options while keeping track of correct answer
    const shuffledOptions = question.options.map((option, index) => ({ option, index }));
    shuffledOptions.sort(() => Math.random() - 0.5);

    shuffledOptions.forEach(({ option, index }) => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.className = 'mock-option';
        btn.style.cssText = 'width: 100%; padding: 15px; margin: 8px 0; background: white; border: 2px solid #667eea; border-radius: 8px; font-size: 1.1em; cursor: pointer; text-align: left; transition: all 0.3s;';
        btn.onmouseover = () => btn.style.background = '#f0f0f0';
        btn.onmouseout = () => btn.style.background = 'white';
        btn.onclick = () => mockSubmitListeningAnswer(index, question.correct, shuffledOptions);
        optionsContainer.appendChild(btn);
    });
}

// Play listening audio
let mockPlaysRemaining = 2;
let mockRussianVoice = null;

// Load Russian voice on initialization
speechSynthesis.onvoiceschanged = () => {
    const voices = speechSynthesis.getVoices();
    // Prefer Microsoft Dmitry Online (Natural) - male Russian voice
    mockRussianVoice = voices.find(v => v.name.includes('Dmitry') && v.lang.includes('ru')) ||
                       voices.find(v => v.lang.includes('ru-RU') && v.name.toLowerCase().includes('male')) ||
                       voices.find(v => v.lang.includes('ru'));
};

async function mockPlayListeningAudio(text) {
    if (mockPlaysRemaining <= 0) return;

    const btnEl = document.getElementById('mock-play-listening-btn');
    if (btnEl) {
        btnEl.textContent = '🔊 Generating audio...';
        btnEl.disabled = true;
        btnEl.style.opacity = '0.7';
    }

    // Clean text
    let cleanText = text
        .replace(/—/g, ' ')
        .replace(/\n/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    console.log('Mock Test: Text length:', cleanText.length, 'characters');

    try {
        // Tier 1: Try Inworld TTS (Primary - Cheapest)
        console.log('🔄 Mock Test: Trying Tier 1 (Inworld TTS)...');
        if (btnEl) {
            btnEl.textContent = '🔊 Using Inworld TTS...';
        }

        const response = await fetch(
            'https://api.inworld.ai/tts/v1/voice:stream',
            {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${INWORLD_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text: cleanText,
                    voiceId: INWORLD_VOICE_ID,
                    modelId: INWORLD_MODEL,
                    audio_config: {
                        audio_encoding: "MP3",
                        sample_rate_hertz: 48000
                    }
                })
            }
        );

        if (!response.ok) {
            throw new Error(`Inworld API error: ${response.status} ${response.statusText}`);
        }

        console.log('✅ Mock Test: Audio received from Inworld TTS');

        // Parse newline-delimited JSON response
        const responseText = await response.text();
        const lines = responseText.trim().split('\n').filter(line => line.trim());

        // Collect all audio chunks
        const audioChunks = [];
        for (let i = 0; i < lines.length; i++) {
            try {
                const chunk = JSON.parse(lines[i]);
                if (chunk.result && chunk.result.audioContent) {
                    audioChunks.push(chunk.result.audioContent);
                }
            } catch (parseError) {
                console.warn(`Mock Test: Failed to parse chunk ${i + 1}:`, parseError);
            }
        }

        if (audioChunks.length === 0) {
            throw new Error('No audio content received from Inworld');
        }

        // Combine and decode base64 audio
        const combinedBase64 = audioChunks.join('');
        const binaryString = atob(combinedBase64);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }

        const audioBlob = new Blob([bytes], { type: 'audio/mp3' });
        const audioUrl = URL.createObjectURL(audioBlob);

        if (btnEl) {
            btnEl.textContent = '🔊 Loading audio...';
        }

        const audio = new Audio(audioUrl);

        // Wait for audio to be fully loaded before playing
        await new Promise((resolve, reject) => {
            audio.onloadeddata = () => {
                console.log('✅ Mock Test: Audio data loaded');
            };

            audio.oncanplaythrough = () => {
                console.log('✅ Mock Test: Audio fully buffered and ready');
                resolve();
            };

            audio.onerror = (e) => {
                console.error('❌ Mock Test: Audio loading error:', e);
                reject(e);
            };

            audio.load();
        });

        // Add extra 1000ms delay to ensure complete buffering
        console.log('⏳ Mock Test: Waiting 1000ms for complete buffering...');
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Now play the audio
        if (btnEl) {
            btnEl.textContent = '🔊 Playing...';
        }
        console.log('▶️ Mock Test: Starting playback now...');

        audio.onplay = () => {
            console.log('✅ Mock Test: Audio playback started');
        };

        audio.onended = () => {
            console.log('✅ Mock Test: Audio playback completed');
            URL.revokeObjectURL(audioUrl);
            finishMockPlayback();
        };

        audio.onerror = (e) => {
            console.error('❌ Mock Test: Audio playback error:', e);
            alert('Error playing audio. Please try again.');
            URL.revokeObjectURL(audioUrl);
            finishMockPlayback();
        };

        await audio.play();

    } catch (error) {
        console.error('❌ Mock Test: Tier 1 (Inworld) failed:', error);
        console.log('🔄 Mock Test: Trying Tier 2 (Google Cloud TTS)...');

        // Tier 2: Try Google Cloud TTS
        if (btnEl) {
            btnEl.textContent = '🔊 Using Google Cloud voice...';
        }

        try {
            await playMockGoogleCloudTTS(cleanText);
            finishMockPlayback();
        } catch (googleError) {
            console.error('❌ Mock Test: Tier 2 (Google Cloud) failed:', googleError);
            console.log('🔄 Mock Test: Trying Tier 3 (Browser TTS)...');

            // Tier 3: Fallback to browser TTS
            if (btnEl) {
                btnEl.textContent = '🔊 Using browser voice...';
            }

            try {
                await playMockFallbackTTS(cleanText);
                finishMockPlayback();
            } catch (browserError) {
                console.error('❌ Mock Test: All 3 TTS tiers failed:', browserError);
                alert('Audio generation failed. Please read the text on screen.');
                finishMockPlayback();
            }
        }
    }

    function finishMockPlayback() {
        mockPlaysRemaining--;
        const playsEl = document.getElementById('mock-plays-remaining');
        if (playsEl) {
            playsEl.textContent = mockPlaysRemaining;
        }

        if (mockPlaysRemaining === 0) {
            if (btnEl) {
                btnEl.textContent = '🔊 No plays left';
                btnEl.disabled = true;
                btnEl.style.opacity = '0.5';
            }
        } else {
            if (btnEl) {
                btnEl.innerHTML = `🔊 Play Audio (<span id="mock-plays-remaining">${mockPlaysRemaining}</span> plays left)`;
                btnEl.disabled = false;
                btnEl.style.opacity = '1';
            }
        }
    }
}

// Google Cloud TTS fallback for Mock Test (Tier 2)
async function playMockGoogleCloudTTS(text) {
    console.log('🔄 Mock Test: Trying Google Cloud TTS...');

    try {
        const response = await fetch(
            `https://texttospeech.googleapis.com/v1/text:synthesize?key=${GOOGLE_CLOUD_API_KEY}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    input: { text: text },
                    voice: {
                        languageCode: 'ru-RU',
                        name: 'ru-RU-Wavenet-B', // Male voice, WaveNet quality (~$16 per 1M chars)
                        ssmlGender: 'MALE'
                    },
                    audioConfig: {
                        audioEncoding: 'MP3',
                        speakingRate: 0.85,
                        pitch: 0.0
                    }
                })
            }
        );

        if (!response.ok) {
            throw new Error(`Google Cloud TTS error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('✅ Mock Test: Audio received from Google Cloud TTS');

        // Decode base64 audio content
        const audioContent = data.audioContent;
        const audioBlob = new Blob(
            [Uint8Array.from(atob(audioContent), c => c.charCodeAt(0))],
            { type: 'audio/mp3' }
        );
        const audioUrl = URL.createObjectURL(audioBlob);

        // Create and play audio
        const audio = new Audio(audioUrl);

        // Wait for audio to be fully loaded
        await new Promise((resolve, reject) => {
            audio.oncanplaythrough = () => {
                console.log('✅ Mock Test: Google Cloud audio fully buffered');
                resolve();
            };

            audio.onerror = (e) => {
                console.error('❌ Mock Test: Google Cloud audio loading error:', e);
                reject(e);
            };

            audio.load();
        });

        // Add buffer delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Play audio
        await audio.play();

        // Wait for playback to complete
        await new Promise((resolve) => {
            audio.onended = () => {
                console.log('✅ Mock Test: Google Cloud TTS playback completed');
                URL.revokeObjectURL(audioUrl);
                resolve();
            };
        });

    } catch (error) {
        console.error('❌ Mock Test: Google Cloud TTS error:', error);
        throw error; // Re-throw to trigger next fallback
    }
}

// Fallback to browser Text-to-Speech for Mock Test (Tier 3)
function playMockFallbackTTS(text) {
    return new Promise((resolve, reject) => {
        if (!speechSynthesis) {
            reject(new Error('Browser TTS not supported'));
            return;
        }

        // Get Russian voice (prefer GoogleTranslate for Chrome/Voice Out)
        const voices = speechSynthesis.getVoices();
        let russianVoice = voices.find(v => v.name.includes('GoogleTranslate') && v.lang.includes('ru')) ||
                           voices.find(v => v.name.includes('Dmitry') && v.lang.includes('ru')) ||
                           voices.find(v => v.name.includes('Google') && v.lang.includes('ru')) ||
                           voices.find(v => v.lang.includes('ru-RU') && v.name.toLowerCase().includes('male')) ||
                           voices.find(v => v.lang.includes('ru-RU')) ||
                           voices.find(v => v.lang.includes('ru'));

        console.log('🔊 Mock fallback voice:', russianVoice ? russianVoice.name : 'default');

        // Split into chunks
        const maxChunkSize = 180;
        let chunks = [];

        if (text.length > maxChunkSize) {
            const sentences = text.split(/[.!?]\s+/);
            let currentChunk = '';

            sentences.forEach((sentence, idx) => {
                if (currentChunk.length + sentence.length < maxChunkSize) {
                    currentChunk += sentence + (idx < sentences.length - 1 ? '. ' : '');
                } else {
                    if (currentChunk) chunks.push(currentChunk.trim());
                    currentChunk = sentence + (idx < sentences.length - 1 ? '. ' : '');
                }
            });
            if (currentChunk) chunks.push(currentChunk.trim());
        } else {
            chunks = [text];
        }

        let chunkIndex = 0;

        function speakNextChunk() {
            if (chunkIndex >= chunks.length) {
                resolve();
                return;
            }

            const chunk = chunks[chunkIndex];
            chunkIndex++;

            const utterance = new SpeechSynthesisUtterance(chunk);
            utterance.lang = 'ru-RU';
            utterance.rate = 0.85;

            if (russianVoice) {
                utterance.voice = russianVoice;
            }

            utterance.onend = () => {
                if (chunkIndex < chunks.length) {
                    setTimeout(speakNextChunk, 200);
                } else {
                    resolve();
                }
            };

            utterance.onerror = (event) => {
                reject(new Error('Mock fallback TTS error: ' + event.error));
            };

            speechSynthesis.speak(utterance);
        }

        speakNextChunk();
    });
}

// Submit listening answer
function mockSubmitListeningAnswer(selected, correct, shuffledOptions) {
    mockTotalQuestions++;
    const isCorrect = selected === correct;
    if (isCorrect) mockCorrectAnswers++;
    
    // Reset plays for next question
    mockPlaysRemaining = 2;
    
    // Adaptive difficulty
    if (mockTotalQuestions > 0 && mockTotalQuestions % 3 === 0) {
        const accuracy = mockCorrectAnswers / mockTotalQuestions;
        if (accuracy >= 0.75 && mockQuestionTier === 'novice') {
            mockQuestionTier = 'intermediate';
        }
    }
    
    mockCurrentQuestionIndex++;
    
    setTimeout(() => {
        loadListeningQuestion();
    }, 500);
}

// Finish listening section
function finishListeningSection() {
    mockTestResults.listening = {
        correct: mockCorrectAnswers,
        total: mockTotalQuestions,
        tier: mockQuestionTier,
        time: Math.round((Date.now() - mockSectionStartTime) / 1000)
    };
    
    startSpeakingSection();
}

// Start speaking section
function startSpeakingSection() {
    mockCurrentSection = 'speaking';
    mockCurrentQuestionIndex = 0;
    mockSectionStartTime = Date.now();
    
    loadSpeakingPrompt();
}

// Load speaking prompt
function loadSpeakingPrompt() {
    if (mockCurrentQuestionIndex >= mockTestData.speaking.length) {
        finishSpeakingSection();
        return;
    }
    
    const prompt = mockTestData.speaking[mockCurrentQuestionIndex];
    
    const container = document.getElementById('mocktest-container');
    container.innerHTML = `
        <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); max-width: 900px; margin: 0 auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h3 style="color: #667eea;">🎤 Speaking Section</h3>
                <div style="font-size: 1.1em; color: #666;">
                    Prompt ${mockCurrentQuestionIndex + 1} of ${mockTestData.speaking.length}
                </div>
            </div>
            
            <div style="background: #e8f5e9; padding: 20px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #4caf50;">
                <div style="font-size: 1.2em; line-height: 1.6;">${prompt.prompt}</div>
                <div style="margin-top: 10px; color: #666; font-size: 0.9em;">
                    Maximum time: ${prompt.responseTime / 60} minutes
                </div>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
                <div style="font-size: 1.5em; font-weight: bold; color: #667eea; margin-bottom: 20px;">
                    <span id="mock-speaking-timer">0:00</span>
                </div>
                
                <button id="mock-record-btn" onclick="startSpeakingRecording()" class="go-button" style="font-size: 1.2em; padding: 20px 40px; background: #f44336;">
                    ⏺️ Start Recording
                </button>

                <button id="mock-stop-btn" onclick="stopSpeakingRecording()" class="go-button" style="display: none; font-size: 1.2em; padding: 20px 40px; background: #ff9800;">
                    ⏹️ Stop Recording
                </button>

                <button id="mock-next-speaking-btn" onclick="submitSpeakingResponse()" class="go-button" style="display: none; font-size: 1.2em; padding: 20px 40px; margin-top: 20px;">
                    Next Prompt →
                </button>
            </div>

            <div id="mock-recording-status" style="text-align: center; margin-top: 20px; font-size: 1.1em; color: #666;"></div>
        </div>
    `;
}

// Speaking recording state
let mockSpeakingMediaRecorder = null;
let mockSpeakingAudioChunks = [];
let mockSpeakingTimer = null;
let mockSpeakingTimeElapsed = 0;
let mockCurrentAudioBlob = null;

// Start speaking recording
async function startSpeakingRecording() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mockSpeakingMediaRecorder = new MediaRecorder(stream);
        mockSpeakingAudioChunks = [];
        
        mockSpeakingMediaRecorder.ondataavailable = (event) => {
            mockSpeakingAudioChunks.push(event.data);
        };
        
        mockSpeakingMediaRecorder.onstop = () => {
            const audioBlob = new Blob(mockSpeakingAudioChunks, { type: 'audio/webm' });
            mockCurrentAudioBlob = audioBlob;
            mockTestResults.speaking.push({
                prompt: mockTestData.speaking[mockCurrentQuestionIndex].prompt,
                recordingSize: audioBlob.size,
                duration: mockSpeakingTimeElapsed,
                audioBlob: audioBlob
            });
        };
        
        mockSpeakingMediaRecorder.start();
        
        // Start timer
        mockSpeakingTimeElapsed = 0;
        mockSpeakingTimer = setInterval(() => {
            mockSpeakingTimeElapsed++;
            const minutes = Math.floor(mockSpeakingTimeElapsed / 60);
            const seconds = mockSpeakingTimeElapsed % 60;
            const timerEl = document.getElementById('mock-speaking-timer');
            if (timerEl) {
                timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            }

            // Auto-stop at 3 minutes
            if (mockSpeakingTimeElapsed >= 180) {
                stopSpeakingRecording();
            }
        }, 1000);
        
        // Update UI
        document.getElementById('mock-record-btn').style.display = 'none';
        document.getElementById('mock-stop-btn').style.display = 'inline-block';
        document.getElementById('mock-recording-status').innerHTML = '🔴 Recording...';
        
    } catch (err) {
        alert('Microphone access required for speaking section. Error: ' + err.message);
    }
}

// Stop speaking recording
function stopSpeakingRecording() {
    if (mockSpeakingMediaRecorder && mockSpeakingMediaRecorder.state !== 'inactive') {
        mockSpeakingMediaRecorder.stop();
        mockSpeakingMediaRecorder.stream.getTracks().forEach(track => track.stop());
    }

    clearInterval(mockSpeakingTimer);

    // Update UI
    document.getElementById('mock-stop-btn').style.display = 'none';
    document.getElementById('mock-recording-status').innerHTML = '✅ Recording complete';

    // Add playback button (will appear after blob is created)
    setTimeout(() => {
        const statusDiv = document.getElementById('mock-recording-status');
        if (statusDiv && mockCurrentAudioBlob) {
            const audioURL = URL.createObjectURL(mockCurrentAudioBlob);
            statusDiv.innerHTML = `
                <div style="margin: 20px 0;">
                    <audio controls src="${audioURL}" style="width: 100%; max-width: 500px; margin: 15px 0;"></audio>
                </div>
                <div style="color: #4caf50; font-size: 1.1em; margin-bottom: 15px;">✅ Recording complete</div>
            `;
            document.getElementById('mock-next-speaking-btn').style.display = 'inline-block';
        }
    }, 100);
}

// Play mock speaking recording
function playMockSpeakingRecording() {
    if (mockCurrentAudioBlob) {
        const audioURL = URL.createObjectURL(mockCurrentAudioBlob);
        const audio = new Audio(audioURL);
        audio.play();
    }
}

// Submit speaking response
function submitSpeakingResponse() {
    mockCurrentQuestionIndex++;
    loadSpeakingPrompt();
}

// Finish speaking section
function finishSpeakingSection() {
    const speakingTime = Math.round((Date.now() - mockSectionStartTime) / 1000);
    
    showMockTestResults();
}

// Show mock test results
function showMockTestResults() {
    const totalTime = Math.round((Date.now() - mockSectionStartTime) / 1000);
    
    // Calculate estimated levels
    const readingAccuracy = mockTestResults.reading.total > 0 ? 
        (mockTestResults.reading.correct / mockTestResults.reading.total) * 100 : 0;
    const listeningAccuracy = mockTestResults.listening.total > 0 ? 
        (mockTestResults.listening.correct / mockTestResults.listening.total) * 100 : 0;
    
    const readingLevel = readingAccuracy >= 90 ? 6 : readingAccuracy >= 75 ? 5 : readingAccuracy >= 60 ? 4 : 3;
    const listeningLevel = listeningAccuracy >= 90 ? 6 : listeningAccuracy >= 75 ? 5 : listeningAccuracy >= 60 ? 4 : 3;
    
    const container = document.getElementById('mocktest-container');
    container.innerHTML = `
        <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); max-width: 900px; margin: 0 auto;">
            <h2 style="color: #667eea; text-align: center; margin-bottom: 30px;">🎉 Mock Test Complete!</h2>
            
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 15px; text-align: center; margin-bottom: 30px;">
                <h3 style="margin: 0 0 15px 0;">Overall Performance</h3>
                <div style="font-size: 3em; font-weight: bold;">${Math.round((readingAccuracy + listeningAccuracy) / 2)}%</div>
                <div style="font-size: 1.2em; margin-top: 10px;">Estimated Level: ${Math.round((readingLevel + listeningLevel) / 2)}/9</div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
                <div style="background: #e8f5e9; padding: 20px; border-radius: 10px; border-left: 4px solid #4caf50;">
                    <h3 style="color: #4caf50; margin-top: 0;">📖 Reading</h3>
                    <p style="font-size: 2em; font-weight: bold; margin: 10px 0;">${mockTestResults.reading.correct}/${mockTestResults.reading.total}</p>
                    <p style="margin: 5px 0;">Accuracy: ${readingAccuracy.toFixed(0)}%</p>
                    <p style="margin: 5px 0;">Level: ${readingLevel}/9</p>
                    <p style="margin: 5px 0; color: #666;">Time: ${Math.floor(mockTestResults.reading.time / 60)}:${(mockTestResults.reading.time % 60).toString().padStart(2, '0')}</p>
                </div>
                
                <div style="background: #e3f2fd; padding: 20px; border-radius: 10px; border-left: 4px solid #2196f3;">
                    <h3 style="color: #2196f3; margin-top: 0;">🎧 Listening</h3>
                    <p style="font-size: 2em; font-weight: bold; margin: 10px 0;">${mockTestResults.listening.correct}/${mockTestResults.listening.total}</p>
                    <p style="margin: 5px 0;">Accuracy: ${listeningAccuracy.toFixed(0)}%</p>
                    <p style="margin: 5px 0;">Level: ${listeningLevel}/9</p>
                    <p style="margin: 5px 0; color: #666;">Time: ${Math.floor(mockTestResults.listening.time / 60)}:${(mockTestResults.listening.time % 60).toString().padStart(2, '0')}</p>
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
                <div style="background: #fff3e0; padding: 20px; border-radius: 10px; border-left: 4px solid #ff9800;">
                    <h3 style="color: #ff9800; margin-top: 0;">✍️ Writing</h3>
                    <p style="margin: 5px 0;">${mockTestResults.writing.length} prompts completed</p>
                    <p style="margin: 5px 0; color: #666; font-size: 0.9em;">Responses require human rating</p>
                </div>
                
                <div style="background: #fce4ec; padding: 20px; border-radius: 10px; border-left: 4px solid #e91e63;">
                    <h3 style="color: #e91e63; margin-top: 0;">🎤 Speaking</h3>
                    <p style="margin: 5px 0;">${mockTestResults.speaking.length} prompts completed</p>
                    <p style="margin: 5px 0; color: #666; font-size: 0.9em;">Recordings require human rating</p>
                </div>
            </div>
            
            <div style="background: #f0f7ff; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                <h3 style="color: #2196f3; margin-top: 0;">📊 Score Interpretation:</h3>
                <ul style="line-height: 2;">
                    <li><strong>Level 1-2:</strong> Novice - Basic words and phrases</li>
                    <li><strong>Level 3-4:</strong> Novice High/Intermediate Low - Simple sentences</li>
                    <li><strong>Level 5-6:</strong> Intermediate Mid/High - Connected language <em>(Seal of Biliteracy threshold)</em></li>
                    <li><strong>Level 7-8:</strong> Advanced - Paragraph-level discourse</li>
                    <li><strong>Level 9:</strong> Advanced High - Extended discourse</li>
                </ul>
            </div>
            
            <div style="text-align: center;">
                <button onclick="emailMockTestResults()" class="go-button" style="margin-right: 10px; font-size: 1.1em; padding: 15px 30px; background: #667eea;">
                    📧 Email Results to Parent
                </button>
                <button onclick="displayMockTestIntro()" class="go-button" style="margin-right: 10px; font-size: 1.1em; padding: 15px 30px;">
                    📝 Review Test Info
                </button>
                <button onclick="startMockTest()" class="go-button" style="background: #4caf50; font-size: 1.1em; padding: 15px 30px;">
                    🔄 Retake Test
                </button>
            </div>
            <div id="email-status" style="text-align: center; margin-top: 20px; font-size: 1.1em;"></div>
        </div>
    `;
}

// Email mock test results to parent
async function emailMockTestResults() {
    const statusDiv = document.getElementById('email-status');

    try {
        // Check if email function exists
        if (typeof sendMockTestResults !== 'function') {
            statusDiv.innerHTML = `
                <div style="background: #ffebee; padding: 20px; border-radius: 10px; border-left: 4px solid #f44336;">
                    <div style="color: #666;">
                        Email feature not loaded. Please refresh the page.
                    </div>
                </div>
            `;
            return;
        }

        // Show loading message
        statusDiv.innerHTML = `
            <div style="background: #e3f2fd; padding: 20px; border-radius: 10px; border-left: 4px solid #2196f3;">
                <div style="color: #666;">
                    ⏳ Uploading audio files and sending email... This may take a minute.
                </div>
            </div>
        `;

        // Send email with results
        await sendMockTestResults(mockTestResults);

        // Show success message
        statusDiv.innerHTML = `
            <div style="background: #e8f5e9; padding: 20px; border-radius: 10px; border-left: 4px solid #4caf50;">
                <div style="color: #2e7d32; font-weight: bold;">
                    ✅ Email sent successfully!
                </div>
                <div style="color: #666; margin-top: 10px; font-size: 0.95em;">
                    Test results with all Writing texts and Speaking audio links have been sent to parent.
                </div>
            </div>
        `;

    } catch (error) {
        console.error('Error sending email:', error);
        statusDiv.innerHTML = `
            <div style="background: #ffebee; padding: 20px; border-radius: 10px; border-left: 4px solid #f44336;">
                <div style="color: #c62828; font-weight: bold;">
                    ❌ Failed to send email
                </div>
                <div style="color: #666; margin-top: 10px; font-size: 0.9em;">
                    Error: ${error.message}
                </div>
            </div>
        `;
    }
}
