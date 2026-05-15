// grammar.js - Grammar quiz engine

const grammarQuestions = [
    {
        question: "Я ___ в школу каждый день",
        options: ["идёт", "иду", "идут", "идёшь"],
        correct: 1,
        explanation: "First person singular: я иду"
    },
    {
        question: "Это ___ книга",
        options: ["мой", "моя", "моё", "мои"],
        correct: 1,
        explanation: "Feminine singular: моя книга"
    },
    {
        question: "У ___ есть собака",
        options: ["я", "меня", "мне", "мной"],
        correct: 1,
        explanation: "Genitive case after 'у': у меня"
    },
    {
        question: "Мы ___ в магазине",
        options: ["был", "была", "были", "было"],
        correct: 2,
        explanation: "Plural past tense: мы были"
    },
    {
        question: "Он живёт ___ Москве",
        options: ["в", "на", "к", "у"],
        correct: 0,
        explanation: "Prepositional case with cities: в Москве"
    },
    {
        question: "Я хочу ___ книгу",
        options: ["читаю", "читать", "читает", "читал"],
        correct: 1,
        explanation: "Infinitive after хотеть: хочу читать"
    },
    {
        question: "Она пишет ___ ручкой",
        options: ["синей", "синяя", "синюю", "синим"],
        correct: 0,
        explanation: "Instrumental case: синей ручкой"
    },
    {
        question: "Мы ___ домой вчера",
        options: ["идём", "пошли", "пойдём", "идти"],
        correct: 1,
        explanation: "Past tense with 'вчера': пошли"
    },
    {
        question: "У моей ___ красивые глаза",
        options: ["сестра", "сестры", "сестре", "сестру"],
        correct: 1,
        explanation: "Genitive case: моей сестры"
    },
    {
        question: "Я ___ русский язык",
        options: ["учу", "изучаю", "учусь", "учил"],
        correct: 1,
        explanation: "Present tense: изучаю язык"
    },
    {
        question: "Завтра ___ хорошая погода",
        options: ["был", "была", "будет", "были"],
        correct: 2,
        explanation: "Future tense singular: будет погода"
    },
    {
        question: "Я дал книгу ___",
        options: ["брат", "брата", "брату", "братом"],
        correct: 2,
        explanation: "Dative case: дал брату"
    },
    {
        question: "Мы ___ в парке каждый день",
        options: ["гуляем", "гулять", "гулял", "гуляет"],
        correct: 0,
        explanation: "Present tense plural: мы гуляем"
    },
    {
        question: "Это ___ дом",
        options: ["наш", "наша", "наше", "наши"],
        correct: 0,
        explanation: "Masculine possessive: наш дом"
    },
    {
        question: "Я говорю ___ учителем",
        options: ["с", "к", "у", "от"],
        correct: 0,
        explanation: "Instrumental case: с учителем"
    },
    {
        question: "Они ___ завтра",
        options: ["приехал", "приехали", "приедут", "приехать"],
        correct: 2,
        explanation: "Future tense plural: приедут"
    },
    {
        question: "Я вижу ___ птицу",
        options: ["красивый", "красивая", "красивую", "красивое"],
        correct: 2,
        explanation: "Accusative feminine: красивую птицу"
    },
    {
        question: "Мой брат ___ чем я",
        options: ["старше", "старый", "старее", "стар"],
        correct: 0,
        explanation: "Comparative: старше чем"
    },
    {
        question: "Я хочу пить ___",
        options: ["вода", "воды", "воду", "водой"],
        correct: 2,
        explanation: "Accusative: пить воду"
    },
    {
        question: "Мы будем ___ завтра",
        options: ["работаем", "работать", "работали", "работал"],
        correct: 1,
        explanation: "Future compound: будем работать"
    },
    {
        question: "Она ___ врачом",
        options: ["работает", "работают", "работаю", "работать"],
        correct: 0,
        explanation: "Third person singular: она работает"
    },
    {
        question: "Я звоню ___",
        options: ["мама", "маме", "маму", "мамы"],
        correct: 1,
        explanation: "Dative case: звоню маме"
    },
    {
        question: "Этот фильм ___ интересный",
        options: ["очень", "самый", "более", "слишком"],
        correct: 0,
        explanation: "Adverb: очень интересный"
    },
    {
        question: "Мы идём ___ театр",
        options: ["в", "на", "к", "из"],
        correct: 0,
        explanation: "Direction to enclosed space: в театр"
    },
    {
        question: "Он уже ___ о поездке и ушёл",
        options: ["рассказал", "рассказывал", "расскажет", "рассказывает"],
        correct: 0,
        explanation: "Past perfective for completed action: рассказал (he already told and left)"
    },
    {
        question: "Я встретил ___ друга",
        options: ["старый", "старого", "старому", "старым"],
        correct: 1,
        explanation: "Accusative animate: старого друга"
    },
    {
        question: "Она ___ музыку",
        options: ["слушает", "слушают", "слушаю", "слушать"],
        correct: 0,
        explanation: "Third person singular: она слушает"
    },
    {
        question: "Мы ездили ___ бабушке",
        options: ["к", "у", "от", "с"],
        correct: 0,
        explanation: "Direction to person: к бабушке"
    },
    {
        question: "Я купил ___ яблок",
        options: ["пять", "пяти", "пятью", "пятого"],
        correct: 0,
        explanation: "Number with genitive plural: пять яблок"
    },
    {
        question: "Это ___ комната",
        options: ["твой", "твоя", "твоё", "твои"],
        correct: 1,
        explanation: "Feminine possessive: твоя комната"
    },
    {
        question: "Я интересуюсь ___",
        options: ["спорт", "спорта", "спортом", "спорту"],
        correct: 2,
        explanation: "Instrumental with интересоваться: спортом"
    },
    {
        question: "Они ___ в кино",
        options: ["ходил", "ходили", "ходят", "ходить"],
        correct: 1,
        explanation: "Past tense plural: они ходили"
    },
    {
        question: "Я люблю ___ книги",
        options: ["читаю", "читать", "читал", "читает"],
        correct: 1,
        explanation: "Infinitive after любить: люблю читать"
    },
    {
        question: "Она говорит ___ английском языке",
        options: ["на", "в", "по", "о"],
        correct: 0,
        explanation: "Language with 'на': на английском языке"
    },
    {
        question: "Мы живём ___ третьем этаже",
        options: ["на", "в", "у", "к"],
        correct: 0,
        explanation: "Floor with 'на': на третьем этаже"
    },
    {
        question: "Я написал ___ другу",
        options: ["письмо", "письма", "письму", "письмом"],
        correct: 0,
        explanation: "Accusative object: написал письмо"
    },
    {
        question: "Она учится ___ университете",
        options: ["в", "на", "у", "к"],
        correct: 0,
        explanation: "Prepositional: в университете"
    },
    {
        question: "Я приду ___ часов",
        options: ["в пять", "на пять", "пять", "пяти"],
        correct: 0,
        explanation: "Time with 'в': в пять часов"
    },
    {
        question: "Мой друг ___ учителем",
        options: ["стал", "становился", "станет", "становиться"],
        correct: 0,
        explanation: "Past perfective: стал учителем"
    },
    {
        question: "Я хожу ___ спортзал",
        options: ["в", "на", "к", "из"],
        correct: 0,
        explanation: "Direction: в спортзал"
    },

    // Case endings
    {
        question: "Я дал книгу ___",
        options: ["брата", "брату", "брат", "братом"],
        correct: 1,
        explanation: "Dative case: дал брату"
    },
    {
        question: "Она говорит ___ матерью",
        options: ["мать", "матери", "с матерью", "матерью"],
        correct: 2,
        explanation: "Instrumental with 'с': с матерью"
    },
    {
        question: "Мы видели ___ в парке",
        options: ["она", "её", "ей", "ею"],
        correct: 1,
        explanation: "Accusative case: видели её"
    },
    {
        question: "У ___ нет времени",
        options: ["он", "его", "ему", "им"],
        correct: 1,
        explanation: "Genitive after 'у': у него"
    },
    {
        question: "Они довольны ___",
        options: ["результат", "результата", "результатом", "результате"],
        correct: 2,
        explanation: "Instrumental after 'довольны': результатом"
    },

    // Verb aspects (perfective/imperfective)
    {
        question: "Я ___ эту книгу вчера",
        options: ["читал", "прочитал", "читаю", "буду читать"],
        correct: 1,
        explanation: "Completed action: прочитал (perfective)"
    },
    {
        question: "Каждый день я ___ газету",
        options: ["прочитаю", "читаю", "прочитал", "прочитать"],
        correct: 1,
        explanation: "Repeated action: читаю (imperfective)"
    },
    {
        question: "Мы долго ___ задачу, но не решили",
        options: ["решили", "решали", "решим", "решить"],
        correct: 1,
        explanation: "Process without result: решали (imperfective)"
    },
    {
        question: "Завтра я ___ всю работу",
        options: ["делаю", "делал", "сделаю", "делать"],
        correct: 2,
        explanation: "Future completion: сделаю (perfective)"
    },
    {
        question: "Он ___ письмо час назад",
        options: ["пишет", "написал", "писал", "будет писать"],
        correct: 1,
        explanation: "Completed action: написал (perfective)"
    },

    // Motion verbs
    {
        question: "Я ___ в школу пешком каждый день",
        options: ["иду", "хожу", "пойду", "ходил"],
        correct: 1,
        explanation: "Repeated motion: хожу (multidirectional)"
    },
    {
        question: "Сейчас я ___ на работу",
        options: ["еду", "езжу", "поеду", "ездил"],
        correct: 0,
        explanation: "Motion in progress: еду (unidirectional)"
    },
    {
        question: "Летом мы часто ___ на море",
        options: ["едем", "ездим", "поедем", "ехали"],
        correct: 1,
        explanation: "Repeated trips: ездим (multidirectional)"
    },
    {
        question: "Вчера я ___ к врачу",
        options: ["иду", "хожу", "пошёл", "ходил"],
        correct: 3,
        explanation: "Past round trip: ходил (multidirectional)"
    },
    {
        question: "Куда ты ___ сейчас?",
        options: ["идёшь", "ходишь", "пойдёшь", "шёл"],
        correct: 0,
        explanation: "Motion in progress: идёшь (unidirectional)"
    },
    {
        question: "Мой брат ___ машину каждый день",
        options: ["ведёт", "водит", "поведёт", "вёл"],
        correct: 1,
        explanation: "Repeated action: водит (multidirectional)"
    },
    {
        question: "Она сейчас ___ детей в школу",
        options: ["ведёт", "водит", "поведёт", "вела"],
        correct: 0,
        explanation: "Motion in progress: ведёт (unidirectional)"
    },

    // Pronouns
    {
        question: "___ зовут Анна",
        options: ["Я", "Меня", "Мне", "Мной"],
        correct: 1,
        explanation: "Accusative in name constructions: меня зовут"
    },
    {
        question: "Это ___ друг",
        options: ["наш", "наша", "наше", "наши"],
        correct: 0,
        explanation: "Masculine: наш друг"
    },
    {
        question: "Я говорю о ___",
        options: ["она", "её", "ей", "неё"],
        correct: 3,
        explanation: "Prepositional with 'о': о ней (н- added)"
    },
    {
        question: "___ нравится музыка",
        options: ["Я", "Меня", "Мне", "Мной"],
        correct: 2,
        explanation: "Dative with 'нравится': мне нравится"
    },

    // Numerals
    {
        question: "У меня ___ рубль",
        options: ["один", "одна", "одно", "одни"],
        correct: 0,
        explanation: "Masculine: один рубль"
    },
    {
        question: "___ студента пришли",
        options: ["Два", "Две", "Двое", "Второй"],
        correct: 0,
        explanation: "Masculine: два студента"
    },
    {
        question: "Я прочитал ___ книги",
        options: ["пять", "пяти", "пятью", "пятый"],
        correct: 0,
        explanation: "Genitive plural after 5: пять книг (here книги)"
    },
    {
        question: "Мне ___ лет",
        options: ["пятнадцать", "пятнадцати", "пятнадцатью", "пятнадцатый"],
        correct: 0,
        explanation: "Age construction: пятнадцать лет"
    },

    // Comparative and superlative
    {
        question: "Эта книга ___ чем та",
        options: ["интересная", "интереснее", "самая интересная", "интересно"],
        correct: 1,
        explanation: "Comparative: интереснее"
    },
    {
        question: "Москва - ___ город в России",
        options: ["большой", "больше", "самый большой", "больший"],
        correct: 2,
        explanation: "Superlative: самый большой"
    },
    {
        question: "Сегодня ___ чем вчера",
        options: ["холодный", "холоднее", "самый холодный", "холодно"],
        correct: 1,
        explanation: "Comparative: холоднее"
    },

    // Verbal adverbs (деепричастия)
    {
        question: "___ домой, я встретил друга",
        options: ["Иду", "Идя", "Пошёл", "Пойдя"],
        correct: 1,
        explanation: "Present verbal adverb: идя"
    },
    {
        question: "___ книгу, она заснула",
        options: ["Читает", "Читая", "Прочитала", "Прочитав"],
        correct: 3,
        explanation: "Past verbal adverb: прочитав (perfective)"
    }
];

