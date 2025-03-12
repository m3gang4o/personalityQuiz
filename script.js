/* JavaScript for the Kdrama Personality Quiz */

var okayScore = 0; // Store okay score
var proposalScore = 0; // Store proposal score
var questionCount = 0; // Store the number of answers clicked

var result = document.getElementById("result"); 
var restart = document.getElementById("restart");

// Store HTML elements using the DOM
var q1a1 = document.getElementById("q1a1"); 
var q1a2 = document.getElementById("q1a2"); 

var q2a1 = document.getElementById("q2a1"); 
var q2a2 = document.getElementById("q2a2"); 

var q3a1 = document.getElementById("q3a1"); 
var q3a2 = document.getElementById("q3a2"); 

// Add event listeners for button clicks
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
  console.log("questionCount = " + questionCount + " | okayScore = " + okayScore);

  if (questionCount === 3) {
    console.log("This quiz is done!");
    updateResult(); 
  }
}

function proposal() {
  proposalScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " | proposalScore = " + proposalScore);

  if (questionCount === 3) {
    console.log("The quiz is done!");
    updateResult(); 
  }
}

function updateResult() {
  if (okayScore >= 2) {
    result.innerHTML = "You should watch <strong>It's Okay Not to Be Okay</strong>!";
  } else if (proposalScore >= 2) {
    result.innerHTML = "You should watch <strong>Business Proposal</strong>!";
  }
}

function restartQuiz() {
  result.innerHTML = "Your result is...";
  questionCount = 0;
  proposalScore = 0;
  okayScore = 0;
  console.log("Quiz restarted");

  document.querySelectorAll("button").forEach(button => {
    button.disabled = false;
  });
}
