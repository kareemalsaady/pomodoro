

$(document).ready(function(){

    $("#reset, #stop").hide();

    var sessionClock = parseInt($("#minutesSession").html());
    var breakClock = parseInt($("#minutesBreak").html());

    // increase or decrease session time.
    $("#minus5Clock").click(function(){
      if (sessionClock>1) {
        sessionClock -= 1;
        $("#minutesSession").html(sessionClock);
        }
    });

    $("#add5Clock").click(function(){
      if (sessionClock>0) {
        sessionClock += 1;
        $("#minutesSession").html(sessionClock);
      }
    });

      // increase or decrease breaktime.
    $("#minus5Break").click(function(){
      if (breakClock>1) {
        breakClock -= 1;
        $("#minutesBreak").html(breakClock);
        }
    });

    $("#add5Break").click(function(){
      if (breakClock>0) {
        breakClock += 1;
        $("#minutesBreak").html(breakClock);
        }
    });


    //Count Down Timer

    $("#start").click(function(){

      sessionClock = sessionClock * 60;
      $("#reset").show();
      $("#add5Clock, #minus5Clock, #add5Break, #minus5Break, #start, #minutesBreak, #title2").hide();
      var timer = setInterval(sessionTimer, 1000);
      function sessionTimer() {
        sessionClock -=1;
        if(sessionClock%60>=10){
            $("#minutesSession").html(Math.floor(sessionClock/60)+":"+sessionClock%60);
        }
        else{
          $("#minutesSession").html(Math.floor(sessionClock/60)+":"+"0"+sessionClock%60);
        }

      if (sessionClock===0) {
          breakClock = breakClock * 60;
          clearInterval(timer);
          $("#minutesBreak, #title2").show();
          $("#minutesSession, #title1").hide();
          var bTimer = setInterval(breakTimer, 1000);
          function breakTimer(){
          breakClock -=1;
          if(breakClock%60>=10){
              $("#minutesBreak").html(Math.floor(breakClock/60)+":"+breakClock%60);
          }
          else{
            $("#minutesBreak").html(Math.floor(breakClock/60)+":"+"0"+breakClock%60);
          }
            if (breakClock===0) {
              clearInterval(bTimer);
              $("#stop").hide();
            }
          }
        }
      }



      // reset function
      $("#reset").click(function(){
        location.reload();
      });

    });


});
