// speaking.js - Speaking practice with voice recording

const speakingPrompts = {
    personal: [
        { ru: "Расскажите о своей семье", en: "Tell me about your family" },
        { ru: "Опишите свой дом", en: "Describe your home" },
        { ru: "Что вы любите делать в свободное время?", en: "What do you like to do in your free time?" },
        { ru: "Расскажите о своём лучшем друге", en: "Tell me about your best friend" },
        { ru: "Какие у вас хобби?", en: "What are your hobbies?" }
    ],
    school: [
        { ru: "Расскажите о своей школе", en: "Tell me about your school" },
        { ru: "Какой ваш любимый предмет?", en: "What's your favorite subject?" },
        { ru: "Опишите типичный школьный день", en: "Describe a typical school day" },
        { ru: "Расскажите о своём учителе", en: "Tell me about your teacher" },
        { ru: "Что вы изучаете в этом году?", en: "What are you studying this year?" }
    ],
    daily: [
        { ru: "Опишите ваш утренний распорядок", en: "Describe your morning routine" },
        { ru: "Что вы обычно делаете после школы?", en: "What do you usually do after school?" },
        { ru: "Расскажите о вашем любимом блюде", en: "Tell me about your favorite dish" },
        { ru: "Как вы проводите выходные?", en: "How do you spend your weekends?" },
        { ru: "Опишите ваш обычный день", en: "Describe your typical day" }
    ],
    opinion: [
        { ru: "Почему важно изучать языки?", en: "Why is it important to study languages?" },
        { ru: "Что вы думаете о социальных сетях?", en: "What do you think about social media?" },
        { ru: "Расскажите о вашей мечте", en: "Tell me about your dream" },
        { ru: "Какие качества важны в друге?", en: "What qualities are important in a friend?" },
        { ru: "Что вы думаете о спорте?", en: "What do you think about sports?" }
    ]
};

let currentPromptCategory = 'personal';
let currentPromptText = { ru: '', en: '' };
const SPEAKING_TIME_LIMIT = 180;
let speakingTimeLeft = SPEAKING_TIME_LIMIT;
let speakingTimerInterval = null;
let mediaRecorder = null;
let audioChunks = [];
let isRecording = false;
let recordingStartTime = 0;

// Initialize speaking practice
function initSpeaking() {
    setPromptCategory('personal');
    updateSpeakingTimer();
}

