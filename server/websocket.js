const WebSocket =  require('ws');

const initSockets = () => {
  const wss = new WebSocket.Server({ port: 8989 });

  const users = [];
  const broadcast = (data, ws) => {
    wss.clients.forEach(client => {
      if(client.readyState === WebSocket.OPEN && client !== ws) {
        client.send(JSON.stringify(data))
      }
    });
  }

  wss.on('connection', (ws) => {

    ws.on('message', (message) => {
      const data = JSON.parse(message);
      console.log(data);
      switch(data.type) {

        case 'ADD_MESSAGE':
          broadcast({
            type: 'ADD_MESSAGE',
            message: data.message,
            author: data.author,
          }, ws);

          break;
        case 'UNLOCK_PERMISSION':
          broadcast({
            type: 'RECEIVE_PERMISSION',
            permission: data.permission,
            isAvailable: data.isAvailable,
          }, ws);

          break;

        case 'PLAY_SOUND':
          broadcast({
            type: 'RECEIVE_SOUND',
            sound: data.sound,
            playerId: data.playerId,
          }, ws);

          break;

        case 'CONNECT_TO_SOCKET':
          broadcast({
            type: 'PLAYER_CONNECTED',
            user: data.user,
          }, ws);
          break;

        case 'UPDATE_USER_SUCCESS':
          broadcast({
            type: 'PLAYER_UPDATED',
            user: data.user,
          }, ws);
          break;

        case 'UNLOCK_TUTORIAL_COMPLETE':
          broadcast({
            type: 'RECEIVE_TUTORIAL_COMPLETE',
          });
          break;

        case 'RECONNECT_TO_PLAYERS':
          broadcast({
            type: 'ADMIN_RECONNECT_ATTEMPT',
          });
          break;
        default:
          break;
      }
    })

    ws.on('close', () => {
      // TODO REMOVE USER
      // broadcast({
      //   type: 'USERS_LIST',
      //   users
      // }, ws)
    })
  })
};

exports.initSockets = initSockets;
