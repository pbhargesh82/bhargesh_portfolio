export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

export function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function getStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    return null;
  }
}

export function getTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme();
}

export function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
}

export function setTheme(theme: Theme): void {
  applyTheme(theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* private browsing */
  }
}

export function toggleTheme(): Theme {
  const next: Theme = getTheme() === 'dark' ? 'light' : 'dark';
  setTheme(next);
  return next;
}

export function initThemeToggle(button: HTMLButtonElement | null): void {
  if (!button) return;

  const syncLabel = () => {
    const isDark = getTheme() === 'dark';
    button.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    button.setAttribute('aria-pressed', String(isDark));
  };

  syncLabel();
  button.addEventListener('click', () => {
    toggleTheme();
    syncLabel();
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (getStoredTheme()) return;
    applyTheme(event.matches ? 'dark' : 'light');
    syncLabel();
  });
}
