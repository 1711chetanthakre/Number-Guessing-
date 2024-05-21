// Generate a random number between 1 and 100
const answer = Math.floor(Math.random() * 100);

// Get references to HTML elements
const guessinput = document.getElementById("guessinput");
const guessubmit = document.getElementById("guessubmit");
// const Message=document.getElementById("guessattempt");

// Initialize variables
let attempt = 0;
// Function to handle guess submission
function guessbtn() {
    const userinput = parseInt(guessinput.value);
    attempt++;
    if (userinput === answer) {
        message.textContent = `Congratulation You Win Your Guess number is ${answer} And you clear ${attempt} attempt`;
        message.style.color = "Green";
    }
    else if (userinput > answer) {
        message.textContent = "Your Guess Is Very High";
        message.style.color = "red";
    }
    else {
        message.textContent = "Your Guess Is Very Low";
        message.style.color = "red"
    }
    guessinput.value = "";
}
// Event listener for guess submission

guessubmit.addEventListener('click', guessbtn);