require('dotenv').config();

const
  express = require('express'),
  http = require('http'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  app = express(),
  router = require('./router'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  socket = require('./websocket');

socket.initSockets();

// Database Setup
mongoose.connect('mongodb://localhost:auth/dnd-assist');

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
}

// App/Middleware Setup
app.use(morgan('combined')); // Logging debugging
app.use(cors(corsOptions)) // Handles CORS
app.use(bodyParser.json({ type: '*/*' })); // Parses incoming requests as JSON

router(app);

// Server Setup
const
  port = process.env.PORT || 3090,
  server = http.createServer(app);

server.listen(port);

console.log('Server is now running and listening on port: ', port)
