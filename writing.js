// writing.js - Writing Practice Module

const writingPrompts = {
    novice: [
        {
            title: "О себе (About Yourself)",
            prompt: "Напишите о себе: как вас зовут, сколько вам лет, где вы живёте, что вы любите делать.",
            minChars: 100,
            maxChars: 2500,
            tips: "Use: Меня зовут..., Мне ... лет, Я живу в..., Я люблю..."
        },
        {
            title: "Моя семья (My Family)",
            prompt: "Опишите вашу семью: кто в ней есть, как их зовут, чем они занимаются.",
            minChars: 100,
            maxChars: 2500,
            tips: "Use: В моей семье..., У меня есть..., Мой/Моя... работает..."
        },
        {
            title: "Мой день (My Day)",
            prompt: "Расскажите о вашем типичном дне: когда вы встаёте, что делаете, когда ложитесь спать.",
            minChars: 100,
            maxChars: 2500,
            tips: "Use time expressions: утром, днём, вечером, в 7 часов..."
        },
        {
            title: "Моя школа (My School)",
            prompt: "Опишите вашу школу: где она находится, какие предметы вы изучаете, кто ваши любимые учителя.",
            minChars: 100,
            maxChars: 2500,
            tips: "Use: Моя школа находится в..., Я изучаю..., Мой любимый предмет..."
        },
        {
            title: "Письмо другу (Letter to Friend)",
            prompt: "Напишите письмо другу о ваших выходных: что вы делали, где были, было ли весело.",
            minChars: 150,
            maxChars: 2500,
            tips: "Start with: Привет! Use past tense: я ходил/ходила, я был/была..."
        }
    ],
    
    intermediate: [
        {
            title: "Путешествие (Travel Experience)",
            prompt: "Напишите о вашем недавнем путешествии или поездке. Опишите, где вы были, что видели, что вам особенно понравилось и почему.",
            minChars: 200,
            maxChars: 2500,
            tips: "Use connectors: во-первых, во-вторых, кроме того, в заключение"
        },
        {
            title: "Экологическая проблема (Environmental Issue)",
            prompt: "Опишите экологическую проблему в вашем городе или стране. Объясните причины проблемы и предложите возможные решения.",
            minChars: 200,
            maxChars: 2500,
            tips: "Use: проблема заключается в том, что..., необходимо..., следует..."
        },
        {
            title: "Образование (Education)",
            prompt: "Объясните, почему образование важно в современном мире. Приведите конкретные примеры и аргументы.",
            minChars: 200,
            maxChars: 2500,
            tips: "Use academic language: играет важную роль, способствует развитию, позволяет..."
        },
        {
            title: "Технологии (Technology)",
            prompt: "Обсудите влияние современных технологий на жизнь людей. Рассмотрите как положительные, так и отрицательные стороны.",
            minChars: 200,
            maxChars: 2500,
            tips: "Use: с одной стороны..., с другой стороны..., тем не менее..."
        },
        {
            title: "Культурный обмен (Cultural Exchange)",
            prompt: "Напишите о важности изучения иностранных языков и культурного обмена между странами. Приведите примеры из личного опыта или наблюдений.",
            minChars: 200,
            maxChars: 2500,
            tips: "Use: способствует взаимопониманию, открывает возможности, укрепляет связи..."
        }
    ]
};

let currentWritingLevel = 'novice';
let currentWritingPromptIndex = 0;

// Initialize writing practice
function initWriting() {
    console.log('Initializing writing module');
    // Show prompt list on load
    const listContainer = document.getElementById('writing-prompt-list-container');
    if (listContainer) {
        listContainer.style.display = 'block';
    }
    showWritingPromptList('novice');
}

// Change writing level
function changeWritingLevel(level) {
    currentWritingLevel = level;
    
    // Update button styles
    document.querySelectorAll('.writing-level-btn').forEach(btn => {
        btn.style.background = '#9e9e9e';
        btn.style.color = 'white';
    });
    event.target.style.background = '#667eea';
    event.target.style.color = 'white';
    
    showWritingPromptList(level);
}

