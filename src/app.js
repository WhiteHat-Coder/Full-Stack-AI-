import { course } from './data/course.js';

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
        : 'Lessons will appear as transcripts are added';
}

function renderNav() {
    if (!course.sections.length) {
        nav.innerHTML = '<p class="empty-nav">No lessons yet. Your first transcript will create the course map.</p>';
        updateProgress();
        return;
    }
    nav.innerHTML = course.sections.map((section) => `
    <button class="nav-item ${progress[section.id] === 'completed' ? 'is-complete' : ''}" data-section="${section.id}" type="button">
      <span class="nav-status" aria-hidden="true"></span><span>${section.title}</span>
    </button>`).join('');
    nav.querySelectorAll('[data-section]').forEach((button) => button.addEventListener('click', () => showLesson(button.dataset.section)));
    updateProgress();
}

function showLesson(id) {
    const section = course.sections.find((item) => item.id === id);
    if (!section) return;
    welcomeView.hidden = true;
    searchView.hidden = true;
    lessonView.hidden = false;
    lessonView.innerHTML = `<article class="lesson"><p class="eyebrow">${section.type || 'Lesson'}</p><h2>${section.title}</h2><p class="lede">${section.summary || ''}</p><div class="callout callout-note"><strong>Content status</strong><span>This lesson is ready for transcript-backed content.</span></div><button class="complete-button" type="button" id="complete-button">${progress[id] === 'completed' ? 'Completed' : 'Mark section complete'}</button></article>`;
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
    searchView.innerHTML = `<div class="search-results"><p class="eyebrow">Search</p><h2>Results for “${query.replaceAll('<', '&lt;')}”</h2>${results.length ? results.map((result) => `<button class="result-item" data-section="${result.id}" type="button"><strong>${result.title}</strong><span>${result.summary || 'Open lesson'}</span></button>`).join('') : '<p class="empty-state">No matching lessons yet. Try another term or add more transcript batches.</p>'}</div>`;
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