// Numbers Quiz Questions
const numbersQuizQuestions = [
    {
        question: "How do you say '5' in Russian?",
        options: ["четыре", "пять", "шесть", "семь"],
        correct: 1,
        explanation: "пять = 5"
    },
    {
        question: "How do you say '20' in Russian?",
        options: ["десять", "тридцать", "двадцать", "сорок"],
        correct: 2,
        explanation: "двадцать = 20"
    },
    {
        question: "What number is 'один'?",
        options: ["0", "1", "2", "10"],
        correct: 1,
        explanation: "один = 1"
    },
    {
        question: "What number is 'сто'?",
        options: ["10", "50", "100", "1000"],
        correct: 2,
        explanation: "сто = 100"
    },
    {
        question: "How do you say 'first' (1st) in Russian?",
        options: ["один", "первый", "второй", "одиннадцать"],
        correct: 1,
        explanation: "первый = first (1st)"
    },
    {
        question: "What number is 'девять'?",
        options: ["8", "9", "10", "19"],
        correct: 1,
        explanation: "девять = 9"
    },
    {
        question: "How do you say '50' in Russian?",
        options: ["пятьдесят", "сорок", "шестьдесят", "пять"],
        correct: 0,
        explanation: "пятьдесят = 50"
    },
    {
        question: "What number is 'тысяча'?",
        options: ["100", "500", "1000", "1000000"],
        correct: 2,
        explanation: "тысяча = 1000"
    },
    {
        question: "How do you say 'third' (3rd) in Russian?",
        options: ["три", "третий", "тридцать", "тринадцать"],
        correct: 1,
        explanation: "третий = third (3rd)"
    },
    {
        question: "What number is 'семьдесят'?",
        options: ["7", "17", "70", "77"],
        correct: 2,
        explanation: "семьдесят = 70"
    },
    {
        question: "How do you say '12' in Russian?",
        options: ["два", "двадцать", "двенадцать", "двести"],
        correct: 2,
        explanation: "двенадцать = 12"
    },
    {
        question: "What does 'половина' mean?",
        options: ["quarter", "third", "half", "double"],
        correct: 2,
        explanation: "половина = half"
    },
    {
        question: "How do you say '200' in Russian?",
        options: ["сто", "двести", "триста", "двадцать"],
        correct: 1,
        explanation: "двести = 200"
    },
    {
        question: "What number is 'восемь'?",
        options: ["6", "7", "8", "18"],
        correct: 2,
        explanation: "восемь = 8"
    },
    {
        question: "How do you say 'second' (2nd) in Russian?",
        options: ["два", "второй", "двадцать", "двести"],
        correct: 1,
        explanation: "второй = second (2nd)"
    },
    {
        question: "What number is 'девяносто'?",
        options: ["9", "19", "90", "900"],
        correct: 2,
        explanation: "девяносто = 90"
    },
    {
        question: "How do you say '300' in Russian?",
        options: ["триста", "тридцать", "три", "сто"],
        correct: 0,
        explanation: "триста = 300"
    },
    {
        question: "What does 'четверть' mean?",
        options: ["four", "fourth", "quarter", "fourteen"],
        correct: 2,
        explanation: "четверть = quarter"
    },
    {
        question: "How do you say '1000000' (million) in Russian?",
        options: ["тысяча", "миллион", "миллиард", "сто тысяч"],
        correct: 1,
        explanation: "миллион = 1,000,000 (million)"
    },
    {
        question: "What number is 'сорок'?",
        options: ["4", "14", "40", "400"],
        correct: 2,
        explanation: "сорок = 40"
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let quizStarted = false;

// Initialize grammar quiz
function initGrammarQuiz() {
    loadQuizProgress();
    loadNumbersQuizProgress();
}

// Start new quiz
function startQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    quizStarted = true;
    
    // Shuffle questions
    grammarQuestions.sort(() => Math.random() - 0.5);
    
    document.getElementById('quiz-start').style.display = 'none';
    document.getElementById('quiz-content').style.display = 'block';
    document.getElementById('quiz-results').style.display = 'none';
    
    showQuestion();
}

// Show current question
function showQuestion() {
    const question = grammarQuestions[currentQuestionIndex];

    document.getElementById('question-number').textContent =
        `Question ${currentQuestionIndex + 1} of ${Math.min(10, grammarQuestions.length)}`;
    document.getElementById('question-text').textContent = question.question;

    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';

    // Shuffle options while keeping track of correct answer
    const shuffledOptions = question.options.map((option, index) => ({ option, index }));
    shuffledOptions.sort(() => Math.random() - 0.5);

    shuffledOptions.forEach(({ option, index }) => {
        const button = document.createElement('button');
        button.className = 'quiz-option';
        button.style.cssText = 'width: 100%; padding: 15px 20px; margin: 8px 0; background: white; border: 2px solid #667eea; border-radius: 10px; font-size: 1.1em; cursor: pointer; text-align: left; transition: all 0.3s;';
        button.textContent = option;
        button.onmouseover = () => button.style.background = '#f8f9ff';
        button.onmouseout = () => button.style.background = 'white';
        button.onclick = () => selectAnswer(index, shuffledOptions);
        optionsContainer.appendChild(button);
    });

    document.getElementById('quiz-feedback').style.display = 'none';
    document.getElementById('next-question').style.display = 'none';
}

// Select answer
function selectAnswer(selectedIndex, shuffledOptions) {
    const question = grammarQuestions[currentQuestionIndex];
    const feedback = document.getElementById('quiz-feedback');
    const options = document.querySelectorAll('.quiz-option');

    // Disable all options
    options.forEach(opt => opt.disabled = true);

    // Find which button has the correct answer
    let correctButtonIndex = -1;
    let selectedButtonIndex = -1;
    shuffledOptions.forEach((item, btnIndex) => {
        if (item.index === question.correct) {
            correctButtonIndex = btnIndex;
        }
        if (item.index === selectedIndex) {
            selectedButtonIndex = btnIndex;
        }
    });

    // Highlight correct and incorrect
    options[correctButtonIndex].style.background = '#e8f5e9';
    options[correctButtonIndex].style.borderColor = '#4caf50';
    options[correctButtonIndex].style.fontWeight = 'bold';

    if (selectedIndex !== question.correct) {
        options[selectedButtonIndex].style.background = '#ffebee';
        options[selectedButtonIndex].style.borderColor = '#f44336';
    }

    // Show feedback
    if (selectedIndex === question.correct) {
        correctAnswers++;
        feedback.innerHTML = `<div style="color: green; font-size: 1.1em; padding: 15px; background: #e8f5e9; border-radius: 8px; margin: 15px 0;"><strong>✓ Correct!</strong><br>${question.explanation}</div>`;
    } else {
        feedback.innerHTML = `<div style="color: red; font-size: 1.1em; padding: 15px; background: #ffebee; border-radius: 8px; margin: 15px 0;"><strong>✗ Incorrect.</strong><br>${question.explanation}</div>`;
    }

    feedback.style.display = 'block';
    document.getElementById('next-question').style.display = 'block';
}

// Next question
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < Math.min(10, grammarQuestions.length)) {
        showQuestion();
    } else {
        showResults();
    }
}

