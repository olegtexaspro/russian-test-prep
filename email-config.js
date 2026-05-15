// email-config.js - EmailJS Integration

// ===== SETUP INSTRUCTIONS =====
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add your email service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{student_name}} - Student name
//    - {{module_name}} - Writing or Speaking
//    - {{prompt_title}} - Prompt title
//    - {{content}} - The actual text or recording info
//    - {{date}} - Date submitted
// 4. Copy your keys below:

const EMAIL_CONFIG = {
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE',    // From EmailJS Account page
    SERVICE_ID: 'YOUR_SERVICE_ID_HERE',    // From EmailJS Services page
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID_HERE',  // From EmailJS Templates page
    STUDENT_NAME: 'Student Name',          // Change to actual student name
    PARENT_EMAIL: 'parent@example.com'     // Change to parent's email
};

// ===== CLOUDINARY SETUP FOR AUDIO FILES =====
// See CLOUDINARY-SETUP-INSTRUCTIONS.md for detailed setup steps
const CLOUDINARY_CONFIG = {
    CLOUD_NAME: 'YOUR_CLOUD_NAME_HERE',     // From Cloudinary Dashboard
    UPLOAD_PRESET: 'YOUR_UPLOAD_PRESET_HERE' // Create in Settings > Upload (Unsigned mode)
};

// Initialize EmailJS
function initEmailJS() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
        console.log('EmailJS initialized');
    } else {
        console.warn('EmailJS not loaded');
    }
}

// Send email with text content (for Writing)
function sendWritingEmail(promptTitle, textContent, level) {
    // Check if configured
    if (EMAIL_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE') {
        console.warn('EmailJS not configured. Please update email-config.js with your API keys.');
        alert('Email feature not configured yet. Please see email-config.js for setup instructions.');
        return Promise.reject('Not configured');
    }

    const templateParams = {
        to_email: EMAIL_CONFIG.PARENT_EMAIL,
        student_name: EMAIL_CONFIG.STUDENT_NAME,
        module_name: 'Writing Practice',
        prompt_title: promptTitle + ' (' + level + ')',
        content: textContent,
        word_count: textContent.split(/\s+/).filter(w => w.length > 0).length,
        char_count: textContent.length,
        date: new Date().toLocaleString()
    };

    return emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams
    ).then(function(response) {
        console.log('Email sent successfully!', response.status, response.text);
        return response;
    }).catch(function(error) {
        console.error('Failed to send email:', error);
        throw error;
    });
}

// Send email with recording info (for Speaking)
function sendSpeakingEmail(promptTitle, recordingDuration, recordingSize) {
    // Check if configured
    if (EMAIL_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE') {
        console.warn('EmailJS not configured. Please update email-config.js with your API keys.');
        alert('Email feature not configured yet. Please see email-config.js for setup instructions.');
        return Promise.reject('Not configured');
    }

    const minutes = Math.floor(recordingDuration / 60);
    const seconds = Math.floor(recordingDuration % 60);
    const sizeKB = (recordingSize / 1024).toFixed(2);

    const content = `Recording Details:
Duration: ${minutes}:${seconds.toString().padStart(2, '0')}
File Size: ${sizeKB} KB

Note: The actual audio recording has been saved on the student's device.
Please ask them to share the downloaded file with you.`;

    const templateParams = {
        to_email: EMAIL_CONFIG.PARENT_EMAIL,
        student_name: EMAIL_CONFIG.STUDENT_NAME,
        module_name: 'Speaking Practice',
        prompt_title: promptTitle,
        content: content,
        date: new Date().toLocaleString()
    };

    return emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams
    ).then(function(response) {
        console.log('Email sent successfully!', response.status, response.text);
        return response;
    }).catch(function(error) {
        console.error('Failed to send email:', error);
        throw error;
    });
}

