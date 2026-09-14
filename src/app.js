const { course } = window;

const progressKey = 'full-stack-ai-learning-progress';
const themeKey = 'full-stack-ai-theme';
const progress = JSON.parse(localStorage.getItem(progressKey) || '{}');
const nav = document.querySelector('#course-nav');
const lessonView = document.querySelector('#lesson-view');
const welcomeView = document.querySelector('#welcome-view');
const searchView = document.querySelector('#search-view');
const searchInput = document.querySelector('#search-input');

function saveProgress() {
    localStorage.setItem(progressKey, JSON.stringify(progress));
    updateProgress();
}

function updateProgress() {
    const total = course.sections.length;
    const completed = course.sections.filter((section) => progress[section.id] === 'completed').length;
    const percentage = total ? Math.round((completed / total) * 100) : 0;
    document.querySelector('#progress-label').textContent = `${percentage}%`;
    document.querySelector('#progress-bar').style.width = `${percentage}%`;
    document.querySelector('#progress-detail').textContent = total
        ? `${completed} of ${total} sections completed`
        : 'Lessons will appear as the course grows';
}

function renderNav() {
    if (!course.sections.length) {
        nav.innerHTML = '<p class="empty-nav">No lessons are available yet.</p>';
        updateProgress();
        return;
    }
    const groups = course.sections.reduce((grouped, section) => {
        const lessons = grouped.get(section.section) || [];
        lessons.push(section);
        grouped.set(section.section, lessons);
        return grouped;
    }, new Map());
    nav.innerHTML = [...groups.entries()].map(([sectionName, lessons], index) => `
    <div class="nav-group">
        <button class="nav-group-toggle" type="button" aria-expanded="true" aria-controls="nav-lessons-${index}">
            <span class="nav-chevron" aria-hidden="true">›</span>
            <span><strong>${sectionName}</strong><small>${lessons.length} lesson${lessons.length === 1 ? '' : 's'}</small></span>
        </button>
        <div class="nav-lessons" id="nav-lessons-${index}">
            ${lessons.map((section) => `
            <button class="nav-item ${progress[section.id] === 'completed' ? 'is-complete' : ''}" data-section="${section.id}" type="button">
                <span class="nav-status" aria-hidden="true"></span><span><strong>${section.type || section.title}</strong></span>
            </button>`).join('')}
        </div>
    </div>`).join('');
    nav.querySelectorAll('.nav-group-toggle').forEach((toggle) => toggle.addEventListener('click', () => {
        const lessons = document.querySelector(`#${toggle.getAttribute('aria-controls')}`);
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!isExpanded));
        lessons.hidden = isExpanded;
    }));
    nav.querySelectorAll('[data-section]').forEach((button) => button.addEventListener('click', () => showLesson(button.dataset.section)));
    updateProgress();
}

function renderList(items) {
    return items.map((item) => `<li>${item}</li>`).join('');
}

function renderConceptExample(example) {
    if (!example) return '';
    const result = example.result ? `<p class="example-result"><strong>Expected result:</strong> ${example.result}</p>` : '';
    const usage = example.usage ? `<p class="example-usage"><strong>Used for:</strong> ${example.usage}</p>` : '';
    return `<div class="concept-example"><span class="example-label">${example.language || 'Example'}</span><pre><code>${example.code}</code></pre>${result}${usage}</div>`;
}

