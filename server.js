const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let users = [];

app.get('/', (req, res) => {
    res.send('<h1>Socket.io Chat Server</h1>');
});

io.on('connection', (socket) => {
    console.log('A user connected');
    let userId;

    socket.on('register', (username) => {
        userId = username;
        users.push(username);
        console.log(`${username} registered`);
        socket.emit('userList', users);
    });

    socket.on('message', (msg) => {
        io.emit('message', { userId, msg });
    });

    socket.on('skip', () => {
        console.log(`${userId} skipped`);
        socket.emit('skipped');
    });

    socket.on('disconnect', () => {
        console.log(`${userId} disconnected`);
        users = users.filter(user => user !== userId);
        io.emit('userList', users);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
