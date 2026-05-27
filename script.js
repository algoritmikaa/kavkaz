// Данные для достопримечательностей
const sightCards = [
    { title: "Гора Эльбрус", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&auto=format", shortDesc: "Двуглавая вершина — самая высокая в Европе, 5642 м.", badge: "🏔️ 5 642 м", modalContent: "<h3>Эльбрус — крыша Европы</h3><p>Высота западной вершины 5642 м, восточной — 5621 м. Легенда гласит, что именно к этой горе был прикован Прометей. Сегодня Эльбрус привлекает альпинистов со всего мира. Маршруты: Южный склон (канатные дороги до 3800 м) — классический, требует подготовки; Северный склон — более дикий. Лучший сезон для восхождения: июль–август. У подножия — Приэльбрусье с минеральными источниками и кафе с хычинами.</p><p>Совет: акклиматизируйтесь 2–3 дня в Терсколе, используйте услуги гида. Вид с седловины — невероятная панорама Кавказского хребта.</p>" },
    { title: "Чегемские водопады", img: "https://images.unsplash.com/photo-1593174676240-6ebcedced1b0?w=500&auto=format", shortDesc: "Каскад водопадов в живописном ущелье, мощь и красота.", badge: "💧 легендарные", modalContent: "<h3>Чегемские водопады (Кабардино-Балкария)</h3><p>Группа водопадов на реке Чегем, самый известный «Девичьи косы» (30 м). Зимой замерзают в гигантские ледяные колонны — популярное место для альпинистов-ледолазов. Летом грохот воды слышен за километр. По ущелью можно прогуляться по смотровым площадкам. В 2 км — Чегемское ущелье с древними башнями.</p><p>Вход на экотропу — 200₽. Лучшее время: май-июнь (полноводье) или декабрь-февраль (ледяной плен). Рядом кафе с балкарским чаем.</p>" },
    { title: "Даргавс «Город мёртвых»", img: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=500&auto=format", shortDesc: "Некрополь из каменных склепов, мистика и история.", badge: "🏛️ X–XVIII вв.", modalContent: "<h3>Даргавс, Северная Осетия</h3><p>«Город мертвых» — комплекс наземных склепов, где хоронили людей с XIV по XIX век. Склепы пирамидальной формы, некоторые до 8 метров. По преданию, во времена эпидемии чумы заболевшие уходили в склеп добровольно. Атмосфера завораживает: горы, тишина, белые камни. Находится в 35 км от Владикавказа. Посещение с гидом обязательно — местные верят в силу предков. Вход 250₽, фотосъемка разрешена.</p><p>Осенью склоны золотые, зрелище невероятное.</p>" },
    { title: "Озеро Кезеной-Ам", img: "https://picsum.photos/id/104/500/300?random=1", shortDesc: "Самое глубокое горное озеро на Кавказе, бирюзовая вода.", badge: "🏞️ ЧЕЧНЯ", modalContent: "<h3>Кезеной-Ам (Эйзенам)</h3><p>Расположено на границе Чечни и Дагестана, на высоте 1870 м. Длина 2 км, глубина до 74 м. Вода прозрачная, летом прогревается до 18°C. Здесь водится эйзенамская форель (попробуйте уху в кафе на берегу). Можно арендовать катамаран, а зимой озеро замерзает — катаются на коньках. В 2021 году построен туристический комплекс «Кезеной-Ам» с отелями и спортплощадками. Легенда: озеро возникло из слез юной девушки, оплакивающей возлюбленного.</p>" }
];

// Данные для активного отдыха
const activeCards = [
    { title: "Трекинг и горные походы", img: "https://images.unsplash.com/photo-1588099768531-a72d8a198f69?w=500&auto=format", shortDesc: "Маршруты к водопадам и ледникам, сложность от лёгкой до экстрима.", level: "⭐⭐⭐ сезон: июнь–сент", modalContent: "<h3>Пешие маршруты по Чегемскому и Баксанскому ущелью</h3><p>Популярный трек к подножью Эльбруса (озеро Гижгит), или к ледникам Адылсу. Многодневный маршрут «Карачаево-Черкесия: Архыз — перевал Пхия». Требуется физическая подготовка. Самый лёгкий поход — к Чегемским водопадам (3 км). Берите карты Maps.me, проверяйте погоду, ходите с гидами в высокогорье.</p><p>Групповые туры: 5 дней от 25 000₽ с проживанием. Не забудьте палки и гамаши от камней.</p>" },
    { title: "Зимние виды спорта (Домбай, Архыз)", img: "https://picsum.photos/id/35/500/300?random=3", shortDesc: "Качественные трассы, фанпарки и потрясающие виды.", level: "❄️ декабрь–апрель", modalContent: "<h3>Горнолыжный рай — Домбай и Архыз</h3><p>Курорт Домбай (1600–3168 м) предлагает 25 км трасс, включая чёрные. Архыз — более современный, с 25 подъёмниками и школой сноуборда. Сезон длится с декабря по апрель. Прокат снаряжения от 1500₽/день. Для фрирайдера — дикие склоны, но лавинная опасность. Лучшие отели: «Крокус», «Амазонка». Подъёмник на вершину Мусса-Ачитара открывает невероятную панораму Главного хребта.</p><p>Совет: бронируйте жилье за 2 месяца, в пик спрос огромен.</p>" },
    { title: "Рафтинг и джиппинг", img: "https://picsum.photos/id/294/500/300?random=4", shortDesc: "Ущелья, бурные реки и бездорожье.", level: "🌊 рафтинг май–сент", modalContent: "<h3>Река Черек, Баксан и джип-туры по перевалам</h3><p>Рафтинг 3–4 категории сложности на реке Черек (Кабардино-Балкария) — острые ощущения гарантированы. Сплавы проходят с инструктором, стоимость от 3000₽. Джиппинг: заброска к ледникам или в высокогорные села. Самый эпичный маршрут — подъем на плато Бермамыт (вид на Эльбрус).</p><p>Экскурсии на УАЗ или Toyota Land Cruiser. С собой возьмите тёплую куртку, дождевик, фотоаппарат.</p>" }
];

// Данные для традиций (текстовые блоки)
const traditionsData = [
    { icon: "fas fa-hand-sparkles", title: "Гостеприимство и куначество", desc: "Гость на Кавказе — посланник Бога. Куначество — древний обычай побратимства, где даже незнакомцу откроют дверь и накормят самым лучшим. За столом старший произносит тосты за Бога, родителей и гостя. Отказаться от угощения трижды — не принято. Эта традиция жива в каждом доме." },
    { icon: "fas fa-drumstick-bite", title: "Национальная кухня", desc: "Осетинские пироги с сыром, картофелем, фасолью; балкарские хычины; чеченский жижиг-галнаш; дагестанские чуду; шашлык на виноградной лозе. Обязательно айран и кавказский мёд. Каждое блюдо — часть ритуала гостеприимства и повод для долгой беседы." },
    { icon: "fas fa-music", title: "Танцы и музыка", desc: "Лезгинка — танец, объединяющий народы Кавказа. Символизирует орла и горянку: мужчина соревнуется в техничности, женщина плавно скользит. Народные инструменты: зурна, гармоника, барабан. Танец включён в нематериальное наследие ЮНЕСКО и исполняется на каждой свадьбе." }
];

// Функция генерации карточек
function renderCards(containerId, cardsArray, type) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    cardsArray.forEach((card, idx) => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        const badgeHtml = card.badge ? `<div class="badge">${card.badge}</div>` : (card.level ? `<div class="badge">${card.level}</div>` : '');
        cardDiv.innerHTML = `
            <img class="card-img" src="${card.img}" alt="${card.title}" loading="lazy">
            <div class="card-content">
                ${badgeHtml}
                <div class="card-title">${card.title}</div>
                <div class="card-desc">${card.shortDesc}</div>
                <button class="btn-card" data-type="${type}" data-idx="${idx}">Подробнее</button>
            </div>
        `;
        container.appendChild(cardDiv);
    });
    document.querySelectorAll(`#${containerId} .btn-card`).forEach(btn => {
        btn.addEventListener('click', () => {
            const typeAttr = btn.getAttribute('data-type');
            const idx = parseInt(btn.getAttribute('data-idx'));
            let contentObj = null;
            if (typeAttr === 'sight') contentObj = sightCards[idx];
            else if (typeAttr === 'active') contentObj = activeCards[idx];
            if (contentObj) {
                document.getElementById('modalContent').innerHTML = `<div class="modal-title">${contentObj.title}</div><div class="modal-text">${contentObj.modalContent}</div>`;
                document.getElementById('modalOverlay').classList.add('active');
            }
        });
    });
}

