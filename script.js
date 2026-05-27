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
});
