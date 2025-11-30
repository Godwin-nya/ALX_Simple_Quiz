/* function checkAnswer() {
    let correctAnswer = "4";
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    if (!userAnswer) {
        document.getElementById("feedback").textContent ="Please choose an answer";
        return;
    }

    if (userAnswer.value === correctAnswer) {
        document.getElementById("feedback").textContent="Correct! Well done."
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
       
}

document.getElementById("submit-answer").addEventListener("click",checkAnswer) */


function checkAnswer() {
    // 1. Correct answer
    let correctAnswer = "4";

    // 2. Get the selected radio button
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // If user didn't select anything
    if (!userAnswer) {
        document.getElementById("feedback").textContent = "Please choose an answer.";
        return;
    }

    // 3. Compare the answers
    if (userAnswer.value === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// 4. Add event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
