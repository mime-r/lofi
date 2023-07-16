
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