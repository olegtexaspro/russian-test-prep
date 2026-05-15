// typing.js - Native Russian typing speed test

const russianTexts = [
    "Без труда не вытащишь и рыбку из пруда",
    "Повторенье мать ученья",
    "Тише едешь дальше будешь",
    "Москва не сразу строилась",
    "Делу время потехе час",
    "Что посеешь то и пожнёшь",
    "Лучше поздно чем никогда",
    "Не имей сто рублей а имей сто друзей",
    "Утро вечера мудренее",
    "Слово не воробей вылетит не поймаешь"
];

let currentText = '';
let startTime = null;
let timerInterval = null;
let typingInProgress = false;

// Initialize typing test
function initTypingTest() {
    loadNewText();
    document.getElementById('typing-input').addEventListener('input', handleTypingInput);
    document.getElementById('typing-input').addEventListener('keydown', startTypingTimer);
}

// Load new random text
function loadNewText() {
    currentText = russianTexts[Math.floor(Math.random() * russianTexts.length)];
    document.getElementById('text-to-type').textContent = currentText;
    document.getElementById('typing-input').value = '';
    document.getElementById('typing-input').disabled = false;
    document.getElementById('typing-input').focus();
    
    resetTypingTest();
}

// Start timer on first keypress
function startTypingTimer() {
    if (!typingInProgress) {
        typingInProgress = true;
        startTime = Date.now();
        
        timerInterval = setInterval(() => {
            const elapsed = Math.floor((Date.now() - startTime) / 1000);
            document.getElementById('typing-timer').textContent = `${elapsed}s`;
        }, 100);
    }
}

// Handle typing input
function handleTypingInput(e) {
    const input = e.target.value;
    const textDisplay = document.getElementById('text-to-type');
    
    // Highlight correct/incorrect characters
    let html = '';
    for (let i = 0; i < currentText.length; i++) {
        if (i < input.length) {
            if (input[i] === currentText[i]) {
                html += `<span style="color: green;">${currentText[i]}</span>`;
            } else {
                html += `<span style="color: red; background: #ffe0e0;">${currentText[i]}</span>`;
            }
        } else {
            html += currentText[i];
        }
    }
    textDisplay.innerHTML = html;
    
    // Check if completed
    if (input === currentText) {
        finishTypingTest();
    }
}

// Finish test and calculate WPM
function finishTypingTest() {
    if (!typingInProgress) return;
    
    clearInterval(timerInterval);
    typingInProgress = false;
    
    const endTime = Date.now();
    const timeSeconds = (endTime - startTime) / 1000;
    const timeMinutes = timeSeconds / 60;
    
    const input = document.getElementById('typing-input').value;
    const wordsTyped = input.trim().split(/\s+/).length;
    const wpm = Math.round(wordsTyped / timeMinutes);
    
    // Calculate accuracy
    let correctChars = 0;
    for (let i = 0; i < Math.min(input.length, currentText.length); i++) {
        if (input[i] === currentText[i]) correctChars++;
    }
    const accuracy = Math.round((correctChars / currentText.length) * 100);
    
    // Display results
    document.getElementById('wpm-result').textContent = wpm;
    document.getElementById('accuracy-result').textContent = accuracy;
    document.getElementById('typing-results').style.display = 'block';
    document.getElementById('typing-input').disabled = true;
    
    // Save to localStorage
    saveTypingSpeed(wpm);
    
    // Show achievement if good
    if (wpm >= 30) {
        showTypingAchievement(wpm);
    }
}

// Reset typing test
function resetTypingTest() {
    clearInterval(timerInterval);
    typingInProgress = false;
    startTime = null;
    document.getElementById('typing-timer').textContent = '0s';
    document.getElementById('typing-results').style.display = 'none';
}

// Save typing speed to localStorage
function saveTypingSpeed(wpm) {
    const speeds = JSON.parse(localStorage.getItem('typingSpeeds') || '{}');
    const currentWeek = getCurrentWeek();
    
    // Save highest speed for current week
    if (!speeds[currentWeek] || wpm > speeds[currentWeek]) {
        speeds[currentWeek] = wpm;
        localStorage.setItem('typingSpeeds', JSON.stringify(speeds));
        updateTypingChart();
    }
}

// Get current week number (1-12)
// Uses the date of the user's first practice session, stored in localStorage.
function getCurrentWeek() {
    let firstUseDate = localStorage.getItem('typingFirstUseDate');
    if (!firstUseDate) {
        firstUseDate = new Date().toISOString();
        localStorage.setItem('typingFirstUseDate', firstUseDate);
    }
    const startDate = new Date(firstUseDate);
    const today = new Date();
    const diffDays = Math.ceil(Math.abs(today - startDate) / (1000 * 60 * 60 * 24));
    const week = Math.min(Math.ceil(diffDays / 7), 12);
    return week || 1;
}

// Update typing speed chart
function updateTypingChart() {
    const chartBars = document.getElementById('chart-bars');
    chartBars.innerHTML = '';
    
    const speeds = JSON.parse(localStorage.getItem('typingSpeeds') || '{}');
    
    for (let i = 1; i <= 12; i++) {
        const bar = document.createElement('div');
        bar.className = 'chart-bar';
        
        const speed = speeds[i] || 0;
        const height = Math.max((speed / 50) * 100, 5); // Scale to 50 WPM max
        bar.style.height = height + '%';
        
        const value = document.createElement('div');
        value.className = 'chart-value';
        value.textContent = speed ? speed : '';
        
        const week = document.createElement('div');
        week.className = 'chart-label';
        week.textContent = `W${i}`;
        
        const wrapper = document.createElement('div');
        wrapper.style.textAlign = 'center';
        wrapper.appendChild(value);
        wrapper.appendChild(bar);
        wrapper.appendChild(week);
        
        chartBars.appendChild(wrapper);
    }
}

// Show achievement notification
function showTypingAchievement(wpm) {
    const achievement = document.getElementById('achievement');
    if (achievement) {
        if (wpm >= 40) {
            achievement.innerHTML = '🏆 Amazing! ' + wpm + ' WPM - Expert Level!';
        } else if (wpm >= 30) {
            achievement.innerHTML = '⭐ Great job! ' + wpm + ' WPM - Goal achieved!';
        }
        achievement.style.display = 'block';
        setTimeout(() => {
            achievement.style.display = 'none';
        }, 3000);
    }
}

// Initialize chart on page load
function initTypingChart() {
    updateTypingChart();
}
