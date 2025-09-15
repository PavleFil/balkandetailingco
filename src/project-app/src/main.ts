import { getHomepageContent } from './pages/index';

function initializeApp() {
    const homepageContent = getHomepageContent();
    renderHomepage(homepageContent);
}

function renderHomepage(content: string) {
    const appElement = document.getElementById('app');
    if (appElement) {
        appElement.innerHTML = content;
    }
}

initializeApp();