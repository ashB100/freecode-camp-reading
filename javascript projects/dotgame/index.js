/**
 * Variables
 * Set up shared variables.
 */
var _ID = 0; // ID of created dots
var speedAmount = 10; // The speed at which dots fall, in pixels per 1s
var totalScore = 0; // initial game score


/**
 * Init Gameboard
 * Set up gameboard and define gameboard DOM selectors
 */
var gameboard = document.querySelector('.gameboard');
var gameboardHeight = gameboard.getBoundingClientRect().height;

var Game = function() {
  this.speed = 1000;
  this.container = gameboard;
  setSlider();
  addDotToBoard();
};


/**
 * setSlider
 *
 * Set the slider marker at the percentage of the slider that equates to the rate
 * at which dots fall.
 */

var setSlider = function() {

  var sliderMarker = document.querySelector('.js-slider-marker');
  var sliderLegend = document.querySelector('.js-slider-legend');

  // Set the slider marker to the location (as a percentage) on the track.
  sliderMarker.style.left = speedAmount+'%';
  // Set the text of the legend to be the speed, unitless.
  sliderLegend.innerText = speedAmount;

  // TODO — to move the marker, create a click (drag?) handler on the sliderMarker
  // then move it (in 10px increments?) and once it hits an increment (and stops?)
  // set the speedamount to the value of the new increment
}


/**
 * createDots, addDotToBoard
 *
 * Create a new dot by calling addDotToBoard once persecond (hardcoded),
 * using setInterval.
 * addDotToBoard adds a dot to the playable gameboard by
 * appending a dot to the gameboard DOM element and then
 * incrementing the ID of the dot, so it can be referenced
 * later to calculate the score.
 */

var createDots = window.setInterval(addDotToBoard, 1000);

function addDotToBoard() {
  gameboard.appendChild(new Dot({ speed: this.speed }));
  _ID += 1;
}


/**
 * Dot
 *
 * @param config
 *
 * Create the properties for an individual dot.
 * Create a div with the class of dot.
 * Set the dot's size by calling getSize for a random size between 10-100.
 * Set the dot's height and width to the size in pixels.
 * Set the top value to the negative of the dot's size, so that it
 * does not appear in the gameboard until it begins falling.
 * Set the left value of the do to a random value using getLeftRightPosition.
 * Set the duration for the dot falling animation to run, by calculating
 * the distance of the gameboard height plus 2x the dot size (so that the dot
 * will be completely off the gameboard when the animation finishes),
 * divided by how many pixels per second (the speedAmount). I think. #math.
 * Set the dot's bg-color to be a random color hex value, because why not.
 * Lastly, set the ID of each dot to the returned value of getId, iterated in createDots.
 * Then return the dot div.
 */

var Dot = function(config) {
  this.div = document.createElement('div');
  this.div.classList.add('dot');

  this.size = getSize();
  this.div.style.height = this.size + 'px';
  this.div.style.width = this.size + 'px';

  this.div.style.top = 0 - this.size + 'px';

  this.div.style.left = getLeftRightPosition(this.size) + 'px';

  // NOTES because math
  // console.log("the speed of this dot is " + config.speed);
  // console.log(gameboard.getBoundingClientRect().height);
  // animation duration = the speed in seconds it takes for a dot of Y size to travel X height
  // distance = dotsize*2 + gameboardheight
  // 10px per second 1s = distance traveled / animation duration
  // 10px per second = gameboardHeight+(this.size*2) / duration
  // 10 / 1 = 500 / x
  // (10 / 1)x = 500
  // x = 500/(10/1)
  // duration = distance / px per second
  var duration = Math.round(gameboardHeight+(this.size*2) / speedAmount);
  this.div.style.animationDuration = duration+'ms';

  // TODO I don't think this math is right — 10px per second
  // goes so fast the game is practically unplayable.
  // but I haven't figured out where I went wrong, so I left my
  // notes above, and would love to revisit later or know the
  // answer if you have it!

  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  this.div.style.backgroundColor = '#'+randomColor;

  this.div.id = getId();

  return this.div;
};


