const validUserId = "arslaan"; // Change to your desired user ID
const validPassword = "123"; // Change to your desired password

function login() {
    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    const videoContainer = document.getElementById("video-container");

    if (userId === validUserId && password === validPassword) {
        // Redirect to the app store page (you can change the path as necessary)
        window.location.href = 'appstore.html';
    } else {
        // Show error message and video on failed login
        errorMessage.innerText = "Invalid User ID or Password. Please try again.";
        videoContainer.classList.remove("hidden");
    }
}
