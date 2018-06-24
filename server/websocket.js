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

        case 'ADD_USER': {
          users.push({ name: data.name })

          ws.send(JSON.stringify({
            type: 'USERS_LIST',
            users
          }));

          broadcast({
            type: 'USERS_LIST',
            users,
          }, ws);
          break;
        }

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

        case 'UPDATE_USER_SUCCESS,':
          broadcast({
            type: 'PLAYER_UPDATED',
            user: data.user,
          }, ws);
        default:
          break;
      }
    })

    ws.on('close', () => {
      broadcast({
        type: 'USERS_LIST',
        users
      }, ws)
    })
  })
};

exports.initSockets = initSockets;
