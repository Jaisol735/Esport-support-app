<script>
        document.addEventListener("DOMContentLoaded", () => {
    const messages = [
        "Loading all accounts",
        "Matching and connecting to Ranks, Overlay, and Stats of all accounts",
        "Analyzing last 10 Matches"
    ];

    let index = 0;

    // Create and show the loading message one by one
    function showMessage() {
        if (index < messages.length) {
            const welcomeDiv = document.createElement("div");
            welcomeDiv.textContent = messages[index];
            welcomeDiv.classList.add("loading-message");
            document.body.appendChild(welcomeDiv);

            // Remove the message after animation
            setTimeout(() => {
                welcomeDiv.remove();
                index++;
                if (index < messages.length) {
                    showMessage(); // Continue showing next message
                } else {
                    // After all messages, show the content
                    document.querySelector(".Gameload").style.display = "block";
                    document.querySelector(".upper-div").style.display = "flex";
                    document.querySelector(".lower-div").style.display = "flex";
                }
            }, 3000);
        }
    }

    // Initially hide the content and show loading messages
    showMessage();
    document.querySelector(".Gameload").style.display = "none";
});

    </script>