// Alterna el atributo data-theme en <html> y actualiza el texto del botón.
// Mantiene la preferencia en localStorage.
(function () {
  const btn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const storageKey = 'site-theme';

  function applyTheme(theme) {
    if (theme === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    btn.textContent = theme === 'dark' ? 'Modo claro' : 'Modo oscuro';
  }

  // Inicializar desde localStorage o preferencia del sistema
  const saved = localStorage.getItem(storageKey);
  if (saved) {
    applyTheme(saved);
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  // Toggle al hacer click
  btn.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(storageKey, next);
  });
})();
