// Массив языков
const langArr = {
    "menu-products": {
        "ru": "Товары",
        "en": "Products",
        "ua": "Товари",
    },
    "menu-developers": {
        "ru": "Разработчики",
        "en": "Developers",
        "ua": "Розробники",
    },
    "menu-company": {
        "ru": "Компания",
        "en": "Company",
        "ua": "Компанія",
    },
    "menu-pricing": {
        "ru": "Цены",
        "en": "Pricing",
        "ua": "Ціни",
    },
    "menu-support": {
        "ru": "Поддержка",
        "en": "Support",
        "ua": "Підтримка",
    },
    "menu-sign-in": {
        "ru": "Войти",
        "en": "Sign In",
        "ua": "Увійти",
    },
// -----
    "top-block_title": {
        "ru": "Получите оплату быстрее",
        "en": "Get Your Payment Faster",
        "ua": "Отримайте свій платіж швидше",
    },
    "top-block_subtitle": {
        "ru": "Blinqpay помогает предприятиям в Африке получать платежи от кого угодно и из любой точки мира.",
        "en": "Blinqpay helps businesses in Africa get paid by anyone, anywhere in the world",
        "ua": "Blinqpay допомагає компаніям в Африці отримувати гроші від будь-кого в будь-якій точці світу",
    },
    "top-block_button": {
        "ru": "Начать",
        "en": "Start Now",
        "ua": "Почати",
    },
// -----
    "community__card_title_1": {
        "ru": "Легкий доступ",
        "en": "Easy Access",
        "ua": "Легкий доступ",
    },
    "community__card_subtitle_1": {
        "ru": "Теперь легко отслеживать все свои транзакции.",
        "en": "Now track all of your transaction easily.",
        "ua": "Тепер легко відстежувати всі свої транзакції.",
    },
    "community__card_title_2": {
        "ru": "Используйте You Connect",
        "en": "Use You Connect",
        "ua": "Використовуйте You Connect",
    },
    "community__card_subtitle_2": {
        "ru": "Теперь легко отслеживать все свои транзакции.",
        "en": "Now track all of your transaction easily.",
        "ua": "Тепер легко відстежувати всі свої транзакції.",
    },
    "community__card_title_3": {
        "ru": "Видимость денежных потоков",
        "en": "Cashflow Visiblity",
        "ua": "Відображення грошових потоків",
    },
    "community__card_subtitle_3": {
        "ru": "Теперь легко отслеживать все свои транзакции.",
        "en": "Now track all of your transaction easily.",
        "ua": "Тепер легко відстежувати всі свої транзакції.",
    },
    "community__card_title_4": {
        "ru": "Управление выставлением счетов",
        "en": "Manage Invoicing",
        "ua": "Керуйте виставленням рахунків",
    },
    "community__card_subtitle_4": {
        "ru": "Теперь легко отслеживать все свои транзакции.",
        "en": "Now track all of your transaction easily.",
        "ua": "Тепер легко відстежувати всі свої транзакції.",
    },
    "community__title": {
        "ru": "Совершайте и делитесь <span>платежами</span> с сообществом",
        "en": "Make & Share <span>Payments</span> With Community",
        "ua": "Здійснюйте та діліться <span>платежами</span> зі спільнотою",
    },
    "community__subtitle": {
        "ru": "Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw",
        "en": "Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw",
        "ua": "Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw",
    },
    
// -----    
    "easy__subtitle": {
        "ru": "КРЕДИТНА КАРТА",
        "en": "CREDIT CARD",
        "ua": "КРЕДИТНАЯ КАРТА",
    },
    "easy__title": {
        "ru": "Оплата <span>стає простішою</span>",
        "en": "Payment <span>Gets Easier</span>",
        "ua": "Оплата <span>становится проще</span>",
    },
    "easy-btn": {
        "ru": "<span>Подробнее</span>",
        "en": "<span>Learn more</span>",
        "ua": "<span>Докладніше</span>",
    },
// ----------- 
    "banking__subtitle": {
        "ru": "МОБИЛЬНЫЕ ТРАНЗАКЦИИ",
        "en": "MOBILE TRANSACTION",
        "ua": "МОБІЛЬНІ ТРАНЗАКЦІЇ",
    },
    "banking__title": {
        "ru": "Умный мобильный <span>банкинг</span>",
        "en": "Smart Mobile <span>Banking</span>",
        "ua": "Роумний мобільний <span>банкінг</span>",
    },
    "banking-btn": {
        "ru": "<span>Подробнее</span>",
        "en": "<span>Learn more</span>",
        "ua": "<span>Докладніше</span>",
    },
// -----------    
    "saving__subtitle": {
        "ru": "БЕЗОПАСНЫЕ ТРАНЗАКЦИИ",
        "en": "SECURE TRANSACTION",
        "ua": "БЕЗПЕЧНІ ТРАНЗАКЦІЇ",
    },
    "saving__title": {
        "ru": "Сохраните свои <span>сбережения</span>",
        "en": "Safe Yours <span>Savings</span>",
        "ua": "Збережіть свої <span>заощадження</span>",
    },
    "saving-btn": {
        "ru": "<span>Подробнее</span>",
        "en": "<span>Learn more</span>",
        "ua": "<span>Докладніше</span>",
    },
// -----------    
    "customers__title": {
        "ru": "Что говорят наши <span>клиенты</span>",
        "en": "What Our <span>Customer</span> Are saying",
        "ua": "Що говорять наші <span>клієнти</span>",
    },
    "customers__subtitle": {
        "ru": "",
        "en": "",
        "ua": "",
    },
// -----------   
    "try-now__text": {
        "ru": "Чего вы <span>ждете?</span>",
        "en": "What Are You <span>Waiting For?</span>",
        "ua": "Чого ви <span>чекаєте?</span>",
    },
    "try-now__btn": {
        "ru": "Попробовать BlinqPay",
        "en": "Try Blinqpay",
        "ua": "Спробувати Blinqpay",
    },
// -----------       
    "navigation__title_1": {
        "ru": "Услуги",
        "en": "Services",
        "ua": "Послуги",
    },
        "navigation__link_design": {
        "ru": "Дизайн",
        "en": "Design",
        "ua": "Дизайн",
    },
        "navigation__link_development": {
        "ru": "Разработка",
        "en": "Development",
        "ua": "Розробка",
    },
        "navigation__link_digital": {
        "ru": "Цифровий маркетинг",
        "en": "Digital Marketing",
        "ua": "Цифровий маркетинг",
    },
        "navigation__link_coding": {
        "ru": "Кодинг",
        "en": "Coding",
        "ua": "Кодинг",
    },
        "navigation__link_marketing": {
        "ru": "Маркетинг",
        "en": "Marketing",
        "ua": "Маркетинг",
    },
        "navigation__link_product": {
        "ru": "Дизайн проекта",
        "en": "Product Design",
        "ua": "Дизайн проекту",
    },
        "navigation__title_2": {
        "ru": "Продукт",
        "en": "Product",
        "ua": "Продукт",
    },
        "navigation__link_hotel": {
        "ru": "Менеджмент отелей",
        "en": "Hotel Marnagement",
        "ua": "Готельний менеджмент",
    },
        "navigation__link_rent": {
        "ru": "Управление арендой",
        "en": "Rent Management",
        "ua": "Управління орендою",
    },
        "navigation__link_micro": {
        "ru": "Микрофинансирование",
        "en": "Micro-Finance",
        "ua": "Мікрофінансування",
    },
        "navigation__link_industry": {
        "ru": "Промышленность",
        "en": "Industry",
        "ua": "Промисловість",
    },
        "navigation__link_dhoko": {
        "ru": "Dhoko",
        "en": "Dhoko",
        "ua": "Dhoko",
    },
        "navigation__title_3": {
        "ru": "Компания",
        "en": "Company",
        "ua": "Компанія",
    },
        "navigation__link_paris": {
        "ru": "Париж",
        "en": "Paris",
        "ua": "Париж",
    },
        "navigation__link_new-york": {
        "ru": "Нью-Йорк",
        "en": "New York",
        "ua": "Нью-Йорк",
    },
        "navigation__link_tokyo": {
        "ru": "Токио",
        "en": "Tokyo",
        "ua": "Токіо",
    },
        "navigation__link_las-vegas": {
        "ru": "Лас-Вегас",
        "en": "Las Vegas",
        "ua": "Лас-Вегас",
    },
        "": {
        "ru": "",
        "en": "",
        "ua": "",
    },
        
// -----------
    "more-btn": {
        "ru": "<span>Подробнее</span>",
        "en": "<span>Learn more</span>",
        "ua": "<span>Докладніше</span>",
    },
    "block-text": {
        "ru": "Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw",
        "en": "Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw",
        "ua": "Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw",
    },
};
