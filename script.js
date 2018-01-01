/* 
var ele = "";
var elezIndex = 0;
var myVar =  setInterval(myTimer, 1000); 
*/

function updateClock(time) {
  console.log(time);
  var countdownMinutesTens = Math.floor(time / 600000);
  time = time - (countdownMinutesTens * 600000);
  /* */
  var countdownMinutesOnes = Math.floor((time / 60000));
  time = time - (countdownMinutesOnes * 60000);
  /* */
  var countdownSecondsTens = Math.floor(time / 10000);
  time = time - (countdownSecondsTens * 10000);
  /* */
  var countdownSecondsOnes = Math.floor(time / 1000);
  time = time - (countdownSecondsOnes * 1000);
  /**/
  document.getElementById("minutesTens").innerHTML = countdownMinutesTens;
  document.getElementById("minutesOnes").innerHTML = countdownMinutesOnes;
  document.getElementById("secondsTens").innerHTML = countdownSecondsTens;
  document.getElementById("secondsOnes").innerHTML = countdownSecondsOnes;
}

function myTimer() {
  // var minTensZindex = parseInt(document.getElementById("minTens0").style.zIndex);

  secondsOnes = decrementPaper("seconds-ones");

  var secOneZindex = parseInt(document.getElementById("secOnes9").style.zIndex);
  if (secOneZindex === secondsOnes.length - 1) {
    secondsTens = decrementPaper("seconds-tens");
  }
  /* */
  var minTenZindex = parseInt(document.getElementById("minTens0").style.zIndex);
  var minOneZindex = parseInt(document.getElementById("minOnes9").style.zIndex);
  var secTenZindex = parseInt(document.getElementById("secTens5").style.zIndex);
  /* */
  if (minOneZindex !== 8) {
    if (secTenZindex === secondsTens.length - 1) {
      minutesOnes = decrementPaper("minutes-ones");
    }
  }
  /* */
  if (minTenZindex !== 5) {
    if (minOneZindex === minutesOnes.length - 1) {
      decrementPaper("minutes-tens");
    }
  }
}

function decrementPaper(cls) {
  var arrCls = document.getElementsByClassName(cls);

  for (var i = 0; i < arrCls.length; i++) {
    ele = arrCls[i];
    elezIndex = parseInt(ele.style.zIndex);
    if (elezIndex === arrCls.length - 1) {
      elezIndex = 0;
      ele.style.zIndex = elezIndex;
    } else {
      elezIndex++;
      ele.style.zIndex = elezIndex;
    }
  }
  return arrCls;
}
$(document).ready(function () {
  var defaultCountdown = 2115000;
  var countdown = defaultCountdown;

  updateClock(countdown);
  $("#btnStart").click(function () {
    var currentTimeId = Date.parse(new Date());
    setInterval(myTimer, 500);
  });

  $("#btnMinutesUp").click(function () {
    countdown += 60000;
    updateClock(countdown);
  });
  $("#btnMinutesDown").click(function () {
    countdown -= 60000;
    if (countdown > 0) {
      updateClock(countdown);
    } else {
      countdown = defaultCountdown;
      updateClock(countdown);
    }
  });
  $("#btnSecondsUp").click(function () {
    countdown += 1000;
    updateClock(countdown);
  });
  $("#btnSecondsDown").click(function () {
    countdown -= 1000;
    if (countdown > 0) {
      updateClock(countdown);
    } else {
      countdown = defaultCountdown;
      updateClock(countdown);
    }
  });




});