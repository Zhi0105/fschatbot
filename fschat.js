(function() {

  // HANDLE SEND MESSAGE
    const handleSend = () => {
    var input = document.getElementById('chatboxInput');
    var message = input.value.trim();
    if (message) {
        var messagesContainer = document.getElementById('chatboxMessages');
        var messageElement = document.createElement('div');
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);
        input.value = '';
        // Optionally send message to a backend server here
    }
    }

    const handleMessageToggle = () => {
      const messageList = document.getElementById('chatboxMessages')
      const input = document.getElementById('inputContainer');

      if (messageList.style.display === "none") {
        messageList.style.display = "block";
        input.style.display = "block";
        chatboxContainer.style.height = '410px';
      } else {
        messageList.style.display = "none";
        input.style.display = "none";
        chatboxContainer.style.height = '50px';
      }
    }

    // Create chatbox container
    var chatboxContainer = document.createElement('div');
    chatboxContainer.id = 'chatboxContainer';
    chatboxContainer.style.position = 'fixed';
    chatboxContainer.style.bottom = '10px';
    chatboxContainer.style.right = '10px';
    chatboxContainer.style.width = '300px';
    chatboxContainer.style.height = '410px';
    chatboxContainer.style.border = '1px solid #ccc';
    chatboxContainer.style.backgroundColor = '#fff';
    chatboxContainer.style.zIndex = '1000';
    chatboxContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';

    // Add chatbox content
    var chatboxContent = `
        <div id="chatboxHead" style="justify-content: space-between; flex-direction: row; display: flex; padding: 10px; border-bottom: 1px solid #ccc; background-color: #F79F8E; cursor:pointer;">
          <strong style="color:#ffffff;">Chat with us.</strong>
        </div>
        <div id="chatboxMessages" style="padding: 10px; height: 300px; overflow-y: auto;">
            <!-- Messages will be appended here -->
        </div>
        <div id="inputContainer" style="padding: 10px; border-top: 1px solid #ccc;">
            <input type="text" id="chatboxInput" style="width: calc(100% - 50px);" placeholder="Type a message..." />
            <button id="chatboxSend" style="width: 40px;">Send</button>
        </div>
    `;
    chatboxContainer.innerHTML = chatboxContent;

    // Append chatbox to body
    document.body.appendChild(chatboxContainer);


    // INITIAL CHATBOX RENDER
    document.getElementById('chatboxMessages').style.display = 'none'
    chatboxContainer.style.height = '50px'


    // LISTENERS HANDLE SEND
    document.getElementById('chatboxSend').addEventListener('click', handleSend);
    document.getElementById('chatboxInput').addEventListener("keydown", function(evnt) { if(evnt.key === 'Enter') handleSend() });
    document.getElementById('chatboxHead').addEventListener('click', handleMessageToggle)
    

  })();

