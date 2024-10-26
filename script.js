// script.js

// Array of questions and options
const questions = [
    {
        question: "What is the square root of a sandwich?",
        options: [36, 78, 44]
    },
    {
        question: "What is the best way to turn off the sun?",
        options: ["Pour water", "Call Tech Support", "Unplug the Sun"]
    },
    {
        question: "Fish is always in water,so why does it bad smell",
        options: ["Water Doesn't Mean Soap" , "They Forget to Use Fishy Deodorant ","Underwater Gym Sessions"]
    },
    {
        question: "Why do dogs chase their tails?",
        options: ["Training for the Dog Olympics.", "Their tail looks suspicious.", "It's a built-in workout!"]
    },
    {
    
        question: "What is the first letter in word Apple?",
        options: ["C","Z", "B"]
    },
    {
    
        question: "What color is a penguins favorite music?",
        options: ["jazz","purple", "croissant"]
    },
];

// Function to load a random question
function loadRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const selectedQuestion = questions[randomIndex];

    // Update the question text
    document.getElementById('question').innerText = selectedQuestion.question;

    // Get the options container
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = ''; // Clear existing options

    // Add new buttons for options
    selectedQuestion.options.forEach(option => {
        const button = document.createElement('a');
        button.href = "oops.html"; // Set the link for the button
        button.className = 'start-button';
        button.innerText = option; // Set button text
        optionsContainer.appendChild(button); // Add button to container
    });
}

// Load a random question when the page loads
window.onload = loadRandomQuestion;
