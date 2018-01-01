var endTime;
var startTime;
var countdown;
var defaultCountdown = 1500000;
var x;
var myClock;


function updateClock(time) {
  if (countdown < 1000 || countdown > 5999000) {
    countdown = defaultCountdown;
  }

  var countdownMinutes = Math.floor(countdown / 60000);
  time = time - countdownMinutes * 60000;
  //
  var countdownSeconds = Math.floor(time / 1000);
  time = time - countdownSeconds * 1000;
  //
  countdownMinutes = ('0' + countdownMinutes).slice(-2);
  countdownSeconds = ('0' + countdownSeconds).slice(-2);

  document.getElementById('minutes').innerHTML = countdownMinutes;
  document.getElementById('seconds').innerHTML = countdownSeconds;
}
function myTimer() {
  x = document.getElementById('myAudio');
  var timeRemaining = new Date(endTime - Date.parse(new Date()));
  var min = ('0' + timeRemaining.getMinutes()).slice(-2);
  var sec = ('0' + timeRemaining.getSeconds()).slice(-2);
  if (Date.parse(timeRemaining) <= 0) {
    clearInterval(myClock);
    x.play();
  }
  console.log(min + ':', sec + '(' + Date.parse(timeRemaining) + ')');
  document.getElementById('minutes').innerHTML = min;
  document.getElementById('seconds').innerHTML = sec;
}
$(document).ready(function() {
  countdown = defaultCountdown;
  updateClock(countdown);

  $('#btnStart').click(function() {
    startTime = Date.parse(new Date());
    endTime = new Date(startTime + countdown);
    myClock = setInterval(myTimer, 500);
  });

  $('#btnMinutesUp').click(function() {
    countdown += 60000;
    updateClock(countdown);
  });
  $('#btnMinutesDown').click(function() {
    countdown -= 60000;
    updateClock(countdown);
  });
  $('#btnSecondsUp').click(function() {
    countdown += 1000;
    updateClock(countdown);
  });
  $('#btnSecondsDown').click(function() {
    countdown -= 1000;
    updateClock(countdown);
  });
  $('#btnStop').click(function() {
    x.pause();
    clearInterval(myClock);
    updateClock(countdown);
  });
});
