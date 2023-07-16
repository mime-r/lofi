
// Define Elements and States

/** @type {HTMLElement} */
var root = document.querySelector(':root');

/** @type {HTMLDivElement} */
var themeSelector = document.querySelector('#theme-selector');

const theme = themes[0];

// Initial Setup
populateThemeSelector();
applyTheme(theme);

// Functions
function applyTheme(theme) {
  // Set CSS Vars
  root.style.setProperty("--primary-text-color", theme.textColors.primary);
  root.style.setProperty("--secondary-text-color", theme.textColors.secondary);

  root.style.setProperty("--primary-font-family", `'${theme.fontFamily.primary}', serif`);
  root.style.setProperty("--secondary-font-family", `'${theme.fontFamily.secondary}', sans-serif`);

  root.style.setProperty("--background-image", `url(${theme.backgroundPath})`);

  // Ensure that only the applied theme has its icon highlighted as selected
  document.querySelectorAll(".theme-icon").forEach(icon => icon.classList = "theme-icon");
  document.querySelector(`#${theme.meta.name}-theme-icon`).classList = "theme-icon selected";
}

function populateThemeSelector() {
  for (const theme of themes) {
    /** @type {SVGElement} */
    const themeIcon = htmlToElement(theme.meta.icon);
    themeIcon.id = `${theme.meta.name}-theme-icon`;
    themeIcon.classList = "theme-icon";
    themeIcon.onclick = function(e) {
      e.stopPropagation(); // prevent triggering play/pause when selecting theme
      applyTheme(theme);
    }
    themeSelector.appendChild(themeIcon);
  }
}

