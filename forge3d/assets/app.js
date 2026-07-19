/* ============================================================
   NovaForge 3D — app logic: catalog, navigation, i18n wiring
   ============================================================ */
(function () {
  "use strict";

  /* ------------------------------------------------------------------
     PRODUCTS
     Owner: edit this array to manage the catalog.
     - img:   path to image in assets/ (see README for how to add photos)
     - price: shown as-is
     - name / desc: one entry per language (bg / en / ru / uk)
     ------------------------------------------------------------------ */
  const PRODUCTS = [
    {
      id: "mask-aztec",
      img: "assets/product-mask.svg",
      price: "€39",
      name: { bg: "Декоративна маска „Ацтек“", en: "Aztec Decorative Mask", ru: "Декоративная маска «Ацтек»", uk: "Декоративна маска «Ацтек»" },
      desc: { bg: "Стенна маска с геометричен релеф. Матово покритие.", en: "Wall mask with geometric relief. Matte finish.", ru: "Настенная маска с геометрическим рельефом. Матовое покрытие.", uk: "Настінна маска з геометричним рельєфом. Матове покриття." }
    },
    {
      id: "ocarina",
      img: "assets/product-flute.svg",
      price: "€24",
      name: { bg: "Окарина / флейта", en: "Ocarina / Flute", ru: "Окарина / флейта", uk: "Окарина / флейта" },
      desc: { bg: "Свиреща 3D печатна окарина в тоналност C-dur.", en: "Playable 3D printed ocarina tuned to C major.", ru: "Играющая 3D-печатная окарина в тональности до мажор.", uk: "Робоча 3D-друкована окарина в тональності до мажор." }
    },
    {
      id: "phone-stand",
      img: "assets/product-stand.svg",
      price: "€14",
      name: { bg: "Поставка за телефон", en: "Phone Stand", ru: "Подставка для телефона", uk: "Підставка для телефона" },
      desc: { bg: "Регулируем ъгъл, съвместим с всички смартфони.", en: "Adjustable angle, fits all smartphones.", ru: "Регулируемый угол, подходит для всех смартфонов.", uk: "Регульований кут, підходить для всіх смартфонів." }
    },
    {
      id: "desk-organizer",
      img: "assets/product-organizer.svg",
      price: "€19",
      name: { bg: "Органайзер за бюро", en: "Desk Organizer", ru: "Органайзер для стола", uk: "Органайзер для столу" },
      desc: { bg: "Модулни отделения за химикали, кабели и дребни неща.", en: "Modular compartments for pens, cables and small items.", ru: "Модульные отсеки для ручек, кабелей и мелочей.", uk: "Модульні відділення для ручок, кабелів і дрібниць." }
    },
    {
      id: "spiral-vase",
      img: "assets/product-vase.svg",
      price: "€22",
      name: { bg: "Спираловидна ваза", en: "Spiral Vase", ru: "Спиральная ваза", uk: "Спіральна ваза" },
      desc: { bg: "Vase-mode печат с плавни спираловидни линии.", en: "Vase-mode print with smooth spiral lines.", ru: "Печать в режиме vase с плавными спиральными линиями.", uk: "Друк у режимі vase з плавними спіральними лініями." }
    },
    {
      id: "figurine",
      img: "assets/product-figurine.svg",
      price: "€29",
      name: { bg: "Колекционерска фигурка", en: "Collectible Figurine", ru: "Коллекционная фигурка", uk: "Колекційна фігурка" },
      desc: { bg: "Детайлна фигурка, готова за боядисване.", en: "Detailed figurine, ready to paint.", ru: "Детализированная фигурка, готовая к покраске.", uk: "Деталізована фігурка, готова до фарбування." }
    },
    {
      id: "led-lamp",
      img: "assets/product-lamp.svg",
      price: "€34",
      name: { bg: "LED лампа", en: "LED Lamp", ru: "LED-лампа", uk: "LED-лампа" },
      desc: { bg: "Полупрозрачен абажур с топла LED светлина.", en: "Translucent shade with warm LED light.", ru: "Полупрозрачный абажур с тёплым LED-светом.", uk: "Напівпрозорий абажур з теплим LED-світлом." }
    },
    {
      id: "headphone-holder",
      img: "assets/product-headphone.svg",
      price: "€16",
      name: { bg: "Държач за слушалки", en: "Headphone Holder", ru: "Держатель для наушников", uk: "Тримач для навушників" },
      desc: { bg: "Стойка за бюро с кабелен канал.", en: "Desk stand with a cable channel.", ru: "Настольная стойка с кабель-каналом.", uk: "Настільна стійка з кабель-каналом." }
    }
  ];

  function renderCatalog() {
    const grid = document.getElementById("catalogGrid");
    if (!grid) return;
    const lang = window.NF.currentLang;
    const orderLabel = window.NF.t("product.order");

    grid.innerHTML = PRODUCTS.map(function (p) {
      const name = p.name[lang] || p.name.bg;
      const desc = p.desc[lang] || p.desc.bg;
      return (
        '<article class="product">' +
          '<img class="thumb" src="' + p.img + '" alt="' + escapeHtml(name) + '" loading="lazy" />' +
          '<div class="body">' +
            '<h3>' + escapeHtml(name) + '</h3>' +
            '<div class="desc">' + escapeHtml(desc) + '</div>' +
            '<div class="row">' +
              '<span class="price">' + escapeHtml(p.price) + '</span>' +
              '<button class="btn" data-order="' + p.id + '">' + escapeHtml(orderLabel) + '</button>' +
            '</div>' +
          '</div>' +
        '</article>'
      );
    }).join("");
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------------- Navigation between pages ---------------- */
  function showPage(name) {
    document.querySelectorAll("section.page").forEach(function (s) {
      s.classList.toggle("active", s.id === "page-" + name);
    });
    document.querySelectorAll("[data-nav]").forEach(function (b) {
      b.classList.toggle("chip-active", b.getAttribute("data-nav") === name);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.addEventListener("DOMContentLoaded", function () {
    // year
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();

    // nav buttons
    document.querySelectorAll("[data-nav]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        showPage(btn.getAttribute("data-nav"));
      });
    });

    // auth tabs (login / signup)
    document.querySelectorAll(".auth-tab").forEach(function (tab) {
      tab.addEventListener("click", function () {
        const which = tab.getAttribute("data-tab");
        document.querySelectorAll(".auth-tab").forEach(function (t) {
          t.classList.toggle("active", t === tab);
        });
        document.getElementById("panel-login").classList.toggle("active", which === "login");
        document.getElementById("panel-signup").classList.toggle("active", which === "signup");
      });
    });

    // order buttons (delegated)
    const grid = document.getElementById("catalogGrid");
    if (grid) {
      grid.addEventListener("click", function (e) {
        const btn = e.target.closest("[data-order]");
        if (!btn) return;
        const id = btn.getAttribute("data-order");
        const p = PRODUCTS.find(function (x) { return x.id === id; });
        const name = p ? (p.name[window.NF.currentLang] || p.name.bg) : id;
        // Placeholder order flow — owner can wire this to a form / email / cart.
        alert(name + "\n\n" + (window.NF.currentLang === "bg"
          ? "Благодарим! Свържете се със собственика за поръчка."
          : "Thanks! Contact the owner to place an order."));
      });
    }

    // initial render + translate
    renderCatalog();
    window.NF.applyLang(window.NF.currentLang);

    // re-render catalog when language changes
    document.addEventListener("nf:langchange", renderCatalog);
  });
})();
