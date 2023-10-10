function sendMessage() {
    var userMessage = document.getElementById("userMessage").value;
    var chatBox = document.querySelector(".chat-box");
    var message = document.createElement("div");
    message.classList.add("message", "sent");
    message.innerHTML = "<p>" + userMessage + "</p>";
    chatBox.appendChild(message);
    document.getElementById("userMessage").value = "";
  
    fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        max_tokens: 50,
        n: 1,
        stop: '\n',
        messages: [{ "role": "user", "content": userMessage }]
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('API Response:', data); // Log the API response for troubleshooting
      if (data.choices && data.choices.length > 0) {
        var responseMessage = data.choices[0].message.content;
        var response = document.createElement("div");
        response.classList.add("message", "received");
        response.innerHTML = "<p>" + responseMessage + "</p>";
        chatBox.appendChild(response);
      } else if (data.error) {
        console.error('API Error:', data.error.message);
      } else {
        console.error('Error: Invalid API response', data);
      }
    })
    .catch(error => {
      console.error('Fetch Error:', error);
    });
  }
  