// Show quiz results
function showResults() {
    const percentage = Math.round((correctAnswers / 10) * 100);
    
    document.getElementById('quiz-content').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';
    
    document.getElementById('quiz-score').textContent = `${correctAnswers}/10`;
    document.getElementById('quiz-percentage').textContent = `${percentage}%`;
    
    let message = '';
    if (percentage >= 90) {
        message = '🏆 Excellent! You have mastered this material!';
    } else if (percentage >= 70) {
        message = '⭐ Good job! Keep practicing!';
    } else {
        message = '📚 Keep studying! Review the grammar rules.';
    }
    document.getElementById('quiz-message').textContent = message;
    
    // Save progress
    saveQuizScore(percentage);
}

// Restart quiz
function restartQuiz() {
    document.getElementById('quiz-results').style.display = 'none';
    document.getElementById('quiz-start').style.display = 'block';
}

// Save quiz score
function saveQuizScore(percentage) {
    const scores = JSON.parse(localStorage.getItem('grammarScores') || '[]');
    scores.push({
        date: new Date().toLocaleDateString(),
        score: percentage
    });
    localStorage.setItem('grammarScores', JSON.stringify(scores));
}

// Load quiz progress
function loadQuizProgress() {
    const scores = JSON.parse(localStorage.getItem('grammarScores') || '[]');
    if (scores.length > 0) {
        const avgScore = Math.round(
            scores.reduce((sum, s) => sum + s.score, 0) / scores.length
        );
        document.getElementById('avg-score').textContent = avgScore + '%';
        document.getElementById('quiz-attempts').textContent = scores.length;
    }
}

