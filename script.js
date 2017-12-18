var ele = "";
var elezIndex = 0;
/*  var myVar =  */ setInterval(myTimer, 1000);

function myTimer() {
  // var minTensZindex = parseInt(document.getElementById("minTens0").style.zIndex);
  
  var secondsOnes;
  var secondsTens = [];
  var minutesOnes = [];
  // var minutesTens = [];
  
  secondsOnes = decrementPaper("seconds-ones");

  var secOneZindex = parseInt(document.getElementById("secOnes9").style.zIndex);
  if (secOneZindex === secondsOnes.length-1) {
    secondsTens = decrementPaper("seconds-tens");
  }
  var secTenZindex = parseInt(document.getElementById("secTens5").style.zIndex);
  if (secTenZindex === secondsTens.length-1) {
    minutesOnes = decrementPaper("minutes-ones");
  }
  var minOneZindex = parseInt(document.getElementById("minOnes9").style.zIndex);
  if (minOneZindex === minutesOnes.length-1) {
    decrementPaper("minutes-tens");
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
$(document).ready(function() {


  

});