// Генерация традиций (красивые блоки)
function renderTraditions() {
    const container = document.getElementById('traditionsGrid');
    if (!container) return;
    container.innerHTML = '';
    traditionsData.forEach(tradition => {
        const block = document.createElement('div');
        block.className = 'tradition-item';
        block.innerHTML = `
            <div class="tradition-icon"><i class="${tradition.icon}"></i></div>
            <div class="tradition-title">${tradition.title}</div>
            <div class="tradition-desc">${tradition.desc}</div>
        `;
        container.appendChild(block);
    });
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    renderCards('sightsGrid', sightCards, 'sight');
    renderCards('activeGrid', activeCards, 'active');
    renderTraditions();

    // Модальное окно
    const modal = document.getElementById('modalOverlay');
    const closeModalBtn = document.getElementById('closeModalBtn');
    function closeModal() { modal.classList.remove('active'); }
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

    // Бургер-меню
    const burger = document.getElementById('burgerBtn');
    const navMenu = document.getElementById('navMenu');
    burger.addEventListener('click', () => { navMenu.classList.toggle('active'); });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => { navMenu.classList.remove('active'); });
    });

    // Плавный скролл
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
    document.getElementById('scrollToGuideBtn').addEventListener('click', () => {
        document.getElementById('guide').scrollIntoView({ behavior: 'smooth' });
    });

    // Аккордеон
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const icon = header.querySelector('i');
        header.addEventListener('click', () => {
            const isOpen = content.classList.contains('show');
            document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('show'));
            document.querySelectorAll('.accordion-header i').forEach(i => i.style.transform = 'rotate(0deg)');
            if (!isOpen) {
                content.classList.add('show');
                if (icon) icon.style.transform = 'rotate(180deg)';
            }
        });
    });
    if (accordionItems.length) {
        const firstContent = accordionItems[0].querySelector('.accordion-content');
        const firstIcon = accordionItems[0].querySelector('.accordion-header i');
        if (firstContent) firstContent.classList.add('show');
        if (firstIcon) firstIcon.style.transform = 'rotate(180deg)';
    }
});
