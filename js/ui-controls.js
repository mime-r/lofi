// Define Elements and States

/** @type {HTMLDivElement} */
const togglePlayButton = document.querySelector('#toggle-play-button');
/** @type {SVGElement} */
const togglePlayIcon = togglePlayButton.firstElementChild;
/** @type {SVGElement} */
const togglePauseIcon = togglePlayButton.lastElementChild;

/** @type {SVGElement} */
const skipToPrevButton = document.querySelector('#prev-button');
/** @type {SVGElement} */
const skipToNextButton = document.querySelector('#next-button');

// Initial Setup
updateTogglePlayButton(playing);
updateSkipButtons(); // ensure initial UI state is correct

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

playHistory.onTracksChange = function() {
  updateSkipButtons();
};

skipToNextButton.onclick = function(e) {
  e.stopPropagation();
  playing = true; // assume that playing started because skipped to next
  playHistory.goToNext();
};

skipToPrevButton.onclick = function(e) {
  e.stopPropagation();
  if (playHistory.currentIndex > 0) {
    playHistory.goToPrev();
  }
}

// Functions

/**
 * Updates the toggle play button icon based on player state
 * @param {boolean} isPlaying 
 */
function updateTogglePlayButton(isPlaying) {
  togglePlayIcon.style.display = isPlaying ? "none" : "block";
  togglePauseIcon.style.display = isPlaying ? "block" : "none";
}

/** Update the skip buttons disabled/enabled state */
function updateSkipButtons() {
  if (playHistory.currentIndex < 1) {
    skipToPrevButton.classList = "disabled";
  } else {
    skipToPrevButton.classList = null;
  }
}