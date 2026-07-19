/* ============================================================
   NovaForge 3D — Firebase Authentication (email/password + Google)
   Loaded as an ES module. Works on GitHub Pages (no build step).
   If Firebase is not configured yet, the forms stay usable and
   show a translated "not configured" message.
   ============================================================ */
import { firebaseConfig, isConfigured } from "./firebase-config.js";

const t = (key) => (window.NF && window.NF.t ? window.NF.t(key) : key);

const els = {
  authArea: () => document.getElementById("authArea"),
  profileBox: () => document.getElementById("profileBox"),
  profileEmail: () => document.getElementById("profileEmail"),
  profileAvatar: () => document.getElementById("profileAvatar"),
  configWarn: () => document.getElementById("configWarn"),
  userStatus: () => document.getElementById("userStatus"),
  loginForm: () => document.getElementById("loginForm"),
  signupForm: () => document.getElementById("signupForm"),
  loginMsg: () => document.getElementById("loginMsg"),
  signupMsg: () => document.getElementById("signupMsg"),
  logoutBtn: () => document.getElementById("logoutBtn"),
  googleBtn: () => document.getElementById("googleBtn")
};

function setMsg(el, text, ok) {
  if (!el) return;
  el.textContent = text;
  el.className = "msg " + (ok ? "ok" : "err");
}

function renderGuestStatus() {
  const s = els.userStatus();
  if (!s) return;
  s.innerHTML =
    '<span>' + t("status.guest") + "</span>" +
    '<span class="chip chip-sm" data-nav="account">' + t("nav.account") + "</span>";
  wireStatusNav();
}

function renderUserStatus(email) {
  const s = els.userStatus();
  if (!s) return;
  s.innerHTML =
    "<span>" + t("status.hello") + ", <strong>" + email + "</strong></span>" +
    '<span class="chip chip-sm" data-nav="account">' + t("nav.account") + "</span>";
  wireStatusNav();
}

function wireStatusNav() {
  const btn = document.querySelector('#userStatus [data-nav="account"]');
  if (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll("section.page").forEach(function (sec) {
        sec.classList.toggle("active", sec.id === "page-account");
      });
    });
  }
}

function showLoggedIn(user) {
  const email = user.email || user.displayName || "user";
  if (els.authArea()) els.authArea().style.display = "none";
  if (els.profileBox()) els.profileBox().style.display = "block";
  if (els.profileEmail()) els.profileEmail().textContent = email;
  if (els.profileAvatar()) els.profileAvatar().textContent = (email[0] || "?").toUpperCase();
  renderUserStatus(email);
}

function showLoggedOut() {
  if (els.authArea()) els.authArea().style.display = "block";
  if (els.profileBox()) els.profileBox().style.display = "none";
  renderGuestStatus();
}

/* ---------------- Not-configured fallback ---------------- */
function initNotConfigured() {
  document.addEventListener("DOMContentLoaded", function () {
    if (els.configWarn()) els.configWarn().style.display = "block";
    showLoggedOut();

    const block = function (e, msgEl) {
      e.preventDefault();
      setMsg(msgEl(), t("msg.notconfigured"), false);
    };
    if (els.loginForm()) els.loginForm().addEventListener("submit", (e) => block(e, els.loginMsg));
    if (els.signupForm()) els.signupForm().addEventListener("submit", (e) => block(e, els.signupMsg));
    if (els.googleBtn()) els.googleBtn().addEventListener("click", () => setMsg(els.loginMsg(), t("msg.notconfigured"), false));

    document.addEventListener("nf:langchange", function () {
      // keep header status label translated
      if (els.profileBox() && els.profileBox().style.display === "block") return;
      renderGuestStatus();
    });
  });
}

/* ---------------- Configured: real Firebase ---------------- */
async function initFirebase() {
  const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js");
  const {
    getAuth, onAuthStateChanged,
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    signOut, GoogleAuthProvider, signInWithPopup
  } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const ready = () => {
    if (els.configWarn()) els.configWarn().style.display = "none";

    if (els.signupForm()) {
      els.signupForm().addEventListener("submit", async function (e) {
        e.preventDefault();
        const email = document.getElementById("signupEmail").value.trim();
        const pass = document.getElementById("signupPassword").value;
        if (!email || !pass) return setMsg(els.signupMsg(), t("msg.fillfields"), false);
        try {
          await createUserWithEmailAndPassword(auth, email, pass);
          setMsg(els.signupMsg(), t("msg.signup.ok"), true);
        } catch (err) {
          setMsg(els.signupMsg(), err.message, false);
        }
      });
    }

    if (els.loginForm()) {
      els.loginForm().addEventListener("submit", async function (e) {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value.trim();
        const pass = document.getElementById("loginPassword").value;
        if (!email || !pass) return setMsg(els.loginMsg(), t("msg.fillfields"), false);
        try {
          await signInWithEmailAndPassword(auth, email, pass);
          setMsg(els.loginMsg(), t("msg.login.ok"), true);
        } catch (err) {
          setMsg(els.loginMsg(), err.message, false);
        }
      });
    }

    if (els.googleBtn()) {
      els.googleBtn().addEventListener("click", async function () {
        try {
          await signInWithPopup(auth, provider);
        } catch (err) {
          setMsg(els.loginMsg(), err.message, false);
        }
      });
    }

    if (els.logoutBtn()) {
      els.logoutBtn().addEventListener("click", async function () {
        try { await signOut(auth); } catch (err) {}
      });
    }

    onAuthStateChanged(auth, function (user) {
      if (user) showLoggedIn(user);
      else showLoggedOut();
    });

    document.addEventListener("nf:langchange", function () {
      if (els.profileBox() && els.profileBox().style.display === "block") {
        renderUserStatus(els.profileEmail().textContent);
      } else {
        renderGuestStatus();
      }
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }
}

if (isConfigured) {
  initFirebase().catch(function (err) {
    console.error("Firebase init failed:", err);
    initNotConfigured();
  });
} else {
  initNotConfigured();
}
