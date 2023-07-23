
const Preferences = (function() {
  // Stored Preferences
  /** @var {number} */
  let volume = 1;
  /** @var {string} */
  let theme = "cafe";

  // Methods
  function loadPreferences() {
    const preferences = JSON.parse(localStorage.getItem("preferences")) ?? {
      volume,
      theme,
    };
    volume = preferences.volume;
    theme = preferences.theme;
  }

  function savePreferences(newPreferences) {
    if (newPreferences.volume !== undefined) volume = newPreferences.volume;
    if (newPreferences.theme !== undefined) theme = newPreferences.theme;
    localStorage.setItem("preferences", JSON.stringify({
      volume: volume,
      theme: theme
    }));
  }

  loadPreferences();

  return {
    savePreferences,
    get volume() { return volume },
    get theme() { return theme; }
  };
})();
