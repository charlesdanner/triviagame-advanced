var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timeLeft = 20;
var currentQuestion = 0;

function timeLeftFunction() {
    timeLeft--;                 //used to keep track of time and populate the DOM
    $("#timeLeft").html("Time remaining: " + timeLeft);
}

function newQuestion(){
    setInterval(timeLeftFunction, 1000);    //interval set to the timeLeft function which counts down every second per the 1000
    $(".question" + currentQuestion).show()
}


$("#start-game").on("click", function () {
    $("#start-game").hide();
    newQuestion()
   
})

function answerSelect (){

    function verdict(){
         //clear interval
         $(".question" + currentQuestion).hide();
         $(".verdict").show();
         console.log("Chicken")
    }
    $(".question").on("click", function(event){
        console.log(event.currentTarget.id);
        if(event.currentTarget.id === "correct"){
            correct ++;
            console.log(correct)
            verdict();
            $("#result").html("Correct!")
            $("#gif").html("<img src='assets/images/question" + currentQuestion + ".gif'>")
            currentQuestion++
            newQuestion()
        }
        if(event.currentTarget.id === "incorrect"){
            incorrect++;
            verdict();
            $("#result.html").html("Nope! Maybe this gif will help you out next time!");
            $("#gif").html("<img src='assets/images/question" + currentQuestion + ".gif'>")
            currentQuestion++
            newQuestion()
        }
    })
    
}
answerSelect()