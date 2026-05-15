// calendar.js - Weeks, Months, and Calendar vocabulary

const calendarData = {
    daysOfWeek: [
        { ru: "понедельник", en: "Monday", abbr: "ПН" },
        { ru: "вторник", en: "Tuesday", abbr: "ВТ" },
        { ru: "среда", en: "Wednesday", abbr: "СР" },
        { ru: "четверг", en: "Thursday", abbr: "ЧТ" },
        { ru: "пятница", en: "Friday", abbr: "ПТ" },
        { ru: "суббота", en: "Saturday", abbr: "СБ" },
        { ru: "воскресенье", en: "Sunday", abbr: "ВС" }
    ],
    months: [
        { ru: "январь", en: "January", inCase: "в январе" },
        { ru: "февраль", en: "February", inCase: "в феврале" },
        { ru: "март", en: "March", inCase: "в марте" },
        { ru: "апрель", en: "April", inCase: "в апреле" },
        { ru: "май", en: "May", inCase: "в мае" },
        { ru: "июнь", en: "June", inCase: "в июне" },
        { ru: "июль", en: "July", inCase: "в июле" },
        { ru: "август", en: "August", inCase: "в августе" },
        { ru: "сентябрь", en: "September", inCase: "в сентябре" },
        { ru: "октябрь", en: "October", inCase: "в октябре" },
        { ru: "ноябрь", en: "November", inCase: "в ноябре" },
        { ru: "декабрь", en: "December", inCase: "в декабре" }
    ],
    seasons: [
        { ru: "весна", en: "spring", months: "март, апрель, май" },
        { ru: "лето", en: "summer", months: "июнь, июль, август" },
        { ru: "осень", en: "fall/autumn", months: "сентябрь, октябрь, ноябрь" },
        { ru: "зима", en: "winter", months: "декабрь, январь, февраль" }
    ],
    timeExpressions: [
        { ru: "сегодня", en: "today" },
        { ru: "вчера", en: "yesterday" },
        { ru: "завтра", en: "tomorrow" },
        { ru: "позавчера", en: "day before yesterday" },
        { ru: "послезавтра", en: "day after tomorrow" },
        { ru: "на прошлой неделе", en: "last week" },
        { ru: "на этой неделе", en: "this week" },
        { ru: "на следующей неделе", en: "next week" },
        { ru: "в прошлом месяце", en: "last month" },
        { ru: "в этом месяце", en: "this month" },
        { ru: "в следующем месяце", en: "next month" }
    ]
};

const calendarQuestions = [
    {
        question: "Какой день недели после среды?",
        options: ["вторник", "четверг", "пятница", "понедельник"],
        correct: 1,
        explanation: "После среды (Wednesday) идёт четверг (Thursday)"
    },
    {
        question: "Какой месяц между мартом и маем?",
        options: ["февраль", "апрель", "июнь", "январь"],
        correct: 1,
        explanation: "Между мартом и маем идёт апрель (April)"
    },
    {
        question: "Сколько дней в неделе?",
        options: ["пять", "шесть", "семь", "восемь"],
        correct: 2,
        explanation: "В неделе семь дней (7 days)"
    },
    {
        question: "Первый месяц года?",
        options: ["декабрь", "январь", "февраль", "март"],
        correct: 1,
        explanation: "Январь (January) - первый месяц года"
    },
    {
        question: "Выходные дни это:",
        options: ["понедельник и вторник", "среда и четверг", "пятница и суббота", "суббота и воскресенье"],
        correct: 3,
        explanation: "Выходные: суббота и воскресенье (Saturday and Sunday)"
    },
    {
        question: "Какое время года между летом и зимой?",
        options: ["весна", "осень", "лето", "зима"],
        correct: 1,
        explanation: "Осень (fall/autumn) между летом и зимой"
    },
    {
        question: "День перед средой?",
        options: ["понедельник", "вторник", "четверг", "пятница"],
        correct: 1,
        explanation: "Вторник (Tuesday) перед средой"
    },
    {
        question: "Последний месяц года?",
        options: ["ноябрь", "октябрь", "декабрь", "январь"],
        correct: 2,
        explanation: "Декабрь (December) - последний месяц"
    },
    {
        question: "Сколько месяцев в году?",
        options: ["десять", "одиннадцать", "двенадцать", "тринадцать"],
        correct: 2,
        explanation: "В году двенадцать месяцев (12 months)"
    },
    {
        question: "Летние месяцы в России:",
        options: ["март, апрель, май", "июнь, июль, август", "сентябрь, октябрь, ноябрь", "декабрь, январь, февраль"],
        correct: 1,
        explanation: "Лето: июнь, июль, август"
    },
    {
        question: "Первый рабочий день недели?",
        options: ["воскресенье", "понедельник", "вторник", "суббота"],
        correct: 1,
        explanation: "Понедельник (Monday) - первый рабочий день"
    },
    {
        question: "Месяц перед декабрём?",
        options: ["октябрь", "ноябрь", "январь", "сентябрь"],
        correct: 1,
        explanation: "Ноябрь (November) перед декабрём"
    },
    {
        question: "Какой день в середине недели?",
        options: ["вторник", "среда", "четверг", "пятница"],
        correct: 1,
        explanation: "Среда (Wednesday) - середина недели"
    },
    {
        question: "Весенние месяцы:",
        options: ["март, апрель, май", "июнь, июль, август", "декабрь, январь, февраль", "сентябрь, октябрь, ноябрь"],
        correct: 0,
        explanation: "Весна: март, апрель, май"
    },
    {
        question: "День после пятницы?",
        options: ["четверг", "суббота", "воскресенье", "понедельник"],
        correct: 1,
        explanation: "Суббота (Saturday) после пятницы"
    }
];

