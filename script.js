document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        setTimeout(() => {
            section.style.transition = 'opacity 0.5s ease-in';
            section.style.opacity = '1';
        }, 100);
    });

    const downloadBtn = document.querySelector('.download-btn');
    downloadBtn.addEventListener('click', () => {
        downloadBtn.style.background = '#8a6aff';
        setTimeout(() => {
            downloadBtn.style.background = '#6b48ff';
        }, 200);
    });
});