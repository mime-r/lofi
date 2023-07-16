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
player.addEventListener('ended', play_music); // Add another song to play when current one ends
// Remove the line below to prevent autoplay
// play_music(); // Start playing a random song

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
 * Plays a random song from the song list
 * @see {@link song_list}
 */
 function play_music() {
  /** @type {string} */
  let random_song = song_list[Math.floor(Math.random() * song_list.length)];
  player.src = random_song;
  player.load(); // Load the audio file without playing it
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
    play_music();
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
  e = e || window.event;
  if (e.keyCode == '38') {
    try {
      player.volume += 0.1;
      volumeLevel.innerHTML = formatVolume(player.volume);
    } catch (e) {
      player.volume = 1;
      volumeLevel.innerHTML = formatVolume(player.volume);
    }
    console.log(player.volume);
  } else if (e.keyCode == '40') {
    try {
      player.volume -= 0.1;
      volumeLevel.innerHTML = formatVolume(player.volume);
    } catch (e) {
      player.volume = 0;
      volumeLevel.innerHTML = formatVolume(player.volume);
    }
    console.log(player.volume);
  }
}

document.querySelectorAll("#bottom-left .linktext").forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