// Set prompt category
function setPromptCategory(category) {
    currentPromptCategory = category;
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[onclick="setPromptCategory('${category}')"]`)?.classList.add('active');
    nextPrompt();
}

// Get next random prompt
function nextPrompt() {
    const prompts = speakingPrompts[currentPromptCategory];
    const randomIndex = Math.floor(Math.random() * prompts.length);
    const prompt = prompts[randomIndex];

    // Store current prompt for email
    currentPromptText = { ru: prompt.ru, en: prompt.en };

    document.getElementById('russian-prompt').textContent = prompt.ru;
    document.getElementById('english-prompt').textContent = prompt.en;
}

// Start 180-second timer
function startSpeakingTimer() {
    speakingTimeLeft = SPEAKING_TIME_LIMIT;
    clearInterval(speakingTimerInterval);
    
    speakingTimerInterval = setInterval(() => {
        speakingTimeLeft--;
        updateSpeakingTimer();
        
        if (speakingTimeLeft <= 0) {
            stopSpeakingTimer();
        }
    }, 1000);
}

// Stop timer
function stopSpeakingTimer() {
    clearInterval(speakingTimerInterval);
    speakingTimeLeft = SPEAKING_TIME_LIMIT;
    updateSpeakingTimer();
}

// Update timer display
function updateSpeakingTimer() {
    const minutes = Math.floor(speakingTimeLeft / 60);
    const seconds = speakingTimeLeft % 60;
    const display = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('speaking-timer').textContent = display;
}

// Voice Recording Functions

// Start recording
async function startRecording() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        
        // Check supported MIME types
        let mimeType = 'audio/webm';
        if (MediaRecorder.isTypeSupported('audio/mp4')) {
            mimeType = 'audio/mp4';
        } else if (MediaRecorder.isTypeSupported('audio/wav')) {
            mimeType = 'audio/wav';
        }
        
        mediaRecorder = new MediaRecorder(stream, { mimeType });
        audioChunks = [];
        
        mediaRecorder.ondataavailable = (event) => {
            audioChunks.push(event.data);
        };
        
        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: mimeType });
            const audioUrl = URL.createObjectURL(audioBlob);

            // Calculate recording duration from start time
            const recordingDuration = Math.floor((Date.now() - recordingStartTime) / 1000);

            // Store for email function
            window.lastRecordingInfo = {
                blob: audioBlob,
                duration: recordingDuration,
                size: audioBlob.size,
                promptText: currentPromptText
            };

            // Show playback and download with email button
            document.getElementById('audio-playback').src = audioUrl;
            document.getElementById('playback-section').style.display = 'block';

            // Setup download
            const downloadBtn = document.getElementById('download-recording');
            downloadBtn.onclick = () => downloadRecording(audioBlob, mimeType);

            // Add email button if not exists
            let emailBtn = document.getElementById('email-recording');
            if (!emailBtn) {
                emailBtn = document.createElement('button');
                emailBtn.id = 'email-recording';
                emailBtn.className = 'go-button';
                emailBtn.style.cssText = 'margin-top: 10px; margin-left: 10px; background: #2196f3;';
                emailBtn.innerHTML = '📧 Email to Parent';
                emailBtn.onclick = emailSpeakingRecording;
                document.getElementById('playback-section').appendChild(emailBtn);
            }
        };
        
        mediaRecorder.start();
        isRecording = true;
        recordingStartTime = Date.now(); // Track start time

        // Auto-start timer
        startSpeakingTimer();
        
        // Update UI
        document.getElementById('start-recording').style.display = 'none';
        document.getElementById('stop-recording').style.display = 'inline-block';
        document.getElementById('recording-status').textContent = '🔴 Recording...';
        
    } catch (error) {
        alert('Microphone access denied. Please allow microphone access to record.');
        console.error('Recording error:', error);
    }
}

// Stop recording
function stopRecording() {
    if (mediaRecorder && isRecording) {
        mediaRecorder.stop();
        mediaRecorder.stream.getTracks().forEach(track => track.stop());
        isRecording = false;
        
        // Auto-stop timer
        stopSpeakingTimer();
        
        // Update UI
        document.getElementById('start-recording').style.display = 'inline-block';
        document.getElementById('stop-recording').style.display = 'none';
        document.getElementById('recording-status').textContent = '';
    }
}

// Download recording
function downloadRecording(blob, mimeType) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    
    // Determine file extension
    let extension = 'webm';
    if (mimeType.includes('mp4')) extension = 'm4a';
    else if (mimeType.includes('wav')) extension = 'wav';
    
    a.download = `russian-practice-${Date.now()}.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Email speaking recording
function emailSpeakingRecording() {
    if (!window.lastRecordingInfo) {
        alert('No recording found. Please record first.');
        return;
    }

    const recordingInfo = window.lastRecordingInfo;
    const promptText = recordingInfo.promptText.ru + ' / ' + recordingInfo.promptText.en;

    // Show sending status in playback section
    const playbackSection = document.getElementById('playback-section');
    const emailBtn = document.getElementById('email-recording');

    emailBtn.disabled = true;
    emailBtn.innerHTML = '📧 Uploading & Sending...';

    // Send email with audio file via Cloudinary
    if (typeof sendSpeakingEmailWithAudio === 'function') {
        sendSpeakingEmailWithAudio(promptText, recordingInfo.duration, recordingInfo.blob)
            .then(function() {
                emailBtn.innerHTML = '✅ Email Sent!';
                emailBtn.style.background = '#4caf50';
                setTimeout(function() {
                    emailBtn.disabled = false;
                    emailBtn.innerHTML = '📧 Email to Parent';
                    emailBtn.style.background = '#2196f3';
                }, 3000);
            })
            .catch(function(error) {
                emailBtn.disabled = false;
                emailBtn.innerHTML = '❌ Failed - Try Again';
                emailBtn.style.background = '#f44336';
                setTimeout(function() {
                    emailBtn.innerHTML = '📧 Email to Parent';
                    emailBtn.style.background = '#2196f3';
                }, 3000);

                if (error.message === 'Not configured') {
                    alert('Cloudinary or Email is not set up yet. Please see email-config.js and CLOUDINARY-SETUP-INSTRUCTIONS.md for setup.');
                } else {
                    alert('Failed to upload or send email: ' + error.message + '\n\nPlease check your internet connection and configuration.');
                }
            });
    } else {
        emailBtn.disabled = false;
        emailBtn.innerHTML = '📧 Email to Parent';
        alert('Email feature not loaded. Please refresh the page.');
    }
}
