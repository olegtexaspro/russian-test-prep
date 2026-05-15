// weeks-content.js - 12-week STAMP Russian test prep curriculum (generic)

const weeksData = {
    'week1': {
        title: 'Weeks 1-2: Foundation & Confidence Building',
        icon: '🚀',
        weeks: [
            {
                weekNumber: 1,
                monWedFri: [
                    { time: '5 min', task: 'Typing practice - build speed with Russian keyboard', link: '#typing' },
                    { time: '5 min', task: 'Vocabulary flashcards - review Essential and Verbs categories', link: '#vocab' },
                    { time: '10 min', task: 'Reading practice - Novice level passages', link: '#reading' },
                    { time: '10 min', task: 'Drills — Spelling practice (Week 1-2 words)', link: '#personal-drills' }
                ],
                tueThu: [
                    { time: '10 min', task: 'Listening practice - Novice level exercises', link: '#listening' },
                    { time: '10 min', task: 'Speaking practice - record a response to any prompt', link: '#speaking' },
                    { time: '10 min', task: 'Drills — Replace English words + Agreement practice', link: '#personal-drills' }
                ]
            },
            {
                weekNumber: 2,
                monWedFri: [
                    { time: '5 min', task: 'Typing speed test - try to beat your best WPM', link: '#typing' },
                    { time: '10 min', task: 'Writing practice - pick a Novice prompt and write a response', link: '#writing' },
                    { time: '5 min', task: 'Reading practice - try Intermediate level passages', link: '#reading' },
                    { time: '10 min', task: 'Drills — Spelling practice (Week 1-2 words)', link: '#personal-drills' }
                ],
                tueThu: [
                    { time: '10 min', task: 'Listening practice - Intermediate level exercises', link: '#listening' },
                    { time: '10 min', task: 'Grammar practice - focus on noun cases', link: '#grammar' },
                    { time: '10 min', task: 'Drills — Replace English words + Agreement practice', link: '#personal-drills' }
                ]
            }
        ]
    },
    'week3': {
        title: 'Weeks 3-4: Intermediate Skills & Writing',
        icon: '✏️',
        weeks: [
            {
                weekNumber: 3,
                monWedFri: [
                    { time: '10 min', task: 'Reading practice - Intermediate level passages', link: '#reading' },
                    { time: '5 min', task: 'Writing practice - pick an Intermediate prompt', link: '#writing' },
                    { time: '5 min', task: 'Grammar practice - verb conjugation questions', link: '#grammar' },
                    { time: '10 min', task: 'Drills — Spelling practice (Week 3-4 words) + Unstressed vowels', link: '#personal-drills' }
                ],
                tueThu: [
                    { time: '10 min', task: 'Listening practice - Intermediate level exercises', link: '#listening' },
                    { time: '10 min', task: 'Speaking practice - record 3-minute responses on any topic', link: '#speaking' },
                    { time: '10 min', task: 'Drills — Agreement practice (case endings)', link: '#personal-drills' }
                ]
            },
            {
                weekNumber: 4,
                monWedFri: [
                    { time: '10 min', task: 'Writing practice - Intermediate prompt, use connectors (потому что, однако, кроме того)', link: '#writing' },
                    { time: '5 min', task: 'Reading practice - Intermediate level with timer', link: '#reading' },
                    { time: '5 min', task: 'Vocabulary review - formal and academic words (Intermediate level)', link: '#vocab' },
                    { time: '10 min', task: 'Drills — Spelling practice (Week 3-4 words) + Unstressed vowels', link: '#personal-drills' }
                ],
                tueThu: [
                    { time: '10 min', task: 'Speaking practice - opinion and academic topics', link: '#speaking' },
                    { time: '10 min', task: 'Listening practice - Intermediate level exercises', link: '#listening' },
                    { time: '10 min', task: 'Drills — Agreement practice (case endings)', link: '#personal-drills' }
                ]
            }
        ]
    },
    'week5': {
        title: 'Weeks 5-6: Advanced Skills',
        icon: '🎓',
        weeks: [
            {
                weekNumber: 5,
                monWedFri: [
                    { time: '10 min', task: 'Reading practice - Challenge (Advanced) level passages', link: '#reading' },
                    { time: '10 min', task: 'Writing practice - Intermediate prompt with formal connectors (несмотря на, однако, поэтому)', link: '#writing' },
                    { time: '5 min', task: 'Vocabulary - review academic and society categories', link: '#vocab' },
                    { time: '5 min', task: 'Drills — Unstressed vowels + Spelling deep practice', link: '#personal-drills' }
                ],
                tueThu: [
                    { time: '10 min', task: 'Listening practice - Challenge (Advanced) level', link: '#listening' },
                    { time: '10 min', task: 'Speaking practice - opinion topics, full 3-minute responses', link: '#speaking' },
                    { time: '10 min', task: 'Grammar - verb aspect (perfective vs imperfective) and verbs of motion', link: '#grammar' }
                ]
            },
            {
                weekNumber: 6,
                monWedFri: [
                    { time: '10 min', task: 'Reading practice - Challenge level with timer', link: '#reading' },
                    { time: '10 min', task: 'Writing practice - longer Intermediate response (200+ words)', link: '#writing' },
                    { time: '5 min', task: 'Speaking practice - academic topics', link: '#speaking' },
                    { time: '5 min', task: 'Drills — Agreement practice (case endings)', link: '#personal-drills' }
                ],
                tueThu: [
                    { time: '10 min', task: 'Listening practice - Challenge level, try without using transcript', link: '#listening' },
                    { time: '10 min', task: 'Grammar - deep dive on tricky cases (genitive plural, instrumental)', link: '#grammar' },
                    { time: '10 min', task: 'Vocabulary - Connectors category (formal connectors)', link: '#vocab' }
                ]
            }
        ]
    },
    'week7': {
        title: 'Week 7: Mock Test #1 + Diagnostics',
        icon: '🎯',
        weeks: [
            {
                weekNumber: 7,
                monWedFri: [
                    { time: '60 min', task: 'Monday: Take the full Mock Test #1 (all 4 sections)', link: '#mocktest' },
                    { time: '30 min', task: 'Wed & Fri: Practice your weakest skill from Mock Test #1', link: '#reading' },
                    { time: '10 min', task: 'Drills — Focus on areas Mock Test exposed', link: '#personal-drills' }
                ],
                tueThu: [
                    { time: '15 min', task: 'Light practice on second-weakest skill', link: '#listening' },
                    { time: '10 min', task: 'Speaking practice - 3-minute response on any topic', link: '#speaking' },
                    { time: '10 min', task: 'Drills — Continue weak-area drilling', link: '#personal-drills' }
                ]
            }
        ]
    },
    'week8': {
        title: 'Weeks 8-9: Targeted Improvement',
        icon: '💪',
        weeks: [
            {
                weekNumber: 8,
                monWedFri: [
                    { time: '15 min', task: 'Focus on your weakest skill from Mock Test #1', link: '#reading' },
                    { time: '10 min', task: 'Vocabulary - advanced words and connectors', link: '#vocab' },
                    { time: '10 min', task: 'Drills — Targeted practice on weak items', link: '#personal-drills' }
                ],
                tueThu: [
                    { time: '15 min', task: 'Continue weakest skill (different exercises)', link: '#listening' },
                    { time: '10 min', task: 'Grammar - any topic missed on Mock Test', link: '#grammar' },
                    { time: '10 min', task: 'Speaking practice - opinion topics', link: '#speaking' }
                ]
            },
            {
                weekNumber: 9,
                monWedFri: [
                    { time: '10 min', task: 'Continue weakest skill', link: '#reading' },
                    { time: '10 min', task: 'Writing practice - use formal connectors and longer sentences', link: '#writing' },
                    { time: '5 min', task: 'Vocabulary - keep reviewing weak categories', link: '#vocab' },
                    { time: '5 min', task: 'Drills — Final patch on problem areas', link: '#personal-drills' }
                ],
                tueThu: [
                    { time: '10 min', task: 'Listening practice - Intermediate or Challenge level', link: '#listening' },
                    { time: '10 min', task: 'Speaking practice - 3-minute responses', link: '#speaking' },
                    { time: '10 min', task: 'Grammar review - cases + verb aspect', link: '#grammar' }
                ]
            }
        ]
    },
    'week10': {
        title: 'Weeks 10-11: Polish + Mock Test #2',
        icon: '✨',
        weeks: [
            {
                weekNumber: 10,
                monWedFri: [
                    { time: '10 min', task: 'Speaking practice - daily 3-minute responses (build fluency)', link: '#speaking' },
                    { time: '15 min', task: 'Writing practice - long responses with formal connectors', link: '#writing' },
                    { time: '5 min', task: 'Drills — Light review of all problem areas', link: '#personal-drills' }
                ],
                tueThu: [
                    { time: '10 min', task: 'Listening practice - Intermediate level (comfort + fluency)', link: '#listening' },
                    { time: '10 min', task: 'Grammar quick review (10 questions)', link: '#grammar' },
                    { time: '10 min', task: 'Vocabulary - browse all categories for recognition', link: '#vocab' }
                ]
            },
            {
                weekNumber: 11,
                monWedFri: [
                    { time: '60 min', task: 'Monday: Take the full Mock Test #2 (all 4 sections)', link: '#mocktest' },
                    { time: '20 min', task: 'Wed: Review Mock Test #2 results, patch any weak area', link: '#reading' },
                    { time: '20 min', task: 'Fri: Continue patching - prioritize quick wins', link: '#listening' }
                ],
                tueThu: [
                    { time: '10 min', task: 'Speaking practice - confidence-building short answers', link: '#speaking' },
                    { time: '10 min', task: 'Listening practice - light, comfortable level', link: '#listening' },
                    { time: '10 min', task: 'Vocabulary - review highest-frequency words', link: '#vocab' }
                ]
            }
        ]
    },
    'week12': {
        title: 'Week 12: Final Review (Test Week Taper)',
        icon: '🏆',
        weeks: [
            {
                weekNumber: 12,
                monWedFri: [
                    { time: '5 min', task: 'Equipment check (do this early in the week so there\'s time to fix any issues): microphone, headset, Russian keyboard, browser audio working' },
                    { time: '5 min', task: 'Browse vocabulary - all categories, recognition only (no memorizing)', link: '#vocab' },
                    { time: '5 min', task: 'Drills — quick review of problem words only', link: '#personal-drills' },
                    { time: '10 min', task: 'Re-read favorite Reading passages OR re-listen to best Listening exercises', link: '#reading' }
                ],
                tueThu: [
                    { time: '5 min', task: 'Phrases (in Vocabulary tab) - formal connectors review', link: '#vocab' },
                    { time: '10 min', task: 'Speaking - light warm-up answer; build confidence by re-recording your best one', link: '#speaking' },
                    { time: '5 min', task: 'Vocabulary - Connectors category', link: '#vocab' }
                ]
            }
        ]
    }
};