let currentCalendarQuestionIndex = 0;
let calendarCorrectAnswers = 0;
let calendarQuizStarted = false;

// Initialize calendar tab
function initCalendar() {
    displayCalendarSection('days');
    loadCalendarQuizProgress();
}

// Display different calendar sections
function displayCalendarSection(section) {
    const container = document.getElementById('calendar-content');
    container.innerHTML = '';
    
    if (section === 'days') {
        displayDaysOfWeek(container);
    } else if (section === 'months') {
        displayMonths(container);
    } else if (section === 'seasons') {
        displaySeasons(container);
    } else if (section === 'expressions') {
        displayTimeExpressions(container);
    }
}

// Display days of week
function displayDaysOfWeek(container) {
    calendarData.daysOfWeek.forEach((day, index) => {
        const card = document.createElement('div');
        card.style.cssText = 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 25px; border-radius: 15px; text-align: center; color: white;';
        card.innerHTML = `
            <div style="font-size: 2em; font-weight: bold; margin-bottom: 10px;">${day.abbr}</div>
            <div style="font-size: 1.5em; margin-bottom: 8px;">${day.ru}</div>
            <div style="font-size: 1.1em; opacity: 0.9;">${day.en}</div>
        `;
        container.appendChild(card);
    });
}

// Display months
function displayMonths(container) {
    calendarData.months.forEach((month, index) => {
        const card = document.createElement('div');
        card.style.cssText = 'background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 25px; border-radius: 15px; text-align: center; color: white;';
        card.innerHTML = `
            <div style="font-size: 1.8em; font-weight: bold; margin-bottom: 10px;">${month.ru}</div>
            <div style="font-size: 1.2em; margin-bottom: 5px;">${month.en}</div>
            <div style="font-size: 0.95em; opacity: 0.9; font-style: italic;">${month.inCase}</div>
        `;
        container.appendChild(card);
    });
}

// Display seasons
function displaySeasons(container) {
    calendarData.seasons.forEach((season, index) => {
        const card = document.createElement('div');
        card.style.cssText = 'background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); padding: 30px; border-radius: 15px; text-align: center; color: white;';
        card.innerHTML = `
            <div style="font-size: 2em; font-weight: bold; margin-bottom: 12px;">${season.ru}</div>
            <div style="font-size: 1.3em; margin-bottom: 10px;">${season.en}</div>
            <div style="font-size: 1em; opacity: 0.9;">${season.months}</div>
        `;
        container.appendChild(card);
    });
}

// Display time expressions
function displayTimeExpressions(container) {
    calendarData.timeExpressions.forEach((expr, index) => {
        const card = document.createElement('div');
        card.style.cssText = 'background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); padding: 20px; border-radius: 12px; text-align: center; color: white;';
        card.innerHTML = `
            <div style="font-size: 1.4em; font-weight: bold; margin-bottom: 8px;">${expr.ru}</div>
            <div style="font-size: 1.1em;">${expr.en}</div>
        `;
        container.appendChild(card);
    });
}

// Start calendar quiz
function startCalendarQuiz() {
    currentCalendarQuestionIndex = 0;
    calendarCorrectAnswers = 0;
    calendarQuizStarted = true;
    
    calendarQuestions.sort(() => Math.random() - 0.5);
    
    document.getElementById('calendar-quiz-start').style.display = 'none';
    document.getElementById('calendar-quiz-content').style.display = 'block';
    document.getElementById('calendar-quiz-results').style.display = 'none';
    
    showCalendarQuestion();
}

