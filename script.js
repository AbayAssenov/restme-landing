document.addEventListener('DOMContentLoaded', () => {
    // Анимация появления элементов при скролле
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Обработчик клика по кнопке "Попробовать"
    const tryButton = document.querySelector('.btn-primary');
    if (tryButton) {
        tryButton.addEventListener('click', () => {
            // Здесь можно добавить логику для кнопки
            console.log('Кнопка "Попробовать" нажата');
        });
    }
}); 