// Resources data
const resourcesData = [
    { icon: '🎯', title: 'STAMP Sample Tests', url: 'https://www.avantassessment.com/sample-tests', desc: 'Official STAMP Russian sample questions' },
    { icon: '📖', title: 'Lingua Reading', url: 'https://lingua.com/russian/reading/', desc: 'Level A2-B2 reading practice with audio' },
    { icon: '📚', title: 'The Fable Cottage', url: 'https://www.thefablecottage.com/languages/russian', desc: 'Bilingual children\'s stories with audio' },
    { icon: '🎓', title: 'PetraLingua', url: 'https://www.petralingua.com/foreign-languages/online-russian-for-kids.php', desc: 'Russian videos, songs, games for kids' },
    { icon: '📝', title: 'Russian for Free', url: 'https://www.russianforfree.com/texts.php', desc: 'Texts with audio and vocabulary lists' },
    { icon: '📖', title: 'Pa-Russki Stories', url: 'https://pa-russki.com/stories-and-novels/russian-short-stories-on-line/', desc: 'Short stories for all levels' },
    { icon: '🎬', title: 'Easy Russian YouTube', url: 'https://www.youtube.com/@EasyRussianVideos', desc: 'Street interviews with Russian subtitles' },
    { icon: '⌨️', title: 'Russian Keyboard Setup', url: 'https://support.microsoft.com/en-us/windows/how-to-set-up-and-use-languages-in-windows-cca5b553-7d28-9fb5-8a56-e8b16e3f9f4a', desc: 'Windows Russian keyboard installation guide' }
];

