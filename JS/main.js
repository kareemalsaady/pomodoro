
$(document).ready(function(){
  var buzzer = $("#buzzer")[0];
  var sessionCount = parseInt($("#minutesSession").html());
  var breakCount = parseInt($("#minutesBreak").html());


  $("#reset").hide();

  $("#minus5Clock").click(function(){
    if(sessionCount>1){
    sessionCount -= 1;
    $("#minutesSession").html(sessionCount);
    }
    });

  $("#add5Clock").click(function(){
    sessionCount += 1;
    $("#minutesSession").html(sessionCount);
    });

  $("#minus5Break").click(function(){
    if(breakCount>1){
    breakCount -= 1;
    $("#minutesBreak").html(breakCount);
    }
    });

  $("#add5Break").click(function(){
    breakCount += 1;
    $("#minutesBreak").html(breakCount);
    });

    $("#start").click(function(){
      $("#minutesSession").css("color", "green")
      var counter= setInterval(timer, 1000);
      sessionCount = sessionCount * 60;
        function timer(){
          $("#start, #add5Clock, #minus5Clock, #minutesBreak, #minus5Break, #add5Break, #title1, #title2").hide();
          $("#timeType").show();
          $("#timeType").html("Session Time:")
          sessionCount -= 1;

          if(sessionCount===0){
            buzzer.play();
            clearInterval(counter);
            var startBreak = setInterval(breakTimer, 1000);
            breakCount = breakCount * 60;
            $("#minutesSession").hide();
          }
          if(sessionCount%60>=10){
              $("#minutesSession").html(Math.floor(sessionCount/60)+":"+sessionCount%60);
          }
          else{
            $("#minutesSession").html(Math.floor(sessionCount/60)+":"+"0"+sessionCount%60);
          }


            function breakTimer(){
              $("#timeType").html("Break Time:");
              $("#minutesBreak").show();
              breakCount -= 1;

              if(breakCount===0){
                buzzer.play();
                clearInterval(startBreak);
                $("#reset").show();
                $("#timeType, #minutesBreak").hide();

              }
              if(breakCount%60>=10){
                  $("#minutesBreak").html(Math.floor(breakCount/60)+":"+breakCount%60);
              }
              else{
                $("#minutesBreak").html(Math.floor(breakCount/60)+":"+"0"+breakCount%60);
              }
              }
          }


    $("#reset").click(function(){
      $("#reset").hide();
      var sessionCount = 25;
      var breakCount = 5;
      $("#minutesSession").html(sessionCount);
      $("#minutesBreak").html(breakCount);
      $("#start, #minutesSession, #add5Clock, #minus5Clock, #minutesBreak, #minus5Break, #add5Break, #title1, #title2").show();
      });

    });



});