function renderLesson(section) {
    const concepts = section.concepts.map((concept) => `
        <article class="concept-block">
            <h3>${concept.title}</h3>
            <p>${concept.body}</p>${renderConceptExample(concept.example)}
        </article>`).join('');
    const roadmap = section.roadmap.map((stage, index) => `
        <li class="roadmap-item"><span class="roadmap-number">${String(index + 1).padStart(2, '0')}</span><div><strong>${stage.name}</strong><span>${stage.detail}</span></div></li>`).join('');
    const resources = (section.resources || []).map((resource) => `<a class="resource-link" href="${resource.path}" target="_blank" rel="noopener">${resource.label}<span aria-hidden="true">↗</span></a>`).join('');
    const resourcesSection = resources ? `<div class="lesson-section"><p class="eyebrow">Lesson resources</p><h3>Resources for this lecture</h3><p class="resource-note">${section.resourceIntro || 'These companion files came from the Lesson attachment.'}</p><div class="resource-list">${resources}</div></div>` : '';
    const clarification = section.clarification ? `<div class="callout callout-clarification"><strong>Clarification</strong><span>${section.clarification}</span></div>` : '';
    return `<article class="lesson">
        <p class="eyebrow">${section.section} · Course lesson</p>
        <h2>${section.title}</h2>
        <p class="lede">${section.summary}</p>
        <div class="lesson-actions"><button class="complete-button" type="button" id="complete-button">${progress[section.id] === 'completed' ? 'Completed' : 'Mark section complete'}</button><span class="source-badge">Course lesson</span></div>
        <div class="lesson-section"><h3>Learning objectives</h3><ul>${renderList(section.objectives)}</ul></div>
        <div class="lesson-section"><p class="eyebrow">Core concepts</p><h3>What this course is building toward</h3><div class="concept-grid">${concepts}</div></div>
        <div class="lesson-section"><h3>The course roadmap</h3><ol class="roadmap">${roadmap}</ol></div>
        <div class="callout callout-note"><strong>Remember</strong><span>The course is framed as a practical journey: build, train, deploy, automate, monitor, and scale real-world AI systems.</span></div>
        ${clarification}
        <div class="lesson-section"><p class="eyebrow">Quick check</p><h3>${section.check.question}</h3><details><summary>Reveal the answer</summary><p>${section.check.answer}</p></details></div>
        <div class="lesson-section"><p class="eyebrow">Review</p><h3>Important points</h3><ul>${renderList(section.takeaways)}</ul></div>
        ${resourcesSection}
    </article>`;
}

function showLesson(id) {
    const section = course.sections.find((item) => item.id === id);
    if (!section) return;
    welcomeView.hidden = true;
    searchView.hidden = true;
    lessonView.hidden = false;
    lessonView.innerHTML = renderLesson(section);
    document.querySelector('#complete-button').addEventListener('click', () => {
        progress[id] = progress[id] === 'completed' ? 'in-progress' : 'completed';
        saveProgress();
        showLesson(id);
        renderNav();
    });
    document.querySelector('#breadcrumb-current').textContent = section.title;
    document.querySelector('#main-content').focus();
}

function searchLessons(query) {
    const term = query.trim().toLowerCase();
    if (!term) {
        searchView.hidden = true;
        welcomeView.hidden = false;
        lessonView.hidden = true;
        return;
    }
    const results = course.sections.filter((section) => JSON.stringify(section).toLowerCase().includes(term));
    welcomeView.hidden = true;
    lessonView.hidden = true;
    searchView.hidden = false;
    searchView.innerHTML = `<div class="search-results"><p class="eyebrow">Search</p><h2>Results for “${query.replaceAll('<', '&lt;')}”</h2>${results.length ? results.map((result) => `<button class="result-item" data-section="${result.id}" type="button"><strong>${result.title}</strong><span>${result.summary || 'Open lesson'}</span></button>`).join('') : '<p class="empty-state">No matching lessons yet. Try another term.</p>'}</div>`;
    searchView.querySelectorAll('[data-section]').forEach((button) => button.addEventListener('click', () => showLesson(button.dataset.section)));
}

searchInput.addEventListener('input', () => searchLessons(searchInput.value));
document.addEventListener('keydown', (event) => {
    if (event.key === '/' && document.activeElement !== searchInput) {
        event.preventDefault();
        searchInput.focus();
    }
});
document.querySelector('#theme-toggle').addEventListener('click', () => {
    const nextTheme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
    document.body.dataset.theme = nextTheme;
    localStorage.setItem(themeKey, nextTheme);
});

document.body.dataset.theme = localStorage.getItem(themeKey) || 'light';
renderNav();
if (course.sections.length) showLesson(course.sections[0].id);