// Generate HTML for weeks
function renderWeeks() {
    const container = document.getElementById('weeks-container');

    for (const [key, data] of Object.entries(weeksData)) {
        const weekDiv = document.createElement('div');
        weekDiv.className = 'week-content';
        weekDiv.id = key;

        let html = `<div class="week-title">
            <span>${data.icon}</span>
            <span>${data.title}</span>
        </div>`;

        data.weeks.forEach(week => {
            html += `<h3>Week ${week.weekNumber}</h3>`;

            if (week.monWedFri) {
                html += generateDaySection('Monday, Wednesday, Friday', week.monWedFri, week.weekNumber, ['mon', 'wed', 'fri']);
            }
            if (week.tueThu) {
                html += generateDaySection('Tuesday, Thursday', week.tueThu, week.weekNumber, ['tue', 'thu']);
            }
            if (week.everyday) {
                html += generateDaySection('Every Day', week.everyday, week.weekNumber, ['mon', 'tue', 'wed', 'thu', 'fri']);
            }
        });

        weekDiv.innerHTML = html;
        container.appendChild(weekDiv);
    }
}

// Generate day section HTML
function generateDaySection(title, tasks, weekNum, days) {
    let html = `<div class="day-section">
        <div class="day-title">${title}</div>`;

    tasks.forEach((task, index) => {
        const taskId = `w${weekNum}-task${index}`;
        html += `<div class="task-item">
            <div class="checkbox-group">`;

        days.forEach(day => {
            html += `<div class="day-check">
                <input type="checkbox" class="task-checkbox" id="${taskId}-${day}" onchange="updateProgress()">
                <span class="day-label">${day.toUpperCase()}</span>
            </div>`;
        });

        html += `</div>
            <div class="task-content">
                <span class="time-label">${task.time}</span>`;

        if (task.link) {
            if (task.link.startsWith('#')) {
                const tabName = task.link.substring(1);
                html += `<a href="javascript:void(0)" onclick="showWeek('${tabName}')">${task.task}</a>`;
            } else {
                html += `<a href="${task.link}" target="_blank">${task.task}</a>`;
            }
        } else {
            html += task.task;
        }

        html += `</div>
        </div>`;
    });

    html += `</div>`;
    return html;
}
