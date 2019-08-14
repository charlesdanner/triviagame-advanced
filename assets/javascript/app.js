$(document).ready(function () {
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var timeLeft = 20;
    var currentQuestion = 0;
    var domIntervalDisplay
    var questionTimerOut

    function timeLeftFunction() {
        timeLeft--;                 //used to keep track of time and populate the DOM
        $("#timeLeft").html("Time remaining: " + timeLeft);
    }

    function verdict() {
        clearInterval(domIntervalDisplay)
        clearTimeout(questionTimerOut)
        $(".question" + currentQuestion).hide();
        $(".verdict").show();
        timeLeft = 20;

    }

    function nextQuestion() {
        if (currentQuestion === 6) {
            setTimeout(function () {
                $(".verdict").hide();
                $("#reset-game").show();
                $(".results").show();
                $("#correct-answers").html("You answered " + correct + " answers correctly");
                $("#incorrect-answers").html("You answered " + incorrect + " answers incorrectly");
                $("#unanswered-questions").html("You did not answer " + unanswered + " questions in time")
            }, 6000)
        }
        else {
            setTimeout(function () {
                $(".verdict").hide();
                newQuestion();
            }, 6000)
        }
    }

    function newQuestion() {
        $(".question" + currentQuestion).show()
        domIntervalDisplay = setInterval(timeLeftFunction, 1000);    //interval set to the timeLeft function which counts down every second per the 1000
        questionTimerOut = setTimeout(function () {
            unanswered++;
            verdict();
            $("#result").html("Too slow!");
            $("#gif").html("<img src='assets/images/question" + currentQuestion + ".gif'>")
            currentQuestion++
            nextQuestion()
        }, 21 * 1000)
    }


    $("#start-game").on("click", function () {

        function answerSelect() {

            $(".question" + currentQuestion).show()

            $(".question").on("click", function (event) {
                if (event.currentTarget.id === "correct") {

                    correct++;
                    verdict();
                    $("#result").html("Correct!")
                    $("#gif").html("<img src='assets/images/question" + currentQuestion + ".gif'>")
                    currentQuestion++
                    nextQuestion();

                }
                if (event.currentTarget.id === "incorrect") {

                    incorrect++;
                    verdict();
                    $("#result").html("Nope! Maybe this gif will help you for out next time!");
                    $("#gif").html("<img src='assets/images/question" + currentQuestion + ".gif'>")
                    currentQuestion++
                    nextQuestion();

                }
            })

        }
        $("#start-game").hide();
        //interval set to the timeLeft function which counts down every second per the 1000
        answerSelect();
        newQuestion();

    })

})
