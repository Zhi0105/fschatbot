  // (function() {

  //   // HANDLE SEND MESSAGE
  //     const handleSend = () => {
  //     var input = document.getElementById('chatboxInput');
  //     var message = input.value.trim();

  //     var messageContent = `
  //       <div class="message" style="display:flex; flex-direction: row-reverse; margin-bottom:10px;">
  //         <div style="background-color: #e1e1e1; border-bottom-right-radius: 0; padding: .5rem; border-radius:20%">
  //           <p style="font-size: 15px;">${message}</p>
  //         </div>
  //       </div>
  //     `

  //     if (message) {
  //         var messagesContainer = document.getElementById('chatboxMessages');
  //         var messageElement = document.createElement('div');
  //         messageElement.innerHTML = messageContent;
  //         messagesContainer.appendChild(messageElement);
  //         messagesContainer.scrollTop = messagesContainer.scrollHeight;
  //         input.value = '';
  //         // Optionally send message to a backend server here
  //     }
  //     }

  //     const handleMessageToggle = () => { 
  //       const messageList = document.getElementById('chatboxMessages')
  //       const input = document.getElementById('inputContainer');

  //       if (messageList.style.display === "none") {
  //         messageList.style.display = "block";
  //         input.style.display = "block";
  //         chatboxContainer.style.height = '410px';
  //       } else {
  //         messageList.style.display = "none";
  //         input.style.display = "none";
  //         chatboxContainer.style.height = '50px';
  //       }
  //     }

  //     // Create chatbox container
  //     var chatboxContainer = document.createElement('div');
  //     chatboxContainer.id = 'chatboxContainer';
  //     chatboxContainer.style.position = 'fixed';
  //     chatboxContainer.style.bottom = '10px';
  //     chatboxContainer.style.right = '10px';
  //     chatboxContainer.style.width = '300px';
  //     chatboxContainer.style.height = '410px';
  //     chatboxContainer.style.border = '1px solid #ccc';
  //     chatboxContainer.style.backgroundColor = '#fff';
  //     chatboxContainer.style.zIndex = '1000';
  //     chatboxContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';

  //     // Add chatbox content
  //     var chatboxContent = `
  //         <div id="chatboxHead" style="justify-content: space-between; flex-direction: row; display: flex; padding: 10px 5px 10px 5px; border-bottom: 1px solid #ccc; background-color: #F79F8E; cursor:pointer;">
  //           <div style="display:flex;">
  //             <img src="https://play-lh.googleusercontent.com/t7m0uCLs4-RevjhBwRxfJLU5vQKQ-PW8SmUxsi2Z8W5GK9W3qsAfnkaukgxUx8hzQ0Y=w240-h480" alt="App icon" style="height: 20px; margin-right: 10px; margin-left: 10px; border-radius: 20%;">  
  //             <strong style="color:#ffffff;">Chat with us.</strong>
  //           </div>
            
  //           <svg id="chevron-down" style="display:block; color:#ffffff; font-weight: bold; margin-right:10px;" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
  //             <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  //           </svg>

  //           <svg id="chevron-up" style="display: none; color:#ffffff; font-weight: bold;" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
  //             <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
  //           </svg>

  //         </div>
  //         <div id="chatboxMessages" style="display:flex; flex-direction: column; padding: 10px; height: 300px; overflow-y: auto;">
  //             <!-- Messages will be appended here -->
  //         </div>
  //         <div id="inputContainer" style="justify-content: space-between; flex-direction: row; display: flex; padding: 10px; border-top: 1px solid #ccc;">
  //           <input type="text" id="chatboxInput" style="width: calc(100% - 50px);" placeholder="Type a message..." />
  //             <button id="chatboxSend" style="margin: 0px 0px 0px 10px; padding:5px; border-radius: 50%; height: 30px; width: 30px; background-color: #F79F8E; color: white;">
  //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  //                 <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
  //               </svg>
  //             </button>
  //         </div>
  //     `;
  //     chatboxContainer.innerHTML = chatboxContent;

  //     // Append chatbox to body
  //     document.body.appendChild(chatboxContainer);


  //     // INITIAL CHATBOX RENDER
  //     document.getElementById('chatboxMessages').style.display = 'none'
  //     chatboxContainer.style.height = '50px'


  //     // LISTENERS HANDLE SEND
  //     document.getElementById('chatboxSend').addEventListener('click', handleSend);
  //     document.getElementById('chatboxInput').addEventListener("keydown", function(evnt) { if(evnt.key === 'Enter') handleSend() });
  //     document.getElementById('chatboxHead').addEventListener('click', handleMessageToggle)
      

  //   })();