// Grammar Reference Data
const grammarReference = {
    quickRef: {
        title: "Quick Reference - Russian Cases",
        content: [
            { case: "Nominative (Именительный)", question: "Кто? Что?", usage: "Subject of sentence", example: "Это студент" },
            { case: "Genitive (Родительный)", question: "Кого? Чего?", usage: "Possession, 'of', after нет/не было", example: "У меня нет книги" },
            { case: "Dative (Дательный)", question: "Кому? Чему?", usage: "Indirect object, 'to/for'", example: "Я дал другу книгу" },
            { case: "Accusative (Винительный)", question: "Кого? Что?", usage: "Direct object", example: "Я читаю книгу" },
            { case: "Instrumental (Творительный)", question: "Кем? Чем?", usage: "Means/tool, 'with/by'", example: "Я пишу ручкой" },
            { case: "Prepositional (Предложный)", question: "О ком? О чём?", usage: "After о/об, в/на (location)", example: "Я думаю о брате" }
        ]
    },
    verbsOfMotion: {
        title: "Verbs of Motion - Quick Guide",
        content: [
            { type: "On foot (unidirectional)", verb: "идти", meaning: "to go/walk (one direction)", example: "Я иду в школу" },
            { type: "On foot (multidirectional)", verb: "ходить", meaning: "to go/walk (habitual/round trip)", example: "Я хожу в школу каждый день" },
            { type: "By vehicle (unidirectional)", verb: "ехать", meaning: "to go/ride (one direction)", example: "Мы едем в Москву" },
            { type: "By vehicle (multidirectional)", verb: "ездить", meaning: "to go/ride (habitual/round trip)", example: "Мы ездим в Москву каждый год" },
            { type: "Perfective (on foot)", verb: "пойти", meaning: "to set off walking", example: "Я пойду домой" },
            { type: "Perfective (by vehicle)", verb: "поехать", meaning: "to set off riding", example: "Мы поедем завтра" }
        ]
    },
    commonMistakes: {
        title: "Common Mistakes to Avoid",
        content: [
            { mistake: "Using 'в' with countries", correct: "в России (correct), в Америке (correct)", incorrect: "на России (wrong)" },
            { mistake: "Confusing 'учить' and 'изучать'", correct: "Я изучаю русский язык (study subject)", incorrect: "Я учу русский язык (memorize)" },
            { mistake: "Wrong case after 'у'", correct: "У меня (genitive)", incorrect: "У я (nominative)" },
            { mistake: "Forgetting aspect", correct: "Я буду читать (imperfective future)", incorrect: "Я буду прочитать (wrong)" },
            { mistake: "Gender agreement", correct: "Это моя книга (fem.)", incorrect: "Это мой книга (masc.)" }
        ]
    },
    memoryTricks: {
        title: "Memory Tricks",
        content: [
            { trick: "Genitive case", tip: "Think 'of' or 'no' - у меня НЕТ книги (I have NO book)" },
            { trick: "Accusative", tip: "Direct object - what you SEE/READ/LOVE" },
            { trick: "Instrumental", tip: "Tool or means - пишу РУЧКОЙ (write WITH pen)" },
            { trick: "Prepositional", tip: "Always needs preposition - в/на/о" },
            { trick: "Verbs of motion", tip: "идти/ехать = RIGHT NOW, ходить/ездить = HABITUAL" }
        ]
    }
};