// Show calendar question
function showCalendarQuestion() {
    const question = calendarQuestions[currentCalendarQuestionIndex];
    
    document.getElementById('calendar-question-number').textContent = 
        `Question ${currentCalendarQuestionIndex + 1} of ${Math.min(10, calendarQuestions.length)}`;
    document.getElementById('calendar-question-text').textContent = question.question;
    
    const optionsContainer = document.getElementById('calendar-quiz-options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.style.cssText = 'width: 100%; padding: 15px 20px; margin: 8px 0; background: white; border: 2px solid #667eea; border-radius: 10px; font-size: 1.1em; cursor: pointer; text-align: left; transition: all 0.3s;';
        button.textContent = option;
        button.onmouseover = () => button.style.background = '#f8f9ff';
        button.onmouseout = () => button.style.background = 'white';
        button.onclick = () => selectCalendarAnswer(index);
        optionsContainer.appendChild(button);
    });
    
    document.getElementById('calendar-quiz-feedback').style.display = 'none';
    document.getElementById('calendar-next-question').style.display = 'none';
}

// Select calendar answer
function selectCalendarAnswer(selectedIndex) {
    const question = calendarQuestions[currentCalendarQuestionIndex];
    const feedback = document.getElementById('calendar-quiz-feedback');
    const options = document.querySelectorAll('#calendar-quiz-options button');
    
    options.forEach(opt => opt.disabled = true);
    
    options[question.correct].style.background = '#e8f5e9';
    options[question.correct].style.borderColor = '#4caf50';
    options[question.correct].style.fontWeight = 'bold';
    
    if (selectedIndex !== question.correct) {
        options[selectedIndex].style.background = '#ffebee';
        options[selectedIndex].style.borderColor = '#f44336';
    }
    
    if (selectedIndex === question.correct) {
        calendarCorrectAnswers++;
        feedback.innerHTML = `<div style="color: green; font-size: 1.1em; padding: 15px; background: #e8f5e9; border-radius: 8px; margin: 15px 0;"><strong>✓ Correct!</strong><br>${question.explanation}</div>`;
    } else {
        feedback.innerHTML = `<div style="color: red; font-size: 1.1em; padding: 15px; background: #ffebee; border-radius: 8px; margin: 15px 0;"><strong>✗ Incorrect.</strong><br>${question.explanation}</div>`;
    }
    
    feedback.style.display = 'block';
    document.getElementById('calendar-next-question').style.display = 'block';
}

// Next calendar question
function nextCalendarQuestion() {
    currentCalendarQuestionIndex++;
    
    if (currentCalendarQuestionIndex < Math.min(10, calendarQuestions.length)) {
        showCalendarQuestion();
    } else {
        showCalendarResults();
    }
}

// Show calendar results
function showCalendarResults() {
    const percentage = Math.round((calendarCorrectAnswers / 10) * 100);
    
    document.getElementById('calendar-quiz-content').style.display = 'none';
    document.getElementById('calendar-quiz-results').style.display = 'block';
    
    document.getElementById('calendar-quiz-score').textContent = `${calendarCorrectAnswers}/10`;
    document.getElementById('calendar-quiz-percentage').textContent = `${percentage}%`;
    
    let message = '';
    if (percentage >= 90) {
        message = '🏆 Excellent! You know your calendar vocabulary!';
    } else if (percentage >= 70) {
        message = '⭐ Good job! Keep practicing!';
    } else {
        message = '📚 Keep studying! Review the vocabulary cards.';
    }
    document.getElementById('calendar-quiz-message').textContent = message;
    
    saveCalendarQuizScore(percentage);
}

// Restart calendar quiz
function restartCalendarQuiz() {
    document.getElementById('calendar-quiz-results').style.display = 'none';
    document.getElementById('calendar-quiz-start').style.display = 'block';
}

// Save calendar quiz score
function saveCalendarQuizScore(percentage) {
    const scores = JSON.parse(localStorage.getItem('calendarScores') || '[]');
    scores.push({
        date: new Date().toLocaleDateString(),
        score: percentage
    });
    localStorage.setItem('calendarScores', JSON.stringify(scores));
}

// Load calendar quiz progress
function loadCalendarQuizProgress() {
    const scores = JSON.parse(localStorage.getItem('calendarScores') || '[]');
    if (scores.length > 0) {
        const avgScore = Math.round(
            scores.reduce((sum, s) => sum + s.score, 0) / scores.length
        );
        document.getElementById('calendar-avg-score').textContent = avgScore + '%';
        document.getElementById('calendar-quiz-attempts').textContent = scores.length;
    }
}
