
/**
 * Generates random integer from given interval (inclusive of min and max)
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Takes a Date object and formats it as HH:MM:SS
 * @param {Date} date
 * @returns {string}
*/
function formatDate(date) {
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  // var session = "AM"; // Let's keep it at 24hrs for now
/*
  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }*/

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = h + ":" + m + ":" + s;

  return time;
}

/**
 * Takes a HTMLAudioElement's volume attribute and format it to percentage
 * @param {number} audioVolume
 * @returns {string}
 */
function formatVolume(audioVolume) {
  return Math.round(audioVolume * 100) + '%';
}

/**
 * Takes a HTML string and returns the DOM element
 * @param {String} HTML representing a single element
 * @return {Element}
 */
function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}