$(document).ready(function(){
    var count = 0;
    var time = 25;
    var choice = false;
    var clock;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;


    var question = ["Which Country borders Belize?",
    "What is Belize's premier tourist attraction?", "What is the population of Belize?", "What does the flag of Belize bear?", "What is the name of Belize's largest Island?",
    "What is the tallest building in Belize?"];
    var answer = ["Guatemala", "Blue Hole", "380,000", "National Coat of Arms", "Ambergris Caye", "Caana"];
    var firstChoice = ["Honduras", "Blue Hole", "180,000", "Star", "Caye Caulker", "Altun Ha"];
    var secondChoice = ["Guatemala", "Tical", "280,000", "Mayan Ruins", "Ambergris Caye", "Temple of Belize"];
    var thirdChoice = ["Costa Rica", "Arenal Volcano", "380,000", "National Coat of Arms", "Tobacco Caye", "Xunantunich"];
    var fourthChoice = ["El Salvador", "Roatan", "480,000", "Jaguar", "Long Caye", "Caana"];

    function show() {
        $("#triviaGame").show();
        $("#one").show();
        $("#two").show();
        $("#three").show();
        $("#four").show();
    }
    function hide() {
        $("#triviaGame").hide();
        $("#one").hide();
        $("#two").hide();
        $("#three").hide();
        $("#four").hide();
    }
    function hideResults() {
        $("#correct").hide();
        $("#incorrect").hide();
        $("#noAnswer").hide();
        $("#playAgain").hide();
    }
    function displayQuestion () {
        hideResults();
        $("#triviaAnswer").hide();
        $("#answerPics").hide();
        $("#gameTime").show();
        show();
        $("#triviaGame").html(question[count]);
        $("#one").html(firstChoice[count]);
        $("#two").html(secondChoice[count]);
        $("#three").html(thirdChoice[count]);
        $("#four").html(fourthChoice[count]);
    
        $("#one").hover(function() {
            $(this).css("color", "blue");
        },
        function(){
            $(this).css("color", "black");
        });
        $("#two").hover(function() {
            $(this).css("color", "blue");
        },
        function(){
            $(this).css("color", "black");
        });
        $("#three").hover(function() {
            $(this).css("color", "blue");
        },
        function(){
            $(this).css("color", "black");
        });
        $("#four").hover(function() {
            $(this).css("color", "blue");
        },
        function(){
            $(this).css("color", "black");
        });
    }
    $("#one").on("click", checkAnswer) 
    $("#two").on("click", checkAnswer)
    $("#three").on("click", checkAnswer)
    $("#four").on("click", checkAnswer)

    function checkAnswer() {

        hide();

        if($(this).text() === answer[count]) {
            stopTime();
            choice = true;
            $("#triviaAnswer").show();
            $("#triviaAnswer").html("Correct! The answer is " + answer[count]);
            displayImage();
            correct++;
            count++;
        }
        else {
            stopTime();
            choice = true;
            $("#triviaAnswer").show();
            $("#triviaAnswer").html("Incorrect! The Answer Is " + answer[count]);
            displayImage();
            incorrect++;
            count++;
        } 

        checkGameEnd();  
    }

    function checkGameEnd() {
        if(count === question.length) {
            $("#gameTime").hide();
            showResults();
            count = 0;
            $(".start").show();
            $(".start").on("click", function() {
                resetResults();
                startGame();
            });
        }
    }

    function resetTime() {
        time = 20;
    }

    function displayTime() {
        time--;
        $("#gameTime").html("Time remaining: " + time);
      
            if(time <= 0) {
                hide();
                stopTime();
                $("#triviaAnswer").show();
                $("#triviaAnswer").html("Outta Time! The Answer Is " + answer[count]);
                displayImage();
                unanswered++;
                count++;
                checkGameEnd();
            }
    }

    function startTime() {
        clearInterval(clock);
        clock = setInterval(displayTime, 1000);
    }
    function stopTime() {
        clearInterval(clock);
        resetTime();
        if(count < question.length - 1) {
            setTimeout(startTime, 2000);
            setTimeout(displayQuestion, 3000);
        }
    }

    resetTime();

    function displayImage() {
        if(count === 0) {
            $("#answerPics").show();
            $("#answerPics").html('<img src="assets/images/Guatemala.png">');
        }
        else if(count === 1) {
            $("#answerPics").show();
            $("#answerPics").html('<img src="assets/images/bluehole.jpg">');
        }
        else if(count === 2) {
            $("#answerPics").show();
            $("#answerPics").html('<img src="assets/images/pop.png">');
        }
        else if(count === 3) {
            $("#answerPics").show();
            $("#answerPics").html('<img src="assets/images/flag.png">');
        }
        else if(count === 4) {
            $("#answerPics").show();
            $("#answerPics").html('<img src="assets/images/AC.png">');
        }
        else if(count === 5) {
            $("#answerPics").show();
            $("#answerPics").html('<img src="assets/images/Caana.png">');
        }
    }
   
    function showResults() {
        $("#correct").show();
        $("#correct").html("Correct: " + correct);
        $("#incorrect").show();
        $("#incorrect").html("Incorrect: " + incorrect);
        $("#noAnswer").show();
        $("#noAnswer").html("Unanswered: " + unanswered);
        $("#playAgain").show();
        $("#playAgain").html("Click Start To Try Again");
    }

    function resetResults() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    }

    function startGame() {
        $(".start").hide();
        startTime();
        displayQuestion();
    }

  $(".start").on("click", function() {
    startGame();
  });
});