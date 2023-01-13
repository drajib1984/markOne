// Make a game => ask questions, make a function and arraylist of questions
// Diplay the highest score & player score

var readlineSync = require("readline-sync");

var userName = readlineSync.question("What is your name? ");
console.log("Hello "+userName+", Welcome to the QUIZ - DO YOU KNOW RAJIB!!");

var score = 0;

function checkAnswers(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer==answer){
    console.log("You are right!!");
    score+=2;
  }
  else{
    console.log("you are wrong!!");
    score--;
  }
}

var questionList = [
  {
    question : "What is Rajib's graduation year?",
    answer : 2007
  },
  {
    question : "Which College did Rajib study?",
    answer : "NIT,Agartala"
  },
  {
    question : "Where is Rajib's hometown?",
    answer : "Dharmanagar"
  },
  {
    question : "Which year Rajib was born?",
    answer : 1984
  },
  {
    question : "Which school did Rajib go?",
    answer : "Golden Valley School"
  } 
]
for(var i =0; i<questionList.length; i++){
  var currentQuestion=questionList[i];
  checkAnswers(currentQuestion.question,currentQuestion.answer);
}
console.log("Your score is: "+score);
var highestScores=[
  {
    name : "Ranjit",
    score : 10
  },{
    name : "Ananya",
    score : 9
  }
]


for(var i =0; i<highestScores.length; i++){
  var currentScorer=highestScores[i];
  console.log("The highest scorers are: "+currentScorer.name+" & score is: "+currentScorer.score);
}


