document.addEventListener('DOMContentLoaded', () => {
    // Модальные окна: открытие по кнопкам с data-modal
    const modals = document.querySelectorAll('.modal-overlay');
    const btns = document.querySelectorAll('.btn-card');
    
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.add('active');
    }
    
    function closeModal(modal) {
        modal.classList.remove('active');
    }
    
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modalId = btn.getAttribute('data-modal');
            if (modalId) openModal(modalId);
        });
    });
    
    // Закрытие по крестику и по клику на overlay
    modals.forEach(modal => {
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => closeModal(modal));
        }
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal);
        });
    });
    
    // Бургер-меню
    const burger = document.getElementById('burgerBtn');
    const navMenu = document.getElementById('navMenu');
    if (burger && navMenu) {
        burger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Плавный скролл для якорей
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // Кнопка "Исследовать гайд"
    const guideBtn = document.getElementById('scrollToGuideBtn');
    if (guideBtn) {
        guideBtn.addEventListener('click', () => {
            document.getElementById('guide').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Аккордеон
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const icon = header.querySelector('i');
        header.addEventListener('click', () => {
            const isOpen = content.classList.contains('show');
            // Закрыть все
            document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('show'));
            document.querySelectorAll('.accordion-header i').forEach(i => i.style.transform = 'rotate(0deg)');
            if (!isOpen) {
                content.classList.add('show');
                if (icon) icon.style.transform = 'rotate(180deg)';
            }
        });
    });
    // Открыть первый по умолчанию
    if (accordionItems.length) {
        const firstContent = accordionItems[0].querySelector('.accordion-content');
        const firstIcon = accordionItems[0].querySelector('.accordion-header i');
        if (firstContent) firstContent.classList.add('show');
        if (firstIcon) firstIcon.style.transform = 'rotate(180deg)';
    }

    // ========== ЗАМЕНА ССЫЛОК КАРТОЧЕК (только это добавлено) ==========
    const newImages = {
        "Гостеприимство и куначество": "https://avatars.mds.yandex.net/get-vthumb/4605631/82bfcda30e5b1adbce334da640c645dd/564x318_1",
        "Национальная кухня": "https://avatars.mds.yandex.net/get-vertis-journal/4471904/21_Image_fx-111-2_kopiya.jpg_1755549714000/1600x1600",
        "Танцы и музыка": "https://cdn-image.zvuk.com/pic?hash=150811a9-2a42-40be-932b-35e9097abfbc&id=42574099&size=large&type=release"
    };

    // Ищем все карточки (подставьте свой селектор, если нужно)
    const cards = document.querySelectorAll('.card, .cards__item, .card-item');
    cards.forEach(card => {
        // Ищем заголовок карточки
        const titleElem = card.querySelector('.card-title, h3, h2, .title');
        if (titleElem) {
            const title = titleElem.innerText.trim();
            if (newImages[title]) {
                const img = card.querySelector('img');
                if (img) img.src = newImages[title];
            }
        }
    });
});
