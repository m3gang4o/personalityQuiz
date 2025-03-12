/*Add your JavaScript here*/

var okayScore = 0; //Store okay score 
var proposalScore = 0; //Store proposal score

//Store the # of answers clicked on
var questionCount = 0;

var result = document.getElementById("result"); 
var restart = document.getElementById("restart");

//Store HTML elements using the DOM
var q1a1 = document.getElementById("q1a1"); 
var q1a2 = document.getElementById("q1a2"); 

var q2a1 = document.getElementById("q2a1"); 
var q2a2 = document.getElementById("q2a2"); 

var q3a1 = document.getElementById("q3a1"); 
var q3a2 = document.getElementById("q3a2"); 

//listen for click on answer buttons and call functions if clicked 
q1a1.addEventListener("click", okay); 
q1a2.addEventListener("click", proposal); 

q2a1.addEventListener("click", okay); 
q2a2.addEventListener("click", proposal); 

q3a1.addEventListener("click", okay); 
q3a2.addEventListener("click", proposal);

restart.addEventListener("click", restartQuiz);

function okay() {
  okayScore += 1; 
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "okayScore = " + okayScore);

  if(questionCount == 3) {
    console.log("This quiz is done!");
    updateResult(); 
  }

}

function restartQuiz() {
  result.innerHTML = "You are a...";
  questionCount = 0;
  proposalScore = 0;
  okayScore = 0;
  console.log(questionCount + proposalScore + okatScore);
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
}



function proposal() {
  proposalScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "proposalScore = " + proposalScore);

  if(questionCount == 3) {
    console.log("The quiz is done!")
    updateResult(); 
  }

}

function updateResult() {
  
  if (okayScore >= 2){
    result.innerHTML = "You should watch It's Okay Not to Be Okay!"; 
    console.log("You should watch It's Okay Not to Be Okay!"); 
  } else if(proposalScore >= 2) {
    result.innerHTML = "You should watch Buisness Proposal!"; 
    console.log("You should watch Buisness Proposal!"); 
  }


 
  
  
}
