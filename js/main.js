// Burger Menu
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open");
    })
})

// Scroll Animation
AOS.init({
  // Global settings:
  disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// Spoiler Footer
document.querySelectorAll('.navigation__title').forEach((el) => {
    el.addEventListener('click', () => {

        let content = el.nextElementSibling;

        if (content.style.maxHeight) {
            document.querySelectorAll('.navigation__links').forEach((el) => el.style.maxHeight = null)
        }
        else {
            document.querySelectorAll('.navigation__links').forEach((el) => el.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + 'px';
        }

        document.querySelector('.navigation__item').classList.toggle('spoiler-open');
    })
})

// Swiper
new Swiper('.customer__slider', {
    pagination: {
        el: '.swiper-pagination',
        clockable: true,
        dynamicBullets: true,
    },
    loop: true,
    autoplay: {
        delay: 1500,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    speed: 800,
});


// Language Change
const select = document.getElementById('change');
const allLang = ['en', 'ru', 'ua'];

select.addEventListener('change', changeURLLanguage);
// Задача перенаправить на URL с указанием языка
function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
};

function ChangeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    };
    select.value = hash;
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        };
    };
};
ChangeLanguage();


// Popup Form
let popupWrapper = document.querySelector('.popup');
let openPopupBtn = document.querySelector('.menu__button');
let closePopup = document.querySelector('.popup__close');
let body = document.querySelector('body');

openPopupBtn.addEventListener('click', (e) => {
    popupWrapper.classList.add('popup-active');
    body.style.overflow = 'hidden'; // Добавляем стиль overflow: hidden для тега body
    document.querySelector("header").classList.remove("open");
});

closePopup.addEventListener('click', () => {
    popupWrapper.classList.remove('popup-active');
    body.style.overflow = ''; // Удаляем стиль overflow: hidden для тега body
    document.querySelector("header").classList.add("open");
});

var submitBtn = document.getElementById("submit-btn");
  submitBtn.addEventListener("click", function(event) {
      event.preventDefault();
  });

let signInForm = document.querySelector('.form_sign-in');
let registrationForm = document.querySelector('.form_registration');
let registrationBtn = document.getElementById('registration_btn');
registrationBtn.addEventListener("click", function(event) {
    event.preventDefault();
    
    signInForm.style.display = 'none';
    registrationForm.style.display = 'flex';
});
let signInBtn = document.getElementById('sign-in_btn');
signInBtn.addEventListener("click", function(event) {
    event.preventDefault();
    
    registrationForm.style.display = 'none';
    signInForm.style.display = 'flex';
  });