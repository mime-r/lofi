
const themes = [
  createTheme(
    themeName = "cafe",
    themeIconSvg = `
      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
        <line x1="6" x2="6" y1="2" y2="4"></line>
        <line x1="10" x2="10" y1="2" y2="4"></line>
        <line x1="14" x2="14" y1="2" y2="4"></line>
      </svg>`,
    primaryTextColor = "rgb(255, 239, 183)",
    secondaryTextColor = "rgb(255, 255, 211)",
    backgroundPath = "../assets/img/backgrounds/cafe.gif"
  ),
  createTheme(
    themeName = "tropical",
    themeIconSvg = `
      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"></path>
        <path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"></path>
        <path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z"></path>
        <path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"></path>
      </svg>`,
    primaryTextColor = "#afe51f",
    secondaryTextColor = "#b4ff22",
    backgroundPath = "../assets/img/backgrounds/tropical.gif"
  ),
  createTheme(
    themeName = "halloween1",
    themeIconSvg = `
      <svg data-icon="halloween" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="
          M252.5 21.156c-16.98.22-33.708 4.552-49.72 13.313l-4.593 2.5-.25 5.218c-.71 14.473-.49 33.985 3.063 52.968-45.775 2.55-84.144 20.94-113.094 48.625
          C48.312 181.647 25.87 236.18 22.47 291c-3.402 54.82 12.32 110.396 50.5 149.563 38.01 38.994 98.086 60.67 179.843 49.437 91.743 8.826 154.664-13.978
          192-53.906 37.494-40.1 48.374-96.148 39.968-150.563-8.404-54.413-35.9-107.795-76.905-144.53-30.753-27.55-69.526-45.58-112.813-46.688-6.366-.163-12.823.077-19.375.688
          1.99-18.702 8.107-36.836 18.282-54.75l5.717-10.03-11-3.5c-10.928-3.484-21.894-5.354-32.78-5.564-1.135-.022-2.275-.014-3.407 0zm.594 18.5c.826-.005 1.64.012
          2.47.032 5.472.13 11.025.846 16.655 2.03-14.398 29.89-19.03 61.625-13.314 94.282-8.162 1.28-13.987-.206-18.844-3.25-6.315-3.958-11.562-11.503-15.406-21.594-7.026-18.446-8.592-43.953-8.125-62.625
          12.073-5.82 24.17-8.79 36.564-8.874zm36.812 73.22c1.623-.017 3.238-.007 4.844.03 26.418.605 50.73 8.318 72.438 21.188-6.758 10.28-19.022 19.106-35.563
          25.78-21.344 8.614-49.05 13.303-77.063 13.5-28.012.2-56.365-4.08-79.093-12.5-18.705-6.928-33.23-16.595-41.532-28.093 20.665-11.46 44.554-18.416 71.687-19.28.486
          1.454 1.022 2.892 1.563 4.313 4.727 12.41 11.81 23.756 22.968 30.75 11.158 6.993 25.952 8.577 42.406 3.343l8.22-2.625-1.97-8.405c-2.15-9.21-3.372-18.236-3.718-27.125
          5.003-.54 9.945-.827 14.812-.875zm-171.78 29.968c11.135 16.145 29.513 27.66 50.843 35.562 25.507 9.45 55.785 13.868 85.75 13.656 29.962-.21 59.59-5.03 83.905-14.843 18.664-7.533
          34.624-18.224 44.125-32.69 4.345 3.26 8.565 6.71 12.656 10.376 37.356 33.467 63.165 83.352 70.906 133.47 7.742 50.116-2.365 99.87-35.156 134.937-32.79 35.067-89.1 56.757-177.656
          48l-1.125-.094-1.094.155c-77.94 10.96-131.157-9.192-164.936-43.844-33.78-34.65-48.35-84.885-45.22-135.374 3.133-50.488 24.058-100.77 59.688-134.844 5.438-5.2 11.21-10.05
          17.313-14.468zm55.06 59.28c-17.525 19.402-30.988 41.834-41.03 66.845l78.563 2.936c-9.76-26.926-22.16-50.34-37.532-69.78zm168.033 1.407c-19.43 0-35.19 15.756-35.19 35.19 0 19.43
          15.76 35.186 35.19 35.186s35.155-15.755 35.155-35.187c0-19.436-15.726-35.19-35.156-35.19zM62.31 321.876c10.71 51.276 48.785 85.54 97.157 103.875L164.5 400l40 7.688-5.656 29.125c20.105
          3.882 41.064 5.448 61.937 4.812l-3.25-29.22 47.283-5.25 3.25 29.158c24.27-4.824 47.335-12.838 67.562-23.875l-11.094-29.375 38.876-17.625 8.03 21.25c18.428-17.576 31.46-39.23 36.408-64.813-31.205
          9.386-64.876 16.156-99.656 20.375l3.656 26.844L303.97 377l-4.19-30.563c-14.542.79-29.185 1.157-43.81 1.125l-1.814 33.813-48.312-3.47 1.72-31.936c-14.844-.943-29.6-2.267-44.126-4.033l-8.844
          35.25-40.563-6.78 8.657-34.626c-20.89-3.765-41.127-8.4-60.374-13.905z">
        </path>
      </svg>`,
    primaryTextColor = "#f27b2c",
    secondaryTextColor = "#ff964f",
    backgroundPath = "../assets/img/backgrounds/halloween1.gif"
  )
];

/**
 * Creates a theme object
 * @param {string} iconSvg
 * @param {string} primaryTextColor
 * @param {string} secondaryTextColor
 * @param {string} backgroundPath
 * @param {string} primaryFontFamily
 * @param {string} secondaryFontFamily
 * @constructor
 */
function createTheme(
  themeName,
  themeIconSvg, // you can get this from copying SVG at https://react-icons.github.io/react-icons
  primaryTextColor,
  secondaryTextColor,
  backgroundPath,
  primaryFontFamily = "Hardpixel",
  secondaryFontFamily = "Raleway",
) {
  return ({
    meta: {
      name: themeName,
      icon: themeIconSvg
    },
    textColors: {
      primary: primaryTextColor,
      secondary: secondaryTextColor
    },
    fontFamily: {
      primary: primaryFontFamily,
      secondary: secondaryFontFamily,
    },
    backgroundPath
  });
}