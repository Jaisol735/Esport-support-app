const chatWindow = document.getElementById("chatWindow");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// Simulated bot response
function getBotResponse(message) {
  if (message.toLowerCase().includes("hello")) {
    return "Hi there! How can I assist you today?";
  }
  if (message.toLowerCase().includes("how are you")) {
    return "I'm just a bot, but I'm here to help you!";
  }
  return "I'm sorry, I didn't understand that. Can you rephrase?";
}

// Add a message to the chat
function addMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("chat-message", sender);
  messageElement.textContent = message;
  chatWindow.appendChild(messageElement);
  chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to the latest message
}

// Handle user message
sendBtn.addEventListener("click", () => {
  const message = userInput.value.trim();
  if (message) {
    addMessage(message, "user"); // Add user's message
    userInput.value = "";

    setTimeout(() => {
      const botResponse = getBotResponse(message);
      addMessage(botResponse, "bot"); // Add bot's response
    }, 500);
  }
});

// Handle "Enter" key for sending messages
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendBtn.click();
  }
});
