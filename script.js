// script.js
function sendMessage() {
    var userMessage = document.getElementById("userMessage").value;
    var chatBox = document.querySelector(".chat-box");
    var message = document.createElement("div");
    message.classList.add("message", "sent");
    message.innerHTML = "<p>" + userMessage + "</p>";
    chatBox.appendChild(message);
    document.getElementById("userMessage").value = "";

    // Simulate a response from TechGPT (you can replace this with actual API calls)
    setTimeout(function () {
        var response = document.createElement("div");
        response.classList.add("message", "received");
        response.innerHTML = "<p>Here's your answer from TechGPT.</p>";
        chatBox.appendChild(response);
    }, 1000);
}
