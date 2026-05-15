// phrases.js - Essential Russian Phrases

const phrasesData = {
    essential: [
        { ru: 'Здравствуйте', en: 'Hello (formal)' },
        { ru: 'Привет', en: 'Hi (informal)' },
        { ru: 'До свидания', en: 'Goodbye' },
        { ru: 'Пока', en: 'Bye (informal)' },
        { ru: 'Спасибо', en: 'Thank you' },
        { ru: 'Пожалуйста', en: 'You\'re welcome / Please' },
        { ru: 'Извините', en: 'Excuse me / Sorry' },
        { ru: 'Как дела?', en: 'How are you?' },
        { ru: 'Хорошо', en: 'Good/Fine' },
        { ru: 'Плохо', en: 'Bad' }
    ],
    formal: [
        { ru: 'Я хотел(а) бы рассказать о...', en: 'I would like to tell about...' },
        { ru: 'Во-первых', en: 'Firstly' },
        { ru: 'Во-вторых', en: 'Secondly' },
        { ru: 'Однако', en: 'However' },
        { ru: 'Поэтому', en: 'Therefore' },
        { ru: 'В заключение', en: 'In conclusion' },
        { ru: 'С одной стороны', en: 'On one hand' },
        { ru: 'С другой стороны', en: 'On the other hand' },
        { ru: 'По моему мнению', en: 'In my opinion' },
        { ru: 'Я считаю, что', en: 'I believe that' }
    ],
    questions: [
        { ru: 'Как тебя зовут?', en: 'What is your name?' },
        { ru: 'Сколько тебе лет?', en: 'How old are you?' },
        { ru: 'Откуда ты?', en: 'Where are you from?' },
        { ru: 'Где ты живёшь?', en: 'Where do you live?' },
        { ru: 'Что ты делаешь?', en: 'What do you do?' },
        { ru: 'Почему?', en: 'Why?' },
        { ru: 'Когда?', en: 'When?' },
        { ru: 'Где?', en: 'Where?' },
        { ru: 'Как?', en: 'How?' },
        { ru: 'Сколько?', en: 'How much/many?' }
    ]
};

// Function to display phrases
function displayPhrases(category) {
    const container = document.getElementById('phrases-container');
    const phrases = phrasesData[category] || [];
    
    container.innerHTML = '';
    phrases.forEach(phrase => {
        const card = document.createElement('div');
        card.style.cssText = 'background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%); padding: 20px; border-radius: 10px; border-left: 4px solid #ff9800; margin: 15px 0;';
        card.innerHTML = `
            <div style="font-size: 1.3em; font-weight: bold; color: #e65100; margin-bottom: 8px;">${phrase.ru}</div>
            <div style="font-size: 1.1em; color: #666;">${phrase.en}</div>
        `;
        container.appendChild(card);
    });
}