/**
 * getID
*
 * @return {Number} ID
 *
 * returns the value of the var ID and increments it
 */

var getId = function() {
  return _ID + 1;
}

/**
 * getSize
 *
 * @return {Number} num
 *
 * Generates a random number between 10 and 100.
 * Used to create the size of a dot.
 */

var getSize = function() {
  var min = 10;

  var num = Math.floor(Math.random() * 100);

  if (num < min) {
    return num + 10;
  }

  return num;
}


/**
 * getLeftRightPosition
*
 * @return {Number} firstTry
 *
 * Gets the width of the gameboard, and returns a random number
 * that is smaller than the gameboard's width.
 * Used to create the left value of a generated dot.
 *
 * TODO — some dots are still appearing partially in the gameboard
 * on the right side. Need to make sure the returned position number
 * is always gameboard width minus the size of the dot.
 */

var getLeftRightPosition = function(size) {
  var currentWidth = gameboard.getBoundingClientRect().width;
  var firstTry = Math.floor(Math.random() * currentWidth);


  if (firstTry > currentWidth) {
    return firstTry - (size * 2);
  }
  return firstTry;
};


/** calculateScore
 *
 * @param {Number} numberofPoints — the number of points a dot was worth
 *
 * Calculates the new score every time a dot is successfully clicked.
 * Sets the total score to be the existing score plus number of points passed in,
 * set to two decimal places even though this is slightly inaccurate :P
 * Then sets the innerText of the score DOM element to the new value.
 * Set an `is-updated` class on the score DOM element that fires off
 * an animation that flashes the score green to indicate to the player
 * that their score was updated.
 * Listen on the score DOM element to see if the animation has ended,
 * and then reset the score DOM element's class by removing the `is-updated` class.
 */

var calculateScore = function(numberOfPoints) {
  var scoreSelector = document.querySelector('.js-score');

  totalScore = Math.round((totalScore+numberOfPoints) * 100) / 100;
  scoreSelector.innerText = totalScore;

  scoreSelector.classList.add('is-updated');

  var resetScoreSelector = function() {
    scoreSelector.classList.remove('is-updated');
  }

  scoreSelector.addEventListener('animationend', function() {
    resetScoreSelector();
  });
}

/**
 * getPoints
 *
 * @param {String} dotID
 *
 * A function that takes the ID of a dot that was clicked,
 * finds the dot in the DOM that has the matching ID,
 * and checks to find the size (height) of that dot.
 *
 * The size of a dot correlates inversely to the number of points
 * a player gets for clicking on it, since smaller dots are
 * harder to click. If a dot is 10px, a player gets 10 points.
 * If a dot is 100px, it's worth 1 point.
 *
 * Then call calculateScore to calculate the new score.
 *
 * Once a dot has been clicked, remove that dot from the DOM.
 * After you get the points :P
 *
 * TODO — Can we know the size and ID of the dot via
 * the original Dot function and its config object,
 * instead of having to get it from the DOM again here?
 */


var getPoints = function(dotID) {

  var clickedDot = document.getElementById(dotID);
  var dotSize = clickedDot.getBoundingClientRect().height;

  // points = k/dot size, points * dot size = 100
  // points = 100/dot size
  var numberOfPoints = 100 / dotSize;

  calculateScore(numberOfPoints);

  clickedDot.remove();
}


/**
 * Gameboard Click Listener
 *
 * Listen on the gameboard element for any clicks.
 * If the element (e) that was clicked was a dot,
 * get the DOM ID of the dot that was clicked,
 * and call getPoints with that ID.
 * If the click was on an empty area of the gameboard,
 * do nothing.
 */

gameboard.addEventListener('click', function(e) {
  if (e.target && e.target.matches('.dot')) {
    var dotID = e.target.id;
    // e.target.classList.add('was--clicked');
    // TODO if you want to play an animation when the dot is clicked,
    // it has to play between the time clicked and when it's removed
    // in getPoints. How to add a delay?
    getPoints(dotID);
  } return;
});


/**
 * Run the game!
 */

Game();
