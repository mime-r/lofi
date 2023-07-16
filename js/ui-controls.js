// Define Elements and States

/** @type {HTMLDivElement} */
const togglePlayButton = document.querySelector('#toggle-play-button');
/** @type {SVGElement} */
const togglePlayIcon = togglePlayButton.firstElementChild;
/** @type {SVGElement} */
const togglePauseIcon = togglePlayButton.lastElementChild;

// Initial Setup
updateTogglePlayButton(playing);

// Register Listeners
togglePlayButton.addEventListener('click', function(e) {
  e.stopPropagation();
  controller();
});

player.addEventListener('play', function(e) {
  updateTogglePlayButton(isPlaying = true);
});

player.addEventListener('pause', function(e) {
  updateTogglePlayButton(isPlaying = false);
});

// Functions

/**
 * Updates the toggle play button icon based on player state
 * @param {boolean} isPlaying 
 */
function updateTogglePlayButton(isPlaying) {
  togglePlayIcon.style.display = isPlaying ? "none" : "block";
  togglePauseIcon.style.display = isPlaying ? "block" : "none";
}