document.addEventListener("DOMContentLoaded", function () {
    const wheel = document.getElementById("wheel");
    const spinButton = document.getElementById("spinButton");
    const popup = document.getElementById("popup");
    const popupTask = document.getElementById("popupTask");
    const closePopup = document.getElementById("closePopup");

    // List of tasks or segments for the wheel
    const tasks = [
        "Catch the wind",
        "Teach a fish to swim",
        "Be invisible!",
        "Fly a kite on mars",
        "Travel to the moon on a paper plane",
        "Count the stars",
        "Hug the cloud",
        "Touch the rainbow",
    ];

    spinButton.addEventListener("click", () => {
        // Calculate a random degree of rotation between 500 and 5000 degrees
        const randomDegree = Math.floor(Math.random() * 5000) + 500;
        
        // Apply rotation to the wheel
        wheel.style.transition = "transform 4s ease-out"; // Smooth spin effect
        wheel.style.transform = `rotate(${randomDegree}deg)`;
        
        // Calculate the selected task
        setTimeout(() => {
            const taskIndex = Math.floor(Math.random() * tasks.length);
            popupTask.textContent = tasks[taskIndex];
            popup.style.display = "block"; // Show popup
        }, 4000); // Delay matches the spin duration (4 seconds)
    });

    closePopup.addEventListener("click", () => {
        popup.style.display = "none"; // Close popup
    });
});