// Upload audio file to Cloudinary and get shareable link
async function uploadToCloudinary(audioBlob, filename) {
    // Check if configured
    if (CLOUDINARY_CONFIG.CLOUD_NAME === 'YOUR_CLOUD_NAME_HERE') {
        console.warn('Cloudinary not configured. Please update email-config.js with your cloud name and upload preset.');
        throw new Error('Not configured');
    }

    try {
        // Create FormData for file upload
        const formData = new FormData();
        formData.append('file', audioBlob);
        formData.append('upload_preset', CLOUDINARY_CONFIG.UPLOAD_PRESET);
        formData.append('resource_type', 'video'); // WebM is video format

        // Upload to Cloudinary
        const uploadUrl = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.CLOUD_NAME}/upload`;

        console.log('Uploading to Cloudinary...');
        const uploadResponse = await fetch(uploadUrl, {
            method: 'POST',
            body: formData
        });

        const uploadData = await uploadResponse.json();

        if (!uploadData.secure_url) {
            throw new Error('Cloudinary upload failed: ' + (uploadData.error?.message || 'Unknown error'));
        }

        console.log('Upload successful!');
        console.log('Public URL:', uploadData.secure_url);

        return {
            downloadLink: uploadData.secure_url,
            publicId: uploadData.public_id,
            filename: filename,
            size: uploadData.bytes
        };

    } catch (error) {
        console.error('Cloudinary upload error:', error);
        throw error;
    }
}

// Send email with Cloudinary audio link (for Speaking)
async function sendSpeakingEmailWithAudio(promptTitle, recordingDuration, audioBlob) {
    // Check if email configured
    if (EMAIL_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE') {
        console.warn('EmailJS not configured.');
        alert('Email feature not configured yet. Please see email-config.js for setup instructions.');
        throw new Error('Not configured');
    }

    try {
        // Generate filename
        const timestamp = Date.now();
        const filename = `student-russian-speaking-${timestamp}.webm`;

        // Upload to Cloudinary
        console.log('Uploading audio file to Cloudinary...');
        const uploadResult = await uploadToCloudinary(audioBlob, filename);

        // Prepare email content with download link
        const minutes = Math.floor(recordingDuration / 60);
        const seconds = Math.floor(recordingDuration % 60);
        const sizeKB = (uploadResult.size / 1024).toFixed(2);

        const content = `Recording Details:
Duration: ${minutes}:${seconds.toString().padStart(2, '0')}
File Size: ${sizeKB} KB

🎧 LISTEN TO RECORDING:
${uploadResult.downloadLink}

Click the link above to download and listen to the audio recording.`;

        const templateParams = {
            to_email: EMAIL_CONFIG.PARENT_EMAIL,
            student_name: EMAIL_CONFIG.STUDENT_NAME,
            module_name: 'Speaking Practice',
            prompt_title: promptTitle,
            content: content,
            date: new Date().toLocaleString()
        };

        // Send email
        console.log('Sending email with audio link...');
        const response = await emailjs.send(
            EMAIL_CONFIG.SERVICE_ID,
            EMAIL_CONFIG.TEMPLATE_ID,
            templateParams
        );

        console.log('Email sent successfully with audio link!');
        return response;

    } catch (error) {
        console.error('Failed to send email with audio:', error);
        throw error;
    }
}

// Send Mock Test Results with all Writing texts and Speaking audio links
async function sendMockTestResults(mockTestResults) {
    // Check if configured
    if (EMAIL_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE') {
        console.warn('EmailJS not configured.');
        alert('Email feature not configured yet. Please see email-config.js for setup instructions.');
        throw new Error('Not configured');
    }

    try {
        // Upload all speaking audio files to Cloudinary
        console.log('Uploading speaking recordings to Cloudinary...');
        const speakingLinks = [];
        for (let i = 0; i < mockTestResults.speaking.length; i++) {
            const item = mockTestResults.speaking[i];
            if (item.audioBlob) {
                const timestamp = Date.now();
                const filename = `student-mocktest-speaking-${i + 1}-${timestamp}.webm`;
                const uploadResult = await uploadToCloudinary(item.audioBlob, filename);
                speakingLinks.push({
                    prompt: item.prompt,
                    duration: item.duration,
                    link: uploadResult.downloadLink
                });
            }
        }

        // Build email content
        const readingAccuracy = mockTestResults.reading.total > 0 ?
            (mockTestResults.reading.correct / mockTestResults.reading.total) * 100 : 0;
        const listeningAccuracy = mockTestResults.listening.total > 0 ?
            (mockTestResults.listening.correct / mockTestResults.listening.total) * 100 : 0;

        let emailContent = `📊 MOCK TEST RESULTS\n\n`;
        emailContent += `📖 Reading Section:\n`;
        emailContent += `Score: ${mockTestResults.reading.correct}/${mockTestResults.reading.total} (${readingAccuracy.toFixed(0)}%)\n`;
        emailContent += `Level: ${mockTestResults.reading.tier}\n`;
        emailContent += `Time: ${Math.floor(mockTestResults.reading.time / 60)}:${(mockTestResults.reading.time % 60).toString().padStart(2, '0')}\n\n`;

        emailContent += `🎧 Listening Section:\n`;
        emailContent += `Score: ${mockTestResults.listening.correct}/${mockTestResults.listening.total} (${listeningAccuracy.toFixed(0)}%)\n`;
        emailContent += `Level: ${mockTestResults.listening.tier}\n`;
        emailContent += `Time: ${Math.floor(mockTestResults.listening.time / 60)}:${(mockTestResults.listening.time % 60).toString().padStart(2, '0')}\n\n`;

        emailContent += `✍️ Writing Section (${mockTestResults.writing.length} prompts):\n\n`;
        mockTestResults.writing.forEach((item, index) => {
            emailContent += `Prompt ${index + 1}: ${item.prompt}\n`;
            emailContent += `Response (${item.length} characters):\n${item.response}\n\n`;
            emailContent += `---\n\n`;
        });

        emailContent += `🎤 Speaking Section (${speakingLinks.length} recordings):\n\n`;
        speakingLinks.forEach((item, index) => {
            const minutes = Math.floor(item.duration / 60);
            const seconds = item.duration % 60;
            emailContent += `Recording ${index + 1}: ${item.prompt}\n`;
            emailContent += `Duration: ${minutes}:${seconds.toString().padStart(2, '0')}\n`;
            emailContent += `🎧 Listen: ${item.link}\n\n`;
        });

        const templateParams = {
            to_email: EMAIL_CONFIG.PARENT_EMAIL,
            student_name: EMAIL_CONFIG.STUDENT_NAME,
            module_name: '🎯 STAMP Russian Mock Test',
            prompt_title: `Complete Test Results - ${new Date().toLocaleDateString()}`,
            content: emailContent,
            date: new Date().toLocaleString()
        };

        // Send email
        console.log('Sending mock test results email...');
        const response = await emailjs.send(
            EMAIL_CONFIG.SERVICE_ID,
            EMAIL_CONFIG.TEMPLATE_ID,
            templateParams
        );

        console.log('Mock test results email sent successfully!');
        return response;

    } catch (error) {
        console.error('Failed to send mock test results:', error);
        throw error;
    }
}

// Initialize on page load
if (typeof emailjs !== 'undefined') {
    initEmailJS();
}
