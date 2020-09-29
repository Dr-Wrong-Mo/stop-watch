let centiseconds = 0;
let thisDeciSecond = 0;
let thisSecond = 0;
let thisMinute = 0;

let timerOn = false;
let vatInt;

function reset() {

  document.getElementById("timerMinutes").innerHTML = "00";
  document.getElementById("timerSeconds").innerHTML = "00";
  document.getElementById("timerDecisecond").innerHTML = "0";
  document.getElementById("timerCentisecond").innerHTML = "0";
  window.clearInterval(varInt);

  centiseconds = 0;
  thisDeciSecond = 0;
  thisSecond = 0;
  thisMinute = 0;

  timerOn = false;
  document.getElementById("startOrStopTheWatch").innerHTML = "START";
};

function doStopWatch() {
  timerOn = !timerOn;
  if (timerOn === true) {
    varInt = window.setInterval(stopWatch, 10);
    document.getElementById("startOrStopTheWatch").innerHTML = "STOP";
  } else {
    window.clearInterval(varInt);
    document.getElementById("startOrStopTheWatch").innerHTML = "START";
  }
};

function stopWatch() {
  centiseconds++;

  if (centiseconds === 10) {
    centiseconds = 0;
    thisDeciSecond++;
  }

  if (thisDeciSecond === 10) {
    thisDeciSecond = 0;
    thisSecond++;
  };

  if (thisSecond === 60) {
    thisSecond = 0;
    thisMinute++;
  };

  if (thisSecond < 10) {
    document.getElementById("timerSeconds").innerHTML = "0" + thisSecond;
  } else {
    document.getElementById("timerSeconds").innerHTML = thisSecond;
  }

  if (thisMinute < 10) {
    document.getElementById("timerMinutes").innerHTML = "0" + thisMinute;
  } else {
    document.getElementById("timerMinutes").innerHTML = thisMinute;
  }

  document.getElementById("timerDecisecond").innerHTML = thisDeciSecond;
  document.getElementById("timerCentisecond").innerHTML = centiseconds;

};


/* KEY EVENT LISTENER */


/* Changes CSS style when key is pressed */
function onKeyPress(buttonId) {

  let elementId = document.getElementById(buttonId);
  elementId.style.backgroundColor = "rgb(189, 217, 239)";
  elementId.style.color = "hotpink";
};

/* Reverts CSS style when key is depressed */
function onKeyDepress(buttonId) {
  let elementId = document.getElementById(buttonId);
  elementId.style = "";
};

document.addEventListener('keydown', keyDownEvent);
document.addEventListener('keyup', keyUpEvent);

function keyDownEvent(e) {
  switch (e.code) {

    case "Space":
      doStopWatch();
      onKeyPress('startOrStopTheWatch');
      break;
    case "KeyR":
      reset();
      onKeyPress('resetTheWatch');
      break;

    default:
      break;
  }

};

function keyUpEvent(e) {
  switch (e.code) {

    case "Space":
      onKeyDepress('startOrStopTheWatch');
      break;
    case "KeyR":
      onKeyDepress('resetTheWatch');
      break;

    default:
      break;
  }

};