var socket = io();

/**
 * "ngx-socket-io" IS THE RECOMMENDED PACKAGE TO HANDLE SOCKETS IN ANGULAR
 * https://www.digitalocean.com/community/tutorials/angular-socket-io SEE THIS LINK FOR MORE INFO
 */


socket.on('disconnect', () => {
  /**
   * EXECUTE DISCONNECTION LOGIC IN A FUNCTION LIKE THIS
   */
  console.log('Disconnected fron socket server')
});

socket.on('sendmessage', (response) => {
  /**
   * LISTENER OF MESSAGES, REQUIRED FUNCTION LIKE THIS
   */
  console.log('Message: ', response);
});


function join () {
  // join private chat
  // chat_id is user_messages_id from user_messages table in postgres
  /**
   * EXECUTE A FUNCTION LIKE THIS WHEN ENTERING A CHAT
   * user_id and chat_id must be programatically changed
   */
  socket.emit('privatechatroom', {chat_id: 2, user_id: 4});
}

function send() {
  /**
   * EXECUTE A FUNCTION LIKE THIS WHEN SENDING A MESSAGE
   * user_id and chat_id must be programatically changed
   */
  const value = document.getElementById('test').value;
  socket.emit('sendmessage', {
    message: value,
    chat_id: 2,
    user_id: 4
  })
}