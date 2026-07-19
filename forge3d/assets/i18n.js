/* ============================================================
   NovaForge 3D — i18n (RU / EN / BG / UK)
   Client-side translation, no page reload, remembers choice.
   ============================================================ */
(function () {
  "use strict";

  const SUPPORTED = ["bg", "en", "ru", "uk"];
  const DEFAULT_LANG = "bg";

  const translations = {
    /* ---------------- Bulgarian (default) ---------------- */
    bg: {
      "brand.tagline": "ИЗКОВАНО ОТ ФИЛАМЕНТ",
      "nav.catalog": "Каталог",
      "nav.about": "За нас",
      "nav.account": "Профил",
      "status.guest": "Не сте влезли",
      "status.hello": "Здравей",
      "catalog.title": "Каталог",
      "catalog.subtitle": "Изделия, отпечатани с прецизност на Bambu Lab H2S.",
      "product.order": "Поръчай",
      "about.title": "За нас",
      "about.p1": "NovaForge 3D е ателие за 3D печат, основано от Yasin в България. Превръщаме цифрови модели във физически предмети — слой по слой.",
      "about.p2": "Всяко изделие се отпечатва по поръчка на принтер Bambu Lab H2S — от декоративни маски до музикални флейти и дизайнерски вази.",
      "account.title": "Профил",
      "account.login": "Вход",
      "account.signup": "Регистрация",
      "account.email": "Имейл",
      "account.password": "Парола",
      "account.email.ph": "you@example.com",
      "account.password.ph": "••••••••",
      "account.login.btn": "Вход",
      "account.signup.btn": "Създай акаунт",
      "account.google": "Вход с Google",
      "account.logout": "Изход",
      "account.loggedas": "Влезли сте като",
      "account.configwarn": "Firebase все още не е конфигуриран. Собственикът трябва да попълни своята конфигурация в assets/firebase-config.js (виж README).",
      "footer.rights": "Всички права запазени.",
      "footer.note": "Витрина за 3D печатни изделия · Отпечатано на Bambu Lab H2S",
      "msg.signup.ok": "Акаунтът е създаден успешно!",
      "msg.login.ok": "Успешен вход!",
      "msg.notconfigured": "Автентикацията не е конфигурирана. Виж README за настройка на Firebase.",
      "msg.fillfields": "Моля, попълнете имейл и парола."
    },

    /* ---------------- English ---------------- */
    en: {
      "brand.tagline": "FORGED IN FILAMENT",
      "nav.catalog": "Catalog",
      "nav.about": "About",
      "nav.account": "Account",
      "status.guest": "Not signed in",
      "status.hello": "Hi",
      "catalog.title": "Catalog",
      "catalog.subtitle": "Items printed with precision on a Bambu Lab H2S.",
      "product.order": "Order",
      "about.title": "About us",
      "about.p1": "NovaForge 3D is a 3D printing studio founded by Yasin in Bulgaria. We turn digital models into physical objects — layer by layer.",
      "about.p2": "Every item is printed to order on a Bambu Lab H2S printer — from decorative masks to musical flutes and designer vases.",
      "account.title": "Account",
      "account.login": "Log in",
      "account.signup": "Sign up",
      "account.email": "Email",
      "account.password": "Password",
      "account.email.ph": "you@example.com",
      "account.password.ph": "••••••••",
      "account.login.btn": "Log in",
      "account.signup.btn": "Create account",
      "account.google": "Continue with Google",
      "account.logout": "Log out",
      "account.loggedas": "Signed in as",
      "account.configwarn": "Firebase is not configured yet. The owner must fill in the config in assets/firebase-config.js (see README).",
      "footer.rights": "All rights reserved.",
      "footer.note": "Showcase of 3D printed goods · Printed on a Bambu Lab H2S",
      "msg.signup.ok": "Account created successfully!",
      "msg.login.ok": "Signed in successfully!",
      "msg.notconfigured": "Authentication is not configured. See the README to set up Firebase.",
      "msg.fillfields": "Please enter an email and password."
    },

    /* ---------------- Russian ---------------- */
    ru: {
      "brand.tagline": "ВЫКОВАНО ИЗ ФИЛАМЕНТА",
      "nav.catalog": "Каталог",
      "nav.about": "О нас",
      "nav.account": "Профиль",
      "status.guest": "Вы не вошли",
      "status.hello": "Привет",
      "catalog.title": "Каталог",
      "catalog.subtitle": "Изделия, напечатанные с точностью на Bambu Lab H2S.",
      "product.order": "Заказать",
      "about.title": "О нас",
      "about.p1": "NovaForge 3D — студия 3D-печати, основанная Yasin в Болгарии. Мы превращаем цифровые модели в физические предметы — слой за слоем.",
      "about.p2": "Каждое изделие печатается на заказ на принтере Bambu Lab H2S — от декоративных масок до музыкальных флейт и дизайнерских ваз.",
      "account.title": "Профиль",
      "account.login": "Войти",
      "account.signup": "Регистрация",
      "account.email": "Эл. почта",
      "account.password": "Пароль",
      "account.email.ph": "you@example.com",
      "account.password.ph": "••••••••",
      "account.login.btn": "Войти",
      "account.signup.btn": "Создать аккаунт",
      "account.google": "Войти через Google",
      "account.logout": "Выйти",
      "account.loggedas": "Вы вошли как",
      "account.configwarn": "Firebase ещё не настроен. Владельцу нужно указать конфигурацию в assets/firebase-config.js (см. README).",
      "footer.rights": "Все права защищены.",
      "footer.note": "Витрина изделий 3D-печати · Напечатано на Bambu Lab H2S",
      "msg.signup.ok": "Аккаунт успешно создан!",
      "msg.login.ok": "Вход выполнен успешно!",
      "msg.notconfigured": "Аутентификация не настроена. См. README для настройки Firebase.",
      "msg.fillfields": "Пожалуйста, введите эл. почту и пароль."
    },

    /* ---------------- Ukrainian ---------------- */
    uk: {
      "brand.tagline": "ВИКУВАНО З ФІЛАМЕНТУ",
      "nav.catalog": "Каталог",
      "nav.about": "Про нас",
      "nav.account": "Профіль",
      "status.guest": "Ви не увійшли",
      "status.hello": "Привіт",
      "catalog.title": "Каталог",
      "catalog.subtitle": "Вироби, надруковані з точністю на Bambu Lab H2S.",
      "product.order": "Замовити",
      "about.title": "Про нас",
      "about.p1": "NovaForge 3D — студія 3D-друку, заснована Yasin у Болгарії. Ми перетворюємо цифрові моделі на фізичні предмети — шар за шаром.",
      "about.p2": "Кожен виріб друкується на замовлення на принтері Bambu Lab H2S — від декоративних масок до музичних флейт і дизайнерських ваз.",
      "account.title": "Профіль",
      "account.login": "Увійти",
      "account.signup": "Реєстрація",
      "account.email": "Ел. пошта",
      "account.password": "Пароль",
      "account.email.ph": "you@example.com",
      "account.password.ph": "••••••••",
      "account.login.btn": "Увійти",
      "account.signup.btn": "Створити акаунт",
      "account.google": "Увійти через Google",
      "account.logout": "Вийти",
      "account.loggedas": "Ви увійшли як",
      "account.configwarn": "Firebase ще не налаштовано. Власник має вказати конфігурацію в assets/firebase-config.js (див. README).",
      "footer.rights": "Усі права захищені.",
      "footer.note": "Вітрина виробів 3D-друку · Надруковано на Bambu Lab H2S",
      "msg.signup.ok": "Акаунт успішно створено!",
      "msg.login.ok": "Вхід виконано успішно!",
      "msg.notconfigured": "Автентифікацію не налаштовано. Див. README, щоб налаштувати Firebase.",
      "msg.fillfields": "Будь ласка, введіть ел. пошту та пароль."
    }
  };

  function getStoredLang() {
    let lang = null;
    try { lang = localStorage.getItem("nf_lang"); } catch (e) {}
    if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;
    return lang;
  }

  function t(key) {
    const lang = NF.currentLang;
    return (translations[lang] && translations[lang][key]) || translations[DEFAULT_LANG][key] || key;
  }

  function applyLang(lang) {
    if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;
    NF.currentLang = lang;
    try { localStorage.setItem("nf_lang", lang); } catch (e) {}

    document.documentElement.lang = lang;

    // text content
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    // placeholders
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
    });

    // active language button
    document.querySelectorAll("#langSwitch [data-lang]").forEach(function (btn) {
      btn.classList.toggle("chip-active", btn.getAttribute("data-lang") === lang);
    });

    // let other modules react (catalog re-render, auth status re-render)
    document.dispatchEvent(new CustomEvent("nf:langchange", { detail: { lang: lang } }));
  }

  // public namespace
  window.NF = window.NF || {};
  window.NF.supported = SUPPORTED;
  window.NF.translations = translations;
  window.NF.currentLang = getStoredLang();
  window.NF.t = t;
  window.NF.applyLang = applyLang;

  // wire language switch buttons
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("#langSwitch [data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
      });
    });
  });
})();
