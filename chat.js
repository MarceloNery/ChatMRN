//Faz as conexões necessárias, que devem ser nessa ordem por causa do Socket.io
var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server)
  , port = process.env.PORT || 3000;

//É a porta, nada de mais
server.listen(port, function(){
  console.log("Chat real-time...");
});
 
//Apenas chama o index.html se pedirem a url pura
app.get('/', function (req, res) {
  res.sendfile('./public/index.html');
});

// Eventos do Socket.IO
io.sockets.on('connection', function (socket) {
 
  socket.on('toServer', function (data) {
    var msg = data.nome+ ": "+data.msg+"<BR>";
    socket.emit('toClient', msg);
    socket.broadcast.emit('toClient', msg);
  });
});