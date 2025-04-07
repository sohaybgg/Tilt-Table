document.addEventListener("DOMContentLoaded", function () {
    console.log("Script is running...");  // Log to confirm the script runs
    
    // Check if it's not the homepage
    if (window.location.pathname !== '/index.html') {
        console.log("Not on index.html, adding message...");
        
        const message = document.createElement('pre');
        message.innerHTML = '<b>If Troubleshooting Fails Please Notify Maintenance</b>';

   // Change the style: 40% larger font size and red color
        message.style.fontSize = "140%";   // 40% larger than the default size
        message.style.color = "red";       // Set text color to red
        message.style.textAlign = "center";  // Optional: center-align the text
        message.style.marginTop = "20px";  // Optional: add margin on top of the message
        
        // Add a CSS animation for the flashing effect
        message.style.animation = "flash 1s infinite";  // Flash every 1 second indefinitely

        // Insert the message at the bottom of the body
        document.body.appendChild(message);  // Appends the message as the last child
    } else {
        console.log("On index.html, no message will be displayed.");
    }
});