// ===== NUMBERS QUIZ FUNCTIONS =====

let numbersCurrentQuestionIndex = 0;
let numbersCorrectAnswers = 0;
let numbersQuizStarted = false;

// Start Numbers Quiz
function startNumbersQuiz() {
    numbersCurrentQuestionIndex = 0;
    numbersCorrectAnswers = 0;
    numbersQuizStarted = true;

    // Shuffle questions
    numbersQuizQuestions.sort(() => Math.random() - 0.5);

    document.getElementById('numbers-quiz-start').style.display = 'none';
    document.getElementById('numbers-quiz-content').style.display = 'block';
    document.getElementById('numbers-quiz-results').style.display = 'none';

    showNumbersQuestion();
}

// Show current question
function showNumbersQuestion() {
    if (numbersCurrentQuestionIndex >= 10) {
        showNumbersResults();
        return;
    }

    const q = numbersQuizQuestions[numbersCurrentQuestionIndex];

    document.getElementById('numbers-question-number').textContent = `Question ${numbersCurrentQuestionIndex + 1}/10`;
    document.getElementById('numbers-question-text').textContent = q.question;

    const optionsDiv = document.getElementById('numbers-quiz-options');
    optionsDiv.innerHTML = '';

    q.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'quiz-option';
        button.onclick = () => checkNumbersAnswer(index);
        optionsDiv.appendChild(button);
    });

    document.getElementById('numbers-quiz-feedback').innerHTML = '';
    document.getElementById('numbers-next-question').style.display = 'none';
}

