// Define Elements and States

/** @type {HTMLAudioElement} */
const player = document.getElementById('player');
/** @type {HTMLAnchorElement} */
const volumeLevel = document.getElementById('volumelevel');
/** @type {HTMLDivElement} */
const clockDisplay = document.getElementById('clockdisplay');

/** @type {HTMLDivElement} */
const controlsIcon = document.getElementById('controls-icon');
/** @type {SVGElement} */
const playIcon = document.getElementById('play-icon');
/** @type {HTMLDivElement} */
const pauseIcon = document.getElementById('pause-icon');

// Tracks whether the player has been started before
var controller_state = false;

// Check whether music is currently playing, used for the controls icon
var playing = false;

// Initial Setup
volumeLevel.innerHTML = '100%';
showTime();

/**
 * An object to help keep track of the play history
 */
const playHistory = {
  /** The current track index */
  currentIndex: -1,

  /** An overrideable function to listen for when tracks changed */
  onTracksChange: function() {},

  /** The list of tracks in the history */
  tracks: [],

  /** Adds random track onto the list of tracks */
  addRandomTrack() {
    let randomTrack = song_list[Math.floor(Math.random() * song_list.length)];
    this.tracks.push(randomTrack);
    this.onTracksChange();
  },

  /** Changes to the previous track (if any) */
  goToPrev() {
    if (this.currentIndex > 0 && this.tracks.length > 0) {
      this.currentIndex -= 1;
      this.onTracksChange();
      this.playTrack();
    }
  },

  /** Changes to the next track (if not add new track and play) */
  goToNext() {
    this.currentIndex += 1;
    if (this.currentIndex < this.tracks.length) {
      this.onTracksChange();
    } else {
      this.addRandomTrack();
    }
    this.playTrack()
  },

  /** Plays the current index track */
  playTrack() {
    player.src = this.tracks[this.currentIndex];
    player.load(); // Load the audio file without playing it

    // Wait for the audio to be ready to play
    player.addEventListener('canplaythrough', function() {
      // Start playing only when the audio is ready
      player.play().catch(function(error) {
        // Handle error, if any
        console.log('Error playing the audio:', error);
      });
    }, { once: true });
  }
};

player.addEventListener('ended', playHistory.goToNext.bind(playHistory)); // Add another song to play when current one ends

// Functions
/**
 * Update which icon should be shown or hidden based on playing
 */
function updateIconsVisibility() {
  if (!playing) {
    playIcon.classList.value = "hide";
    pauseIcon.classList.value = "show";
  } else {
    playIcon.classList.value = "show";
    pauseIcon.classList.value = "hide";
  }
}

/**
 * Starts an interval to update the clock display every 1 second
 * Calls itself
 */
function showTime() {
  var date = new Date();
  var time = formatDate(date);

  clockDisplay.innerText = time;
  clockDisplay.textContent = time;

  setTimeout(showTime, 1000);
}

/**
 * Toggles the music between playing and paused
 */
 function playpause() {
  if (player.paused) {
    player.play().catch(function(error) {
      // Handle error, if any
      console.log('Error playing the audio:', error);
    });
    playing = true;
  } else {
    player.pause();
    playing = false;
  }
  updateIconsVisibility();
}


/**
 * ???
 */
 function controller() {
  playing = !playing;
  if (!controller_state) {
    playHistory.goToNext(); // No songs initially, so add track and play it
    controller_state = true;
    playing = true;
    player.play().catch(function(error) {
      // Handle error, if any
      console.log('Error playing the audio:', error);
    });
  } else {
    playpause();
  }
  updateIconsVisibility();
}


document.onkeydown = function (e) {
  if (e.key == "ArrowUp") {
    try {
      player.volume += 0.1;
      volumeLevel.innerHTML = formatVolume(player.volume);
    } catch (e) {
      player.volume = 1;
      volumeLevel.innerHTML = formatVolume(player.volume);
    }
    console.log(player.volume);
  } else if (e.key === "ArrowDown") {
    try {
      player.volume -= 0.1;
      volumeLevel.innerHTML = formatVolume(player.volume);
    } catch (e) {
      player.volume = 0;
      volumeLevel.innerHTML = formatVolume(player.volume);
    }
    console.log(player.volume);
  } else if (e.key === "ArrowLeft") {
    playHistory.goToPrev();
  } else if (e.key === "ArrowRight") {
    playing = true; // assume that playing started because skipped to next
    playHistory.goToNext();
  }
}

document.querySelectorAll("#bottom-left .linktext").forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
