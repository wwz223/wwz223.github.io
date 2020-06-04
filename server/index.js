var ws = require("nodejs-websocket")
 
const PORT = 3000;

// 每进来一个客户端就记录一下
var clientCount = 0;
 
var server = ws.createServer(function(conn) {
    console.log("New connection")
    clientCount++;
    conn.nickname = 'user' + clientCount;
    let mes = {};
    mes.type = "enter";
    mes.data = conn.nickname + ' comes in'
    broadcast(JSON.stringify(mes));
    conn.on("text", function(str) {
        console.log("Received " + str);
        let mes = {};
        mes.type = "message";
        mes.data = conn.nickname + ' says: ' + str;
        broadcast(JSON.stringify(mes));
    })
    conn.on("close", function(code, reason) {
        console.log("Connection closed");
        let mes = {};
        mes.type = "leave";
        mes.data = conn.nickname + ' left'
        broadcast(JSON.stringify(mes));
    })
    conn.on("error", function(err) {
        console.log("handle err");
        console.log(err);
    })
}).listen(PORT);
 
console.log("websocket server running on port: " + PORT);
 
function broadcast(str) {
    server.connections.forEach(function(connection) {
        connection.sendText(str);
    })
}