// Show writing prompt list
function showWritingPromptList(level) {
    currentWritingLevel = level;
    
    // Hide content, show list
    document.getElementById('writing-content').style.display = 'none';
    document.getElementById('writing-prompt-list-container').style.display = 'block';
    
    // Load saved responses
    const savedResponses = JSON.parse(localStorage.getItem('writingResponses') || '{}');
    const levelResponses = savedResponses[level] || {};
    
    // Build prompt list
    const prompts = writingPrompts[level];
    const listContainer = document.getElementById('writing-prompt-list');
    listContainer.innerHTML = '';
    
    prompts.forEach((prompt, index) => {
        const response = levelResponses[index];
        const completed = response ? true : false;
        const isDraft = response && response.draft === true;
        const wordCount = response ? response.text.split(/\s+/).filter(w => w.length > 0).length : 0;

        // Determine colors based on status
        let bgGradient, borderColor;
        if (isDraft) {
            bgGradient = 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)'; // Orange for drafts
            borderColor = '#ff9800';
        } else if (completed) {
            bgGradient = 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)'; // Green for submitted
            borderColor = '#4caf50';
        } else {
            bgGradient = 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)'; // Gray for not started
            borderColor = '#bdbdbd';
        }

        const card = document.createElement('div');
        card.style.cssText = `
            background: ${bgGradient};
            padding: 20px;
            border-radius: 10px;
            margin: 15px 0;
            cursor: pointer;
            border: 2px solid ${borderColor};
            transition: all 0.3s;
        `;
        
        card.onmouseover = () => card.style.transform = 'translateX(5px)';
        card.onmouseout = () => card.style.transform = 'translateX(0)';
        card.onclick = () => startWritingPrompt(level, index);
        
        // Determine status icon and text
        let statusIcon, statusText, statusColor;
        if (isDraft) {
            statusIcon = '💾';
            statusText = 'Saved';
            statusColor = '#ff9800';
        } else if (completed) {
            statusIcon = '✅';
            statusText = 'Done';
            statusColor = '#4caf50';
        } else {
            statusIcon = '⭕';
            statusText = '';
            statusColor = '';
        }

        card.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: space-between;">
                <div style="flex: 1;">
                    <div style="font-size: 1.1em; font-weight: bold; color: #333; margin-bottom: 5px;">
                        ${statusIcon} ${index + 1}. ${prompt.title}
                    </div>
                    <div style="color: #666; font-size: 0.9em; margin-bottom: 5px;">
                        ${prompt.minChars}-${prompt.maxChars} characters
                    </div>
                    <div style="color: #999; font-size: 0.85em; font-style: italic;">
                        ${prompt.prompt.substring(0, 80)}...
                    </div>
                </div>
                <div style="text-align: right;">
                    ${completed ? `
                        <div style="font-size: 1.3em; font-weight: bold; color: ${statusColor};">${statusText}</div>
                        <div style="color: #666; font-size: 0.9em; margin-top: 3px;">${wordCount} words</div>
                    ` : ''}
                    <div style="color: #666; font-size: 0.85em; margin-top: 5px;">
                        ${completed ? 'Click to edit' : 'Click to start'}
                    </div>
                </div>
            </div>
        `;
        
        listContainer.appendChild(card);
    });
    
    // Update stats
    loadWritingStats();
}

// Start writing prompt
function startWritingPrompt(level, index) {
    console.log('=== Starting writing prompt', index + 1, '===');
    console.log('Level:', level, 'Index:', index);
    
    currentWritingLevel = level;
    currentWritingPromptIndex = index;
    
    // Check if elements exist
    const listContainer = document.getElementById('writing-prompt-list-container');
    const contentContainer = document.getElementById('writing-content');
    
    console.log('List container:', listContainer ? 'FOUND' : 'NOT FOUND');
    console.log('Content container:', contentContainer ? 'FOUND' : 'NOT FOUND');
    
    if (!listContainer || !contentContainer) {
        console.error('ERROR: Required containers not found!');
        alert('Error: Writing containers not found. Please refresh the page.');
        return;
    }
    
    // Hide list, show content
    console.log('Hiding list container...');
    listContainer.style.display = 'none';
    
    console.log('Showing content container...');
    contentContainer.style.display = 'block';
    
    console.log('Calling loadWritingPrompt...');
    loadWritingPrompt();
}

// Load writing prompt
function loadWritingPrompt() {
    console.log('>>> loadWritingPrompt FUNCTION ENTERED <<<');
    try {
        console.log('loadWritingPrompt called');
        console.log('currentWritingLevel:', currentWritingLevel);
        console.log('currentWritingPromptIndex:', currentWritingPromptIndex);
        console.log('writingPrompts exists:', typeof writingPrompts !== 'undefined');
        
        if (typeof writingPrompts === 'undefined') {
            console.error('ERROR: writingPrompts is undefined!');
            alert('Error: Writing prompts data not loaded');
            return;
        }
        
        if (!writingPrompts[currentWritingLevel]) {
            console.error('ERROR: No prompts for level:', currentWritingLevel);
            alert('Error: Invalid writing level');
            return;
        }
        
        const prompt = writingPrompts[currentWritingLevel][currentWritingPromptIndex];
        
        if (!prompt) {
            console.error('ERROR: Prompt not found at index:', currentWritingPromptIndex);
            alert('Error: Prompt not found');
            return;
        }
        
        console.log('Loading prompt:', prompt.title);
        console.log('Current level:', currentWritingLevel, 'Index:', currentWritingPromptIndex);
    
    // Load saved response if exists
    const savedResponses = JSON.parse(localStorage.getItem('writingResponses') || '{}');
    const savedText = savedResponses[currentWritingLevel]?.[currentWritingPromptIndex]?.text || '';
    
    // Display prompt
    const container = document.getElementById('writing-content');
    if (!container) {
        console.error('writing-content container not found!');
        return;
    }
    
    console.log('Setting innerHTML for container...');
    container.style.display = 'block';
    container.innerHTML = `
        <div style="background: white; padding: 25px; border-radius: 15px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 15px;">
                <button onclick="backToWritingList()" class="go-button" style="background: #9e9e9e;">
                    ← Back to List
                </button>
            </div>
            
            <h2 style="color: #667eea; margin-bottom: 10px;">${prompt.title}</h2>
            
            <div style="background: #fff3e0; padding: 20px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #ff9800;">
                <div style="font-size: 1.1em; line-height: 1.6; margin-bottom: 10px;">
                    <strong>Prompt:</strong> ${prompt.prompt}
                </div>
                <div style="color: #666; font-size: 0.9em; margin-top: 10px;">
                    <strong>Minimum:</strong> ${prompt.minChars} characters | <strong>Maximum:</strong> ${prompt.maxChars} characters
                </div>
            </div>
            
            <div style="background: #e3f2fd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #2196f3;">
                <strong>💡 Tips:</strong> ${prompt.tips}
            </div>
            
            <textarea id="writing-textarea" placeholder="Type your response in Russian here..." 
                style="width: 100%; min-height: 400px; padding: 20px; border: 2px solid #667eea; border-radius: 10px; font-size: 1.1em; font-family: Arial, sans-serif; resize: vertical;">${savedText}</textarea>
            
            <div style="display: flex; justify-content: space-between; align-items: center; margin: 15px 0;">
                <div style="color: #666;">
                    <span style="font-weight: bold;">Characters:</span> <span id="char-count">${savedText.length}</span> / ${prompt.maxChars}
                    <span style="margin-left: 20px; font-weight: bold;">Words:</span> <span id="word-count">${savedText.split(/\s+/).filter(w => w.length > 0).length}</span>
                </div>
                <div>
                    <button onclick="saveDraft()" class="go-button" style="background: #ff9800; margin-right: 10px;">
                        💾 Save Draft
                    </button>
                    <button onclick="submitWritingResponse()" class="go-button" style="background: #4caf50;">
                        ✅ Submit Response
                    </button>
                </div>
            </div>
            
            <div id="writing-feedback" style="margin-top: 20px;"></div>
        </div>
    `;
    
    console.log('innerHTML set complete. Container display:', container.style.display);
    console.log('Container has content:', container.innerHTML.length, 'characters');
    
    
    // Character and word counter
    const textarea = document.getElementById('writing-textarea');
    if (textarea) {
        console.log('Textarea found, adding event listener');
        textarea.addEventListener('input', function() {
            const text = this.value;
            document.getElementById('char-count').textContent = text.length;
            const words = text.split(/\s+/).filter(w => w.length > 0).length;
            document.getElementById('word-count').textContent = words;
        });
    } else {
        console.error('writing-textarea not found after innerHTML set!');
    }
    
    } catch (error) {
        console.error('ERROR in loadWritingPrompt:', error);
        console.error('Stack:', error.stack);
        alert('Error loading writing prompt: ' + error.message);
    }
}

// Save draft
function saveDraft() {
    const text = document.getElementById('writing-textarea').value;
    const prompt = writingPrompts[currentWritingLevel][currentWritingPromptIndex];
    
    const savedResponses = JSON.parse(localStorage.getItem('writingResponses') || '{}');
    if (!savedResponses[currentWritingLevel]) savedResponses[currentWritingLevel] = {};
    
    savedResponses[currentWritingLevel][currentWritingPromptIndex] = {
        text: text,
        date: new Date().toLocaleDateString(),
        draft: true
    };
    
    localStorage.setItem('writingResponses', JSON.stringify(savedResponses));
    
    document.getElementById('writing-feedback').innerHTML = `
        <div style="background: #e3f2fd; padding: 15px; border-radius: 10px; border-left: 4px solid #2196f3;">
            💾 Draft saved successfully!
        </div>
    `;
    
    setTimeout(() => {
        document.getElementById('writing-feedback').innerHTML = '';
    }, 3000);
}

// Submit writing response
function submitWritingResponse() {
    const text = document.getElementById('writing-textarea').value;
    const prompt = writingPrompts[currentWritingLevel][currentWritingPromptIndex];
    
    if (text.length < prompt.minChars) {
        alert(`Response too short! Minimum ${prompt.minChars} characters required. You have ${text.length}.`);
        return;
    }
    
    if (text.length > prompt.maxChars) {
        alert(`Response too long! Maximum ${prompt.maxChars} characters allowed. You have ${text.length}.`);
        return;
    }
    
    // Save response
    const savedResponses = JSON.parse(localStorage.getItem('writingResponses') || '{}');
    if (!savedResponses[currentWritingLevel]) savedResponses[currentWritingLevel] = {};
    
    savedResponses[currentWritingLevel][currentWritingPromptIndex] = {
        text: text,
        date: new Date().toLocaleDateString(),
        draft: false,
        words: text.split(/\s+/).filter(w => w.length > 0).length
    };
    
    localStorage.setItem('writingResponses', JSON.stringify(savedResponses));
    console.log('Saved response:', savedResponses);
    
    // Show success message with email button
    document.getElementById('writing-feedback').innerHTML = `
        <div style="background: #e8f5e9; padding: 20px; border-radius: 10px; border-left: 4px solid #4caf50; text-align: center;">
            <div style="font-size: 1.5em; font-weight: bold; color: #4caf50; margin-bottom: 10px;">
                ✅ Response Submitted!
            </div>
            <div style="font-size: 1.1em; color: #666; margin-bottom: 15px;">
                ${text.split(/\s+/).filter(w => w.length > 0).length} words | ${text.length} characters
            </div>
            <button onclick="emailWritingResponse()" class="go-button" style="background: #2196f3; margin-right: 10px;">
                📧 Email to Parent
            </button>
            <button onclick="showWritingPromptList('${currentWritingLevel}')" class="go-button" style="margin-top: 10px;">
                ← Back to Prompt List
            </button>
        </div>
    `;

    // Scroll to feedback
    document.getElementById('writing-feedback').scrollIntoView({ behavior: 'smooth' });
}

// Back to writing list
function backToWritingList() {
    showWritingPromptList(currentWritingLevel);
}

// Load writing stats
function loadWritingStats() {
    const savedResponses = JSON.parse(localStorage.getItem('writingResponses') || '{}');
    console.log('Loading writing stats:', savedResponses);
    
    let totalCompleted = 0;
    let totalWords = 0;
    
    // Count completed responses across all levels
    for (let level in savedResponses) {
        const levelData = savedResponses[level];
        for (let promptIndex in levelData) {
            const response = levelData[promptIndex];
            if (!response.draft) {
                totalCompleted++;
                totalWords += response.words || 0;
            }
        }
    }
    
    console.log('Total completed:', totalCompleted, 'Total words:', totalWords);
    
    const completedEl = document.getElementById('writing-completed');
    const avgWordsEl = document.getElementById('writing-avg-words');
    
    if (totalCompleted > 0) {
        const avgWords = Math.round(totalWords / totalCompleted);
        
        console.log('Setting completed:', totalCompleted, 'avgWords:', avgWords);
        
        if (completedEl) completedEl.textContent = totalCompleted;
        if (avgWordsEl) avgWordsEl.textContent = avgWords;
    } else {
        console.log('No responses completed yet');
        if (completedEl) completedEl.textContent = '0';
        if (avgWordsEl) avgWordsEl.textContent = '0';
    }
}

// Email writing response
function emailWritingResponse() {
    const text = document.getElementById('writing-textarea').value;
    const prompt = writingPrompts[currentWritingLevel][currentWritingPromptIndex];

    // Show sending status
    const feedbackDiv = document.getElementById('writing-feedback');
    feedbackDiv.innerHTML = `
        <div style="background: #fff3e0; padding: 20px; border-radius: 10px; border-left: 4px solid #ff9800; text-align: center;">
            <div style="font-size: 1.2em; color: #666;">
                📧 Sending email...
            </div>
        </div>
    `;

    // Send email using EmailJS
    if (typeof sendWritingEmail === 'function') {
        sendWritingEmail(prompt.title, text, currentWritingLevel)
            .then(function() {
                feedbackDiv.innerHTML = `
                    <div style="background: #e8f5e9; padding: 20px; border-radius: 10px; border-left: 4px solid #4caf50; text-align: center;">
                        <div style="font-size: 1.5em; font-weight: bold; color: #4caf50; margin-bottom: 10px;">
                            ✅ Email Sent Successfully!
                        </div>
                        <div style="font-size: 1.1em; color: #666; margin-bottom: 15px;">
                            Your writing response has been emailed to your parent.
                        </div>
                        <button onclick="showWritingPromptList('${currentWritingLevel}')" class="go-button">
                            ← Back to Prompt List
                        </button>
                    </div>
                `;
            })
            .catch(function(error) {
                feedbackDiv.innerHTML = `
                    <div style="background: #ffebee; padding: 20px; border-radius: 10px; border-left: 4px solid #f44336; text-align: center;">
                        <div style="font-size: 1.2em; font-weight: bold; color: #f44336; margin-bottom: 10px;">
                            ❌ Email Failed
                        </div>
                        <div style="font-size: 1em; color: #666; margin-bottom: 15px;">
                            ${error === 'Not configured' ? 'Email is not set up yet. Please see email-config.js file.' : 'Could not send email. Please check your internet connection.'}
                        </div>
                        <button onclick="emailWritingResponse()" class="go-button" style="background: #2196f3; margin-right: 10px;">
                            🔄 Try Again
                        </button>
                        <button onclick="showWritingPromptList('${currentWritingLevel}')" class="go-button">
                            ← Back to Prompt List
                        </button>
                    </div>
                `;
            });
    } else {
        feedbackDiv.innerHTML = `
            <div style="background: #ffebee; padding: 20px; border-radius: 10px; border-left: 4px solid #f44336; text-align: center;">
                <div style="font-size: 1.2em; color: #666;">
                    Email feature not loaded. Please refresh the page.
                </div>
            </div>
        `;
    }
}