// Check answer
function checkNumbersAnswer(selectedIndex) {
    const q = numbersQuizQuestions[numbersCurrentQuestionIndex];
    const options = document.querySelectorAll('#numbers-quiz-options .quiz-option');

    options.forEach((button, index) => {
        button.disabled = true;
        if (index === q.correct) {
            button.style.background = '#4caf50';
            button.style.color = 'white';
        } else if (index === selectedIndex) {
            button.style.background = '#f44336';
            button.style.color = 'white';
        }
    });

    const feedback = document.getElementById('numbers-quiz-feedback');
    if (selectedIndex === q.correct) {
        numbersCorrectAnswers++;
        feedback.innerHTML = `<div style="color: #4caf50; font-weight: bold;">✓ Correct!</div><div style="margin-top: 10px;">${q.explanation}</div>`;
    } else {
        feedback.innerHTML = `<div style="color: #f44336; font-weight: bold;">✗ Incorrect</div><div style="margin-top: 10px;">${q.explanation}</div>`;
    }

    document.getElementById('numbers-next-question').style.display = 'block';
}

// Next question
function nextNumbersQuestion() {
    numbersCurrentQuestionIndex++;
    showNumbersQuestion();
}

// Show results
function showNumbersResults() {
    document.getElementById('numbers-quiz-content').style.display = 'none';
    document.getElementById('numbers-quiz-results').style.display = 'block';

    const score = numbersCorrectAnswers;
    const percentage = Math.round((score / 10) * 100);

    document.getElementById('numbers-quiz-score').textContent = `${score}/10`;
    document.getElementById('numbers-quiz-percentage').textContent = `${percentage}%`;

    let message = '';
    if (percentage >= 90) message = '🎉 Отлично! Excellent!';
    else if (percentage >= 70) message = '👍 Хорошо! Good job!';
    else if (percentage >= 50) message = '👌 Неплохо! Not bad!';
    else message = '📚 Keep practicing!';

    document.getElementById('numbers-quiz-message').textContent = message;

    // Save progress
    saveNumbersQuizProgress(score, percentage);
}

// Restart quiz
function restartNumbersQuiz() {
    document.getElementById('numbers-quiz-start').style.display = 'block';
    document.getElementById('numbers-quiz-content').style.display = 'none';
    document.getElementById('numbers-quiz-results').style.display = 'none';
    numbersQuizStarted = false;
}

// Save quiz progress
function saveNumbersQuizProgress(score, percentage) {
    const scores = JSON.parse(localStorage.getItem('numbersQuizScores') || '[]');
    scores.push({ score, percentage, date: new Date().toLocaleDateString() });
    localStorage.setItem('numbersQuizScores', JSON.stringify(scores));
    loadNumbersQuizProgress();
}

// Load quiz progress
function loadNumbersQuizProgress() {
    const scores = JSON.parse(localStorage.getItem('numbersQuizScores') || '[]');

    if (scores.length > 0) {
        const avgScore = Math.round(scores.reduce((sum, s) => sum + s.percentage, 0) / scores.length);
        document.getElementById('numbers-avg-score').textContent = avgScore + '%';
        document.getElementById('numbers-quiz-attempts').textContent = scores.length;
    }
}
