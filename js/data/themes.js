
const themes = [
  createTheme(
    themeName = "cafe",
    themeIconSvg = `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="--darkreader-inline-stroke: currentColor;" data-darkreader-inline-stroke=""><path d="M17 8h1a4 4 0 1 1 0 8h-1"></path><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path><line x1="6" x2="6" y1="2" y2="4"></line><line x1="10" x2="10" y1="2" y2="4"></line><line x1="14" x2="14" y1="2" y2="4"></line></svg>`,
    primaryTextColor = "rgb(255, 239, 183)",
    secondaryTextColor = "rgb(255, 255, 211)",
    backgroundPath = "../assets/img/backgrounds/cafe.gif"
  ),
  createTheme(
    themeName = "tropical",
    themeIconSvg = `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="--darkreader-inline-stroke: currentColor;" data-darkreader-inline-stroke=""><path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"></path><path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"></path><path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z"></path><path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"></path></svg>`,
    primaryTextColor = "#afe51f",
    secondaryTextColor = "#b4ff22",
    backgroundPath = "../assets/img/backgrounds/tropical.gif"
  ),
  createTheme(
    themeName = "halloween1",
    themeIconSvg = `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="--darkreader-inline-stroke: currentColor;" data-darkreader-inline-stroke=""><path d="M256.156 16.875c-48.954 107.457-128.398 80.9-139.312 36.97-57.82 42.426-95.53 110.673-95.53 187.56-.002 128.577 104.928 232.94 234.217 232.94 129.29 0 234.22-104.363 234.22-232.94 0-76.278-37.273-143.847-94.313-186.343-11.27 42.068-78.266 67.493-139.28-38.187zM134.686 134.53c9.528-.102 20.15 2.023 30.5 6.5 25.48 11.024 39.598 32.274 31.5 47.47-8.095 15.196-35.33 18.585-60.81 7.563-25.48-11.023-39.567-32.304-31.47-47.5 4.808-9.023 16.358-13.88 30.28-14.032zm248.97 1.19c14.907-.366 27.44 4.532 32.5 14.03 8.097 15.196-6.02 36.446-31.5 47.47-25.48 11.02-52.684 7.632-60.78-7.564-8.098-15.196 5.988-36.446 31.468-47.47 9.555-4.132 19.368-6.25 28.312-6.467zM151.75 228.562L205 316.719l54.5-77.5 40.438 80.56 65.406-89.936 34.812 69.25 73.375-62.844c-1.208 56.223-38.25 133.637-83.78 165.344l-23.344-68.03-56.125 93.186-56.467-89.656-70.094 83.594-53.25-91.72-17.407 64.344c-46.367-40.18-69.01-99.95-66.907-158.593l54.157 68.186 51.437-74.344z"></path></svg>`,
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