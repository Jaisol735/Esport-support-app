window.onload = function () {
    const message = document.createElement('div');
    message.textContent = "Analyzing any Malfunction";
    message.style.position = 'absolute';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.fontSize = '20px';
    message.style.color = 'white';
    message.style.opacity = 0;
    document.body.appendChild(message);

    // Animation
    setTimeout(() => {
        message.style.transition = 'all 5s';
        message.style.opacity = 1;
        message.style.fontSize = '50px';
    }, 100);

    // Remove message after animation
    setTimeout(() => {
        message.style.opacity = 0;
    }, 5000);
}
