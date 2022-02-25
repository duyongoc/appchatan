var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");


var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);


var array = []

io.on("connection", function(socket) {
    console.log("has a connection " + socket.id);

    socket.on("send_student_information", function(data) {

        array.push(new Student(data.name, data.email, data.phone));
        io.sockets.emit("server_send_list", array);
    });
});

app.get("/", function(req, res) {
    res.render("home");
});


function Student(name, email, phone) {
    this.NAME = name;
    this.EMAIL = name;
    this.PHONE = name;
}