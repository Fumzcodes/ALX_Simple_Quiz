
function checkAnswer(){
    const correctAnswer = "4";
  
    const selectedInput = document.querySelector("[name = 'quiz']:checked");
  
  
    let userAnswer = selectedInput.value || null;
  
    const feedback = document.querySelector("#feedback");
    if(userAnswer){
      if (userAnswer === correctAnswer){
        feedback.textContent = "Correct answer";
      } else{
        feedback.textContent = "That's incorrect. retry!";
      }
    }
      
  }
  
  const submitAnswer = document.getElementById("submit-answer");
  
  submitAnswer.addEventListener("click", checkAnswer);
  