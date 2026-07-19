/* ============================================================
   NovaForge 3D — Firebase configuration
   ------------------------------------------------------------
   OWNER: replace the placeholder values below with the config
   from your own Firebase project.

   Where to find it:
   Firebase Console -> Project settings (gear icon) -> "Your apps"
   -> Web app (</>) -> "SDK setup and configuration" -> Config.

   See README.md ("Настройка на Firebase Authentication") for the
   full step-by-step guide. Until real values are filled in, the
   login/registration forms stay visible but show a friendly
   "not configured" message instead of trying to authenticate.
   ============================================================ */

export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// true only when the owner has replaced every placeholder above.
export const isConfigured = !Object.values(firebaseConfig).some(function (v) {
  return typeof v !== "string" || v.indexOf("YOUR_") === 0;
});
