$(document).ready(function () {
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var timeLeft = 20;          //global variables used throughout the game or at the end to populate differnt DOM elements.
    var currentQuestion = 0;
    var domIntervalDisplay
    var questionTimerOut

    var answerArr = ["Butt Fumble",
        "Larry Bird played Basketball",      //answers to the question that will pop up on the screen after the answer is selected or time has run out
        "Shaq played at LSU", "Players fighting fans",
        "Players paid to hurt other teams' players",
        "Aaron Donald"];

    function timeLeftFunction() {
        timeLeft--;                 //used to keep track of time
        $("#timeLeft").html("Time remaining: " + timeLeft + " seconds");
    }

    function verdict() {
        clearInterval(domIntervalDisplay)    //function that will run whenever the answer is selected or time has run out
        clearTimeout(questionTimerOut)       //clears timeout and interval, hides the last question, populates the DOM with the verdict tab 
        $(".question" + currentQuestion).hide();        //gives the verdict tab its different attributes, resets the timeLeft variable, shows the correct answer, and runs the nextQuestion function at the end 
        $(".verdict").show();
        timeLeft = 20;
        $("#correctAnswer").html(answerArr[currentQuestion])
        $("#gif").html("<img src='assets/images/question" + currentQuestion + ".gif'>")
        currentQuestion++
        nextQuestion();
        $("#timeLeft").hide()
    }

    function nextQuestion() {
        if (currentQuestion === 6) {
            setTimeout(function () {       //this function is for verifying if the game is over or not.
                $(".verdict").hide();           //hides the verdict tab on the dom,
                $("#reset-game").show();      ////shows the reset game button, shows the results and populates the results with however many questions were right or wrong.
                $(".results").show();
                $("#correct-answers").html("Questions answered correctly: " + correct);
                $("#incorrect-answers").html("Questions answered incorrectly: " + incorrect);
                $("#unanswered-questions").html("Questions left unanswered: " + unanswered)
            }, 6000)
        }
        else {
            setTimeout(function () {
                $(".verdict").hide();       //if the game is not over it hides the verdict tab and runs the new question function
                newQuestion();
            }, 6000)
        }
    }

    function newQuestion() {
        $(".question" + currentQuestion).show()
        $(".question" + currentQuestion).css({ "width": "600px", "margin": "auto" })     //sets css to whichever question is populated so it doesn't fill the entire                 
        $("#timeLeft").show()                                                           //populates the DOM with the next question which is based on a incrementing integer,
        $("#timeLeft").html("Time remaining: 20 seconds")         //puts the timeLeft element back on the screen to be run.
        domIntervalDisplay = setInterval(timeLeftFunction, 1000);    //interval set to the timeLeft function which counts down every second per the 1000
        questionTimerOut = setTimeout(function () {                  //sets a timeout function that will run verdict and increment the unanswered variable by one if not reset
            unanswered++;
            verdict();
            $("#result").html("Too slow!");
        }, 20 * 1000)
    }

    $(".question").on("click", function (event) {
        if (event.currentTarget.id === "correct") {    //if user clicks on the correct answer the correct variable will increase by one
            correct++;               //lets user know they got the answer right
            $("#result").html("Correct!")            //runs the verdict function, which just populates the screen with the correct gif and answer
            verdict()
        }
        if (event.currentTarget.id === "incorrect") {
            incorrect++;         //same as above, but incorrect instead of correct.
            verdict()
            $("#result").html("Nope");
        }
    })

    $("#start-game").on("click", function () {
        $("#start-game").hide();   //when users press the start game button it hides itself and runs the newQuestion function to begin populating the screen
        newQuestion();
    })

    $("#reset").on("click", function (e) {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        timeLeft = 20;              //when the game is over the reset button resets the variables that have been incremented throughout the game,
        currentQuestion = 0;        // hides itself and runs the function to populate the DOM with question0 to start the game over again.
        $("#reset-game").hide();
        $(".results").hide();
        newQuestion();
    })
})