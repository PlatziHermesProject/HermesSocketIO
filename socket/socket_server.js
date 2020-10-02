const { io } = require('./../index');
const messagesStorage = require('../storage/messages');

async function sendMessagePg(data) {
  /**
   * function to save message in DB
   */
  try{
    if (data.message !== 'you are online') {
      const rta = await messagesStorage.setMessage(data.message, Date.now(), data.chat_id, data.user_id);
      return rta
    }
  }catch (error) {
    return error;
  }
}

io.on('connection', (client) => {

  let previousChatId;

  client.on('disconnect', () => {
    client.leave(previousChatId);
  });

  client.on('sendmessage', async (data, cb) => {
    client.to(data.chat_id).emit('sendmessage', data.message);
    const message = await sendMessagePg(data);
    console.log(message);
  });

  client.on('privatechatroom', (data, callback) => {
    if (previousChatId) client.leave(previousChatId);
    client.join(data.chat_id);
    previousChatId = data.chat_id;
    client.emit('sendmessage', {
      message: 'you are online',
      chat_id: data.chat_id,
      user_id: data.user_id
    });
  });
});
