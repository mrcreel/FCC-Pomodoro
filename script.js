$(window).ready(function(){
  $("#btnStart").click(function(){
    const minutes = 25;
    const seconds = 0;

    console.log("PLLOK");

    $("#numMinutes").attr("value", minutes);
    $("#numSeconds").attr("value", seconds);

    const s = document.getElementById("numSeconds").value;
    const m = document.getElementById("numMinutes").value;
    const endTime = (s * 1000) + (m * 60 * 1000);

    var currentTime = Date.parse(new Date());
    var deadline = new Date(currentTime +endTime);
  

    function getTimeRemaining(endtime){
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor( (t/1000) % 60 );
      var minutes = Math.floor( (t/1000/60) % 60 );
      return {
        "total": t,
        "minutes": minutes,
        "seconds": seconds
      };
    }

    function initializeClock(id, endtime){
      var clock = document.getElementById(id);
      var minutesSpan = clock.querySelector(".minutes");
      var secondsSpan = clock.querySelector(".seconds");
    
      function updateClock(){
        var t = getTimeRemaining(endtime);

        minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
        secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
      
        if(t.total<=0){
          clearInterval(timeinterval);
        }
      }

      updateClock(); // run function once at first to avoid delay
      var timeinterval = setInterval(updateClock,500);

    }
  
    initializeClock("clockdiv", deadline);

  });
});
/*  
  $("#btnStart").on("click", getTimeRemaining());
    
  //m = checkTime(m);
  //s = checkTime(s);

  //var t = setTimeout(startTime, 500);

  

  function checkTime(i) {
    if (i < 10) {i = "0" + i;}  // add zero in front of numbers < 10
    return i;
  }

  function getTimeRemaining(){    
    const start = Date.parse(new Date());    
    var t = start + endTime - start;
    console.log(t);
    return t;
  }/*

    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );

    document.getElementById("startTime").innerHTML = start;
    document.getElementById("targetTime").innerHTML = end;

    return {
      "total": t,
      "days": days,
      "hours": hours,
      "minutes": minutes,
      "seconds": seconds
    };
  } 

  $(window).on("load", (startTime()));
  
}
*/