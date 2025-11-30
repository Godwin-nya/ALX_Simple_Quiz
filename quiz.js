/* function checkAnswer() {
    let correctAnswer = "4";
    let userAnswer = document.querySelector('input[name="quiz"]:checked');

    if (userAnswer.value === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done."
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
       
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer)


 */

// Step 1: Function Declaration
function checkAnswer() {
    // Step 2: Identify the Correct Answer
    let correctAnswer = "4";

    // Step 3: Retrieve the User’s Answer
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // Step 4: Compare Answers and Display Feedback
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Step 5: Add Event Listener to the Submit Button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
