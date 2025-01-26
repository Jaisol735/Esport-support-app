document.addEventListener("DOMContentLoaded", () => {
    // Add a click event listener to all anchor tags
    document.querySelectorAll("a").forEach(anchor => {
      anchor.addEventListener("click", event => {
        event.preventDefault(); // Prevent immediate navigation
        
        const targetUrl = anchor.getAttribute("href"); // Get the href of the anchor
  
        // Create the overlay animation element
        const overlay = document.createElement("div");
        overlay.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: black;
          opacity: 0;
          z-index: 9999;
          transition: opacity 0.5s ease-in-out;
        `;
        document.body.appendChild(overlay);
  
        // Start the animation
        requestAnimationFrame(() => {
          overlay.style.opacity = "1"; // Fade in
        });
  
        // Navigate to the target URL after the animation
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 500); // Delay matches the animation duration
      });
    });
  });
  