document.addEventListener("DOMContentLoaded", () => {
    const welcomeDiv = document.createElement("div");
    welcomeDiv.textContent = "Welcome";
    welcomeDiv.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.5); /* Start with small scale */
      font-size: 5rem;
      font-weight: bold;
      text-align: center;
      color: white;
      background: transperent;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      opacity: 0;
      animation: fadeInOutAndGrow 3s ease-in-out;
      z-index: 1000;
    `;
  
    document.body.appendChild(welcomeDiv);
  
    // Add fade-in, grow, and fade-out animation
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeInOutAndGrow {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
        20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(1.2); }
      }
    `;
    document.head.appendChild(style);
  
    // Remove the welcome message after 3 seconds
    setTimeout(() => {
      welcomeDiv.remove();
      document.querySelector(".wrapper").style.display = "block";
    }, 3000);
  
    // Initially hide the login form
    document.querySelector(".wrapper").style.display = "none";
  });
  